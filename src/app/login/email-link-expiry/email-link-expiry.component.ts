import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { Router, ActivatedRoute } from '@angular/router';
import { AppSettings } from 'src/app/app.settings';

@Component({
  selector: 'app-email-link-expiry',
  templateUrl: './email-link-expiry.component.html',
  styleUrls: ['./email-link-expiry.component.scss']
})
export class EmailLinkExpiryComponent implements OnInit {
  encryptedId : any
  errorMesage: string;

  constructor(public _appsettings: AppSettings, public loginservice : LoginService,
    private activatedRoute: ActivatedRoute,public router:Router) {

      //For taking the parameters through URL for change password
    this.activatedRoute.params.subscribe(params => {
      this.encryptedId = params['id'];
  });
     }

     ngAfterViewInit() {
      this._appsettings.settings.loadingSpinner = true;
    }
    
  ngOnInit() {
    this.loginservice.emailLinkTimeValidation(this.encryptedId).subscribe(
      data =>{
        console.log(data)
        if(data['error'] == true){
          this.errorMesage = "This link is expired please contact the administrator";
       this._appsettings.settings.loadingSpinner = false;

          console.log(this.errorMesage)

        }
        else{
          this.router.navigate(['resetpassword/'+this.encryptedId])
        }
      },
      error=>{
        console.log(error)
      }
    )
    console.log(this.encryptedId)
  }
  
  
}
