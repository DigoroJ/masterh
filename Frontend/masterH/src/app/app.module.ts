import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { AboutComponent } from './components/about/about.component';
import { EventsComponent } from './components/events/events.component';
import { HttpClientModule } from '@angular/common/http';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { BookComponent } from './components/book/book.component';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    AboutComponent,
    EventsComponent,
    ContactComponent,
    FooterComponent,
    GalleryComponent,
    BookComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
