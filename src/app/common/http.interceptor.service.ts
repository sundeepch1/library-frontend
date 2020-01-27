
import { Injectable } from '@angular/core';
import {HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class HttpInterceptorService implements HttpInterceptor {
    public loginuser: any = {};
    constructor() { }
    intercept(req: HttpRequest<any>, next: HttpHandler) {
        if (localStorage.getItem('currentUser')) {
            this.loginuser = JSON.parse(localStorage.getItem('currentUser'));
            let tokenStr = 'Bearer ' + this.loginuser.token;
            req = req.clone({
                setHeaders: {
                    Authorization: tokenStr
                }
            })
        }
        return next.handle(req);
    }
}