import { Component, ElementRef, ViewChild } from '@angular/core';
import { SearchService } from '../../services/search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent {
  @ViewChild('searchInput') searchInput!: ElementRef;

  constructor(private readonly searchService: SearchService) {}

  search() {
    const searchTerm = this.searchInput.nativeElement.value;
    if (searchTerm.length) this.searchService.search(searchTerm);
  }
}
