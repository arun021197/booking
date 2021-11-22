import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookingComponent } from './booking/booking.component';
import { CustomerdetailsComponent } from './customerdetails/customerdetails.component';
import { TicketComponent } from './ticket/ticket.component';

const routes: Routes = [


  {
    path:'',
    component:TicketComponent,
  },
  {
    path:'ticket',
    children:[
      {
        path:'seatbook',
        component:BookingComponent
      }
    ]
  },
  {
    path:'passdetails',
    component:CustomerdetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
