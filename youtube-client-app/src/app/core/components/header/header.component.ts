import { Component, inject } from '@angular/core';
import { AuthService } from '../../../auth/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  settingsIsOpen = false;

  private authService = inject(AuthService);

  toggleSettings() {
    this.settingsIsOpen = !this.settingsIsOpen;
  }

  get isAuth() {
    return this.authService.isLoggedIn;
  }

  logout() {
    this.authService.logout();
  }
}
