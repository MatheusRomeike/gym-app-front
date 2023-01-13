import { Component, ViewChild } from '@angular/core';
import { DataFormComponent } from 'src/app/shared/components/data-form/data-form.component';
import { LoadingService } from 'src/app/shared/components/loading/loading.service';
import { AlertService } from 'src/app/shared/components/modal/alert.service';
import { AutoComplete } from 'src/app/shared/enums/auto-complete.enum';
import { AuthenticatorService } from 'src/app/shared/authenticator/authenticator.service';
import { LoginModel } from './shared/models/LoginModel';
import { LoginService } from './shared/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  @ViewChild('dynamicForm') dynamicForm!: DataFormComponent;

  public valid = false;

  public lista = [
    {
      placeholder: 'Informe o usuário',
      maxLength: 50,
      required: true,
      formControlName: 'usuario',
      type: 'text',
      label: 'Usuário',
      class: 'col-9 mx-auto',
      option: AutoComplete.Login,
    },
    {
      placeholder: 'Informe a senha',
      maxLength: 50,
      required: true,
      formControlName: 'senha',
      type: 'password',
      label: 'Senha',
      class: 'col-9 mx-auto',
    },
  ];

  constructor(
    public loginService: LoginService,
    private authenticatorService: AuthenticatorService,
    private alertService: AlertService,
    private loadingService: LoadingService
  ) {}

  submitLoginForm() {
    if (!this.dynamicForm.form.valid) {
      this.alertService.error('Preencha todos os campos obrigatórios!');
      return;
    }

    var usuario = this.dynamicForm.form.get('usuario')!.value;
    var senha = this.dynamicForm.form.get('senha')!.value;

    var dadosLogin = new LoginModel(usuario, senha);
    this.logar(dadosLogin);
  }

  logar(dadosLogin: LoginModel) {
    this.loadingService.show();
    this.loginService.logar(dadosLogin).subscribe({
      next: (n) => {
        sessionStorage.setItem('usuario', dadosLogin.Usuario);
        this.authenticatorService.definirToken(n.data);
        this.alertService.success('Login realizado!');
        this.loadingService.hide();
        this.authenticatorService.logou();
      },
      error: (e) => {
        this.alertService.error(e.error.data);
        this.loadingService.hide();
      },
    });
  }
}
