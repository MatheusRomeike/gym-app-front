import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { AuthenticatorService } from '../../authenticator/authenticator.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  public faBars = faBars;

  public usuario: any;

  constructor(
    public authenticatorService: AuthenticatorService,
    private router: Router
  ) {}

  ngOnInit() {
    this.usuario = this.authenticatorService.obterUsuario();
  }

  deslogar() {
    this.authenticatorService.limparDados();
    this.router.navigate(['/login']);
  }
}
