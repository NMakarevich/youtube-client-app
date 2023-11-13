import {
  createFeatureSelector,
  createReducer,
  createSelector,
  on,
} from '@ngrx/store';
import { CustomCard } from '../../youtube/pages/admin/custom-card.model';
import * as customCardAction from '../actions/custom-card.action';

export interface CustomCardsState {
  cards: CustomCard[];
  cardId: string;
}

const initialState: CustomCardsState = {
  cards: [],
  cardId: 'custom1',
};

export const customCardReducer = createReducer(
  initialState,
  on(
    customCardAction.createCustomCard,
    (state, { card }): CustomCardsState => ({
      ...state,
      cards: [...state.cards, { ...card, id: state.cardId }],
      cardId: state.cardId
        .split('custom')
        .map((item, index) => {
          return index === 1 ? parseInt(item, 10) + 1 : item;
        })
        .join('custom'),
    })
  ),
  on(customCardAction.deleteCustomCard, (state, { id }) => ({
    ...state,
    cards: state.cards.filter((card) => card.id !== id),
  }))
);

export const selectCustomCardsState =
  createFeatureSelector<CustomCardsState>('customCards');
export const selectCustomCards = createSelector(
  selectCustomCardsState,
  (customCards) => customCards.cards
);

export const selectCustomCardID = createSelector(
  selectCustomCardsState,
  (customCard) => customCard.cardId
);
