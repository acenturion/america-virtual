import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { RestService } from '../rest.service';
import { UserService } from '../user.service';
import { User } from '../user';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  error: boolean = false;
  loading : boolean = false;

  loginForm = new FormGroup({
    email: new FormControl('eve.holt@reqres.in'),
    pass: new FormControl('cityslicka')
  });
  constructor(private router: Router, private restService: RestService, private userService : UserService) { }

  ngOnInit(): void {

  }

  onSubmit() {
    let data = this.loginForm.value;
    this.loading = true;
    this.restService.login(data.email, data.pass).subscribe(
      res => {
        let u: User = {username: data.email};        
        this.userService.setUserLoggedIn(u);
      },
      error => {
        console.error(error);
        this.sendAlert();
      },
      () => this.navigate()
    );

  }

  sendAlert() {
    this.error = true;
  }

  navigate() {
    this.router.navigateByUrl('/home');
  }

}
