import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { toggleFavorite } from '../../../../redux/actions/favorites.action';
import { selectFavoritesIds } from '../../../../redux/reducers/app.reducer';

@Component({
  selector: 'app-favorite-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './favorite-button.component.html',
  styleUrls: ['./favorite-button.component.scss'],
})
export class FavoriteButtonComponent {
  @Input() id!: string;

  favorites$ = this.store.select(selectFavoritesIds);

  constructor(private readonly store: Store) {}

  toggleFavorite() {
    this.store.dispatch(toggleFavorite({ id: this.id }));
  }
}
