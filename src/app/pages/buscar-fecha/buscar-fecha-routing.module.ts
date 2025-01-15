import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BuscarFechaPage } from './buscar-fecha.page';

const routes: Routes = [
  {
    path: '',
    component: BuscarFechaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BuscarFechaPageRoutingModule {}
