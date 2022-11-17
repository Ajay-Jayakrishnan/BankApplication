import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
const options = {
  headers : new HttpHeaders
}

@Injectable({
  providedIn: 'root'
})
export class DataService {
  //database
  dataBase :any = {
    1000:{acno:1000,name:"ajay",password:1000,balance:2000,transaction:[],},
    1001:{acno:1001,name:"basil",password:1001,balance:4000},transaction:[],
    1002:{acno:1002,name:"christo",password:1002,balance:4000,transaction:[]}
  }
//display name of user on login
currentUser :any;
//for transaction history of logged user
currentAcno:any;
//injecting http client module dependency to process http requests

  constructor( private http:HttpClient) {
  
    
    }
  //save to local storage
  saveDetails(){
    localStorage.setItem('database' , JSON.stringify(this.dataBase))
    if(this.currentUser){

      localStorage.setItem('currentUser',JSON.stringify(this.currentUser))
    }
    if(this.currentAcno){
      localStorage.setItem('currentAcno',JSON.stringify(this.currentAcno))
    }
  }
  //get from local storage
  getDetails(): void{
    if (localStorage.getItem('database')) {
      this.dataBase = JSON.parse(localStorage.getItem('database')||'')
    }
    
if(localStorage.getItem('currentUser')){
  this.currentUser=JSON.parse(localStorage.getItem('currentUser') || '')
}
if(localStorage.getItem('currentAcno')){
  this.currentAcno=JSON.parse(localStorage.getItem('currentAcno') || '')
}
   
  
  }

  //register function
  register(usename:any,acno:any,password:any){
    const body = {
      usename,
      acno,
      password
    }
        
   return this.http.post('http://localhost:3000/register',body)
  }
  //login function
  login(acno:any,pswd:any){
    const body ={
      acno,pswd
    }
    return this.http.post('http://localhost:3000/login',body)
  }
     
  
  deposit(acno:any,pswd:any,amt:any){
     
   const body = {
    acno,
    pswd,amt
    }
    return this.http.post('http://localhost:3000/deposit',body,this.gettoken())
  }
  //to get token
 gettoken = () => {
//taking token from loacal storage
var token = JSON.parse(localStorage.getItem('token') || '') 
//create a request header
let headers = new HttpHeaders()
headers = headers.append('x-headtoken',token)
//function overloading
options.headers = headers
return options
  }
    
    
  
  withdraw(acno:any,pswd:any,amt:any){
     
    const body = {
     acno,
     pswd,amt
     }
     return this.http.post('http://localhost:3000/withdraw',body,this.gettoken())
   }
  getTranscation(acno:any){
    const body = {
      acno
      
    }
  return this.http.post('http://localhost:3000/getTranscation',body)
  }
 deleteAcc(acno:any){
  return this.http.delete('http://localhost:3000/deleteAcc/'+acno)
  }
}

