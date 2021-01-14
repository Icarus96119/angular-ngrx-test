import { Injectable } from '@angular/core';
import { FormArray, FormGroup } from '@angular/forms';
import { ScrollToConfigOptions, ScrollToService } from '@nicky-lenaers/ngx-scroll-to';

import { ToastrService } from './toastr.service';
import { specialFieldMessage } from '../utils/validators.util';
import { creditCardFormLabel } from '../data/form-labels';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(
    private scrollToService: ScrollToService,
    private toastr: ToastrService,
  ) { }

  findInvalidField(form: FormGroup, labelGroup: any, prefix: string, container?: string, offset = -300): boolean {
    if (!form.invalid) {
      return true;
    } else {
      const asArray = Object.keys(form.controls).map(key => {
        return { key, form: form.controls[key] };
      });
      const invalidField = asArray.find(x => x.form.invalid);
      const fieldName = labelGroup[invalidField?.key || ''] || invalidField?.key;
      // check if invalid field is form array
      const invalidFieldForm = invalidField?.form as FormArray;
      if (!invalidFieldForm.controls) {
        if ((fieldName === creditCardFormLabel.securityCode || fieldName === creditCardFormLabel.expirationDate
          || fieldName === creditCardFormLabel.amount) && form.get(invalidField?.key || '')?.value.toString().length) {
          this.scrollAndBounceInvalidField(fieldName, `${prefix}_${invalidField?.key}`, container || '', offset, false);
        } else {
          this.scrollAndBounceInvalidField(fieldName, `${prefix}_${invalidField?.key}`, container || '', offset, true);
        }
      } else {
        const index = invalidFieldForm.controls.findIndex(x => x.invalid);
        const invalidFormArrayObject = invalidFieldForm.at(index) as FormGroup;
        // recurring logic starts here
        this.findInvalidField(invalidFormArrayObject, labelGroup, `${prefix}_${invalidField?.key}_${index}`, container, offset);
      }
      return false;
    }
  }

  private scrollAndBounceInvalidField(fieldName: string, target: string, container: string, offset: number, isRequired = true): void {
    const scrollConfig: ScrollToConfigOptions = { target, offset };
    if (container) {
      scrollConfig.container = container;
    }
    this.scrollToService.scrollTo(scrollConfig);
    this.bounceInput(target);
    if (isRequired) {
      this.toastr.warning(`${fieldName} is required.`, 'Validation');
    } else if (fieldName === creditCardFormLabel.expirationDate) {
      this.toastr.warning(specialFieldMessage.expirationDate, 'Validation');
    } else if (fieldName === creditCardFormLabel.securityCode) {
      this.toastr.warning(specialFieldMessage.securityCode, 'Validation');
    } else if (fieldName === creditCardFormLabel.amount) {
      this.toastr.warning(specialFieldMessage.amount, 'Validation');
    }
  }

  bounceInput(key: string): void {
    const element = document.getElementById(key);
    if (!element) {
      // log for unexpected validation check error
      console.log(`validation option error, ${key} is missing`);
      return;
    }
    element.classList.add('invalid');
    setTimeout(() => {
      if (element) {
        // user can navigate to different page without waiting for 6 second
        element.classList.remove('invalid');
      }
    }, 6000);
  }
}
