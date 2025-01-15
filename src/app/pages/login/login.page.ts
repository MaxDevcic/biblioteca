import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: false
})
export class LoginPage implements OnInit {

  nombre: string="";
  contrasena: string="";

  constructor() { }

  ngOnInit() {
  }

}

