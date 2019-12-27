import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatSnackBar } from '@angular/material';
import { AlertService } from '../../../../shared/services/alert.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { emailValidator } from 'src/app/theme/utils/app-validators';
import { LoginService } from 'src/app/login/login.service';

@Component({
  selector: 'app-password-dialog',
  templateUrl: './password-dialog.component.html',
  styleUrls: ['./password-dialog.component.scss'],
  providers: [AlertService]
})
export class PasswordDialogComponent implements OnInit {
  public changepwform: FormGroup;
  constructor(public dialogRef: MatDialogRef<PasswordDialogComponent>,@Inject(MAT_DIALOG_DATA) public user: number, 
  private alertService: AlertService,private loginservice: LoginService, public fb: FormBuilder,public snackBar: MatSnackBar) {  
    var userSessionDetails = JSON.parse(localStorage.getItem('userloginsession'));
    if(userSessionDetails!=null){
    var loggedinUserId = userSessionDetails.UserDetails.int_user_id;
    var loggedinUserEmail = userSessionDetails.UserDetails.vc_email;
    }
    //Change Password Form
    this.changepwform = this.fb.group({
      'userId': loggedinUserId,
      'email': [loggedinUserEmail, Validators.compose([Validators.required, emailValidator])],
      'password': [null, Validators.compose([Validators.required,Validators.minLength(6)])],
      'newPassword': [null, Validators.compose([Validators.required, Validators.minLength(6)])],
      'confirmnewPassword': [null, Validators.compose([Validators.required, Validators.minLength(6)])],
      'modifiedBy': [null]
    });
  }

  ngOnInit() {
    
  }

  close(): void {
    this.dialogRef.close();
  }

  updatePassword() {
    this.alertService.createAlert('Successfully Saved.', 1);
    this.dialogRef.close();
  }
 //For Change Password Form
 public onSubmitPassword(values:Object):void {
  if (this.changepwform.valid) {
    //To check the password and confiem password matching
    if(values['newPassword'] == values['confirmnewPassword']){
    var newpwrd = values['newPassword'];
    var pwrd = values['password'];
    var userId = values['userId'];
    //let formvalues = {verificationToken: token, password: pwrd}
    this.loginservice.changePassword(newpwrd, pwrd,userId).subscribe(
    data=>{
      console.log(data);
      if(data['Status']==true)
       this.dialogRef.close();
       
            //this.router.navigate(['/login'])

              // //Sending message to Snackbar
              // this.snackBar.open(data['message'], '', {
              //   duration: 2000,
              // });
    },
    error=>{
      console.log(error)
    }
  )
  }
  else{
    this.snackBar.open('New Password and Confirm Password do not match', '', {
      duration: 2000,
    });
  }
   
  }
}
}
