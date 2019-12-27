import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AddquestiondailogComponent } from './addquestiondailog/addquestiondailog.component';
import { DeleteConfirmDailogComponent } from '../../../shared/delete-confirm-dailog/delete-confirm-dailog.component';
import { MasterDataService } from '../../master-data.service';

@Component({
  selector: 'app-configure-questionnaire',
  templateUrl: './configure-questionnaire.component.html',
  styleUrls: ['./configure-questionnaire.component.scss']
})
export class ConfigureQuestionnaireComponent implements OnInit {
  surveyPurposes = [];

  constructor(private dialog: MatDialog, private _masterDataService: MasterDataService) { 

    this.getConfigQuestions()
  }

  ngOnInit() {
  }
  configQuestionsData = []

  //Function to open configQuestion modal in add and update modes
  public OpenAddconfigQuestionDialog(configQuestion) {

    this._masterDataService.getCommonMasterData().subscribe(data => {

      if (data['Data'] != null) {

        if (data['Data'].length > 0) {
          this.surveyPurposes = data['Data'].filter(x => x.CommonMasterDataCategory == "Survey Purpose");
        }
      }

      let dialogRef = this.dialog.open(AddquestiondailogComponent, {
        data: { configQuestion: configQuestion, surveyPurposes: this.surveyPurposes },
        height: 'auto',
        width: '600px',
      });

      dialogRef.afterClosed().subscribe(configQuestion => {
        if (configQuestion) {
          this.addConfigQuestion(configQuestion);
          console.log(configQuestion, 'Add configQuestion data')
        }
      });
    })
  }


  //Function to add or update ConfigQuestion
  public addConfigQuestion(configQuestion: ConfigQuestionDataType) {
    this._masterDataService.addConfigQuestion(configQuestion).subscribe(data => {
      this.getConfigQuestions();
      console.log(data, "configQuestions data");
    },
      error => {
        console.log(error);
      }
    );

  }

  //Function to get all the ConfigQuestions
  public getConfigQuestions() {
    this._masterDataService.getConfigQuestions().subscribe(data => {
      this.configQuestionsData = [];
      if (data['Data'] != undefined || data['Data'].length > 0) {
        this.configQuestionsData = data['Data'];
      }


      console.log(data['Data'], 'Data')
    });
  }

  //Function to delete specific config question
  deleteConfigQuestion(ConfigQuestionId) {

    let dialogRef = this.dialog.open(DeleteConfirmDailogComponent, {
      data: ConfigQuestionId,
      height: 'auto',
      width: '600px',
      autoFocus: false
    });
    dialogRef.afterClosed().subscribe(id => {
      if (id != null) {
        this._masterDataService.deleteConfigQuestion(id).subscribe(
          data => {
            this.getConfigQuestions();
          }
        )
      }
    });
  }
}


export class ConfigQuestionDataType {
  ConfigQuestionId: number;
  SurveyPurposeId: number;
  ConfigQuestion: string;
  IsActive: boolean;
  UserId: number;
}