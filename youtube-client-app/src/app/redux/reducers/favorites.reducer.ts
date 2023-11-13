import {
  createFeatureSelector,
  createReducer,
  createSelector,
  on,
} from '@ngrx/store';

import * as actions from '../actions/favorites.action';
import { selectYoutubeCards } from './youtube.reducer';

export interface FavoritesState {
  ids: string[];
}

export const initialState: FavoritesState = {
  ids: [],
};

export const favoritesReducer = createReducer(
  initialState,
  on(
    actions.addToFavorite,
    (state: FavoritesState, { id }): FavoritesState => ({
      ...state,
      ids: [...state.ids, id],
    })
  ),
  on(actions.deleteFromFavorite, (state: FavoritesState, { id }) => ({
    ...state,
    ids: state.ids.filter((itemId) => itemId !== id),
  }))
);

export const selectFavorites =
  createFeatureSelector<FavoritesState>('favorites');

export const selectFavoritesIds = createSelector(
  selectFavorites,
  (state: FavoritesState) => state.ids
);

export const selectFavoritesItems = createSelector(
  selectFavoritesIds,
  selectYoutubeCards,
  (ids, cards) => cards.filter((card) => ids.includes(card.id))
);
