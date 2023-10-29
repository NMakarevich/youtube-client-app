import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';

enum LocalStorageEnum {
  FAKE_TOKEN = 'fake-token',
}

@Injectable()
export class AuthService {
  isAuth = new BehaviorSubject(
    !!localStorage.getItem(LocalStorageEnum.FAKE_TOKEN)
  );

  constructor(private readonly router: Router) {}

  get auth(): Observable<boolean> {
    return this.isAuth;
  }

  login(): void {
    this.isAuth.next(true);
    localStorage.setItem(LocalStorageEnum.FAKE_TOKEN, 'token');
    this.router.navigate(['']).then((r) => r);
  }

  logout(): void {
    this.isAuth.next(false);
    localStorage.removeItem(LocalStorageEnum.FAKE_TOKEN);
    this.router.navigate(['auth/login']).then((r) => r);
  }
}
