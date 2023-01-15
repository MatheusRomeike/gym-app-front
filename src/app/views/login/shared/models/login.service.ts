import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { ResourceBase, ResourceLogin } from 'src/app/shared/const-api';
import { LoginModel } from './LoginModel';

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
