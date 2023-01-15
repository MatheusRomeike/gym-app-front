import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ResourceBase, ResourceLogin } from 'src/app/shared/const-api';

@Injectable({
  providedIn: 'root',
})
export class AuthenticatorService {
  private logadoSubject = new BehaviorSubject<boolean>(false);

  public logado$: Observable<boolean> = this.logadoSubject.asObservable();

  constructor(private httpClient: HttpClient) {}

  public definirToken(token: string) {
    sessionStorage.setItem('token', token);
  }

  public obterToken() {
    return sessionStorage.getItem('token');
  }

  public limparToken() {
    sessionStorage.removeItem('token');
  }

  public logou() {
    this.logadoSubject.next(true);
  }

  public deslogou() {
    this.logadoSubject.next(false);
  }
}
