import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sidebar-layout',
  templateUrl: './sidebar-layout.component.html',
  styleUrls: ['./sidebar-layout.component.css']
})
export class SidebarLayoutComponent implements OnInit {
  _opened: boolean =true;
  public _MODES: Array<string> = ['over', 'push', 'slide'];
  public _POSITIONS: Array<string> = ['left', 'right', 'top', 'bottom'];
  _modeNum = 1;
  _positionNum = 0;
	constructor() { }

	ngOnInit() {	
    console.log(this._opened);
  }

  onErrorButtonClick(event:boolean) {
    //console.log(event);
    this._opened = event;
	}
}
