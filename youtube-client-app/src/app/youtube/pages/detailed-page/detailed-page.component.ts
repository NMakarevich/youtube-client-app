import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ResultsItem } from '../../components/results/results-item/results-item.model';
import { SearchService } from '../../../core/services/search.service';

@Component({
  selector: 'app-detailed-page',
  templateUrl: './detailed-page.component.html',
  styleUrls: ['./detailed-page.component.scss'],
})
export class DetailedPageComponent implements OnInit {
  video!: ResultsItem;

  constructor(
    private readonly router: Router,
    private readonly route: ActivatedRoute,
    private readonly searchService: SearchService
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe((param) => {
      const id = param.get('id');
      if (id) {
        this.searchService.getInfoByIds([id]).subscribe((results) => {
          if (results.length === 0)
            this.router.navigate(['404']).then((r) => r);
          else [this.video] = results;
        });
      } else this.router.navigate(['404']).then((r) => r);
    });
  }
}
