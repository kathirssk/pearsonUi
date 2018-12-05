import { Component, OnInit } from '@angular/core';
import { DataServiceService } from 'src/app/data-service.service';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import { forEach } from '@angular/router/src/utils/collection';
import { SelectedFields } from 'src/app/model/selected-fields';

var fieldList:any[];
@Component({
  selector: 'app-create-report',
  templateUrl: './create-report.component.html',
  styleUrls: ['./create-report.component.css']
})
export class CreateReportComponent implements OnInit {

  fields:any=[];
  userId:string;
  selected: any = [];
  i: any = [];
  selectedFields:SelectedFields;
  dataSource:any;
  columnToDisplay:any[];
   columnsToDisplay = ['loginDate','studentLogin', 'teacherLogin','adminLogin','platformLoginTotal' ];
  constructor(private dataService:DataServiceService  ) { 
    this.selectedFields=new SelectedFields();
  }
 
  ngOnInit() {
    this.getFields();
  }
  public getFields(){
  
    this.userId=null;
    this.dataService.getFields(this.userId).subscribe((dataList)=>{
      this.fields=dataList;
      
    });
  }
  


  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
    }
    this.columnToDisplay=this.selected;
  }

  generateReport(){
    console.log(this.selected);
    for(let sel of this.selected){
     
    }
    this.dataService.customFieldsReport(this.selected).subscribe((response)=>{
      this.dataSource=response;
      console.log(this.dataSource);
    });
    
  }

}
