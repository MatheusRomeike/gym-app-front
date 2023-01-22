import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faBell, faUser, faSearch } from '@fortawesome/free-solid-svg-icons';
import { ToastrService } from 'ngx-toastr';
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

  constructor(
    public authenticatorService: AuthenticatorService,
    private toastr: ToastrService,
    private router: Router
  ) {}

  ngOnInit() {}

  deslogar() {
    this.authenticatorService.limparDados();
    this.router.navigate(['/login']);
    this.toastr.success('Deslogado com sucesso!');
  }
}
