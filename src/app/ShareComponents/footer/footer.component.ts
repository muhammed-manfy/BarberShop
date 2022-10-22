import { Component, OnInit } from '@angular/core';
import { HomeServiceService } from 'src/app/Services/home-service.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  // var info

  getAddress:any
  getEmail:any
  getPhone:any
  getTodays:any

// var to footer
  getOpenTime:any
  getDays:any
  getClose:any
  constructor(private service:HomeServiceService, private Router:Router) { }

  ngOnInit(): void {
    this.getContactFun();
    this.getHoursFun();

  }

  getContactFun()
  {
    this.getAddress=this.service.getContactSer[3].address;
    this.getEmail=this.service.getContactSer[1].email;
    this.getPhone=this.service.getContactSer[0].phone;
    this.getTodays=this.service.getContactSer[2].todays;
  }
  getHoursFun()
  {
    this.getDays=this.service.getHours[1].days;
    this.getClose=this.service.getHours[2].close;
    this.getOpenTime=this.service.getHours[0].openTime;
  }
  homeFun(){this.Router.navigate([''])}
  ourServicesFun(){this.Router.navigate(['services'])}
  ourBarbersFun(){this.Router.navigate(['barbers'])}
  contactFun(){this.Router.navigate(['contact'])}
  aboutFun(){this.Router.navigate(['about'])}
  myBook(){this.Router.navigate(['mybook'])}
}
