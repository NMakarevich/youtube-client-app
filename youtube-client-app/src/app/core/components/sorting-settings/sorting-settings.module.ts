import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SortingSettingsComponent } from './sorting-settings.component';
import { SortingService } from '../../services/sorting.service';

@NgModule({
  declarations: [SortingSettingsComponent],
  imports: [CommonModule],
  exports: [SortingSettingsComponent],
  providers: [SortingService],
})
export class SortingSettingsModule {}
