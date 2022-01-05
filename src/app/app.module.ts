import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainHeaderComponent } from './shared/header/main-header/main-header.component';
import { MainNavComponent } from './shared/main-wrapper/main-nav/main-nav.component';
import { HomeComponent } from './pages/home/home/home.component';
import { AcademicsComponent } from './pages/academics/academics/academics.component';
import { AboutComponent } from './pages/about/about/about.component';
import { EventsComponent } from './pages/events/events/events.component';
import { CampusComponent } from './pages/campus/campus/campus.component';
import { ContactsComponent } from './pages/contacts/contacts/contacts.component';
import { MainFooterComponent } from './shared/footer/main-footer/main-footer.component';

@NgModule({
  declarations: [
    AppComponent,
    MainHeaderComponent,
    MainNavComponent,
    HomeComponent,
    AcademicsComponent,
    AboutComponent,
    EventsComponent,
    CampusComponent,
    ContactsComponent,
    MainFooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
