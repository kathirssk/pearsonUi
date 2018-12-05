import { Component, OnInit } from '@angular/core';
import { UserSession } from 'src/app/model/user-session';
import { DataServiceService } from 'src/app/data-service.service';
import { FormGroup, FormControl } from '@angular/forms';
import { _ } from 'underscore';
import { forEach } from '@angular/router/src/utils/collection';
@Component({
  selector: 'app-view-report',
  templateUrl: './view-report.component.html',
  styleUrls: ['./view-report.component.css']
})
export class ViewReportComponent implements OnInit {
  userSession:UserSession;
   dataSource;
   form;
   columnsToDisplay = ['loginDate', 'teacherLogin','studentLogin','adminLogin','platformLoginTotal','teacherLoginpsn','studentLoginpsn','adminLoginpsn','platformLoginTotalpsn' ];
  constructor(private dataService:DataServiceService) {
    this.userSession=new UserSession();
    this.form = new FormGroup({
      startDateInput: new FormControl(''),
      endDateInput: new FormControl(''),
    });
   }

  ngOnInit() {
    this.defaultReport();
  }
  public defaultReport(){
    console.log(this.form);
  //  this.userSession.date.startDate=this.form.startDateInput;
  //  this.userSession.date.endDate=this.form.endDateInput;
   
   this.dataService.getAll(UserSession).subscribe((data)=>{
   
     this.dataSource=data;
     
    });
   
    
  }


  public dateWiseReport(){
    

  }
   
    
}
