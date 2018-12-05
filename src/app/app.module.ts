import { BrowserModule, } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { MatToolbarModule,MatSidenavModule, MatButtonModule, MatDatepickerModule, MatFormFieldModule, MatNativeDateModule, MatInputModule, MatGridListModule, MatTableModule, MatCardModule, MatDividerModule} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ViewReportComponent } from './view-report/view-report.component';
import { CreateReportComponent } from './create-report/create-report.component';
import { PreviousReportComponent } from './previous-report/previous-report.component';
import { AuthendicationComponent } from './authendication/authendication.component';
import { DataServiceService } from 'src/app/data-service.service';
import { HttpClientModule } from '@angular/common/http';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { SidebarComponent } from './sidebar/sidebar.component';




@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    ViewReportComponent,
    CreateReportComponent,
    PreviousReportComponent,
    AuthendicationComponent,
    SidebarComponent,

  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    MatNativeDateModule,
    MatGridListModule,
    MatTableModule,
    MatCardModule,
    MatDividerModule,
    DragDropModule,
    MatSidenavModule

    
  ],
  providers: [DataServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
