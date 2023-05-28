import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { InicioRoutingModule } from './inicio.routing.module';
import { InicioComponent } from './inicio/iniciocomponent';

@NgModule({
  imports: [SharedModule, InicioRoutingModule],
  declarations: [InicioComponent],
  exports: [InicioComponent],
})
export class InicioModule {}
