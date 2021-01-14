export interface CreditCard {
  creditCardNumber: string;
  cardHolder: string;
  expirationDate: Date | null;
  securityCode?: string;
  amount: number | null;
}
