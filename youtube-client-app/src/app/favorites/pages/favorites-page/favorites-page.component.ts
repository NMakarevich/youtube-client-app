import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectFavoritesItems } from '../../../redux/reducers/favorites.reducer';

@Component({
  selector: 'app-favorites-page',
  templateUrl: './favorites-page.component.html',
  styleUrls: ['./favorites-page.component.scss'],
})
export class FavoritesPageComponent {
  favorites$ = this.store.select(selectFavoritesItems);

  constructor(private readonly store: Store) {}
}
