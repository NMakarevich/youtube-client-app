import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { YoutubeRoutingModule } from './youtube-routing.module';
import { ResultsModule } from './components/results/results.module';
import { MainComponent } from './pages/main/main.component';
import { YoutubeService } from './services/youtube.service';
import { DetailedPageComponent } from './pages/detailed-page/detailed-page.component';
import { VideoStatisticsComponent } from './components/video-statistics/video-statistics.component';
import { customCardReducer } from '../redux/reducers/custom-card.reducer';

@NgModule({
  declarations: [MainComponent, DetailedPageComponent],
  imports: [
    CommonModule,
    YoutubeRoutingModule,
    ResultsModule,
    VideoStatisticsComponent,
    StoreModule.forFeature('customCards', customCardReducer),
  ],
  providers: [YoutubeService],
})
export class YoutubeModule {}
