import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResultsListComponent } from './results-list/results-list.component';
import { ResultsItemComponent } from './results-item/results-item.component';
import { ButtonComponent } from '../UI/button/button.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [ResultsListComponent, ResultsItemComponent],
  exports: [ResultsListComponent],
  imports: [CommonModule, ButtonComponent, SharedModule],
})
export class ResultsModule {}
