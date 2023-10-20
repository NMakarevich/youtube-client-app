import { Component, Input } from '@angular/core';
import { SearchResponse } from '../../search/search-response';
import { Sort } from '../../sorting-settings/sorting-settings.component';

@Component({
  selector: 'app-results-list',
  templateUrl: './results-list.component.html',
  styleUrls: ['./results-list.component.scss'],
})
export class ResultsListComponent {
  @Input() results!: SearchResponse;

  @Input() sort!: Sort;

  @Input() filterTerm!: string;
}
