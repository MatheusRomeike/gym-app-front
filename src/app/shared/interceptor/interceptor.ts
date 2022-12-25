import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpHeaders,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, throwError } from 'rxjs';
import { AuthenticatorService } from '../services/authenticator.service';

@Injectable({
  providedIn: 'root',
})
export class Interceptor implements HttpInterceptor {
  constructor(private authenticatorService: AuthenticatorService) {}

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
          `Bearer ${this.authenticatorService.obterToken()}`
        );
    }

    var request = req.clone({ headers });
    return next.handle(request).pipe(
      map((event) => {
        return event;
      }),
      catchError((error: HttpErrorResponse) => {
        if (error.status == 401) {
          this.authenticatorService.limparToken();
        }
        return throwError(() => new Error(error.message));
      })
    );
  }
}
