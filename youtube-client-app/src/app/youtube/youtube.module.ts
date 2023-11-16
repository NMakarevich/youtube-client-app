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
import { youtubeReducer } from '../redux/reducers/youtube.reducer';
import { YoutubeEffect } from '../redux/effects/youtube.effect';
import { customCardReducer } from '../redux/reducers/custom-card.reducer';
import { favoritesReducer } from '../redux/reducers/favorites.reducer';
import { FavoritesEffect } from '../redux/effects/favorites.effect';
import { FavoriteButtonComponent } from './components/ui/favorite-button/favorite-button.component';
import { ButtonComponent } from '../core/components/UI/button/button.component';

@NgModule({
  declarations: [MainComponent, DetailedPageComponent],
  imports: [
    CommonModule,
    YoutubeRoutingModule,
    ResultsModule,
    VideoStatisticsComponent,
    StoreModule.forFeature('youtube', youtubeReducer),
    StoreModule.forFeature('customCards', customCardReducer),
    StoreModule.forFeature('favorites', favoritesReducer),
    EffectsModule.forFeature(YoutubeEffect, FavoritesEffect),
    FavoriteButtonComponent,
    ButtonComponent,
  ],
  providers: [YoutubeService],
})
export class YoutubeModule {}
