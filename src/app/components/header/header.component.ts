import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor(private auth: AuthService, private router: Router) {}

  sidebarOn = true;
  user: string = '';
  @Output() sidebarToggleEvent = new EventEmitter<boolean>();

  ngOnInit() {
    this.auth.user.subscribe((res: string) => {
      this.user = res;
    });
  }

  logOut() {
    this.auth.logout();
    this.router.navigate(['/login']);
  }

  toggleSidebar() {
    this.sidebarOn = !this.sidebarOn;
    this.sidebarToggleEvent.emit(this.sidebarOn);
  }
}
