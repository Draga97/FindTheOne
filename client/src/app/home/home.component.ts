import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { User } from '../_models/user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  registerMode: boolean;
  users: any;

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
  }

  register(){
    this.registerMode=true;
  }
  

  getUsers(){
  this.http.get<User>('https://localhost:5001/api/users').subscribe(users=>this.users=users)
  }

  cancelRegisterMode(event: boolean){
    this.registerMode=event;
  }

}
