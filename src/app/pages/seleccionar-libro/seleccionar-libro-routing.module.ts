import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SeleccionarLibroPage } from './seleccionar-libro.page';

const routes: Routes = [
  {
    path: '',
    component: SeleccionarLibroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SeleccionarLibroPageRoutingModule {}
