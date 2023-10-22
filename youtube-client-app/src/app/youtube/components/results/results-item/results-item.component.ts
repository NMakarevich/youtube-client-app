import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ResultsItem } from './results-item';

@Component({
  selector: 'app-results-item',
  templateUrl: './results-item.component.html',
  styleUrls: ['./results-item.component.scss'],
})
export class ResultsItemComponent {
  @Input() item!: ResultsItem;

  constructor(private readonly router: Router) {}

  navigateToDetailed(id: string) {
    this.router.navigate([this.router.url, 'video', id]).then((r) => r);
  }
}
