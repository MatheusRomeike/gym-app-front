import { Component } from '@angular/core';
import { AuthenticatorService } from './shared/services/authenticator.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public title = 'Base_Front';
  public sideNavStatus: boolean = false;

  constructor(private authenticatorService: AuthenticatorService) {}

  public logado(): boolean {
    return this.authenticatorService.logado();
  }
}
