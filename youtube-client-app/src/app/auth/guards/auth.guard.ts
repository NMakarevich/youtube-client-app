import { CanActivateFn, Router, UrlTree } from '@angular/router';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (): boolean | UrlTree => {
  return localStorage.getItem('fake-token')
    ? true
    : inject(Router).createUrlTree(['auth/login']);
};
