import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResultsListComponent } from './results-list/results-list.component';
import { ResultsItemComponent } from './results-item/results-item.component';
import { SharedModule } from '../../../shared/shared.module';
import { ColorizeBorderDirective } from '../../directives/colorize-border.directive';
import { SortPipe } from '../../pipes/sort.pipe';
import { FilterPipe } from '../../pipes/filter.pipe';
import { ButtonComponent } from '../../../core/components/UI/button/button.component';

@NgModule({
  declarations: [
    ResultsListComponent,
    ResultsItemComponent,
    ColorizeBorderDirective,
    SortPipe,
    FilterPipe,
  ],
  exports: [ResultsListComponent],
  imports: [CommonModule, SharedModule, ButtonComponent],
})
export class ResultsModule {}
