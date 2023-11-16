import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import {
  validatePasswordDigits,
  validatePasswordLength,
  validatePasswordLettersCase,
  validatePasswordSpecialChars,
  validatePasswordStrong,
} from './utils/validators';
import { ButtonType } from '../../../core/components/UI/button/button.component';

interface Login {
  login: FormControl<string>;
  password: FormControl<string>;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['../../../shared/form.scss', './login.component.scss'],
})
export class LoginComponent {
  loginForm: FormGroup<Login> = this.fb.nonNullable.group({
    login: ['', [Validators.required, Validators.email]],
    password: [
      '',
      [
        Validators.required,
        validatePasswordStrong,
        validatePasswordLength,
        validatePasswordLettersCase,
        validatePasswordDigits,
        validatePasswordSpecialChars,
      ],
    ],
  });

  constructor(
    private readonly fb: FormBuilder,
    private readonly authService: AuthService
  ) {}

  submit(): void {
    if (this.loginForm.valid) this.authService.login();
  }

  get login(): FormControl<string> {
    return this.loginForm.controls.login;
  }

  get password(): FormControl<string> {
    return this.loginForm.controls.password;
  }

  protected readonly ButtonType = ButtonType;
}
