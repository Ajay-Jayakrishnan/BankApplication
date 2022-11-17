import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DashBoardComponent } from '../dash-board/dash-board.component';
import { DataService } from '../services/data.service';


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
   pswd =''
   acno =''
  

 
    loginForm = this.formBuilder.group(
      {
       
        acno :['',[Validators.required,Validators.pattern('[0-9]*')]],
        
        
        pswd:['',[Validators.required,Validators.pattern('[a-zA-Z 0-9]*')]],
      }
    )
  
  

  constructor(private router:Router , private dataService:DataService,private formBuilder:FormBuilder ) { }

  ngOnInit(): void {
  }

  login(){
    var acno = this.loginForm.value.acno
    var pswd = this.loginForm.value.pswd

   
    
  
    if(this.loginForm.valid){
      this.dataService.login(acno,pswd).subscribe((result:any)=>{
        localStorage.setItem('currentUser',JSON.stringify(result.currentUser))
        localStorage.setItem('currentAcno',JSON.stringify(result.currentAcno))
        localStorage.setItem('token',JSON.stringify(result.token))
        alert(result.message)
        this.router.navigateByUrl('dash')
      },
      result=>{
        alert(result.error.message)
      }
      )
    }
  else{
    alert("invalid input")
  }
}}