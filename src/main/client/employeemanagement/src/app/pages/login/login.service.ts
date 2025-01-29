import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

  login(user:any){
    console.log(user);
    const mockResponse = {
      result: "sucess",
      message: 'Login successful!'
    };
    return of(mockResponse);
  }
}
