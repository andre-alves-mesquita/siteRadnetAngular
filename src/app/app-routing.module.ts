import { ManualUsuarioComponent } from './manual-usuario/manual-usuario.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SobreNosComponent } from './sobre-nos/sobre-nos.component';
import { AbrangenciaComponent } from './abrangencia/abrangencia.component';
import { PreCadastroComponent } from './pre-cadastro/pre-cadastro.component';
import { PoliticasDePrivacidadeComponent } from './politicas-de-privacidade/politicas-de-privacidade.component';
import { CentralDoAssinanteComponent } from './central-do-assinante/central-do-assinante.component';
import { TrabalheConoscoComponent } from './trabalhe-conosco/trabalhe-conosco.component';
import { ContatosComponent } from './contatos/contatos.component';
import { PlanosComponent } from './planos/planos.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  {
    path: 'planos',
    component: PlanosComponent,
  },
  {
    path: 'contatos',
    component: ContatosComponent,
  },
  { path: 'trabalhe-conosco', component: TrabalheConoscoComponent },
  { path: 'central-do-assinante', component: CentralDoAssinanteComponent },
  { path: 'abrangencia', component: AbrangenciaComponent },
  { path: 'sobre-nos', component: SobreNosComponent },
  { path: 'manual-usuario', component: ManualUsuarioComponent },
  { path: 'pre-cadastro', component: PreCadastroComponent },
  {
    path: 'politicas-de-privacidade',
    component: PoliticasDePrivacidadeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
