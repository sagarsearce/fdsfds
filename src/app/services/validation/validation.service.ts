import { Injectable, Component } from '@angular/core';
import { FormControl, FormGroup, ValidatorFn } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class ValidationService {
  constructor() {}

  validateemail(control: FormControl) {
    var re = /\S+@\S+\.\S+/;
    if (control.value === '') {
      return { err: '* email is required field.' };
    } else if (!control.value.match(re)) {
      return { err: '* enter valid Email abc@abc.abc' };
    } else if (
      control.value !== 'samcom@gmail.com' &&
      control.value !== 'samcomtechnobrains@gmail.com'
    ) {
      return { err: '* email is not matching ' };
    } else {
      return null;
    }
  }

  validatepassword(control: FormControl) {
    if (control.value === '') {
      return { err: '* password is required field.' };
    } else if (control.value !== '123' && control.value !== 'sam123@') {
      return { err: '* wrong password !!' };
    } else {
      return null;
    }
  }
}
