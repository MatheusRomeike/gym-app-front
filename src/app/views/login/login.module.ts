import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { LoginRootComponent } from './login-root/login-root.component';
import { LoginRoutingModule } from './login.routing.module';

@NgModule({
  imports: [SharedModule, LoginRoutingModule],
  declarations: [LoginRootComponent],
  exports: [LoginRootComponent],
})
export class LoginModule {}
