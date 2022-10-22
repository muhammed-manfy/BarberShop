import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AboutService {

  constructor() { }
  getOurMission={text:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor."}
  getWhyUs={text:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor."}
  getAboutUs={text:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor."}

  getIconsAndText=[
    {id:1 , text:"-Hair Style"},
    {id:2 , text:"-Shaving"},
    {id:3 , text:"-Face masking"},
    {id:4 , text:"-Hair Cut"},
    {id:5 , text:"-Creatine Support 100%"},
    {id:6 , text:"-Beard Mustache Care"}
  ]

  getAboutBarbers=
  [
    {id:1,image:"../../../assets/BarberShop/barbers/istockphoto-1161185127-612x612.jpg",title:"Show us your graft style",text:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor, Aenean commodo ligula eget dolor"},
    {id:2,image:"../../../assets/BarberShop/barbers/istockphoto-1206241162-612x612.jpg",title:"The Barber materials",text:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor, Aenean commodo ligula eget dolor"},
    {id:3,image:"../../../assets/BarberShop/barbers/istockphoto-1271739863-612x612.jpg",title:"OutStanding Barber Shop",text:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor, Aenean commodo ligula eget dolor"},
    {id:4,image:"../../../assets/BarberShop/barbers/istockphoto-1245229656-612x612.jpg",title:"The Barber materials",text:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor, Aenean commodo ligula eget dolor"},
  ]
}
