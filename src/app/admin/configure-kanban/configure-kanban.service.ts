import { Injectable } from '@angular/core';
import { HttpClient } from '../../../../node_modules/@angular/common/http';
import { environment } from '../../../environments/environment';
import { ConfigureKanbanDataType } from './configure-kanban.component';

@Injectable({
  providedIn: 'root'
})
export class ConfigureKanbanService {

  constructor(private _http : HttpClient) { }

  /* Add Kanban Stage */
  AddKanbanStage(KanbanStage: ConfigureKanbanDataType){
    return this._http.post(environment.apiUrl+"api/upsert-kanban-stage", KanbanStage)
  }

  getKanbanStages() {
    return this._http.get(environment.apiUrl + "api/get-kanban-stages");
  }

  updateKanbanStageStatus(ConfigureKanbanId, status) {
    return this._http.post(environment.apiUrl + "api/update-kanban-stage-status", { ConfigureKanbanId: ConfigureKanbanId, IsActive: status });
  }

  deleteKanbanStage(ConfigureKanbanId) {
    return this._http.post(environment.apiUrl + "api/delete-kanban-stage", { ConfigureKanbanId: ConfigureKanbanId })
  }


}
