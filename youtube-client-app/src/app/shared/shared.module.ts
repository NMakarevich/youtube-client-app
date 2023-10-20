import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../components/header/header.component';
import { SortingSettingsModule } from '../components/sorting-settings/sorting-settings.module';
import { SearchModule } from '../components/search/search.module';
import { ButtonComponent } from '../components/UI/button/button.component';
import { SortPipe } from '../pipes/sort.pipe';
import { FilterPipe } from '../pipes/filter.pipe';

@NgModule({
  declarations: [HeaderComponent, SortPipe, FilterPipe],
  exports: [HeaderComponent, SortPipe, FilterPipe],
  imports: [CommonModule, SortingSettingsModule, SearchModule, ButtonComponent],
})
export class SharedModule {}
