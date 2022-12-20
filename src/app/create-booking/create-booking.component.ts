import {Component, OnInit} from '@angular/core';
import {Booking} from '../booking';
import {Router, ActivatedRoute} from "@angular/router";
import {BookingService} from "../booking.service"; //activatedRoute to get ID from 2way Binding
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-create-booking',
  templateUrl: './create-booking.component.html',
  styleUrls: ['./create-booking.component.css']
})

export class CreateBookingComponent implements OnInit { /*onInit to get ID from activated Route*/

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private bookingService: BookingService,
    private formbuilder: FormBuilder,
  ) {

  }

  booking: Booking = {
    id: 100,
    name: 'your Name',
    roomNumber: 100,
    startDate: new Date(),
    endDate: new Date()
  }

  bookingForm: FormGroup = this.formbuilder.group({ //!!!! important!!!! TYPE: FormGroup !!!!!!!
    id: ['', Validators.required],
    name: ['', Validators.required],
    roomNumber: ['', Validators.required],
    startDate: ['', Validators.required],
    endDate: ['', Validators.required],
  })

  ngOnInit(): void {
    if (this.router.url != '/create') { /*if not '/create' get id from route*/
      let id = Number(this.activatedRoute.snapshot.paramMap.get('id')); /*Number for type Var*/
      this.bookingService.getBookingById(id).subscribe((result) => {

        this.booking = result;

        this.bookingForm.setValue(
          {
            id: this.booking.id,
            roomNumber: this.booking.roomNumber,
            name: this.booking.name,
            startDate: this.booking.startDate,
            endDate: this.booking.endDate,
          }
        );
      });
    }
  }

  save(): void {
    this.booking.id = this.bookingForm.get('id')?.value; // ? important, do not forget
    this.booking.name = this.bookingForm.get('name')?.value;
    this.booking.roomNumber = this.bookingForm.get('roomNumber')?.value;
    this.booking.startDate = this.bookingForm.get('startDate')?.value;
    this.booking.endDate = this.bookingForm.get('endDate')?.value;

    this.bookingService.addBooking(this.booking).subscribe();
    this.router.navigate(['bookings']); /*routes to bookings*/
  }

  dateChanged(event: Event, isStart: boolean) { /*event from html DOM*/
    let val = (event.target as HTMLInputElement).value;
    if (isStart) {
      this.booking.startDate = new Date(val); /* wenn true dann startdatum, sonst enddatum*/
    } else {
      this.booking.endDate = new Date(val);
    }
  }
}

