export interface CustomCard {
  id?: string;
  statistics: null;
  snippet: {
    publishedAt: string;
    videoLink: string;
    title: string;
    description?: string;
    tags: string[];
    thumbnails: {
      default: {
        url: string;
      };
    };
  };
}
