import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginArrendatarioPage } from './login-arrendatario.page';

const routes: Routes = [
  {
    path: '',
    component: LoginArrendatarioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginArrendatarioPageRoutingModule {}
