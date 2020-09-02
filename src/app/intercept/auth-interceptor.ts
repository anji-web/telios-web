import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HTTP_INTERCEPTORS } from "@angular/common/http";
import { Observable } from "rxjs";
import { TokenService } from "../service/token.service";
export class AuthInterceptor implements HttpInterceptor{
    
    constructor(private service: TokenService){}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let request = req;
        const token = this.service.getToken();
        if (token != null) {
            request = req.clone({
                headers : req.headers.set("Authorization", "Bearer " + token )
            })
        }

        return next.handle(request);
    }
}

export const provider = [{provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}];
