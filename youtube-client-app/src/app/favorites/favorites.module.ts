import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FavoritesRoutingModule } from './favorites-routing.module';
import { FavoritesPageComponent } from './pages/favorites-page/favorites-page.component';
import { ResultsModule } from '../youtube/components/results/results.module';
import { YoutubeService } from '../youtube/services/youtube.service';

@NgModule({
  declarations: [FavoritesPageComponent],
  imports: [CommonModule, FavoritesRoutingModule, ResultsModule],
  providers: [YoutubeService],
})
export class FavoritesModule {}
