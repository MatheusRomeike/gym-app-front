import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

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

  private limparToken() {
    sessionStorage.removeItem('token');
  }

  public definirUsuario(usuario: string) {
    sessionStorage.setItem('usuario', usuario);
  }

  public obterUsuario() {
    return sessionStorage.getItem('usuario');
  }

  private limparUsuario() {
    sessionStorage.removeItem('usuario');
  }

  public limparDados() {
    this.limparToken();
    this.limparUsuario();
  }

  public autenticado() {
    if (
      this.obterToken() === null ||
      this.obterToken() === '' ||
      this.obterUsuario() === null ||
      this.obterUsuario() === ''
    ) {
      return false;
    }

    const jwt = this.obterToken() || '';

    const payload = JSON.parse(atob(jwt.split('.')[1]));

    // Get the expiration timestamp from the payload
    const exp = payload.exp;

    // Get the current time
    const now = Math.floor(Date.now() / 1000);

    // Check if the token is expired
    if (exp < now) {
      return false;
    } else {
      return true;
    }
  }
}
