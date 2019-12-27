import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ManagegridcoldialogComponent } from './managegridcoldialog/managegridcoldialog.component';
import { AddAssetDialogComponent, AssetValue, Asset } from './add-asset-dialog/add-asset-dialog.component';
import { AdminService } from '../admin.service';
import { DeleteConfirmDailogComponent } from 'src/app/shared/delete-confirm-dailog/delete-confirm-dailog.component';
import { FormGroup, FormBuilder } from '@angular/forms';
import { promise } from 'selenium-webdriver';
import { ManageService } from 'src/app/manage/manage.service';
import { GlobalMethods, Permissions } from 'src/app/shared/GlobalMethods';
import { DownloadExcelService } from 'src/app/download-excel.service';
import * as XLSX from 'xlsx';
import { DatePipe } from '@angular/common';
import { parse } from 'url';
import { AssetMasterDataServiceService } from './asset-master-data-service.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-manage-assets',
  templateUrl: './manage-assets.component.html',
  styleUrls: ['./manage-assets.component.scss'],
  providers: [DatePipe]
})
export class ManageAssetsComponent implements OnInit {
  isExcelRecordsStatusDiv:boolean = false;
  validRecords: any[] = [];
  inValidRecords: any[] = [];
  validDateFormate: string = 'yyyy-mm-dd';
  allowedFileExtensions: Array<string> = ['xl', 'xls', 'xlsx', 'csv'];
  file: File;
  excelData = [];
  permissions: Permissions;
  session: any;
  gridColumns = [];
  exAssests: any[] = [];
  AllAssets: any[] = [];
  AllAssetsCategories: any[] = [];
  AllAssetsMakes: any[] = [];
  AllAssetsModels: any[] = [];
  filterToggle: boolean = false
  filterForm: FormGroup;
  constructor(public dialog: MatDialog, private _globalMethods: GlobalMethods,
    private manageService: ManageService, private _adminService: AdminService,
    private _fb: FormBuilder, public _downloadExcelService: DownloadExcelService,
    private datePipe: DatePipe, private _assetMasterDataService: AssetMasterDataServiceService,
    private router: Router,private _assetMasterData: AssetMasterDataServiceService) {


    //Add asser filter Form
    this.filterForm = this._fb.group({
      'assetCategoryId': [null],
      'make': [null],
      'model': [null],
      'fromDate': [null],
      'toDate': [null],
      'keyWord': [null]
    });
    this.session = JSON.parse(localStorage.getItem("userloginsession"));
  }

  status1: boolean = true;
  status2: boolean = true;
  status3: boolean = true;
  dowloadBulkUploadAssetTemplate() {
    this.excelData.push({ 'Asset Category': "" })
    this.excelData.push({ 'Asset Name': "" })
    this.excelData.push({ 'Make': "" })
    this.excelData.push({ 'Model': "" })
    this.excelData.push({ 'Date Purchased': "" })
    this.excelData.push({ 'Dealer': "" })
    this.excelData.push({ 'Purchase Price': "" })
    this.excelData.push({ 'Serial Number': "" })
    this.excelData.push({ 'Description': "" })
    this._downloadExcelService.exportAsExcelFile(this.excelData, 'asset_upload_template')
  }
  arrayBuffer: any;
  submittedExcelfile: any[];
  //Function to convert data from Excel format to Object format
  ConvertExcelToArray() {
    this.isExcelRecordsStatusDiv=true;
    var finalFile = []
    let fileReader = new FileReader();
    fileReader.onload = (e) => {
      this.arrayBuffer = fileReader.result;
      var data = new Uint8Array(this.arrayBuffer);
      var arr = new Array();
      for (var i = 0; i != data.length; ++i) {
        arr[i] = String.fromCharCode(data[i]);
      }
      var bstr = arr.join("");
      var workbook = XLSX.read(bstr, { type: "binary" });
      var first_sheet_name = workbook.SheetNames[0];
      var worksheet = workbook.Sheets[first_sheet_name];
      // console.log(XLSX.utils.sheet_to_json(worksheet, { raw: true }));
      this.submittedExcelfile = XLSX.utils.sheet_to_json(worksheet, { raw: true })
      //console.log(this.submittedExcelfile, 'submit')
      this.submittedExcelfile.forEach(x => {
        console.log(x, 'excelrow')
        if(x["Asset Category"] != undefined && x["Asset Name"] != undefined && x["Make"] != undefined  && x["Model"] != undefined)
        {
        //if (this.checkIsAllMendatoryFields(x)) {
          //let assetCat = this.AllAssetsCategories.filter(y => y.vc_asset_category == x['Asset Category']);
          let isNumber = !isNaN(x['Purchase Price']);
          // const parsedDate: Date = new Date(x['Date Purchased']);
          // parsedDate.setHours(parsedDate.getHours())
          // let value = df(parsedDate, "yyyy-mm-dd");
          // console.log(value,'dateissue')
          let dataValid = this.dateFormatChecking(x['Date Purchased']);
          console.log(isNumber,dataValid, 'isNumber and dataValid');
          if (this.validateAsserCategory(x) && this.validateAsserName(x['Asset Name']) 
          && this.validateAsserName(x['Make']) && this.validateAsserName(x['Model'])
           && this.validateAsserName(x['Dealer']) && this.validateAsserName(x['Serial Number']) 
           && this.validateDescription(x['Description'])   
          && isNumber && ( dataValid != null &&  dataValid != 'Invalid Date')) {
            let assetCat = this.AllAssetsCategories.filter(y => y.vc_asset_category == x['Asset Category']);
            this.validRecords.push({
              assetId: 0, CategoryId: parseInt(assetCat[0].int_asset_category_id),
              Category: assetCat[0].vc_asset_category, Number: '', Name: x['Asset Name'],
              Make: x['Make'], Model: x['Model'], strPurchaseDate: dataValid, Dealer: x['Dealer'],
              SerialNumber: x['Serial Number'], assetDescription: x['Description'], PurchasePrice: x['Purchase Price'],
              Message:'Yes'
            })
          }
          else {
            this.inValidRecords.push({
              assetId: 0,
              Category: x['Asset Category'], Number: '', Name: x['Asset Name'],
              Make: x['Make'], Model: x['Model'], strPurchaseDate: x['Date Purchased'], Dealer: x['Dealer'],
              SerialNumber: x['Serial Number'], assetDescription: x['Description'], PurchasePrice: x['Purchase Price'],
              Message:'No'
            })
          }
        }
        // }
        // else {

        // }
      }
      )
      //console.log(finalFile, 'Final Object');
    }

    // console.log(this.validRecords, 'valid record')
    // console.log(this.inValidRecords, 'invalid record')
    fileReader.readAsArrayBuffer(this.file);



    
    
    //this.router.navigateByUrl('/IBW/admin/master-data/excel-records');

  }

  validateAsserCategory(row): boolean 
  {
    console.log(row, 'validateAsserCategory')
    if (row['Asset Category'] != null && row['Asset Category'] != "" && row['Asset Category'] != undefined ){
      let assetCat = this.AllAssetsCategories.filter(y => y.vc_asset_category == row['Asset Category']);
      console.log(assetCat, 'assetCat+validateAsserCategory')
      if (assetCat != null && assetCat.length > 0){
        return true;
      }
      else{
        return false;
      }
    }
    else {
      console.log(false, 'validateAsserCategory')
      return false;
    }
    
  }
  validateAsserName(item:string): boolean 
  {
    console.log(item, 'validateAsserName')
    if (item!= null && item != "" && item != undefined ){
      
      if (item.toString().length < 10){
        return true;
      }
      else{
        return false;
      }
    }
    else {
      return false;
    }
    
  }
  validateDescription(item:string): boolean 
  {
    console.log(item, 'validateDescription')
    if (item != null && item != "" && item != undefined ){
      
      if (item.length < 300){
        return true;
      }
      else{
        return false;
      }
    }
    else {
      return false;
    }
    
  }
 
  checkIsAllMendatoryFields(row): boolean {
    if (row['Asset Category'] != null && row['Asset Category'] != "" && row['Asset Category'] != undefined &&
      row['Asset Name'] != null && row['Asset Name'] != "" && row['Asset Name'] != undefined &&
      row['Make'] != null && row['Make'] != "" && row['Make'] != undefined &&
      row['Model'] != null && row['Model'] != "" && row['Model'] != undefined &&
      row['Date Purchased'] != null && row['Date Purchased'] != "" && row['Date Purchased'] != undefined &&
      row['Dealer'] != null && row['Dealer'] != "" && row['Dealer'] != undefined &&
      row['Purchase Price'] != null && row['Purchase Price'] != "" && row['Purchase Price'] != undefined &&
      row['Serial Number'] != null && row['Serial Number'] != "" && row['Serial Number'] != undefined &&
      row['Description'] != null && row['Description'] != "" && row['Description'] != undefined) {

      return true;
    }
    else {
      return false;
    }

  }
  public dateFormatChecking(date) {

    var dateOperand;
    if (date != "" && date != null && date != undefined) {

      if (new Date(date).toString() == "Invalid Date") {
        dateOperand = (new Date(date)).toString();
      } else {
        dateOperand = new Date(date).getTime() + Math.abs(new Date(date).getTimezoneOffset() * 60000);
      }
    } else {
      dateOperand = null;
    }

    if (dateOperand != "Invalid Date" && dateOperand != null && dateOperand != undefined) {
      dateOperand = new Date(dateOperand)
      console.log(dateOperand)
      dateOperand = dateOperand.toISOString().slice(0, 10);
      console.log(dateOperand)
    }
    return dateOperand;
  }
  //For File Upload
  handleFileSelect(event) {
    //moment(x['Date Purchased'], this.validDateFormate, true).isValid();
    //var target: HTMLInputElement = event.target as HTMLInputElement;
    const file = event.target.files[0];
    let fileExtension: string = file.name.substr(file.name.lastIndexOf('.') + 1)
    //console.log(this.allowedFileExtensions.some(x => x.toLowerCase() === fileExtension.toLowerCase()),'filetype')
    if (this.allowedFileExtensions.some(x => x.toLowerCase() === fileExtension.toLowerCase())) {
      var target: HTMLInputElement = event.target as HTMLInputElement;
      this.file = target.files[0];
      this.ConvertExcelToArray();

      // this._assetMasterDataService.changeData({Valid:this.validRecords,Invalid:this.inValidRecords})

      // this.router.navigate(['/IBW/admin/master-data/excel-records']);

    }
    else {

    }
    // console.log('size', file.size);
    // console.log('type', file.name.substr(file.name.lastIndexOf('.') + 1));
    // console.log('type', file.name);
  }
  excelRecordsCancel()
  {
    this.isExcelRecordsStatusDiv=false;
    this.validRecords = [];
    this.inValidRecords = [];
  }
  excelRecordsProceed()
  {
    this.manageService.bulkInsertAssets(this.validRecords).subscribe(data =>{
      if(data['Status'] == true) {
        this.validRecords = [];
        this.inValidRecords = [];
        this.isExcelRecordsStatusDiv=false;
        this.GetAssets();
      }
    });
    
  }
  openAddAssetDialog(event) {
    console.log(event);
    let model: Asset = new Asset();
    model.categoryList = this.AllAssetsCategories;
    model.AssetValue = new AssetValue();
    console.log('this.AllAssetsCategories');
    if (event != null) {
      model.AssetValue = event;
    }
    let dialogRef = this.dialog.open(AddAssetDialogComponent, {
      data: model,
      height: 'auto',
      width: '600px',
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        if (!result.isEdit) {

        } else {
          //implement edit here
        }
      }
      this.GetAssets();
    });
  }
  scrollAseets(side) {
    var ele = document.getElementById('assetsgrid');
    if (side == 'left')
      ele.scrollLeft += 190;
    else
      ele.scrollLeft -= 190;
  }
  public opengridColDialog(lead) {
    let dialogRef = this.dialog.open(ManagegridcoldialogComponent, {
      data: lead,
      height: 'auto',
      width: '400px',
    });

    dialogRef.afterClosed().subscribe(lead => {
      this.getGridColumns();
    });
  }

  popoverTitle = 'Are you sure?';
  popoverMessage = 'This action cannot be undone';

  message: string;


  ngOnInit() {
    this.GetAssets();
    this.getGridColumns();
    this.permissions = this._globalMethods.checkPermissions('Manage master data', 'Admin');
  }
  getGridColumns() {
    this.manageService.GetGridColumns(this.session['UserDetails'].int_user_id, 'Manage_master_data').subscribe(data => {
      this.gridColumns = data['Data'];
    }
    );

  }

  public GetAssets() {
    this._adminService.getAssets().subscribe(data => {
      console.log(data);
      let asset = data['Data']['Asset'];
      let categories = data['Data']['Categories'];
      //Assigning assets
      this.AllAssets = asset;
      this.exAssests = asset;
      this.AllAssetsCategories = categories;
      if (asset != null) {

        this.AllAssetsMakes = asset.map(x => x.Make);
        this.AllAssetsModels = asset.map(x => x.Model);
        console.log(this.AllAssetsMakes, this.AllAssetsModels, 'makemodel');
      }

    },
      error => {
        console.log('get assets error block');
        console.log(error)
      })

  };

  //Status Update
  changeStatus(values) {
    values.bt_status = !values.bt_status;
    // values.modifiedBy = sessionUser.user_id;
    this._adminService.assetStatusChange(values).subscribe(
      data => {
        if (data['Status'] == true) {
          this.GetAssets();
          console.log(data)
        }
      },
      error => {
        console.log(error);
        if (error.status == 401) {

        }
      }
    )
  }

  deleteAsset(value: number) {
    let dialogRef = this.dialog.open(DeleteConfirmDailogComponent, {
      data: value,
      height: 'auto',
      width: '600px',
      autoFocus: false
    });
    dialogRef.afterClosed().subscribe(id => {
      if (id != null) {
        //var values = [{ userId: id }]
        console.log(id, 'delete asset');
        this._adminService.deleteAsset(id).subscribe(
          data => {
            console.log(data);
            if (data['Status'] == true) {
              this.GetAssets();
            }
          }
        )
      };

    })
  }

  //For Filter in tables
  filterBy(formValues) {
    console.log(formValues, 'Filter');

    if (formValues.assetCategoryId != null || formValues.make != null ||
      formValues.model != null || formValues.fromDate != null || formValues.toDate != null
      || formValues.keyWord != null) {
      // this.GetAssets()
      // console.log(this.AllAssets, 'assettest')
      let assets = this.exAssests;
      if (assets != null) {
        let filteredAssets = assets.filter(x =>
          (formValues.assetCategoryId == null || x.CategoryId == formValues.assetCategoryId) &&
          (formValues.make == null || x.Make == formValues.make) &&
          (formValues.model == null || x.Model == formValues.model) &&
          (formValues.fromDate == null || new Date(x.strPurchaseDate) >= new Date(formValues.fromDate)) &&
          (formValues.toDate == null || new Date(x.strPurchaseDate) <= new Date(formValues.toDate)) &&
          (formValues.keyWord == null || JSON.stringify(x).toLowerCase().includes(formValues.keyWord.toLowerCase()))
        );

        // let filteredAssets = assets.filter(x =>
        //   new Date(x.strPurchaseDate) >= new Date(formValues.fromDate)
        // );
        this.AllAssets = filteredAssets;
      }


    }
    else {
      this.AllAssets = this.exAssests;
    }
    console.log('testassetCategoryId')
  }
  resetFilter() {
    this.GetAssets();
    this.filterForm.reset();

  }

}
