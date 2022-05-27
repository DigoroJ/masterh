import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { DashComponent } from './components/admin/dash/dash.component';
import { BookComponent } from './components/book/book.component';
import { ContactComponent } from './components/contact/contact.component';
import { EventsComponent } from './components/events/events.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';

const routes: Routes = [
{path:'', component:HomeComponent},
{path:'about', component:AboutComponent},
{path:'login', component:LoginComponent},
{path:'signup',component:SignupComponent},
{path: 'dash', component:DashComponent},
{path:'events',component:EventsComponent},
{path:'contact',component:ContactComponent},
{path:'gallery',component:GalleryComponent},
{path:'book',component:BookComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
