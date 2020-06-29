import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { MaterialModule } from './material/material.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { LinkData } from './link-data';

import { AppComponent } from './app.component';
import { CardsComponent } from './cards/cards.component';
import { CarouselComponent } from './carousel/carousel.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { AboutComponent } from './about/about.component';
import { BioComponent } from './bio/bio.component';
import { ConflictResolutionComponent } from './services/conflict-resolution/conflict-resolution.component';
import { SalesPerformanceComponent } from './services/sales-performance/sales-performance.component';
import { TeamLeadershipComponent } from './services/team-leadership/team-leadership.component';
import { WhitePapersComponent } from './resources/white-papers/white-papers.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    CardsComponent,
    CarouselComponent,
    ContactComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    NavMenuComponent,
    AboutComponent,
    BioComponent,
    ConflictResolutionComponent,
    SalesPerformanceComponent,
    TeamLeadershipComponent,
    WhitePapersComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    MaterialModule,
    InMemoryWebApiModule.forRoot(LinkData, { delay: 1000 }),
    CarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
