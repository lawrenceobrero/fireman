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


const appRouter : Routes = [
  {path:'', component:HomeComponent},
  {path:'new', component:NewRequestComponent, children: [
    {path: 'source', component: SourceComponent},
    {path: 'destination', component: DestinationComponent},
    {path: 'port', component: PortComponent},
    {path: 'project', component: ProjectComponent},
    {path: 'summary', component: SummaryComponent},
  ]}
];




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
    SummaryComponent
  
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    FormWizardModule,
    RouterModule.forRoot(appRouter)
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
