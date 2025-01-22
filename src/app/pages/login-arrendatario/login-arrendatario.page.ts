import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/interfaces/usuario';
import { StorageService } from 'src/app/services/storageservice.service';

@Component({
  selector: 'app-login-arrendatario',
  templateUrl: './login-arrendatario.page.html',
  styleUrls: ['./login-arrendatario.page.scss'],
  standalone: false,
})
export class LoginArrendatarioPage implements OnInit {
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
              this.router.navigate(['/escaneo']);
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
