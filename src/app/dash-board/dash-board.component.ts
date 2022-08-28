import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators } from '@angular/forms';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
  styleUrls: ['./dash-board.component.css']
})
export class DashBoardComponent implements OnInit {

  user:any

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


constructor(private formBuilder:FormBuilder , private dataservice :DataService) { }

  ngOnInit(): void {
    this.user = this.dataservice.currentUser
  }
 
  withdraw(){
    var acno = this.withdrawForm.value.acno;
    var pswd = this.withdrawForm.value.pswd;
    var amount= this.withdrawForm.value.amount;
    const result = this.dataservice.withdraw(acno,pswd,amount)
    if(result){
      
      alert(`${amount} withdraw successfull  : new balance is${ result}`)
    }
  }
  deposit(){
    var acno = this.depositForm.value.acno;
    var pswd = this.depositForm.value.pswd;
    var amount= this.depositForm.value.amount;

  
  
  
  const result = this.dataservice.deposit(acno,pswd,amount)
    if(result){
      
      alert(`${amount} deposited successfully : new balance is${ result}`)
    }
  }
}

  
 

