import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export const specialFieldMessage = {
  expirationDate: 'The expiration date should be greater than current date.',
  securityCode: 'The security code should be 3 characters.',
  amount: 'Amount should be greater than 0.'
};

export const confirmExpirationDate: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
  if (!control.parent || !control) {
    return null;
  }
  const expirationDate = control.parent.get('expirationDate');
  if (!expirationDate) {
    return null;
  }
  if (expirationDate.value === '') {
    return null;
  }
  if (new Date(expirationDate.value) >= new Date()) {
    return null;
  }
  return { expiredDateNotMatching: true };
};

export const confirmSecurityCode: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
  if (!control.parent || !control) {
    return null;
  }
  const securityCode = control.parent.get('securityCode');
  if (!securityCode) {
    return null;
  }
  if (securityCode.value === '') {
    return null;
  }
  if (securityCode.value.length === 3) {
    return null;
  }
  return { securityCodeNotMatching: true };
};
