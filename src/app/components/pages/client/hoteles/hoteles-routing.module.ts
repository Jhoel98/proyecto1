import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HotelesComponent} from './hoteles.component';

const routes: Routes = [
  {
    path: '',
    component: HotelesComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HotelesPageRoutingModule {}
