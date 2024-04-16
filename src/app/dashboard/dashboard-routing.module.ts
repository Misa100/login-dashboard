import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SidenavWrapperComponent } from './sidenav-wrapper/sidenav-wrapper.component';
import { UserComponent } from './user/user.component';
import { InfoComponent } from './info/info.component';

const dashboardRoutes: Routes = [
  {path:'', component: SidenavWrapperComponent, children: [
    {path:'dashboard', component: DashboardComponent},
    {path:'info', component: InfoComponent},
    {path:'user', component: UserComponent}
  ]},
];

@NgModule({
  imports: [RouterModule.forChild(dashboardRoutes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule  { }
