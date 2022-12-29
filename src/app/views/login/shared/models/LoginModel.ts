export class LoginModel {
  Usuario!: string;
  Senha!: String;

  constructor(usuario: string, senha: string) {
    this.Usuario = usuario;
    this.Senha = senha;
  }
}
