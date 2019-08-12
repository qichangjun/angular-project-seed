import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';

import { AuthenticationService } from '../services/auth.service';
declare var Cookies:any;
@Injectable()

export class AuthGuard implements CanActivate {
  constructor(
    private _AuthenticationService : AuthenticationService,
    private router: Router,
  ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return true 
    // if (this._AuthenticationService.getAccessToken()) {      
    //   return true;
    // } else{      
    //   this.router.navigate(['/login'], { queryParams: {returnUrl:encodeURIComponent(window.location.href)} });         
    //   return false;
    // }
  }
}
