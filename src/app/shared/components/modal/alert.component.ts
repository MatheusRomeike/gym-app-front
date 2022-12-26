import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { AlertService } from './alert.service';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss'],
})
export class AlertComponent implements OnInit {
  constructor(public alertService: AlertService) {}

  public value = 100;
  private intervalId: any;

  ngOnInit() {
    this.alertService.displaying$.subscribe((displaying) => {
      if (displaying) {
        this.value = 100;
        console.log(this.value);
        this.intervalId = setInterval(() => {
          this.value = (this.value - 2.5) % 100;
          if (this.value < -5) {
            this.value = 100;
            clearInterval(this.intervalId);
            this.alertService.fecharModal();
          }
        }, 75);
      } else {
        clearInterval(this.intervalId);
      }
    });
  }
}
