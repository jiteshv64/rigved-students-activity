import { Observable, of, throwError } from 'rxjs';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private router: Router) {}

  setToken(token: string): void {
    localStorage.setItem('token', token);
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  isLoggedIn() {
    return this.getToken() !== null;
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['login']);
  }

  login({ email, password }: any): Observable<any> {
    if (email === 'admin@gmail.com' && password === 'admin123') {
      this.setToken('abcdefghijklmnopqrstuvwxyz');
      return of({ name: 'Jitesh Vishwakarma', email: 'admin@gmail.com' });
    }
    return throwError(new Error('Failed to login'));
  }


  profileArray: any[] = [];
  public saveProfile(obj: any): void {
    let object = {
      fullname: obj.fullname,
      email: obj.email,
      subjects: obj.subjects,
      message: obj.message
    };
    this.profileArray.push(object)
  }
}