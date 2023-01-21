import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthenticatorService } from '../shared/authenticator/authenticator.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(
    private authenticatorService: AuthenticatorService,
    private router: Router,
    private toastr: ToastrService
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    if (route!.component!.name === 'LoginRootComponent') {
      this.authenticatorService.limparDados();
      return true;
    }

    if (this.authenticatorService.autenticado()) {
      return true;
    }
    this.toastr.error('Você precisa estar logado para acessar essa página!');
    this.router.navigate(['/login']);
    return false;
  }
}
