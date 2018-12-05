import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewReportComponent } from 'src/app/view-report/view-report.component';
import { CreateReportComponent } from 'src/app/create-report/create-report.component';
import { PreviousReportComponent } from 'src/app/previous-report/previous-report.component';
import { AuthendicationComponent } from 'src/app/authendication/authendication.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component:AuthendicationComponent},
  { path: 'viewReport', component:ViewReportComponent  },
  { path: 'createReport', component:CreateReportComponent  },
  { path: 'previousReport', component:PreviousReportComponent  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [ViewReportComponent,CreateReportComponent,PreviousReportComponent]