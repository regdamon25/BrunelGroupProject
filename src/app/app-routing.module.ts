import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { BioComponent } from './bio/bio.component';
import { ContactComponent } from './contact/contact.component';
import { WhitePapersComponent } from './resources/white-papers/white-papers.component';
import { ConflictResolutionComponent } from './services/conflict-resolution/conflict-resolution.component';
import { TeamLeadershipComponent } from './services/team-leadership/team-leadership.component';
import { SalesPerformanceComponent } from './services/sales-performance/sales-performance.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'login', component: LoginComponent},
  { path: 'about-us', component: AboutComponent },
  { path: 'bio', component: BioComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'resource-home', component: WhitePapersComponent},
  { path: 'conflict-resolution', component: ConflictResolutionComponent},
  { path: 'team-leadership', component: TeamLeadershipComponent},
  { path: 'sales-performance', component: SalesPerformanceComponent}
   
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
