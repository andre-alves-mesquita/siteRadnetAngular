import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PlanosService {
  planos = [
    {
      id: 'headingOne',
      idAco: 'collapseOne',
      dbt: '#collapseOne',
      nome: 'Plano Start',
      velocidade: '20 Mega',
      upload: '10 MB Upload',
      preco: 'R$ 79,90',
      condEsp: 'One',
    },
    {
      id: 'headingTwo',
      nome: 'Plano Family',
      velocidade: '50 Mega',
      upload: '25 MB Upload',
      preco: 'R$ 99,90',
      condEsp: 'Two',
    },
    {
      id: 'headingThree',
      nome: 'Plano Office',
      velocidade: '100 Mega',
      upload: '50 MB Upload',
      preco: 'R$ 149,90',
      condEsp: 'Three',
    },
    {
      id: 'headingFour',
      nome: 'Plano Game',
      velocidade: '200 Mega',
      upload: '100 MB Upload',
      preco: 'R$ 199,90',
      condEsp: 'Four',
    },
  ];

  constructor() {}

  getPlanos() {
    return this.planos;
  }
}
