import { Component, OnInit } from '@angular/core';
import { HomeServiceService } from 'src/app/Services/home-service.service';
@Component({
  selector: 'app-our-barbers',
  templateUrl: './our-barbers.component.html',
  styleUrls: ['./our-barbers.component.css']
})
export class OurBarbersComponent implements OnInit {

  constructor(private service:HomeServiceService) { }
  getBarbers:any;
  ngOnInit(): void {
    this.getBarbersFun();
  }
  getBarbersFun()
  {
    this.getBarbers=this.service.getOurBarbers;
  }
}
