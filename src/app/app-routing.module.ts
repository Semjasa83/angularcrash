import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookingsComponent } from "./bookings/bookings.component";
import { CreateBookingComponent } from "./create-booking/create-booking.component";

const routes: Routes = [
  {path: 'bookings', component: BookingsComponent},
  {path: 'create', component: CreateBookingComponent},
  {path: 'edit/:id', component: CreateBookingComponent}, /* :id für www.xxxxx.de/edit/10  - ID mitgeben*/
  {path: '', redirectTo: 'bookings', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
