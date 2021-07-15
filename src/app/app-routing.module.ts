import { PreCadastroComponent } from './pre-cadastro/pre-cadastro.component';
import { PoliticasDePrivacidadeComponent } from './politicas-de-privacidade/politicas-de-privacidade.component';
import { SimuladorComponent } from './simulador/simulador.component';
import { CentralDoAssinanteComponent } from './central-do-assinante/central-do-assinante.component';
import { TrabalheConoscoComponent } from './trabalhe-conosco/trabalhe-conosco.component';
import { ContatosComponent } from './contatos/contatos.component';
import { PlanosComponent } from './planos/planos.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'planos', component: PlanosComponent },
  { path: 'contatos', component: ContatosComponent },
  { path: 'trabalhe-conosco', component: TrabalheConoscoComponent },
  { path: 'central-do-assinante', component: CentralDoAssinanteComponent },
  { path: 'simulador', component: SimuladorComponent },
  { path: 'pre-cadastro', component: PreCadastroComponent },
  {
    path: 'politicas-de-privacidade',
    component: PoliticasDePrivacidadeComponent,
  },
  { path: '**', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
