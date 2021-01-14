import { Action } from '@ngrx/store';
import { CreditCard } from '../models/credit-card';

export default interface ActionWithPayload<T> extends Action {
  payload: T;
}

export enum ActionType {
  UpdateCreditCard = 'UPDATE_CREDIT_CARD'
}

export class UpdateCreditCard implements ActionWithPayload<CreditCard>
{
  readonly type = ActionType.UpdateCreditCard;
  // @ts-ignore
  payload: CreditCard;

  constructor(payload: CreditCard) {
    this.payload = payload;
  }
}

export type All = UpdateCreditCard;
