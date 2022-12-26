import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AlertService {
  private alertSubject = new BehaviorSubject<boolean>(false);
  private alertClass = new BehaviorSubject<string>('');
  private alertMessage = new BehaviorSubject<string>('');

  public displaying$: Observable<boolean> = this.alertSubject.asObservable();
  public class$: Observable<string> = this.alertClass.asObservable();
  public message$: Observable<string> = this.alertMessage.asObservable();

  success(message: string) {
    this.alertClass.next('Sucesso');
    this.activeModal(message);
  }

  alert(message: string) {
    this.alertClass.next('Alerta');
    this.activeModal(message);
  }

  error(message: string) {
    this.alertClass.next('Erro');
    this.activeModal(message);
  }

  neutral(message: string) {
    this.alertClass.next('Neutro');
    this.activeModal(message);
  }

  shit(message: string) {
    this.alertClass.next('Neutro');
    this.activeModal(message);
  }

  fecharModal() {
    this.alertSubject.next(false);
  }

  private activeModal(message: string) {
    this.alertSubject.next(false);
    this.alertSubject.next(true);
    this.alertMessage.next(message);
  }
}
