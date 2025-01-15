import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-seleccionar-libro',
  templateUrl: './seleccionar-libro.page.html',
  styleUrls: ['./seleccionar-libro.page.scss'],
  standalone: false
})
export class SeleccionarLibroPage implements OnInit {
  nombre: string="";
  
  constructor() { }

  ngOnInit() {
  }

}
