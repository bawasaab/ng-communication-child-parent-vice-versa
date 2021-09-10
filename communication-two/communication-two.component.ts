import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { DataToBeSaved } from "../interfaces/data-to-be-saved";

@Component({
  selector: 'app-communication-two',
  templateUrl: './communication-two.component.html',
  styleUrls: ['./communication-two.component.css']
})
export class CommunicationTwoComponent implements OnInit {

  data_to_be_saved!: DataToBeSaved;

  @Input() first_name!: string;
  @Input() last_name!: string;
  @Input() email!: string;

  @Output() changeHost = new EventEmitter();
  
  constructor() {
    console.log('constructor 2', this.data_to_be_saved);
  }

  ngOnInit(): void {
    this.data_to_be_saved = {
      first_name: this.first_name,
      last_name: this.last_name,
      email: this.email
    };
    console.log('constructor 3', this.data_to_be_saved);
  }

  handleClick($event: any) {
    this.data_to_be_saved = {
      first_name: this.first_name +'1',
      last_name: this.last_name +'1',
      email: this.email +'1'
    };

    console.log('CommunicationTwoComponent handleClick', this.data_to_be_saved);
    
    <!-- calling(emitting) the app(host/parent) component method from the child component using our custom event -->
    this.changeHost.emit(this.data_to_be_saved);
  }
}
