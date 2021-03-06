import { Component, OnInit } from '@angular/core';
import { WelcomeService, DataService, BaseService } from '../services';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})

export class WelcomeComponent implements OnInit {

  domains:Array<any> = [];
  countries:Array<any> = [];
  profiles:Array<any> = [];
  currentUser:any;
  welcomeForm: FormGroup;
  formData:any;
  submitted:boolean = false;


  constructor (
    private welcomeService:WelcomeService,
    private dataService : DataService,
    private baseService: BaseService,
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit() {

    this.currentUser = this.welcomeService.getCurrentUser();
    console.log(this.currentUser);

    /*form validation*/
    this.welcomeForm = this.formBuilder.group({
      country: [null, Validators.required],
      profile: [null, Validators.required],
      domain:[null],
    });

    this.optionalValidator();
    this.getDomains();
  }

  optionalValidator() {
    if(this.currentUser.role == 'external') {
      const domainControl = this.welcomeForm.get('domain');
      domainControl.setValidators([Validators.required]);
    }
  }

  onSubmit() {
    // stop here if form is invalid
    let formData = {
      domain: this.welcomeForm.controls.domain.value,
      country: this.welcomeForm.controls.country.value,
      profile: this.welcomeForm.controls.profile.value,
    }
    if (!this.welcomeForm.valid) {
      return;
    } else {
      this.dataService.setUserData(formData);
      this.router.navigate(['newnumber/geo']);
    }
  }

  domainChange(event:any) {
    if(event != undefined && event.name !="") {
      this.getCountry();
    } else {
      this.reSetCountryProfile();
    }
  }

  countryChange(event:any) {
    if(event != undefined && event.name !="") {
      this.getProfile();
    } else {
      this.reSetCountryProfile(); 
    }
  }

  reSetCountryProfile() {
    this.countries = [];
    this.profiles = [];
    this.welcomeForm.get('country').setValue(null);
    this.welcomeForm.get('profile').setValue(null);
  }

  getDomains() {
    /*listen to domains*/
    this.welcomeService
      .getDomains()
      .subscribe((data: any) => {
        this.domains = data;
    });
  }

  getCountry() {
    /*listen to countries*/
    this.welcomeService
      .getCountries()
      .subscribe((data: any) => {
        this.countries = data;
    });
  }

  getProfile() {
    /*listen to profiles*/
    this.welcomeService
      .getServiceProfiles()
      .subscribe((data: any) => {
        this.profiles = data;
    });
  }


  changeLanguage(event:any) {
    this.baseService.setLanguage(event);
    
    //location.reload();
  }

}
