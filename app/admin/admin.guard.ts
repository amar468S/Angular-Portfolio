import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';

import { AuthService } from '../auth/auth.service.service';

@Injectable({
  providedIn: 'root'
})

// A guard is simply a service that implements the CanActivate interface and 
// overrides the canActivate() method. In this case, it always returns true
// which means access will be always granted to the user when this guard is applied to a route.

// Note: There are other types of Guards such as:

// CanActivateChild: used to allow or disallow access to child routes.
// CanDeactivate: used to allow or deny exit from route.
// Resolve`: used for doing operations (resolve data) just before route activation etc.


export class AdminGuard implements CanActivate {

  constructor(private authservice:AuthService, private router:Router) {}

  // The canActivate() method will return true if the user is logged in or false otherwise.

  // The canActivate() method is passed many arguments which makes it easy to detrmine if the guard needs to allow or disallow access to certain route(s):

  // next: ActivatedRouteSnapshotwhich is the next route that will be activated if the guard is allowing access,
  // state: RouterStateSnapshotwhich is the next router state if the guard is allowing access.

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean | UrlTree {
    if(this.authservice.isLoggedIn){
      return true;
    }
    else {
      return this.router.parseUrl("/admin/login");
    }
  }
}
