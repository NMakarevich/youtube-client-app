import { createAction, props } from '@ngrx/store';
import { ResultsItem } from '../../youtube/components/results/results-item/results-item.model';

export const searchYoutubeCards = createAction(
  '[Youtube] Search youtube cards',
  props<{ searchTerm: string }>()
);

export const searchYoutubeCardsError = createAction(
  '[Youtube] Search cards error'
);

export const prevYoutubePage = createAction('[Youtube] Prev page');

export const nextYoutubeSearchPage = createAction('[Youtube] Next search page');

export const storeYoutubeCards = createAction(
  '[Youtube] Store youtube cards',
  props<{ cards: ResultsItem[] }>()
);

export const storeCurrentPage = createAction(
  '[Youtube] Store current page number',
  props<{ currentPage: number }>()
);

export const storeYoutubeCardsSuccess = createAction(
  '[Youtube] Store youtube cards successful'
);

export const storePageTokens = createAction(
  '[Youtube] Store page tokens',
  props<{ nextPageToken?: string; prevPageToken?: string }>()
);
