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

  changeDateDirection() {
    this.sortingService.changeDateDirection();
  }

  changeViewsDirection() {
    this.sortingService.changeViewsDirection();
  }

  setFilterTerm() {
    this.sortingService.filterTerm = this.filterTerm;
  }
}
