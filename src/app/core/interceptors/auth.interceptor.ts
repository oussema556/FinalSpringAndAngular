import { Injectable, Injector } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';

import { Observable } from 'rxjs';
import {AuthService} from "../Auth/auth.service";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private injector:Injector) {}

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let authService= this.injector.get(AuthService)
    let tokenizedReq = request.clone(
      {
        setHeaders: {
          Authorization :`Bearer ${authService.getToken()}`
        }
      }
    )
      return next.handle(tokenizedReq)

  }
}
