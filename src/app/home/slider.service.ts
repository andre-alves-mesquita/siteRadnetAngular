import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class SliderService {
  constructor(private httpClient: HttpClient) {}

  getSlider() {
    return this.httpClient.get('http://localhost:8000/api/slider');
  }
}
