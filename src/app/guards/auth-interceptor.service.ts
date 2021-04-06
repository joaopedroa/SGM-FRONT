import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptorService implements HttpInterceptor {

  constructor(private router:Router) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
 
    let tokenJWT = window.localStorage.getItem("token");

    if (tokenJWT) {
        request = request.clone({
            setHeaders: { 
                Authorization: `Bearer ${tokenJWT}`
            }
        });
    }

    return next.handle(request).pipe(
      retry(1),
      catchError((err) =>{
        if(err instanceof HttpErrorResponse){
            if(err.status === 401 || err.status === 403){
              console.log("deslogando.....................")
              window.localStorage.removeItem("token");
              //navigate /delete cookies or whatever
              this.router.navigate(['/login']);
              // if you've caught / handled the error, you don't want to rethrow it unless you also want downstream consumers to have to handle it as well.
              return of(err.message); // 
            }
            
        }
        return of(err);
      })
    );
  }
}
