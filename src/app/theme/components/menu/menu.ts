import { Menu } from './menu.model';



export const verticalMenuItems = [
   
]

export const horizontalMenuItems = [
    
    //Dashboard menu items
    new Menu(1, 'Dashboard', '/IBW/analytics', null, 'assessment', null, true, 0, "Orange"),
    
    // Create menu items
    new Menu(2, 'Create', null, null, 'create', null, true, 0, "Orange"),
    new Menu(30, 'New Quote', '/IBW/manage/quotes/gridview', null, 'public', null, true, 2, "Orange"),
    new Menu(34, 'Leave Request', null, null, 'airline_seat_individual_suite', null, true, 2, "lightgreen"),
    new Menu(35, 'Timesheets & Expenses', '/IBW/create', null, 'money_off', null, true, 2, "Orange"),
    
    //Manage menu items
    new Menu(3, 'Manage', '/IBW/manage', null, 'device_hub', null, true, 0, "Orange"),
    new Menu(7,  'Clients', '/IBW/manage/clients', null, 'group', null, true, 3, "lightgreen"),
    new Menu(8, 'Contacts', '/IBW/manage/contacts', null, 'contacts', null, false, 3, "lightgreen"),
    new Menu(9, 'Quotes', '/IBW/manage/quotes', null, 'public', null, true, 3, "Orange"),
    new Menu(10,'Projects', '/IBW/manage/projects', null, 'outlined_flag', null, false, 3, "Orange"),
    new Menu(56, 'Timesheets & Expenses', '/IBW/manage/review', null, 'rate_review', null, false, 3, "Orange"),
    new Menu(55, 'Payroll', '/IBW/manage/payroll', null, 'money_off', null, false, 3, "Orange"),
    new Menu(13, 'Assets', '/IBW/manage/return-assets', null, 'keyboard_return', null, true, 3, "Orange"),
    new Menu(14, 'Leave', '/IBW/manage/leaves', null, 'time_to_leave', null, true, 3, "Orange"),

    //Scheduling menu items
    new Menu(4, 'Scheduling', '/IBW/scheduling/action-calendar', null, 'schedule', null, true, 0, "Orange"),
    new Menu(15, 'Action Scheduling',  '/IBW/scheduling/action-calendar', null, 'list', null, false, 4, "Orange"),
    new Menu(16, 'Resource Scheduling', '/IBW/scheduling/assets', null, 'gradient', null, true, 4, "Orange"),
    
    //Reports menu items
    new Menu(5, 'Reports', '/IBW/reports/predictability', null, 'today', null, true, 0, "Orange"),
    new Menu(17, 'Predictability', '/IBW/reports/predictability', null, 'device_hub', null, true, 5, "Orange"),
    new Menu(18, 'Productivity', '/IBW/reports/productivity', null, 'av_timer', null, true, 5, "Orange"),
    new Menu(19, 'Profitability', '/IBW/reports/profitability', null, 'format_align_center', null, false, 5, "Orange"),
    new Menu(20, 'Billing', '/IBW/reports/billing', null, 'equalizer', null, true, 5, "Orange"),
    new Menu(21, 'Work in Process', '/IBW/reports/work-in-process', null, 'format_line_spacing', null, true, 5, "Orange"),
    new Menu(22, 'Leave', '/IBW/reports/leave', null, 'time_to_leave', null, true, 5, "Orange"),
    
    //Admin menu items
    new Menu(6, 'Admin', '/IBW/admin', null, 'person', null, true, 0, "lightgreen"),
    new Menu(23, 'Permissions', '/IBW/admin/permissions', null, 'perm_identity', null, false, 6, "lightgreen"),
    new Menu(24, 'Users', '/IBW/admin/users', null, 'group_add', null, false, 6, "lightgreen"),
    new Menu(25, 'Configure Kanban', '/IBW/admin/configure_kanban', null, 'receipt', null, true, 6, "lightgreen"),
    new Menu(26, 'Master Data', '/IBW/admin/master-data', null, 'device_hub', null, true, 6, "lightgreen"),
    new Menu(27, 'Important Dates', '/IBW/admin/availability', null, 'av_timer', null, true, 6, "lightgreen"),
    new Menu(28, 'Settings', '/IBW/admin/settings', null, 'device_hub', null, true, 6, "lightgreen"),
    new Menu(45, 'Event Master', '/IBW/admin/event-master', null, 'event_note', null, true, 6, "lightgreen")
]

export const userVerticalMenuItems = [
    new Menu(1, 'Dashboard', '/IBW/analytics', null, 'assessment', null, true, 0, "lightskyblue"),
    new Menu(2, 'Create', null, null, 'create', null, true, 0, "white"),
    new Menu(34, 'New Timesheet', '/IBW/manage/under_construction', null, 'money', null, true, 2, "white"),
    new Menu(35, 'New Expenses', '/IBW/manage/under_construction', null, 'money_off', null, true, 2, "white"),
    new Menu(3, 'Manage', '', null, 'device_hub', null, true, 0, "white"),
    new Menu(9, 'Projects', '/IBW/manage/projects', null, 'outlined_flag', null, false, 3, "white")
]

export const userHorizontalMenuItems = [
    new Menu(1, 'Dashboard', '/IBW/analytics', null, 'assessment', null, true, 0, "Orange"),
    new Menu(2, 'Create', null, null, 'create', null, true, 0, "Orange"),

    new Menu(34, 'Add Hours', null, null, 'money', null, true, 2, "Orange"),
    new Menu(35, 'Add Expense', null, null, 'money_off', null, true, 2, "Orange"),
    new Menu(36, 'Leave Request', null, null, 'airline_seat_individual_suite', null, true, 2, "Orange"),
    // new Menu(3, 'Manage', '/IBW/manage/projects', null, 'device_hub', null, true, 0, "Orange"),
    new Menu(3, 'Projects', '/IBW/manage/projects', null, 'outlined_flag', null, false, 0, "Orange"),
    // new Menu(25, 'Expenses', '/IBW/manage/expenses', null, 'money_off', null, true, 3, "Orange"),
    // new Menu(37, 'Hours', '/IBW/manage/hours', null, 'hourglass_full', null, true, 3, "Orange"),
    // new Menu(40, 'Timesheets', '/IBW/manage/timesheets', null, 'access_time', null, true, 3, "Orange"),
    // new Menu(41, 'Return Assets', '/IBW/manage/return-assets', null, 'keyboard_return', null, true, 3, "Orange"),
    new Menu(39, 'Request Status', '/IBW/manage/leaves', null, 'time_to_leave', null, false, 0, "Orange"),
    // new Menu(40, 'Exceptions', '/IBW/manage/attendance-exceptions', null, 'av_timer', null, true, 3, "Orange"),

]

