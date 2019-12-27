import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { AlertService } from '../../../../shared/services/alert.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from 'src/app/login/login.service';
import { emailValidator, internationalPhoneNumber } from 'src/app/theme/utils/app-validators';

@Component({
  selector: 'app-profile-dialog',
  templateUrl: './profile-dialog.component.html',
  styleUrls: ['./profile-dialog.component.scss'],
  providers: [AlertService]
})
export class ProfileDialogComponent implements OnInit {
  public formProfile: FormGroup;
  public dateTime1: Date;
  public phoneNumberMask = ['+', /[1-9]/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/];

  constructor(public dialogRef: MatDialogRef<ProfileDialogComponent>,@Inject(MAT_DIALOG_DATA) public user: number,
    private alertService: AlertService,private loginservice: LoginService, public fb: FormBuilder) { 
    //Update profile Form
    this.formProfile = this.fb.group({
      'userId': null,
      'email': [null, Validators.compose([Validators.required, emailValidator])],
      'userName': [null, Validators.compose([Validators.required])],
      'aliasName': [null, Validators.compose([Validators.required])],
      'phoneNumber': [null, Validators.compose([Validators.required, internationalPhoneNumber])]
      
    });

      var userSessionDetails = JSON.parse(localStorage.getItem('userloginsession'));
      console.log(userSessionDetails.UserDetails.int_user_id);
      if(userSessionDetails.UserDetails!=null){
        this.loginservice.getUserDetails(userSessionDetails.UserDetails.int_user_id).subscribe(
          data=>{
            console.log(data);

            if(data['Status']==true){
              this.formProfile.reset();
              this.formProfile.controls.userId.setValue(data['Data'].int_user_id)
              this.formProfile.controls.email.setValue(data['Data'].vc_email)
              this.formProfile.controls.userName.setValue(data['Data'].vc_user_name)
              this.formProfile.controls.aliasName.setValue(data['Data'].vc_alias_name)
              this.formProfile.controls.phoneNumber.setValue(data['Data'].vc_phone_number)
              
            
            }
          },
          error=>{
            console.log(error)
          }
        )
      
      }
    
     }

  ngOnInit() {
    
  }

  onlyAlphabets(event) {
    var k=event.charCode;
    return (((k > 64 && k < 91) || (k > 96 && k < 123) || (k == 32)));
  }

 

  close(): void {
    this.dialogRef.close();
  }

  // saveProfile() {
  //   this.alertService.createAlert('Successfully Saved.', 1);
  //   this.dialogRef.close();
  // }
//For Change Password Form
public onSubmitProfile(values:Object):void {
  if (this.formProfile.valid) {
    
    this.loginservice.updateProfile(values).subscribe(
    data=>{
      console.log(data);
      if(data['Status']==true){
       this.dialogRef.close();
      
      }
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
}
}
