import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ContatosService {
  contatos = [
    {
      tipo: 'endereco',
      info: 'Avenida Comercial, 2281, Centro',
      icone: 'fa fa-street-view fa-5x',
    },
    {
      tipo: 'telefone',
      info: '(61) 3335 0513 - Fixo / (61) 99954 0513 - Vivo',
      icone: 'fa fa-mobile fa-5x',
    },
    {
      tipo: 'email',
      info: 'contato@viaradnet.com.br',
      icone: 'fa fa-envelope fa-4x',
    },
    {
      tipo: 'Horario de Atendimento',
      info: 'Atendimento de Segunda a Sexta das 08:00 as 18:00 e Sábado das 08:00 as 17:00',
      icone: 'fa fa-clock-o fa-4x',
    },
  ];
  constructor() {}

  getPlanos() {
    return this.contatos;
  }
}
