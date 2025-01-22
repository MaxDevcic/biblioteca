import { Component, OnInit } from '@angular/core';
import { StorageService } from 'src/app/services/storageservice.service';
import { Usuario } from 'src/app/interfaces/usuario';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registrar-usuario',
  templateUrl: './registrar-usuario.page.html',
  styleUrls: ['./registrar-usuario.page.scss'],
  standalone: false,
})
export class RegistrarUsuarioPage implements OnInit {

  usuario: Usuario ={
    username:'',
    password:'',
    rut:''
  }

  datosusuario: any;

  constructor(private servicio:StorageService, private router: Router) { }

  ngOnInit() {
  }

  crearCuenta(){
    let datos = this.servicio.get(this.usuario.username)
    console.log("Leyendo");
    console.log(datos);
    if (datos!==undefined){
      datos.then(value=>{
        console.log(value);
        if(value==null){
          this.guardar();
        }
      });
    }
  }

  guardar(){
    console.log("Guardado!!!");
    this.servicio.set(this.usuario.username, this.usuario);
    this.router.navigate(['/login']);
  }
  
    /* async traer(){
      console.log(this.servicio.get());
    } */
  }