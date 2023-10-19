import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-sorting-settings',
  templateUrl: './sorting-settings.component.html',
  styleUrls: ['./sorting-settings.component.scss'],
})
export class SortingSettingsComponent {
  sortFilter: SortFilter = {
    date: 0,
    views: 0,
    term: '',
  };

  @Output() setSortFilter: EventEmitter<SortFilter> =
    new EventEmitter<SortFilter>();

  changeDateDirection() {
    this.sortFilter.date = this.sortFilter.date <= 0 ? 1 : -1;
    this.sortFilter.views = 0;
    this.setSortFilter.emit(this.sortFilter);
  }

  changeViewsDirection() {
    this.sortFilter.views = this.sortFilter.views <= 0 ? 1 : -1;
    this.sortFilter.date = 0;
    this.setSortFilter.emit(this.sortFilter);
  }

  setFilterTerm(event: Event) {
    if (event instanceof InputEvent) {
      this.sortFilter.term = (event.target as HTMLInputElement).value as string;
      this.setSortFilter.emit(this.sortFilter);
    }
  }
}

export interface SortFilter {
  date: number;
  views: number;
  term: string;
}
