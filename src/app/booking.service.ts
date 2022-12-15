import { Injectable } from '@angular/core';
import { Bookings } from "./mock-bookings";
import { Booking } from "./booking";
import { HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  constructor(private httpClient: HttpClient) { }

  bookingsUrl: string = "/api/bookings"; //bezug auf bookings in in-memory-data

  getBookings() : Observable <Booking[]> {
    let response = this.httpClient.get<Booking[]>(this.bookingsUrl);
    console.log('response', response);
    return response;
  }

  deleteBooking(booking: Booking): Observable <Booking> {
    let response = this.httpClient.delete<Booking>(this.bookingsUrl + "/" + booking.id);
    console.log('del response', response);
    return response;
  }

  getBookingById(id: number) : Observable<Booking> {
    let response = this.httpClient.get<Booking>(this.bookingsUrl + "/" + id);
    /*let bookingById = Bookings.find(x => x.id == id)!;  x could be booking etc.*/
    /* '!' not null operator - gibt nie null aus */
    return response
  }

  addBooking(booking: Booking) : Observable<Booking> {
    let response = this.httpClient.post<Booking>(this.bookingsUrl, booking);
    return response;
  }

}
