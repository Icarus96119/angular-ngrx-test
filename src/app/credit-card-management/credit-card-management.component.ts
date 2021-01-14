import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';

import { CreditCardService } from '../core/services/credit-card.service';
import { CommonService } from '../core/services/common.service';
import { creditCardFormLabel } from '../core/data/form-labels';
import { confirmExpirationDate, confirmSecurityCode } from '../core/utils/validators.util';
import { CreditCard } from '../core/models/credit-card';
import { GlobalState } from '../core/store/state';
import ActionWithPayload, { ActionType } from '../core/store/action';

@Component({
  selector: 'app-credit-card-management',
  templateUrl: './credit-card-management.component.html',
  styleUrls: ['./credit-card-management.component.scss']
})
export class CreditCardManagementComponent implements OnInit, OnDestroy {



  isLoading = false;
  prefix = creditCardFormLabel.prefix;
  creditCardForm: FormGroup = this.fb.group({
    creditCardNumber: ['', Validators.required],
    cardHolder: ['', Validators.required],
    expirationDate: ['', [Validators.required, confirmExpirationDate]],
    securityCode: ['', confirmSecurityCode],
    amount: ['', [ Validators.required, Validators.min(0.0001) ]]
  });

  // @ts-ignore
  private creditCardState$: Observable<GlobalState>;
  // @ts-ignore
  private creditCardSubscription: Subscription;
  // @ts-ignore
  currentCreditCard: CreditCard;

  constructor(
    private fb: FormBuilder,
    private commonService: CommonService,
    private creditCardService: CreditCardService,
    private store: Store<GlobalState>
  ) { }

  ngOnInit(): void {
    // @ts-ignore
    this.creditCardState$ = this.store.pipe(select('creditCard'));
    // @ts-ignore
    this.creditCardSubscription = this.creditCardState$.pipe(
      map((x: GlobalState) => this.currentCreditCard = x.creditCard)).subscribe();
  }

  ngOnDestroy(): void {
    this.creditCardSubscription.unsubscribe();
  }

  async submit(): Promise<void> {
    try {
      this.isLoading = true;
      if (this.creditCardForm.invalid) {
        this.commonService.findInvalidField(this.creditCardForm, creditCardFormLabel, creditCardFormLabel.prefix);
        return;
      }
      const creditCard = await this.creditCardService.update((this.creditCardForm.value as CreditCard));
      const action: ActionWithPayload<CreditCard> = {
        type: ActionType.UpdateCreditCard,
        payload: creditCard
      };
      this.store.dispatch(action);
    } catch (e: any) {
      console.log(e);
    } finally {
      this.isLoading = false;
    }
  }

}
