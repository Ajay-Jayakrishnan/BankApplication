import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  //database
  dataBase :any = {
    1000:{acno:1000,name:"ajay",password:1000,balance:2000},
    1001:{acno:1001,name:"basil",password:1001,balance:4000},
    1002:{acno:1002,name:"christo",password:1002,balance:4000}
  }

  constructor() { this.getDetails()}
  //save to local storage
  saveDetails(){
    localStorage.setItem('database' , JSON.stringify(this.dataBase))
  }
  //get from locat storage
  getDetails(){
    this.dataBase = JSON.parse(localStorage.getItem('database')||'')
  }

  //register function
  register(usename:any,acno:any,password:any){
        
    let dataBase =this.dataBase
    if(acno in dataBase){
      return false
    }
    else{
      dataBase[acno] = {
        acno,
        usename,
        password,
        balance : 0,
        
      }
      this.saveDetails()
      return true
    }
  }
  //login function
  login(acno:any,pswd:any){
   
    
    let userDetails = this.dataBase
    if(acno in userDetails){
      if(pswd == userDetails[acno]['password']){
        return true
      }
      else{
        alert("wrong Password")
        return false
      }
    }
    else{
      alert("User doesnt exist")
      return false
    }
    
  }
}
