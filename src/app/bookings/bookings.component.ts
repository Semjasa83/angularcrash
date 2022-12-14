import { Component } from '@angular/core';
import { Booking } from "../booking";
import { BookingService } from "../booking.service";


@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.css']
})
export class BookingsComponent {

  constructor( private bookingService: BookingService) { }

  bookings : Booking[] = []; //Initalisierung Array

  ngOnInit(): void {
    this.bookings = this.bookingService.getBookings();
  }

  deleteBooking(booking: Booking) : void { //function from html!!! - rename at the end
    this.bookingService.deleteBooking(booking); //function from service
  }
}
