import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './linksComponents/about/about.component';
import { BookComponent } from './linksComponents/book/book.component';
import { ContactComponent } from './linksComponents/contact/contact.component';
import { HomeComponent } from './linksComponents/home/home.component';
import { OurBarbersComponent } from './linksComponents/our-barbers/our-barbers.component';
import { OurServicesComponent } from './linksComponents/our-services/our-services.component';

const routes: Routes =
[
  {path:'',component:HomeComponent},
  {path:'services',component:OurServicesComponent},
  {path:'barbers' ,component:OurBarbersComponent},
  {path:'mybook',component:BookComponent},
  {path:'about',component:AboutComponent},
  {path:'contact',component:ContactComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
