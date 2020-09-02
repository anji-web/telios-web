import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


const TOKEN_USER = "token-user";

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor(private http : HttpClient) { }

  loginUsingCredentials(credentials): Observable<any>{
    return this.http.post("http://localhost:9091/keycloak-api/token", {
      username : credentials.username,
      password: credentials.password
    })
  }

  createUserAccount(user): Observable<any>{
    return this.http.post("http://localhost:9091/keycloak-api/create", {
      username: user.username,
      email: user.email,
      firstName: user.firstName,
      lastName: user.lastName,
      address: user.address,
      password: user.password
    })
  }


  logout(){
    window.sessionStorage.clear();
  }

  // manage token
  public saveToken(token : string): void{
    window.sessionStorage.removeItem(TOKEN_USER);
    window.sessionStorage.setItem(TOKEN_USER,token);
  }

  public getToken(){
    return window.sessionStorage.getItem(TOKEN_USER);
  }

  public saveUser(user):void{
      window.sessionStorage.removeItem(TOKEN_USER);
      window.sessionStorage.setItem(TOKEN_USER, JSON.stringify(user));
  }

  public getUser(){
    return JSON.parse(sessionStorage.getItem(TOKEN_USER))
  }

}
