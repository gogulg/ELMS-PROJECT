import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalserviceService {
  baseUrl: string = '/api';
  public options = {
    headers: new HttpHeaders().set('Content-Type', 'application/json'),
  };
  constructor(private _http:HttpClient) { }

 


  getRecord(path: string){
    const url = `${this.baseUrl}/${path}`;
    return this._http.get(url);
  }
  deleteRecord(path: string, id: number) {
    const url = `${this.baseUrl}/${path}/${id}`;
    return this._http.delete(url);
  }

  createRecord(path: string, body: {})  {
    const url = `${this.baseUrl}/${path}`;
    return this._http.post(url, body);
  }
  getSingleRecord(path: string, id: any) {
    const url = `${this.baseUrl}/${path}/${id}`;
    return this._http.get(url);
  }

  updateRecord(path: string, id: any, body: {}) {
    const url = `${this.baseUrl}/${path}/${id}`;
    return this._http.put(url, body);
  }

 
  signIn(user: string) {
    sessionStorage.setItem('user', user);
  }
  signOut() {
    sessionStorage.removeItem('user');
    sessionStorage.removeItem('username');
  }
 
  check_signIn(){
    sessionStorage.getItem('username')
  }

}

