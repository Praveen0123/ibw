import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-file-locationdialogue',
  templateUrl: './file-locationdialogue.component.html',
  styleUrls: ['./file-locationdialogue.component.scss']
})
export class FileLocationdialogueComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<FileLocationdialogueComponent>,) { }

  ngOnInit() {
  }
  close(): void {
    this.dialogRef.close();
  }

  saveOpp() {
    this.dialogRef.close();
  }

}
