import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { User } from '../models/user';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private userSubject: BehaviorSubject<User | null>;
  public user: Observable<User | null>;
  apiUrl:string='https://assignment.leadtracker.cied.dev/v1'

  constructor(
      private router: Router,
      private http: HttpClient
  ) {
      this.userSubject = new BehaviorSubject(JSON.parse(sessionStorage.getItem('user')!));
      this.user = this.userSubject.asObservable();
  }

  public get userValue() {
      return this.userSubject.value;
  }

  login(username: string, password: string, device_id: string) {
      return this.http.post<User>(`${this.apiUrl}/accounts/login/`, { username, password ,device_id})
          .pipe(map(user => {
            if(user["success"]==true){
              sessionStorage.setItem('user', JSON.stringify(user));
              this.userSubject.next(user);
              return user;
            }else{
              return null
            }
          }));
  }

  logout() {
      sessionStorage.removeItem('user');
      this.userSubject.next(null);
      this.router.navigate(['/login']);
  }
}