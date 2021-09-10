import { Component, EventEmitter } from '@angular/core';
import { DataToBeSaved } from "./interfaces/data-to-be-saved";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'fav-comp';

  data_to_be_saved: DataToBeSaved = {
    first_name: 'Deepak',
    last_name: 'Bawa',
    email: 'bawa_d@ymail.com'
  };

  constructor() {
    console.log('constructor 1', this.data_to_be_saved);
  }

  receiveMessage( $event: any ) {
    console.log('AppComponent from msg', $event );
  }

  handleChildEvent( in_data: DataToBeSaved ) {

    console.log('updated in_data', in_data);
  }
}
