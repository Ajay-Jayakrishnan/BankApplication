import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators } from '@angular/forms';

@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
  styleUrls: ['./dash-board.component.css']
})
export class DashBoardComponent implements OnInit {

  depositForm = this.formBuilder.group(
 {
      amount:['',[Validators.required,Validators.pattern('[0-9]')]],
      acno:['',[Validators.required,Validators.pattern('[0-9]*')]],
      pswd:['',[Validators.required,Validators.pattern('[0-9 a-z A-Z]*')]]

    })

  withdrawForm = this.formBuilder.group(

    {
      amount:['',[Validators.required,Validators.pattern('[0-9]')]],
      acno:['',[Validators.required,Validators.pattern('[0-9]*')]],
      pswd:['',[Validators.required,Validators.pattern('[0-9 a-z A-Z]*')]]

    }
  )

constructor(private formBuilder:FormBuilder) { }

  ngOnInit(): void {
  }
  withdraw(){
    var acno = this.withdrawForm.value.acno;
    var pswd = this.withdrawForm.value.pswd;
    var amount= this.withdrawForm.value.amount;
  }
  deposit(){
    var acno = this.depositForm.value.acno;
    var pswd = this.depositForm.value.pswd;
    var amount= this.depositForm.value.amount;
  }
 

}