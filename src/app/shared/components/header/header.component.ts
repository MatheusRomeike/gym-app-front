import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
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
  @Input() menuStatus!: boolean;

  public faBars = faBars;
  public usuario!: string;

  constructor(
    private authenticatorService: AuthenticatorService,
    private alertService: AlertService
  ) {}

  ngOnInit() {
    this.usuario = sessionStorage.getItem('usuario') || '';
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
