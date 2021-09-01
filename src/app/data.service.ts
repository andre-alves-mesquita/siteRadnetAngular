import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap, delay, take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private httpClient: HttpClient) {}

  insertData(data: any) {
    return this.httpClient.post('http://localhost:8000/api/email', data);
  }

  insertPrecadastro(data: any) {
    return this.httpClient
      .post('http://localhost:8000/api/precadastro', data)
      .pipe(take(1));
  }
}
