import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { HomeRootComponent } from './home-root/home-root.component';
import { HomeRoutingModule } from './home.routing.module';

@NgModule({
  imports: [SharedModule, HomeRoutingModule],
  declarations: [HomeRootComponent],
  exports: [HomeRootComponent],
})
export class HomeModule {}
