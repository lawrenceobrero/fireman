import { ListRequestsComponent } from './list-requests/list-requests.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NewRequestComponent } from './new-request/new-request.component';
import { FooterComponent } from './footer/footer.component';
import { SourceComponent } from './new-request/source/source.component';
import { DestinationComponent } from './new-request/destination/destination.component';
import { PortComponent } from './new-request/port/port.component';
import { ProjectComponent } from './new-request/project/project.component';
import { SummaryComponent } from './new-request/summary/summary.component';
import { AboutComponent } from './about/about.component';

const appRoutes: Routes = [
    { path: '', redirectTo: '/requests' , pathMatch: 'full'},
    { path: 'requests', component:ListRequestsComponent},
    { path: 'about', component:AboutComponent},

    {
        path: 'new', component: NewRequestComponent, children: [
            { path: '', component: SourceComponent },
            { path: 'destination', component: DestinationComponent },
            { path: 'port', component: PortComponent },
            { path: 'project', component: ProjectComponent },
            { path: 'summary', component: SummaryComponent },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
   

}