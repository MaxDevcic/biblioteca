import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AgradecimientoPage } from './agradecimiento.page';

const routes: Routes = [
  {
    path: '',
    component: AgradecimientoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AgradecimientoPageRoutingModule {}
