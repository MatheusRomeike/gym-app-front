import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/guards/auth.guard';
import { InicioComponent } from './inicio/iniciocomponent';

const routes: Routes = [
  { path: '', component: InicioComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InicioRoutingModule {}
