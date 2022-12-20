import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticatorService } from '../../services/authenticator.service';
import { AlertService } from '../modal/alert.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  constructor(
    private router: Router,
    private authenticatorService: AuthenticatorService,
    private alertService: AlertService
  ) {}

  ngOnInit() {}

  sair() {
    this.authenticatorService.limparToken();
    this.router.navigate(['/login']);
  }
}
