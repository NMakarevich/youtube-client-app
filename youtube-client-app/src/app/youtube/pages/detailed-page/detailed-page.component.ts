import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ResultsItem } from '../../components/results/results-item/results-item';
import { YoutubeService } from '../../services/youtube.service';

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
    private readonly youtubeService: YoutubeService
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe((param) => {
      const id = param.get('id');
      if (id) {
        const video = this.youtubeService.getVideoById(id);
        if (video) this.video = video;
        else this.router.navigate(['404']).then((r) => r);
      } else this.router.navigate(['404']).then((r) => r);
    });
  }
}
