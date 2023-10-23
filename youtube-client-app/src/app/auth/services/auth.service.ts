import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {
  isLoggedIn = !!localStorage.getItem('fake-token');

  constructor(private readonly router: Router) {}

  login() {
    this.isLoggedIn = true;
    localStorage.setItem('fake-token', 'token');
    this.router.navigate(['main']).then((r) => r);
  }

  logout() {
    this.isLoggedIn = false;
    localStorage.removeItem('fake-token');
    this.router.navigate(['auth/login']).then((r) => r);
  }
}
