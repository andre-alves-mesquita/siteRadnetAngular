import { PlanosService } from './planos.service';
import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  query,
} from '@angular/animations';

@Component({
  selector: 'app-planos',
  templateUrl: './planos.component.html',
  styleUrls: ['./planos.component.css'],
  providers: [PlanosService],
})
export class PlanosComponent implements OnInit {
  Planos: any[] = [];

  constructor(planos: PlanosService) {
    this.Planos = planos.getPlanos();
  }

  ngOnInit(): void {}
}
