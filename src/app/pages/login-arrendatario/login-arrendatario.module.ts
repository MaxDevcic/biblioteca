import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginArrendatarioPageRoutingModule } from './login-arrendatario-routing.module';

import { LoginArrendatarioPage } from './login-arrendatario.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginArrendatarioPageRoutingModule,
    ComponentsModule
  ],
  declarations: [LoginArrendatarioPage]
})
export class LoginArrendatarioPageModule {}
