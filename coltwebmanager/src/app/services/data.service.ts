import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService extends BaseService {

	public userData:any;

	constructor() { 
		super(); 
	}

	public setUserData(data) {
		console.log(data);
		localStorage.setItem('userData', JSON.stringify(data));
	}

	public getUserData() {
		return JSON.parse(localStorage.getItem('userData'));
	}
}
