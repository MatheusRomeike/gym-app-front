import { Injectable } from '@angular/core';
import { AutoComplete } from '../../enums/auto-complete.enum';

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
      },
      {
        name: 'item lapis',
      },
      {
        name: 'item borracha',
      },
      {
        name: 'item apontador',
      },
      {
        name: 'item soco',
      },
      {
        name: 'item teste',
        subName: 'teste',
      },
      {
        name: 'item aviao',
        subName: 'bong',
      },
      {
        name: 'item liquidificador',
        subName: 'tramontina t10',
      },
      {
        name: 'item bobina',
        subName: 'bobina de carro',
      },
      {
        name: 'item turbina',
        subName: 'turbina eolica',
      },
    ].filter((item) => item.name.startsWith(parameter));

    return lista;
  }
}
