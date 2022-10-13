import { Component, OnInit } from '@angular/core';
import { LoggedInUser } from 'src/app/interfaces/user.interface';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  activeClass = 'active';

  isDropdownOpen = false;

  currentUser: LoggedInUser | null = null;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.authService.currentUser$.subscribe((value) => {
      this.currentUser = value;
    });
  }

  onLogout() {
    this.authService.logoutUser();
    this.isDropdownOpen = false;
  }

  onDropdownToggle() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }
}
