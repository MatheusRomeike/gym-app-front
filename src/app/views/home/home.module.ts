import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { HomeRoutingModule } from './home.routing.module';
import { HomeRootComponent } from './home-root/home-root.component';

@NgModule({
  imports: [SharedModule, HomeRoutingModule],
  declarations: [HomeRootComponent],
  exports: [HomeRootComponent],
})
export class HomeModule {}
