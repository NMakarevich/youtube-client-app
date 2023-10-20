import { Injectable } from '@angular/core';

@Injectable()
export class SortingService {
  sort!: Sort;

  filter!: string;

  set sortObj(sort: Sort) {
    this.sort = sort;
  }

  get sortObj() {
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
