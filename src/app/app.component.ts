import { Component, OnInit } from '@angular/core';
import { AuthenticatorService } from './shared/services/authenticator.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  public title = 'Base_Front';
  public sideNavStatus: boolean = false;

  constructor(public authenticatorService: AuthenticatorService) {}

  ngOnInit() {
    this.estaLogado();
  }

  estaLogado() {
    this.authenticatorService.estaLogado().subscribe((x) => {
      if (x) {
        this.authenticatorService.logou();
      }
    });
  }
}
