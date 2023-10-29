import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map, Observable, switchMap } from 'rxjs';
import { SearchResponse } from '../components/search/search-response.model';
import {
  ResultsItem,
  VideosResponse,
} from '../../youtube/components/results/results-item/results-item.model';

@Injectable()
export class SearchService {
  results$!: Observable<ResultsItem[]>;

  constructor(private readonly http: HttpClient) {}

  search(searchTerm: string): void {
    const httpParams = {
      q: searchTerm,
      maxResults: 20,
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

  get response$(): Observable<ResultsItem[]> {
    return this.results$;
  }
}
