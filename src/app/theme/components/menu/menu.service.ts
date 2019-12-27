import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

import { Menu } from './menu.model';
import { verticalMenuItems, horizontalMenuItems, userVerticalMenuItems, userHorizontalMenuItems } from './menu';

@Injectable()
export class MenuService {

  constructor(private location: Location,
    private router: Router) { }
  public getVerticalMenuItems(): Array<Menu> {
    return verticalMenuItems;
  }
  public getDefaultHorizontalMenuItems():Array<Menu> {
    return horizontalMenuItems;
  }
  public getHorizontalMenuItems(): Array<Menu> {
    // let seesionDetails = JSON.parse(localStorage.getItem("userloginsession"));
    // var userRights = seesionDetails.UserRights;
    // //userMenu: Menu[100]=[];
    // var userMenu:Menu[] = new Array() 
    // //Menu userMenu: Menu[] = <Menu[]>;
    // //Dashboard menu items
    // userRights.filter((x) => {
    //   if (x.vc_module == 'Dashboard') {
    //     userMenu.push(new Menu(1, 'Dashboard', '/IBW/analytics', null, 'assessment', null, true, 0, "Orange"));
    //   }
    // })
    // // Create menu items
    // userRights.filter((x) => {
    //   if ((x.vc_module == 'Manage' && x.vc_screen_name == 'Manage quotes' && x.rightName == 'Write') ||
    //     (x.vc_module == 'Manage' && x.vc_screen_name == 'Manage leaves' && x.rightName == 'Write') ||
    //     (x.vc_module == 'Manage' && x.vc_screen_name == 'Timesheets and Expense' && x.rightName == 'Write')) {
    //       userMenu.push(new Menu(2, 'Create', null, null, 'create', null, true, 0, "Orange"));
    //     // Create quotes menu items
    //     if ((x.vc_module == 'Manage' && x.vc_screen_name == 'Manage quotes' && x.rightName == 'Write')) {
    //       userMenu.push(new Menu(30, 'New Quote', '/IBW/manage/quotes/gridview', null, 'public', null, true, 2, "Orange"));
    //     }
    //     // Create leaves menu items
    //     if (x.vc_module == 'Manage' && x.vc_screen_name == 'Manage leaves' && x.rightName == 'Write') {
    //       userMenu.push(new Menu(34, 'Leave Request', null, null, 'airline_seat_individual_suite', null, true, 2, "lightgreen"));
    //     }
    //     // Create Timesheets and Expense menu items
    //     if ((x.vc_module == 'Manage' && x.vc_screen_name == 'Timesheets and Expense' && x.rightName == 'Write')) {
    //       userMenu.push(new Menu(35, 'Timesheets & Expenses', '/IBW/create', null, 'money_off', null, true, 2, "Orange"));

    //     }
    //   }
    // })

    // //Manage menu items
    // userRights.filter((x) => {
    //   if (x.vc_module == 'Manage') {
    //     userMenu.push(new Menu(3, 'Manage', null, null, 'device_hub', null, true, 0, "Orange"));
    //     if (x.vc_module == 'Manage' && x.vc_screen_name == 'Manager clients') {
    //       userMenu.push(new Menu(7, 'Clients', '/IBW/manage/clients', null, 'group', null, true, 3, "lightgreen"));
    //     }
    //     if (x.vc_module == 'Manage' && x.vc_screen_name == 'Manage contacts') {
    //       userMenu.push(new Menu(8, 'Contacts', '/IBW/manage/contacts', null, 'contacts', null, false, 3, "lightgreen"));
    //     }
    //     if (x.vc_module == 'Manage' && x.vc_screen_name == 'Manage quotes') {
    //       userMenu.push(new Menu(9, 'Quotes', '/IBW/manage/quotes', null, 'public', null, true, 3, "Orange"));
    //     }
    //     if (x.vc_module == 'Manage' && x.vc_screen_name == 'Manager projects') {
    //       userMenu.push(new Menu(10, 'Projects', '/IBW/manage/projects', null, 'outlined_flag', null, false, 3, "Orange"));
    //     }
    //     if (x.vc_module == 'Manage' && x.vc_screen_name == 'Timesheets and Expense') {
    //       userMenu.push(new Menu(56, 'Timesheets & Expenses', '/IBW/manage/review', null, 'rate_review', null, false, 3, "Orange"));
    //     }
    //     if (x.vc_module == 'Manage' && x.vc_screen_name == 'Payroll') {
    //       userMenu.push(new Menu(55, 'Payroll', '/IBW/manage/payroll', null, 'money_off', null, false, 3, "Orange"));
    //     }
    //     if (x.vc_module == 'Manage' && x.vc_screen_name == 'Return of assets') {
    //       userMenu.push(new Menu(13, 'Assets', '/IBW/manage/return-assets', null, 'keyboard_return', null, true, 3, "Orange"));
    //     }
    //     if (x.vc_module == 'Manage' && x.vc_screen_name == 'Manage leaves') {
    //       userMenu.push(new Menu(14, 'Leave', '/IBW/manage/leaves', null, 'time_to_leave', null, true, 3, "Orange"));
    //     }
    //   }
    // })
    // //Scheduling menu items
    // userRights.filter((x) => {
    //   if (x.vc_module == 'Scheduling') {
    //     userMenu.push(new Menu(4, 'Scheduling', '/IBW/scheduling/action-calendar', null, 'schedule', null, true, 0, "Orange"));
    //     if (x.vc_module == 'Scheduling' && x.vc_screen_name == 'Action scheduling') {
    //       userMenu.push(new Menu(15, 'Action Scheduling', '/IBW/scheduling/action-calendar', null, 'list', null, false, 4, "Orange"));
    //     }
    //     if (x.vc_module == 'Scheduling' && x.vc_screen_name == 'Action scheduling') {
    //       userMenu.push(new Menu(16, 'Resource Scheduling', '/IBW/scheduling/assets', null, 'gradient', null, true, 4, "Orange"));
    //     }
    //   }
    // })
    // //Scheduling menu items
    // userRights.filter((x) => {
    //   if (x.vc_module == 'Reports') {
    //     userMenu.push(new Menu(5, 'Reports', null, null, 'today', null, true, 0, "Orange"));

    //     if (x.vc_module == 'Reports' && x.vc_screen_name == 'View predictability') {
    //       userMenu.push(new Menu(17, 'Predictability', '/IBW/reports/predictability', null, 'device_hub', null, true, 5, "Orange"));
    //     }
    //     if (x.vc_module == 'Reports' && x.vc_screen_name == 'View productivity') {
    //       userMenu.push(new Menu(18, 'Productivity', '/IBW/reports/productivity', null, 'av_timer', null, true, 5, "Orange"));
    //     }
    //     if (x.vc_module == 'Reports' && x.vc_screen_name == 'View profitability') {
    //       userMenu.push(new Menu(19, 'Profitability', '/IBW/reports/profitability', null, 'format_align_center', null, false, 5, "Orange"));
    //     }
    //     if (x.vc_module == 'Reports' && x.vc_screen_name == 'View billing') {
    //       userMenu.push(new Menu(20, 'Billing', '/IBW/reports/billing', null, 'equalizer', null, true, 5, "Orange"));
    //     }
    //     if (x.vc_module == 'Reports' && x.vc_screen_name == 'View work in Process','Reports') {
    //       userMenu.push(new Menu(21, 'Work in Process', '/IBW/reports/work-in-process', null, 'format_line_spacing', null, true, 5, "Orange"));
    //     }
    //     if (x.vc_module == 'Reports' && x.vc_screen_name == 'View leaves') {
    //       userMenu.push(new Menu(22, 'Leave', '/IBW/reports/leave', null, 'time_to_leave', null, true, 5, "Orange"));
    //     }
    //   }
    // })
    // //Admin menu items
    // userRights.filter((x) => {
    //   if (x.vc_module == 'Admin') {
    //     userMenu.push(new Menu(6, 'Admin', null, null, 'person', null, true, 0, "lightgreen"));
    //     if (x.vc_module == 'Admin' && x.vc_screen_name == 'Manage permissions') {
    //       userMenu.push(new Menu(23, 'Permissions', '/IBW/admin/permissions', null, 'perm_identity', null, false, 6, "lightgreen"));
    //     }
    //     if (x.vc_module == 'Admin' && x.vc_screen_name == 'Manage users') {
    //       userMenu.push(new Menu(24, 'Users', '/IBW/admin/users', null, 'group_add', null, false, 6, "lightgreen"));
    //     }
    //     if (x.vc_module == 'Admin' && x.vc_screen_name == 'Configure kanban') {
    //       userMenu.push(new Menu(25, 'Configure Kanban', '/IBW/admin/configure_kanban', null, 'receipt', null, true, 6, "lightgreen"));
    //     }
    //     if (x.vc_module == 'Admin' && x.vc_screen_name == 'Manage master data') {
    //       userMenu.push(new Menu(26, 'Master Data', '/IBW/admin/master-data', null, 'device_hub', null, true, 6, "lightgreen"));
    //     }
    //     if (x.vc_module == 'Admin' && x.vc_screen_name == 'Manage availability') {
    //       userMenu.push(new Menu(27, 'Availability', '/IBW/admin/availability', null, 'av_timer', null, true, 6, "lightgreen"));
    //     }
    //     if (x.vc_module == 'Admin' && x.vc_screen_name == 'Manage settings') {
    //       userMenu.push(new Menu(28, 'Settings', '/IBW/admin/settings', null, 'device_hub', null, true, 6, "lightgreen"));
    //     }

    //   }
    // })
    var userMenu:Menu[] = new Array() 
    userMenu = JSON.parse(localStorage.getItem('userMenu'));
    return userMenu;
  }

  public getUserVerticalMenuItems(): Array<Menu> {
    return userVerticalMenuItems;
  }

  public getUserHorizontalMenuItems(): Array<Menu> {
    return userHorizontalMenuItems;
  }
  public expandActiveSubMenu(menu: Array<Menu>) {
    let url = this.location.path();
    let routerLink = url; // url.substring(1, url.length);
    let activeMenuItem = menu.filter(item => item.routerLink === routerLink);
    if (activeMenuItem[0]) {
      let menuItem = activeMenuItem[0];
      while (menuItem.parentId != 0) {
        let parentMenuItem = menu.filter(item => item.id == menuItem.parentId)[0];
        menuItem = parentMenuItem;
        this.toggleMenuItem(menuItem.id);
      }
    }
  }

  public toggleMenuItem(menuId) {
    let menuItem = document.getElementById('menu-item-' + menuId);
    let subMenu = document.getElementById('sub-menu-' + menuId);
    if (subMenu) {
      if (subMenu.classList.contains('show')) {
        subMenu.classList.remove('show');
        menuItem.classList.remove('expanded');
      }
      else {
        subMenu.classList.add('show');
        menuItem.classList.add('expanded');
      }
    }
  }

  public closeOtherSubMenus(menu: Array<Menu>, menuId) {
    let currentMenuItem = menu.filter(item => item.id == menuId)[0];
    if (currentMenuItem.parentId == 0 && !currentMenuItem.target) {
      menu.forEach(item => {
        if (item.id != menuId) {
          let subMenu = document.getElementById('sub-menu-' + item.id);
          let menuItem = document.getElementById('menu-item-' + item.id);
          if (subMenu) {
            if (subMenu.classList.contains('show')) {
              subMenu.classList.remove('show');
              menuItem.classList.remove('expanded');
            }
          }
        }
      });
    }
  }


}
