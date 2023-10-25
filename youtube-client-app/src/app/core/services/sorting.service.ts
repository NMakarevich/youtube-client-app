import { Injectable } from '@angular/core';

@Injectable()
export class SortingService {
  sort: Sort = {
    date: 0,
    views: 0,
  };

  filter!: string;

  changeDateDirection() {
    this.sort.date = this.sort.date <= 0 ? 1 : -1;
    this.sort.views = 0;
  }

  changeViewsDirection() {
    this.sort.views = this.sort.views <= 0 ? 1 : -1;
    this.sort.date = 0;
  }

  get sortParams() {
    return this.sort;
  }

  set filterTerm(filter: string) {
    this.filter = filter;
  }

  get filterTerm() {
    return this.filter;
  }
}

export interface Sort {
  date: number;
  views: number;
}
