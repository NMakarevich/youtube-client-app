import { Component, Input } from '@angular/core';
import { ResultsItem } from './results-item';

@Component({
  selector: 'app-results-item',
  templateUrl: './results-item.component.html',
  styleUrls: ['./results-item.component.scss'],
})
export class ResultsItemComponent {
  @Input() item!: ResultsItem;
}
