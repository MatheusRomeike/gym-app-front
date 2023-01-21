import { Component, ViewChild } from '@angular/core';
import { MatAccordion } from '@angular/material/expansion';
import {
  faBell,
  faUser,
  faSearch,
  faHome,
  faAddressCard,
} from '@fortawesome/free-solid-svg-icons';
import { AuthenticatorService } from '../../authenticator/authenticator.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent {
  @ViewChild('matAccordion') matAccordion!: MatAccordion;

  constructor(public authenticatorService: AuthenticatorService) {}

  faBell = faBell;
  faUser = faUser;
  faSearch = faSearch;
  faHome = faHome;

  nomeEmpresa = 'Empresa teste';

  nodes = [
    {
      name: 'Cadastros',
      icon: faAddressCard,
      route: '/cadastro',
      categoria: [
        {
          name: 'Pessoa',
          route: '/pessoa',
          subCategoria: [
            {
              name: 'Pessoa Física',
              route: `/pessoafisica`,
            },
            {
              name: 'Pessoa Jurídica',
              route: `/pessoajuridica`,
            },
          ],
        },
      ],
    },
    {
      name: 'Financeiro',
      icon: faAddressCard,
      route: '/financeiro',
      categoria: [
        {
          name: 'Contas a Pagar',
          route: '/contasapagar',
          subCategoria: [
            {
              name: 'Pessoa Física',
              route: `/pessoafisica`,
            },
          ],
        },
      ],
    },
  ];
}
