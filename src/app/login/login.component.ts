import { Component, OnInit } from '@angular/core';
import { TokenService } from '../service/token.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { Router } from '@angular/router';
import { error } from '@angular/compiler/src/util';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: any = {};
  roles: String[] = [];

  constructor(private service: TokenService, private spinner: NgxSpinnerService, private route: Router) { }

  ngOnInit(): void {
    this.clearStorage();

  }

 loginUser(){
   this.service.loginUsingCredentials(this.form).subscribe(
     data => {
       this.service.saveToken(data.token);
       this.service.saveUser(data);
       this.roles = this.service.getUser().roles;
       this.spinner.show();
       this.reloadData();
       this.loginAlert();
       this.route.navigate(["/home"])
     },
     error => this.errorAlert(error)
   )
 }

 clearStorage(){
   window.sessionStorage.clear();
 }

 errorAlert(message: string){
   alert("Login failed" + message.toString())
 }

 loginAlert(){
   alert("Login Success");
 }

 reloadData(){
   window.location.reload
 }

}
