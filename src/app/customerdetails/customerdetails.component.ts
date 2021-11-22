import { Component, OnInit } from '@angular/core';
import { BookticketService } from '../bookticket.service';

@Component({
  selector: 'app-customerdetails',
  templateUrl: './customerdetails.component.html',
  styleUrls: ['./customerdetails.component.css']
})
export class CustomerdetailsComponent implements OnInit {

  passname="";
  passage="";
  passno="";
  passseat="";
  passpayment=""
  passdate=""
  constructor(private service:BookticketService) {

    this.passname=this.service.passengerName;
    this.passage=this.service.PassengerAge;
    this.passno=this.service.PassengerMobile;
    this.passseat=this.service.Passenegerseatno;
    this.passpayment=this.service.Payment;
    this.passdate=this.service.date;

   }

  ngOnInit(): void {
  }

}
