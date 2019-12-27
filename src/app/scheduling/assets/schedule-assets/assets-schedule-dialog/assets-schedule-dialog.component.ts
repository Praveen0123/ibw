import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-assets',
  templateUrl: './assets-schedule-dialog.component.html',
  styleUrls: ['./assets-schedule-dialog.component.scss']
})
export class AssetsScheduleDialogComponent implements OnInit {
  public form:FormGroup;
  constructor(public dialogRef: MatDialogRef<AssetsScheduleDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any,
              public formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({ 
      'title': ['', Validators.required],            
      'start': ['', Validators.required], 
      'end': '',
      'isEdit' : false
    });
  }
  

  ngOnInit() {
    if (this.data){
      // console.log(this.data);
      this.form.patchValue({
        'title': this.data.title,
        'start': this.data.start,
        'end': this.data.end,
        'isEdit' : true
      })
    }
  }

  close(): void {
    this.dialogRef.close();
  }

}
