import { Component } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Store } from '@ngrx/store';
import { validateDate, validateURL } from './utils/validators';
import { CustomCard } from './custom-card.model';
import { createCustomCard } from '../../../redux/actions/custom-card.action';
import { ButtonType } from '../../../core/components/UI/button/button.component';

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

  constructor(
    private readonly fb: FormBuilder,
    private readonly store: Store
  ) {}

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

  submit() {
    if (this.createCardForm.invalid) return;
    const value = this.createCardForm.getRawValue();
    const newCard: CustomCard = {
      id: '',
      statistics: null,
      snippet: {
        title: value.title,
        description: value.description,
        videoLink: value.videoLink,
        publishedAt: value.creationDate,
        tags: value.tags,
        thumbnails: {
          default: {
            url: value.coverLink,
          },
        },
      },
    };
    this.store.dispatch(createCustomCard({ card: newCard }));
    this.reset();
  }

  reset(): void {
    this.createCardForm.reset();
    if (this.tags.length > 1) {
      while (this.tags.length !== 1) {
        this.tags.removeAt(1);
      }
    }
  }

  protected readonly ButtonType = ButtonType;
}
