import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectFavoritesCards } from '../../../redux/reducers/app.reducer';

@Component({
  selector: 'app-favorites-page',
  templateUrl: './favorites-page.component.html',
  styleUrls: ['./favorites-page.component.scss'],
})
export class FavoritesPageComponent {
  favorites$ = this.store.select(selectFavoritesCards);

  constructor(private readonly store: Store) {}
}
