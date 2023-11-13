import { createAction, props } from '@ngrx/store';
import { CustomCard } from '../../youtube/pages/admin/custom-card.model';

export const createCustomCard = createAction(
  '[Custom Card] Create new custom card',
  props<{ card: CustomCard }>()
);

export const deleteCustomCard = createAction(
  '[Custom Card] Delete custom card',
  props<{ id: string }>()
);
