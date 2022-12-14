import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'login';
  onSubmit(f: NgForm) {
    if(!f.valid){
      console.log('invalid data');
      return;
    }
    console.log(f.value);  // { first: '', last: '' }

  }
  maxDate: Date;
  favoriteSeason: any;
  seasons: string[] = ['Male', 'Female'];
  constructor() {
    // Set the minimum to January 1st 20 years in the past and December 31st a year in the future.
    const currentYear = new Date()
    // this.minDate = new Date(currentYear - 20, 0, 1);
    this.maxDate = new Date(currentYear);
  }
}
