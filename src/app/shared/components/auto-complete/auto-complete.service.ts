import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  ResourceAutoComplete,
  ResourceBase,
  ResourceLogin,
} from 'src/app/const-api';
import { AutoComplete } from '../../enums/auto-complete.enum';
import { AutoCompleteModel } from '../../models/AutoCompleteModel';

@Injectable({
  providedIn: 'root',
})
export class AutoCompleteService {
  constructor(private httpClient: HttpClient) {}

  public callApi(parameter: string, type: AutoComplete) {
    switch (type) {
      case AutoComplete.Login:
        return this.autoCompleteLogin(parameter);
      default:
        return;
    }
  }

  private autoCompleteLogin(parameter: string): any {
    return this.httpClient.get<AutoCompleteModel>(
      `${ResourceBase.Base}${ResourceAutoComplete.Login}?search=${parameter}`
    );
  }
}
