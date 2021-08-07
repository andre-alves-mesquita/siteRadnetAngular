import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SimuladorComponent } from './simulador.component';
import { ResultadoComponent } from './resultado/resultado.component';
import { DispositivosComponent } from './dispositivos/dispositivos.component';
import { ServicosComponent } from './servicos/servicos.component';

const routesSimulador: Routes = [
  {
    path: 'simulador',
    component: SimuladorComponent,
    children: [
      {
        path: 'dispositivos',
        component: DispositivosComponent,
      },

      {
        path: 'servicos',
        component: ServicosComponent,
      },
      {
        path: 'resultado',
        component: ResultadoComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routesSimulador)],
  exports: [RouterModule],
})
export class SimuladorRoutingModule {}
