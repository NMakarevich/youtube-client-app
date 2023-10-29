import { Injectable } from '@angular/core';

@Injectable()
export class SortingService {
  sort: SortParam = {
    date: 0,
    views: 0,
  };

  filter = '';

  changeDateDirection(): void {
    this.sort.date = this.sort.date <= 0 ? 1 : -1;
    this.sort.views = 0;
  }

  changeViewsDirection(): void {
    this.sort.views = this.sort.views <= 0 ? 1 : -1;
    this.sort.date = 0;
  }

  get sortParams(): SortParam {
    return this.sort;
  }

  set filterTerm(filter: string) {
    this.filter = filter;
  }

  get filterTerm(): string {
    return this.filter;
  }
}

export interface SortParam {
  date: number;
  views: number;
}
