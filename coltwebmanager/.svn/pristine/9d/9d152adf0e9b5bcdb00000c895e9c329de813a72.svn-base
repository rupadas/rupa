import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})

export class ErrorComponent implements OnInit {

	@Output() buttonEvent: EventEmitter<boolean> = new EventEmitter<boolean>();

	constructor() { }

	ngOnInit() {

	}

	back(event:any) {
		this.buttonEvent.emit(true);
	}
}
