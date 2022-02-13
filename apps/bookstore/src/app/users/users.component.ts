import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Message , ItemList } from '@web/api-interfaces';

@Component({
  selector: 'web-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  hello$ = this.http.get<Message>('/api/hello');
  users$ = this.http.get<Message>('/api/users/hello');
  itemList$ = this.http.get<ItemList>('/api/itemList');
  items:string[] = []
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.itemList$.subscribe(async(res)=>{
      console.log(res.result)
      res.result.forEach((data)=>{
        this.items.push(data) 
      })
    })
  }


}
