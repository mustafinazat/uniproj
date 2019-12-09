import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { HttpService } from '../services/http.service';
import { LocalStorageService } from '../services/local-storage.service';
import { User } from './models/user.model';
import { Token } from './models/token.model';
import { Subject, BehaviorSubject } from '../../../../node_modules/rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' })
  };

  public user: BehaviorSubject<any>;

  constructor(private httpService: HttpService, private localStorage: LocalStorageService) {
    this.user = new BehaviorSubject(this.getUserStorage());
   }

  public signIn(data: object) {
    return this.httpService.post('/auth/token', data, this.httpOptions);
  }

  public setTokenStorage(token: Token) {
    return localStorage.setItem('token', JSON.stringify(token));
  }

  public getTokenStorage() {
    return JSON.parse(localStorage.getItem('token'));
  }

  public getUser(id: string) {
    return this.httpService.get('/user/' + id);
  }

  public setUserStorage(user: User) {
    this.user.next(user);
    return localStorage.setItem('user', JSON.stringify(user));
  }

  public getUserStorage() {
    return JSON.parse(localStorage.getItem('user'));
  }

  public logout() {
    this.user.next(false);
    this.localStorage.delItem('user');
    this.localStorage.delItem('token');
  }
}
