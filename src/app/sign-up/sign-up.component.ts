import { Component, OnInit } from '@angular/core';
import { TokenService } from '../service/token.service';
import { Router } from '@angular/router';
import { error } from '@angular/compiler/src/util';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  form: any = {};
  success: boolean = false
  constructor(private service: TokenService, private route : Router) { }

  ngOnInit(): void {
  }

  createAccount(){
    this.service.createUserAccount(this.form).subscribe(
      data => {
        this.service.saveUser(data);
        this.success = true
        alert("Create account success");
        this.route.navigate(["/"]);
      },
      error => alert("create account failed" + error)
    )
  }

}
