import { planos } from './../planos';
import { PlanosService } from './planos.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-planos',
  templateUrl: './planos.component.html',
  styleUrls: ['./planos.component.css'],
})
export class PlanosComponent implements OnInit {
  Planos: any;

  plano = new planos();

  constructor(private PlanosService: PlanosService) {}

  ngOnInit(): void {
    this.getPlanos();
  }

  getPlanos() {
    this.PlanosService.getData().subscribe((res) => {
      this.Planos = res;
      console.log(res);
    });
  }
}
