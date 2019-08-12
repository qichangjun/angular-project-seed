import { Injectable } from '@angular/core';
import { Http, URLSearchParams } from '@angular/http';
import { Router } from '@angular/router';

import { environment } from '../../../environments/environment';
import { ApiUrl } from '../../share/enum/ApiUrl.enum';
import { ConfigService } from './config.service';
import { ResponseHandleService } from './responseHandle.service';

declare var Cookies:any;
@Injectable()

export class AuthenticationService {
    constructor(
        private http : Http,
        private router: Router,
        private _configService : ConfigService,
        private _responseHandleService : ResponseHandleService
    ) { }

    
}
