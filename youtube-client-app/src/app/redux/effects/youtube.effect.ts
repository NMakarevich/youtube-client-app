import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, EMPTY, map, of, switchMap, take } from 'rxjs';
import { Store } from '@ngrx/store';
import { SearchService } from '../../core/services/search.service';

import * as YoutubeActions from '../actions/youtube.action';
import {
  searchYoutubeCardsError,
  storeYoutubeCards,
} from '../actions/youtube.action';
import { selectYoutubeState } from '../reducers/youtube.reducer';
import { MAX_RESULTS } from '../../core/consts';

@Injectable()
export class YoutubeEffect {
  searchVideos$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(YoutubeActions.searchYoutubeCards),
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
      ofType(YoutubeActions.nextYoutubeSearchPage),
      switchMap(() =>
        this.store.select(selectYoutubeState).pipe(
          take(1),
          switchMap((state) => {
            if (state.cards.length >= state.currentPage * MAX_RESULTS) {
              return EMPTY;
            }
            return this.searchService
              .search(state.searchTerm, state.nextPageToken)
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
