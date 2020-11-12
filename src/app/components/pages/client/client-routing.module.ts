import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ClientComponent} from './client.component';


const routes: Routes = [
  {
    path: '',
    component: ClientComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./home/home.module').then(m => m.HomePageModule),
      },
      {
        path: 'hoteles',
        loadChildren: () => import('./hoteles/hoteles.module').then(m => m.HotelesPageModule),
      },
      {
        path: 'sitios',
        loadChildren: () => import('./sitios/sitios.module').then(m => m.SitiosPageModule),
      },
      {
        path: 'nosotros',
        loadChildren: () => import('./nosotros/nosotros.module').then(m => m.NosotrosPageModule),
      },
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClientPageRoutingModule {}
