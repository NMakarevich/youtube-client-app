import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './components/header/header.component';
import { ButtonComponent } from './components/UI/button/button.component';
import { SearchModule } from './components/search/search.module';
import { SortingService } from './services/sorting.service';
import { SearchService } from './services/search.service';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { SortingSettingsComponent } from './components/sorting-settings/sorting-settings.component';

@NgModule({
  declarations: [
    HeaderComponent,
    NotFoundPageComponent,
    SortingSettingsComponent,
  ],
  imports: [
    CommonModule,
    ButtonComponent,
    SearchModule,
    RouterLink,
    FormsModule,
  ],
  exports: [HeaderComponent, ButtonComponent],
  providers: [SortingService, SearchService],
})
export class CoreModule {}
