import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class BaseService {

	public baseUrl:string = environment.baseUrl;
	private currentUserSubject: BehaviorSubject<any>;
    public currentUser: Observable<any>;

    private trans: BehaviorSubject<any>;
    
	
	constructor() {
		let data = { 'token':"gdgsdvxd", 'role':'external', 'name':'test' };
		localStorage.setItem('currentUser', JSON.stringify(data));  
		this.currentUserSubject = new BehaviorSubject<any>(JSON.parse(localStorage.getItem('currentUser')));
		this.currentUser = this.currentUserSubject.asObservable();
		this.trans = new BehaviorSubject<any>({});
	}

	public getCurrentUser() {
		return JSON.parse(localStorage.getItem('currentUser'));
	}

	public get currentUserValue(): any {
        return this.currentUserSubject.value;
    }

	public setCurrentUser() {
    	let data = { 'token':"gdgsdvxd", 'role':'external', 'name':'test' };
		localStorage.setItem('currentUser', JSON.stringify(data));
		this.currentUserSubject.next(data);
	}

	public isLoggedIn(): boolean {
		if(this.getCurrentUser() != undefined) {
		  return true;
		}
		return false;
	}

	public login() {

	}

	public logout() {
		console.log("logout");
		localStorage.clear();
	}

	public isAuthorized(allowedRoles: string[]) : boolean {
		if (allowedRoles == null || allowedRoles.length === 0) {
	      return true;
	    }

	    let user = this.getCurrentUser();
	    if(user.token == "") {
	    	return false;
	    }

	    if(allowedRoles.includes(user.role)) {
	    	return true;
	    }
		return false;
	}

	public setLanguage(text) {
		localStorage.setItem('language', text);
		this.trans.next(localStorage.getItem('language'));
	}

	// public getLanguage():Observable<any> {
	// 	this.trans.asObservable();
	// }
}
