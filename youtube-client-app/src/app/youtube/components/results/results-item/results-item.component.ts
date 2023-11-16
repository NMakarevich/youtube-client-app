import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { ResultsItem } from './results-item.model';
import { CustomCard } from '../../../pages/admin/custom-card.model';
import { deleteCustomCard } from '../../../../redux/actions/custom-card.action';

@Component({
  selector: 'app-results-item',
  templateUrl: './results-item.component.html',
  styleUrls: ['./results-item.component.scss'],
})
export class ResultsItemComponent {
  @Input() item!: ResultsItem | CustomCard;

  constructor(
    private readonly router: Router,
    private readonly store: Store
  ) {}

  navigateToDetailed(id: string): void {
    this.router.navigate([this.router.url, 'video', id]).then((r) => r);
  }

  deleteCard(id: string) {
    this.store.dispatch(deleteCustomCard({ id }));
  }
}
