import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private url = '/api';

  constructor(private httpClient: HttpClient) { }

  public get(path: string) {
    return this.httpClient.get(`${this.url}${path}`);
  }

  public post(path: string, body: any | null, options: object) {
    return this.httpClient.post(`${this.url}${path}`, body, options);
  }

  public put(path: string, body: any | null, options: object) {
    return this.httpClient.put(`${this.url}${path}`, body, options);
  }

  public delete(path: string, options: object) {
    return this.httpClient.delete(`${this.url}${path}`, options);
  }
}
