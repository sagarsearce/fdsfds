import { Component, OnInit } from '@angular/core';
import { FetchService } from '../../services/fetch/fetch.service';
import IUser from '../../entity/User';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(private fetch: FetchService) {}

  users: IUser[] = [];

  ngOnInit(): void {
    this.fetch.getUsers().subscribe((data: IUser[]) => {
      console.log(data);
      this.users = data;
    });
  }
}
