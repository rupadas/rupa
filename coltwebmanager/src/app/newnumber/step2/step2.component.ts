import { Component, OnInit, Input } from '@angular/core';
import { DataService, NumberService } from '../../services';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-step2',
  templateUrl: './step2.component.html',
  styleUrls: ['./step2.component.css', '../new-number/new-number.component.css']
})
export class Step2Component implements OnInit {

	data:any;
	columns:any;
	userData:any;
	showDialog:boolean = false;
	popUpTitle;
	popUpButton1Text;
	popUpButton2Text;

  	constructor(	
  		private route: ActivatedRoute,
	    private router: Router,
	    private dataService: DataService,
	    private numberService: NumberService
    ) { }

	ngOnInit() {
		this.data = this.numberService.getTableData();
		this.columns = this.numberService.getTablColumns();
		this.userData = this.dataService.getUserData();
		this.popUpdataSetUp();
	}

	previous() {
		this.dataService.setUserData(this.userData);
		this.router.navigate(['/newnumber/'+this.userData.telephonetype]);
	}

	next() {
		console.log("clicked")
		this.showDialog=true;
	}

	popUpdataSetUp() {
		this.popUpTitle = "What do you want to do with Numbers?";
		this.popUpButton1Text = "Reserve Number";
		this.popUpButton2Text = "Activate Number";
	}

	onPopUpButtonClick(text:string):void { 
		this.userData.numberType = text;
		this.dataService.setUserData(this.userData);
		this.router.navigate(['/newnumber/step3']);
	}

	onErrorButtonClick(event:boolean) {
		if(event) {
			this.router.navigate(['/newnumber/'+this.userData.telephonetype]);
		}
	}
}
