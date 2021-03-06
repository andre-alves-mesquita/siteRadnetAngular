import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SimuladorRoutingModule } from './simulador-routing.module';
import { DispositivosComponent } from './dispositivos/dispositivos.component';
import { ResultadoComponent } from './resultado/resultado.component';
import { ServicosComponent } from './servicos/servicos.component';
import { SimuladorComponent } from './simulador.component';


@NgModule({
  declarations: [
    DispositivosComponent,
    ResultadoComponent,
    ServicosComponent,
    SimuladorComponent,
  ],
  imports: [CommonModule, SimuladorRoutingModule, FormsModule],
})
export class SimuladorModule {}
