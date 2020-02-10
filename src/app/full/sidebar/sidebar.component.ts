import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef, Component,Input } from '@angular/core';
import { MatDialog } from '@angular/material';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';

import { AuthenticationService } from '../../core/services/auth.service';
import { ConfigService } from '../../core/services/config.service';
import { MenuItems } from '../../share/class/menu-items/menu-items';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class AppSidebarComponent {
  public config: PerfectScrollbarConfigInterface = {};
  mobileQuery: MediaQueryList;
  private _mobileQueryListener: () => void;
  @Input() snav : any;
  constructor(
    private dialog : MatDialog,
    public _configService : ConfigService,
    public _authenticationService : AuthenticationService,
    changeDetectorRef: ChangeDetectorRef, media: MediaMatcher, public menuItems: MenuItems) {
    this.mobileQuery = media.matchMedia('(min-width: 768px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
    
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  editCurrentUser(){
   
  }

  showMenu(menuitem){
    menuitem.showMenu = true
    this.snav._elementRef.nativeElement.style.width = 320 + 'px'
  }

  hideMenu(menuitem){
    menuitem.showMenu = false
    this.snav._elementRef.nativeElement.style.width = 80 + 'px'
  }
 
}