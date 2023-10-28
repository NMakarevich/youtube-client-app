import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

enum LocalStorageEnum {
  FAKE_TOKEN = 'fake-token',
}

@Injectable()
export class AuthService {
  isAuth = new BehaviorSubject(
    !!localStorage.getItem(LocalStorageEnum.FAKE_TOKEN)
  );

  constructor(private readonly router: Router) {}

  get auth() {
    return this.isAuth;
  }

  login() {
    this.isAuth.next(true);
    localStorage.setItem(LocalStorageEnum.FAKE_TOKEN, 'token');
    this.router.navigate(['']).then((r) => r);
  }

  logout() {
    this.isAuth.next(false);
    localStorage.removeItem(LocalStorageEnum.FAKE_TOKEN);
    this.router.navigate(['auth/login']).then((r) => r);
  }
}
