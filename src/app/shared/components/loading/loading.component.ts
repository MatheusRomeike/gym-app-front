import { Component, OnInit } from '@angular/core';
import { LoadingService } from './loading.service';
import { NgbProgressbarConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss'],
})
export class LoadingComponent {
  constructor(
    public config: NgbProgressbarConfig,
    public loadingService: LoadingService
    ) {
    // Configuração personalizada para o Progressbar
    config.max = 100;
    config.striped = true;
    config.animated = true;
    config.type = 'success';
  }
}
