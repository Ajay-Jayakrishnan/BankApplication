import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  uname =''
  acno = ''
  pswd = ''
  ServiceService: any;
  router: any;

  constructor() { }

  ngOnInit(): void {
  }
  register(){
    var acno = this.acno
    var uname = this.uname
    var pswd = this.pswd
    const result = this.ServiceService.register(uname,acno,pswd)
    if(result){
      alert("registered successfully")
      this.router.navigateByUrl('')
    }
    else {
      alert("user already exist please login")
    }
    alert("register clicked")
  }

}
