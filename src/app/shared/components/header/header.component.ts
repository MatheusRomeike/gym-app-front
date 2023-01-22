import { Component, OnInit } from '@angular/core';
import { faBell, faUser, faSearch } from '@fortawesome/free-solid-svg-icons';
import { AuthenticatorService } from '../../authenticator/authenticator.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  faBell = faBell;
  faUser = faUser;
  faSearch = faSearch;

  nomeEmpresa = 'Empresa teste';

  constructor(public authenticatorService: AuthenticatorService) {}

  ngOnInit() {}
}
