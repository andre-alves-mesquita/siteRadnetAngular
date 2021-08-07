import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pre-cadastro',
  templateUrl: './pre-cadastro.component.html',
  styleUrls: ['./pre-cadastro.component.css'],
})
export class PreCadastroComponent implements OnInit {
  cliente: any[] = [];

  nome: string = '';
  dtNasc: string = '';
  telefone: string = '';
  email: string = '';
  endereco: string = '';

  constructor() {}

  ngOnInit(): void {}

  transferir() {
    this.cliente = [
      {
        nome: this.nome,
        dtNasc: this.dtNasc,
        telefone: this.telefone,
        email: this.email,
        endereco: this.endereco,
      },
    ];
    alert(this.cliente[0].nome);
    alert(this.cliente[0].dtNasc);
  }
}
