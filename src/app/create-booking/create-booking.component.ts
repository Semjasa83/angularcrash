import { Component, OnInit } from '@angular/core';
import { Booking } from '../booking';
import { Router, ActivatedRoute  } from "@angular/router";
import { BookingService } from "../booking.service"; //activatedRoute to get ID from 2way Binding

@Component({
  selector: 'app-create-booking',
  templateUrl: './create-booking.component.html',
  styleUrls: ['./create-booking.component.css']
})

export class CreateBookingComponent implements OnInit { /*onInit to get ID from activated Route*/

  constructor( private router: Router, private activatedRoute: ActivatedRoute, private bookingService: BookingService) {

  }

  booking: Booking = {
    id: 100,
    name: 'your Name',
    roomNumber: 100,
    startDate: new Date(),
    endDate: new Date()
  }

  ngOnInit(): void {
    if (this.router.url != '/create') { /*if not '/create' get id from route*/
      let id = Number(this.activatedRoute.snapshot.paramMap.get('id')); /*Number for type Var*/
      let bookingById = this.bookingService.getBookingById(id);
      this.booking = bookingById;
    }
  }

  save() {
    let bookingById = this.bookingService.getBookingById(this.booking.id); //damit bookings nicht doppelt ausgegeben werden

    if (bookingById == null || bookingById == undefined) {
      this.bookingService.addBooking(this.booking);
    } else {
      this.bookingService.updateBooking(this.booking);
    }
    this.router.navigate(['bookings']) /*routes to bookings*/
  }

  dateChanged(event: Event, isStart: boolean){ /*event from html DOM*/
    let val = (event.target as HTMLInputElement).value;
    if (isStart) {
      this.booking.startDate = new Date(val); /* wenn true dann startdatum, sonst enddatum*/
    } else {
      this.booking.endDate = new Date(val);
    }
  }
}

