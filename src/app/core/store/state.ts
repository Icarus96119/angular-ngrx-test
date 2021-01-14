import { CreditCard } from '../models/credit-card';

export enum LoadingState {
  Loading = 'LOADING',
  Loaded = 'LOADED'
}

export interface GlobalState {
  loadingState: LoadingState;
  creditCard: CreditCard;
}

export const initialState: GlobalState = {
  loadingState: LoadingState.Loaded,
  creditCard: {
    creditCardNumber: '',
    cardHolder: '',
    expirationDate: null,
    securityCode: '',
    amount: null
  }
};

