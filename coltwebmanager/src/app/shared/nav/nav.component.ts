import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { Router, ActivatedRoute, Event, NavigationStart, NavigationEnd, NavigationError } from '@angular/router';
import { DataService } from '../../services';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})

export class NavComponent implements OnInit {

	title:string;
	@Output() buttonEvent: EventEmitter<boolean> = new EventEmitter<boolean>();
	@Input() _opened:boolean;

  	constructor(
  		public route: ActivatedRoute,
	    public router: Router,
	    public dataService: DataService,
	) { }

	ngOnInit() {
		this.title = this.getTitle(this.router.routerState, this.router.routerState.root).join('-');
		this.router.events.subscribe((val) => {
			if(val instanceof NavigationEnd) {
				this.title = this.getTitle(this.router.routerState, this.router.routerState.root).join('-');
			}
		});
	}
	public _toggleSidebar() {
		this._opened = !this._opened;
		this.buttonEvent.emit(this._opened);
  }

	getTitle(state, parent) {
	    var data = [];
	    if(parent && parent.snapshot.data && parent.snapshot.data.routeName) {
	      data.push(parent.snapshot.data.routeName);
	    }
	    if(state && parent) {
	      data.push(... this.getTitle(state, state.firstChild(parent)));
	    }
	    return data;
  	}
}
