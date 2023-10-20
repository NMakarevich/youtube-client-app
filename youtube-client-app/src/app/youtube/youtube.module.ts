import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { YoutubeRoutingModule } from './youtube-routing.module';
import { ResultsModule } from './components/results/results.module';
import { MainComponent } from './pages/main/main.component';
import { YoutubeService } from './services/youtube.service';

@NgModule({
  declarations: [MainComponent],
  imports: [CommonModule, YoutubeRoutingModule, ResultsModule],
  providers: [YoutubeService],
})
export class YoutubeModule {}
