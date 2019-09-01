import { Component, OnInit } from '@angular/core';
import { GsRequestService } from '../gs-http/gs-request.service'
import { resolve } from 'q';

@Component({
  selector: 'app-gs',
  templateUrl: './gs.component.html',
  styleUrls: ['./gs.component.css']
})
export class GsComponent implements OnInit {

  newUser:string;
  repos:any[];
  public gs: any[];

  constructor(
    public gsService:GsRequestService,
    ) { }
    addNew(){
      let promise = new Promise((resolve,reject) => {
        this.gsService.getUser().toPromise().then(gs => {
          console.log(gs)
          this.gs = gs;
          resolve()
        },error => {
          console.log(error)
          this.gs = error;
          reject(error)
        })
        this.gsService.updateUser(this.newUser);
        this.gsService.getRepo().toPromise().then(repos => {
          console.log(repos)
          this.repos = repos;
          resolve()
        },error =>{
          console.log(error)
          this.gs = error;
          reject(error)
        })
      })
      return promise
    }
  ngOnInit() {}

}
