import { createSelector } from '@ngrx/store';
import { selectCustomCards } from '../reducers/custom-card.reducer';
import { selectYoutubeCards } from '../reducers/youtube.reducer';
import { CustomCard } from '../../youtube/pages/admin/custom-card.model';
import { ResultsItem } from '../../youtube/components/results/results-item/results-item.model';
import { MAX_RESULTS } from '../../core/consts';

export const selectAllCards = createSelector(
  selectCustomCards,
  selectYoutubeCards,
  (customCards: CustomCard[], youtubeCards: ResultsItem[]) =>
    [...customCards, ...youtubeCards].slice(0, MAX_RESULTS)
);
