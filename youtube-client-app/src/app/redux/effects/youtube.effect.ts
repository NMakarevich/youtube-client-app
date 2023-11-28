import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, EMPTY, map, of, switchMap, take } from 'rxjs';
import { Store } from '@ngrx/store';
import { SearchService } from '../../core/services/search.service';

import * as youtubeActions from '../actions/youtube.action';
import {
  searchYoutubeCardsError,
  storeYoutubeCards,
} from '../actions/youtube.action';
import { MAX_RESULTS } from '../../core/consts';
import { selectState } from '../reducers/app.reducer';

@Injectable()
export class YoutubeEffect {
  searchVideos$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(youtubeActions.searchYoutubeCards),
      switchMap(({ searchTerm }) =>
        this.searchService.search(searchTerm).pipe(
          map((data) => storeYoutubeCards({ cards: data })),
          catchError(() => of(searchYoutubeCardsError()))
        )
      )
    );
  });

  nextPage$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(youtubeActions.nextYoutubeSearchPage),
      switchMap(() =>
        this.store.select(selectState).pipe(
          take(1),
          switchMap((state) => {
            if (
              state.youtube[state.currentSearchTerm].length >=
              state.currentPage * MAX_RESULTS
            ) {
              return EMPTY;
            }
            return this.searchService
              .search(state.currentSearchTerm, state.nextPageToken)
              .pipe(map((data) => storeYoutubeCards({ cards: data })));
          })
        )
      )
    );
  });

  constructor(
    private readonly actions$: Actions,
    private readonly searchService: SearchService,
    private readonly store: Store
  ) {}
}
