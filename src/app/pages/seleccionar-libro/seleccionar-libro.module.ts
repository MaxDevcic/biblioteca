import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SeleccionarLibroPageRoutingModule } from './seleccionar-libro-routing.module';

import { SeleccionarLibroPage } from './seleccionar-libro.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SeleccionarLibroPageRoutingModule,
    ComponentsModule
  ],
  declarations: [SeleccionarLibroPage]
})
export class SeleccionarLibroPageModule {}
