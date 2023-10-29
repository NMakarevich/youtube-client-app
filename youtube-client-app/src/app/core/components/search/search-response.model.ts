export interface SearchResponse {
  kind: string;
  etag: string;
  pageInfo: {
    totalResults: number;
    resultsPerPage: number;
  };
  items: Items[];
}

interface Items {
  id: {
    videoId: string;
  };
}
