import { Component, OnInit } from '@angular/core';
import { HomeServiceService } from 'src/app/Services/home-service.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private service:HomeServiceService) { }
  getPrice:any;
  getBarbers:any;
  getPhone:any
  getAddress:any
  getEmail:any
  getTodays:any
  ngOnInit(): void {
     this.getPriceFun();
     this.getBarbersFun();
  }
  getPriceFun()
  {
    this.getPrice=this.service.getPrices;
  }
  getBarbersFun()
  {
    this.getBarbers=this.service.getBarbers;
  }
 
}
