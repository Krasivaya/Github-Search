import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../gs-user-class/user';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-gs',
  templateUrl: './gs.component.html',
  styleUrls: ['./gs.component.css']
})
export class GsComponent implements OnInit {

  addUser(newUser:string){
    interface ApiResponse1 {
      avatar_url: any;
      login: string;
      followers: number;
      following: number;
      created_at: Date;
      public_repos: number;
    }
    this.http.get<ApiResponse1>("https://api.github.com/users/"+newUser+"?access_token="+(environment.key)).subscribe(data => {
      this.user = new User(data.avatar_url, data.login, data.followers, data.following, data.created_at, data.public_repos)
    })
    // interface ApiResponse2 {
    //   name:

    // }
  }

  user:User;

  constructor(
    private http:HttpClient,) { }

  ngOnInit() { }

}
