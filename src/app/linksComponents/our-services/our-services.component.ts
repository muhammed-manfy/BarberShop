import { Component, OnInit } from '@angular/core';
import { HomeServiceService } from 'src/app/Services/home-service.service';
import { HomeComponent } from '../home/home.component';
@Component({
  selector: 'app-our-services',
  templateUrl: './our-services.component.html',
  styleUrls: ['./our-services.component.css']
})
export class OurServicesComponent implements OnInit {
  getServices:any
  constructor(private service:HomeServiceService) { }

  ngOnInit(): void {
    this.getServicesFun();
  }
    getServicesFun()
    {
      this.getServices=this.service.getSevices;
    }
}
