import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-forgotpassword',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './forgotpassword.component.html',
  styleUrl: './forgotpassword.component.css'
})
export class ForgotpasswordComponent {
 forgotPassword :forgotObj = new forgotObj();
  
 getOtp(){
  if(this.isForgotPassword()){
    alert(
      Swal.fire({
        position: "center",
        icon: "success",
        title: "OTP SENT SUCCESSFULLY",
        showConfirmButton: true,
        timer: 1500
      })
    )
  }

 }
 isForgotPassword() : boolean {
   return this.forgotPassword.email.trim().toLocaleLowerCase() === ""
 }
}

export class forgotObj {
   email: string ;

   constructor (){
    this.email = "";
   }
   
}

