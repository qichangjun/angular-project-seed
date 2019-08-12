import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Router } from '@angular/router';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';

import { AuthenticationService } from '../../core/services/auth.service';
import { ConfigService } from '../../core/services/config.service';
import { NavBarEventService } from '../../core/services/navBarEvent.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class AppHeaderComponent implements OnInit{
    public config: PerfectScrollbarConfigInterface = {};
    @ViewChild('userImg') userImg: ElementRef;
    notifications: Object[] = [{
      round: 'round-danger',
      icon: 'ti-link',
      title: 'Luanch Admin',
      subject: 'Just see the my new admin!',
      time: '9:30 AM'
    }, {
      round: 'round-success',
      icon: 'ti-calendar',
      title: 'Event today',
      subject: 'Just a reminder that you have event',
      time: '9:10 AM'
    }];
    userPhoto = undefined;
    userName : string = '';
    navBarStatus : boolean = true;
    constructor(
      private render: Renderer2,
      private _navBarEventService : NavBarEventService,
      public dialog: MatDialog,
      public _configService : ConfigService,
      public _authenticationService : AuthenticationService,
      private router : Router
    ) { }

    ngOnInit() {
      this._navBarEventService.toggleEvent$.subscribe((info)=>{
        if(info){
          this.navBarStatus = !this.navBarStatus
        }
      })            

    }
}
