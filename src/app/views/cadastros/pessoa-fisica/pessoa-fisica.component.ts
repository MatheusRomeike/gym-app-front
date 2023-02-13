import { Component, OnInit, ViewChild } from '@angular/core';
import { DataFormComponent } from 'src/app/shared/components/data-form/data-form.component';

@Component({
  selector: 'app-pessoa-fisica',
  templateUrl: './pessoa-fisica.component.html',
  styleUrls: ['./pessoa-fisica.component.scss'],
})
export class PessoaFisicaComponent implements OnInit {
  breadcrumb = [
    { name: 'Cadastros' },
    { name: 'Pessoa Física', link: '/cadastros/pessoa/pessoafisica' },
  ];

  public form = [
    {
      placeholder: 'Informe o nome',
      required: true,
      formControlName: 'nome',
      type: 'text',
      label: 'Nome',
      class: 'col-3',
    },
    {
      placeholder: 'Informe o sobrenome',
      required: true,
      formControlName: 'sobrenome',
      type: 'password',
      label: 'Sobrenome',
      class: 'col-3',
    },
    {
      placeholder: 'Informe a data de nascimento',
      formControlName: 'dataNascimento',
      type: 'date',
      label: 'Data de nascimento',
      class: 'col-2',
    },
    {
      placeholder: 'Informe o sexo',
      required: true,
      formControlName: 'sexo',
      type: 'select',
      label: 'Sexo',
      class: 'col-2',
      selectOptions: ['Masculino', 'Feminino'],
    },
  ];

  @ViewChild('dynamicForm') dynamicForm!: DataFormComponent;

  constructor() {}

  ngOnInit() {}
}
