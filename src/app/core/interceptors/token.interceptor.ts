import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        //т.к HttpInterceptor перехватывает абсолютно все запросы мы должны гарантировать, что Authorization заголовок будет
        //добавлен только к запросам на наш API
        if (!req.url.includes('api/')) {
            return next.handle(req);
        }

        let accessToken = localStorage.getItem("token") ? (JSON.parse(localStorage.getItem("token"))).AccessToken : "";
        //клонироуем запрос, что бы добавить новый заголовок 
        const authReq = req.clone({
            headers: req.headers.set('Authorization', "Bearer " + accessToken)
        });
        //передаем клонированный запрос место ориганального
        return next.handle(authReq);
    }
}