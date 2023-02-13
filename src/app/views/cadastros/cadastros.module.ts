import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { CadastrosRoutingModule } from './cadastros.routing.module';
import { PessoaFisicaComponent } from './pessoa-fisica/pessoa-fisica.component';

@NgModule({
  imports: [SharedModule, CadastrosRoutingModule],
  declarations: [PessoaFisicaComponent],
  exports: [PessoaFisicaComponent],
})
export class CadastrosModule {}
