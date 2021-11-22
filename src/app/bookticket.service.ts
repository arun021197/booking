import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookticketService {

  constructor() { }


  journeystart:any;
  journeyend:any;
  journeydate:any;
  passengerName:any;
  PassengerAge:any;
  PassengerMobile:any;
  Passenegerseatno:any;
  Payment:any
  date:any;
  bussearchDetails(s:any,d:any,jd:any){
    console.log(s,d,jd)
    this.journeystart=s;
    this.journeyend=d;
    this.journeydate=jd;



  }

  pass(passname:any,passage:any,passno:any,passseatno:any,passmoney:any,passdate:any){
    this.passengerName=passname;
    this.PassengerAge=passage;
    this.PassengerMobile=passno;
    this.Passenegerseatno=passseatno;
    this.Payment=passmoney;
    this.date=passdate;

  }

}
