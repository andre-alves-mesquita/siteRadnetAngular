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
  campoVazio: any[] = [];

  constructor(private DataService: DataService, router: Router) {
    this.router = router;
  }

  ngOnInit(): void {}

  insertPrecadastro(form: any) {
    if (this.preCadastro.nome == '') {
      this.campoVazio[0] = 'vazio';
    } else {
      this.campoVazio[0] = 'preenchido';
    }

    if (this.preCadastro.cpf == '') {
      this.campoVazio[1] = 'vazio';
    } else {
      this.campoVazio[1] = 'preenchido';
    }

    if (this.preCadastro.rg == '') {
      this.campoVazio[2] = 'vazio';
    } else {
      this.campoVazio[2] = 'preenchido';
    }

    if (this.preCadastro.data_nascimento == '') {
      this.campoVazio[3] = 'vazio';
    } else {
      this.campoVazio[3] = 'preenchido';
    }

    if (this.preCadastro.nome_mae == '') {
      this.campoVazio[4] = 'vazio';
    } else {
      this.campoVazio[4] = 'preenchido';
    }

    if (this.preCadastro.email == '') {
      this.campoVazio[5] = 'vazio';
    } else {
      this.campoVazio[5] = 'preenchido';
    }

    if (this.preCadastro.fone == '') {
      this.campoVazio[6] = 'vazio';
    } else {
      this.campoVazio[6] = 'preenchido';
    }

    if (this.preCadastro.fone_secundario == '') {
      this.campoVazio[7] = 'vazio';
    } else {
      this.campoVazio[7] = 'preenchido';
    }

    if (this.preCadastro.endereco == '') {
      this.campoVazio[8] = 'vazio';
    } else {
      this.campoVazio[8] = 'preenchido';
    }

    if (this.preCadastro.ponto_referencia == '') {
      this.campoVazio[9] = 'vazio';
    } else {
      this.campoVazio[9] = 'preenchido';
    }

    if (this.preCadastro.data_vencimento == '') {
      this.campoVazio[10] = 'vazio';
    } else {
      this.campoVazio[10] = 'preenchido';
    }

    if (this.preCadastro.plano_escolhido == '') {
      this.campoVazio[11] = 'vazio';
    } else {
      this.campoVazio[11] = 'preenchido';
    }

    if (!this.campoVazio.find((element) => element == 'vazio')) {
      this.DataService.insertPrecadastro(this.preCadastro).subscribe((res) => {
        console.log(res);
        alert('Pré-Cadastro feito com sucesso');
        this.router.navigate(['']);
      });
    }
  }
}
