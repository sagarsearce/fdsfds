import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import IUser from './../../entity/User';

@Injectable({
  providedIn: 'root',
})
export class FetchService {
  ApiUrl = 'https://reqres.in/api/users';
  constructor(private http: HttpClient) {}

  getUsers() {
    return this.http.get<IUser>(this.ApiUrl).pipe(map((res: any) => res.data));
  }
}
