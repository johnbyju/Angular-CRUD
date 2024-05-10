import { CommonModule } from '@angular/common';
import { Component, viewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  sigindiv: boolean = true;
  signUpDetails: signup = new signup();
  loginDetails: login = new login();

  //---------authunticate---------

  constructor() {}

  loginFunction() {
    if (this.isloginValid()) {
      const getUser = localStorage.getItem('users');
      if (getUser !== null) {
        const checkUser = JSON.parse(getUser);
        const matchUser = checkUser.find((user: signup) => {
          return (
            user.email === this.loginDetails.email.trim().toLocaleLowerCase() &&
            user.password === this.loginDetails.password.trim().toLocaleLowerCase()
          );
        });
        console.log(matchUser);
        console.log('console log checked');

        if (matchUser) {
          alert('login succesfully '); // and move the user into the site accessble
        } else {
          alert('invalid user details');
        }
      } else {
        alert('no user registerd it ');
      }
      this.loginDetails = new login();
    } else {
      alert(this.sweet());
    }
  }

  register() {
    debugger;
    if (this.isSignUpValid()) {
      if (this.signUpDetails.name.trim().toLocaleLowerCase() === '') {
        alert('Name field is empty');
      } else if (this.signUpDetails.email.trim().toLocaleLowerCase() === '') {
        alert('Email field is empty');
      } else if (
        this.signUpDetails.password.trim().toLocaleLowerCase() === ''
      ) {
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
        alert('registerd Successfully ');
      }
      this.signUpDetails = new signup();
    } else {
      alert('Kindly Enter your details');
    }
  }
  isSignUpValid(): boolean {
    return (
      this.signUpDetails.name.trim().toLocaleLowerCase() !== '' &&
      this.signUpDetails.email.trim().toLocaleLowerCase() !== '' &&
      this.signUpDetails.password.trim().toLocaleLowerCase() !== ''
    );
  }
  isloginValid(): boolean {
    return (
      this.loginDetails.email.trim().toLocaleLowerCase() !== '' &&
      this.loginDetails.password.trim().toLocaleLowerCase() !== ''
    );
  }
  sweet(){
    Swal.fire({
      title: 'Error!',
      text: 'Do you want to continue',
      icon: 'error',
      confirmButtonText: 'Cool'
    })
  }
}

export class signup {
  name: string;
  email: string;
  password: string;

  constructor() {
    this.name = '';
    this.email = '';
    this.password = '';
  }
}

export class login {
  email: string;
  password: string;
  constructor() {
    this.email = '';
    this.password = '';
  }
}
