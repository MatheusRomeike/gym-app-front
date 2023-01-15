import { Component, OnChanges } from '@angular/core';
import { Router } from '@angular/router';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { AuthenticatorService } from '../../authenticator/authenticator.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  public faBars = faBars;

  public usuario: any;

  constructor(
    public authenticatorService: AuthenticatorService,
    private router: Router
  ) {}

  deslogar() {
    this.authenticatorService.limparDados();
    this.router.navigate(['/login']);
  }
}
