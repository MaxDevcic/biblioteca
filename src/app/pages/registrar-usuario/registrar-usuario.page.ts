import { Component, OnInit } from '@angular/core';
import { StorageService } from 'src/app/services/storageservice.service';

@Component({
  selector: 'app-registrar-usuario',
  templateUrl: './registrar-usuario.page.html',
  styleUrls: ['./registrar-usuario.page.scss'],
  standalone: false,
})
export class RegistrarUsuarioPage implements OnInit {

  usuario={
    username:'',
    password:'',
    rut:''
  }

  constructor(private servicio:StorageService) { }

  ngOnInit() {
  }

  login(){
    console.log("Registrado");
      this.guardar();    
    }
  
    async guardar(){
      await this.servicio.set(this.usuario.username, this.usuario);
    }
  
    async traer(){
      console.log(this.servicio.get('xxxxx'));
    }
}
