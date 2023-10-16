import { ResultsItem } from '../results/results-item/results-item';

export interface SearchResponse {
  kind: string;
  etag: string;
  pageInfo: {
    totalResults: number;
    resultsPerPage: number;
  };
  items: [ResultsItem];
}
