import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
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
    public loginService: LoginService
  ) {}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      usuario: ['', [Validators.required, Validators.maxLength(50)]],
      senha: ['', [Validators.required, Validators.maxLength(50)]],
    });
  }

  submitLogin() {
    var dadosLogin = this.loginForm.getRawValue() as LoginModel;

    this.loginService.logar(dadosLogin).subscribe((data) => {
      this.token = data.data;
      this.router.navigate(['/teste']);
    });
  }
}
