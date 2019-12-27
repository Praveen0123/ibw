import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '../../../../../node_modules/@angular/forms';
import { AdminService } from '../../admin.service';
import { MatSnackBar, MatDialog } from '@angular/material';
import { DeleteConfirmDailogComponent } from 'src/app/shared/delete-confirm-dailog/delete-confirm-dailog.component';
import { isValid } from 'date-fns';

export class Holiday
{
  holidayId:number;
  holidayFor:string;
  strHolidayDate:string;
  createdBy:string;
  isholidayForValid:boolean;
  isHolidayDateValid:boolean;
}

@Component({
  selector: 'app-holidays',
  templateUrl: './holidays.component.html',
  styleUrls: ['./holidays.component.scss']
})
export class HolidaysComponent implements OnInit {
  holiodays:Array<Holiday> = new Array<Holiday>();
  constructor(private _adminService:AdminService,
     private _snackBar: MatSnackBar,public dialog: MatDialog,) { 
    this.GetHolidays();
  }

  ngOnInit() {
  }
  GetHolidays()
  {
    this._adminService.getHolidays().subscribe( data => {
      if(data['Status'] == true){
        this.holiodays = data['Data'];
        console.log(this.holiodays,data['Data'], 'test holi1')
        if(this.holiodays  == null || this.holiodays.length == 0){
          this.addFieldValue();
          console.log(this.holiodays, 'test holi2')
        }
      }
    },
    error =>{
      console.log(error);
    });
  }
 

  //public newAttribute: Holiday = new Holiday();

  addFieldValue() {
    let newObj = new Holiday();
    newObj.holidayFor='';
    newObj.strHolidayDate = '';
    this.holiodays.push(newObj);
    //this.newAttribute = new Holiday();
  }

  saveHolidays() {
    let isValidForm = true;
    this.holiodays.forEach( item => {
      if(item.holidayFor == null || item.holidayFor.trim() == "") {
        item.isholidayForValid=false;
        isValidForm = false
      }
      if(item.strHolidayDate == null || item.strHolidayDate == "" ||  item.strHolidayDate ==  'Invalid date') {
        item.isHolidayDateValid=false;
        isValidForm = false
      }
      else{
        item.strHolidayDate = new Date(item.strHolidayDate).toLocaleDateString();
      }
    })
    if(isValidForm){
      console.log(this.holiodays, 'date issue')
    this._adminService.saveHolidays(this.holiodays).subscribe(data =>{
      if (data['Status'] == true) {
        this.GetHolidays();
      }
    },error=>{
      console.log(error)
    });;
  }
  else{
    this._snackBar.open('Please enter all the mandatory fields','OK',{
      duration:3000,
      panelClass:'greenSnackBar'
    });
  }
  }
  cancelHolidays(){
    this.GetHolidays();
  }
  deleteFieldValue(index){
    let dialogRef = this.dialog.open(DeleteConfirmDailogComponent, {
      data: index,
      height: 'auto',
      width: '600px',
      autoFocus: false
    });
    dialogRef.afterClosed().subscribe(id => {
      console.log(index);
      let holidayId = this.holiodays[index].holidayId;
      if(holidayId!=0 && holidayId!= null  && holidayId!= undefined){
      this._adminService.deleteHoliday(holidayId).subscribe(data =>{
        if (data['Status'] == true) {
          this.GetHolidays();
        }
      },error=>{
        console.log(error)
      });
      }
      else{
        this._snackBar.open('Holiday deleted Successfully','OK',{
          duration:3000,
          panelClass:'greenSnackBar'
        });
      }
      this.holiodays.splice(index, 1);

    })
  }
  onlyAlphabets(event) {
    var k = event.charCode;
    return (((k > 64 && k < 91) || (k > 96 && k < 123) || (k == 32)));
  }
}
