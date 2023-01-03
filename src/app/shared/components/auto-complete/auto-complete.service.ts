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
    var lista: any = [
      {
        name: 'item sacola',
        value: 1,
      },
      {
        name: 'item lapis',
        value: 2,
      },
      {
        name: 'item borracha',
        value: 3,
      },
      {
        name: 'item apontador',
        value: 4,
      },
      {
        name: 'item soco',
        value: 5,
      },
      {
        name: 'item teste',
        subName: 'teste',
        value: 6,
      },
      {
        name: 'item aviao',
        subName: 'bong',
        value: 7,
      },
      {
        name: 'item liquidificador',
        subName: 'tramontina t10',
        value: 8,
      },
      {
        name: 'item bobina',
        subName: 'bobina de carro',
        value: 9,
      },
      {
        name: 'item turbina',
        subName: 'turbina eolica',
        value: 10,
      },
    ].filter((item) => item.name.startsWith(parameter));

    return lista;
  }
}
