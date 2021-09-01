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
import { FormsModule } from '@angular/forms';
import { AbrangenciaComponent } from './abrangencia/abrangencia.component';
import { SobreNosComponent } from './sobre-nos/sobre-nos.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SimuladorModule } from './simulador/simulador.module';
import { SliderService } from './home/slider.service';
import { SimuladorRoutingModule } from './simulador/simulador-routing.module';
import { ManualUsuarioComponent } from './manual-usuario/manual-usuario.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PlanosComponent,
    ContatosComponent,
    TrabalheConoscoComponent,
    CentralDoAssinanteComponent,
    PoliticasDePrivacidadeComponent,
    PreCadastroComponent,
    AbrangenciaComponent,
    SobreNosComponent,
    ManualUsuarioComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SimuladorRoutingModule,
    FormsModule,
    SimuladorModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
  ],
  providers: [PlanosService, ContatosService, SliderService],
  bootstrap: [AppComponent],
})
export class AppModule {}
