import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manage-return-assets-approved',
  templateUrl: './manage-return-assets-approved.component.html',
  styleUrls: ['./manage-return-assets-approved.component.scss']
})
export class ManageReturnAssetsApprovedComponent implements OnInit {

  constructor() { }
  Assets=[
    {id:1,issueDate:"2019-06-20",dueDate:"2019-06-22",returnedDate:"2019-06-22",remarks:'Expense for journey',isSelected:false,assignedTo:'Jhon Cena',returnedBy:'Jhon Cena',validatedby:'Chris Morris',amount:50,messages:1,isPending:false,isApproved:true,isDeclined:false},
    {id:2,issueDate:"2019-06-25",dueDate:"2019-06-26",returnedDate:"2019-06-26",remarks:'Vehicle diesel',isSelected:false,assignedTo:'Robert Smith',returnedBy:'David Smith',validatedby:'Maria Rodriguez',amount:34,messages:2,isPending:false,isApproved:true,isDeclined:false},
    {id:3,issueDate:"2019-06-10",dueDate:"2019-06-12",returnedDate:"2019-06-12",remarks:'Miscellaneous',isSelected:false,assignedTo:'Maria Garcia',returnedBy:'Maria Garcia',validatedby:'Maria Hernandez',amount:15,messages:3,isPending:false,isApproved:true,isDeclined:false},
    {id:4,issueDate:"2019-06-12",dueDate:"2019-06-14",returnedDate:"2019-06-14",remarks:'Tools purchased',isSelected:false,assignedTo:'Maria Martinez',returnedBy:'James Johnson',messages:2,isPending:false,validatedby:'Chris Morris',amount:55,isApproved:true,isDeclined:false},
  ] 
  ngOnInit() {
  }

}
