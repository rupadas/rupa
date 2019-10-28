import { Component, ElementRef, QueryList, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { map }  from 'googlemaps';
import { ViewChild } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})

export class MapComponent implements OnInit {

	@ViewChild('map') mapElement: ElementRef;
	map: google.maps.Map;
	@Output()searchType = new EventEmitter();
	@Input()mapSearchType:String;
	

	constructor() {}

	ngOnInit() { 
		console.log(this.mapSearchType);
		this.searchType.emit(this.mapSearchType);
	}

	ngAfterViewInit() {
	    const mapProperties = {
	      center: new google.maps.LatLng(35.2271, -80.8431),
	      zoom: 15,
	      mapTypeId: google.maps.MapTypeId.ROADMAP
	    };
	    if(this.mapElement) {
	      this.map = new google.maps.Map(this.mapElement.nativeElement, mapProperties);
	    }
  	}

  	onRadioChange(event:any) {
	    this.searchType.emit(event.target.value);
	}
}
