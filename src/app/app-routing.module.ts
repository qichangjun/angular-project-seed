import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './core/guard/auth.guard';
import { FullComponent } from './full/full.component';
const routes: Routes = [
  { path:'',component:FullComponent,children:[],canActivate:[AuthGuard]},
  { path:'404',loadChildren:'./404/notFound.module#NotFoundModule'},  
  { path:'**',redirectTo:'404'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
