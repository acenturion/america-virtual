import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  currentUser: string;
  userLogged : User;

  constructor(private userService : UserService) { }

  ngOnInit(): void {
    this.currentUser = localStorage.getItem('currentUser');
    this.userLogged = this.userService.getUserLoggedIn();
    if(this.userLogged){
      this.currentUser = this.userLogged.username;
    }
  }



  logout(): void {
    this.userService.logOut();
  }
}
