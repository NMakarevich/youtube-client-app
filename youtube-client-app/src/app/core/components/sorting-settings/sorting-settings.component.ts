import { Component } from '@angular/core';
import { Sort, SortingService } from '../../services/sorting.service';

@Component({
  selector: 'app-sorting-settings',
  templateUrl: './sorting-settings.component.html',
  styleUrls: ['./sorting-settings.component.scss'],
})
export class SortingSettingsComponent {
  sort: Sort = {
    date: 0,
    views: 0,
  };

  constructor(private readonly sortingService: SortingService) {}

  changeDateDirection() {
    this.sort.date = this.sort.date <= 0 ? 1 : -1;
    this.sort.views = 0;
    this.sortingService.sortObj = this.sort;
  }

  changeViewsDirection() {
    this.sort.views = this.sort.views <= 0 ? 1 : -1;
    this.sort.date = 0;
    this.sortingService.sortObj = this.sort;
  }

  setFilterTerm(event: Event) {
    if (event instanceof InputEvent) {
      this.sortingService.filterTerm = (event.target as HTMLInputElement)
        .value as string;
    }
  }
}
