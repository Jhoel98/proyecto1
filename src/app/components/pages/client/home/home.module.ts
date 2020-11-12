import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home.component';
import { HomePageRoutingModule } from './home-routing.module';
import {LayoutModule} from '../../../shared/layout/layout.module';
import {
  NzButtonModule,
  NzCardModule,
  NzCarouselModule,
  NzDividerModule,
  NzGridModule,
  NzLayoutModule
} from "ng-zorro-antd";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HomePageRoutingModule,
    LayoutModule,
    NzCarouselModule,
    NzCardModule,
    NzLayoutModule,
    NzButtonModule,
    NzDividerModule,
    NzGridModule,
  ],
  declarations: [HomeComponent],
  exports: []
})

export class HomePageModule {}
