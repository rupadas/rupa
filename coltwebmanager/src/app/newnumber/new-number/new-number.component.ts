import { Component, ElementRef, QueryList, OnInit, Input } from '@angular/core';
import { ViewChild } from '@angular/core';
import { RouterModule, Router, ActivatedRoute, Event, NavigationStart, NavigationEnd, NavigationError } from '@angular/router';
import { DataService } from '../../services';

@Component({
  selector: 'app-new-number',
  templateUrl: './new-number.component.html',
  styleUrls: ['./new-number.component.css']
})

export class NewNumberComponent implements OnInit {

  userData:any;

  constructor( 
  	private route: ActivatedRoute,
    private router: Router,
    private dataService: DataService,
  ) { }
 
  ngOnInit() { 
    this.getUserData();
    if(this.userData.stepNumber ==  undefined) {
      this.userData.stepNumber = 1;
      this.dataService.setUserData(this.userData);
    }
    
    this.router.events.subscribe((val) => {
      // see also 
      if(val instanceof NavigationEnd) {
        this.getUserData();
        if(val.url.indexOf('step2') >= 0) {
          this.userData.stepNumber = 2;
        } else if(val.url.indexOf('step3') >=0) {
          this.userData.stepNumber = 3;
        } else {
          this.userData.stepNumber = 1;
        }
        this.dataService.setUserData(this.userData);
      }
    });
  }

  getUserData() {
    this.userData = this.dataService.getUserData();
    console.log(this.userData);
  }
}

