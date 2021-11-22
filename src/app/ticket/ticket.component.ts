import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookticketService } from '../bookticket.service';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css']
})
export class TicketComponent implements OnInit {
  constructor(private bt:BookticketService,private router:Router) {}

  myDate = new Date();
  busDetails(s:any,d:any,jd:any){

    if(s=="" || d=="" || jd==""){
      alert("Please Enter the Journey Details");
      return
    }
    else{
      this.bt.bussearchDetails(s,d,jd);
      this.router.navigateByUrl('ticket/seatbook')
    }

}
ngOnInit(): void {
}

}