import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home/home.component';
import { AboutComponent } from './pages/about/about/about.component';
import { AcademicsComponent } from './pages/academics/academics/academics.component';
import { CampusComponent } from './pages/campus/campus/campus.component';
import { ContactsComponent } from './pages/contacts/contacts/contacts.component';
import { EventsComponent } from './pages/events/events/events.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/home' },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'academics',
    component: AcademicsComponent
  },
  {
    path: 'campus',
    component: CampusComponent
  },
  {
    path: 'events',
    component: EventsComponent
  },
  {
    path: 'contacts',
    component: ContactsComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }
