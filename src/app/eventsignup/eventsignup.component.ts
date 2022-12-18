import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-eventsignup',
  templateUrl: './eventsignup.component.html',
  styleUrls: ['./eventsignup.component.css']
})
export class EventsignupComponent implements OnInit {

  signupMail : string = "";

  constructor() {
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    console.log('Form gesendet');
  }
}
