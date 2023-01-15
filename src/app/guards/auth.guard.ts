import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanLoad,
  Route,
  Router,
  RouterStateSnapshot,
  UrlSegment,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticatorService } from '../shared/authenticator/authenticator.service';
import { AlertService } from '../shared/components/alert/alert.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(
    private authenticatorService: AuthenticatorService,
    private router: Router,
    private alertService: AlertService
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
    this.alertService.error(
      'Você precisa estar logado para acessar essa página!'
    );
    this.router.navigate(['/login']);
    return false;
  }
}
