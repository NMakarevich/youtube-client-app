import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResultsListComponent } from './results-list/results-list.component';
import { ResultsItemComponent } from './results-item/results-item.component';

@NgModule({
  declarations: [ResultsListComponent, ResultsItemComponent],
  exports: [ResultsListComponent],
  imports: [CommonModule],
})
export class ResultsModule {}
