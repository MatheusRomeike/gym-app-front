import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginModel } from '../models/LoginModel';
import { Observable } from 'rxjs';
import { ResourceBase, ResourceLogin } from 'src/app/const-api';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private httpClient: HttpClient) {}

  public VerificarToken() {
    return this.httpClient.get<any>(
      `${ResourceBase.Base}${ResourceLogin.VerificarToken}`
    );
  }

  public logar(obj: LoginModel) {
    return this.httpClient.post<any>(
      `${ResourceBase.Base}${ResourceLogin.Logar}`,
      obj
    );
  }
}
