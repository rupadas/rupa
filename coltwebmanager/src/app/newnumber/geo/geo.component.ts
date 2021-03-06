import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DataService, NumberService } from '../../services';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-geo',
  templateUrl: './geo.component.html',
  styleUrls: ['./geo.component.css', '../new-number/new-number.component.css', '../../shared/map/map.component.css']
})

export class GeoComponent implements OnInit {

	userData:any;
	buttonDisable:boolean = true; 
	localArea:any;
	newnumberForm: FormGroup;
	formData:any;
	localAreaEnable:boolean = false;
	mapSearchType:string;
	
	constructor( 
		private numberService:NumberService,
	    private dataService : DataService,
	    private formBuilder: FormBuilder,
	    private route: ActivatedRoute,
    	private router: Router,
    ) { }

	ngOnInit() {
		this.mapSearchType = 'address';
		this.buttonDisable = true;
		/*form validation*/
	    this.newnumberForm = this.formBuilder.group({
	      telephone:[null, Validators.required],
	      localarea: [null]
	    });

		this.userData = this.dataService.getUserData();
		
		if(this.userData.country != 'FR' && this.userData.country !='ES') {
	      this.localAreaEnable = true;
	    }

	    this.optionalValidator();

	    /*Listen to local Area API*/
	    this.getLocalArea();

	    this.setPrefilledValues();
	}

	optionalValidator() {
	    if(this.userData.country !='FR' && this.userData.country != 'ES') {
	      const localAreaControl = this.newnumberForm.get('localarea');
	      localAreaControl.setValidators([Validators.required]);
	    }
	}

	onSubmit() {
		console.log(this.newnumberForm.valid);
		if (!this.newnumberForm.valid) {
		  this.buttonDisable = true;
		  return;
		} else {
		  this.updateDataSourceValue();
		}
	}

	updateDataSourceValue() {
		this.userData.telephonetype = 'geo';
		this.userData.telephone = this.newnumberForm.controls.telephone.value,
		this.userData.localarea = this.newnumberForm.controls.localarea.value,
		this.dataService.setUserData(this.userData);
		this.router.navigate(['/newnumber/step2']);
	}

	numberChange (event:any) {
		this.buttonDisable = true;
		if(event.target.value != "") {
		  this.buttonDisable = false;
		} 
	}

	localAreaChange(event:any) {
		this.buttonDisable = true;
		if(event.target.value != "") {
		  this.buttonDisable = false;
		}
	}

	getLocalArea() {
		this.numberService
	      .getLocalAreaName()
	      .subscribe((data: any) => {
	        this.localArea = data;
	    });
	}

	setPrefilledValues() {
		if(this.userData.telephone != undefined) {
			this.buttonDisable = false;
			this.newnumberForm.get('telephone').setValue(this.userData.telephone);
			this.mapSearchType = this.userData.mapSearchType;
			if(this.userData.country != 'FR' && this.userData.country !='ES') {
		      this.localAreaEnable = true;
		      this.newnumberForm.get('localarea').setValue(this.userData.localarea);
		    }
		}
	}

	onNotify(message:string):void {
		this.userData.telephonetype = 'geo';
	    this.userData.mapSearchType = message;
	    this.dataService.setUserData(this.userData);
	}
}
