import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ValidationService } from 'src/app/services/validation/validation.service';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  admin = this.fb.group({
    email: ['', this.formvalidate.validateemail],
    password: ['', this.formvalidate.validatepassword],
  });

  isTermsAccepted: boolean = false;
  isOpen: boolean = false;
  constructor(
    private fb: FormBuilder,
    private formvalidate: ValidationService,
    private route: Router,
    private auth: AuthService
  ) {}

  ngOnInit() {
    this.auth.user.subscribe((user: string) => {
      if (user) {
        this.route.navigate(['']);
      }
    });
  }

  login() {
    this.auth.login(this.admin.value.email, this.admin.value.password);
    this.route.navigate(['/home']);
  }

  get email() {
    return this.admin.get('email');
  }

  get password() {
    return this.admin.get('password');
  }

  checkBoxChange() {
    this.isOpen = !this.isOpen;
    if (!this.isOpen) {
      this.isTermsAccepted = false;
    }
  }

  acceptCondition() {
    this.isTermsAccepted = true;
  }
}
