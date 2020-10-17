import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HotelesComponent } from './hoteles.component';
import { HotelesPageRoutingModule } from './hoteles-routing.module';
import {LayoutModule} from '../../../shared/layout/layout.module';
import {NzCardModule, NzDividerModule, NzGridModule} from "ng-zorro-antd";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HotelesPageRoutingModule,
    LayoutModule,
    NzCardModule,
    NzDividerModule,
    NzGridModule,
  ],
  declarations: [HotelesComponent],
  exports: []
})
export class HotelesPageModule {}
