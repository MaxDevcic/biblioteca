import { Usuario } from './../../interfaces/usuario';
import { Component, OnInit } from '@angular/core';
import { StorageService } from 'src/app/services/storageservice.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: false
})
export class LoginPage implements OnInit {

  usuario: Usuario = {
    username: '',
    password: '',
    rut: ''
  }

  constructor(private servicio: StorageService, private router: Router) { }

  ngOnInit() {
  }

  login() {
    let datos = this.servicio.get(this.usuario.username)
    console.log("Leyendo");
    console.log(datos);
    if (datos !== undefined) {
      datos.then(value => {

        if (value != null) {
          let usbusc: Usuario;
          usbusc = value;
          if (this.usuario.username == usbusc.username && this.usuario.password==usbusc.password) {
            console.log("si esta");
            this.router.navigate(['/historial']);
          }else{
            console.log("Contraseña invalida");
          }
        }else{
          console.log("Usuario o contraseña invalidos");
        }


      });
    }
  }

}

