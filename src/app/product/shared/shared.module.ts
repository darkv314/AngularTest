import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Shared3Pipe } from './shared3.pipe';

@NgModule({
  imports: [CommonModule],
  declarations: [Shared3Pipe],
  exports: [Shared3Pipe],
})
export class SharedModule {}
