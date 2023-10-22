import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { ButtonComponent } from './components/UI/button/button.component';
import { SearchModule } from './components/search/search.module';
import { SortingSettingsModule } from './components/sorting-settings/sorting-settings.module';
import { SortingService } from './services/sorting.service';
import { SearchService } from './services/search.service';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';

@NgModule({
  declarations: [HeaderComponent, NotFoundPageComponent],
  imports: [
    CommonModule,
    ButtonComponent,
    SearchModule,
    SortingSettingsModule,
    RouterLink,
  ],
  exports: [HeaderComponent, ButtonComponent],
  providers: [SortingService, SearchService],
})
export class CoreModule {}
