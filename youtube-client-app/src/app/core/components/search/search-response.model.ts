import { ResultsItem } from '../../../youtube/components/results/results-item/results-item.model';

export interface SearchResponse {
  kind: string;
  etag: string;
  pageInfo: {
    totalResults: number;
    resultsPerPage: number;
  };
  items: ResultsItem[];
}
