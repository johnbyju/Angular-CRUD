import { CommonModule } from '@angular/common';
import { Component, viewChild} from '@angular/core';
import { FormsModule,} from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,FormsModule,],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  sigindiv:boolean= true;
  signUpDetails :signup = new signup();
  loginDetails : login =new login();
//---------authunticate---------
 
 constructor(){}

 register() {
  if (this.isSignUpValid()) {
    if (this.signUpDetails.name.trim().toLocaleLowerCase() === '') {
      alert('Name field is empty');
    } else if (this.signUpDetails.email.trim().toLocaleLowerCase() === '') {
      alert('Email field is empty');
    } else if (this.signUpDetails.password.trim().toLocaleLowerCase() === '') {
      alert('Password field is empty');
    } else {
      const users = localStorage.getItem('users');
      if (users !== null) {
        const userArray = JSON.parse(users);
        userArray.push(this.signUpDetails);
        localStorage.setItem('users', JSON.stringify(userArray));
      } else {
        const userArray = [this.signUpDetails];
        localStorage.setItem('users', JSON.stringify(userArray));
      }
    }
  } else {
    console.log('Invalid signup details');
  }
  
}
isSignUpValid(): boolean  {
  return(
    true
    // this.signUpDetails.name.trim().toLocaleLowerCase() !== '' &&
    // this.signUpDetails.email.trim().toLocaleLowerCase() !== '' &&
    // this.signUpDetails.password.trim().toLocaleLowerCase() !== ''
  );
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