import { Component, OnInit } from '@angular/core';
import { HomeServiceService } from 'src/app/Services/home-service.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  getAddress:any
  getEmail:any
  getPhone:any
  getTodays:any
  constructor(private service:HomeServiceService) { }

  ngOnInit(): void {
    this.getContactFun()
  }
  getContactFun()
  {
    this.getAddress=this.service.getContactSer[3].address;
    this.getEmail=this.service.getContactSer[1].email;
    this.getPhone=this.service.getContactSer[0].phone;
    this.getTodays=this.service.getContactSer[2].todays;
  }
}
