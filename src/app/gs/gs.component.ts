import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../gs-user-class/user';
import { environment } from 'src/environments/environment';
import { Repo } from '../gs-repo-class/repo';

@Component({
  selector: 'app-gs',
  templateUrl: './gs.component.html',
  styleUrls: ['./gs.component.css']
})
export class GsComponent implements OnInit {

  user:User;
  repo: Repo;
  addUser(newUser:string){
    interface ApiResponse1 {
      avatar_url: any;
      login: string;
      followers: number;
      following: number;
      created_at: Date;
      public_repos: number;
    }
    this.http.get<ApiResponse1>("https://api.github.com/users/"+newUser+"?access_token="+(environment.key)).subscribe(data1 => {
      this.user = new User(data1.avatar_url, data1.login, data1.followers, data1.following, data1.created_at, data1.public_repos)
    })

    interface ApiResponse2 {
      name: string;
      description: string;
      language: string;
      html_url: any;
    }
    this.http.get<ApiResponse2>("https://api.github.com/users/"+newUser+"/repos").subscribe(data2 => {
      this.repo = new Repo(data2.name, data2.description, data2.language, data2.html_url)
    })
  }


  constructor(
    private http:HttpClient,) { }

  ngOnInit() { }

}
