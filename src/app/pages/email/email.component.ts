import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EmailService } from '../../service/email.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css'] // Corrected from styleUrl to styleUrls
})
export class EmailComponent implements OnInit {

  emailData = {
    to: '',
    subject: '',
    message: ''
  };

  flag:boolean= false;

  constructor(private snack: MatSnackBar, private email:EmailService) {}

  ngOnInit(): void {}

  doSubmitForm() {
    console.log("try to submit form");
    console.log("data: ", this.emailData);

    if(this.emailData.to==''|| this.emailData.subject==''||this.emailData.message==''){
      this.snack.open("Fields can not be empty", "OK", {
        duration: 3000, // Snackbar will be visible for 3 seconds
      });
      return;
    }

    this.flag=true;
    
    this.email.sendEamil(this.emailData).subscribe(
      response=>{
        console.log("Response:", response);
        this.flag = false;
        Swal.fire('Email Successfully Sent', '', 'success');
        
      },
      error=>{
        console.error("Error response:", error);
        this.flag = false;
        Swal.fire('Email sending failed', error.message || 'An error occurred', 'error');
        
      }
    )


  }
}
