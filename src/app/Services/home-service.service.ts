import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HomeServiceService {
  constructor() { }
  getPrices=
    [
      {id:1 , title:"Shaving" , subTitleOne:"Lorem ipsum dolor" ,text1:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.", Price1:'$5' ,subTitleSecond:"Lorem ipsum dolor" ,text2:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.", Price2:'$10'},
      {id:2 , title:"Face Masking" , subTitleOne:"Lorem ipsum dolor" ,text1:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.", Price1:'$7' ,subTitleSecond:"Lorem ipsum dolor" ,text2:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.", Price2:'$15'},
      {id:3 , title:"Hair Styling" , subTitleOne:"Lorem ipsum dolor" ,text1:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.", Price1:'$9' ,subTitleSecond:"Lorem ipsum dolor" ,text2:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.", Price2:'$12'}
    ]
    getBarbers=
    [
      {id:1 ,image:"../../../assets/BarberShop/barbers/istockphoto-1030250098-612x612.jpg", barberName:"Soren Bo Bostin", Skill:"The Barber",text:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor."},
      {id:2 ,image:"../../../assets/BarberShop/barbers/istockphoto-1179617751-612x612.jpg", barberName:"Bryan Saftler", Skill:"The Barber",text:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor."},
      {id:3 ,image:"../../../assets/BarberShop/barbers/istockphoto-1277343842-612x612.jpg", barberName:"Daived Kibber", Skill:"The Barber",text:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor."}
    ]
    getSevices=
    [
      {id:1 ,image:"../../../assets/BarberShop/services/istockphoto-506514230-612x612.jpg", service:"Beard ,Mustache Care",text:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor."},
      {id:2 ,image:"../../../assets/BarberShop/services/istockphoto-872361244-612x612.jpg", service:"Studio Shots",text:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor."},
      {id:3 ,image:"../../../assets/BarberShop/services/istockphoto-1313554244-612x612.jpg", service:"Beard ,Mustache Care",text:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor."},
      {id:4 ,image:"../../../assets/BarberShop/services/istockphoto-506514230-612x612.jpg", service:"Studio Shots",text:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor."},
      {id:5 ,image:"../../../assets/BarberShop/services/istockphoto-513806122-612x612.jpg", service:"Beard ,Mustache Care",text:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor."},
      {id:6 ,image:"../../../assets/BarberShop/services/istockphoto-526879653-612x612.jpg", service:"Studio Shots",text:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor."},
      {id:7 ,image:"../../../assets/BarberShop/services/istockphoto-872361244-612x612.jpg", service:"Beard ,Mustache Care",text:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor."},
      {id:8 ,image:"../../../assets/BarberShop/services/istockphoto-1096942614-612x612.jpg", service:"Studio Shots",text:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor."},
    ]
    getOurBarbers=
    [
      {id:1 ,image:"../../../assets/BarberShop/barbers/istockphoto-1030250098-612x612.jpg", barberName:"Soren Bo Bostin", Skill:"The Barber",text:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor."},
      {id:2 ,image:"../../../assets/BarberShop/barbers/istockphoto-1179617751-612x612.jpg", barberName:"Bryan Saftler", Skill:"The Barber",text:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor."},
      {id:3 ,image:"../../../assets/BarberShop/barbers/istockphoto-1030255748-612x612.jpg", barberName:"Daived Kibber", Skill:"The Barber",text:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor."},
      {id:4 ,image:"../../../assets/BarberShop/barbers/istockphoto-1278660951-612x612.jpg", barberName:"Soren Bo Bostin", Skill:"The Barber",text:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor."},
      {id:5 ,image:"../../../assets/BarberShop/barbers/istockphoto-1277505203-612x612.jpg", barberName:"Bryan Saftler", Skill:"The Barber",text:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor."},
      {id:6 ,image:"../../../assets/BarberShop/barbers/istockphoto-1271739863-612x612.jpg", barberName:"Daived Kibber", Skill:"The Barber",text:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor."}
    ]

    getContactSer=
    [
        {id:1 ,phone:"(+963) 999 888 777"},
        {id:2 ,email:"Pristge.Barber@gmail.com"},
        {id:3 ,todays:"Man-Fri 9:30 AM - 6:30 PM"},
        {id:4, address:"Syria-Homs Al-Hamra Street"}
    ]
    getHours=
    [
      {id:1,openTime:"Tues-Fri 9:00am-6:00pm"},
      {id:2,days:"Sat 9:00am-3:00pm"},
      {id:3,close:"Closed Sun & Mon"}
    ]
}
