import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DashBoardComponent } from '../dash-board/dash-board.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  // <!-- tag binding -->
  welcome ="Your Banking Starts Here.."
  // <!-- attribute Binding -->
  placeHol =" Please enter account number"
   pswd = ""
   acno = ""
  dataBase :any = {
    1000:{acno:1000,name:"ajay",password:1000,balance:2000},
    1001:{acno:1001,name:"basil",password:1001,balance:4000},
    1002:{acno:1002,name:"christo",password:1002,balance:4000}
  }
  ServiceService: any;

  constructor(private router:Router , ) { }

  ngOnInit(): void {
  }
  //user defined functions should be here
//   login(){
    
//     var acno = this.acno
//     var pass = this.pswd
//     var userData = this.dataBase
//     if( acno in userData){
//       if(pass == userData[acno]['password']){
//         alert("login successful")
//       }
//       else{
//         alert("wrong Password")
//       }
//     }
//     else{
//       alert("User doesnt exist")
//     }
//   }
//    acnoin(event:any) {
//     this.pswd = event.target.value
   
    
//   }
// passin(event:any){
//   this.acno  =  event.target.value
// }
// }
  
// }
// temaplate reference method..................................
// login(a:any,p:any){
    
//   var acno = a.value
//   var pass = p.value
//   let userData = this.dataBase
//   if( acno in userData){
//     if(pass == userData[acno]['password']){
//       alert("login successful")
//     }
//     else{
//       alert("wrong Password")
//     }
//   }
//   else{
//     alert("User doesnt exist")
//   }
// }
// }
  login(){
    
    var acno = this.acno
    var pass = this.pswd
    var userData = this.dataBase
  const result = this.ServiceService.login(acno,pass)
  if(result){
    alert("login successful")
    this.router.navigateByUrl('dashBoard')
  }
  }
 
}

  