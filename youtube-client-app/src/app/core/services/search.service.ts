import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { concatAll, find, map, Observable, switchMap, take } from 'rxjs';
import { SearchResponse } from '../components/search/search-response.model';
import {
  ResultsItem,
  VideosResponse,
} from '../../youtube/components/results/results-item/results-item.model';
import { MAX_RESULTS } from '../consts';

@Injectable()
export class SearchService {
  results$!: Observable<ResultsItem[]>;

  constructor(private readonly http: HttpClient) {}

  search(searchTerm: string): void {
    const httpParams = {
      q: searchTerm,
      maxResults: MAX_RESULTS,
    };
    const params = new HttpParams({
      fromObject: httpParams,
    });
    this.results$ = this.http.get<SearchResponse>('/search', { params }).pipe(
      map((data) => data.items),
      map((items) =>
        items.filter((item) => item.id.videoId).map((item) => item.id.videoId)
      ),
      switchMap((ids) => this.getInfoByIds(ids))
    );
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
    if (this.results$)
      return this.results$.pipe(
        concatAll(),
        find((item) => item.id === id)
      );
    return this.getInfoByIds([id]).pipe(concatAll(), take(1));
  }

  get response$(): Observable<ResultsItem[]> {
    return this.results$;
  }
}
