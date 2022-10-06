import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  currentUser$ = new BehaviorSubject<string | null>(null);

  constructor(private router: Router) {}

  loginUser(email: string) {
    this.currentUser$.next(email);
    this.router.navigate(['posts']);
  }

  logoutUser() {
    this.currentUser$.next(null);
    this.router.navigate(['']);
  }
}
