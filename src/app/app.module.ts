import { SliderService } from './home/slider.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PlanosComponent } from './planos/planos.component';
import { ContatosComponent } from './contatos/contatos.component';
import { SimuladorComponent } from './simulador/simulador.component';
import { TrabalheConoscoComponent } from './trabalhe-conosco/trabalhe-conosco.component';
import { CentralDoAssinanteComponent } from './central-do-assinante/central-do-assinante.component';
import { PoliticasDePrivacidadeComponent } from './politicas-de-privacidade/politicas-de-privacidade.component';
import { PreCadastroComponent } from './pre-cadastro/pre-cadastro.component';
import { PlanosService } from './planos/planos.service';
import { ContatosService } from './contatos/contatos.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PlanosComponent,
    ContatosComponent,
    SimuladorComponent,
    TrabalheConoscoComponent,
    CentralDoAssinanteComponent,
    PoliticasDePrivacidadeComponent,
    PreCadastroComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [PlanosService, ContatosService, SliderService],
  bootstrap: [AppComponent],
})
export class AppModule {}
