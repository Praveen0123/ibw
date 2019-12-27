import { Component } from '@angular/core';
import { ActivatedRoute, Router, ActivatedRouteSnapshot, UrlSegment, NavigationEnd } from "@angular/router";
import { Title } from '@angular/platform-browser';
import { AppSettings } from '../../../app.settings';
import { Settings } from '../../../app.settings.model';

@Component({
    selector: 'app-breadcrumb',
    templateUrl: './breadcrumb.component.html',
    styleUrls: ['./breadcrumb.component.scss']
})
export class BreadcrumbComponent {

    public pageTitle: string;
    public moduleTitle: string;
    public subTitle: string = "test";
    public description: {};
    public breadcrumbs: {
        name: string;
        url: string
    }[] = [];

    public settings: Settings;
    constructor(public appSettings: AppSettings,
        public router: Router,
        public activatedRoute: ActivatedRoute,
        public title: Title) {
        this.settings = this.appSettings.settings;
        this.description = {
            "Dashboard": "This is a summary dashboard of the entire system.",
            "Alerts": "The alerts as reminders for the Marketing and Sales process can be viewed from here.",
            "Quotes": {
                'Grid View': "This is the core screen where the list of quotes can be managed.",
                'Map View': "All the locations of th quotes can be vie from here."
            },
            "Scheduling": {
                'Assets': {
                    'Master Asset ': 'All the assets can be configured and managed from here.',
                    'Schedule Assets':
                    {
                        'Grid View': 'All the scheduled assets can be viewd from here.',
                        'Calendar View': "This is the actual schedule screen, which dispalys all the asset schedules."
                    }
                    // 'Grid View': 'All the scheduled assets can be viewd from here.',
                    //    'Calendar View': "This is the actual schedule screen, which dispalys all the asset schedules." 
                }
            },
            "Master Data": {
                'Job Codes': "Job codes can be configured and managed from here.",
                'Expense Codes': "Expense codes can be configured and managed from here.",
                'Asset Categories': 'Asset Categories can be configured and managed from here.',
                'client Categories': 'Client Categories can be configured and managed from here.',
                "client Types": "Client Types can be configured and managed from here.",
                "Project Types": "Project Types can be configured and managed from here.",
                "Lead Sources": "Lead Sources can be configured and managed from here.",
                'Municipalities': "Municipalities can be configured and managed from here.",
                'Potential Levels': 'Potential Levels can be configured and managed from here.',
                "Delay Reason": "Delay Resons can be configured and managed from here.",
                "File Location":"Physical File Locations can be configured and managed here.",
                'Asset Master': 'Assets can be configured and managed from here.',
                'Leave Reasons': 'Leave Reasons can be configured and managed from here.',
                "Lookup Options": "Lookup Options can be configured and managed from here.",
                "Survey Purpose": "Survey Purpose can be managed from here.",
                "Configure Questionnaire": "Survey Purpose Questionnaire can be configured here.",
            },
            "Configure Permissions":"Configure permissions screen is used to manage permissions",
            "Master List": {
                'Municipalities': "All the municipalities can be configured and managed from here.",
                'Potential Levels': 'All the potential levels can be configured and managed from here.',
                "Delay Reason": "All the Delay Resons can be configured and managed here.",
                "File Location":"All the Physical File Locations can be configured and managed here.",
            },
            "Event Master":"User can view logs from this screen",
            "Settings": "Here the default settings can be managed for the whole of the application.",
            'Leave Reports': 'All the Leave Reports can be viewed here.',
            'Asset Master': 'All the assets can be configured and managed from here.',
            "Quotes Dashboard":"Activities that are carried on selected quote can be viewed and managed.",
            "Overdue Alerts": "Overdue alerts along with reason for delay if available are logged in this screen. Note, these alerts are specific to a staff or a task.",
            "Calendar": "List of tasks scheduled for selected project can be viewed and managed from this screen. Also, summary details of selected task, staff and assets can be viewed here.",
            "Clients": "This is a screen where the list of clients can be managed.",
            "Projects": "This is the core screen where the list of projects and all project activity can be managed.",
            "Project Dashboard": "Activities that are carried on selected project can be viewed and managed.",
            "Tasks": "List of tasks and sub tasks associated to selected project can be viewed and managed from this screen.",
            //"Steps": "The flow of the Marketing and Sales process can be defined in terms of templates.",
            "Referral": 'Potential business from the existing customers can be managed here.',
            "Calenda": 'List of meetings scheduled are highlighted in this page.',
            "Expenses": 'Expenses screen is used to to log all the expenses, view and manage individual entries.',
            "Hours": 'Hours screen is used to screen the list of validated hours and group them by person or periods in order to take payment decisions.  Multiple hours can be selected at a time for bulk approval.  Claims may be declined with remarks in some cases.',
            "Timesheets":"Timesheets screen is used to display the detailed view of hours.",
            "Review":"",   
            "Time & Expense Review":"All the logged hours and expenses can be reviewed here.", 
            "Payroll":"Payroll screen is used to review the hour summary",
            "Return Assets":"Return assets screen is used to display all the returned assets.",
            "Attendance Exceptions": "All Attendance Exceptions can be managed from here",
            "Setup Budget": "SOW Budget can be setup in this screen.",
            "Users": "This page is used to manage users",
            // "Permissions": "This page is used to manage user permissions",
            "Contacts": "This is a screen where the list of contacts can be managed.",
            "Job Codes": "This page is used to manage the job codes",
            "Client Categories": "Client Categories can be managed in this page",
            "Billing": "This is the screen where revenue can be viewed",
            "Timeline": " The data for the Projects gets highlighted based on the selected tab.",
            "Assign Resources": " All the assets scheduling can be managed from here.",
            "Important Dates": "Staff availability can be managed from here.",
            "Action Scheduling": "List of pending actions can be managed here.",
            "Reports": "Here we can find all reports",
            "Leave Approvals": "All the leave requests can be managed from this screen.",
            "Leave Activity": "All the leave requests can be viewed from this screen.",
            "Due Dates": "Due Date",
            "Budgeting": "Budgeting",
            "On Time": "On Time",
            "OverDue": "OverDue",
            "Predictability": "This is the screen where predictability reports can be viewed",
            "Productivity": "This is the screen where productivity reports can be viewed",
            "Within Budget": "",
            "Variance": "",
            "OverRun": "",
            "Profitability": "Profitability of projects can be viewed here",
            "Work in Process": "Here is the summary metrics & bands for work in process.",
            "Action per Type": "",
            "Time & Entry User": "Time & Entry User dashboard.",
            "Project Manager User": "Project Manager User dashboard",
            "Under Construction": "Page is under construction.",
            "Sickdays":"",
            "No permission":"No permission has been given, please contact Admin.",


            "Prospect Dashboard": {
                "TIMELINE": " The data for the Prospects gets highlighted based on the selected tab.",
                "SEQUENCE": " The data for the Prospects gets highlighted based on the selected tab.",
                "NOTES": " The data for the Prospects gets highlighted based on the selected tab.",
                "EMAILS": " The data for the Prospects gets highlighted based on the selected tab.",
                "MESSAGES": " The data for the Prospects gets highlighted based on the selected tab.",
                "LINKEDIN": " The data for the Prospects gets highlighted based on the selected tab.",
                "CALLS": " The data for the Prospects gets highlighted based on the selected tab.",
                "OPPORTUNTIES": " The data for the Prospects gets highlighted based on the selected tab.",
                "LEADS": " The data for the Prospects gets highlighted based on the selected tab.",
                "CONTACT": " The data for the Peojects gets highlighted based on the selected tab.",
                "MEETINGS": " The data for the Prospects gets highlighted based on the selected tab.",
                "ALERTS": " The data for the Prospects gets highlighted based on the selected tab.",
                "QUALIFICATION": "The data for the Prospects gets highlighted based on the selected tab.",
            },
            "Task Manager": {
                "OPPORTUNTIES": 'Realtime updates in the opportunities list and the alerts are highlighted here.',
                "PROSPECTS": 'Realtime updates in the prospects list and the alerts are highlighted here.'
            },
            "Kanban": {
                "OPPORTUNTIES": 'Customize  Quotes/Projects steps as per the requirement',
                "PROSPECTS": 'Customize  Sales/Marketing steps as per the requirement'
            },
            "Expenses & Timesheets":{
               "Expenses":'Expenses screen is used to to log all the expenses, view and manage individual entries.' ,
               "Timesheets":'Expenses screen is used to to log all the expenses, view and manage individual entries.' 
            },
            // 'Reports': 'This page is used to create a checklist for qualification of prospect.',
            'Color Code': 'This page is used to manage  the color code',
            'Manage': 'This',
            'Time Zones': 'This page is used to manage timezones',
            'Location': 'This page is used to manage locations',
            'Permissions': 'This page is used to manage roles',
            'Expense Account': 'List of expense accounts is setup here',

            'Configure Kanban': 'List of KANBAN steps for quotes and projects can be configured and managed from here',
            'Quick Books Setup': 'List of mapping configurations required to interface with Quick Books appears here',
            'Announcements': 'Administrator can publish announcements to users by role over here and choose delivery modes like email or text or push notification',
            'Projects Review': 'All the projects can be reviewed from here.'
            // 'Overdue Alerts': 'Overdue alters can be viewed from here',




            // "Users": {
            //     "Users": "This page is used to manage Users.",
            //     "Permissions": "This page is used to manage permissions."
            // }

        };
        this.router.events.subscribe(event => {
            if (event instanceof NavigationEnd) {
                this.breadcrumbs = [];
                this.parseRoute(this.router.routerState.snapshot.root);
                this.pageTitle = "";
                this.breadcrumbs.forEach(breadcrumb => {
                    this.pageTitle += ' | ' + breadcrumb.name;
                })
                this.pageTitle ? null : this.pageTitle = " | Dashboard";
                var temp = this.pageTitle.split(' | ');
                if (temp.length > 4) {
                    this.subTitle = temp.pop();
                    this.moduleTitle = temp[temp.length - 1];
                } else if (temp.length > 3) {
                    this.subTitle = temp.pop();
                    this.moduleTitle = temp[temp.length - 1];
                } else {
                    this.moduleTitle = temp.pop();
                }
                if (this.subTitle === 'Permissions') {
                    this.moduleTitle = "Permissions";
                    this.subTitle = "test";
                }
                this.title.setTitle(this.settings.name + this.pageTitle);
            }
        })
    }

    private parseRoute(node: ActivatedRouteSnapshot) {
        if (node.data['breadcrumb']) {
            if (node.url.length) {
                let urlSegments: UrlSegment[] = [];
                node.pathFromRoot.forEach(routerState => {
                    urlSegments = urlSegments.concat(routerState.url);
                });
                let url = urlSegments.map(urlSegment => {
                    return urlSegment.path;
                }).join('/');
                this.breadcrumbs.push({
                    name: node.data['breadcrumb'],
                    url: '/' + url
                })
            }
        }
        if (node.firstChild) {
            this.parseRoute(node.firstChild);
        }
    }

    public closeSubMenus() {
        let menu = document.querySelector(".sidenav-menu-outer");
        if (menu) {
            for (let i = 0; i < menu.children[0].children.length; i++) {
                let child = menu.children[0].children[i];
                if (child) {
                    if (child.children[0].classList.contains('expanded')) {
                        child.children[0].classList.remove('expanded');
                        child.children[1].classList.remove('show');
                    }
                }
            }
        }
    }
}


