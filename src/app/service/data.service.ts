import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { TokenService } from './token.service';
import { UserList } from "../data/UserList";
import { tap, catchError } from "rxjs/operators";

const TOKEN_KEY = "token-user"


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient, private service: TokenService) { }

  getListUser(): Observable<UserList[]>{
    let token = JSON.parse(window.sessionStorage.getItem(TOKEN_KEY)).access_token
    return this.http.get<UserList[]>("http://localhost:9091/data-api/list-user", {
      headers: {
        Authorization: "Bearer " + token
      }
    }).pipe(
      tap(data => console.log("List data: " + JSON.stringify(data))),
      catchError(this.HandleError)
    )
  }

  HandleError(error: HttpErrorResponse){
    let errorMessage = "";
    if (error.error instanceof ErrorEvent ) {
        errorMessage = "Error message : " + error.message; 
    } else {

        errorMessage = `Server status : ${error.status}, got error ${error.message}`
        
    }

    console.error(errorMessage);
    return throwError(errorMessage);
}

}
