import { Injectable } from '@angular/core';
import { SearchResponse } from '../components/search/search-response';
import { results } from '../../mock/mock';

@Injectable()
export class SearchService {
  responseObj!: SearchResponse;

  search(searchTerm: string) {
    if (!searchTerm) return;
    this.responseObj = results;
  }

  get response() {
    return this.responseObj;
  }
}
