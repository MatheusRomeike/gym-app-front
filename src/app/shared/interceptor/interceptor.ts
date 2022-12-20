import {
  HttpEvent,
  HttpHandler,
  HttpHeaders,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { finalize, map, Observable } from 'rxjs';
import { LoadingService } from '../components/loading/loading.service';
import { AuthenticatorService } from '../services/authenticator.service';

@Injectable({
  providedIn: 'root',
})
export class Interceptor implements HttpInterceptor {
  constructor(
    private authenticatorService: AuthenticatorService,
    private loadingService: LoadingService
  ) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    var headers;

    if (req.body instanceof FormData) {
      headers: new HttpHeaders({
        contentType: 'false',
        processData: 'false',
        Authorization: `Bearer ${this.authenticatorService.obterToken()}`,
      });
    } else {
      headers: new HttpHeaders()
        .append('accept', 'application/json')
        .append('Content-type', 'application/json')
        .append(
          'Authorization',
          `Bearer ${this.authenticatorService.obterToken}`
        );
    }

    var request = req.clone({ headers });
    this.loadingService.show();
    return next.handle(request).pipe(
      map((event) => {
        return event;
      }),
      finalize(() => {
        this.loadingService.hide();
      })
    );
  }
}
