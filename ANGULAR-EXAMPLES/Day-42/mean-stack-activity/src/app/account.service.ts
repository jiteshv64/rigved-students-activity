import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AccountService {
  baseUrl: string = 'http://localhost:3001/emps';
  profileArray: any[] = [];

  constructor(private _http: HttpClient) {}

  /**
   * getUsers
   */
  public getUsers(): Observable<any> {
    return this._http.get(this.baseUrl);
  }

  /**
   * storeUser
   */
  public storeUser(formValue: any): Observable<any> {
    return this._http.post(this.baseUrl, formValue);
  }

  /**
   * getOneUser
   */
  public getOneUser(id: any): Observable<any> {
    return this._http.get(this.baseUrl + '/' + id);
  }

  /**
   * updateUser
   */
  public updateUser(id: any, salary: any, data: any): Observable<any> {
    return this._http.put(this.baseUrl + '/' + id + '/' + salary, data);
  }

  /**
   * deleteUser
id: any   */
  public deleteUser(id: any): Observable<any> {
    return this._http.delete(this.baseUrl + '/' + id);
  }
}
