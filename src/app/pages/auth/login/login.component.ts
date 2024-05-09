import { CommonModule } from '@angular/common';
import { Component} from '@angular/core';
import { FormsModule,} from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  sigindiv:boolean= true;
  signUpDetails :signup = new signup();
  loginDetails : login =new login();

  loginFormSubmit(){
  
  }
  signupFormSubmit(){

}

  register(){
     const users = localStorage.getItem('users');
    if (users != null){
      const userArray = JSON.parse(users);
      userArray.push(this.signUpDetails);
      localStorage.setItem('users',JSON.stringify(userArray));
    }else{
      const userArray = [];
      userArray.push(this.signUpDetails);
      localStorage.setItem('users',JSON.stringify(userArray));

    }

  }
  
}

export class signup  {
     
  name : string ;
  email : string ;
  password :string ;

  constructor (){
    this.name ="";
    this.email="";
    this.password ="";

  }
}

export class login {
  email :string ;
  password : string ;
  constructor(){
    this.email ="";
    this.password ="";
  }
}