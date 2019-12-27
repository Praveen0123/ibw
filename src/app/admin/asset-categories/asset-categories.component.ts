import { Component, OnInit } from '@angular/core';
import { MatDialog, MatSnackBar } from '@angular/material';
import { AddAssetCategoryDialogComponent } from './add-asset-category-dialog/add-asset-category-dialog.component';
import { DeleteConfirmDailogComponent } from '../../shared/delete-confirm-dailog/delete-confirm-dailog.component';
import { MasterDataService } from '../master-data.service';

@Component({
    selector: 'app-asset-categories',
    templateUrl: './asset-categories.component.html',
    styleUrls: ['./asset-categories.component.scss']
})
export class AssetCategoriesComponent implements OnInit {
    AssetCategoryData = [];

    constructor(public dialog: MatDialog, private _masterDataService: MasterDataService,
        private _snackBar: MatSnackBar) { }

    ngOnInit() {
        this.getAssetCategories()
    }

    public OpenAssetCategoryModal(assetCategory) {
        let dialogRef = this.dialog.open(AddAssetCategoryDialogComponent, {
            height: 'auto',
            width: '600px',
            data: assetCategory
        });
        dialogRef.afterClosed().subscribe(data => {
            console.log(data, 'assetCategory data')
            if (data.AssetCategoryName != '' && data.AssetCategoryPrefix != '') {
                this.addAssetCategory(data)
            }
            else {
                this._snackBar.open('Please enter valid input', '', { duration: 3000, panelClass: 'redSnackBar' })
            }

        });
    }


    public addAssetCategory(AssetCategory: AssetCategoryDataType) {
        this._masterDataService.addAssetCategory(AssetCategory).subscribe(data => {

            console.log(data, "AssetCategoryData");
            this.getAssetCategories()
        },
            error => {
                console.log(error);
            }
        );
    }

    public getAssetCategories() {
        this._masterDataService.getAssetCategories().subscribe(data => {
            this.AssetCategoryData = []
            console.log(this.AssetCategoryData, 'this.AssetCategoryData at get call')
            if (data['Data'] != null) {

                if (data['Data'].length > 0) {
                    this.AssetCategoryData = data['Data']
                }
            }
            console.log(this.AssetCategoryData)
        });
    }

    changeStatus(AssetCategoryId) {
        let status = this.AssetCategoryData.filter(x => x.AssetCategoryId == AssetCategoryId)[0]["IsActive"];
        console.log(status, 'staus value')
        status = !status
        this._masterDataService.updateAssetCategoryStatus(AssetCategoryId, status).subscribe(
            data => {
                this.getAssetCategories();
            }
        )
    }


    deleteAssetCategory(AssetCategoryId: number) {
        let DeleteDialogRef = this.dialog.open(DeleteConfirmDailogComponent, {
            data: AssetCategoryId,
            height: 'auto',
            width: '600px',
            autoFocus: false
        });
        DeleteDialogRef.afterClosed().subscribe(id => {
            if (id != null) {

                this._masterDataService.deleteAssetCategory(id).subscribe(
                    data => {
                        this.getAssetCategories();
                    }
                )
            }
        });

    }
    //Function to filter data
    StatusFilter(value) {

        //here values are static 
        //0 for all
        //1 for Active
        //2 for Inactive

        if (value == 1) {
            this._masterDataService.getAssetCategories().subscribe(data => {
                this.AssetCategoryData = data['Data'];
                this.AssetCategoryData = this.AssetCategoryData.filter(x => x.IsActive == true)
                console.log(this.AssetCategoryData, 'true')
            });
        }
        else if (value == 2) {
            this._masterDataService.getAssetCategories().subscribe(data => {
                this.AssetCategoryData = data['Data'];
                this.AssetCategoryData = this.AssetCategoryData.filter(x => x.IsActive == false)
                console.log(this.AssetCategoryData, 'false')
            })
        }
        else {
            this.getAssetCategories()
        }
    }
}


export class AssetCategoryDataType {
    AssetCategoryId: number;
    AssetCategoryName: string;
    AssetCategoryPrefix: string;
    IsActive: boolean;
    UserId: number
}