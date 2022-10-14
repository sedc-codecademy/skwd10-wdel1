import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, map, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { LoggedInUser } from '../interfaces/user.interface';
import { NotificationService } from './notification.service';

const { API_URL } = environment;

export interface RegisterUserData {
  username: string;
  email: string;
  password: string;
}

export interface RefreshTokenResponse {
  token: string;
  newRefreshToken: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  currentUser$ = new BehaviorSubject<LoggedInUser | null>(null);

  constructor(
    private router: Router,
    private http: HttpClient,
    private notificationService: NotificationService
  ) {
    this.currentUser$.next(this.getUserFromLocalStorage());
  }

  loginUser(email: string, password: string) {
    this.http
      .post(`${API_URL}/auth/login`, { email, password })
      .pipe(map((value) => value as LoggedInUser))
      .subscribe({
        next: (user) => {
          console.log(user);
          this.currentUser$.next(user);
          this.saveUserInLocalStorage(user);
          this.router.navigate(['posts']);
        },
        error: (error) => {
          this.notificationService.showError(error.error);
        },
      });
  }

  registerUser(registerData: RegisterUserData) {
    this.http
      .post(`${API_URL}/auth/register`, registerData)
      .pipe(map((value) => value as { message: string }))
      .subscribe({
        next: (value) => {
          this.notificationService.showSuccess(value.message);
          this.router.navigate(['auth', 'login']);
        },
        error: (error) => {
          this.notificationService.showError(error.error.message);
        },
      });
  }

  refreshAccessToken() {
    const refreshToken = this.currentUser$.value?.refreshToken;

    return this.http
      .post(`${API_URL}/auth/refresh-token`, { refreshToken })
      .pipe(
        map((value) => value as RefreshTokenResponse),
        tap((value) => {
          const user = this.currentUser$.value;

          const { token, newRefreshToken: refreshToken } = value;

          if (user) {
            const updatedUser: LoggedInUser = {
              ...user,
              token,
              refreshToken,
            };

            this.saveUserInLocalStorage(updatedUser);
            this.currentUser$.next(updatedUser);
          }
        })
      );
  }

  logoutUser() {
    this.currentUser$.next(null);
    localStorage.clear();
    this.router.navigate(['']);
  }

  saveUserInLocalStorage(user: LoggedInUser) {
    localStorage.setItem('currentUser', JSON.stringify(user));
  }

  getUserFromLocalStorage(): LoggedInUser | null {
    const user = localStorage.getItem('currentUser');

    return user ? JSON.parse(user) : null;
  }
}
