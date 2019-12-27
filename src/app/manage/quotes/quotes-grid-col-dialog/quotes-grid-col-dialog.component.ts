import { Component, OnInit } from '@angular/core';
import {  MatDialogRef, MatDialog } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { QuotesDialogComponent } from '../quotes-dialog/quotes-dialog.component';

@Component({
  selector: 'app-quotes-grid-col-dialog',
  templateUrl: './quotes-grid-col-dialog.component.html',
  styleUrls: ['./quotes-grid-col-dialog.component.scss']
})
export class QuotesGridColDialogComponent implements OnInit {
  paramId: any;

  constructor(public dialog: MatDialogRef<QuotesGridColDialogComponent>) { }

  ngOnInit() {

  }
  close(): void {
    this.dialog.close();
  }



}
