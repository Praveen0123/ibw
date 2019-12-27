import { Component, OnInit } from '@angular/core';
import { TimelineDialogComponent } from '../../projects/review/timeline-dialog/timeline-dialog.component';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-manage-return-assets-returned',
  templateUrl: './manage-return-assets-returned.component.html',
  styleUrls: ['./manage-return-assets-returned.component.scss']
})
export class ManageReturnAssetsReturnedComponent implements OnInit {
  myModel:boolean = true;
  constructor(public dialog:MatDialog) { }
  Assets = [
    {precondition:"Excellent",currentcondition:"Excellent", id: 1, issueDate: "2019-06-20", dueDate: "2019-06-22", returnedDate: "2019-06-22", remarks: 'Expense for journey', isSelected: false, assignedTo: 'Jhon Cena', returnedBy: 'Jhon Cena', validatedby: 'Chris Morris', amount: 50, messages: 1, isPending: true, isApproved: false, isDeclined: false, assetName: "Cosmolabe", assetCategory: "Vechile", assetReference: "586952" },
    {precondition:"Excellent",currentcondition:"Has Issues", id: 2, issueDate: "2019-06-25", dueDate: "2019-06-26", returnedDate: "2019-06-26", remarks: 'Vehicle diesel', isSelected: false, assignedTo: 'Robert Smith', returnedBy: 'David Smith', validatedby: 'Maria Rodriguez', amount: 34, messages: 2, isPending: true, isApproved: false, isDeclined: false, assetName: "Dioptra", assetCategory: "Total Station", assetReference: "369452" },
    {precondition:"Excellent",currentcondition:"Excellent", id: 3, issueDate: "2019-06-10", dueDate: "2019-06-12", returnedDate: "2019-06-12", remarks: 'Miscellaneous', isSelected: false, assignedTo: 'Maria Garcia', returnedBy: 'Maria Garcia', validatedby: 'Maria Hernandez', amount: 15, messages: 3, isPending: true, isApproved: false, isDeclined: false, assetName: "Tachymeter	", assetCategory: "Vechile", assetReference: "389462" },
    {precondition:"Excellent",currentcondition:"Excellent", id: 4, issueDate: "2019-06-12", dueDate: "2019-06-14", returnedDate: "2019-06-14", remarks: 'Tools purchased', isSelected: false, assignedTo: 'Maria Martinez', returnedBy: 'James Johnson', messages: 2, isPending: true, validatedby: 'Chris Morris', amount: 55, isApproved: false, isDeclined: false, assetName: "Dioptra", assetCategory: "Total Station", assetReference: "698242" },
  ]
  ngOnInit() {
  }
  openMessagesDiolog(lead) {
    let dialogRef = this.dialog.open(TimelineDialogComponent, {
        data: lead,
        height: 'auto',
        width: '750px',
    });
  }

}
