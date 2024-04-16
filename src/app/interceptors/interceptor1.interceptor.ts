import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class Interceptor1Interceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    request: HttpRequest<unknown>, //envio de peticion
    next: HttpHandler //permiso para continuar
  ): Observable<HttpEvent<unknown>> {
    const headers = request.clone({
      //cabecera custom
      headers: request.headers.set('x-user', 'Marcos Bacete'),
    });
    return next.handle(headers);
  }
}
