import { Action } from '@ngrx/store';

import { initialState, GlobalState } from './state';
import ActionWithPayload, { ActionType } from './action';
import { CreditCard } from '../models/credit-card';

export function reducer(state: GlobalState = initialState, action: Action): GlobalState {
  switch (action.type) {
    case ActionType.UpdateCreditCard:
      return { ...state, creditCard: (action as ActionWithPayload<CreditCard>).payload };
  }
  return state;
}
