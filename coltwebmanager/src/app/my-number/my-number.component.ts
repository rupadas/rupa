import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DataService } from '../services';

@Component({
  selector: 'app-my-number',
  templateUrl: './my-number.component.html',
  styleUrls: ['./my-number.component.css']
})

export class MyNumberComponent implements OnInit {

  	constructor(
  		private route: ActivatedRoute,
	    private router: Router,
	    private dataService: DataService,
	) { }

	ngOnInit() {
		
	}
}
