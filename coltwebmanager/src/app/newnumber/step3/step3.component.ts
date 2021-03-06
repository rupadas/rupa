import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DataService, NumberService } from '../../services';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-step3',
  templateUrl: './step3.component.html',
  styleUrls: ['./step3.component.css', '../new-number/new-number.component.css']
})

export class Step3Component implements OnInit {

	data:any;
	columns:any;
	cutomerData:any;
	customerColumns:any;
	userData:any;
	tableEnable:boolean=false;
	buttonTitle:string;

  	constructor(
  		private route: ActivatedRoute,
	    private router: Router,
	    private dataService: DataService,
	    private numberService: NumberService
	) { }

	ngOnInit() {
		this.data = this.numberService.getTableData();
		this.columns = this.numberService.getTablColumns();
		this.cutomerData = this.numberService.getCustomRefernceTableData();
		this.customerColumns = this.numberService.getCustomReferenceTablColumns();
		this.userData = this.dataService.getUserData();
		if(this.userData.numberType == "Activate") {
			this.buttonTitle = "ActivateNumber";
		} else {
			this.buttonTitle = "ReserveNumber";
		}
	}

	previous() {
		this.router.navigate(['/newnumber/step2']);
	}

	next() {
		
	}

	submit() {
		this.tableEnable = true;
	}
}
