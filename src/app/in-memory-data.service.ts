import { Injectable } from '@angular/core';
import { InMemoryDbService } from "angular-in-memory-web-api";
import { Booking } from "./booking";

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  createDb() {
    const bookings: Booking [] = [
      {
        id: 1,
        name: "John Doe",
        roomNumber: 100,
        startDate: new Date(),
        endDate: new Date('2021-07-21')
      },
      {
        id: 2,
        name: "Hermann Schoenmann",
        roomNumber: 121,
        startDate: new Date(),
        endDate: new Date('2021-07-19')
      },
      {
        id: 3,
        name: "Denise Zick",
        roomNumber: 204,
        startDate: new Date(),
        endDate: new Date('2021-07-23')
      },
      {
        id: 4,
        name: "Sandra Lehmann",
        roomNumber: 211,
        startDate: new Date(),
        endDate: new Date('2021-08-01')
      },
      ]
    return { bookings };
  }


  constructor() { }
}
