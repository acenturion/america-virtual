import { Injectable } from '@angular/core';
import { User } from './user';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private isUserLoggedIn: boolean;
  public userLogged: User;

  constructor(private router : Router) {
    this.isUserLoggedIn = false;
  }

  setUserLoggedIn(user: User) {
    this.isUserLoggedIn = true;
    this.userLogged = user;
    localStorage.setItem('currentUser', JSON.stringify(user));
  }
  logOut(){
    this.isUserLoggedIn = false;
    this.userLogged = new User();
    localStorage.removeItem('currentUser');
    this.router.navigateByUrl('/login');
  }

  getUserLoggedIn() {
    return JSON.parse(localStorage.getItem('currentUser'));
  }
}
