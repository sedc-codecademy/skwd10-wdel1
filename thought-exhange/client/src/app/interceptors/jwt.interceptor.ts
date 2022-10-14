import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { catchError, EMPTY, Observable, switchMap } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { NotificationService } from '../services/notification.service';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  constructor(
    private authService: AuthService,
    private notificationService: NotificationService
  ) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    // 1. Guarding against login and register routes
    if (request.url.includes('login') || request.url.includes('register')) {
      return next.handle(request);
    }
    const user = this.authService.currentUser$.value;

    // 2. Checking if user is logged in
    if (!user) return next.handle(request);

    // 3. Cloning request with new header
    const clonedRequest = request.clone({
      setHeaders: {
        Authorization: `Bearer ${user.token}`,
      },
    });

    return next.handle(clonedRequest).pipe(
      catchError((err) => {
        if (err.status === 403 && !err.url.includes('refresh-token')) {
          return this.authService.refreshAccessToken().pipe(
            switchMap((value) => {
              const clonedRequest = request.clone({
                setHeaders: {
                  Authorization: `Bearer ${value.token}`,
                },
              });
              return next.handle(clonedRequest);
            })
          );
        }

        this.authService.logoutUser();
        this.notificationService.showError('Please Login To Continue');

        return EMPTY;
      })
    );
  }
}
