import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BuscarFechaPageRoutingModule } from './buscar-fecha-routing.module';

import { BuscarFechaPage } from './buscar-fecha.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BuscarFechaPageRoutingModule
  ],
  declarations: [BuscarFechaPage]
})
export class BuscarFechaPageModule {}
