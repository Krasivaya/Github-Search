import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../gs-user-class/user';
import { Repo} from '../gs-repo-class/repo';
import { environment } from 'src/environments/environment';
import { GsRequestService } from '../gs-http/gs-request.service'

@Component({
  selector: 'app-gs',
  templateUrl: './gs.component.html',
  styleUrls: ['./gs.component.css']
})
export class GsComponent implements OnInit {

  users:User;
  repo:Repo;

  constructor(
    public userHttp:GsRequestService,
    // public gsService: GsRequestService,
    ) { }

    addNew(newUser) {
      this.userHttp.addUser(newUser).then(
        (success) => {
          this.users = this.userHttp.user;
        },
        (error) => {}
      )
    }

  // addUser(newUser:string){
  //   interface ApiResponse1 {
  //     avatar_url: any;
  //     login: string;
  //     followers: number;
  //     following: number;
  //     created_at: Date;
  //     public_repos: number;
  //   }
  //   this.http.get<ApiResponse1>("https://api.github.com/users/"+newUser+"?access_token="+(environment.key)).subscribe(data1 => {
  //     this.user = new User(data1.avatar_url, data1.login, data1.followers, data1.following, data1.created_at, data1.public_repos)
  //   })

  //   interface ApiResponse2 {
  //     name: string;
  //     description: string;
  //     language: string;
  //     html_url: any;
  //   }
  //   this.http.get<ApiResponse2>("https://api.github.com/users/"+newUser+"/repos?access_token="+(environment.key)).subscribe(data2 => {
  //     this.repo = new Repo(data2.name, data2.description, data2.language, data2.html_url, )
  //   })
  // }

  ngOnInit() {
    this.addNew('Krasivaya')
    // this.gsService.addUser(newUser);
    // this.user = this.gsService.user;
  }

}
