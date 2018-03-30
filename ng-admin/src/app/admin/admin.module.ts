import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@shared/shared.module';
import { LayoutModule } from '../layout/layout.module';

import { AdminRoutingModule } from './admin-routing.module';
import { UsersComponent } from './users/users.component';
import { EditUserComponent } from './users/edit-user/edit-user.component';
import { CreateUserComponent } from "./users/create-user/create-user.component";
import { RolesComponent } from './roles/roles.component';
import { CreateRoleComponent } from "./roles/create-role/create-role.component";
import { DriverComponent } from './basic-info/driver/driver.component';
import { EditRoleComponent } from './roles/edit-role/edit-role.component';
import { TenantComponent } from './tenant/tenant.component';
import { CreateTenantComponent } from './tenant/create-tenant/create-tenant.component';
import { EditTenantComponent } from './tenant/edit-tenant/edit-tenant.component';
import { AuthSettingComponent } from './weichat-setting/auth-setting/auth-setting.component';
import { MessagesComponent } from './weichat-setting/messages/messages.component';
import { EditMessageComponent } from './weichat-setting/messages/edit-message/edit-message.component';
import { CreateMessageComponent } from './weichat-setting/messages/create-message/create-message.component';
import { EmployeeModalComponent } from './users/employee-modal/employee-modal.component';
import { EmployeesComponent } from './markeeting-serve/employees/employees.component';
import { ActivityComponent } from './markeeting-serve/activity/activity.component';

//权限判断
import { AppRouteGuard } from '../shared/auth/auth-route-guard';


@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    LayoutModule,
    AdminRoutingModule
  ],
  declarations: [ 
    UsersComponent,
    EditUserComponent,
    CreateUserComponent,
    RolesComponent,
    CreateRoleComponent,
    DriverComponent,
    EditRoleComponent,
    TenantComponent,
    CreateTenantComponent,
    EditTenantComponent,
    AuthSettingComponent,
    MessagesComponent,
    EditMessageComponent,
    CreateMessageComponent,
    EmployeeModalComponent,
    EmployeesComponent,
    ActivityComponent
   ],
   providers: [ AppRouteGuard,DriverComponent ]
})
export class AdminModule { }
