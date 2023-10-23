import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = () => {
  return localStorage.getItem('fake-token')
    ? true
    : inject(Router).createUrlTree(['auth/login']);
};
