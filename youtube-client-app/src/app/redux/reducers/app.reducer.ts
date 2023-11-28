import {
  createFeatureSelector,
  createReducer,
  createSelector,
  on,
} from '@ngrx/store';
import { ResultsItem } from '../../youtube/components/results/results-item/results-item.model';
import { CustomCard } from '../../youtube/pages/admin/custom-card.model';
import * as youtubeActions from '../actions/youtube.action';
import * as customCardActions from '../actions/custom-card.action';
import * as favoritesActions from '../actions/favorites.action';
import { MAX_RESULTS } from '../../core/consts';

export interface AppState {
  sources: {
    [id: string]: ResultsItem | CustomCard;
  };
  youtube: {
    [searchTerm: string]: string[];
  };
  currentSearchTerm: string;
  currentPage: number;
  prevPageToken: string;
  nextPageToken: string;
  customCards: {
    ids: string[];
    id: string;
  };
  favorites: string[];
}

const initialState: AppState = {
  sources: {},
  youtube: {},
  currentSearchTerm: '',
  currentPage: 1,
  prevPageToken: '',
  nextPageToken: '',
  customCards: {
    ids: [],
    id: 'custom1',
  },
  favorites: [],
};

export const appReducer = createReducer(
  initialState,
  on(youtubeActions.searchYoutubeCards, (state, { searchTerm }): AppState => {
    if (state.currentSearchTerm.toLowerCase() === searchTerm.toLowerCase())
      return state;
    return {
      ...state,
      youtube: { ...state.youtube, [searchTerm]: [] },
      currentSearchTerm: searchTerm,
      currentPage: 1,
    };
  }),
  on(youtubeActions.storeYoutubeCards, (state, { cards }): AppState => {
    const sources: { [id: string]: ResultsItem | CustomCard } = cards.reduce(
      (result, card) => ({ ...result, [card.id]: card }),
      {}
    );
    return {
      ...state,
      sources: { ...state.sources, ...sources },
      youtube: {
        ...state.youtube,
        [state.currentSearchTerm]: [
          ...state.youtube[state.currentSearchTerm],
          ...cards.map((card) => card.id),
        ],
      },
    };
  }),
  on(
    youtubeActions.storePageTokens,
    (state, { prevPageToken, nextPageToken }): AppState => ({
      ...state,
      nextPageToken: nextPageToken || '',
      prevPageToken: prevPageToken || '',
    })
  ),
  on(
    youtubeActions.prevYoutubePage,
    (state): AppState => ({
      ...state,
      currentPage: state.currentPage - 1,
    })
  ),
  on(
    youtubeActions.nextYoutubeSearchPage,
    (state): AppState => ({
      ...state,
      currentPage: state.currentPage + 1,
    })
  ),
  on(
    customCardActions.createCustomCard,
    (state, { card }): AppState => ({
      ...state,
      sources: {
        ...state.sources,
        [state.customCards.id]: { ...card, id: state.customCards.id },
      },
      customCards: {
        ...state.customCards,
        ids: [...state.customCards.ids, state.customCards.id],
        id: state.customCards.id
          .split('custom')
          .map((item, index) => {
            return index === 1 ? parseInt(item, 10) + 1 : item;
          })
          .join('custom'),
      },
    })
  ),
  on(
    customCardActions.deleteCustomCard,
    (state, { id }): AppState => ({
      ...state,
      customCards: {
        ...state.customCards,
        ids: state.customCards.ids.filter((cardId) => cardId !== id),
      },
    })
  ),
  on(
    favoritesActions.addToFavorite,
    (state, { id }): AppState => ({
      ...state,
      favorites: [...state.favorites, id],
    })
  ),
  on(
    favoritesActions.deleteFromFavorite,
    (state, { id }): AppState => ({
      ...state,
      favorites: state.favorites.filter((favoriteId) => favoriteId !== id),
    })
  )
);

export const selectState = createFeatureSelector<AppState>('appState');

export const selectFavoritesIds = createSelector(
  selectState,
  (state) => state.favorites
);

export const selectFavoritesCards = createSelector(selectState, (state) =>
  state.favorites.map((id) => state.sources[id])
);

export const selectResultPage = createSelector(selectState, (state) => {
  const { currentPage, currentSearchTerm, customCards } = state;
  if (!currentSearchTerm) return customCards.ids.map((id) => state.sources[id]);
  const youtubeCardsIds = state.youtube[currentSearchTerm];
  if (currentPage !== 1)
    return youtubeCardsIds
      .slice(
        MAX_RESULTS * (currentPage - 1) - customCards.ids.length,
        MAX_RESULTS * currentPage - customCards.ids.length
      )
      .map((id) => state.sources[id]);
  return [
    ...customCards.ids,
    ...youtubeCardsIds.slice(customCards.ids.length, MAX_RESULTS),
  ].map((id) => state.sources[id]);
});

export const selectCurrentPage = createSelector(
  selectState,
  (state) => state.currentPage
);

export const selectPrevPageToken = createSelector(
  selectState,
  (state) => state.prevPageToken
);

export const selectNextPageToken = createSelector(
  selectState,
  (state) => state.nextPageToken
);
