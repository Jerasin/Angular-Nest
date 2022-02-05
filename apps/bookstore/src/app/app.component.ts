import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Message } from '@web/api-interfaces';

@Component({
  selector: 'web-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  hello$ = this.http.get<Message>('/api/hello');
  users$ = this.http.get<Message>('/api/users/hello');
  constructor(private http: HttpClient) {}
}
