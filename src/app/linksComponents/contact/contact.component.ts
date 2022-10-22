import { Component, OnInit } from '@angular/core';
import { HomeServiceService } from 'src/app/Services/home-service.service';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  getPhone:any
  getEmail:any
  getAddress:any
  getTodays:any

  contact=
  {
    fname:'',lname:'',phone:'',email:''
  }

  constructor(private service:HomeServiceService) { }

  ngOnInit(): void {
    this.getContactFun()
  }
    getContactFun()
    {
      this.getPhone=this.service.getContactSer[0].phone;
      this.getEmail=this.service.getContactSer[1].email
      this.getTodays=this.service.getContactSer[2].todays
      this.getAddress=this.service.getContactSer[3].address
    }

    onSubmit(item:any)
    {
      console.warn(item);
    }
}
