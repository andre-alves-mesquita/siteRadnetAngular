import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trabalhe-conosco',
  templateUrl: './trabalhe-conosco.component.html',
  styleUrls: ['./trabalhe-conosco.component.css'],
})
export class TrabalheConoscoComponent implements OnInit {
  curriculo: any[] = [];

  nome: string = '';
  dtNascimento: string = '';
  email: string = '';
  fone: string = '';
  endereco: string = '';
  areaDeInteresse: string = '';

  constructor() {}

  ngOnInit(): void {}

  transferir(form: any) {
    this.curriculo = [
      {
        nome: this.nome,
        dtNascimento: this.dtNascimento,
        email: this.email,
        fone: this.fone,
        endereco: this.endereco,
        areaDeInteresse: this.areaDeInteresse,
      },
    ];
    alert(this.curriculo[0].areaDeInteresse);
  }
}
