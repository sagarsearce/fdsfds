import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthService } from './../auth/auth.service';
@Injectable()
export class AuthGuardService implements CanActivate {
  isAuthenticated: boolean = false;

  constructor(public auth: AuthService, public router: Router) {
    this.auth.user.subscribe((user: string) => {
      this.isAuthenticated = user !== '';
    });
  }

  canActivate(): boolean {
    if (!this.isAuthenticated) {
      this.router.navigate(['login']);
      return false;
    }
    return true;
  }
}
