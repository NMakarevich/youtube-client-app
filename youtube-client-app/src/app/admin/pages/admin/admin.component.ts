import { Component } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { validateDate, validateURL } from './utils/validators';

interface CreateCardForm {
  title: FormControl<string>;
  description: FormControl<string>;
  coverLink: FormControl<string>;
  videoLink: FormControl<string>;
  creationDate: FormControl<string>;
  tags: FormArray<FormControl<string>>;
}

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['../../../shared/form.scss', './admin.component.scss'],
})
export class AdminComponent {
  createCardForm: FormGroup<CreateCardForm> = this.fb.nonNullable.group({
    title: [
      '',
      [Validators.required, Validators.minLength(3), Validators.maxLength(20)],
    ],
    description: ['', [Validators.maxLength(255)]],
    coverLink: ['', [Validators.required, validateURL]],
    videoLink: ['', [Validators.required, validateURL]],
    creationDate: ['', [Validators.required, validateDate]],
    tags: this.fb.nonNullable.array([['', [Validators.required]]]),
  });

  constructor(private readonly fb: FormBuilder) {}

  get title(): FormControl<string> {
    return this.createCardForm.controls.title;
  }

  get description(): FormControl<string> {
    return this.createCardForm.controls.description;
  }

  get coverLink(): FormControl<string> {
    return this.createCardForm.controls.coverLink;
  }

  get videoLink(): FormControl<string> {
    return this.createCardForm.controls.videoLink;
  }

  get creationDate(): FormControl<string> {
    return this.createCardForm.controls.creationDate;
  }

  get tags(): FormArray<FormControl<string>> {
    return this.createCardForm.controls.tags;
  }

  addTag(): void {
    this.tags.push(this.fb.nonNullable.control('', [Validators.required]));
  }

  removeTag(index: number): void {
    this.createCardForm.controls.tags.removeAt(index);
  }

  reset(): void {
    this.createCardForm.reset();
    if (this.tags.length > 1) {
      while (this.tags.length !== 1) {
        this.tags.removeAt(1);
      }
    }
  }
}
