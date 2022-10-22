import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import {  FormsModule } from '@angular/forms';



import { AppComponent } from './app.component';
import { NavbarComponent } from './ShareComponents/navbar/navbar.component';
import { FooterComponent } from './ShareComponents/footer/footer.component';
import { HomeComponent } from './linksComponents/home/home.component';
import { OurServicesComponent } from './linksComponents/our-services/our-services.component';
import { OurBarbersComponent } from './linksComponents/our-barbers/our-barbers.component';
import { BookComponent } from './linksComponents/book/book.component';
import { ContactComponent } from './linksComponents/contact/contact.component';
import { AboutComponent } from './linksComponents/about/about.component';
import { TestComponent } from './test/test.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    OurServicesComponent,
    OurBarbersComponent,
    BookComponent,
    ContactComponent,
    AboutComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
