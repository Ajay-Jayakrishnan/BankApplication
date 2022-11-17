import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DeleteconfirmComponent } from '../deleteconfirm/deleteconfirm.component';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
  styleUrls: ['./dash-board.component.css']
})
export class DashBoardComponent implements OnInit {

  user:any
  Acno:any
  depositForm = this.formBuilder.group(
 {
      amount:['',[Validators.required,Validators.pattern('[0-9]')]],
      acno:['',[Validators.required,Validators.pattern('[0-9]*')]],
      pswd:['',[Validators.required,Validators.pattern('[0-9 a-zA-Z]*')]]

    })

  withdrawForm = this.formBuilder.group(

    {
      amount:['',[Validators.required,Validators.pattern('[0-9]')]],
      acno:['',[Validators.required,Validators.pattern('[0-9]*')]],
      pswd:['',[Validators.required,Validators.pattern('[0-9 a-z A-Z]*')]]

    }
  )


constructor(private formBuilder:FormBuilder , private dataservice :DataService,private router:Router,) { }

  ngOnInit(): void {

    if (!localStorage.getItem('token'))  {
      alert("please Login")
      this.router.navigateByUrl('')
    }
    if(localStorage.getItem('currentUser')){
      this.user = JSON.parse(localStorage.getItem('currentUser') || '')
    }

    
  }
 
  withdraw(){
    var acno = this.withdrawForm.value.acno;
    var pswd = this.withdrawForm.value.pswd;
    var amount= this.withdrawForm.value.amount;
    const result = this.dataservice.withdraw(acno,pswd,amount)
    this.dataservice.withdraw(acno,pswd,amount).subscribe((result:any)=>{
      alert(result.message)
     },
     result=>{
      alert(result.error.message)
     }
     )
  }
  deposit(){
    var acno = this.depositForm.value.acno;
    var pswd = this.depositForm.value.pswd;
    var amount= this.depositForm.value.amount;

  
  
  
this.dataservice.deposit(acno,pswd,amount).subscribe((result:any)=>{
  alert(result.message)
 },
 result=>{
  alert(result.error.message)
 }
 )
}
    
  logout(){
    localStorage.removeItem("currentUser")
    localStorage.removeItem("currentAcno")
    localStorage.removeItem("token")
    this.router.navigateByUrl('')
  }

  deleteAcc(){
    this.Acno=JSON.parse(localStorage.getItem('currentAcno') || '')
  }
 cancel(){
  this.Acno=''
 }
 yes(event:any){
this.dataservice.deleteAcc(event).subscribe((result:any)=>{
  alert(result.message)
  this.logout()
},
result=>{
  alert(result.error.message)
}
)
 }
  
}

  
 

