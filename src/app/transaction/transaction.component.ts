import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit {

  acno:any
  transactions:any
  constructor(private dataservice : DataService ,) { }

  ngOnInit(): void {

    this.acno = JSON.parse(localStorage.getItem('currentAcno') || '')
    this.dataservice.getTranscation(this.acno).subscribe((result:any)=>{
      this.transactions = result.transaction
     },
     result=>{
      alert(result.error.message)
     }
     )
    }
 
    
  }
  


