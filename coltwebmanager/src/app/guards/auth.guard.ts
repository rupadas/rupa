import { Component, Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { BaseService } from '../services';
import { Location } from '@angular/common';

@Injectable({ providedIn: 'root' })

export class AuthGuard implements CanActivate {
    
    constructor(
        private router: Router,
        private auth: BaseService,
        private location: Location
    ) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        //Check if user is loggedin
        if(!this.auth.isLoggedIn()) {
            // not logged in so redirect to login page with the return url
            this.router.navigate(['/welcome'], { queryParams: { returnUrl: state.url } });
            return false;
        };

        //If user has access to the routes
        if (!this.auth.isAuthorized(route.data.allowedRoles)) {
            this.router.navigate(['/welcome']);
        }
        
        return true;
    }
}