import { Component } from '@angular/core';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.scss']
})
export class UserlistComponent {
  public login : string = '';
  public password : string = '';
  public email : string = '';
  public index!: number;
  public wrong : boolean = true;
  public wrongL !: boolean;
  public wrongP !: boolean;
  public wrongE !: boolean;
  public testLogin!:boolean;
  public testPassword!:boolean;
  public testEmail!:boolean;
  public arr: any = [];
  public new = false;
  public edit !: any;
  public delete !: any;
  public i !: number;
  public objEditStyle = {
    height: '30px',
    width: '45px',
    fontFamily: 'sans-serif',
    fontSize: '14px',
    padding: '3px',
    backgroundColor: 'rgb(243, 194, 17)',
    border: 'none',
    borderRadius: '2px'
  }
  public objDeleteStyle = {
    height: '30px',
    width: '55px',
    fontFamily: 'sans-serif',
    fontSize: '14px',
    padding: '3px',
    backgroundColor: 'rgb(243, 66, 66)',
    color: 'white',
    border: 'none',
    borderRadius: '2px'
  }
  
  constructor(){}
  
  validLogin(): void{
  let loginRegExp = /^[a-z]{4,16}$/i;
  this.testLogin = loginRegExp.test(this.login);
  if(this.testLogin){
      this.wrongL = false;
      this.valid();
  }
  else{
    this.wrongL = true;
  }
  
  }
  
  validPassword(): void {
  let passwordRegExp = /^[\w_\-\.]{4,16}$/i;
  this.testPassword = passwordRegExp.test(this.password);
  if(this.testPassword){
    this.wrongP = false;
    this.valid();
  
  }
  else{
    this.wrongP = true;
  }
  }
  
  validEmail(): void {
  let emailRegExp = /^[\w\-\.]{1,}@[a-z]{1,}\.[a-z]{1,}$/i;
  this.testEmail = emailRegExp.test(this.email);
  if(this.testEmail){
        this.wrongE = false;
        this.valid();
  }
  else{
    this.wrongE = true;
  }
  
  }
  valid() : void {
    if((this.login === '')||(this.password === '')||(this.email === '')){
      this.wrong = true;
    }
    else if(this.testLogin && this.testPassword && this.testEmail){
      this.wrong = false;
    }
    else{
      this.wrong = true;
    }
  }
  
  render(): void {
  let obj = [this.login, this.password, this.email];
  this.arr.push(obj);
  this.login = '';
  this.password = '';
  this.email = '';
  this.wrong = true;
  }
  
  deleteUser(ind : number): void{
   let a = this.arr.splice(ind,1)  
  }
  
  editUser(ind: number): void{
    this.login = this.arr[ind][0];
    this.password = this.arr[ind][1];
    this.email = this.arr[ind][2];
    this.wrong = false;
    this.i = ind;
    this.new = true;
  
  }
  
  renderEdit(ind: number): void{
    ind = this.i;
    this.arr[ind][0] = this.login;
    this.arr[ind][1] = this.password;
    this.arr[ind][2] = this.email;
    this.login ='';
    this.password = '';
    this.email = '';
    this.new = false;
  }
}
  
  