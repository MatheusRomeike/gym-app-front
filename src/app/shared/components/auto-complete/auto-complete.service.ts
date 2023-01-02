import { Injectable } from '@angular/core';
import { AutoComplete } from '../../Enums/auto-complete.enum';

@Injectable({
  providedIn: 'root',
})
export class AutoCompleteService {
  constructor() {}

  public callApi(parameter: string, type: AutoComplete) {
    switch (type) {
      case AutoComplete.Itens:
        return this.autoCompleteItens(parameter);
      default:
        return;
    }
  }

  private autoCompleteItens(parameter: string): any {
    var options: any = {
      'item sacola': 1,
      'item lapis': 2,
      'item caderno': 3,
      'item borracha': 4,
      'item mochila': 67,
    };

    return Object.keys(options)
      .filter((key, index) => key.startsWith(parameter))
      .map((key) => ({ name: key, value: options[key] }));
  }
}
