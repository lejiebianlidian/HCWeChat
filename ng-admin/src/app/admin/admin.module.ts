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

import { ActivityFormComponent } from './marketing/activity-form/activity-form.component';
import { ActivityFormDetailComponent } from './marketing/activity-form-detail/activity-form-detail.component';

//权限判断
import { AppRouteGuard } from '../shared/auth/auth-route-guard';
import { ActivityListComponent } from './markeeting-serve/activity/activity-list.component';
import { CreateEmployeeComponent } from './markeeting-serve/employees/create-employee/create-employee.component';
import { EditEmployeeComponent } from './markeeting-serve/employees/edit-employee/edit-employee.component';
import { RetailCustomerComponent } from './customer-service/retail-customer/retail-customer.component';
import { WechatUserComponent } from './wechat-manager/wechat-user/wechat-user.component';
import { RetailCustomerDetailComponent } from './customer-service/retail-customer-detail/retail-customer-detail.component';

import { ApprovalComponent } from './marketing/approval/approval.component';

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
    ActivityComponent,
    ActivityFormComponent,
    ActivityFormDetailComponent,
    ActivityListComponent,
    CreateEmployeeComponent,
    EditEmployeeComponent,
    RetailCustomerComponent,
    WechatUserComponent,
    RetailCustomerDetailComponent,
    ApprovalComponent
   ],
   providers: [ AppRouteGuard ]
})
export class AdminModule { }
