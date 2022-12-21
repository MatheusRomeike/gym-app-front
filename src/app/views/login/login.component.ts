import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
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
  loginForm!: FormGroup;
  public token: any;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    public loginService: LoginService,
    private authenticatorService: AuthenticatorService,
    private alertService: AlertService
  ) {}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      usuario: ['', [Validators.required, Validators.maxLength(50)]],
      senha: ['', [Validators.required, Validators.maxLength(50)]],
    });
  }

  submitLoginForm() {
    var dadosLogin = this.loginForm.getRawValue() as LoginModel;
    if (this.loginForm.valid) {
      this.loginService.logar(dadosLogin).subscribe({
        next: (n) => {
          this.authenticatorService.definirToken(n.data);
          this.alertService.success('Entrou.');
          this.router.navigate(['/logged']);
        },
        error: (e) => {
          this.alertService.error(e.error.data);
        },
      });
    }
  }
}
