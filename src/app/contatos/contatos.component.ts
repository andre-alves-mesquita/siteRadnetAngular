import { ContatosService } from './contatos.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contatos',
  templateUrl: './contatos.component.html',
  styleUrls: ['./contatos.component.css'],
  providers: [ContatosService],
})
export class ContatosComponent implements OnInit {
  Contatos: any[] = [];

  constructor(contatos: ContatosService) {
    this.Contatos = contatos.getPlanos();
  }

  ngOnInit(): void {}
}
