import { SliderService } from './slider.service';
import { Component, OnInit } from '@angular/core';
import { slider } from './../slider';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  sliders: any;

  slider = new slider();

  listagem: any[] = [];

  constructor(private SliderService: SliderService) {}

  ngOnInit(): void {
    this.getPlanos();
  }

  getPlanos() {
    this.SliderService.getSlider().subscribe((res) => {
      this.sliders = res;

      this.listagem[0] = this.sliders[0];
      this.listagem[1] = this.sliders[1];
      this.listagem[2] = this.sliders[2];
      this.listagem[3] = this.sliders[3];
      this.listagem[4] = this.sliders[4];

      console.log(this.listagem);
    });
  }
}
