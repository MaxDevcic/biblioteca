import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AgradecimientoPageRoutingModule } from './agradecimiento-routing.module';

import { AgradecimientoPage } from './agradecimiento.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AgradecimientoPageRoutingModule,
    ComponentsModule
  ],
  declarations: [AgradecimientoPage]
})
export class AgradecimientoPageModule {}
