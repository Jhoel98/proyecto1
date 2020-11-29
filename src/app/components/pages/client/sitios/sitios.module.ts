import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SitiosComponent } from './sitios.component';
import { SitiosPageRoutingModule } from './sitios-routing.module';
import {LayoutModule} from '../../../shared/layout/layout.module';
import {NzDividerModule, NzTableModule} from "ng-zorro-antd";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        SitiosPageRoutingModule,
        LayoutModule,
        NzTableModule,
        NzDividerModule,
    ],
  declarations: [SitiosComponent],
  exports: []
})
export class SitiosPageModule {}
