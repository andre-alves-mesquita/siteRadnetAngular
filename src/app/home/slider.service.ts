import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SliderService {
  slider = [
    {
      enderecoImg: '../../assets/img/hero-carousel/3.jpg',
      titulo: 'First slide label',
      texto: 'Some representative placeholder content for the first slide.',
    },
    {
      enderecoImg: '../../assets/img/hero-carousel/1.jpg',
      titulo: 'Second slide label',
      texto: 'Some representative placeholder content for the first slide.',
    },
    {
      enderecoImg: '../../assets/img/hero-carousel/2.jpg',
      titulo: 'Third slide label',
      texto: 'Some representative placeholder content for the first slide.',
    },
  ];
  constructor() {}

  getPlanos() {
    return this.slider;
  }
}
