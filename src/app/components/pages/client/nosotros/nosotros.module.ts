import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NosotrosComponent } from './nosotros.component';
import { NosotrosPageRoutingModule } from './nosotros-routing.module';
import {LayoutModule} from '../../../shared/layout/layout.module';
import {NzDividerModule} from "ng-zorro-antd";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        NosotrosPageRoutingModule,
        LayoutModule,
        NzDividerModule,
    ],
  declarations: [NosotrosComponent],
  exports: []
})
export class NosotrosPageModule {}
