import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LoginService } from './login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [
    FormsModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  user = {
    username: '',
    password: '',
  };
  usernameReq:boolean = false;
  passwordReq:boolean = false;

  loginService = inject(LoginService);
  router = inject(Router);

  onLoginClick(){
    if(this.user.username == '' || this.user.password == ''){
      if(this.user.username == '')
        this.usernameReq = true;
       
      if(this.user.password == '')
        this.passwordReq = true;

      return;    
    }

    this.loginService.login(this.user).subscribe( (res)=>{
      if(res.result == "sucess"){
        // store data into localstorage
        this.router.navigateByUrl("dashboard");
      }
      else{
        alert(res.message);
      }
    })
  }
  


}
