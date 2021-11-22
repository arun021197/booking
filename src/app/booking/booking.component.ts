import { Component, OnInit } from '@angular/core';
import { Router, RouterEvent } from '@angular/router';
import { BookticketService } from '../bookticket.service';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {

  
  seatarr:any=[];
  toggle:any;
  seatbooked:any;
  seatselectarr:any=[];
  seat:any=[];
  jstart:any="";
  jend:any="";
  jdate:any="";
  payment:any=""
  

  ss=[];
  passDetailArray:any=[];
  constructor(private service:BookticketService,private router:Router) { 
    for(let seati=1;seati<=30;seati++){
      this.seatarr.push(seati);
      this.jstart=this.service.journeystart;
      this.jend=this.service.journeyend;
      this.jdate=this.service.journeydate;
      this.toggle=[false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false];
      this.seatbooked=[...this.toggle]
    }


    
  }

  
  selectSeat(seat:any) {
    if(this.seatbooked[seat])
    {
      alert("This seat is Booked Please select available seat");
      return;
    }

    this.toggle[seat] = !this.toggle[seat];
    console.log(this.toggle);
    if(this.seatselectarr.length<5){
      if(this.seatselectarr.indexOf(seat)==-1){
        this.seatselectarr.push(seat);
      }else{
        alert("already select the seat");
        return
      }

    }else{
      alert("user book 5 tickets only");
      return
    }
    this.payment=1500*(this.seatselectarr.length);
    console.log(this.seatselectarr);
    
    


  }
  
  confirmtkt(){
   

    if(this.seatselectarr==""){
      alert("plaese select the seat");
      return;
    }

    this.ss=this.seatselectarr;

  }

  passDetails(passname:any,passage:any,passno:any,passseatno:any,passmoney:any,passdate:any){
    localStorage.getItem("");
    this.seatbooked=[...this.toggle];
    localStorage.setItem("numberofseats",this.seatbooked.toString());
    

    this.passDetailArray=[{

      "PassengerName":passname,

      "PassengerAge":passage,

      "PassengerMbl":passno,

      

      "seatNo":this.seatselectarr,

      "Money":passmoney,
      "date":passdate

    }];
    localStorage.setItem(this.seatselectarr,JSON.stringify(this.passDetailArray));

    this.service.pass(passname,passage,passno,passseatno,passmoney,passdate);
    
    // this.router.navigateByUrl('passdetails');

  }

  ngOnInit(): void {

    let retrived=localStorage.getItem("numberofseats");
    console.log("re",retrived);
    if(retrived)

{

this.seatbooked=[...retrived.split(",")]

console.log("before:",this.seatbooked);

}else{

return;

}

for(let i=0;i<this.seatbooked.length;i++){

if(this.seatbooked[i]=="true")

{

this.seatbooked[i]=true;

}else{

this.seatbooked[i]=false;

}

}

this.toggle=[...this.seatbooked];

console.log("after:",this.seatbooked);


}

}
