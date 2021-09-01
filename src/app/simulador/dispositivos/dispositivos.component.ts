import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dispositivos',
  templateUrl: './dispositivos.component.html',
  styleUrls: ['./dispositivos.component.css']
})
export class DispositivosComponent implements OnInit {

  dispositivos: any[] = [];

  celular: number = 0;
  notebook: number = 0;
  table: number = 0;
  smarttv: number = 0;
  smarttv4k: number = 0;
  camera: number = 0;
  videogame: number = 0;



  constructor() { }

  ngOnInit(): void {
  }

  transferir(form: any) {
    this.dispositivos = [
      {
        celular: this.celular,
        notebook: this.celular,
        table: this.celular,
        smarttv: this.celular,
        smarttv4k: this.celular,
        camera: this.celular,
        videogame: this.celular,

      },
    ];
    console.log(this.dispositivos[0].celular);
  }
  

}
