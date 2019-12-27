import { Injectable } from '@angular/core';
import { HttpClient } from '../../../node_modules/@angular/common/http';
import { environment } from '../../environments/environment';
import { CommonMasterData } from './master-data/master-data.component';
import { AssetCategoryDataType } from './asset-categories/asset-categories.component';
import { ConfigQuestionDataType } from './master-data/configure-questionnaire/configure-questionnaire.component';
import { leaveReasonDataType } from './leave-reasons/leave-reasons.component';

@Injectable({
  providedIn: 'root'
})
export class MasterDataService {

  constructor(private _http: HttpClient) { }
 
  //////// Common master data /////////////////

  addCommonMasterData(commonMasterData: CommonMasterData) {
    return this._http.post(environment.apiUrl + 'api/upsert-common-master-data', commonMasterData)
  }

  getCommonMasterData() {
    return this._http.get(environment.apiUrl + 'api/get-common-master-data')
  }

  updateCommonMasterDataStatus(commonMasterDataId, status) {
    return this._http.post(environment.apiUrl + "api/update-common-master-data-status", { CommonMasterDataId: commonMasterDataId, IsActive: status });
  }

  deleteCommonMasterData(commonMasterDataId, CommonMasterDataCategory) {
    return this._http.post(environment.apiUrl + "api/delete-common-master-data", { CommonMasterDataId: commonMasterDataId,CommonMasterDataCategory:CommonMasterDataCategory })
  }
/////////////////////////////////////////////////


///////// Asset Categories ////////////////////
addAssetCategory(AssetCategory: AssetCategoryDataType) {
  return this._http.post(environment.apiUrl + "api/asset-category-upsert", AssetCategory);
}

getAssetCategories() {
  return this._http.get(environment.apiUrl + "api/get-asset-category");
}

updateAssetCategoryStatus(AssetCategoryId, status) {
  return this._http.post(environment.apiUrl + "api/update-asset-category-status", { AssetCategoryId: AssetCategoryId, IsActive: status });
}

deleteAssetCategory(AssetCategoryId) {
  return this._http.post(environment.apiUrl + "api/delete-asset-category", { AssetCategoryId: AssetCategoryId })
}
////////////////////////////


///////// Configure Questions ////////////////////
addConfigQuestion(ConfigQuestion: ConfigQuestionDataType) {
  return this._http.post(environment.apiUrl + "api/config-question-upsert", ConfigQuestion);
}

getConfigQuestions() {
  return this._http.get(environment.apiUrl + "api/get-config-questions");
}

deleteConfigQuestion(ConfigQuestionId) {
  return this._http.post(environment.apiUrl + "api/delete-config-question", { ConfigQuestionId: ConfigQuestionId })
}
////////////////////////////



///////// Leave Reasons ////////////////////
addLeaveReason(LeaveReason: leaveReasonDataType) {
  return this._http.post(environment.apiUrl + "api/leave-reason-upsert", LeaveReason);
}

getLeaveReasons() {
  return this._http.get(environment.apiUrl + "api/get-leave-reasons");
}

deleteLeaveReason(LeaveReasonId) {
  return this._http.post(environment.apiUrl + "api/delete-leave-reason", { LeaveReasonId: LeaveReasonId })
}
////////////////////////////


}
