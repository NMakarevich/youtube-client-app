import { createAction, props } from '@ngrx/store';

export const addToFavorite = createAction(
  '[Favorites] Add video to favorites',
  props<{ id: string }>()
);

export const deleteFromFavorite = createAction(
  '[Favorites] Delete video from favorites',
  props<{ id: string }>()
);
