import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { emailValidator } from '../theme/utils/app-validators';
import { AppSettings } from '../app.settings';
import { Settings } from '../app.settings.model';
import { LoginService } from './login.service';
import { CookieService } from 'ngx-cookie-service';
import { Menu } from '../theme/components/menu/menu.model';
import { MenuService } from '../theme/components/menu/menu.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [ MenuService ]
})
export class LoginComponent {
  public TypeString: string = "password";
  public isPassword: boolean = true;
  public chkrememberMe: boolean;

  public form: FormGroup;
  public settings: Settings;
  constructor(public appSettings: AppSettings, public fb: FormBuilder, 
    public router: Router, private _loginService: LoginService, private _menuService:MenuService, 
    public _cookieService: CookieService) {
    this.settings = this.appSettings.settings;
    this.form = this.fb.group({
      'email': [null, Validators.compose([Validators.required, emailValidator])],
      'password': [null, Validators.compose([Validators.required, Validators.minLength(6)])],
      'rememberMe': false
    });

    //Setting the values to the input form the cookie service (cookie service => input type)
    if (this._cookieService.get('rememberMe') || this.chkrememberMe) {
      this.form.controls['email'].setValue(this._cookieService.get('email'));
      this.form.controls['password'].setValue(this._cookieService.get('password'));
      this.form.controls['rememberMe'].setValue(this._cookieService.get('rememberMe'));
      this.chkrememberMe = true;
    }
  }

  public onSubmit(values: Object): void {
    if (this.form.valid) {
      
      this._loginService.loginAuth(values).subscribe(
        data => {
          if (data['Status'] == true) {
            localStorage.clear();
            // localStorage.setItem('userloginsession', JSON.stringify({ token: data['Data']['accessToken'], user_id: data['Data']['userId'], email: data['Data']['email'] }));
            localStorage.setItem('userloginsession', JSON.stringify(data['Data']));
            localStorage.setItem('userTypeSession', JSON.stringify({
              userType: 'admin'
            }));

            var userRights = data['Data'].UserRights;
            var userMenu: Menu[] = new Array()
            //var superAdmin = data['Data'].UserRights.filter(x=>x.roleName=='Super Admin')[0].roleName;
            if(data['Data'].Roles.length == 0){
               // TO DO: Nopermissions
               console.log('no role')
               this.router.navigate(['/IBW/no-permission']);
            }
            else {
            if(data['Data'].Roles.filter(x=> x == 'Super Admin').length == 0) {
              if(userRights.length > 0) {
            //Dashboard menu items
            if(userRights.filter(x => x.vc_module=='Dashboard').length > 0)
            {
              userMenu.push(new Menu(1, 'Dashboard', '/IBW/analytics', null, 'assessment', null, true, 0, "Orange"));
            }
            
            // Create menu items
            if(userRights.filter(x=>(x.vc_module == 'Manage' && x.vc_screen_name == 'Manage quotes' && x.rightName == 'Write') ||
            (x.vc_module == 'Manage' && x.vc_screen_name == 'Manage leaves' && x.rightName == 'Write') ||
            (x.vc_module == 'Manage' && x.vc_screen_name == 'Timesheets and Expense' && x.rightName == 'Write')).length > 0)
            {
              userMenu.push(new Menu(2, 'Create', null, null, 'create', null, true, 0, "Orange"));
              // Create quotes menu items
              if (userRights.filter(x=> x.vc_module == 'Manage' && x.vc_screen_name == 'Manage quotes' && x.rightName == 'Write').length >0 ) {
                userMenu.push(new Menu(30, 'New Quote', '/IBW/manage/quotes/gridview', null, 'public', null, true, 2, "Orange"));
              }
              // Create leaves menu items
              if (userRights.filter(x=> x.vc_module == 'Manage' && x.vc_screen_name == 'Manage leaves' && x.rightName == 'Write').length > 0) {
                userMenu.push(new Menu(34, 'Leave Request', null, null, 'airline_seat_individual_suite', null, true, 2, "lightgreen"));
              }
              // Create Timesheets and Expense menu items
              if (userRights.filter(x=>x.vc_module == 'Manage' && x.vc_screen_name == 'Timesheets and Expense' && x.rightName == 'Write').length > 0) {
                userMenu.push(new Menu(35, 'Timesheets & Expenses', '/IBW/create', null, 'money_off', null, true, 2, "Orange"));

              }
            }
            

            //Manage menu items
            if(userRights.filter(x => x.vc_module == 'Manage') != null){
              userMenu.push(new Menu(3, 'Manage', null, null, 'device_hub', null, true, 0, "Orange"));
              console.log(userRights.filter(x => x.vc_module == 'Manage' && x.vc_screen_name == 'Manage projects'),'user menu projects');
              console.log(userRights.filter(x => x.vc_module == 'Manage'),'user menu all');
              if(userRights.filter(x => x.vc_module == 'Manage' && x.vc_screen_name == 'Manage clients').length > 0)
              {
                userMenu.push(new Menu(7, 'Clients', '/IBW/manage/clients', null, 'group', null, true, 3, "lightgreen"));
              }
              if (userRights.filter(x =>x.vc_module == 'Manage' && x.vc_screen_name == 'Manage contacts').length > 0) {
                userMenu.push(new Menu(8, 'Contacts', '/IBW/manage/contacts', null, 'contacts', null, false, 3, "lightgreen"));
              }
              if (userRights.filter(x => x.vc_module == 'Manage' && x.vc_screen_name == 'Manage quotes').length > 0) {
                userMenu.push(new Menu(9, 'Quotes', '/IBW/manage/quotes', null, 'public', null, true, 3, "Orange"));
              }
              if (userRights.filter(x => x.vc_module == 'Manage' && x.vc_screen_name == 'Manage projects').length > 0) {
                userMenu.push(new Menu(10, 'Projects', '/IBW/manage/projects', null, 'outlined_flag', null, false, 3, "Orange"));
              }
              if (userRights.filter(x => x.vc_module == 'Manage' && x.vc_screen_name == 'Timesheets and Expense').length > 0) {
                userMenu.push(new Menu(56, 'Timesheets & Expenses', '/IBW/manage/review', null, 'rate_review', null, false, 3, "Orange"));
              }
              if (userRights.filter(x => x.vc_module == 'Manage' && x.vc_screen_name == 'Payroll').length > 0) {
                userMenu.push(new Menu(55, 'Payroll', '/IBW/manage/payroll', null, 'money_off', null, false, 3, "Orange"));
              }
              if (userRights.filter(x => x.vc_module == 'Manage' && x.vc_screen_name == 'Return of assets').length > 0) {
                userMenu.push(new Menu(13, 'Assets', '/IBW/manage/return-assets', null, 'keyboard_return', null, true, 3, "Orange"));
              }
              if (userRights.filter(x => x.vc_module == 'Manage' && x.vc_screen_name == 'Manage leaves').length > 0) {
                userMenu.push(new Menu(14, 'Leave', '/IBW/manage/leaves', null, 'time_to_leave', null, true, 3, "Orange"));
              }
            }
            //Scheduling menu items
           if(userRights.filter(x=>x.vc_module == 'Scheduling').length > 0){
            userMenu.push(new Menu(4, 'Scheduling', '/IBW/scheduling/action-calendar', null, 'schedule', null, true, 0, "Orange"));
            if (userRights.filter(x=>x.vc_module == 'Scheduling' && x.vc_screen_name == 'Action scheduling').length >0 ){
              userMenu.push(new Menu(15, 'Action Scheduling', '/IBW/scheduling/action-calendar', null, 'list', null, false, 4, "Orange"));
            }
            if (userRights.filter(x=>x.vc_module == 'Scheduling' && x.vc_screen_name == 'Resource scheduling').length>0) {
              userMenu.push(new Menu(16, 'Resource Scheduling', '/IBW/scheduling/assets', null, 'gradient', null, true, 4, "Orange"));
            }
           }
            
           //Reports menu items
          if(userRights.filter(x=>x.vc_module == 'Reports').length > 0)
          {
            userMenu.push(new Menu(5, 'Reports', null, null, 'today', null, true, 0, "Orange"));
            if (userRights.filter(x=>x.vc_module == 'Reports' && x.vc_screen_name == 'View predictability').length>0) {
              userMenu.push(new Menu(17, 'Predictability', '/IBW/reports/predictability', null, 'device_hub', null, true, 5, "Orange"));
            }
            if (userRights.filter(x=>x.vc_module == 'Reports' && x.vc_screen_name == 'View productivity').length>0) {
              userMenu.push(new Menu(18, 'Productivity', '/IBW/reports/productivity', null, 'av_timer', null, true, 5, "Orange"));
            }
            if (userRights.filter(x=>x.vc_module == 'Reports' && x.vc_screen_name == 'View profitability').length>0) {
              userMenu.push(new Menu(19, 'Profitability', '/IBW/reports/profitability', null, 'format_align_center', null, false, 5, "Orange"));
            }
            if (userRights.filter(x=>x.vc_module == 'Reports' && x.vc_screen_name == 'View billing').length>0) {
              userMenu.push(new Menu(20, 'Billing', '/IBW/reports/billing', null, 'equalizer', null, true, 5, "Orange"));
            }
            if (userRights.filter(x=>x.vc_module == 'Reports' && x.vc_screen_name == 'View work in Process', 'Reports').length>0) {
              userMenu.push(new Menu(21, 'Work in Process', '/IBW/reports/work-in-process', null, 'format_line_spacing', null, true, 5, "Orange"));
            }
            if (userRights.filter(x=>x.vc_module == 'Reports' && x.vc_screen_name == 'View leaves').length>0) {
              userMenu.push(new Menu(22, 'Leave', '/IBW/reports/leave', null, 'time_to_leave', null, true, 5, "Orange"));
            }
          }

            //Admin menu items
            if(userRights.filter(x=>x.vc_module == 'Admin').length > 0)
            {
              userMenu.push(new Menu(6, 'Admin', null, null, 'person', null, true, 0, "lightgreen"));
              if (userRights.filter(x=>x.vc_module == 'Admin' && x.vc_screen_name == 'Manage permissions').length > 0) {
                userMenu.push(new Menu(23, 'Permissions', '/IBW/admin/permissions', null, 'perm_identity', null, false, 6, "lightgreen"));
              }
              if (userRights.filter(x=>x.vc_module == 'Admin' && x.vc_screen_name == 'Manage users').length > 0) {
                userMenu.push(new Menu(24, 'Users', '/IBW/admin/users', null, 'group_add', null, false, 6, "lightgreen"));
              }
              if (userRights.filter(x=>x.vc_module == 'Admin' && x.vc_screen_name == 'Configure kanban').length > 0) {
                userMenu.push(new Menu(25, 'Configure Kanban', '/IBW/admin/configure_kanban', null, 'receipt', null, true, 6, "lightgreen"));
              }
              if (userRights.filter(x=>x.vc_module == 'Admin' && x.vc_screen_name == 'Manage master data').length > 0) {
                userMenu.push(new Menu(26, 'Master Data', '/IBW/admin/master-data', null, 'device_hub', null, true, 6, "lightgreen"));
              }
              if(userRights.filter(x=>x.vc_module == 'Admin' && x.vc_screen_name == 'Manage availability').length > 0) {
                userMenu.push(new Menu(27, 'Availability', '/IBW/admin/availability', null, 'av_timer', null, true, 6, "lightgreen"));
              }
              if (userRights.filter(x=>x.vc_module == 'Admin' && x.vc_screen_name == 'Manage settings').length > 0) {
                userMenu.push(new Menu(28, 'Settings', '/IBW/admin/settings', null, 'device_hub', null, true, 6, "lightgreen"));
              }
            }
            
            
            localStorage.setItem('userMenu', JSON.stringify(userMenu));
            var initialRoute = userMenu.filter(x => x.routerLink != null)[0].routerLink;
            this.router.navigate([initialRoute]);
          }
          else{
            // TO DO: Nopermissions 
            this.router.navigate(['/IBW/no-permission']);
          }
          }
          else {
            console.log('Super Admin');
            userMenu = this._menuService.getDefaultHorizontalMenuItems();
            localStorage.setItem('userMenu', JSON.stringify(userMenu));
            
            this.router.navigate(['/IBW']);
          }
        } 
          }
          else {
            console.log('loggin fail');
          }
        },
        error => {
          console.log(error)
        }
      )
      //Remember Password
      if (values['rememberMe'] == true) {
        //Sending the values to cookieservice (input values => cookie service)
        this._cookieService.set('email', values['email']);
        this._cookieService.set('password', values['password']);
        this._cookieService.set('rememberMe', values['rememberMe']);
      }

      //deleting values if unselected for remember password
      if (values['rememberMe'] == false) {
        this._cookieService.delete('email', values['email']);
        this._cookieService.delete('password', values['password']);
        this._cookieService.delete('rememberMe', values['rememberMe']);
      }
      // if (values['email'] == 'admin@ibw.com') {
      //   this.router.navigate(['/IBW']);
      //   localStorage.setItem('userTypeSession', JSON.stringify({
      //     userType : 'admin'
      //   }));
      // }
      // if(values['email'] == 'user@ibw.com'){
      //   this.router.navigate(['/IBW']);
      //   localStorage.setItem('userTypeSession', JSON.stringify({
      //     userType : 'user'
      //   }));
      // }
    }
  }

  public ChangetextType(isPassword) {
    if (isPassword) {
      this.TypeString = "password"
    } else {
      this.TypeString = "text"
    }
  }

  ngAfterViewInit() {
    this.settings.loadingSpinner = false;
  }
}