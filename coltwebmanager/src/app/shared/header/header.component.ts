import { Component, OnInit } from '@angular/core';
import { BaseService } from '../../services';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {

	currentUser:any;
	constructor(  private baseService:BaseService,) { }

	ngOnInit() {
		this.currentUser = this.baseService.getCurrentUser();
	}

	logOut(event:any) {
		this.baseService.logout();
	}
}
