export interface SearchResponse {
  kind: string;
  etag: string;
  nextPageToken: string;
  prevPageToken: string;
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
