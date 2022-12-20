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

  success(message: string): void {
    if (this.alertSubject.value == false) {
      this.alertClass.next('Sucesso');
      this.activeModal(message);
    }
  }

  alert(message: string): void {
    if (this.alertSubject.value == false) {
      this.alertClass.next('Alerta');
      this.activeModal(message);
    }
  }

  error(message: string): void {
    if (this.alertSubject.value == false) {
      this.alertClass.next('Erro');
      this.activeModal(message);
    }
  }

  neutral(message: string): void {
    if (this.alertSubject.value == false) {
      this.alertClass.next('Neutro');
      this.activeModal(message);
    }
  }

  shit(message: string): void {
    if (this.alertSubject.value == false) {
      this.alertClass.next('Neutro');
      this.activeModal(message);
    }
  }

  private async activeModal(message: string): Promise<void> {
    this.alertSubject.next(true);
    this.alertMessage.next(message);
    await new Promise((f) => setTimeout(f, 3000));
    this.alertSubject.next(false);
  }
}
