import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatSnackBar } from '@angular/material';
import { AddMunicipalitiesDialogComponent } from './add-municipalities-dialog/add-municipalities-dialog.component';
import { MasterDataService } from '../MasterDataService/master-data.service';
import { DeleteConfirmDailogComponent } from 'src/app/shared/delete-confirm-dailog/delete-confirm-dailog.component';
import { DownloadExcelService } from 'src/app/download-excel.service';
import * as XLSX from 'xlsx';
import { ModalDirective } from 'ngx-bootstrap';

@Component({
  selector: 'app-municipalities',
  templateUrl: './municipalities.component.html',
  styleUrls: ['./municipalities.component.scss']
})
export class MunicipalitiesComponent implements OnInit {
  municipalities = [];
  sessionDetails: any[];
  excelData = [];
  submittedExcelfile: any[];
  file: File;
  errorRecord = []
  @ViewChild('errorRecordsModal') public errorRecordsModal: ModalDirective;
  @ViewChild('uploadModal') public uploadModal: ModalDirective;
  currentInput: any;
  isNoProceed: boolean = true;

  constructor(public dialog: MatDialog, private _masterservice: MasterDataService,
    public _downloadExcelService: DownloadExcelService, public snackbar: MatSnackBar) { }

    uploadModalToggle(value){
      if(value ==null){
        this.uploadModal.hide();
        this.submittedExcelfile = [];
        this.file = null;
        this.errorRecord = [];
        this.currentInput = null;
      }
      else{
        this.uploadModal.show();
      }
    }

    SubmitUpload(){
      if(this.currentInput != null || this.currentInput != undefined){
        this.uploadModal.hide();
        this.Upload();
      }
      else{
        this.snackbar.open('Invalid File', 'OK',{
          panelClass:'redSnackBar'
        })
      }
    }

  public OpenAddMunicipalityDialog(values) {
    let dialogRef = this.dialog.open(AddMunicipalitiesDialogComponent, {
      data: values,
      height: 'auto',
      width: '600px',
    });
    dialogRef.afterClosed().subscribe(oppurtunity => {
      this.getAllMunicipalities();
    });
  }

  ngOnInit() {
    this.sessionDetails = JSON.parse(localStorage.getItem('userloginsession'));
    this.getAllMunicipalities();
  }

  public getAllMunicipalities() {
    this._masterservice.getAllMunicipalities().subscribe(
      data => {
        this.municipalities = data['Data'];
        console.log(this.municipalities, 'sajks');
      },
      error => {
        console.log(error);
      }
    )
  }

  exportAsExcel() {
    this.excelData.push({ 'Municipality Name': "" })
    console.log(this.excelData)
    this._downloadExcelService.exportAsExcelFile(this.excelData, 'Municipality_Template')
  }

  arrayBuffer: any;

  //Function to convert data from Excel format to Object format
  Upload() {
    this.errorRecord = [];
    this.submittedExcelfile =[];
    let fileReader = new FileReader();
    fileReader.onload = (e) => {
      this.arrayBuffer = fileReader.result;
      var data = new Uint8Array(this.arrayBuffer);
      var arr = new Array();
      for (var i = 0; i != data.length; ++i) arr[i] = String.fromCharCode(data[i]);
      var bstr = arr.join("");
      var workbook = XLSX.read(bstr, { type: "binary" });
      var first_sheet_name = workbook.SheetNames[0];
      var worksheet = workbook.Sheets[first_sheet_name];
      // console.log(XLSX.utils.sheet_to_json(worksheet, { raw: true }));
      this.submittedExcelfile = XLSX.utils.sheet_to_json(worksheet, { raw: true })
      this.submittedExcelfile.filter(x => {
        this.municipalities.forEach(y => {
          if (y['municipalityName'] == x['Municipality Name']) {
            this.errorRecord.push({ 'MunicipalityName': x['Municipality Name'], errorStatus: true, message: 'Municipality Name Already Exists' });
          }
          if(x['Municipality Name'] === "" || x['Municipality Name'] === null){
            this.errorRecord.push({ 'MunicipalityName': x['Municipality Name'], errorStatus: true, message: 'Empty Spaces' });
            
          }
        })
      }
      )
      console.log(this.errorRecord, 'Final Object')

      for (var i = this.submittedExcelfile.length - 1; i >= 0; i--) {
        if(this.submittedExcelfile[i]['Municipality Name'] != undefined){
          for (var j = 0; j < this.municipalities.length; j++) {
            if (this.submittedExcelfile[i] && (this.submittedExcelfile[i]['Municipality Name'] === this.municipalities[j]['municipalityName']) && (this.submittedExcelfile[i]['Municipality Name'] === "") && (this.submittedExcelfile[i]['Municipality Name'] === null) ) {
              this.submittedExcelfile.splice(i, 1);
            }
          }
        }
        else{
          this.snackbar.open('Invalid File', 'OK', {
            panelClass: 'redSnackBar'
          })
          this.submittedExcelfile = [];
        }
      }
      if (this.errorRecord.length > 0) {
        this.errorRecordsModal.show();
      }
      else if(this.errorRecord.length == 0 && this.submittedExcelfile.length > 0){
        this.submitBulkUpload();
      }
      if(this.submittedExcelfile.length > 0){
        this.isNoProceed = false;
      }
      console.log(this.submittedExcelfile, 'FOIme Excel')
      console.log(this.errorRecord, 'Final Object')
    }
    fileReader.readAsArrayBuffer(this.file);
  }

  submitBulkUpload(){
    var submittedExcelfile = []
    this.submittedExcelfile.forEach(x=>{
      submittedExcelfile.push(x['Municipality Name']);
    })
    var values = [{'municipalitiesList': submittedExcelfile, 
    'createdBy':this.sessionDetails['UserDetails']['int_user_id'] , 
    'modifiedBy':this.sessionDetails['UserDetails']['int_user_id'] 
  }];
    console.log(values)
    this._masterservice.municipalityBulkUpload(values[0]).subscribe(
      data=>{
        console.log(data);
        if(data['Status'] == true){
          this.errorRecordsModal.hide();
          this.getAllMunicipalities();
          this.submittedExcelfile= [];
          this.errorRecord = [];
          this.file = null;
        }
        this.currentInput = null;
      },
      error=>{
        console.log(error);
      }
    )
  }


  //For File Upload
  handleFileSelect(event) {
    console.log(this.currentInput);
    console.log(event)
    var target: HTMLInputElement = event.target as HTMLInputElement;
    for (var i = 0; i < target.files.length; i++) {
      this.file = target.files[i];
    }
    // this.fileScope = event.target.files[0];
    // this.Upload()
    console.log(this.file.name)
  }

  errorModalToggle(value) {
    if (value == null) {
      this.errorRecordsModal.hide();
    }
    else {
      this.errorRecordsModal.show();
    }
  }


  changeStatus(values) {
    values.status = !values.status;
    this._masterservice.upsertMunicipality(values).subscribe(
      data => {
        console.log(data);
        this.getAllMunicipalities();
      },
      error => {
        console.log(error);
      }
    )
  }

  deleteMunicipality(value: number) {
    let dialogRef = this.dialog.open(DeleteConfirmDailogComponent, {
      data: value,
      height: 'auto',
      width: '600px',
      autoFocus: false
    });
    dialogRef.afterClosed().subscribe(id => {
      if (id != null) {
        var values = [{ municipalityId: id, modifiedBy: this.sessionDetails['UserDetails']['int_user_id'] }]
        this._masterservice.deleteMunicipality(values[0]).subscribe(
          data => {
            console.log(data);
            if (data['Status'] == true) {
              this.getAllMunicipalities();
            }
          }
        )
      };
    })
  }

}
