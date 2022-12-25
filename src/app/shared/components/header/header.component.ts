import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { AuthenticatorService } from '../../services/authenticator.service';
import { AlertService } from '../modal/alert.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Output() sideNavToggled = new EventEmitter<boolean>();

  private menuStatus: boolean = false;

  public faBars = faBars;
  public usuario!: string;

  constructor(
    private authenticatorService: AuthenticatorService,
    private alertService: AlertService
  ) {}

  ngOnInit() {
    this.usuario = sessionStorage.getItem('usuario') || '';
    console.log(this.usuario);
  }

  sideNavToggle() {
    this.menuStatus = !this.menuStatus;
    this.sideNavToggled.emit(this.menuStatus);
  }

  sair() {
    this.alertService.success('Logout realizado!');
    this.authenticatorService.limparToken();
    sessionStorage.removeItem('usuario');
  }
}
