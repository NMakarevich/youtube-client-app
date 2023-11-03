import { Component } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import { AuthService } from '../../services/auth.service';

interface Login {
  login: FormControl<string>;
  password: FormControl<string>;
}

function validatePassword(control: AbstractControl): ValidationErrors | null {
  const { value } = control;
  const errors = {
    length: false,
    upperAndLowerCase: false,
    digits: false,
    symbols: false,
  };
  if (
    !/(?=.*[0-9])(?=.*[!@#?])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#?]{8,}/g.test(
      value
    )
  ) {
    if (value.length <= 8) errors.length = true;
    if (!/(?=.*[a-z])(?=.*[A-Z])/g.test(value)) errors.upperAndLowerCase = true;
    if (!/(?=.*[0-9])/g.test(value)) errors.digits = true;
    if (!/(?=.*[!@#?])/g.test(value)) errors.symbols = true;
    return {
      validatePassword: {
        message: "Your password isn't strong enough",
        errors,
      },
    };
  }

  return null;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['../../../shared/form.scss', './login.component.scss'],
})
export class LoginComponent {
  loginForm: FormGroup<Login> = this.fb.nonNullable.group({
    login: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, validatePassword]],
  });

  constructor(
    private readonly fb: FormBuilder,
    private readonly authService: AuthService
  ) {}

  submit(): void {
    this.authService.login();
  }

  get login() {
    return this.loginForm.controls.login;
  }

  get password() {
    return this.loginForm.controls.password;
  }
}
