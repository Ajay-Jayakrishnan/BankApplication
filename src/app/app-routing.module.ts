import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashBoardComponent } from './dash-board/dash-board.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { TransactionComponent } from './transaction/transaction.component';


const routes: Routes = [
  //login page
  {
    path:'',component:LoginComponent
  },
  //dashBoard
 
  //register
  {
    path:'register',component:RegisterComponent
  },
  {path:'dash',component:DashBoardComponent},
  //transaction History
  {path:'transaction',component:TransactionComponent}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
