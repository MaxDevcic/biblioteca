import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Libros } from 'src/app/interfaces/libros';
import { StorageService } from 'src/app/services/storageservice.service';

@Component({
  selector: 'app-seleccionar-libro',
  templateUrl: './seleccionar-libro.page.html',
  styleUrls: ['./seleccionar-libro.page.scss'],
  standalone: false
})
export class SeleccionarLibroPage implements OnInit {

  libro: Libros={
    codigo:"",
    nombre:"",
  }
  
  constructor(private library:StorageService, private router: Router) { }

  ngOnInit() {
      
  } 


  
}
