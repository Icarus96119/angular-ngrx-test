import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

import { CreditCard } from '../models/credit-card';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CreditCardService {

  constructor(
    private http: HttpClient
  ) { }

  /**
   * feature:
   * this function is requesting api for updating the credit card
   * @returns void
   */
  // this function is not working now because we have no backend now.
  /*
  update(payload: CreditCard): Observable<CreditCard> {
    const url = `${environment.apiUrl}/credit-card/update`;
    return this.http.put<CreditCard>(url, { creditCard: payload });
  }
  */

  // this function is alternative for using without backend.
  update(payload: CreditCard): CreditCard {
    return payload;
  }
}
