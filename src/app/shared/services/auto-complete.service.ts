import { Injectable } from '@angular/core';
import { AutoComplete } from '../Enums/auto-complete.enum';

@Injectable({
  providedIn: 'root',
})
export class AutoCompleteService {
  constructor() {}

  public call(type: AutoComplete) {
    switch (type) {
      case AutoComplete.Itens:
        return this.autoCompleteItens();
      default:
        return;
    }
  }

  private autoCompleteItens() {
    return {
      'item sacola': 1,
      'item lapis': 2,
      'item caderno': 3,
      'item borracha': 4,
      item5: 5,
      item6: 6,
      item7: 7,
      item8: 8,
      item9: 9,
      item10: 10,
    };
  }
}
