import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FullComponent } from './full/full.component';
import { AppHeaderComponent } from './full/header/header.component';
import { AppSidebarComponent } from './full/sidebar/sidebar.component';
import { ShareModule } from './share/share.module';
import { CoreModule } from './core/core.module';

import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true,
  wheelSpeed: 2,
  wheelPropagation: true,
};
@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    AppSidebarComponent,
    FullComponent
  ],
  entryComponents:[],
  imports: [
    BrowserModule,
    ShareModule,    
    CoreModule.forRoot(),
    PerfectScrollbarModule,
    AppRoutingModule  
  ],
  providers: [  
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
    },   
    {provide: LocationStrategy, useClass: HashLocationStrategy},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
