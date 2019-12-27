import { Component, OnInit, ChangeDetectorRef, ViewChild, HostListener, ViewEncapsulation } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AlertService } from '../../../shared/services/alert.service';
import { QuotesDialogComponent } from '../quotes-dialog/quotes-dialog.component';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfirmDialogComponent } from '../../../shared/confirm-dialog/confirm-dialog.component';
import { AddNoteDialogComponent } from '../../../shared/add-note-dialog/add-note-dialog.component';
import { QuoteUpdateDialogComponent } from '../quote-update-dialog/quote-update-dialog.component';

@Component({
  selector: 'app-kanban',
  templateUrl: './kanban.component.html',
  styleUrls: ['./kanban.component.scss'],
  encapsulation: ViewEncapsulation.None,
    providers: [AlertService]
})
export class KanbanComponent implements OnInit {
    filterToggle: boolean = false;
    public dateTime1: Date;
    constructor(private alertService: AlertService,private ref: ChangeDetectorRef, public dialog: MatDialog, private route: ActivatedRoute, private router: Router, ) {
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
    public openprospectsDialog(prospects) {
        let dialogRef = this.dialog.open(QuotesDialogComponent, {
            data: prospects,
            height: 'auto',
            width: '600px',
        });

        dialogRef.afterClosed().subscribe(prospects => {
            if (prospects) {
            }
        });
    }
    localData: any[] = [
        { id:"kanban_table_1", style:{'background-color':'rgb(189, 215, 238)'}, stage:'Received', header: 'Received (2)', data : [{ id: 'kanban_item_1161', name: 'Q-190001 (James)',municipality:"Mississauga", accMgr:"Dwayne", info: 'Updates: 5', surveyType:"Reference Plan", colorCode: 'Green',client:"Toronto Towers", percentage: '',campaign: 'City Homes', lead: 'Ontario | Dwayne', hex: '#FFFFFF'}, 
        { id:'kanban_item_1163', name: 'Q-190006 (John)',municipality:"Mississauga", accMgr:"Dwayne", info: 'Updates: 5', colorCode: 'Green', percentage: '',campaign: 'City Homes', lead: 'Ontario | Dwayne',client:"Hydro One", surveyType:"Topo", hex: '#FFFFFF'}]},
        { id:"kanban_table_2", style:{'background-color':'rgb(194, 220, 243)'}, stage:'Preparation Started', header: 'Preparation Started (1)', data : [{ id: 'kanban_item_1162', name: 'Q-190002 (Michael)',municipality:"Toronto", accMgr:"Dave", surveyType:"SRPR",client:"Valleymede Homes", info: 'Updates: 7', colorCode: 'Red',percentage: '', campaign: 'Hydro One', lead: 'Lake Louise	 | Dave', hex: '#E0E0E0',}]},
        { id:"kanban_table_3", style:{'background-color':'rgb(213, 240, 263)'}, stage:'Assigned to PM', header: 'Assigned to PM (1)', data : [{ id: 'kanban_item_1166', name: 'Q-190003 (James)',municipality:"Brampton", surveyType:"Builders",client:"Sandbank Homes", accMgr:"Dwayne",info: 'Updates: 6', colorCode: 'Green',percentage: '', campaign: 'Sandbank Homes', lead: 'Edmonton	 | Dwayne', hex: '#E0E0E0',}]},
        { id:"kanban_table_4", style:{'background-color':'rgb(204, 230, 253)'}, stage:'Quote Sent', header: 'Quote Sent (0)', data : [{ id: 'kanban_item_1164', name: 'Q-190004 (Michael)',municipality:"Hamilton", accMgr:"Dave", surveyType:"Site Plan",client:"Delpark Homes", info: 'Updates: 2', colorCode: 'Green',percentage: '', campaign: 'Valleymede Homes', lead: 'Brooks | Dave', hex: '#E0E0E0',}]},
        { id:"kanban_table_5", style:{'background-color':'rgb(213, 240, 263)'}, stage:'Canceled', header: 'Canceled (1)', data : [{ id: 'kanban_item_1166', name: 'Q-190005 (Maria)',municipality:"Brampton",accMgr:"Dwayne", surveyType:"Lot Line Staking",client:"AECOM", info: 'Updates: 3', colorCode: 'Green',percentage: '', campaign: 'AECOM', lead: 'Vancouver	 | Dwayne', hex: '#E0E0E0',}]},
        // { id:"kanban_table_6", style:{'background-color':'rgb(218, 245, 268)'}, stage:'Not Applicable', header: 'Not Applicable (0)', data : []},
        // { id:"kanban_table_7", style:{'background-color':'rgb(218, 245, 268)'}, stage:'Missed Deadline', header: 'Missed Deadline (0)', data : []},
        // { id:"kanban_table_7", style:{'background-color':'rgb(218, 245, 268)'}, stage:'Duplicate', header: 'Duplicate (0)', data : []},
        { id:"kanban_table_7", style:{'background-color':'rgb(218, 245, 268)'}, stage:'Hold', header: 'Hold (0)', data : []},
        { id:"kanban_table_7", style:{'background-color':'rgb(218, 245, 268)'}, stage:'Clarification from Client', header: 'Clarification from Client(0)', data : []},
        // { id:"kanban_table_7", style:{'background-color':'rgb(218, 245, 268)'}, stage:'Registered as Document', header: 'Registered as Document (0)', data : []},
        { id:"kanban_table_7", style:{'background-color':'rgb(218, 245, 268)'}, stage:'Awarded', header: 'Awarded (0)', data : []},
        // { id:"kanban_table_7", style:{'background-color':'rgb(218, 245, 268)'}, stage:'Rejected', header: 'Rejected (0)', data : []},
    ];
    draggedItem: any;
    ngOnInit() {
    console.log("Kanban")

    }
    scrollKanban(side) { 
        var ele = document.getElementById('kanban-table-container');
        if(side == 'left')
            ele.scrollLeft += 190;
        else
        ele.scrollLeft -= 190;
    }
    dragStart(event,item, sourceKanbanId) {
        this.draggedItem = item;
        this.draggedItem.kanbanId = sourceKanbanId;
    }
    drag(item) {
        document.getElementById(item.id).style.display="none";
    }
    drop(event) {
        if(this.draggedItem && this.draggedItem.kanbanId && event.path[0]['id']) {
            this.moveItem(this.draggedItem,event.path[0]['id']);
            this.draggedItem = null;
        }
    }
    dragEnd(event,item) {
        document.getElementById(item.id).style.display="table-row";
        this.draggedItem = null;
    }
    moveItem(draggedItem, kanbanId) {
        console.log(draggedItem);
        for(let i = 0; i < this.localData.length; i++) {
            if(kanbanId === this.localData[i].id) {
                if(i%2 === 0) {
                    draggedItem.hex = '#FFFFFF';
                } else {
                    draggedItem.hex = '#E0E0E0';
                }
                this.localData[i].data.push(draggedItem);
                this.localData[i].header = this.localData[i].stage + ' ('+this.localData[i].data.length+')';
            }
            if(draggedItem.kanbanId === this.localData[i].id) {
                var temp = this.localData[i].data;
                for(let j=0; j < temp.length; j++) {
                    if(temp[j].id === draggedItem.id) {
                        this.localData[i].data.splice(j,1);
                        this.localData[i].header = this.localData[i].stage + ' ('+this.localData[i].data.length+')';
                    }
                }
            }
        }
    }
public openQuoteUpdateDialog(id){
    let dialogRef = this.dialog.open(QuoteUpdateDialogComponent, {
        data: id,
        height: 'auto',
        width: '600px'
    });
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
