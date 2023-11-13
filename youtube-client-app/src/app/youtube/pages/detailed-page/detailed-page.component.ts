import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ResultsItem } from '../../components/results/results-item/results-item.model';
import { SearchService } from '../../../core/services/search.service';
import { CustomCard } from '../admin/custom-card.model';

@Component({
  selector: 'app-detailed-page',
  templateUrl: './detailed-page.component.html',
  styleUrls: ['./detailed-page.component.scss'],
})
export class DetailedPageComponent implements OnInit {
  video!: ResultsItem | CustomCard;

  constructor(
    private readonly router: Router,
    private readonly route: ActivatedRoute,
    private readonly searchService: SearchService
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe((param) => {
      const id = param.get('id');
      if (id) {
        this.searchService.getVideoById(id).subscribe((result) => {
          if (!result) this.router.navigate(['404']).then((r) => r);
          else this.video = result;
        });
      } else this.router.navigate(['404']).then((r) => r);
    });
  }
}
