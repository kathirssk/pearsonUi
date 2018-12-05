import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Constants } from 'src/app/app-constants';
import { UserSession } from 'src/app/model/user-session';
import { SelectedFields } from 'src/app/model/selected-fields';

var constant:Constants;
var fields:any;
var response:any;
@Injectable({
  providedIn: 'root'
})
export class DataServiceService {
  
  constructor(private http:HttpClient) {
      constant=new Constants();
     
   }


  public defaultReport(userSession){
    
      console.log(constant.reportUrl);
      userSession.organizationId=[
        "8a97b1ce6397de140164403619b52cad"
        ];
        userSession.userRole=[
            "s"    
        ];
      console.log(userSession.userRole);
        this.http.get(constant.reportUrl).toPromise().then(data=>{
          console.log("dkjdkj" + data)
           response=data;
       })
  
       return response;
      
    
    }

    public getAll(userSession){
      console.log("test" +constant.reportUrl);    
       return this.http.get(constant.reportUrl,userSession);
    }

    public getFields(userId){
      return this.http.post(constant.fetchFields,userId)
    }

    public customFieldsReport(fields){
      console.log(fields);
      return this.http.post(constant.selectedFieldsUrl,fields);
    }
    
}
