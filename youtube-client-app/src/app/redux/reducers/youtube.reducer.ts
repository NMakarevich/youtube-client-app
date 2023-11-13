import {
  createFeatureSelector,
  createReducer,
  createSelector,
  on,
} from '@ngrx/store';
import { ResultsItem } from '../../youtube/components/results/results-item/results-item.model';
import * as youtubeActions from '../actions/youtube.action';
import { MAX_RESULTS } from '../../core/consts';

export interface YoutubeState {
  cards: ResultsItem[];
  prevPageToken: string;
  nextPageToken: string;
  currentPage: number;
  searchTerm: string;
}

const initialState: YoutubeState = {
  cards: [],
  prevPageToken: '',
  nextPageToken: '',
  currentPage: 1,
  searchTerm: '',
};

export const youtubeReducer = createReducer(
  initialState,
  on(
    youtubeActions.searchYoutubeCards,
    (state, { searchTerm }): YoutubeState => ({
      ...state,
      searchTerm,
    })
  ),
  on(
    youtubeActions.storePageTokens,
    (state, { prevPageToken, nextPageToken }): YoutubeState => ({
      ...state,
      nextPageToken: nextPageToken || '',
      prevPageToken: prevPageToken || '',
    })
  ),
  on(youtubeActions.storeYoutubeCards, (state, { cards }): YoutubeState => {
    return {
      ...state,
      cards: [...state.cards, ...cards],
    };
  }),
  on(
    youtubeActions.prevYoutubePage,
    (state): YoutubeState => ({
      ...state,
      currentPage: state.currentPage - 1,
    })
  ),
  on(
    youtubeActions.nextYoutubeSearchPage,
    (state): YoutubeState => ({
      ...state,
      currentPage: state.currentPage + 1,
    })
  )
);

export const selectYoutubeState =
  createFeatureSelector<YoutubeState>('youtube');
export const selectYoutubeCards = createSelector(
  selectYoutubeState,
  (youtube) =>
    youtube.cards.slice(
      (youtube.currentPage - 1) * MAX_RESULTS,
      youtube.currentPage * MAX_RESULTS
    )
);

export const selectPrevPageToken = createSelector(
  selectYoutubeState,
  (state) => state.prevPageToken
);

export const selectNextPageToken = createSelector(
  selectYoutubeState,
  (state) => state.nextPageToken
);
