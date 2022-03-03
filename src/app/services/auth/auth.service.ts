import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  localuser: string | null = localStorage.getItem('user');
  initialValue: string;
  private userSub: any;
  user: Observable<string>;

  constructor() {
    if (this.localuser != null) {
      this.initialValue = this.localuser;
    } else {
      this.initialValue = '';
    }
    this.userSub = new BehaviorSubject(this.initialValue);
    this.user = this.userSub.asObservable();
  }

  login(email: string, password: string) {
    let email1 = 'samcom@gmail.com';
    let email2 = 'samcomtechnobrains@gmail.com';
    let password1 = '123';
    let password2 = 'sam123@';

    if (
      (email === email1 && password === password1) ||
      (email === email2 && password === password2)
    ) {
      localStorage.setItem('user', email);
      this.userSub.next(email);
    } else {
      alert('Email Or Password is incorrect! please try again...');
    }
  }

  logout() {
    localStorage.removeItem('user');
    this.userSub.next('');
  }
}
