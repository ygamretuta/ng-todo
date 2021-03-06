import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MtgRoutingModule } from './mtg-routing.module';
import { MtgComponent } from './mtg.component';
import { MtgService } from './mtg.service';

@NgModule({
  imports: [
    CommonModule,
    MtgRoutingModule
  ],
  declarations: [MtgComponent]
})
export class MtgModule { }
