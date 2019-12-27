import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class LoginService {
//URL's for API to send and recieve data
loginAPI = environment.apiUrl + "api/login/Login";
logOutAPI =  environment.apiUrl + "api/logout";

emailLinkTimeValidationAPI =  environment.apiUrl + "api/forgot-password";
setpasswordAPI=  environment.apiUrl + "api/update-password";
forgotpasswordAPI = environment.apiUrl + "api/send-forgot-password";
updatepasswordAPI = environment.apiUrl + "api/change-password";
updateProfileAPI = environment.apiUrl + "api/update-profile";
getUserAPI = environment.apiUrl + "api/get-user-detail";
  constructor(private http: HttpClient) { }
  //Login Service to send the values to API
  loginAuth(values) {
    console.log('loggin service')
    return this.http.post(this.loginAPI, values)
  }

    //For logout API
    logOut(user_id) {
      return this.http.get(this.logOutAPI+'?userId='+user_id)
    }
     //For Reset Password
  setPassword(password,userId) {
    return this.http.post(this.setpasswordAPI, {'userId':userId,'password':password})
  }
    emailLinkTimeValidation(id){
      return this.http.post(this.emailLinkTimeValidationAPI,  {'authToken':id} )
    }
    //Forgot Password Service
  forgotPassword(emailId) {
    return this.http.post(this.forgotpasswordAPI, emailId)
  }

  //change password
  changePassword(newPassword,password,userId){
    return this.http.post(this.updatepasswordAPI, {'userId':userId,'password':password,'newpassword':newPassword})
  }
  updateProfile(user){
    return this.http.post(this.updateProfileAPI, user)
  }
  getUserDetails(userId){
    return this.http.post(this.getUserAPI, {'userId':userId})
  }
}
