import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginModel } from './shared/models/LoginModel';
import { ResourceBase, ResourceLogin } from 'src/app/shared/const-api';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private httpClient: HttpClient) {}

  public logar(obj: LoginModel) {
    return this.httpClient.post<any>(
      `${ResourceBase.Base}${ResourceLogin.Logar}`,
      obj
    );
  }
}
