import { Component, ViewChild } from '@angular/core';
import { MatAccordion } from '@angular/material/expansion';
import { faHome, faAddressCard } from '@fortawesome/free-solid-svg-icons';
import { AuthenticatorService } from '../../authenticator/authenticator.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
})
export class SidenavComponent {
  @ViewChild('matAccordion') matAccordion!: MatAccordion;

  constructor(public authenticatorService: AuthenticatorService) {}

  faHome = faHome;

  nomeEmpresa = 'Empresa teste';

  nodes = [
    {
      name: 'Cadastros',
      icon: faAddressCard,
      route: '/cadastros',
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
