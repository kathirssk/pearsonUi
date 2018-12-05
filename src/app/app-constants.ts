export class Constants{
    backendUrl:string =" http://172.24.150.53:3000/route";
   
    fetchFields:string = this.backendUrl +"/usersessioncontroller/fetchFields";
    reportUrl = this.backendUrl +"/usersessioncontroller/tableReport";

    selectedFieldsUrl= this.backendUrl+"/usersessioncontroller/customFields";
}