import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) { }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    
    
      //Assigning Session values to sessionid
    let sessionid = JSON.parse(localStorage.getItem("userloginsession"));
    //Redirecting to logout page if session is null
    if (sessionid == null) {
      this.router.navigate(['/login']);
      return false;
    }
    //giving permissions if the access token is not equal to null
    if (sessionid['UserDetails']['vc_auth_token'] != '') {
      if (sessionid.Roles.length > 0) {
        if (sessionid.Roles.filter(x => x == 'Super Admin').length > 0) {
          
          return true;
        }
        else {
          let userMenu = JSON.parse(localStorage.getItem("userMenu"));
          //userMenu.filter
          return true;
        }
      }
      else {
        this.router.navigate(['/IBW/no-permission']);
        return false;
      }
    }
    //redirecting to login page if the access token is null
    else {
      this.router.navigate(['/login']);
      return false;
    }
  }
  canActivateChild(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
       //Assigning Session values to sessionid
    let sessionid = JSON.parse(localStorage.getItem("userloginsession"));
    //Redirecting to logout page if session is null
    if (sessionid == null) {
      this.router.navigate(['/login']);
      return false;
    }
    //giving permissions if the access token is not equal to null
    if (sessionid['UserDetails']['vc_auth_token'] != '') {
      if (sessionid.Roles != null) {
        if (sessionid.Roles.filter(x => x == 'Super Admin').length > 0) {
          return true;
        }
        else {
          let userMenu = JSON.parse(localStorage.getItem("userMenu"));
          if(userMenu != null){
          var url = state.url;
          var menu = userMenu.filter(y=>y.routerLink != null);
          if(menu !=null){
            var menu2 =menu.filter(x=> url.includes(x.routerLink));
            if(menu2!=null){
            return true;
            }
            else{
              return false;
            }
          }
          else{
            return false;
          }
          
          // userMenu.filter(y=>y.routerLink != null).filter(x=>{
          //   console.log(url,x.routerLink,url.includes(x.routerLink),'includes method')
          //   if(url.includes(x.routerLink)){
          //     console.log('if block true');
          //     return true;
          //   }
          //   else{
          //     console.log('else block false');
          //     return false;
          //   }
          // })
        }
        else{
          return false;
        }
        }
      }
      else {
        this.router.navigate(['/IBW/no-permission']);
        return false;
      }
    }
    //redirecting to login page if the access token is null
    else {
      this.router.navigate(['/login']);
      return false;
    }
    }
  exports: [AuthGuard]
}
