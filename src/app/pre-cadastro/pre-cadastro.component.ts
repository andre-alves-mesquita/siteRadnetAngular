import { DataService } from './../data.service';
import { preCadastro } from './../preCadastro';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pre-cadastro',
  templateUrl: './pre-cadastro.component.html',
  styleUrls: ['./pre-cadastro.component.css'],
})
export class PreCadastroComponent implements OnInit {
  preCadastros: any[] = [];
  preCadastro = new preCadastro();

  router: Router;

  constructor(private DataService: DataService, router: Router) {
    this.router = router;
  }

  ngOnInit(): void {}

  insertPrecadastro(form: any) {
    this.DataService.insertPrecadastro(this.preCadastro).subscribe((res) => {
      console.log(res);
      alert('Cadastro de email feito com sucesso');
      this.router.navigate(['']);
    });
  }
}
