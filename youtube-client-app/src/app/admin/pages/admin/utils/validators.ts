import { AbstractControl, ValidationErrors } from '@angular/forms';

export function validateDate(
  control: AbstractControl
): ValidationErrors | null {
  const { value } = control;
  const dateFromValue = new Date(value).getTime();
  const currentDate = new Date().getTime();
  return dateFromValue > currentDate
    ? { validateDate: { message: 'The date is invalid' } }
    : null;
}

export function validateURL(control: AbstractControl): ValidationErrors | null {
  const { value } = control;
  try {
    const url = new URL(value);
    if (url) return null;
    return null;
  } catch {
    return {
      validateURL: {
        message: 'URL is invalid',
      },
    };
  }
}
