import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';

import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { RouterModule } from '@angular/router';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { SidenavWrapperComponent } from './sidenav-wrapper/sidenav-wrapper.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { InfoComponent } from './info/info.component';
import { UserComponent } from './user/user.component';
import { NgApexchartsModule } from 'ng-apexcharts';

@NgModule({
  declarations: [
    SidenavWrapperComponent,
    DashboardComponent,
    InfoComponent,
    UserComponent
  ],
  imports: [
    CommonModule,
    NgApexchartsModule ,
    MatToolbarModule,
    MatListModule,
    MatIconModule,
    MatSidenavModule,
    MatFormFieldModule,
    MatInputModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
