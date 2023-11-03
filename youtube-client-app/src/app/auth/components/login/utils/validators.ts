import { AbstractControl, ValidationErrors } from '@angular/forms';

export function validatePasswordStrong(
  control: AbstractControl
): ValidationErrors | null {
  const { value } = control;
  if (
    !/(?=.*[0-9])(?=.*[!@#?])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#?]{8,}/g.test(
      value
    )
  ) {
    return {
      passwordStrong: {
        message: "Your password isn't strong enough",
      },
    };
  }
  return null;
}

export function validatePasswordLength(
  control: AbstractControl
): ValidationErrors | null {
  const { value } = control;
  return value.length >= 8
    ? null
    : { passwordLength: { message: 'at least 8 characters' } };
}

export function validatePasswordLettersCase(
  control: AbstractControl
): ValidationErrors | null {
  const { value } = control;
  return /(?=.*[a-z])(?=.*[A-Z])/g.test(value)
    ? null
    : {
        passwordLettersCase: {
          message: 'a mixture of both uppercase and lowercase letters',
        },
      };
}

export function validatePasswordDigits(
  control: AbstractControl
): ValidationErrors | null {
  const { value } = control;
  return /(?=.*[0-9])/g.test(value)
    ? null
    : { passwordDigits: { message: 'a mixture of letters and numbers' } };
}

export function validatePasswordSpecialChars(
  control: AbstractControl
): ValidationErrors | null {
  const { value } = control;
  return /(?=.*[!@#?])/g.test(value)
    ? null
    : {
        passwordSpecialChars: {
          message: 'inclusion of at least one special character, e.g., ! @ # ?',
        },
      };
}
