import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { LoadingService } from 'src/app/shared/components/loading/loading.service';
import { AlertService } from 'src/app/shared/components/modal/alert.service';
import { AuthenticatorService } from 'src/app/shared/services/authenticator.service';
import { LoginModel } from './shared/models/LoginModel';
import { LoginService } from './shared/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  public loginForm!: FormGroup;
  public testeForm!: FormGroup;
  public lista!: any;

  constructor(
    private formBuilder: FormBuilder,
    public loginService: LoginService,
    private authenticatorService: AuthenticatorService,
    private alertService: AlertService,
    private loadingService: LoadingService
  ) {}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      usuario: ['', [Validators.required, Validators.maxLength(50)]],
      senha: ['', [Validators.required, Validators.maxLength(50)]],
    });

    this.testeForm = this.formBuilder.group({
      teste: ['', [Validators.required]],
    });

    this.lista = [
      {
        placeholder: 'Informe o usuário',
        maxLength: 50,
        required: true,
        formControlName: 'usuario',
        type: 'text',
        control: new FormControl('', [
          Validators.required,
          Validators.maxLength(50),
        ]),
      },
      {
        placeholder: 'Informe a senha',
        maxLength: 50,
        required: true,
        formControlName: 'senha',
        type: 'password',
        control: new FormControl('', [
          Validators.required,
          Validators.maxLength(50),
        ]),
      },
    ];
  }

  submitLoginForm() {
    var dadosLogin = this.loginForm.getRawValue() as LoginModel;
    if (this.loginForm.valid) {
      this.loadingService.show();
      this.loginService.logar(dadosLogin).subscribe({
        next: (n) => {
          sessionStorage.setItem(
            'usuario',
            this.loginForm.get('usuario')?.value
          );
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
}
