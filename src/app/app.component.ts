import { email } from './email';
import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';
import { RouterOutlet } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'viaradnet';

  emails: any;

  email = new email();

  constructor(private DataService: DataService) {}

  ngOnInit() {
    window.addEventListener('keyup', disableF5);
    window.addEventListener('keydown', disableF5);

    function disableF5(e: any) {
      if ((e.which || e.keyCode) == 116) e.preventDefault();
    }
  }

  insertData(form: any) {
    this.DataService.insertData(this.email).subscribe((res) => {
      console.log(res);
      alert('Cadastro de email feito com sucesso');
      this.email.email = '';
      window.location.reload();
    });
  }
}
