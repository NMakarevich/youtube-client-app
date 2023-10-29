import { Component, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from '../../../auth/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  settingsIsOpen = false;

  private authService = inject(AuthService);

  get isAuth(): Observable<boolean> {
    return this.authService.auth;
  }

  toggleSettings(): void {
    this.settingsIsOpen = !this.settingsIsOpen;
  }

  logout(): void {
    this.authService.logout();
  }
}
