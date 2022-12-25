import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { MatAccordion } from '@angular/material/expansion';
import {
  faAddressCard,
  faUniversalAccess,
  faUser,
  faBuilding,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss'],
})
export class SideNavComponent implements OnChanges {
  @Input() sideNavStatus: boolean = false;
  @Output() sideNavToggled = new EventEmitter<boolean>();
  @ViewChild(MatAccordion) paiAccordion!: MatAccordion;

  private cadastro = {
    name: 'Cadastros',
    icon: faAddressCard,
    route: '/cadastro',
    categoria: [
      {
        name: 'Pessoa',
        icon: faUniversalAccess,
        subCategoria: [
          { name: 'Pessoa Física', icon: faUser, route: `/pessoafisica` },
          {
            name: 'Pessoa Jurídica',
            icon: faBuilding,
            route: `/pessoajuridica`,
          },
        ],
      },
    ],
  };

  public list = [this.cadastro];

  ngOnChanges(changes: SimpleChanges) {
    if (
      changes['sideNavStatus'].currentValue === false &&
      changes['sideNavStatus'].firstChange === false
    ) {
      this.paiAccordion.closeAll();
    }
  }

  sideNavToggle() {
    this.sideNavToggled.emit(true);
  }
}
