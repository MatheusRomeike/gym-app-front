import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthenticatorService {
  public definirToken(token: string) {
    sessionStorage.setItem('token', token);
  }

  public obterToken() {
    return sessionStorage.getItem('token');
  }

  public limparToken() {
    sessionStorage.removeItem('token');
  }

  public definirUsuario(usuario: string) {
    sessionStorage.setItem('usuario', usuario);
  }

  public obterUsuario() {
    return sessionStorage.getItem('usuario');
  }

  public limparUsuario() {
    sessionStorage.removeItem('usuario');
  }
}
