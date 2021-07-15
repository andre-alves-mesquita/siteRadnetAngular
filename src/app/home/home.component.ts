import { SliderService } from './slider.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [SliderService],
})
export class HomeComponent implements OnInit {
  slider: any[] = [];

  constructor(slider: SliderService) {
    this.slider = slider.getPlanos();
  }

  ngOnInit(): void {}
}
