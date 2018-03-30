import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// layout
import { LayoutDefaultComponent } from '../layout/default/default.component';
import { UsersComponent } from './users/users.component';
import { RolesComponent } from './roles/roles.component';
import { AppRouteGuard } from '@shared/auth/auth-route-guard';
import { DriverComponent } from './basic-info/driver/driver.component';
import { TenantComponent } from './tenant/tenant.component';
import { AuthSettingComponent } from './weichat-setting/auth-setting/auth-setting.component';
import { MessagesComponent } from './weichat-setting/messages/messages.component';
import { EmployeesComponent } from './markeeting-serve/employees/employees.component';
import { ActivityComponent } from './markeeting-serve/activity/activity.component';

const routes: Routes = [
  {
      path: '',
      component: LayoutDefaultComponent,
      children: [
          { path: '', redirectTo: 'users', pathMatch: 'full' },
          { path: 'users', component: UsersComponent, data: { translate: 'users', permission: 'Pages.Users' }, canActivate: [AppRouteGuard] },
          { path: 'roles', component: RolesComponent, data: { translate: 'roles', permission: 'Pages.Roles' }, canActivate: [AppRouteGuard] },
          { path: 'driver', component: DriverComponent, data: { translate: 'driver', permission: 'Pages.DistDriver' }, canActivate: [AppRouteGuard] },
          { path: 'tenant', component: TenantComponent, data: { translate: 'tenant', permission: 'Pages.Tenants' }, canActivate: [AppRouteGuard] },
          { path: 'authsetting', component: AuthSettingComponent, data: { translate: 'authsetting', permission: 'Pages' }, canActivate: [AppRouteGuard] },
          { path: 'message', component: MessagesComponent, data: { translate: 'message', permission: 'Pages' }, canActivate: [AppRouteGuard] },
          { path: 'employee', component: EmployeesComponent, data: { translate: 'employee', permission: 'Pages' }, canActivate: [AppRouteGuard] },
          { path: 'activity', component: ActivityComponent, data: { translate: 'activity', permission: 'Pages' }, canActivate: [AppRouteGuard] },
          
      ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
