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
    this.traer();
  }

  async traer(){
    let usr=this.servicio.get(this.usuario.username);
    console.log(usr);
  }

  async buscar(){

  }

}

