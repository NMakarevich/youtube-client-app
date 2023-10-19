import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search.component';
import { ButtonComponent } from '../UI/button/button.component';

@NgModule({
  declarations: [SearchComponent],
  exports: [SearchComponent],
  imports: [CommonModule, ButtonComponent],
})
export class SearchModule {}
