import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NewRequestComponent } from './new-request/new-request.component';
import { FooterComponent } from './footer/footer.component';
import { FormWizardModule } from 'angular2-wizard';
import { SourceComponent } from './new-request/source/source.component';
import { DestinationComponent } from './new-request/destination/destination.component';
import { PortComponent } from './new-request/port/port.component';
import { ProjectComponent } from './new-request/project/project.component';
import { SummaryComponent } from './new-request/summary/summary.component';
import { AppRoutingModule } from './app-routing-module';
import { ListRequestsComponent } from './list-requests/list-requests.component';
import { AboutComponent } from './about/about.component';
import { SideNavbarComponent } from './side-navbar/side-navbar.component';
import { SourceListComponent } from './new-request/source/source-list/source-list.component';

import { SourceItemComponent } from './new-request/source/source-list/source-item/source-item.component';
import { SourceService } from './data/source.service';
import { DestinationService } from './data/destination.service';
import { ToastrService } from './data/toastr.service';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    NewRequestComponent,
    FooterComponent,
    SourceComponent,
    DestinationComponent,
    PortComponent,
    ProjectComponent,
    SummaryComponent,
    ListRequestsComponent,
    AboutComponent,
    SideNavbarComponent,
    SourceListComponent,
    SourceItemComponent
  
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    FormWizardModule,
    AppRoutingModule
    
  ],
  providers: [SourceService, 
    DestinationService,
    ToastrService],
  bootstrap: [AppComponent]
})
export class AppModule { }
