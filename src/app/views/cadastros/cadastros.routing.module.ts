import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/guards/auth.guard';
import { PessoaFisicaComponent } from './pessoa-fisica/pessoa-fisica.component';

const routes: Routes = [
  {
    path: 'pessoa/pessoafisica',
    component: PessoaFisicaComponent,
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CadastrosRoutingModule {}
