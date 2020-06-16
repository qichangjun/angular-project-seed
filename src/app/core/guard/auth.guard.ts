import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { AuthenticationService } from '../services/auth.service';
import { environment } from '../../../environments/environment';

declare var Cookies:any;
@Injectable()

export class AuthGuard implements CanActivate {
  constructor(
    private _AuthenticationService : AuthenticationService,
    private router: Router
  ) { }

  async canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {    
    if (this._AuthenticationService.getAccessToken()) { 
      return true            
    } else{           
      this._AuthenticationService.removeAllStorage()  
      return false;
    }
  }

  async getAuthInfo(){
    return new Promise((resolve)=>{
     resolve(true)
    })
    
  }
}
