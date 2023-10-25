import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

enum LocalStorageEnum {
  FAKE_TOKEN = 'fake-token',
}

@Injectable()
export class AuthService {
  isLoggedIn = !!localStorage.getItem(LocalStorageEnum.FAKE_TOKEN);

  constructor(private readonly router: Router) {}

  login() {
    this.isLoggedIn = true;
    localStorage.setItem(LocalStorageEnum.FAKE_TOKEN, 'token');
    this.router.navigate(['']).then((r) => r);
  }

  logout() {
    this.isLoggedIn = false;
    localStorage.removeItem(LocalStorageEnum.FAKE_TOKEN);
    this.router.navigate(['auth/login']).then((r) => r);
  }
}
