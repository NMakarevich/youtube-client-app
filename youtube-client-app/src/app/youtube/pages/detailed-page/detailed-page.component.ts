import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { concatAll, map, Observable, of } from 'rxjs';
import { Store } from '@ngrx/store';
import { ResultsItem } from '../../components/results/results-item/results-item.model';
import { SearchService } from '../../../core/services/search.service';
import { CustomCard } from '../admin/custom-card.model';
import { deleteCustomCard } from '../../../redux/actions/custom-card.action';

@Component({
  selector: 'app-detailed-page',
  templateUrl: './detailed-page.component.html',
  styleUrls: ['./detailed-page.component.scss'],
})
export class DetailedPageComponent implements OnInit {
  video$!: Observable<ResultsItem | CustomCard | undefined>;

  constructor(
    private readonly router: Router,
    private readonly route: ActivatedRoute,
    private readonly searchService: SearchService,
    private readonly store: Store
  ) {}

  ngOnInit() {
    this.video$ = this.route.paramMap.pipe(
      map((paramMap) => {
        const id = paramMap.get('id');
        if (id) {
          return this.searchService.getVideoById(id);
        }
        return of(undefined);
      }),
      concatAll(),
      map((result) => {
        if (!result) this.router.navigate(['404']).then((r) => r);
        return result;
      })
    );
  }

  deleteCard(id: string) {
    this.store.dispatch(deleteCustomCard({ id }));
    this.router.navigate(['/']).then((r) => r);
  }
}
