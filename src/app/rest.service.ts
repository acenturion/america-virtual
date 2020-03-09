import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(protected http: HttpClient) { }

  getProductList() : Observable<Product>{
    return this.http.get<Product>("http://localhost:4200/assets/data.json");
  }

  login(username: string, password: string){
    return this.http.post('https://reqres.in/api/login',{
      email: username,
      password: password
    })
  }

  buy(form : any){
    return this.http.get("{data : 'ok'}");
  }
}
