import { Component, OnInit, ViewEncapsulation, ChangeDetectorRef } from '@angular/core';
import { AlertService } from '../../../shared/services/alert.service';
import { MatDialog } from '@angular/material';
import { Router, ActivatedRoute } from '@angular/router';
import { AddNoteDialogComponent } from '../../../shared/add-note-dialog/add-note-dialog.component';
import { ConfirmDialogComponent } from '../../../shared/confirm-dialog/confirm-dialog.component';


@Component({
  selector: 'app-projects-kanban-view',
  templateUrl: './projects-kanban-view.component.html',
  styleUrls: ['./projects-kanban-view.component.scss'],
  encapsulation: ViewEncapsulation.None,
    providers: [AlertService]
})
export class ProjectsKanbanViewComponent implements OnInit {

  filterToggle: boolean = false;
    public dateTime1: Date;
    userType: string = "";
    constructor(private alertService: AlertService,private ref: ChangeDetectorRef, public dialog: MatDialog, 
      private route: ActivatedRoute, private router: Router, ) {
    }
    colorOptions = ["Green", "Blue", "Gray", "Red"];
    colorOptionSelected: any;
    onColorOptionsSelected(event) {
        console.log(event); //option value will be sent as event
    }
    monthOptions = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    monthOptionSelected: any;
    onMonthOptionsSelected(event) {
        console.log(event); //option value will be sent as event
    }
    yearOptions = [2015, 2016, 2017, 2018];
    yearOptionSelected: any;
    onYearOptionsSelected(event) {
        console.log(event); //option value will be sent as event
    }
    locationOptions = ["Canada", "India", "USA", "United Kingdom"];
    locationOptionSelected: any;
    onLocationOptionsSelected(event) {
        console.log(event); //option value will be sent as event
    }
    campaignOptions = ["TDR","CEO","Startup","CV","Audit Automation","F2O","Venue Management"];
    campaignOptionSelected: any;
    onCampaignOptionsSelected(event) {
        console.log(event); //option value will be sent as event
    }
    bdOptions = ["Rohin", "K.Sai", "Srinu", "P.Siva"];
    bdOptionSelected: any;

    onBdOptionsSelected(event) {
        console.log(event); //option value will be sent as event
    }
 
    localData: any[] = [
        { id:"kanban_table_1", style:{'background-color':'rgb(189, 215, 238)'}, stage:'Research ', header: 'Research  (2)', data : [{ id: 'kanban_item_1161', name: '5-35151', info: 'Updates: 5', colorCode: 'Green', percentage: '70%',campaign: '',projectcode:"Hydro One | Dave", actions: 'SOW: 4 / 12',budget: 'Tasks: 23 / 98',tasks:'Sites: 2 / 5',duedate:'Due Date: 17-May-2019', hex: '#FFFFFF'}, 
        { id:'kanban_item_1163', name: 'Reference Plan',  info: 'Updates: 2', colorCode: 'Green', campaign: 'Delpark Homes | Dave',projectcode:"4-24654 | 1486 Mearns ", actions: 'Actions: 8/10',budget: 'Budget: $ 560/800',tasks:'Tasks: 57/100',duedate:'Due Date: 26-May-2019',percentage: '94%', hex: '#FFFFFF'}]},
        { id:"kanban_table_2", style:{'background-color':'rgb(194, 220, 243)'}, stage:'Field', header: 'Field (1)', data : [{ id: 'kanban_item_1162', name: 'Topographic',  info: 'Updates: 7', colorCode: 'Red',percentage: '85%', campaign: 'Hydro One | Dave',projectcode:"5-35135 | Mearns Ave", actions: 'Actions: 6/10',budget: 'Budget: $ 542/700',tasks:'Tasks: 59/100',duedate:'Due Date: 19-May-2019', hex: '#E0E0E0',}]},
        { id:"kanban_table_3", style:{'background-color':'rgb(213, 240, 263)'}, stage:'Calculations', header: 'Calculations (1)', data : [{ id: 'kanban_item_1166', name: 'TRPR', info: 'Updates: 6', colorCode: 'Green',percentage: '75%', campaign: 'Sandbank | Dwayne',projectcode:"6-26846 | Mearns avt", actions: 'Actions: 9/10',budget: 'Budget: $ 652/750',tasks:'Tasks: 78/100',duedate:'Due Date: 20-May-2019', hex: '#E0E0E0',}]},
        { id:"kanban_table_4", style:{'background-color':'rgb(204, 230, 253)'}, stage:'Drafting', header: 'Drafting (0)', data : [{ id: 'kanban_item_1164', name: 'Survey',  info: 'Updates: 2', colorCode: 'Green',percentage: '88%', campaign: 'Valleymede | Dave',projectcode:"7-12584 | 256 Street ", actions: 'Actions: 7/10',budget: 'Budget: $ 425/650',tasks:'Tasks: 85/100',duedate:'Due Date: 18-May-2019', hex: '#E0E0E0',}]},
        { id:"kanban_table_5", style:{'background-color':'rgb(213, 240, 263)'}, stage:'Quality Control', header: 'Quality Control (1)', data : [{ id: 'kanban_item_1166', name: 'SRPR', info: 'Updates: 3', colorCode: 'Green',percentage: '80%', campaign: 'AECOM | Dwayne',projectcode:"2-15874 | 61 Mearns Ct", actions: 'Actions: 9/10',budget: 'Budget: $ 752/900',tasks:'Tasks: 66/100',duedate:'Due Date: 27-May-2019', hex: '#E0E0E0',}]},
        { id:"kanban_table_6", style:{'background-color':'rgb(218, 245, 268)'}, stage:'Archived', header: 'Archived (0)', data : []},
        { id:"kanban_table_7", style:{'background-color':'rgb(218, 245, 268)'}, stage:'Completed', header: 'Completed (0)', data : []},
        { id:"kanban_table_7", style:{'background-color':'rgb(218, 245, 268)'}, stage:'Cancelled', header: 'Cancelled (0)', data : []}
    ];

    projectKanbanData: any[] = [
        { id:"kanban_table_1", style:{'background-color':'rgb(189, 215, 238)'}, stage:'Research ', header: 'Research  (1)', data : [{ id: 'kanban_item_1161', projectname: '5-35151', info: 'Updates: 5', colorCode: 'Green', percentage: '70%',campaign: '',clientName:"Hydro One | Dave", sow: 'SOW: 4 / 12',tasks: 'Tasks: 23 / 98',sites:'Sites: 2 / 5', actions: 'Actions: 71 / 212' , duedate:'2019/08/20', hex: '#FFFFFF'}]},
        { id:"kanban_table_2", style:{'background-color':'rgb(189, 215, 238)'}, stage:'Research ', header: 'Field  (1)', data : [{ id: 'kanban_item_1161', projectname: '7-33171', info: 'Updates: 4', colorCode: 'Red', percentage: '68%',campaign: '',clientName:"City Homes | Dwayne", sow: 'SOW: 8 / 16',tasks: 'Tasks: 32 / 102',sites:'Sites: 1 / 4', actions: 'Actions: 88 / 175' , duedate:'2019/08/25', hex: '#E0E0E0'}]},
        { id:"kanban_table_3", style:{'background-color':'rgb(189, 215, 238)'}, stage:'Research ', header: 'Calculations  (1)', data : [{ id: 'kanban_item_1161', projectname: '7-120041', info: 'Updates: 2', colorCode: 'Green', percentage: '85%',campaign: '',clientName:"Dellpark Homes | John", sow: 'SOW: 7 / 17',tasks: 'Tasks: 33 / 125',sites:'Sites: 3 / 9', actions: 'Actions: 75 / 225' , duedate:'2019/09/06', hex: '#E0E0E0'}]},
        { id:"kanban_table_4", style:{'background-color':'rgb(189, 215, 238)'}, stage:'Research ', header: 'Drafting  (1)', data : [{ id: 'kanban_item_1161', projectname: '7-356641', info: 'Updates: 1', colorCode: 'Green', percentage: '76%',campaign: '',clientName:"AECOM | John Wick", sow: 'SOW: 6 / 19',tasks: 'Tasks: 45 / 155',sites:'Sites: 1 / 7', actions: 'Actions: 68 / 205' , duedate:'2019/09/12', hex: '#E0E0E0'}]},
        { id:"kanban_table_5", style:{'background-color':'rgb(189, 215, 238)'}, stage:'Research ', header: 'Quality Control (1)', data : [{ id: 'kanban_item_1161', projectname: '5-35151', info: 'Updates: 3', colorCode: 'Green', percentage: '60%',campaign: '',clientName:"Hydro One | Dave", sow: 'SOW: 4 / 12',tasks: 'Tasks: 23 / 98',sites:'Sites: 2 / 5', actions: 'Actions: 71 / 212' , duedate:'2019/08/20', hex: '#E0E0E0'}]},
        { id:"kanban_table_6", style:{'background-color':'rgb(218, 245, 268)'}, stage:'Archived', header: 'Archived (0)', data : []},
        { id:"kanban_table_7", style:{'background-color':'rgb(218, 245, 268)'}, stage:'Completed', header: 'Completed (1)', data : [{ id: 'kanban_item_1161', projectname: '7-328441', info: 'Updates: 0', colorCode: 'Green', percentage: '100%',campaign: '',clientName:"Sandbank | Smith", sow: 'SOW: 5 / 12',tasks: 'Tasks: 52 / 155',sites:'Sites: 2 / 6', actions: 'Actions: 95 / 275' , duedate:'2019/09/21', hex: '#FFFFFF'}]},
        { id:"kanban_table_7", style:{'background-color':'rgb(218, 245, 268)'}, stage:'Cancelled', header: 'Cancelled (0)', data : []},
        { id:"kanban_table_7", style:{'background-color':'rgb(218, 245, 268)'}, stage:'Pending', header: 'Pending (0)', data : []}

    ];

    draggedItem: any;
    ngOnInit() {
        var sessionDetails = JSON.parse(localStorage.getItem('userTypeSession'));
        console.log(sessionDetails.userType,'fff');
        if(sessionDetails.userType == 'user'){
          this.userType = 'user';
        }
        if(sessionDetails.userType == 'admin'){
          this.userType = 'admin';
        }
    }
    dragStart(event,item, sourceKanbanId) {
        if(this.userType == 'admin')
        this.draggedItem = item;
        this.draggedItem.kanbanId = sourceKanbanId;
    }
    drag(item) {
        if(this.userType == 'admin')
        document.getElementById(item.id).style.display="none";
    }
    drop(event) {
        if(this.userType == 'admin')    
        if(this.draggedItem && this.draggedItem.kanbanId && event.path[0]['id']) {
            this.moveItem(this.draggedItem,event.path[0]['id']);
            this.draggedItem = null;
        }
    }
    dragEnd(event,item) {
        if(this.userType == 'admin')
        document.getElementById(item.id).style.display="table-row";
        this.draggedItem = null;
    }
    moveItem(draggedItem, kanbanId) {
        if(this.userType == 'admin')
        console.log(draggedItem);
        for(let i = 0; i < this.projectKanbanData.length; i++) {
            if(kanbanId === this.projectKanbanData[i].id) {
                if(i%2 === 0) {
                    draggedItem.hex = '#FFFFFF';
                } else {
                    draggedItem.hex = '#E0E0E0';
                }
                this.projectKanbanData[i].data.push(draggedItem);
                this.projectKanbanData[i].header = this.projectKanbanData[i].stage + ' ('+this.projectKanbanData[i].data.length+')';
            }
            if(draggedItem.kanbanId === this.localData[i].id) {
                var temp = this.projectKanbanData[i].data;
                for(let j=0; j < temp.length; j++) {
                    if(temp[j].id === draggedItem.id) {
                        this.projectKanbanData[i].data.splice(j,1);
                        this.projectKanbanData[i].header = this.projectKanbanData[i].stage + ' ('+this.projectKanbanData[i].data.length+')';
                    }
                }
            }
        }
    }

    public openNewUpdate(id) {
        let dialogRef = this.dialog.open(AddNoteDialogComponent, {
            data: id,
            height: 'auto',
            width: '600px'
        });
        dialogRef.afterClosed().subscribe(data => {
        });
    }
    public openConfirmDialog(action,value,name) {
        let dialogRef = this.dialog.open(ConfirmDialogComponent, {
            data:{'action':action,'value':value,'name':name}
        });
    
        dialogRef.afterClosed().subscribe(account => {
            this.dialog.closeAll();
            return account;
        });
    }

}
