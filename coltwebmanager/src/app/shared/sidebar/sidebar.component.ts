import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { BaseService } from '../../services';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  currentUrl: string;
  currentUser:any;

  constructor(private router: Router, private baseService:BaseService) { 
    router.events.subscribe(() => {
      this.currentUrl = router.url;
   });
  }

  ngOnInit() {
    this.currentUser = this.baseService.getCurrentUser();
    if(this.currentUser == 'external') {
      this.router.navigate(['welcome']);
    }
  }

}
