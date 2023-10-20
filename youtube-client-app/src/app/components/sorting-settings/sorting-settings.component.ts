import { Component, EventEmitter, Output } from '@angular/core';

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

  @Output() setSort: EventEmitter<Sort> = new EventEmitter<Sort>();

  @Output() setFilter: EventEmitter<string> = new EventEmitter<string>();

  changeDateDirection() {
    this.sort.date = this.sort.date <= 0 ? 1 : -1;
    this.sort.views = 0;
    this.setSort.emit(this.sort);
  }

  changeViewsDirection() {
    this.sort.views = this.sort.views <= 0 ? 1 : -1;
    this.sort.date = 0;
    this.setSort.emit(this.sort);
  }

  setFilterTerm(event: Event) {
    if (event instanceof InputEvent) {
      const termString = (event.target as HTMLInputElement).value as string;
      this.setFilter.emit(termString);
    }
  }
}

export interface Sort {
  date: number;
  views: number;
}
