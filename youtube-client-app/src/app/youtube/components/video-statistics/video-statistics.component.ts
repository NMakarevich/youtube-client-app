import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Statistics } from '../results/results-item/results-item';

@Component({
  selector: 'app-video-statistics',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './video-statistics.component.html',
  styleUrls: ['./video-statistics.component.scss'],
})
export class VideoStatisticsComponent {
  @Input() statistics!: Statistics;
}
