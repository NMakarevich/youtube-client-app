import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from '../auth/services/auth.service';

@NgModule({
  declarations: [],
  exports: [],
  imports: [CommonModule],
  providers: [AuthService],
})
export class SharedModule {}
