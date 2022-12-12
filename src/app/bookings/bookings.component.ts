import { Component } from '@angular/core';
import{ Booking } from "../booking";
import { Bookings } from "../mock-bookings";

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.css']
})
export class BookingsComponent {

  constructor() { }

  bookings = Bookings;

  ngOnInit(): void {
  }

  deleteBooking(booking: Booking): void {
    let index = Bookings.indexOf(booking);
    Bookings.splice(index,1); /*delete only on temporary*/
  }

}
