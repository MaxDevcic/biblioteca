import { Component, OnInit } from '@angular/core';
import { StorageService } from 'src/app/services/storageservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: false
})
export class LoginPage implements OnInit {

  usuario={
    username:'',
    password:''
  }

  constructor(private servicio:StorageService) { }

  ngOnInit() {
  }

  login(){
  console.log("Hola");
  this.guardar();    
  }

  async guardar(){
    await this.servicio.set(this.usuario.username, this.usuario);
  }

  async traer(){
    console.log(this.servicio.get('xxxxx'));
  }
  
}

