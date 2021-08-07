import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-simulador',
  templateUrl: './simulador.component.html',
  styleUrls: ['./simulador.component.css'],
})
export class SimuladorComponent implements OnInit {
  teste: string;

  constructor() {
    this.teste = '';
  }

  ngOnInit(): void {}

  comecarTeste() {
    this.teste = 'continuar';
  }
  continuar() {
    this.teste = 'resultado';
  }

  resultado() {
    this.teste = 'recomecar';
  }

  recomecar() {
    this.teste = 'continuar';
  }
}
