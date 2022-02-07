import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Message } from '@web/api-interfaces';

@Component({
  selector: 'web-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {
  hello$ = this.http.get<Message>('/api/hello');
  users$ = this.http.get<Message>('/api/users/hello');
  constructor(private http: HttpClient) {}
}
