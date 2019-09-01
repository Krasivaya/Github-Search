import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { User } from "../gs-user-class/user";
import { Repo } from '../gs-repo-class/repo';

@Injectable({
  providedIn: "root"
})
export class GsRequestService {
  user: User;
  repo: Repo;
  newUser: string;
  constructor(private http:HttpClient){}

  getUser() {
    interface ApiResponse{
      // avatar_url: any;
      // login: string;
      // followers: number;
      // following: number;
      // created_at: Date;
      // public_repos: number;
      // html_url:any;
    }
    // return this.http.get<ApiResponse[]>("https://api.github.com/users/"+this.newUser+"?access_token="+(environment.key))
    return this.http.get<ApiResponse[]>("https://api.github.com/users/"+this.newUser+"?access_token=33b89d0a6f877fb4d26919aa947f3d3075a5e1bf")
  }
  updateUser(newUser:string) {
    this.newUser = newUser;
  }
  getRepo() {
    interface ApiResponse{
      // name: string;
      // description: string;
      // language: string;
      // html_url: any;
    }
    // return this.http.get<ApiResponse[]>("https://api.github.com/users/"+this.newUser+"/repos?access_token="+(environment.key))
    return this.http.get<ApiResponse[]>("https://api.github.com/users/"+this.newUser+"/repos?access_token=33b89d0a6f877fb4d26919aa947f3d3075a5e1bf")
  }
}
