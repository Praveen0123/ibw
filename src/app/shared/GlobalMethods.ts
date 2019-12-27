import {Injectable} from '@angular/core';

@Injectable({
    providedIn: 'root'
  })

export class Permissions {
    public  write:boolean = false
    public  delete:boolean = false
    public  approval:boolean = false
    }
export class GlobalMethods {
    //permission:Permissions;

    checkPermissions(screenName:string, moduleName:string ): Permissions
    {
        let permission:Permissions = new Permissions();
        
        var sessionData = JSON.parse(localStorage.getItem('userloginsession'));
        if(sessionData != null){
            if(sessionData['Roles'] != null){
                if(sessionData['Roles'].filter(x=> x == 'Super Admin').length > 0){
                    permission.write = true;
                    permission.delete = true;
                }
                else{
                    if(sessionData['UserRights'].length > 0){
                        if(sessionData['UserRights'].filter(x=>x.vc_module == moduleName && x.vc_screen_name == screenName && x.rightName=='Write').length > 0){
                            permission.write = true;
                        }
                        if(sessionData['UserRights'].filter(x=>x.vc_module == moduleName && x.vc_screen_name == screenName && x.rightName=='Delete').length > 0){
                            permission.delete = true;
                        }
                        if(sessionData['UserRights'].filter(x=>x.vc_module == moduleName && x.vc_screen_name == screenName && x.rightName=='Approvals').length > 0){
                            permission.approval = true;
                        }
                    }
                }
            }

        }
        return permission;
    }
}
