import { Component, OnInit } from '@angular/core';
import { DataService} from '../../services';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-location-independent',
  templateUrl: './location-independent.component.html',
  styleUrls: ['./location-independent.component.css', '../new-number/new-number.component.css']
})
export class LocationIndependentComponent implements OnInit {

	userData:any;
	buttonDisable:boolean = true;
	newnumberForm: FormGroup;
	formData:any;

	constructor(
	    private dataService : DataService,
	    private formBuilder: FormBuilder,
	    private route: ActivatedRoute,
    	private router: Router,
	) { }

	ngOnInit() {
		this.userData = this.dataService.getUserData();
		/*form validation*/
	    this.newnumberForm = this.formBuilder.group({
	      telephone:[null, Validators.required],
	    });
	    this.setPrefilledValues();
	}

	onSubmit() {
		if (!this.newnumberForm.valid) {
		  this.buttonDisable = true;
		  return;
		} else {
			this.updateDataSourceValue();
		}
	}

  	numberChange (event:any) {
		this.buttonDisable = true;
		if(event.target.value != "") {
		  this.buttonDisable = false;
		} 
	}

	updateDataSourceValue() {
		this.userData.telephonetype = 'locationindependent';
		this.userData.telephone = this.newnumberForm.controls.telephone.value,
		this.dataService.setUserData(this.userData);
		this.router.navigate(['/newnumber/step2']);
	}

	setPrefilledValues() {
		if(this.userData.telephone != undefined) {
			this.buttonDisable = false;
			this.newnumberForm.get('telephone').setValue(this.userData.telephone);
		}
	}
}
