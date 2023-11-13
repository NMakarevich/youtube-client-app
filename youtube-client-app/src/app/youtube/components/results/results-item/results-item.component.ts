import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { BehaviorSubject } from 'rxjs';
import { ResultsItem } from './results-item.model';
import { CustomCard } from '../../../pages/admin/custom-card.model';

@Component({
  selector: 'app-results-item',
  templateUrl: './results-item.component.html',
  styleUrls: ['./results-item.component.scss'],
})
export class ResultsItemComponent {
  @Input() item!: ResultsItem;
  @Input() item!: ResultsItem | CustomCard;


  constructor(private readonly router: Router) {}

  navigateToDetailed(id: string): void {
    this.router.navigate([this.router.url, 'video', id]).then((r) => r);
  constructor(
    private readonly router: Router,
    private readonly store: Store
  ) {}
  navigateToDetailed(id: string | undefined): void {
    if (id) this.router.navigate([this.router.url, 'video', id]).then((r) => r);
  }

  deleteCard(id: string | undefined) {
    if (id) this.store.dispatch(deleteCustomCard({ id }));
  }
  }
}
