export class User {
  constructor(
    public profile:any,
    public name:string,
    public follower:number,
    public following:number,
    public joined:Date,
    public repo:number,
    public html_url: any,
  ){}
}
