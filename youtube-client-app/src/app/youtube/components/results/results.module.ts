import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResultsListComponent } from './results-list/results-list.component';
import { ResultsItemComponent } from './results-item/results-item.component';
import { SharedModule } from '../../../shared/shared.module';
import { ColorizeDirective } from '../../directives/colorize.directive';
import { SortPipe } from '../../pipes/sort.pipe';
import { FilterPipe } from '../../pipes/filter.pipe';
import { ButtonComponent } from '../../../core/components/UI/button/button.component';
import { VideoStatisticsComponent } from '../video-statistics/video-statistics.component';

@NgModule({
  declarations: [
    ResultsListComponent,
    ResultsItemComponent,
    ColorizeDirective,
    SortPipe,
    FilterPipe,
  ],
  exports: [ResultsListComponent, ColorizeDirective],
  imports: [
    CommonModule,
    SharedModule,
    ButtonComponent,
    VideoStatisticsComponent,
  ],
})
export class ResultsModule {}
