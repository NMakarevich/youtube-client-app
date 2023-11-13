import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { concatAll, map, Observable, of, switchMap, take } from 'rxjs';
import { Store } from '@ngrx/store';
import { SearchResponse } from '../components/search/search-response.model';
import {
  ResultsItem,
  VideosResponse,
} from '../../youtube/components/results/results-item/results-item.model';
import { MAX_RESULTS } from '../consts';
import {
  nextYoutubeSearchPage,
  prevYoutubePage,
  storePageTokens,
} from '../../redux/actions/youtube.action';
import { selectAllCards } from '../../redux/selectors/all-cards.selector';

@Injectable()
export class SearchService {
  searchTerm = '';

  constructor(
    private readonly http: HttpClient,
    private readonly store: Store
  ) {}

  search(searchTerm: string, pageToken = '') {
    this.searchTerm = searchTerm;

    const httpParams: { [p: string]: string | number } = {
      q: searchTerm,
      maxResults: MAX_RESULTS,
      type: 'video',
    };
    if (pageToken) httpParams['pageToken'] = pageToken;
    const params = new HttpParams({
      fromObject: httpParams,
    });
    return this.http.get<SearchResponse>('/search', { params }).pipe(
      map((data) => {
        const { nextPageToken = '', prevPageToken = '' } = data;
        this.store.dispatch(storePageTokens({ nextPageToken, prevPageToken }));
        return data.items;
      }),
      map((items) => items.map((item) => item.id.videoId)),
      switchMap((ids) => this.getInfoByIds(ids))
    );
  }

  prevPage(): void {
    this.store.dispatch(prevYoutubePage());
  }

  nextPage(): void {
    this.store.dispatch(nextYoutubeSearchPage());
  }

  getInfoByIds(ids: string[]): Observable<ResultsItem[]> {
    const parts = ['snippet', 'statistics'];
    const httpParams = {
      part: parts,
      id: ids,
    };
    const params = new HttpParams({ fromObject: httpParams });
    return this.http
      .get<VideosResponse>('/videos', { params })
      .pipe(map((data) => data.items));
  }

  getVideoById(id: string) {
    return this.results$.pipe(
      map((results) => results.find((result) => result.id === id)),
      switchMap((item) => {
        if (item) return of(item);
        if (id.startsWith('custom')) return of(undefined);
        return this.getInfoByIds([id]).pipe(concatAll(), take(1));
      })
    );
  }

  get results$() {
    return this.store.select(selectAllCards);
  }
}
