import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NosotrosComponent } from './nosotros.component';
import { NosotrosPageRoutingModule } from './nosotros-routing.module';
import {LayoutModule} from '../../../shared/layout/layout.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NosotrosPageRoutingModule,
    LayoutModule,
  ],
  declarations: [NosotrosComponent],
  exports: []
})
export class NosotrosPageModule {}
