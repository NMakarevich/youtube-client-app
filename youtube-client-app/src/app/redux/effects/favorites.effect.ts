import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { map, switchMap, take } from 'rxjs';
import { Store } from '@ngrx/store';
import * as actions from '../actions/favorites.action';
import { selectFavoritesIds } from '../reducers/favorites.reducer';
import { addToFavorite, deleteFromFavorite } from '../actions/favorites.action';

@Injectable()
export class FavoritesEffect {
  toggleFavorites$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(actions.toggleFavorite),
      switchMap(({ id }) =>
        this.store.select(selectFavoritesIds).pipe(
          take(1),
          map((ids) =>
            ids.includes(id)
              ? deleteFromFavorite({ id })
              : addToFavorite({ id })
          )
        )
      )
    );
  });

  constructor(
    private readonly actions$: Actions,
    private readonly store: Store
  ) {}
}
