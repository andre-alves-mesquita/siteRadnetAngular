import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {

  login: string = '';
  senha: string = '';

  constructor() {}

  ngOnInit(): void {}

  transferir(form:any){

    alert(this.login);
    alert(this.senha);

  }
}
