import { Component } from '@angular/core';
import { AuthenticatorService } from './shared/authenticator/authenticator.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public title = 'Base_Front';

  constructor(public authenticator: AuthenticatorService) {}
}
