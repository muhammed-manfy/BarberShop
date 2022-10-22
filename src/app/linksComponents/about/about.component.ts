import { Component, OnInit } from '@angular/core';
import { AboutService } from 'src/app/Services/about.service';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  getIconsAndText:any
  getOurMission:any
  getWhyUs:any
  getAboutUs:any

  getAboutBarbers:any
  constructor(private service:AboutService) { }

  ngOnInit(): void {
    this.getIconsAndTextFun()
    this.getOurMission=this.service.getOurMission.text;
    this.getWhyUs=this.service.getWhyUs.text;
    this.getAboutUs=this.service.getAboutUs.text;
    this.getAboutBarbersFun();
  }

  getIconsAndTextFun()
  {
    this.getIconsAndText=this.service.getIconsAndText;
  }
  getAboutBarbersFun()
  {
    this.getAboutBarbers=this.service.getAboutBarbers;
  }
}
