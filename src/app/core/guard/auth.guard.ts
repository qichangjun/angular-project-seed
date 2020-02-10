import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { AuthenticationService } from '../services/auth.service';
import { environment } from '../../../environments/environment';
import { LoginService } from '../services/login.service';

declare var Cookies:any;
@Injectable()

export class AuthGuard implements CanActivate {
  constructor(
    private _AuthenticationService : AuthenticationService,
    private router: Router,
    private _LoginService : LoginService
  ) { }

  async canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {    
    if (this._AuthenticationService.getAccessToken()) { 
      return true 
      // if (!this._AuthenticationService.getUserInfo().id || !this._AuthenticationService.getPermissionList().userCode){
      //   try{
      //     await this.getAuthInfo()
      //     return true;
      //   }catch(err){
      //     this._AuthenticationService.removeAllStorage()   
      //     return false 
      //   }  
      // }else{
      //   return true 
      // }               
    } else{           
      this._AuthenticationService.removeAllStorage()  
      return false;
    }
  }

  async getAuthInfo(){
    return new Promise((resolve)=>{
      Promise.all([this._LoginService.getUserInfoBySSO(),
        this._LoginService.getPermissionList()     
      ]).then(async (res)=>{
        let other_info = await this._LoginService.getInfoByUserId(this._AuthenticationService.getAccessToken(),res[0].user.id)
        let info = Object.assign(res[0],other_info)
        this._AuthenticationService.saveLoginInfo(info,res[1])
        resolve(true)
      })
    })
    
  }
}
