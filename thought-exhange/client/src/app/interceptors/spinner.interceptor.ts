import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { SpinnerService } from '../services/spinner.service';

@Injectable()
export class SpinnerInterceptor implements HttpInterceptor {
  constructor(private spinnerService: SpinnerService) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    // 1. When first request is intercepted
    this.spinnerService.showSpinner();

    return next.handle(request).pipe(
      tap({
        // 2. Hiding spinner when request is finished and observable completes or errors out
        error: () => this.spinnerService.hideSpinner(),
        complete: () => this.spinnerService.hideSpinner(),
      })
    );
  }
}
