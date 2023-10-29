import { Component } from '@angular/core';
import { SortingService } from '../../services/sorting.service';

@Component({
  selector: 'app-sorting-settings',
  templateUrl: './sorting-settings.component.html',
  styleUrls: ['./sorting-settings.component.scss'],
})
export class SortingSettingsComponent {
  filterTerm = '';

  constructor(private readonly sortingService: SortingService) {}

  changeDateDirection(): void {
    this.sortingService.changeDateDirection();
  }

  changeViewsDirection(): void {
    this.sortingService.changeViewsDirection();
  }

  setFilterTerm(): void {
    this.sortingService.filterTerm = this.filterTerm;
  }
}
