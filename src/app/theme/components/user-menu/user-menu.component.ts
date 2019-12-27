import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { PasswordDialogComponent } from './password-dialog/password-dialog.component';
import { ProfileDialogComponent } from './profile-dialog/profile-dialog.component';
import { MatDialog } from '@angular/material';
import { LoginService } from 'src/app/login/login.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-user-menu',
  templateUrl: './user-menu.component.html',
  styleUrls: ['./user-menu.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class UserMenuComponent implements OnInit {
  public userImage = '../assets/img/users/navin_malik.png';
  userType: string = "";
  loggedinUserName: string="";
  constructor(public dialog: MatDialog,private _loginService : LoginService,private router: Router) { }
  public openUserDialog(id) {
    let dialogRef = this.dialog.open(PasswordDialogComponent, {
        data: id,
        height: 'auto',
        width: '600px'
    });
    dialogRef.afterClosed().subscribe(data => {
    });
}
public openUserDialogs(id) {
  let dialogRef = this.dialog.open(ProfileDialogComponent, {
      data: id,
      height: 'auto',
      width: '600px'
  });
  dialogRef.afterClosed().subscribe(data => {
  });
}

//For Logout 
logOut(e) {
  if (e == 1) {
    
    var session_values = JSON.parse(localStorage['userloginsession'])
   // var value = { userId: session_values.int_user_id }
   if(session_values.UserDetails != null){
    this._loginService.logOut(session_values.UserDetails.int_user_id).subscribe(
      data => {
        localStorage.clear();
        this.router.navigate(['/login']);
      },
      error=>{
        console.log(error);
      }
    )
   }
  }
}

  ngOnInit() {
    var sessionDetails = JSON.parse(localStorage.getItem('userTypeSession'));
    if(sessionDetails.userType == 'user'){
      this.userType = 'user';
    }
    if(sessionDetails.userType == 'admin'){
      this.userType = 'admin';
    }
    var userSessionDetails = JSON.parse(localStorage.getItem('userloginsession'));
    if(userSessionDetails.UserDetails !=null)
    this.loggedinUserName = userSessionDetails.UserDetails.vc_user_name;
  }

  

}
