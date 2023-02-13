import { Component, ViewChild } from '@angular/core';
import { DataFormComponent } from 'src/app/shared/components/data-form/data-form.component';
import { LoadingService } from 'src/app/shared/components/loading/loading.service';
import { AuthenticatorService } from 'src/app/shared/authenticator/authenticator.service';
import { LoginModel } from '../shared/models/LoginModel';
import { LoginService } from '../shared/models/login.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login-root.component.html',
  styleUrls: ['./login-root.component.scss'],
})
export class LoginRootComponent {
  @ViewChild('dynamicForm') dynamicForm!: DataFormComponent;

  public valid = false;

  public form = [
    {
      placeholder: 'Informe o usuário',
      required: true,
      formControlName: 'usuario',
      type: 'text',
      label: 'Usuário',
      class: 'col-9 mx-auto',
    },
    {
      placeholder: 'Informe a senha',
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
    private toastr: ToastrService,
    private loadingService: LoadingService,
    private router: Router
  ) {}

  submitLoginForm() {
    if (!this.dynamicForm.form.valid) {
      this.toastr.error('Preencha todos os campos');
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
        this.authenticatorService.definirUsuario(dadosLogin.Usuario);
        this.authenticatorService.definirToken(n.data);
        this.toastr.success('Sucesso!', 'Login efetuado.');
        this.loadingService.hide();
        this.router.navigate(['/']);
      },
      error: (e) => {
        this.toastr.error(e.error.data);
        this.loadingService.hide();
      },
    });
  }
}
