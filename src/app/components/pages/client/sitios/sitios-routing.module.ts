import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SitiosComponent} from './sitios.component';

const routes: Routes = [
  {
    path: '',
    component: SitiosComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SitiosPageRoutingModule {}
