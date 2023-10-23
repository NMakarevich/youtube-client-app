import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveFormsModule } from '@angular/forms';
import { AuthRoutingModule } from './auth-routing.module';
import { AuthService } from './services/auth.service';
import { AuthPageComponent } from './pages/auth-page/auth-page.component';
import { LoginComponent } from './components/login/login.component';

@NgModule({
  declarations: [AuthPageComponent, LoginComponent],
  imports: [CommonModule, AuthRoutingModule, ReactiveFormsModule],
  providers: [AuthService],
})
export class AuthModule {}
