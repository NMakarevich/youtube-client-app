import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { BehaviorSubject } from 'rxjs';
import { ResultsItem } from './results-item.model';
import { CustomCard } from '../../../pages/admin/custom-card.model';
import { deleteCustomCard } from '../../../../redux/actions/custom-card.action';
import {
  addToFavorite,
  deleteFromFavorite,
} from '../../../../redux/actions/favorites.action';
import { selectFavoritesIds } from '../../../../redux/reducers/favorites.reducer';

@Component({
  selector: 'app-results-item',
  templateUrl: './results-item.component.html',
  styleUrls: ['./results-item.component.scss'],
})
export class ResultsItemComponent implements OnInit {
  @Input() item!: ResultsItem | CustomCard;

  isFavorite$ = new BehaviorSubject(false);

  favorites$ = this.store.select(selectFavoritesIds);

  constructor(
    private readonly router: Router,
    private readonly store: Store
  ) {}

  ngOnInit() {
    this.favorites$.subscribe((ids) => {
      this.isFavorite$.next(!!(this.item.id && ids.includes(this.item.id)));
    });
  }

  navigateToDetailed(id: string): void {
    this.router.navigate([this.router.url, 'video', id]).then((r) => r);
  }

  deleteCard(id: string) {
    this.store.dispatch(deleteCustomCard({ id }));
  }

  toggleFavorite(id: string) {
    if (!this.isFavorite$.getValue())
      this.store.dispatch(addToFavorite({ id }));
    else this.store.dispatch(deleteFromFavorite({ id }));
    this.isFavorite$.next(!this.isFavorite$.getValue());
  }
}
