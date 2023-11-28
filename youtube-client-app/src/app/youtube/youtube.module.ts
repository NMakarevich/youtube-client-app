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
import { YoutubeEffect } from '../redux/effects/youtube.effect';
import { FavoritesEffect } from '../redux/effects/favorites.effect';
import { FavoriteButtonComponent } from './components/ui/favorite-button/favorite-button.component';
import { ButtonComponent } from '../core/components/UI/button/button.component';
import { appReducer } from '../redux/reducers/app.reducer';

@NgModule({
  declarations: [MainComponent, DetailedPageComponent],
  imports: [
    CommonModule,
    YoutubeRoutingModule,
    ResultsModule,
    VideoStatisticsComponent,
    StoreModule.forFeature('appState', appReducer),
    EffectsModule.forFeature(YoutubeEffect, FavoritesEffect),
    FavoriteButtonComponent,
    ButtonComponent,
  ],
  providers: [YoutubeService],
})
export class YoutubeModule {}
