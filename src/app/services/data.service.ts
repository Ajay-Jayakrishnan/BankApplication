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
//display name of user on login
currentUser :any;

  constructor() {
     this.getDetails()
    }
  //save to local storage
  saveDetails(){
    localStorage.setItem('database' , JSON.stringify(this.dataBase))
    if(this.currentUser){

      localStorage.setItem('currentUser',JSON.stringify(this.currentUser))
    }
  }
  //get from local storage
  getDetails(): void{
    this.dataBase = JSON.parse(localStorage.getItem('database')||'')

    this.currentUser=JSON.parse(localStorage.getItem('currentUser') || '')
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
        this.currentUser = userDetails[acno]['name']
        this.saveDetails();
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
  deposit(acno:any,pswd:any,amt:any){

    
    let userDetails = this.dataBase
    const amount =parseInt(amt)
    if(acno in userDetails){

      if(pswd == userDetails[acno]["password"]){
        userDetails[acno]['balance'] += amount;
        this.saveDetails();
        return   userDetails[acno]['balance'];


      }
      else{
        alert("wrong password")
        return false;
      }
    }
    else{
      alert("user doesnt exist")
      return false;
    }
  }
  withdraw(acno:any,pswd:any,amt:any){

    
    let userDetails = this.dataBase
    const amount =parseInt(amt)
    if(acno in userDetails){

      if(pswd == userDetails[acno]["password"]){
      
      if(userDetails[acno]['balance']>amount)
       { userDetails[acno]['balance'] -= amount;
        this.saveDetails();
        return   userDetails[acno]['balance'];
      
      
      }
      else{
        alert("insufficient balance")
      }
    }
      else{
        alert("wrong password")
        return false;
      }
    }
    else{
      alert("user doesnt exist")
      return false;
    }
  }
}

