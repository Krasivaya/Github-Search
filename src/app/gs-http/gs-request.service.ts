import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { User } from "../gs-user-class/user";

@Injectable({
  providedIn: "root"
})
export class GsRequestService {
  user: User;
  constructor(private http: HttpClient) {
    this.user = new User('', '', 0, 0, new Date(),0);
  }
  addUser(newUser: string) {
    interface ApiResponse {
      avatar_url: any;
      login: string;
      followers: number;
      following: number;
      created_at: Date;
      public_repos: number;
    }
    let promise = new Promise((resolve, reject) => {
      this.http
        .get<ApiResponse>(
          "https://api.github.com/users/" +
            newUser +
            "?access_token=" +
            environment.key
        )
        .toPromise()
        .then(
          (results) => {
        console.log(promise);

            console.log(results);
            this.user.profile = results.avatar_url;
            this.user.name = results.login;
            this.user.follower = results.followers;
            this.user.following = results.following;
            this.user.joined = results.created_at;
            this.user.repo = results.public_repos;
            console.log(this.user);
  
            resolve();
          },
          (error) => {
            console.log(error);
            reject();
          }
        )
    })
    return promise
    // interface ApiResponse2 {
    //   name:

    // }
  }
}
