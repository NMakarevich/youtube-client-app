import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SearchComponent } from './search.component';
import { ButtonComponent } from '../UI/button/button.component';
import { SearchService } from '../../services/search.service';

@NgModule({
  declarations: [SearchComponent],
  exports: [SearchComponent],
  imports: [CommonModule, ButtonComponent, FormsModule],
  providers: [SearchService],
})
export class SearchModule {}
