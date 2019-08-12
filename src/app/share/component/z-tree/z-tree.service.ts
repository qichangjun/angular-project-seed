import {Injectable} from "@angular/core";
import { Http, Headers, Response,URLSearchParams,Jsonp } from '@angular/http';
import { ResponseHandleService } from '../../../core/services/responseHandle.service';
import { AuthenticationService } from '../../../core/services/auth.service';
@Injectable()
export class zTreeService {
    constructor(
        private jsonp:Jsonp,
        private http : Http,
        private _authenticationService : AuthenticationService,
        private _responseHandleService : ResponseHandleService
    ){}
    getTreeDataPaths(url : string,ids : Array<any>,otherParam : Object) : Promise<any> {
        let params = new URLSearchParams();  
        params.set('parentId',ids.join('*'));
        let headers = new Headers()
        for (let key in otherParam) {
            params.set(key,otherParam[key])
        }                 
        // headers.append('accessToken',this._authenticationService.getAccessToken())  
        // headers.append('accessUser',this._authenticationService.getAccessUser())  
        return this.http.get(url,{ search: params,headers:headers })
                        .toPromise()
                        .then(res =>
                          this._responseHandleService.extractData(res)
                        )
                        .catch(error =>
                          this._responseHandleService.handleError(error)
                        );
    }
}