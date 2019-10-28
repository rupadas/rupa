import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseService } from './base.service';
import {TranslateService} from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})

export class WelcomeService extends BaseService {

	
	constructor(private http: HttpClient, private translate: TranslateService) { 
		super();
		translate.setDefaultLang('en');
	}

	/*Get all domains details*/
	getDomains() {
		return this.http.get(this.baseUrl+`all`);
	}

	/*get all countries*/
	getCountries() {
		return this.http.get(this.baseUrl+`all`);
	}

	/*get profiles*/
	getServiceProfiles() {
		return this.http.get(this.baseUrl+`all`);
	}
}
