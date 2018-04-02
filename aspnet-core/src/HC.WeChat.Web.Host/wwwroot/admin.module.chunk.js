webpackJsonp(["admin.module"],{

/***/ "../../../../../src/app/admin/admin-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__layout_default_default_component__ = __webpack_require__("../../../../../src/app/layout/default/default.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__users_users_component__ = __webpack_require__("../../../../../src/app/admin/users/users.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__roles_roles_component__ = __webpack_require__("../../../../../src/app/admin/roles/roles.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_auth_auth_route_guard__ = __webpack_require__("../../../../../src/app/shared/auth/auth-route-guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__basic_info_driver_driver_component__ = __webpack_require__("../../../../../src/app/admin/basic-info/driver/driver.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__tenant_tenant_component__ = __webpack_require__("../../../../../src/app/admin/tenant/tenant.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__weichat_setting_auth_setting_auth_setting_component__ = __webpack_require__("../../../../../src/app/admin/weichat-setting/auth-setting/auth-setting.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__weichat_setting_messages_messages_component__ = __webpack_require__("../../../../../src/app/admin/weichat-setting/messages/messages.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__marketing_activity_form_activity_form_component__ = __webpack_require__("../../../../../src/app/admin/marketing/activity-form/activity-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__markeeting_serve_employees_employees_component__ = __webpack_require__("../../../../../src/app/admin/markeeting-serve/employees/employees.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__markeeting_serve_activity_activity_component__ = __webpack_require__("../../../../../src/app/admin/markeeting-serve/activity/activity.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__marketing_activity_form_detail_activity_form_detail_component__ = __webpack_require__("../../../../../src/app/admin/marketing/activity-form-detail/activity-form-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__markeeting_serve_activity_activity_list_component__ = __webpack_require__("../../../../../src/app/admin/markeeting-serve/activity/activity-list.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


// layout













var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__layout_default_default_component__["a" /* LayoutDefaultComponent */],
        children: [
            { path: '', redirectTo: 'users', pathMatch: 'full' },
            { path: 'users', component: __WEBPACK_IMPORTED_MODULE_3__users_users_component__["a" /* UsersComponent */], data: { translate: 'users', permission: 'Pages.Users' }, canActivate: [__WEBPACK_IMPORTED_MODULE_5__shared_auth_auth_route_guard__["a" /* AppRouteGuard */]] },
            { path: 'roles', component: __WEBPACK_IMPORTED_MODULE_4__roles_roles_component__["a" /* RolesComponent */], data: { translate: 'roles', permission: 'Pages.Roles' }, canActivate: [__WEBPACK_IMPORTED_MODULE_5__shared_auth_auth_route_guard__["a" /* AppRouteGuard */]] },
            { path: 'driver', component: __WEBPACK_IMPORTED_MODULE_6__basic_info_driver_driver_component__["a" /* DriverComponent */], data: { translate: 'driver', permission: 'Pages.DistDriver' }, canActivate: [__WEBPACK_IMPORTED_MODULE_5__shared_auth_auth_route_guard__["a" /* AppRouteGuard */]] },
            { path: 'tenant', component: __WEBPACK_IMPORTED_MODULE_7__tenant_tenant_component__["a" /* TenantComponent */], data: { translate: 'tenant', permission: 'Pages.Tenants' }, canActivate: [__WEBPACK_IMPORTED_MODULE_5__shared_auth_auth_route_guard__["a" /* AppRouteGuard */]] },
            { path: 'authsetting', component: __WEBPACK_IMPORTED_MODULE_8__weichat_setting_auth_setting_auth_setting_component__["a" /* AuthSettingComponent */], data: { translate: 'authsetting', permission: 'Pages' }, canActivate: [__WEBPACK_IMPORTED_MODULE_5__shared_auth_auth_route_guard__["a" /* AppRouteGuard */]] },
            { path: 'message', component: __WEBPACK_IMPORTED_MODULE_9__weichat_setting_messages_messages_component__["a" /* MessagesComponent */], data: { translate: 'message', permission: 'Pages' }, canActivate: [__WEBPACK_IMPORTED_MODULE_5__shared_auth_auth_route_guard__["a" /* AppRouteGuard */]] },
            { path: 'employee', component: __WEBPACK_IMPORTED_MODULE_11__markeeting_serve_employees_employees_component__["a" /* EmployeesComponent */], data: { translate: 'employee', permission: 'Pages' }, canActivate: [__WEBPACK_IMPORTED_MODULE_5__shared_auth_auth_route_guard__["a" /* AppRouteGuard */]] },
            { path: 'activity', component: __WEBPACK_IMPORTED_MODULE_12__markeeting_serve_activity_activity_component__["a" /* ActivityComponent */], data: { translate: 'activity', permission: 'Pages' }, canActivate: [__WEBPACK_IMPORTED_MODULE_5__shared_auth_auth_route_guard__["a" /* AppRouteGuard */]] },
            { path: 'activity-form', component: __WEBPACK_IMPORTED_MODULE_10__marketing_activity_form_activity_form_component__["a" /* ActivityFormComponent */], data: { translate: 'activity-form', permission: 'Pages' }, canActivate: [__WEBPACK_IMPORTED_MODULE_5__shared_auth_auth_route_guard__["a" /* AppRouteGuard */]] },
            { path: 'activity-form-detail/:id', component: __WEBPACK_IMPORTED_MODULE_13__marketing_activity_form_detail_activity_form_detail_component__["a" /* ActivityFormDetailComponent */], data: { translate: 'activity-form-detail', permission: 'Pages', title: '申请单明细' }, canActivate: [__WEBPACK_IMPORTED_MODULE_5__shared_auth_auth_route_guard__["a" /* AppRouteGuard */]] },
            { path: 'activity-list', component: __WEBPACK_IMPORTED_MODULE_14__markeeting_serve_activity_activity_list_component__["a" /* ActivityListComponent */], data: { translate: 'activity-list', permission: 'Pages' }, canActivate: [__WEBPACK_IMPORTED_MODULE_5__shared_auth_auth_route_guard__["a" /* AppRouteGuard */]] }
        ]
    }
];
var AdminRoutingModule = /** @class */ (function () {
    function AdminRoutingModule() {
    }
    AdminRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["i" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["i" /* RouterModule */]]
        })
    ], AdminRoutingModule);
    return AdminRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/admin/admin.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminModule", function() { return AdminModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__layout_layout_module__ = __webpack_require__("../../../../../src/app/layout/layout.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__admin_routing_module__ = __webpack_require__("../../../../../src/app/admin/admin-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__users_users_component__ = __webpack_require__("../../../../../src/app/admin/users/users.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__users_edit_user_edit_user_component__ = __webpack_require__("../../../../../src/app/admin/users/edit-user/edit-user.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__users_create_user_create_user_component__ = __webpack_require__("../../../../../src/app/admin/users/create-user/create-user.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__roles_roles_component__ = __webpack_require__("../../../../../src/app/admin/roles/roles.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__roles_create_role_create_role_component__ = __webpack_require__("../../../../../src/app/admin/roles/create-role/create-role.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__basic_info_driver_driver_component__ = __webpack_require__("../../../../../src/app/admin/basic-info/driver/driver.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__roles_edit_role_edit_role_component__ = __webpack_require__("../../../../../src/app/admin/roles/edit-role/edit-role.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__tenant_tenant_component__ = __webpack_require__("../../../../../src/app/admin/tenant/tenant.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__tenant_create_tenant_create_tenant_component__ = __webpack_require__("../../../../../src/app/admin/tenant/create-tenant/create-tenant.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__tenant_edit_tenant_edit_tenant_component__ = __webpack_require__("../../../../../src/app/admin/tenant/edit-tenant/edit-tenant.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__weichat_setting_auth_setting_auth_setting_component__ = __webpack_require__("../../../../../src/app/admin/weichat-setting/auth-setting/auth-setting.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__weichat_setting_messages_messages_component__ = __webpack_require__("../../../../../src/app/admin/weichat-setting/messages/messages.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__weichat_setting_messages_edit_message_edit_message_component__ = __webpack_require__("../../../../../src/app/admin/weichat-setting/messages/edit-message/edit-message.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__weichat_setting_messages_create_message_create_message_component__ = __webpack_require__("../../../../../src/app/admin/weichat-setting/messages/create-message/create-message.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__users_employee_modal_employee_modal_component__ = __webpack_require__("../../../../../src/app/admin/users/employee-modal/employee-modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__markeeting_serve_employees_employees_component__ = __webpack_require__("../../../../../src/app/admin/markeeting-serve/employees/employees.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__markeeting_serve_activity_activity_component__ = __webpack_require__("../../../../../src/app/admin/markeeting-serve/activity/activity.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__marketing_activity_form_activity_form_component__ = __webpack_require__("../../../../../src/app/admin/marketing/activity-form/activity-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__marketing_activity_form_detail_activity_form_detail_component__ = __webpack_require__("../../../../../src/app/admin/marketing/activity-form-detail/activity-form-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__shared_auth_auth_route_guard__ = __webpack_require__("../../../../../src/app/shared/auth/auth-route-guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__markeeting_serve_activity_activity_list_component__ = __webpack_require__("../../../../../src/app/admin/markeeting-serve/activity/activity-list.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
























//权限判断


var AdminModule = /** @class */ (function () {
    function AdminModule() {
    }
    AdminModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_2__shared_shared_module__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_3__layout_layout_module__["a" /* LayoutModule */],
                __WEBPACK_IMPORTED_MODULE_4__admin_routing_module__["a" /* AdminRoutingModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__users_users_component__["a" /* UsersComponent */],
                __WEBPACK_IMPORTED_MODULE_6__users_edit_user_edit_user_component__["a" /* EditUserComponent */],
                __WEBPACK_IMPORTED_MODULE_7__users_create_user_create_user_component__["a" /* CreateUserComponent */],
                __WEBPACK_IMPORTED_MODULE_8__roles_roles_component__["a" /* RolesComponent */],
                __WEBPACK_IMPORTED_MODULE_9__roles_create_role_create_role_component__["a" /* CreateRoleComponent */],
                __WEBPACK_IMPORTED_MODULE_10__basic_info_driver_driver_component__["a" /* DriverComponent */],
                __WEBPACK_IMPORTED_MODULE_11__roles_edit_role_edit_role_component__["a" /* EditRoleComponent */],
                __WEBPACK_IMPORTED_MODULE_12__tenant_tenant_component__["a" /* TenantComponent */],
                __WEBPACK_IMPORTED_MODULE_13__tenant_create_tenant_create_tenant_component__["a" /* CreateTenantComponent */],
                __WEBPACK_IMPORTED_MODULE_14__tenant_edit_tenant_edit_tenant_component__["a" /* EditTenantComponent */],
                __WEBPACK_IMPORTED_MODULE_15__weichat_setting_auth_setting_auth_setting_component__["a" /* AuthSettingComponent */],
                __WEBPACK_IMPORTED_MODULE_16__weichat_setting_messages_messages_component__["a" /* MessagesComponent */],
                __WEBPACK_IMPORTED_MODULE_17__weichat_setting_messages_edit_message_edit_message_component__["a" /* EditMessageComponent */],
                __WEBPACK_IMPORTED_MODULE_18__weichat_setting_messages_create_message_create_message_component__["a" /* CreateMessageComponent */],
                __WEBPACK_IMPORTED_MODULE_19__users_employee_modal_employee_modal_component__["a" /* EmployeeModalComponent */],
                __WEBPACK_IMPORTED_MODULE_20__markeeting_serve_employees_employees_component__["a" /* EmployeesComponent */],
                __WEBPACK_IMPORTED_MODULE_21__markeeting_serve_activity_activity_component__["a" /* ActivityComponent */],
                __WEBPACK_IMPORTED_MODULE_22__marketing_activity_form_activity_form_component__["a" /* ActivityFormComponent */],
                __WEBPACK_IMPORTED_MODULE_23__marketing_activity_form_detail_activity_form_detail_component__["a" /* ActivityFormDetailComponent */],
                __WEBPACK_IMPORTED_MODULE_25__markeeting_serve_activity_activity_list_component__["a" /* ActivityListComponent */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_24__shared_auth_auth_route_guard__["a" /* AppRouteGuard */], __WEBPACK_IMPORTED_MODULE_10__basic_info_driver_driver_component__["a" /* DriverComponent */]]
        })
    ], AdminModule);
    return AdminModule;
}());



/***/ }),

/***/ "../../../../../src/app/admin/basic-info/driver/driver.component.html":
/***/ (function(module, exports) {

module.exports = "<!--component html goes here -->\r\n<pro-header  ></pro-header>\r\n<nz-card [nzBordered]=\"false\">\r\n    <form nz-form (ngSubmit)=\"refreshData()\" [nzLayout]=\"'inline'\">\r\n        <div nz-row [nzGutter]=\"24\">\r\n            <div nz-col [nzSpan]=\"8\" class=\"mb-md\">\r\n                <div nz-form-item class=\"d-flex\">\r\n                    <div nz-form-label>\r\n                        <label for=\"no\">工号</label>\r\n                    </div>\r\n                    <div nz-form-control class=\"flex-1\">\r\n                        <nz-input [(ngModel)]=\"code\" name=\"no\" [nzSize]=\"'large'\" [nzPlaceHolder]=\"'请输入'\" nzId=\"no\"></nz-input>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n            <div nz-col [nzSpan]=\"8\" class=\"mb-md\" [class.text-right]=\"'true'\">\r\n                <button nz-button type=\"submit\" [nzType]=\"'primary'\" [nzLoading]=\"loading\" [nzSize]=\"'large'\">查询</button>\r\n                <button nz-button type=\"reset\" (click)=\"getDriverAll()\" [nzSize]=\"'large'\" class=\"mx-sm\">重置</button>\r\n            </div>\r\n        </div>\r\n    </form>\r\n    <nz-table #nzTable [nzAjaxData]=\"data\" [nzTotal]=\"q.total\" [(nzPageIndex)]=\"q.pi\" [(nzPageSize)]=\"q.ps\" [nzLoading]=\"loading\"\r\n        [nzShowSizeChanger]=\"true\" (nzPageIndexChange)=\"getDriverAll()\" (nzPageSizeChange)=\"getDriverAll()\">\r\n        <thead nz-thead>\r\n            <tr>\r\n                <th nz-th>\r\n                    <span>工号</span>\r\n                </th>\r\n                <th nz-th>\r\n                    <span>姓名</span>\r\n                </th>\r\n                <th nz-th>\r\n                    <span>岗位编号</span>\r\n                </th>\r\n\r\n                <!-- <th nz-th>\r\n                    <span>操作</span>\r\n                </th> -->\r\n            </tr>\r\n        </thead>\r\n        <tbody nz-tbody>\r\n            <tr nz-tbody-tr *ngFor=\"let driver of nzTable.data\">\r\n                <td nz-td>{{driver.useR_ID}}</td>\r\n                <td nz-td>{{driver.useR_NAME}}</td>\r\n                <td nz-td>{{driver.positioN_CODE}}</td> \r\n                <!-- <td nz-td>\r\n                    <nz-badge [nzStatus]=\"user.activeType\" [nzText]=\"user.activeText\"></nz-badge>\r\n                </td>\r\n               <td nz-td>\r\n                    <a (click)=\"editUser(user)\">编辑</a>\r\n                    <span nz-table-divider></span>\r\n                    <a (click)=\"msg.success('删除' + user.id)\">删除</a>\r\n                </td> -->\r\n            </tr>\r\n        </tbody>\r\n    </nz-table>\r\n</nz-card>\r\n<!-- <edit-user-modal #editUserModal (modalSave)=\"refreshData()\"></edit-user-modal>\r\n<create-user-modal #createUserModal (modalSave)=\"refreshData()\"></create-user-modal> -->\r\n\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/admin/basic-info/driver/driver.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/admin/basic-info/driver/driver.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DriverComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_service_proxies_service_proxies__ = __webpack_require__("../../../../../src/app/shared/service-proxies/service-proxies.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DriverComponent = /** @class */ (function () {
    function DriverComponent(injector, service) {
        this.service = service;
        this.q = {
            pi: 1,
            ps: 10,
            total: 0,
            sorter: '',
            status: -1,
            statusList: []
        };
        this.loading = false;
        this.code = '';
        this.data = [];
    }
    DriverComponent.prototype.ngOnInit = function () {
        this.getDriverAll();
    };
    DriverComponent.prototype.getDriverAll = function (reset) {
        var _this = this;
        if (reset === void 0) { reset = false; }
        if (reset) {
            this.q.pi = 1;
        }
        this.loading = true;
        this.service.getAll((this.q.pi - 1) * this.q.ps, this.q.ps).subscribe(function (result) {
            _this.loading = false;
            var status = 0;
            _this.data = result.items.map(function (i) {
                // if (i.isActive) {
                //     status = 0;
                // } else {
                //     status = 1;
                // }
                // const statusItem = this.status[status];
                // i.activeText = statusItem.text;
                // i.activeType = statusItem.type;
                return i;
            });
            _this.q.total = result.totalCount;
        });
    };
    DriverComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            moduleId: module.i,
            selector: 'driver',
            template: __webpack_require__("../../../../../src/app/admin/basic-info/driver/driver.component.html"),
            styles: [__webpack_require__("../../../../../src/app/admin/basic-info/driver/driver.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injector"], __WEBPACK_IMPORTED_MODULE_1__shared_service_proxies_service_proxies__["j" /* DriverServiceProxy */]])
    ], DriverComponent);
    return DriverComponent;
}());



/***/ }),

/***/ "../../../../../src/app/admin/markeeting-serve/activity/activity-list.component.html":
/***/ (function(module, exports) {

module.exports = "<pro-header></pro-header>\r\n<nz-card [nzBordered]=\"false\">\r\n    <form nz-form (ngSubmit)=\"refreshData()\" [nzLayout]=\"'inline'\">\r\n        <div nz-row [nzGutter]=\"24\">\r\n            <ng-template #deleteContent>\r\n                <h2>是否删除活动{{activityName}}?</h2>\r\n            </ng-template>\r\n            <div nz-col [nzSpan]=\"8\" class=\"mb-md\">\r\n                <div nz-form-item class=\"d-flex\">\r\n                    <div nz-form-label>\r\n                        <label for=\"name\">活动名称</label>\r\n                    </div>\r\n                    <div nz-form-control class=\"flex-1\">\r\n                        <nz-input [(ngModel)]=\"search.name\" name=\"name\" [nzSize]=\"'large'\" [nzPlaceHolder]=\"'请输入活动名称'\" nzId=\"name\"></nz-input>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div nz-col [nzSpan]=\"8\" class=\"mb-md\">\r\n                <div nz-form-item class=\"d-flex\">\r\n                    <div nz-form-label>\r\n                        <label for=\"startTime\">开始时间</label>\r\n                    </div>\r\n                    <div nz-form-control class=\"flex-1\">\r\n                        <nz-datepicker name=\"startTime\" [(ngModel)]=\"search.startTime\" [nzSize]=\"'large'\" nzId=\"startTime\" nzPlaceHolder=\"请输入开始时间\"></nz-datepicker>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div nz-col [nzSpan]=\"8\" class=\"mb-md\">\r\n                <div nz-form-item class=\"d-flex\">\r\n                    <div nz-form-label>\r\n                        <label for=\"endTime\">结束时间</label>\r\n                    </div>\r\n                    <div nz-form-control class=\"flex-1\">\r\n                        <nz-datepicker name=\"endTime\" [(ngModel)]=\"search.endTime\" nzId=\"endTime\" nzPlaceHolder=\"请输入结束时间\"></nz-datepicker>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div nz-col [nzSpan]=\"8\" class=\"mb-md\" [class.text-right]=\"'true'\">\r\n                <button nz-button type=\"submit\" [nzType]=\"'primary'\" [nzLoading]=\"loading\" [nzSize]=\"'large'\">查询</button>\r\n                <button nz-button type=\"reset\" (click)=\"refreshData()\" [nzSize]=\"'large'\" class=\"mx-sm\">重置</button>\r\n                <button nz-button (click)=\"createActivity()\" [nzType]=\"'primary'\" [nzSize]=\"'large'\">\r\n                    <i class=\"anticon anticon-plus\"></i>\r\n                    <span>新建</span>\r\n                </button>\r\n            </div>\r\n        </div>\r\n    </form>\r\n    <nz-table #nzTable [nzAjaxData]=\"acticities\" [nzTotal]=\"query.total\" [(nzPageIndex)]=\"query.pageIndex\" [(nzPageSize)]=\"query.pageSize\"\r\n        [nzLoading]=\"loading\" [nzShowSizeChanger]=\"true\" (nzPageIndexChange)=\"refreshData()\" (nzPageSizeChange)=\"refreshData()\">\r\n        <thead nz-thead>\r\n            <tr>\r\n                <th nz-th>\r\n                    <span>名称</span>\r\n                </th>\r\n                <th nz-th>\r\n                    <span>开始时间</span>\r\n                </th>\r\n                <th nz-th>\r\n                    <span>结束时间</span>\r\n                </th>\r\n                <th nz-th>\r\n                    <span>分类</span>\r\n                </th>\r\n                <!-- <th nz-th>\r\n                    <span>活动内容</span>\r\n                </th> -->\r\n                <th nz-th>\r\n                    <span>经理可存未完申请</span>\r\n                </th>\r\n                <th nz-th>\r\n                    <span>客户可存未完申请</span>\r\n                </th>\r\n                <th nz-th>\r\n                    <span>发布时间</span>\r\n                </th>\r\n                <th nz-th>\r\n                    <span>状态</span>\r\n                </th>\r\n                <th nz-th>\r\n                    <span>操作</span>\r\n                </th>\r\n            </tr>\r\n        </thead>\r\n        <tbody nz-tbody>\r\n            <tr nz-tbody-tr *ngFor=\"let activity of nzTable.data\">\r\n                <td nz-td>{{activity.name}}</td>\r\n                <td nz-td>{{activity.beginTime | _date}}</td>\r\n                <td nz-td>{{activity.endTime | _date}}</td>\r\n                <td nz-td>{{activity.activityType}}</td>\r\n                <!-- <td nz-td>{{activity.content}}</td> -->\r\n                <td nz-td>{{activity.mUnfinished}}</td>\r\n                <td nz-td>{{activity.rUnfinished}}</td>\r\n                <td nz-td>{{activity.publishTime | _date}}</td>\r\n                <td nz-td>{{activity.statusName}}</td>\r\n                <td nz-td>\r\n                    <a (click)=\"editActivity(activity)\">编辑</a>\r\n                    <span nz-table-divider></span>\r\n                    <a (click)=\"delete(activity,deleteContent)\">删除</a>\r\n                </td>\r\n            </tr>\r\n        </tbody>\r\n    </nz-table>\r\n</nz-card>"

/***/ }),

/***/ "../../../../../src/app/admin/markeeting-serve/activity/activity-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActivityListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_app_component_base__ = __webpack_require__("../../../../../src/app/shared/app-component-base.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_service_proxies_marketing_service_acticity_service__ = __webpack_require__("../../../../../src/app/shared/service-proxies/marketing-service/acticity-service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_service_proxies_entity__ = __webpack_require__("../../../../../src/app/shared/service-proxies/entity/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_service_proxies_marketing_service_activity_goods_service__ = __webpack_require__("../../../../../src/app/shared/service-proxies/marketing-service/activity-goods-service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng_zorro_antd__ = __webpack_require__("../../../../ng-zorro-antd/esm5/antd.js");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ActivityListComponent = /** @class */ (function (_super) {
    __extends(ActivityListComponent, _super);
    function ActivityListComponent(injector, ActivityService, router, ActivityGoodsService, modal) {
        var _this = _super.call(this, injector) || this;
        _this.ActivityService = ActivityService;
        _this.router = router;
        _this.ActivityGoodsService = ActivityGoodsService;
        _this.modal = modal;
        _this.acticities = [];
        _this.loading = false;
        _this.activityName = '';
        _this.search = { startTime: null, endTime: null };
        return _this;
    }
    ActivityListComponent.prototype.ngOnInit = function () {
        this.refreshData();
    };
    /**
     * 获取活动列表
     * @param reset 是否重置
     */
    ActivityListComponent.prototype.refreshData = function (reset) {
        var _this = this;
        if (reset === void 0) { reset = false; }
        if (reset) {
            this.query.pageIndex = 1;
        }
        this.loading = true;
        this.ActivityService.getAll(this.query.skipCount(), this.query.pageSize, this.getParmeter()).subscribe(function (result) {
            _this.loading = false;
            _this.acticities = result.items;
            _this.query.total = result.totalCount;
        });
    };
    /**
     * 获取查询条件
     */
    ActivityListComponent.prototype.getParmeter = function () {
        var arry = [];
        arry.push(__WEBPACK_IMPORTED_MODULE_3__shared_service_proxies_entity__["d" /* Parameter */].fromJS({ key: 'name', value: this.search.name }));
        arry.push(__WEBPACK_IMPORTED_MODULE_3__shared_service_proxies_entity__["d" /* Parameter */].fromJS({ key: 'startTime', value: this.dateFormat(this.search.startTime) }));
        arry.push(__WEBPACK_IMPORTED_MODULE_3__shared_service_proxies_entity__["d" /* Parameter */].fromJS({ key: 'endTime', value: this.dateFormat(this.search.endTime) }));
        return arry;
    };
    /**
     * 创建活动
     */
    ActivityListComponent.prototype.createActivity = function () {
        this.router.navigate(['admin/activity']);
    };
    /**
     * 修改活动
     */
    ActivityListComponent.prototype.editActivity = function (activity) {
        this.router.navigate(['admin/activity', activity.id]);
    };
    /**
     * 删除活动
     */
    ActivityListComponent.prototype.delete = function (acticity, TplContent) {
        var _this = this;
        this.activityName = acticity.name;
        this.modal.confirm({
            content: TplContent,
            okText: '确定',
            cancelText: '取消',
            onOk: function () {
                _this.ActivityService.delete(acticity.id).subscribe(function () {
                    _this.notify.info(_this.l('删除成功！'));
                    _this.refreshData();
                });
            }
        });
    };
    ActivityListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            moduleId: module.i,
            selector: 'activity-list',
            template: __webpack_require__("../../../../../src/app/admin/markeeting-serve/activity/activity-list.component.html"),
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injector"], __WEBPACK_IMPORTED_MODULE_2__shared_service_proxies_marketing_service_acticity_service__["a" /* ActivityServiceProxy */], __WEBPACK_IMPORTED_MODULE_4__angular_router__["h" /* Router */],
            __WEBPACK_IMPORTED_MODULE_5__shared_service_proxies_marketing_service_activity_goods_service__["a" /* ActivityGoodsServiceProxy */],
            __WEBPACK_IMPORTED_MODULE_6_ng_zorro_antd__["NzModalService"]])
    ], ActivityListComponent);
    return ActivityListComponent;
}(__WEBPACK_IMPORTED_MODULE_1__shared_app_component_base__["a" /* AppComponentBase */]));



/***/ }),

/***/ "../../../../../src/app/admin/markeeting-serve/activity/activity.component.html":
/***/ (function(module, exports) {

module.exports = "<!--component html goes here -->\r\n<!-- <div class=\"content__title\">\r\n    <h1>UEditor\r\n        <small>Dependencies\r\n            <a href=\"//github.com/cipchk/ngx-ueditor\" target=\"_blank\">ngx-ueditor</a>\r\n        </small>\r\n    </h1>\r\n</div> -->\r\n\r\n<!-- <nz-card>\r\n    <ueditor [(ngModel)]=\"html\"></ueditor>\r\n</nz-card> -->\r\n\r\n<form nz-form [formGroup]=\"formA\" id=\"frm_create_role\" (ngSubmit)=\"saveSub()\">\r\n    <nz-card [nzBordered]=\"false\" nzTitle=\"活动管理\">\r\n        <div nz-row [nzGutter]=\"16\">\r\n            <div nz-col nzMd=\"7\" nzSm=\"12\" nzXs=\"24\">\r\n                <div nz-form-item nz-row>\r\n                    <div nz-form-label nz-col>\r\n                        <label nz-form-item-required>名称</label>\r\n                    </div>\r\n                    <div nz-form-control nz-col nzHasFeedback [nzValidateStatus]=\"getFormControl('name')\">\r\n                        <nz-input style=\"height:32px;\" formControlName=\"name\" [(ngModel)]=\"acitivityDto.name\" [nzId]=\"'name'\"></nz-input>\r\n                        <div nz-form-explain *ngIf=\"getFormControl('name').dirty&&getFormControl('name').hasError('maxlength')\">字符长度小于等于200</div>\r\n                        <div nz-form-explain *ngIf=\"getFormControl('name').dirty&&getFormControl('name').hasError('required')\">请输入活动名称</div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div nz-col nzMd=\"7\" nzSm=\"12\" nzXs=\"24\">\r\n                <div nz-form-item nz-row>\r\n                    <div nz-form-label nz-col>\r\n                        <label>状态</label>\r\n                    </div>\r\n                    <div nz-form-control nz-col class=\"text-pink-light\">\r\n                        {{acitivityDto.statusName}}\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div nz-col nzMd=\"6\" nzSm=\"12\" nzXs=\"24\">\r\n                <div nz-form-item nz-row>\r\n                    <div nz-form-label nz-col>\r\n                        <label>发布时间</label>\r\n                    </div>\r\n                    <div nz-form-control nz-col class=\"text-pink-light\">\r\n                        {{publishTimes|_date}}\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <!-- <div nz-col nzMd=\"6\" nzSm=\"12\" nzXs=\"24\">\r\n            <div nz-form-item nz-row>\r\n                <div nz-form-label nz-col>\r\n                    <label></label>\r\n                </div>\r\n            </div>\r\n        </div> -->\r\n\r\n\r\n\r\n        <div nz-row [nzGutter]=\"16\">\r\n\r\n            <div nz-col nzMd=\"7\" nzSm=\"12\" nzXs=\"24\">\r\n                <div nz-form-item nz-row>\r\n                    <div nz-form-label nz-col>\r\n                        <label nz-form-item-required>开始时间</label>\r\n                    </div>\r\n                    <div nz-form-control nz-col nzHasFeedback [nzValidateStatus]=\"getFormControl('beginTime')\">\r\n                        <nz-datepicker style=\"height:32px;width:100%;\" [nzSize]=\"large\" formControlName=\"beginTime\" [(ngModel)]=\"acitivityDto.beginTime\"></nz-datepicker>\r\n                        <div nz-form-explain *ngIf=\"getFormControl('beginTime').dirty&&getFormControl('beginTime').hasError('required')\">请输入活动开始时间</div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n            <div nz-col nzMd=\"7\" nzSm=\"12\" nzXs=\"24\">\r\n                <div nz-form-item nz-row>\r\n                    <div nz-form-label nz-col>\r\n                        <label nz-form-item-required>结束时间</label>\r\n                    </div>\r\n                    <div nz-form-control nz-col nzHasFeedback [nzValidateStatus]=\"getFormControl('endTime')\">\r\n                        <nz-datepicker style=\"width:100%;\" formControlName=\"endTime\" [(ngModel)]=\"acitivityDto.endTime\" ></nz-datepicker>\r\n                        <div nz-form-explain *ngIf=\"getFormControl('endTime').dirty&&getFormControl('endTime').hasError('required')\">请输入活动结束时间</div>\r\n                    </div>\r\n\r\n                </div>\r\n            </div>\r\n\r\n            <div nz-col nzMd=\"6\" nzSm=\"12\" nzXs=\"24\">\r\n                <div nz-form-item nz-row>\r\n                    <div nz-form-label nz-col>\r\n                        <label nz-form-item-required>分类</label>\r\n                    </div>\r\n                    <div nz-form-control nz-col nzHasFeedback [nzValidateStatus]=\"getFormControl('activityType')\">\r\n                        <nz-select formControlName=\"activityType\" [nzPlaceHolder]=\"'活动分类'\" [(ngModel)]=\"acitivityDto.activityType\" [nzShowSearch]=\"true\" nzSize=\"large\">\r\n                            <nz-option *ngFor=\"let i of AcTypes\" [nzLabel]=\"i.text\" [nzValue]=\"i.value\">\r\n                            </nz-option>\r\n                        </nz-select>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n        </div>\r\n\r\n        <div nz-row [nzGutter]=\"16\">\r\n\r\n            <div nz-col nzMd=\"7\" nzSm=\"12\" nzXs=\"24\">\r\n                <div nz-form-item nz-row>\r\n                    <div nz-form-label nz-col>\r\n                    </div>\r\n                    <div nz-form-control nz-col nzHasFeedback>\r\n                        <label>未完用烟申请限制</label>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n            <div nz-col nzMd=\"7\" nzSm=\"12\" nzXs=\"24\">\r\n                <div nz-form-item nz-row>\r\n                    <div nz-form-label nz-col>\r\n                        <label>客户经理</label>\r\n                    </div>\r\n                    <div nz-form-control nz-col nzHasFeedback [nzValidateStatus]=\"getFormControl('mUnfinished')\">\r\n                        <nz-input-number style=\"width:100%;\" [nzSize]=\"large\" [nzStep]=\"1\" [nzMin]=\"0\" [nzMax]=\"9999\" formControlName=\"mUnfinished\"\r\n                            [(ngModel)]=\"acitivityDto.mUnfinished\"></nz-input-number>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n            <div nz-col nzMd=\"6\" nzSm=\"12\" nzXs=\"24\">\r\n                <div nz-form-item nz-row>\r\n                    <div nz-form-label nz-col>\r\n                        <label>零售客户</label>\r\n                    </div>\r\n                    <div nz-form-control nz-col nzHasFeedback [nzValidateStatus]=\"getFormControl('rUnfinished')\">\r\n                        <nz-input-number style=\"width:100%;\" [nzSize]=\"large\" [nzStep]=\"1\" [nzMin]=\"0\" [nzMax]=\"9999\" formControlName=\"rUnfinished\"\r\n                            [(ngModel)]=\"acitivityDto.rUnfinished\"></nz-input-number>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <div nz-row [nzGutter]=\"16\">\r\n            <div nz-form-label nz-col>\r\n                <label nz-form-item-required>内容</label>\r\n            </div>\r\n            <div nz-form-control nz-col nzHasFeedback [nzValidateStatus]=\"getFormControl('content')\">\r\n                <nz-input nzType=\"textarea\" formControlName=\"content\" [(ngModel)]=\"acitivityDto.content\" [nzId]=\"'content'\"></nz-input>\r\n                <div nz-form-explain *ngIf=\"getFormControl('content').dirty&&getFormControl('content').hasError('required')\">请输入活动内容</div>\r\n            </div>\r\n\r\n        </div>\r\n\r\n    </nz-card>\r\n    <nz-card *ngIf=\"isGoodabled\" [nzBordered]=\"false\" nzTitle=\"商品管理\">\r\n        <nz-table formArrayName=\"items\" [nzDataSource]=\"items.value\" [nzIsPagination]=\"false\">\r\n            <thead nz-thead>\r\n                <tr>\r\n                    <th nz-th>商品规格</th>\r\n                    <th nz-th>单次申请最小限制</th>\r\n                    <th nz-th>单次申请最大限制</th>\r\n                    <th nz-th>优惠说明</th>\r\n                    <th nz-th>操作</th>\r\n                </tr>\r\n            </thead>\r\n            <tbody nz-tbody>\r\n                <tr nz-tbody-tr *ngFor=\"let item of items.controls; let i = index\" [formGroupName]=\"i\">\r\n                    <td nz-td>\r\n                        <span *ngIf=\"editIndex!==i\">{{items.value[i].specification}}</span>\r\n                        <span *ngIf=\"editIndex===i\" nz-form-control [nzValidateStatus]=\"item.controls.specification\">\r\n                            <label nz-form-item-required></label>\r\n                            <nz-input style=\"width:85%;\" formControlName=\"specification\" nzPlaceHolder=\"商品规格\" nzSize=\"large\"></nz-input>\r\n                            <div nz-form-explain *ngIf=\"item.controls.specification.dirty&&item.controls.specification.hasError('required')\">规格不能为空</div>\r\n                        </span>\r\n                    </td>\r\n                    <td nz-td>\r\n                        <span *ngIf=\"editIndex!==i\">{{items.value[i].minNum}}</span>\r\n                        <span *ngIf=\"editIndex===i\" nz-form-control [nzValidateStatus]=\"item.controls.minNum\">\r\n                            <label nz-form-item-required></label>\r\n                            <nz-input-number [nzMin]=\"0\" style=\"width:85%;\" formControlName=\"minNum\" nzPlaceHolder=\"单次申请最小限制\" nzSize=\"large\"></nz-input-number>\r\n                        </span>\r\n                    </td>\r\n                    <td nz-td>\r\n                        <span *ngIf=\"editIndex!==i\">{{items.value[i].maxNum}}</span>\r\n                        <span *ngIf=\"editIndex===i\" nz-form-control [nzValidateStatus]=\"item.controls.maxNum\">\r\n                            <label nz-form-item-required></label>\r\n                            <nz-input-number [nzMin]=\"0\" style=\"width:85%;\" formControlName=\"maxNum\" nzPlaceHolder=\"单次申请最大限制\" nzSize=\"large\"></nz-input-number>\r\n                        </span>\r\n                    </td>\r\n                    <td nz-td>\r\n                        <span *ngIf=\"editIndex!==i\">{{items.value[i].discountDesc}}</span>\r\n                        <span *ngIf=\"editIndex===i\" nz-form-control [nzValidateStatus]=\"item.controls.discountDesc\">\r\n                            <nz-input formControlName=\"discountDesc\" nzPlaceHolder=\"优惠说明\" nzSize=\"large\"></nz-input>\r\n                        </span>\r\n                    </td>\r\n                    <!-- <td nz-td style=\"display:none\">\r\n                        <span *ngIf=\"editIndex!==i\">{{items.value[i].id}}</span>\r\n                        <span *ngIf=\"editIndex===i\" nz-form-control [nzValidateStatus]=\"item.controls.id\">\r\n                            <nz-input formControlName=\"id\"  nzPlaceHolder=\"商品id\" nzSize=\"large\"></nz-input>\r\n                        </span>\r\n                    </td> -->\r\n                    <td nz-td>\r\n                        <span *ngIf=\"editIndex!==i\">\r\n                            <a (click)=\"edit(i)\">编辑</a>\r\n                            <span nz-table-divider></span>\r\n                            <nz-popconfirm (nzOnConfirm)=\"delete(i,items.value[i].id)\" [nzTitle]=\"'是否要删除'+items.value[i].specification+'?'\">\r\n                                <a nz-popconfirm>删除</a>\r\n                            </nz-popconfirm>\r\n                        </span>\r\n                        <span *ngIf=\"editIndex===i\">\r\n                            <a (click)=\"save(i)\">保存</a>\r\n                            <span nz-table-divider></span>\r\n                            <nz-popconfirm (nzOnConfirm)=\"cancel(i)\" [nzTitle]=\"'是否要取消操作？'\">\r\n                                <a nz-popconfirm>取消</a>\r\n                            </nz-popconfirm>\r\n                        </span>\r\n                    </td>\r\n                </tr>\r\n            </tbody>\r\n        </nz-table>\r\n        <button *ngIf=\"editIndex===-1\" nz-button [nzType]=\"'dashed'\" [nzSize]=\"'large'\" (click)=\"add()\" class=\"ant-btn__block mt-md\">\r\n            <i class=\"anticon anticon-plus\"></i>\r\n            <span>新增成员</span>\r\n        </button>\r\n    </nz-card>\r\n\r\n    <!-- <button *ngIf=\"isSave\" nz-button [nzType]=\"'primary'\" [nzSize]=\"'large'\" type=\"submit\" [nzLoading]=\"isConfirmLoading\">\r\n        {{l(\"保存\")}}\r\n    </button>\r\n    <button *ngIf=\"isPulish\" nz-button [nzType]=\"'primary'\" (click)=\"pulish(modelContent)\" [nzSize]=\"'large'\" [nzLoading]=\"isConfirmLoading\">\r\n        {{l(\"发布\")}}\r\n    </button> -->\r\n    <footer-toolbar errorCollect>\r\n            <button *ngIf=\"isSave\" nz-button [nzType]=\"'primary'\" [nzSize]=\"'large'\" type=\"submit\" [nzLoading]=\"isConfirmLoading\">\r\n                {{l(\"保存\")}}\r\n            </button>\r\n            <button *ngIf=\"isPulish\" nz-button [nzType]=\"'primary'\" (click)=\"pulish(modelContent)\" [nzSize]=\"'large'\" [nzLoading]=\"isConfirmLoading\">\r\n                {{l(\"发布\")}}\r\n            </button>\r\n        </footer-toolbar>\r\n</form>\r\n\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/admin/markeeting-serve/activity/activity.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActivityComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_app_component_base__ = __webpack_require__("../../../../../src/app/shared/app-component-base.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_service_proxies_entity_acitivity__ = __webpack_require__("../../../../../src/app/shared/service-proxies/entity/acitivity.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_service_proxies_marketing_service_activity_goods_service__ = __webpack_require__("../../../../../src/app/shared/service-proxies/marketing-service/activity-goods-service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_service_proxies_entity__ = __webpack_require__("../../../../../src/app/shared/service-proxies/entity/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_service_proxies_marketing_service_acticity_service__ = __webpack_require__("../../../../../src/app/shared/service-proxies/marketing-service/acticity-service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng_zorro_antd__ = __webpack_require__("../../../../ng-zorro-antd/esm5/antd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__shared_service_proxies_entity_activity_goods__ = __webpack_require__("../../../../../src/app/shared/service-proxies/entity/activity-goods.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var ActivityComponent = /** @class */ (function (_super) {
    __extends(ActivityComponent, _super);
    function ActivityComponent(injector, activityService, fb, activityGoodsService, modal, router) {
        var _this = _super.call(this, injector) || this;
        _this.activityService = activityService;
        _this.fb = fb;
        _this.activityGoodsService = activityGoodsService;
        _this.modal = modal;
        _this.router = router;
        _this.acitivityDto = new __WEBPACK_IMPORTED_MODULE_2__shared_service_proxies_entity_acitivity__["a" /* Activity */];
        _this.goodes = [];
        _this.good = new __WEBPACK_IMPORTED_MODULE_8__shared_service_proxies_entity_activity_goods__["a" /* ActivityGoods */];
        _this.html = '';
        _this.searchName = '';
        _this.loading = false;
        _this.AcTypes = [
            { text: '办事用烟', value: 1 }
        ];
        _this.activityId = '';
        //按钮是否可见
        _this.isSave = true;
        _this.isPulish = false;
        _this.isGoodabled = false;
        _this.isConfirmLoading = false;
        _this.isAlert = false;
        //行内编辑
        _this.editIndex = -1;
        _this.editObj = {};
        _this.id = '';
        _this.id = _this.router.snapshot.params['id'];
        return _this;
    }
    /**
     * 页面初始加载
     */
    ActivityComponent.prototype.ngOnInit = function () {
        this.formA = this.fb.group({
            name: [null, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].maxLength(200)])],
            beginTime: [null, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].required])],
            endTime: [null, [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].required]],
            activityType: [null, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].required])],
            mUnfinished: [null],
            rUnfinished: [null],
            content: [null, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].required])],
            status: [null],
            publishTime: [null],
            items: this.fb.array([])
        });
        this.getSingleActivity();
    };
    //#region 活动
    /**
     *
     * @param name
     */
    ActivityComponent.prototype.getFormControl = function (name) {
        return this.formA.controls[name];
    };
    /**
     * 获取单个活动信息
     */
    ActivityComponent.prototype.getSingleActivity = function () {
        var _this = this;
        this.activityService.get().subscribe(function (result) {
            _this.acitivityDto = result;
            _this.publishTimes = _this.acitivityDto.publishTime;
            // this.publishTimes = this.dateFormat(this.acitivityDto.publishTime);
            _this.activityId = result.id;
            if (_this.acitivityDto.id) {
                _this.isGoodabled = true;
                _this.isSave = false;
                _this.isPulish = true;
            }
            else {
                //活动活动状态
                _this.acitivityDto.status = 1;
                _this.acitivityDto.statusName = '草稿';
                //按钮是否可见
                _this.isSave = true;
                _this.isPulish = false;
                _this.acitivityDto.mUnfinished = 15;
                _this.acitivityDto.rUnfinished = 6;
            }
            if (result.id) {
                _this.refreshData();
            }
        });
    };
    /**
     * 保存活动
     */
    ActivityComponent.prototype.saveSub = function () {
        for (var i in this.formA.controls) {
            this.formA.controls[i].markAsDirty();
        }
        if (this.formA.valid) {
            this.isConfirmLoading = true;
            if (!this.acitivityDto.id) {
                //当新增活动时将活动状态设为草稿
                this.acitivityDto.status = 1;
            }
            this.saveActivity();
        }
    };
    /**
     * 活动保存
     */
    ActivityComponent.prototype.saveActivity = function () {
        var _this = this;
        this.activityService.update(this.acitivityDto)
            .finally(function () { _this.isConfirmLoading = false; })
            .subscribe(function (result) {
            _this.acitivityDto = result;
            _this.notify.info(_this.l('保存成功！'));
            _this.isGoodabled = true;
        });
    };
    Object.defineProperty(ActivityComponent.prototype, "items", {
        //#endregion
        //#region 活动商品
        get: function () { return this.formA.controls.items; },
        enumerable: true,
        configurable: true
    });
    /**
     * 获取活动商品信息
     */
    ActivityComponent.prototype.refreshData = function () {
        var _this = this;
        this.loading = true;
        this.activityGoodsService.getAll(this.query.skipCount(), this.query.pageSize, this.getParameter()).subscribe(function (result) {
            _this.goodes = result.items;
            _this.loading = false;
            _this.query.total = result.totalCount;
            _this.goodes.forEach(function (i) {
                //创建formbuilder
                var field = _this.createFormGoods();
                //给formbuilder赋值
                field.patchValue(i);
                //将有值得formbuilder付给items
                _this.items.push(field);
            });
        });
    };
    ActivityComponent.prototype.createFormGoods = function () {
        return this.fb.group({
            specification: [null, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].maxLength(200)])],
            minNum: [null, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].min(0)])],
            maxNum: [null, [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].min(0)])]],
            discountDesc: [null],
            id: [null],
        });
    };
    ActivityComponent.prototype.getParameter = function () {
        var arry = [];
        arry.push(__WEBPACK_IMPORTED_MODULE_5__shared_service_proxies_entity__["d" /* Parameter */].fromJS({ key: 'AvtivityId', value: this.acitivityDto.id }));
        arry.push(__WEBPACK_IMPORTED_MODULE_5__shared_service_proxies_entity__["d" /* Parameter */].fromJS({ key: 'SearchName', value: this.searchName }));
        return arry;
    };
    /**
     * 新增
     * @param i
     */
    ActivityComponent.prototype.add = function () {
        this.items.push(this.createFormGoods());
        var index = this.items.length - 1;
        this.edit(index);
        // this.items.at(index).value.minNum = 10;
    };
    /**
     * 编辑
     * @param i
     */
    ActivityComponent.prototype.edit = function (index) {
        //editIndex用于判断是否新增
        if (this.editIndex !== -1 && this.editObj) {
            this.items.at(this.editIndex).patchValue(this.editObj);
        }
        //editObj用于当编辑取消时将它付给编辑的行
        this.editObj = __assign({}, this.items.at(index).value);
        this.editIndex = index;
    };
    /**
     * 保存
     * @param index
     */
    ActivityComponent.prototype.save = function (index) {
        var _this = this;
        this.items.at(index).markAsDirty();
        if (this.items.at(index).invalid)
            return;
        this.editIndex = -1;
        //保存入数据库
        this.itemToGood(index);
        this.activityGoodsService.update(this.good).subscribe(function (result) {
            //将新增的实体添加到实体集合中
            _this.goodes.push(result);
            //将新增的实体加入到form中（主要是添加id）
            _this.items.at(index).patchValue(result);
            _this.notify.info(_this.l('保存成功！'));
            _this.good = new __WEBPACK_IMPORTED_MODULE_8__shared_service_proxies_entity_activity_goods__["a" /* ActivityGoods */]();
        });
    };
    /**
     * 删除
     * @param i
     */
    ActivityComponent.prototype.delete = function (index, id) {
        var _this = this;
        if (id) {
            this.activityGoodsService.delete(this.items.at(index).value.id).subscribe(function () {
                _this.notify.info(_this.l('删除成功！'));
                _this.items.removeAt(index);
                for (var i = 0; i < _this.goodes.length; i++) {
                    if (_this.goodes[i].id == id) {
                        _this.goodes.splice(i, 1);
                    }
                }
            });
        }
        else {
            this.items.removeAt(index);
        }
    };
    /**
     * 取消
     * @param i
     */
    ActivityComponent.prototype.cancel = function (index) {
        //当id为空的时候就删除新建的一行（新建取消）
        //当id不为空的时候就把原来的值付给当前行（编辑取消）
        if (!this.items.at(index).value.id) {
            this.delete(index);
        }
        else {
            this.items.at(index).patchValue(this.editObj);
        }
        this.editIndex = -1;
    };
    //#endregion
    /**
     * 发布(增加下架验证)
     */
    ActivityComponent.prototype.pulish = function (contentTpl) {
        if (this.goodes.length > 0) {
            this.acitivityDto.status = 2;
            this.acitivityDto.publishTime = new Date;
            this.saveSub();
        }
        else {
            this.modal.warning({
                title: '请先添加商品！'
            });
        }
    };
    /**
     * 将页面的数据转换到good中
     * @param index
     */
    ActivityComponent.prototype.itemToGood = function (index) {
        var _this = this;
        this.good = new __WEBPACK_IMPORTED_MODULE_8__shared_service_proxies_entity_activity_goods__["a" /* ActivityGoods */]();
        this.good.activityId = this.acitivityDto.id;
        if (this.items.at(index).value.id) {
            this.goodes.forEach(function (i) {
                if (i.id == _this.items.at(index).value.id) {
                    _this.good = i;
                }
            });
        }
        //将form中输入的数据放入实体中
        this.good.specification = this.items.at(index).value.specification;
        this.good.minNum = this.items.at(index).value.minNum;
        this.good.maxNum = this.items.at(index).value.maxNum;
        this.good.discountDesc = this.items.at(index).value.discountDesc;
    };
    ActivityComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            moduleId: module.i,
            selector: 'activity',
            template: __webpack_require__("../../../../../src/app/admin/markeeting-serve/activity/activity.component.html"),
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injector"], __WEBPACK_IMPORTED_MODULE_6__shared_service_proxies_marketing_service_acticity_service__["a" /* ActivityServiceProxy */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormBuilder"], __WEBPACK_IMPORTED_MODULE_4__shared_service_proxies_marketing_service_activity_goods_service__["a" /* ActivityGoodsServiceProxy */],
            __WEBPACK_IMPORTED_MODULE_7_ng_zorro_antd__["NzModalService"], __WEBPACK_IMPORTED_MODULE_9__angular_router__["a" /* ActivatedRoute */]])
    ], ActivityComponent);
    return ActivityComponent;
}(__WEBPACK_IMPORTED_MODULE_1__shared_app_component_base__["a" /* AppComponentBase */]));



/***/ }),

/***/ "../../../../../src/app/admin/markeeting-serve/employees/employees.component.html":
/***/ (function(module, exports) {

module.exports = "<pro-header></pro-header>\r\n<nz-card [nzBordered]=\"false\">\r\n    <form nz-form (ngSubmit)=\"refreshData()\" [nzLayout]=\"'inline'\">\r\n        <div nz-row [nzGutter]=\"24\">\r\n            <ng-template #deleteContent>\r\n                <h2>是否删除员工{{employeeName}}?</h2>\r\n            </ng-template>\r\n            <div nz-col [nzSpan]=\"8\" class=\"mb-md\">\r\n                <div nz-form-item class=\"d-flex\">\r\n                    <div nz-form-control class=\"flex-1\">\r\n                        <nz-input [(ngModel)]=\"q.search\" name=\"search\" [nzSize]=\"'large'\" [nzPlaceHolder]=\"'请输入员工名或员工编码'\" nzId=\"search\"></nz-input>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div nz-col [nzSpan]=\"8\" class=\"mb-md\" [class.text-right]=\"'true'\">\r\n                <button nz-button type=\"submit\" [nzType]=\"'primary'\" [nzLoading]=\"loading\" [nzSize]=\"'large'\">查询</button>\r\n                <button nz-button type=\"reset\" (click)=\"refreshData()\" [nzSize]=\"'large'\" class=\"mx-sm\">重置</button>\r\n                <button nz-button (click)=\"createEmployee()\" [nzType]=\"'primary'\" [nzSize]=\"'large'\">\r\n                    <i class=\"anticon anticon-plus\"></i>\r\n                    <span>新建</span>\r\n                </button>\r\n            </div>\r\n        </div>\r\n    </form>\r\n    <nz-table #nzTable [nzAjaxData]=\"employees\" [nzTotal]=\"q.total\" [(nzPageIndex)]=\"q.pi\" [(nzPageSize)]=\"q.ps\" [nzLoading]=\"loading\"\r\n        [nzShowSizeChanger]=\"true\" (nzPageIndexChange)=\"refreshData()\" (nzPageSizeChange)=\"refreshData()\">\r\n        <thead nz-thead>\r\n            <tr>\r\n                <th nz-th>\r\n                    <span>员工编码</span>\r\n                </th>\r\n                <th nz-th>\r\n                    <span>姓名</span>\r\n                </th>\r\n                <th nz-th>\r\n                    <span>职位</span>\r\n                </th>\r\n                <th nz-th>\r\n                    <span>电话</span>\r\n                </th>\r\n                <th nz-th>\r\n                    <span>所属公司</span>\r\n                </th>\r\n                <th nz-th>\r\n                    <span>所属市场部</span>\r\n                </th>\r\n                <th nz-th>\r\n                    <span>启用</span>\r\n                </th>\r\n                <th nz-th>\r\n                    <span>操作</span>\r\n                </th>\r\n            </tr>\r\n        </thead>\r\n        <tbody nz-tbody>\r\n            <tr nz-tbody-tr *ngFor=\"let employee of nzTable.data\">\r\n                <td nz-td>{{employee.code}}</td>\r\n                <td nz-td>{{employee.name}}</td>\r\n                <td nz-td>{{employee.positionName}}</td>\r\n                <td nz-td>{{employee.phone}}</td>\r\n                <td nz-td>{{employee.company}}</td>\r\n                <td nz-td>{{employee.department}}</td>\r\n                <td nz-td>\r\n                    <nz-badge [nzStatus]=\"employee.activeType\" [nzText]=\"employee.activeText\"></nz-badge>\r\n                </td>\r\n                <td nz-td>\r\n                    <a (click)=\"editEmployee(employee)\">编辑</a>\r\n                    <span nz-table-divider></span>\r\n                    <a (click)=\"delete(employee,deleteContent)\">删除</a>\r\n                </td>\r\n            </tr>\r\n        </tbody>\r\n    </nz-table>\r\n</nz-card>\r\n<!-- <edit-tenant-modal #editTenantModal (modalSave)=\"refreshData()\"></edit-tenant-modal> -->\r\n<!-- <create-employee-modal #createEmployeeModal (modalSave)=\"refreshData()\"></create-employee-modal> -->"

/***/ }),

/***/ "../../../../../src/app/admin/markeeting-serve/employees/employees.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmployeesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_app_component_base__ = __webpack_require__("../../../../../src/app/shared/app-component-base.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_service_proxies_service_proxies__ = __webpack_require__("../../../../../src/app/shared/service-proxies/service-proxies.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng_zorro_antd__ = __webpack_require__("../../../../ng-zorro-antd/esm5/antd.js");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EmployeesComponent = /** @class */ (function (_super) {
    __extends(EmployeesComponent, _super);
    function EmployeesComponent(injector, employeeService, modal) {
        var _this = _super.call(this, injector) || this;
        _this.employeeService = employeeService;
        _this.modal = modal;
        _this.q = {
            pi: 1,
            ps: 10,
            total: 0,
            sorter: '',
            status: -1,
            statusList: [],
            search: ''
        };
        _this.loading = false;
        _this.status = [
            { text: '启用', value: false, type: 'success' },
            { text: '禁用', value: false, type: 'default' },
        ];
        _this.positions = [
            { text: '零售客户', value: 1 },
            { text: '客户经理', value: 2 },
            { text: '营销人员', value: 3 },
            { text: '消费者', value: 4 },
            { text: '取消关注', value: 5 },
        ];
        _this.employees = [];
        //用于删除框的员工名称显示
        _this.employeeName = '';
        return _this;
    }
    /**
     *
     */
    EmployeesComponent.prototype.ngOnInit = function () {
        this.refreshData();
    };
    /**
     * 分页获取员工信息
     * @param reset 是否刷新页面
     */
    EmployeesComponent.prototype.refreshData = function (reset) {
        var _this = this;
        if (reset === void 0) { reset = false; }
        if (reset) {
            this.q.pi = 1;
        }
        this.loading = true;
        this.employeeService.getAll((this.q.pi - 1) * this.q.ps, this.q.ps, this.q.search).subscribe(function (result) {
            _this.loading = false;
            var status = 0;
            _this.employees = result.items.map(function (i) {
                if (i.isAction) {
                    status = 0;
                }
                else {
                    status = 0;
                }
                var statusItem = _this.status[status];
                i.activeText = statusItem.text;
                i.activeType = statusItem.type;
                i.positionName = _this.positions[i.position - 1].text;
                return i;
            });
        });
    };
    /**
     * 删除单个员工
     * @param employee 员工实体
     * @param contentTpl 弹框id
     */
    EmployeesComponent.prototype.delete = function (employee, contentTpl) {
        var _this = this;
        this.employeeName = employee.name;
        this.modal.confirm({
            content: contentTpl,
            okText: '是',
            cancelText: '否',
            onOk: function () {
                _this.employeeService.delete(employee.id).subscribe(function () {
                    _this.notify.info(_this.l('删除成功！'));
                    _this.refreshData();
                });
            }
        });
    };
    /**
     * 打开新建员工模态框
     */
    EmployeesComponent.prototype.createEmployee = function () {
    };
    /**
     * 打开编辑员工模态框
     */
    EmployeesComponent.prototype.editEmployee = function () {
    };
    EmployeesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            moduleId: module.i,
            selector: 'employees',
            template: __webpack_require__("../../../../../src/app/admin/markeeting-serve/employees/employees.component.html"),
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injector"], __WEBPACK_IMPORTED_MODULE_2__shared_service_proxies_service_proxies__["k" /* EmployeesServiceProxy */], __WEBPACK_IMPORTED_MODULE_3_ng_zorro_antd__["NzModalService"]])
    ], EmployeesComponent);
    return EmployeesComponent;
}(__WEBPACK_IMPORTED_MODULE_1__shared_app_component_base__["a" /* AppComponentBase */]));



/***/ }),

/***/ "../../../../../src/app/admin/marketing/activity-form-detail/activity-form-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<pro-header [title]=\"formTitle\">\r\n    <ng-template #logo>\r\n        <img src=\"https://gw.alipayobjects.com/zos/rmsportal/nxkuOJlFJuAUhzlMTCEe.png\">\r\n    </ng-template>\r\n    <ng-template *ngIf=\"form\" #action>\r\n        <button nz-button [nzSize]=\"'large'\" *ngIf=\"form.status == 1 || form.status == 2 || form.status == 3\">取消</button>\r\n        <button nz-button [nzSize]=\"'large'\" *ngIf=\"form.status == 1 || form.status == 2\">拒绝</button>\r\n        <button nz-button [nzType]=\"'primary'\" *ngIf=\"form.status == 1\" [nzSize]=\"'large'\">初审通过</button>\r\n        <button nz-button [nzType]=\"'primary'\" *ngIf=\"form.status == 2\" [nzSize]=\"'large'\">资料回传审核通过</button>\r\n    </ng-template>\r\n    <ng-template style=\"display:none; width:0px;\" #extra></ng-template>\r\n    <ng-template #content>\r\n        <desc-list size=\"small\" col=\"3\" *ngIf=\"form\">\r\n            <desc-list-item term=\"活动名称\">{{form.activityName}}</desc-list-item>\r\n            <desc-list-item term=\"零售客户\">{{form.retailerName}}</desc-list-item>\r\n            <desc-list-item term=\"客户经理\">{{form.managerName}}</desc-list-item>\r\n            <desc-list-item term=\"申请商品规格\">{{form.goodsSpecification}}</desc-list-item>\r\n            <desc-list-item term=\"申请数量\">{{form.num}}</desc-list-item>\r\n            <desc-list-item term=\"申请人\">{{form.creationUser}}</desc-list-item>\r\n            <desc-list-item term=\"申请时间\">{{form.creationTime | _date}}</desc-list-item>\r\n            <desc-list-item term=\"申请理由\">{{form.reason}}</desc-list-item>\r\n        </desc-list>\r\n    </ng-template>\r\n    <ng-template #tab>\r\n        <nz-tabset [nzSize]=\"'default'\">\r\n            <nz-tab>\r\n                <ng-template #nzTabHeading>详情</ng-template>\r\n                <span>\r\n                    <nz-card class=\"mb-lg\">\r\n                        <nz-steps [nzCurrent]=\"1\">\r\n                            <nz-step [nzTitle]=\"'创建项目'\" [nzDescription]=\"createDesc\">\r\n                                <ng-template #createDesc>\r\n                                    <p class=\"my-sm\">曲丽丽\r\n                                    </p>\r\n                                    <p>2016-12-12 12:32</p>\r\n                                </ng-template>\r\n                            </nz-step>\r\n                            <nz-step [nzTitle]=\"'部门初审'\" [nzDescription]=\"checkedDesc\">\r\n                                <ng-template #checkedDesc>\r\n                                    <p class=\"my-sm\">周毛毛\r\n                                    </p>\r\n                                    <a (click)=\"msg.success('click')\">催一下</a>\r\n                                </ng-template>\r\n                            </nz-step>\r\n                            <nz-step [nzTitle]=\"'财务复核'\"></nz-step>\r\n                            <nz-step [nzTitle]=\"'完成'\"></nz-step>\r\n                        </nz-steps>\r\n                        <div class=\"steps-content\"></div>\r\n                    </nz-card>\r\n                    <nz-card class=\"mb-lg\">\r\n                        <ng-template #title>\r\n                            宴席信息\r\n                        </ng-template>\r\n                        <ng-template #extra>\r\n                            <a>添加/修改</a>\r\n                        </ng-template>\r\n                        <ng-template #body>\r\n                            <desc-list class=\"mb-lg\" *ngIf=\"banquet\">\r\n                                <desc-list-item term=\"区县\">{{banquet.area}}</desc-list-item>\r\n                                <desc-list-item term=\"责任人\">{{banquet.responsible}}</desc-list-item>\r\n                                <desc-list-item term=\"活动执行人\">{{banquet.executor}}</desc-list-item>\r\n                                <desc-list-item term=\"宴席时间\">{{banquet.banquetTime}}</desc-list-item>\r\n                                <desc-list-item term=\"宴席地点\">{{banquet.position}}</desc-list-item>\r\n                                <desc-list-item term=\"现场人数\">{{banquet.num}}</desc-list-item>\r\n                                <desc-list-item term=\"现场效果简述\">{{banquet.desc}}</desc-list-item>\r\n                                <desc-list-item term=\"上传时间\">{{banquet.creationTime | _date}}</desc-list-item>\r\n                                <desc-list-item term=\"上传人\">{{banquet.userName}}</desc-list-item>\r\n                            </desc-list>\r\n                            <h4 class=\"mb-md\">现场照片</h4>\r\n                            <nz-list [nzLoading]=\"loading\" class=\"imgList\" [nzDataSource]=\"list\" [nzGrid]=\"{gutter: 24, lg: 6, md: 8, sm: 12, xs: 24 }\">\r\n                                <ng-template #item let-item>\r\n                                    <nz-list-item>\r\n                                        <img alt=\"{{item.title}}\" src=\"{{item.cover}}\">\r\n                                    </nz-list-item>\r\n                                </ng-template>\r\n                            </nz-list>\r\n                        </ng-template>\r\n                    </nz-card>\r\n                </span>\r\n            </nz-tab>\r\n            <nz-tab>\r\n                <ng-template #nzTabHeading>收货信息</ng-template>\r\n                <nz-card class=\"mb-lg\">\r\n                    <ng-template #title>\r\n                        邮寄地址\r\n                    </ng-template>\r\n                    <ng-template #extra>\r\n                        <a>修改</a>\r\n                    </ng-template>\r\n                    <ng-template #body>\r\n                        <desc-list class=\"mb-lg\" *ngIf=\"delivery\">\r\n                            <desc-list-item term=\"消费者姓名\">{{delivery.userName}}</desc-list-item>\r\n                            <desc-list-item term=\"邮寄地址\">{{delivery.address}}</desc-list-item>\r\n                            <desc-list-item term=\"联系电话\">{{delivery.phone}}</desc-list-item>\r\n                        </desc-list>\r\n                    </ng-template>\r\n                </nz-card>\r\n            </nz-tab>\r\n        </nz-tabset>\r\n    </ng-template>\r\n</pro-header>"

/***/ }),

/***/ "../../../../../src/app/admin/marketing/activity-form-detail/activity-form-detail.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".imgList img {\n  margin-left: 5px;\n  margin-right: 5px;\n  margin-bottom: 5px;\n  width: 100%; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/admin/marketing/activity-form-detail/activity-form-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActivityFormDetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng_zorro_antd__ = __webpack_require__("../../../../ng-zorro-antd/esm5/antd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__delon_theme__ = __webpack_require__("../../../../@delon/theme/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_service_proxies_entity__ = __webpack_require__("../../../../../src/app/shared/service-proxies/entity/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_service_proxies_marketing_service_activity_form_service__ = __webpack_require__("../../../../../src/app/shared/service-proxies/marketing-service/activity-form-service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_service_proxies_marketing_service__ = __webpack_require__("../../../../../src/app/shared/service-proxies/marketing-service/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ActivityFormDetailComponent = /** @class */ (function () {
    function ActivityFormDetailComponent(msg, http, route, activityFormService, activityBanquetService, activityDeliveryService) {
        this.msg = msg;
        this.http = http;
        this.route = route;
        this.activityFormService = activityFormService;
        this.activityBanquetService = activityBanquetService;
        this.activityDeliveryService = activityDeliveryService;
        this.list = [];
        this.loading = true;
        this.formId = this.route.snapshot.params['id'];
        //alert( this.formId);
    }
    ActivityFormDetailComponent.prototype.ngOnInit = function () {
        this.getData();
    };
    ActivityFormDetailComponent.prototype.getData = function () {
        var _this = this;
        //表单
        this.activityFormService.get(this.formId).subscribe(function (result) {
            _this.form = result;
            _this.formTitle = '单号：' + _this.form.formCode + ' 状态：' + _this.form.statusName;
        });
        //宴席信息
        this.banquet = __WEBPACK_IMPORTED_MODULE_4__shared_service_proxies_entity__["a" /* ActivityBanquetDto */].fromJS({ area: '宜宾城区' });
        this.loading = true;
        this.http.get('/api/list', { count: 4 }).subscribe(function (res) {
            _this.list = _this.list.concat(res).map(function (item) {
                return item;
            });
            _this.loading = false;
        });
        this.activityBanquetService.getByFormId(this.formId).subscribe(function (result) {
            _this.banquet = result;
        });
        //收货信息
        this.activityDeliveryService.getByFormId(this.formId).subscribe(function (result) {
            _this.delivery = result;
        });
    };
    ActivityFormDetailComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'activity-form-detail',
            template: __webpack_require__("../../../../../src/app/admin/marketing/activity-form-detail/activity-form-detail.component.html"),
            styles: [__webpack_require__("../../../../../src/app/admin/marketing/activity-form-detail/activity-form-detail.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ng_zorro_antd__["NzMessageService"], __WEBPACK_IMPORTED_MODULE_2__delon_theme__["l" /* _HttpClient */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_5__shared_service_proxies_marketing_service_activity_form_service__["a" /* ActivityFormServiceProxy */],
            __WEBPACK_IMPORTED_MODULE_6__shared_service_proxies_marketing_service__["a" /* ActivityBanquetServiceProxy */],
            __WEBPACK_IMPORTED_MODULE_6__shared_service_proxies_marketing_service__["b" /* ActivityDeliveryInfoServiceProxy */]])
    ], ActivityFormDetailComponent);
    return ActivityFormDetailComponent;
}());



/***/ }),

/***/ "../../../../../src/app/admin/marketing/activity-form/activity-form.component.html":
/***/ (function(module, exports) {

module.exports = "<pro-header></pro-header>\r\n<nz-card [nzBordered]=\"false\">\r\n    <form nz-form (ngSubmit)=\"refreshData()\" [nzLayout]=\"'inline'\">\r\n        <div nz-row [nzGutter]=\"24\">\r\n            <div nz-col [nzSpan]=\"6\" class=\"mb-md\">\r\n                <div nz-form-item class=\"d-flex\">\r\n                    <div nz-form-label>\r\n                        <label for=\"formCode\">申请单号</label>\r\n                    </div>\r\n                    <div nz-form-control class=\"flex-1\">\r\n                        <nz-input [nzSize]=\"'large'\" name=\"formCode\" nzId=\"formCode\" [(ngModel)]=\"parameters.formCode\" [nzPlaceHolder]=\"'申请单号'\"></nz-input>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div nz-col [nzSpan]=\"6\" class=\"mb-md\">\r\n                <div nz-form-item class=\"d-flex\">\r\n                    <div nz-form-label>\r\n                        <label for=\"beginDate\">开始日期</label>\r\n                    </div>\r\n                    <div nz-form-control class=\"flex-1\">\r\n                        <nz-datepicker [nzSize]=\"'large'\" name=\"beginDate\" [nzPlaceHolder]=\"'请输入开始日期'\" [(ngModel)]=\"parameters.beginDate\" nzId=\"beginDate\" class=\"d-block\"></nz-datepicker>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div nz-col [nzSpan]=\"6\" class=\"mb-md\">\r\n                <div nz-form-item class=\"d-flex\">\r\n                    <div nz-form-label>\r\n                        <label for=\"endDate\">结束日期</label>\r\n                    </div>\r\n                    <div nz-form-control class=\"flex-1\">\r\n                        <nz-datepicker [nzSize]=\"'large'\" name=\"endDate\" [nzPlaceHolder]=\"'请输入结束日期'\" [(ngModel)]=\"parameters.endDate\" nzId=\"endDate\" class=\"d-block\"></nz-datepicker>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div nz-col [nzSpan]=\"6\" class=\"mb-md\">\r\n                <div nz-form-item class=\"d-flex\">\r\n                    <div nz-form-label>\r\n                        <label for=\"status\">审批状态</label>\r\n                    </div>\r\n                    <div nz-form-control class=\"flex-1\">\r\n                        <nz-select [nzPlaceHolder]=\"'请选择'\" name=\"status\" nzId=\"status\" [nzShowSearch]=\"true\" [(ngModel)]=\"parameters.status\" [nzSize]=\"'large'\">\r\n                            <nz-option *ngFor=\"let i of statusList; let idx = index\" [nzLabel]=\"i.text\" [nzValue]=\"i.value\"></nz-option>\r\n                        </nz-select>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div nz-col [nzSpan]=\"16\" class=\"mb-md\">\r\n                <div nz-form-item class=\"d-flex\">\r\n                    <div nz-form-label>\r\n                        <label for=\"filter\">关  键  字</label>\r\n                    </div>\r\n                    <div nz-form-control class=\"flex-1\">\r\n                        <nz-input [nzSize]=\"'large'\" name=\"filter\" nzId=\"filter\" [(ngModel)]=\"parameters.filter\" [nzPlaceHolder]=\"'活动名称、零售户、客户经理'\"></nz-input>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n            <div nz-col [nzSpan]=\"8\" class=\"mb-md\" [class.text-right]=\"'true'\">\r\n                <button nz-button type=\"submit\" [nzType]=\"'primary'\" [nzLoading]=\"loading\" [nzSize]=\"'large'\">查询</button>\r\n                <button nz-button type=\"reset\" (click)=\"refreshData()\" [nzSize]=\"'large'\" class=\"mx-sm\">重置</button>\r\n            </div>\r\n        </div>\r\n    </form>\r\n    <nz-table #nzTable [nzAjaxData]=\"data\" [nzTotal]=\"query.total\" [(nzPageIndex)]=\"query.pageIndex\" [(nzPageSize)]=\"query.pageSize\" [nzLoading]=\"loading\"\r\n        [nzShowSizeChanger]=\"true\" (nzPageIndexChange)=\"refreshData()\" (nzPageSizeChange)=\"refreshData()\">\r\n        <thead nz-thead>\r\n            <tr>\r\n                <th nz-th>\r\n                    <span>申请单号</span>\r\n                </th>\r\n                <th nz-th>\r\n                    <span>活动名称</span>\r\n                </th>\r\n                <th nz-th>\r\n                    <span>零售户</span>\r\n                </th>\r\n                <th nz-th>\r\n                    <span>客户经理</span>\r\n                </th>\r\n                <th nz-th>\r\n                    <span>商品规格</span>\r\n                </th>\r\n                <th nz-th>\r\n                    <span>申请数量</span>\r\n                </th>\r\n                <th nz-th>\r\n                    <span>申请理由</span>\r\n                </th>\r\n                <th nz-th>\r\n                    <span>状态</span>\r\n                </th>\r\n                <th nz-th>\r\n                    <span>申请时间</span>\r\n                </th>\r\n                <th nz-th>\r\n                    <span>操作</span>\r\n                </th>\r\n            </tr>\r\n        </thead>\r\n        <tbody nz-tbody>\r\n            <tr nz-tbody-tr *ngFor=\"let activityForm of nzTable.data\">\r\n                <td nz-td>{{activityForm.formCode}}</td>\r\n                <td nz-td>{{activityForm.activityName}}</td>\r\n                <td nz-td>{{activityForm.retailerName}}</td>\r\n                <td nz-td>{{activityForm.managerName}}</td>\r\n                <td nz-td>{{activityForm.goodsSpecification}}</td>\r\n                <td nz-td>{{activityForm.num}}</td>\r\n                <td nz-td>{{activityForm.reason}}</td>\r\n                <td nz-td><nz-badge [nzStatus]=\"activityForm.statusType\" [nzText]=\"activityForm.statusName\"></nz-badge></td>\r\n                <td nz-td>{{activityForm.creationTime | _date}}</td>\r\n                <td nz-td>\r\n                    <a (click)=\"goDetail(activityForm.id)\" >查看详细</a>\r\n                </td>\r\n            </tr>\r\n        </tbody>\r\n    </nz-table>\r\n</nz-card>"

/***/ }),

/***/ "../../../../../src/app/admin/marketing/activity-form/activity-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActivityFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng_zorro_antd__ = __webpack_require__("../../../../ng-zorro-antd/esm5/antd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_service_proxies_entity__ = __webpack_require__("../../../../../src/app/shared/service-proxies/entity/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_service_proxies_marketing_service_activity_form_service__ = __webpack_require__("../../../../../src/app/shared/service-proxies/marketing-service/activity-form-service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_app_component_base__ = __webpack_require__("../../../../../src/app/shared/app-component-base.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ActivityFormComponent = /** @class */ (function (_super) {
    __extends(ActivityFormComponent, _super);
    function ActivityFormComponent(injector, msg, _ActivityFormService, _router) {
        var _this = _super.call(this, injector) || this;
        _this.msg = msg;
        _this._ActivityFormService = _ActivityFormService;
        _this._router = _router;
        _this.data = [];
        _this.loading = false;
        _this.parameters = { beginDate: null, endDate: null };
        _this.statusList = [
            { text: '提交申请', value: 1, type: 'error' },
            { text: '初审通过', value: 2, type: 'processing' },
            { text: '拒绝', value: 3, type: 'default' },
            { text: '取消', value: 3, type: 'default' },
            { text: '完成', value: 4, type: 'success' }
        ];
        return _this;
    }
    ActivityFormComponent.prototype.ngOnInit = function () {
        this.refreshData();
    };
    ActivityFormComponent.prototype.refreshData = function (reset) {
        var _this = this;
        if (reset === void 0) { reset = false; }
        if (reset) {
            this.query.pageIndex = 1;
        }
        this.loading = true;
        this._ActivityFormService.getAll(this.query.skipCount(), this.query.pageSize, this.getParameter()).subscribe(function (result) {
            _this.loading = false;
            var status = 0;
            _this.query.total = result.totalCount;
            _this.data = result.items;
        });
    };
    ;
    ActivityFormComponent.prototype.getParameter = function () {
        var parray = [];
        parray.push(__WEBPACK_IMPORTED_MODULE_2__shared_service_proxies_entity__["d" /* Parameter */].fromJS({ key: 'FormCode', value: this.parameters.formCode }));
        parray.push(__WEBPACK_IMPORTED_MODULE_2__shared_service_proxies_entity__["d" /* Parameter */].fromJS({ key: 'BeginDate', value: this.dateFormat(this.parameters.beginDate) }));
        parray.push(__WEBPACK_IMPORTED_MODULE_2__shared_service_proxies_entity__["d" /* Parameter */].fromJS({ key: 'EndDate', value: this.dateFormat(this.parameters.endDate) }));
        parray.push(__WEBPACK_IMPORTED_MODULE_2__shared_service_proxies_entity__["d" /* Parameter */].fromJS({ key: 'Status', value: this.parameters.status }));
        parray.push(__WEBPACK_IMPORTED_MODULE_2__shared_service_proxies_entity__["d" /* Parameter */].fromJS({ key: 'Filter', value: this.parameters.filter }));
        return parray;
    };
    ActivityFormComponent.prototype.goDetail = function (id) {
        this._router.navigate(['admin/activity-form-detail', id]);
    };
    ActivityFormComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-page-activity-form',
            template: __webpack_require__("../../../../../src/app/admin/marketing/activity-form/activity-form.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injector"], __WEBPACK_IMPORTED_MODULE_1_ng_zorro_antd__["NzMessageService"], __WEBPACK_IMPORTED_MODULE_3__shared_service_proxies_marketing_service_activity_form_service__["a" /* ActivityFormServiceProxy */], __WEBPACK_IMPORTED_MODULE_5__angular_router__["h" /* Router */]])
    ], ActivityFormComponent);
    return ActivityFormComponent;
}(__WEBPACK_IMPORTED_MODULE_4__shared_app_component_base__["a" /* AppComponentBase */]));



/***/ }),

/***/ "../../../../../src/app/admin/roles/create-role/create-role.component.html":
/***/ (function(module, exports) {

module.exports = "<form nz-form [formGroup]=\"form\" *ngIf=\"modalVisible\" id=\"frm_create_role\" (ngSubmit)=\"save()\">\r\n    <nz-modal [nzVisible]=\"modalVisible\" [nzTitle]=\"'创建角色'\" [nzConfirmLoading]=\"loading\" [nzContent]=\"modalContent\"\r\n        [nzFooter]=\"modalFooter\" (nzOnCancel)=\"handleCancel($event)\">\r\n        <ng-template #modalContent>\r\n            <div nz-form-item nz-row>\r\n                <div nz-form-label nz-col [nzSm]=\"4\">\r\n                    <label for=\"rolename\" nz-form-item-required>角色名</label>\r\n                </div>\r\n                <div nz-form-control nz-col [nzSm]=\"20\" nzHasFeedback [nzValidateStatus]=\"getFormControl('name')\">\r\n                    <nz-input formControlName=\"name\" [(ngModel)]=\"role.name\" nzPlaceHolder=\"输入大于等于2并小于等于32的字符\" [nzId]=\"'name'\"></nz-input>\r\n                    <div nz-form-explain *ngIf=\"getFormControl('name').dirty&&getFormControl('name').hasError('maxlength')\">字符长度小于等于32</div>\r\n                    <div nz-form-explain *ngIf=\"getFormControl('name').dirty&&getFormControl('name').hasError('minlength')\">字符长度大于等于2</div>\r\n                    <div nz-form-explain *ngIf=\"getFormControl('name').dirty&&getFormControl('name').hasError('required')\">请输入角色名</div>\r\n                </div>\r\n            </div>\r\n            <div nz-form-item nz-row>\r\n                <div nz-form-label nz-col [nzSm]=\"4\">\r\n                    <label for=\"displayName\" nz-form-item-required>角色显示</label>\r\n                </div>\r\n                <div nz-form-control nz-col [nzSm]=\"20\" nzHasFeedback [nzValidateStatus]=\"getFormControl('displayName')\">\r\n                    <nz-input formControlName=\"displayName\" [(ngModel)]=\"role.displayName\" nzPlaceHolder=\"请输入小于等于32的字符\" [nzId]=\"'displayName'\"></nz-input>\r\n                    <div nz-form-explain *ngIf=\"getFormControl('displayName').dirty&&getFormControl('displayName').hasError('maxlength')\">字符长度小于等于32</div>\r\n                    <div nz-form-explain *ngIf=\"getFormControl('displayName').dirty&&getFormControl('displayName').hasError('minlength')\">字符长度大于等于2</div>\r\n                    <div nz-form-explain *ngIf=\"getFormControl('displayName').dirty&&getFormControl('displayName').hasError('required')\">请输入角色显示名</div>\r\n                </div>\r\n            </div>\r\n            <div nz-form-item nz-row>\r\n                <div nz-form-label nz-col [nzSm]=\"4\">\r\n                    <label for=\"description\" nz-form-item-required>角色描述</label>\r\n                </div>\r\n                <div nz-form-control nz-col [nzSm]=\"20\" nzHasFeedback [nzValidateStatus]=\"getFormControl('description')\">\r\n                    <nz-input formControlName=\"description\" [(ngModel)]=\"role.description\" [nzId]=\"'description'\"></nz-input>\r\n                </div>\r\n            </div>\r\n            <div nz-form-item nz-row>\r\n                权限控制\r\n            </div>\r\n            <div nz-form-item nz-row>\r\n                <label nz-checkbox formControlName=\"permissiongroup\" *ngFor=\"let permission of permissions.items\" [(ngModel)]=\"permission.checked\">\r\n                    <span>{{permission.displayName}}</span>\r\n                </label>\r\n            </div>\r\n        </ng-template>\r\n        <ng-template #modalFooter>\r\n            <button nz-button [nzType]=\"'default'\" [nzSize]=\"'large'\" type=\"button\" (click)=\"handleCancel($event)\">\r\n                {{l(\"Cancel\")}}\r\n            </button>\r\n            <button nz-button [nzType]=\"'primary'\" [nzSize]=\"'large'\" type=\"submit\" [nzLoading]=\"isConfirmLoading\">\r\n                {{l(\"Save\")}}\r\n            </button>\r\n        </ng-template>\r\n    </nz-modal>\r\n</form>"

/***/ }),

/***/ "../../../../../src/app/admin/roles/create-role/create-role.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateRoleComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_service_proxies_service_proxies__ = __webpack_require__("../../../../../src/app/shared/service-proxies/service-proxies.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_app_component_base__ = __webpack_require__("../../../../../src/app/shared/app-component-base.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

//import { ModalDirective } from 'ngx-bootstrap';



//import * as _ from "lodash";
var CreateRoleComponent = /** @class */ (function (_super) {
    __extends(CreateRoleComponent, _super);
    function CreateRoleComponent(injector, _roleService, fb) {
        var _this = _super.call(this, injector) || this;
        _this._roleService = _roleService;
        _this.fb = fb;
        _this.modalSave = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        _this.modalVisible = false;
        _this.isConfirmLoading = false;
        _this.permissions = null;
        _this.role = null;
        _this.roles = [];
        /**
         * 取消按钮事件
         */
        _this.handleCancel = function (e) {
            _this.modalVisible = false;
            _this.isConfirmLoading = false;
            _this.reset(e);
        };
        return _this;
    }
    /**
     * 页面初始加载
     */
    CreateRoleComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._roleService.getAllPermissions()
            .subscribe(function (permissions) {
            _this.permissions = permissions;
            _this.permissions.items.forEach(function (element) {
                element.checked = true;
            });
        });
        this.form = this.fb.group({
            name: [null, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].maxLength(32), __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].minLength(2)])],
            displayName: [null, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].maxLength(32), __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].minLength(2)])],
            description: [null],
            permissiongroup: [null]
        });
    };
    /**
     *
     */
    CreateRoleComponent.prototype.show = function () {
        this.role = new __WEBPACK_IMPORTED_MODULE_1__shared_service_proxies_service_proxies__["g" /* CreateRoleDto */]();
        this.role.init({ isStatic: false });
        this.modalVisible = true;
    };
    /**
     * 保存角色信息
     */
    CreateRoleComponent.prototype.save = function () {
        var _this = this;
        for (var i in this.form.controls) {
            this.form.controls[i].markAsDirty();
        }
        console.log('log', this.form.value);
        if (this.form.valid) {
            var permissions = [];
            this.permissions.items.forEach(function (permission) {
                if (permission.checked) {
                    permissions.push(permission.name);
                }
            });
            this.role.permissions = permissions;
            this.isConfirmLoading = true;
            this._roleService.create(this.role)
                .finally(function () { _this.isConfirmLoading = false; })
                .subscribe(function () {
                _this.notify.info(_this.l('保存成功！'));
                _this.close();
                _this.modalSave.emit(null);
            });
        }
    };
    /**
     * 关闭模态框
     */
    CreateRoleComponent.prototype.close = function () {
        this.modalVisible = false;
        //this.modal.hide();
    };
    CreateRoleComponent.prototype.getFormControl = function (name) {
        return this.form.controls[name];
    };
    CreateRoleComponent.prototype.reset = function (e) {
        if (e) {
            e.preventDefault();
        }
        this.form.reset();
        for (var key in this.form.controls) {
            this.form.controls[key].markAsPristine();
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], CreateRoleComponent.prototype, "modalSave", void 0);
    CreateRoleComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'create-role-modal',
            template: __webpack_require__("../../../../../src/app/admin/roles/create-role/create-role.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injector"],
            __WEBPACK_IMPORTED_MODULE_1__shared_service_proxies_service_proxies__["p" /* RoleServiceProxy */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormBuilder"]])
    ], CreateRoleComponent);
    return CreateRoleComponent;
}(__WEBPACK_IMPORTED_MODULE_2__shared_app_component_base__["a" /* AppComponentBase */]));



/***/ }),

/***/ "../../../../../src/app/admin/roles/edit-role/edit-role.component.html":
/***/ (function(module, exports) {

module.exports = "<form nz-form [formGroup]=\"form\" *ngIf=\"modalVisible\" id=\"frm_create_role\" (ngSubmit)=\"save()\">\r\n    <nz-modal [nzVisible]=\"modalVisible\" [nzTitle]=\"'创建角色'\" [nzConfirmLoading]=\"loading\" [nzContent]=\"modalContent\"\r\n        [nzFooter]=\"modalFooter\" (nzOnCancel)=\"handleCancel($event)\">\r\n        <ng-template #modalContent>\r\n            <div nz-form-item nz-row>\r\n                <div nz-form-label nz-col [nzSm]=\"4\">\r\n                    <label for=\"rolename\" nz-form-item-required>角色名</label>\r\n                </div>\r\n                <div nz-form-control nz-col [nzSm]=\"20\" nzHasFeedback [nzValidateStatus]=\"getFormControl('name')\">\r\n                    <nz-input formControlName=\"name\" [(ngModel)]=\"role.name\" nzPlaceHolder=\"输入大于等于2并小于等于32的字符\" [nzId]=\"'name'\"></nz-input>\r\n                    <div nz-form-explain *ngIf=\"getFormControl('name').dirty&&getFormControl('name').hasError('maxlength')\">字符长度小于等于32</div>\r\n                    <div nz-form-explain *ngIf=\"getFormControl('name').dirty&&getFormControl('name').hasError('minlength')\">字符长度大于等于2</div>\r\n                    <div nz-form-explain *ngIf=\"getFormControl('name').dirty&&getFormControl('name').hasError('required')\">请输入角色名</div>\r\n                </div>\r\n            </div>\r\n            <div nz-form-item nz-row>\r\n                <div nz-form-label nz-col [nzSm]=\"4\">\r\n                    <label for=\"displayName\" nz-form-item-required>角色显示</label>\r\n                </div>\r\n                <div nz-form-control nz-col [nzSm]=\"20\" nzHasFeedback [nzValidateStatus]=\"getFormControl('displayName')\">\r\n                    <nz-input formControlName=\"displayName\" [(ngModel)]=\"role.displayName\" nzPlaceHolder=\"请输入小于等于32的字符\" [nzId]=\"'displayName'\"></nz-input>\r\n                    <div nz-form-explain *ngIf=\"getFormControl('displayName').dirty&&getFormControl('displayName').hasError('maxlength')\">字符长度小于等于32</div>\r\n                    <div nz-form-explain *ngIf=\"getFormControl('displayName').dirty&&getFormControl('displayName').hasError('minlength')\">字符长度大于等于2</div>\r\n                    <div nz-form-explain *ngIf=\"getFormControl('displayName').dirty&&getFormControl('displayName').hasError('required')\">请输入角色显示名</div>\r\n                </div>\r\n            </div>\r\n            <div nz-form-item nz-row>\r\n                <div nz-form-label nz-col [nzSm]=\"4\">\r\n                    <label for=\"description\" nz-form-item-required>角色描述</label>\r\n                </div>\r\n                <div nz-form-control nz-col [nzSm]=\"20\" nzHasFeedback [nzValidateStatus]=\"getFormControl('description')\">\r\n                    <nz-input formControlName=\"description\" [(ngModel)]=\"role.description\" [nzId]=\"'description'\"></nz-input>\r\n                </div>\r\n            </div>\r\n            <div nz-form-item nz-row>\r\n                权限控制\r\n            </div>\r\n            <div nz-form-item nz-row>\r\n                <!-- <label nz-checkbox formControlName=\"permissiongroup\" *ngFor=\"let permission of permissions.items\" [(ngModel)]=\"permission.checked\">\r\n                    <span>{{permission.displayName}}</span>\r\n                </label> -->\r\n                <nz-checkbox-group formControlName=\"editpermissiongroup\" [(ngModel)]=\"permissionsConvert\" ></nz-checkbox-group>\r\n            </div>\r\n        </ng-template>\r\n        <ng-template #modalFooter>\r\n            <button nz-button [nzType]=\"'default'\" [nzSize]=\"'large'\" type=\"button\" (click)=\"handleCancel($event)\">\r\n                {{l(\"Cancel\")}}\r\n            </button>\r\n            <button nz-button [nzType]=\"'primary'\" [nzSize]=\"'large'\" type=\"submit\" [nzLoading]=\"isConfirmLoading\">\r\n                {{l(\"Save\")}}\r\n            </button>\r\n        </ng-template>\r\n    </nz-modal>\r\n</form>"

/***/ }),

/***/ "../../../../../src/app/admin/roles/edit-role/edit-role.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditRoleComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_service_proxies_service_proxies__ = __webpack_require__("../../../../../src/app/shared/service-proxies/service-proxies.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_app_component_base__ = __webpack_require__("../../../../../src/app/shared/app-component-base.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EditRoleComponent = /** @class */ (function (_super) {
    __extends(EditRoleComponent, _super);
    function EditRoleComponent(injector, service, fb) {
        var _this = _super.call(this, injector) || this;
        _this.service = service;
        _this.fb = fb;
        _this.modalSave = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        _this.loading = false;
        _this.modalVisible = false;
        _this.isConfirmLoading = false;
        //所有权限
        _this.permissions = null;
        //当前角色
        _this.role = null;
        /**
         * 取消按钮事件
         */
        _this.handleCancel = function (e) {
            _this.modalVisible = false;
            _this.isConfirmLoading = false;
        };
        return _this;
        // this.role=new CreateRoleDto();
        // this.permissions=new ListResultDtoOfPermissionDto();
    }
    /**
     * 页面初始加载
     */
    EditRoleComponent.prototype.ngOnInit = function () {
        this.getPermissionAll();
        this.form = this.fb.group({
            name: [null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].maxLength(32), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].minLength(2)])],
            displayName: [null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].maxLength(32), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].minLength(2)])],
            description: [null],
            editpermissiongroup: [null]
        });
    };
    /**
     * 页面初始显示
     * @param id 角色id
     */
    EditRoleComponent.prototype.show = function (id) {
        var _this = this;
        this.modalVisible = true;
        this.role = new __WEBPACK_IMPORTED_MODULE_1__shared_service_proxies_service_proxies__["o" /* RoleDto */]();
        this.role.init({
            isStatic: false
        });
        //角色数据获取
        this.service.get(id)
            .subscribe(function (result) {
            _this.role = result;
            _this.permissionsConvert = _this.permissions.items.map(function (i) { return { label: i.displayName, value: i.id, checked: true, name: i.name }; });
            console.log(_this.permissions.items);
            _this.roleInPerssion();
            _this.loading = false;
        });
    };
    /**
     * 将角色存在的权限设为选中
     */
    EditRoleComponent.prototype.roleInPerssion = function () {
        var _this = this;
        this.permissionsConvert.forEach(function (permissiond) {
            if (_this.role.permissions.indexOf(permissiond.name) !== -1) {
                permissiond.checked = true;
            }
            else {
                permissiond.checked = false;
            }
        });
        console.log(this.permissions);
    };
    /**
     * 获取权限信息
     */
    EditRoleComponent.prototype.getPermissionAll = function () {
        var _this = this;
        this.service.getAllPermissions()
            .subscribe(function (permissions) {
            _this.permissions = permissions;
            _this.permissionsConvert = _this.permissions.items.map(function (i) { return { label: i.displayName, value: i.id, checked: true, name: i.name }; });
        });
    };
    /**
     *
     * @param name
     */
    EditRoleComponent.prototype.getFormControl = function (name) {
        return this.form.controls[name];
    };
    /**
     * 取消按钮事件
     * @param e
     */
    EditRoleComponent.prototype.reset = function (e) {
        if (e) {
            e.preventDefault();
        }
        this.form.reset();
        for (var key in this.form.controls) {
            this.form.controls[key].markAsPristine();
        }
    };
    /**
     * 保存角色信息
     */
    EditRoleComponent.prototype.save = function () {
        var _this = this;
        for (var i in this.form.controls) {
            this.form.controls[i].markAsDirty();
        }
        console.log('log', this.form.value);
        if (this.form.valid) {
            var permissions = [];
            this.permissionsConvert.forEach(function (permission) {
                if (permission.checked) {
                    permissions.push(permission.name);
                }
            });
            this.role.permissions = permissions;
            this.isConfirmLoading = true;
            this.service.update(this.role)
                .finally(function () { _this.isConfirmLoading = false; })
                .subscribe(function () {
                _this.notify.info(_this.l('保存成功！'));
                _this.close();
                _this.modalSave.emit(null);
            });
        }
    };
    EditRoleComponent.prototype.close = function () {
        this.modalVisible = false;
        //this.modal.hide();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], EditRoleComponent.prototype, "modalSave", void 0);
    EditRoleComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            moduleId: module.i,
            selector: 'edit-role-modal',
            template: __webpack_require__("../../../../../src/app/admin/roles/edit-role/edit-role.component.html"),
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injector"], __WEBPACK_IMPORTED_MODULE_1__shared_service_proxies_service_proxies__["p" /* RoleServiceProxy */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormBuilder"]])
    ], EditRoleComponent);
    return EditRoleComponent;
}(__WEBPACK_IMPORTED_MODULE_3__shared_app_component_base__["a" /* AppComponentBase */]));



/***/ }),

/***/ "../../../../../src/app/admin/roles/roles.component.html":
/***/ (function(module, exports) {

module.exports = "<pro-header></pro-header>\r\n<nz-card [nzBordered]=\"false\">\r\n    <div nz-row [nzGutter]=\"24\">\r\n        <ng-template #modelContent>\r\n            <h2>是否删除角色{{roleName}}?</h2>\r\n        </ng-template>\r\n        <div nz-col [nzSpan]=\"8\" class=\"mb-md\" [class.text-right]=\"'true'\">\r\n            <button nz-button [nzType]=\"'primary'\" (click)=\"createRole()\" [nzSize]=\"'large'\">\r\n                <i class=\"anticon anticon-plus\"></i>\r\n                <span>新建</span>\r\n            </button>\r\n        </div>\r\n    </div>\r\n    <nz-table #nzTable [nzAjaxData]=\"roles\" [nzTotal]=\"q.total\" [(nzPageIndex)]=\"q.pi\" [(nzPageSize)]=\"q.ps\" [nzLoading]=\"loading\"\r\n        [nzShowSizeChanger]=\"true\" (nzPageIndexChange)=\"refreshData()\" (nzPageSizeChange)=\"refreshData()\">\r\n        <thead nz-thead>\r\n            <tr>\r\n                <th nz-th>\r\n                    <span>角色名</span>\r\n                </th>\r\n                <th nz-th>\r\n                    <span>角色显示</span>\r\n                </th>\r\n                <th nz-th>\r\n                    <span>操作</span>\r\n                </th>\r\n            </tr>\r\n        </thead>\r\n        <tbody nz-tbody>\r\n            <tr nz-tbody-tr *ngFor=\"let role of nzTable.data\">\r\n                <td nz-td>{{role.name}}</td>\r\n                <td nz-td>{{role.displayName}}</td>\r\n                <td nz-td>\r\n                    <a (click)=\"editRole(role)\">编辑</a>\r\n                    <span nz-table-divider></span>\r\n                    <a (click)=\"delete(role,modelContent)\">删除</a>\r\n                </td>\r\n            </tr>\r\n        </tbody>\r\n    </nz-table>\r\n</nz-card>\r\n<create-role-modal #createRoleModal (modalSave)=\"refreshData()\"></create-role-modal>\r\n<edit-role-modal #editRoleModal (modalSave)=\"refreshData()\"></edit-role-modal>"

/***/ }),

/***/ "../../../../../src/app/admin/roles/roles.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RolesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_service_proxies_service_proxies__ = __webpack_require__("../../../../../src/app/shared/service-proxies/service-proxies.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__roles_create_role_create_role_component__ = __webpack_require__("../../../../../src/app/admin/roles/create-role/create-role.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__edit_role_edit_role_component__ = __webpack_require__("../../../../../src/app/admin/roles/edit-role/edit-role.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_app_component_base__ = __webpack_require__("../../../../../src/app/shared/app-component-base.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng_zorro_antd__ = __webpack_require__("../../../../ng-zorro-antd/esm5/antd.js");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//import { appModuleAnimation } from '@shared/animations/routerTransition';




var RolesComponent = /** @class */ (function (_super) {
    __extends(RolesComponent, _super);
    function RolesComponent(injector, rolesService, modal, msg) {
        var _this = _super.call(this, injector) || this;
        _this.injector = injector;
        _this.rolesService = rolesService;
        _this.modal = modal;
        _this.msg = msg;
        _this.q = {
            pi: 1,
            ps: 10,
            total: 0,
            sorter: '',
            status: -1,
            statusList: []
        };
        _this.loading = false;
        _this.roles = [];
        //用于显示删除文本角色名
        _this.roleName = '';
        return _this;
    }
    /**
     * 页面初始加载
     */
    RolesComponent.prototype.ngOnInit = function () {
        this.refreshData();
    };
    // list(request: PagedRequestDto, pageNumber: number, finishedCallback: Function): void {
    // 	this.rolesService.getAll(request.skipCount, request.maxResultCount)
    // 		.finally(() => {
    // 			finishedCallback();
    // 		})
    // 		.subscribe((result: PagedResultDtoOfRoleDto) => {
    // 			this.roles = result.items;
    // 			this.showPaging(result, pageNumber);
    // 		});
    // }
    /**
     * 分页获取角色信息
     * @param reset 是否刷新页面
     */
    RolesComponent.prototype.refreshData = function (reset) {
        var _this = this;
        if (reset === void 0) { reset = false; }
        if (reset) {
            this.q.pi = 1;
        }
        this.loading = true;
        this.rolesService.getAll((this.q.pi - 1) * this.q.ps, this.q.ps).subscribe(function (result) {
            _this.loading = false;
            var status = 0;
            _this.roles = result.items;
            _this.q.total = result.totalCount;
        });
    };
    /**
     * 删除单个角色
     * @param role 角色信息
     * @param contentTpl 删除框id
     */
    RolesComponent.prototype.delete = function (role, contentTpl) {
        var _this = this;
        this.roleName = role.displayName;
        this.modal.confirm({
            content: contentTpl,
            okText: '是',
            cancelText: '否',
            onOk: function () {
                _this.rolesService.delete(role.id)
                    .subscribe(function () {
                    _this.notify.info(_this.l('删除成功！'));
                    _this.refreshData();
                });
            },
            onCancel: function () {
            }
        });
    };
    // delete(role: RoleDto): void {
    // 	abp.message.confirm(
    // 		"Remove Users from Role and delete Role '" + role.displayName + "'?",
    // 		"Permanently delete this Role",
    // 		(result: boolean) => {
    // 			if (result) {
    // 				this.rolesService.delete(role.id)
    // 					.finally(() => {
    // 						abp.notify.info("Deleted Role: " + role.displayName);
    // 						this.refresh();
    // 					})
    // 					.subscribe(() => { });
    // 			}
    // 		}
    // 	);
    // }
    /**
     * 显示新增Modal
     */
    RolesComponent.prototype.createRole = function () {
        this.createRoleModal.show();
    };
    /**
     * 显示编辑Modal
     * @param role 角色实体
     */
    RolesComponent.prototype.editRole = function (role) {
        this.editRoleModal.show(role.id);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('createRoleModal'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__roles_create_role_create_role_component__["a" /* CreateRoleComponent */])
    ], RolesComponent.prototype, "createRoleModal", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('editRoleModal'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3__edit_role_edit_role_component__["a" /* EditRoleComponent */])
    ], RolesComponent.prototype, "editRoleModal", void 0);
    RolesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            template: __webpack_require__("../../../../../src/app/admin/roles/roles.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injector"],
            __WEBPACK_IMPORTED_MODULE_1__shared_service_proxies_service_proxies__["p" /* RoleServiceProxy */],
            __WEBPACK_IMPORTED_MODULE_5_ng_zorro_antd__["NzModalService"],
            __WEBPACK_IMPORTED_MODULE_5_ng_zorro_antd__["NzMessageService"]])
    ], RolesComponent);
    return RolesComponent;
}(__WEBPACK_IMPORTED_MODULE_4__shared_app_component_base__["a" /* AppComponentBase */]));



/***/ }),

/***/ "../../../../../src/app/admin/tenant/create-tenant/create-tenant.component.html":
/***/ (function(module, exports) {

module.exports = "<form nz-form [formGroup]=\"form\" *ngIf=\"modalVisible\" id=\"frm_create_tenant\" (ngSubmit)=\"save()\">\r\n    <nz-modal [nzVisible]=\"modalVisible\" [nzTitle]=\"'创建用户'\" [nzConfirmLoading]=\"loading\" [nzContent]=\"modalContent\" [nzFooter]=\"modalFooter\"\r\n        (nzOnCancel)=\"handleCancel($event)\">\r\n        <ng-template #modalContent>\r\n\r\n            <ng-template #nzTabHeading>\r\n                租户信息\r\n            </ng-template>\r\n            <fieldset>\r\n                <div nz-form-item nz-row>\r\n                    <div nz-form-label nz-col [nzSm]=\"4\">\r\n                        <label for=\"tenancyName\" nz-form-item-required>租户名</label>\r\n                    </div>\r\n                    <div nz-form-control nz-col [nzSm]=\"20\" nzHasFeedback [nzValidateStatus]=\"getFormControl('tenancyName')\">\r\n                        <nz-input formControlName=\"tenancyName\" [(ngModel)]=\"tenant.tenancyName\" nzPlaceHolder=\"输入大于等于1并小于等于64的字符\" [nzId]=\"'tenancyName'\"></nz-input>\r\n                        <div nz-form-explain *ngIf=\"getFormControl('tenancyName').dirty&&getFormControl('tenancyName').hasError('maxlength')\">字符长度小于等于64</div>\r\n                        <div nz-form-explain *ngIf=\"getFormControl('tenancyName').dirty&&getFormControl('tenancyName').hasError('minlength')\">字符长度大于等于1</div>\r\n                        <div nz-form-explain *ngIf=\"getFormControl('tenancyName').dirty&&getFormControl('tenancyName').hasError('required')\">请输入租户名</div>\r\n                    </div>\r\n                </div>\r\n                <div nz-form-item nz-row>\r\n                    <div nz-form-label nz-col [nzSm]=\"4\">\r\n                        <label for=\"name\" nz-form-item-required>名称</label>\r\n                    </div>\r\n                    <div nz-form-control nz-col [nzSm]=\"20\" nzHasFeedback [nzValidateStatus]=\"getFormControl('name')\">\r\n                        <nz-input formControlName=\"name\" [(ngModel)]=\"tenant.name\" [nzId]=\"'name'\"></nz-input>\r\n                        <div nz-form-explain *ngIf=\"getFormControl('name').dirty&&getFormControl('name').hasError('maxlength')\">字符长度小于等于128</div>\r\n                        <div nz-form-explain *ngIf=\"getFormControl('name').dirty&&getFormControl('name').hasError('required')\">请输入名称</div>\r\n                    </div>\r\n                </div>\r\n                <div nz-form-item nz-row>\r\n                    <div nz-form-label nz-col [nzSm]=\"4\">\r\n                        <label for=\"adminEmailAddress\">邮箱地址</label>\r\n                    </div>\r\n                    <div nz-form-control nz-col [nzSm]=\"20\" nzHasFeedback [nzValidateStatus]=\"getFormControl('adminEmailAddress')\">\r\n                        <nz-input formControlName=\"adminEmailAddress\" [(ngModel)]=\"tenant.adminEmailAddress\" [nzId]=\"'adminEmailAddress'\"></nz-input>\r\n                        <div nz-form-explain *ngIf=\"getFormControl('adminEmailAddress').dirty &&getFormControl('adminEmailAddress').hasError('email')\">邮箱地址无效</div>\r\n                    </div>\r\n                </div>\r\n                <div nz-form-item nz-row>\r\n                    <div nz-form-label nz-col [nzSm]=\"4\">\r\n                        <label for=\"connectionString\">连接字符串</label>\r\n                    </div>\r\n                    <div nz-form-control nz-col [nzSm]=\"20\" nzHasFeedback [nzValidateStatus]=\"getFormControl('connectionString')\">\r\n                        <nz-input formControlName=\"connectionString\" [(ngModel)]=\"tenant.connectionString\" [nzType]=\"'connectionString'\" [nzId]=\"'connectionString'\"></nz-input>\r\n                    </div>\r\n                </div>\r\n                <div nz-form-item nz-row>\r\n                    <div nz-form-control nz-col [nzSpan]=\"20\" [nzOffset]=\"4\">\r\n                        <label nz-checkbox formControlName=\"isactive\" [(ngModel)]=\"tenant.isActive\">\r\n                            <span>启用</span>\r\n                        </label>\r\n                    </div>\r\n                </div>\r\n                <div nz-form-item nz-row>\r\n                    <p>默认密码为：123qwe</p>\r\n                </div>\r\n            </fieldset>\r\n        </ng-template>\r\n        <ng-template #modalFooter>\r\n            <button nz-button [nzType]=\"'default'\" [nzSize]=\"'large'\" type=\"button\" (click)=\"handleCancel($event)\">\r\n                取消\r\n            </button>\r\n            <button nz-button [nzType]=\"'primary'\" [nzSize]=\"'large'\" type=\"submit\" [nzLoading]=\"isConfirmLoading\">\r\n                保存\r\n            </button>\r\n        </ng-template>\r\n    </nz-modal>\r\n</form>"

/***/ }),

/***/ "../../../../../src/app/admin/tenant/create-tenant/create-tenant.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateTenantComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_service_proxies_service_proxies__ = __webpack_require__("../../../../../src/app/shared/service-proxies/service-proxies.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_app_component_base__ = __webpack_require__("../../../../../src/app/shared/app-component-base.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CreateTenantComponent = /** @class */ (function (_super) {
    __extends(CreateTenantComponent, _super);
    function CreateTenantComponent(injector, _tenantService, fb) {
        var _this = _super.call(this, injector) || this;
        _this._tenantService = _tenantService;
        _this.fb = fb;
        _this.modalSave = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        //模态框是否可用
        _this.modalVisible = false;
        _this.isConfirmLoading = false;
        _this.tenant = null;
        /**
         * 取消按钮事件
         */
        _this.handleCancel = function (e) {
            _this.modalVisible = false;
            _this.isConfirmLoading = false;
            _this.reset(e);
        };
        return _this;
    }
    /**
     * 页面初始加载
     */
    CreateTenantComponent.prototype.ngOnInit = function () {
        this.form = this.fb.group({
            tenancyName: [null, [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].maxLength(64)])]],
            name: [null, [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].maxLength(128)])]],
            adminEmailAddress: [null, [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].email]],
            connectionString: [null],
            isactive: [true]
        });
    };
    /**
     *
     */
    CreateTenantComponent.prototype.show = function () {
        this.reset();
        this.tenant = new __WEBPACK_IMPORTED_MODULE_1__shared_service_proxies_service_proxies__["h" /* CreateTenantDto */]();
        this.tenant.init({ isActive: true });
        this.modalVisible = true;
    };
    /**
     *
     * @param name
     */
    CreateTenantComponent.prototype.getFormControl = function (name) {
        return this.form.controls[name];
    };
    /**
     *
     * @param e
     */
    CreateTenantComponent.prototype.reset = function (e) {
        if (e) {
            e.preventDefault();
        }
        this.form.reset();
        for (var key in this.form.controls) {
            this.form.controls[key].markAsPristine();
        }
    };
    /**
     * 保存租户信息
     */
    CreateTenantComponent.prototype.save = function () {
        var _this = this;
        for (var i in this.form.controls) {
            this.form.controls[i].markAsDirty();
        }
        if (this.form.valid) {
            this._tenantService.create(this.tenant)
                .finally(function () { _this.isConfirmLoading = false; })
                .subscribe(function () {
                _this.notify.info(_this.l('保存成功'));
                _this.modalVisible = false;
                _this.modalSave.emit(null);
            });
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], CreateTenantComponent.prototype, "modalSave", void 0);
    CreateTenantComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            moduleId: module.i,
            selector: 'create-tenant-modal',
            template: __webpack_require__("../../../../../src/app/admin/tenant/create-tenant/create-tenant.component.html"),
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injector"], __WEBPACK_IMPORTED_MODULE_1__shared_service_proxies_service_proxies__["u" /* TenantServiceProxy */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormBuilder"]])
    ], CreateTenantComponent);
    return CreateTenantComponent;
}(__WEBPACK_IMPORTED_MODULE_3__shared_app_component_base__["a" /* AppComponentBase */]));



/***/ }),

/***/ "../../../../../src/app/admin/tenant/edit-tenant/edit-tenant.component.html":
/***/ (function(module, exports) {

module.exports = "<form nz-form [formGroup]=\"form\" *ngIf=\"modalVisible\" id=\"frm_create_tenant\" (ngSubmit)=\"save()\">\r\n    <nz-modal [nzVisible]=\"modalVisible\" [nzTitle]=\"'创建用户'\" [nzConfirmLoading]=\"loading\" [nzContent]=\"modalContent\"\r\n        [nzFooter]=\"modalFooter\" (nzOnCancel)=\"handleCancel($event)\">\r\n        <ng-template #modalContent>\r\n           \r\n                    <ng-template #nzTabHeading>\r\n                       租户信息\r\n                    </ng-template>\r\n                    <fieldset>\r\n                        <div nz-form-item nz-row>\r\n                            <div nz-form-label nz-col [nzSm]=\"4\">\r\n                                <label for=\"tenancyName\" nz-form-item-required>租户名</label>\r\n                            </div>\r\n                            <div nz-form-control nz-col [nzSm]=\"20\" nzHasFeedback [nzValidateStatus]=\"getFormControl('tenancyName')\">\r\n                                <nz-input formControlName=\"tenancyName\" [(ngModel)]=\"tenant.tenancyName\" nzPlaceHolder=\"输入大于等于1并小于等于64的字符\" [nzId]=\"'tenancyName'\"></nz-input>\r\n                                <div nz-form-explain *ngIf=\"getFormControl('tenancyName').dirty&&getFormControl('tenancyName').hasError('maxlength')\">字符长度小于等于64</div>\r\n                                <div nz-form-explain *ngIf=\"getFormControl('tenancyName').dirty&&getFormControl('tenancyName').hasError('required')\">请输入租户名</div>\r\n                            </div>\r\n                        </div>\r\n                        <div nz-form-item nz-row>\r\n                            <div nz-form-label nz-col [nzSm]=\"4\">\r\n                                <label for=\"name\" nz-form-item-required>名称</label>\r\n                            </div>\r\n                            <div nz-form-control nz-col [nzSm]=\"20\" nzHasFeedback [nzValidateStatus]=\"getFormControl('name')\">\r\n                                <nz-input formControlName=\"name\" [(ngModel)]=\"tenant.name\"  [nzId]=\"'name'\"></nz-input>\r\n                                <div nz-form-explain *ngIf=\"getFormControl('name').dirty&&getFormControl('name').hasError('maxlength')\">字符长度小于等于128</div>\r\n                                <div nz-form-explain *ngIf=\"getFormControl('name').dirty&&getFormControl('name').hasError('required')\">请输入名称</div>\r\n                            </div>\r\n                        </div>\r\n                        <div nz-form-item nz-row>\r\n                            <div nz-form-control nz-col [nzSpan]=\"20\" [nzOffset]=\"4\">\r\n                                <label nz-checkbox formControlName=\"isactive\" [(ngModel)]=\"tenant.isActive\">\r\n                                    <span>启用</span>\r\n                                </label>\r\n                            </div>\r\n                        </div>\r\n                    </fieldset>\r\n        </ng-template>\r\n        <ng-template #modalFooter>\r\n            <button nz-button [nzType]=\"'default'\" [nzSize]=\"'large'\" type=\"button\" (click)=\"handleCancel($event)\">\r\n                取消\r\n            </button>\r\n            <button nz-button [nzType]=\"'primary'\" [nzSize]=\"'large'\" type=\"submit\" [nzLoading]=\"isConfirmLoading\">\r\n                保存\r\n            </button>\r\n        </ng-template>\r\n    </nz-modal>\r\n</form>"

/***/ }),

/***/ "../../../../../src/app/admin/tenant/edit-tenant/edit-tenant.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditTenantComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_service_proxies_service_proxies__ = __webpack_require__("../../../../../src/app/shared/service-proxies/service-proxies.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_app_component_base__ = __webpack_require__("../../../../../src/app/shared/app-component-base.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EditTenantComponent = /** @class */ (function (_super) {
    __extends(EditTenantComponent, _super);
    function EditTenantComponent(injector, _tenantService, fb) {
        var _this = _super.call(this, injector) || this;
        _this._tenantService = _tenantService;
        _this.fb = fb;
        _this.modalSave = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        _this.modalVisible = false;
        _this.isConfirmLoading = false;
        /**
         * 取消按钮事件
         */
        _this.handleCancel = function (e) {
            _this.modalVisible = false;
            _this.isConfirmLoading = false;
            _this.reset();
        };
        return _this;
    }
    EditTenantComponent.prototype.ngOnInit = function () {
        this.form = this.fb.group({
            tenancyName: [null, [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].maxLength(64)])]],
            name: [null, [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].maxLength(128)])]],
            isactive: [null]
        });
    };
    /**
     *
     * @param id 租户id
     */
    EditTenantComponent.prototype.show = function (id) {
        var _this = this;
        this.modalVisible = true;
        this.tenant = new __WEBPACK_IMPORTED_MODULE_1__shared_service_proxies_service_proxies__["t" /* TenantDto */]();
        this._tenantService.get(id).subscribe(function (result) {
            _this.tenant = result;
        });
    };
    /**
     *
     * @param name
     */
    EditTenantComponent.prototype.getFormControl = function (name) {
        return this.form.controls[name];
    };
    /**
     * 保存租户更新信息
     */
    EditTenantComponent.prototype.save = function () {
        var _this = this;
        for (var i in this.form.controls) {
            this.form.controls[i].markAsDirty();
        }
        if (this.form.valid) {
            this._tenantService.update(this.tenant)
                .finally(function () { _this.isConfirmLoading = false; })
                .subscribe(function () {
                _this.notify.info(_this.l('保存成功')); //来自AppComponentBase
                _this.modalVisible = false;
                _this.modalSave.emit(null);
            });
        }
    };
    EditTenantComponent.prototype.reset = function (e) {
        if (e) {
            e.preventDefault();
        }
        this.form.reset();
        for (var key in this.form.controls) {
            this.form.controls[key].markAsPristine();
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], EditTenantComponent.prototype, "modalSave", void 0);
    EditTenantComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            moduleId: module.i,
            selector: 'edit-tenant-modal',
            template: __webpack_require__("../../../../../src/app/admin/tenant/edit-tenant/edit-tenant.component.html"),
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injector"], __WEBPACK_IMPORTED_MODULE_1__shared_service_proxies_service_proxies__["u" /* TenantServiceProxy */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormBuilder"]])
    ], EditTenantComponent);
    return EditTenantComponent;
}(__WEBPACK_IMPORTED_MODULE_3__shared_app_component_base__["a" /* AppComponentBase */]));



/***/ }),

/***/ "../../../../../src/app/admin/tenant/tenant.component.html":
/***/ (function(module, exports) {

module.exports = "<pro-header></pro-header>\r\n<nz-card [nzBordered]=\"false\">\r\n    <form nz-form (ngSubmit)=\"refreshData()\" [nzLayout]=\"'inline'\">\r\n        <div nz-row [nzGutter]=\"24\">\r\n            <ng-template #modelContent>\r\n                <h2>是否删除租户{{TenantName}}?</h2>\r\n            </ng-template>\r\n            <div nz-col [nzSpan]=\"8\" class=\"mb-md\" [class.text-right]=\"'true'\">\r\n                <button nz-button (click)=\"createTenant()\" [nzType]=\"'primary'\" [nzSize]=\"'large'\">\r\n                    <i class=\"anticon anticon-plus\"></i>\r\n                    <span>新建</span>\r\n                </button>\r\n            </div>\r\n        </div>\r\n    </form>\r\n    <nz-table #nzTable [nzAjaxData]=\"tenants\" [nzTotal]=\"q.total\" [(nzPageIndex)]=\"q.pi\" [(nzPageSize)]=\"q.ps\" [nzLoading]=\"loading\"\r\n        [nzShowSizeChanger]=\"true\" (nzPageIndexChange)=\"refreshData()\" (nzPageSizeChange)=\"refreshData()\">\r\n        <thead nz-thead>\r\n            <tr>\r\n                <th nz-th>\r\n                    <span>租户名</span>\r\n                </th>\r\n                <th nz-th>\r\n                    <span>名称</span>\r\n                </th>\r\n                <th nz-th>\r\n                    <span>启用</span>\r\n                </th>\r\n                <th nz-th>\r\n                    <span>操作</span>\r\n                </th>\r\n            </tr>\r\n        </thead>\r\n        <tbody nz-tbody>\r\n            <tr nz-tbody-tr *ngFor=\"let tenant of nzTable.data\">\r\n                <td nz-td>{{tenant.tenancyName}}</td>\r\n                <td nz-td>{{tenant.name}}</td>\r\n                <td nz-td>\r\n                    <nz-badge [nzStatus]=\"tenant.activeType\" [nzText]=\"tenant.activeText\"></nz-badge>\r\n                </td>\r\n                <td nz-td>\r\n                    <a (click)=\"editTenant(tenant)\">编辑</a>\r\n                    <span nz-table-divider></span>\r\n                    <a (click)=\"delete(tenant,modelContent)\">删除</a>\r\n                </td>\r\n            </tr>\r\n        </tbody>\r\n    </nz-table>\r\n</nz-card>\r\n<edit-tenant-modal #editTenantModal (modalSave)=\"refreshData()\"></edit-tenant-modal>\r\n<create-tenant-modal #createTenantModal (modalSave)=\"refreshData()\"></create-tenant-modal>"

/***/ }),

/***/ "../../../../../src/app/admin/tenant/tenant.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TenantComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_service_proxies_service_proxies__ = __webpack_require__("../../../../../src/app/shared/service-proxies/service-proxies.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_app_component_base__ = __webpack_require__("../../../../../src/app/shared/app-component-base.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__create_tenant_create_tenant_component__ = __webpack_require__("../../../../../src/app/admin/tenant/create-tenant/create-tenant.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__edit_tenant_edit_tenant_component__ = __webpack_require__("../../../../../src/app/admin/tenant/edit-tenant/edit-tenant.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng_zorro_antd__ = __webpack_require__("../../../../ng-zorro-antd/esm5/antd.js");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var TenantComponent = /** @class */ (function (_super) {
    __extends(TenantComponent, _super);
    function TenantComponent(injector, _tenantService, modal) {
        var _this = _super.call(this, injector) || this;
        _this._tenantService = _tenantService;
        _this.modal = modal;
        _this.q = {
            pi: 1,
            ps: 10,
            total: 0,
            sorter: '',
            status: -1,
            statusList: []
        };
        _this.loading = false;
        _this.status = [
            { text: '启用', value: false, type: 'success' },
            { text: '禁用', value: false, type: 'default' },
        ];
        _this.tenants = [];
        return _this;
    }
    /**
     * 页面初始加载
     */
    TenantComponent.prototype.ngOnInit = function () {
        this.refreshData();
    };
    // list(request: PagedRequestDto, pageNumber: number, finishedCallback: Function): void {
    //     this._tenantService.getAll(request.skipCount, request.maxResultCount)
    //         .finally(() => {
    //             finishedCallback();
    //         })
    //         .subscribe((result: PagedResultDtoOfTenantDto) => {
    //             this.tenants = result.items;
    //             // this.showPaging(result, pageNumber);
    //         });
    // }
    /**
     * 分页获取租户信息
     * @param reset 是否刷新页面
     */
    TenantComponent.prototype.refreshData = function (reset) {
        var _this = this;
        if (reset === void 0) { reset = false; }
        if (reset) {
            this.q.pi = 1;
        }
        this.loading = true;
        this._tenantService.getAll((this.q.pi - 1) * this.q.ps, this.q.ps).subscribe(function (result) {
            _this.loading = false;
            var status = 0;
            _this.tenants = result.items.map(function (i) {
                if (i.isActive) {
                    status = 0;
                }
                else {
                    status = 1;
                }
                var statusItem = _this.status[status];
                i.activeText = statusItem.text;
                i.activeType = statusItem.type;
                return i;
            });
            _this.q.total = result.totalCount;
        });
    };
    /**
     * 删除单个租户
     * @param tenant 租户信息
     * @param contenTpl 弹框
     */
    TenantComponent.prototype.delete = function (tenant, contenTpl) {
        var _this = this;
        this.TenantName = tenant.name;
        this.modal.confirm({
            content: contenTpl,
            okText: '是',
            cancelText: '否',
            onOk: function () {
                _this._tenantService.delete(tenant.id)
                    .subscribe(function () {
                    _this.notify.info(_this.l('删除成功'));
                    _this.refreshData();
                });
            }
        });
    };
    /**
     * 新增租户
     */
    TenantComponent.prototype.createTenant = function () {
        this.createTenantModal.show();
    };
    /**
     * 更新租户
     * @param tenant 租户id
     */
    TenantComponent.prototype.editTenant = function (tenant) {
        this.editTenantModal.show(tenant.id);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('createTenantModal'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3__create_tenant_create_tenant_component__["a" /* CreateTenantComponent */])
    ], TenantComponent.prototype, "createTenantModal", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('editTenantModal'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_4__edit_tenant_edit_tenant_component__["a" /* EditTenantComponent */])
    ], TenantComponent.prototype, "editTenantModal", void 0);
    TenantComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            moduleId: module.i,
            selector: 'tenant',
            template: __webpack_require__("../../../../../src/app/admin/tenant/tenant.component.html"),
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injector"], __WEBPACK_IMPORTED_MODULE_1__shared_service_proxies_service_proxies__["u" /* TenantServiceProxy */], __WEBPACK_IMPORTED_MODULE_5_ng_zorro_antd__["NzModalService"]])
    ], TenantComponent);
    return TenantComponent;
}(__WEBPACK_IMPORTED_MODULE_2__shared_app_component_base__["a" /* AppComponentBase */]));



/***/ }),

/***/ "../../../../../src/app/admin/users/create-user/create-user.component.html":
/***/ (function(module, exports) {

module.exports = "<form nz-form [formGroup]=\"form\" *ngIf=\"modalVisible\" id=\"frm_create_user\" (ngSubmit)=\"save()\">\r\n    <nz-modal [nzVisible]=\"modalVisible\" [nzTitle]=\"'创建用户'\" [nzConfirmLoading]=\"loading\" [nzContent]=\"modalContent\" [nzFooter]=\"modalFooter\"\r\n        (nzOnCancel)=\"handleCancel($event)\">\r\n        <ng-template #modalContent>\r\n            <nz-tabset>\r\n                <nz-tab>\r\n                    <ng-template #nzTabHeading>\r\n                        用户信息\r\n                    </ng-template>\r\n                    <fieldset>\r\n                        <div nz-form-item nz-row>\r\n                            <div nz-form-label nz-col [nzSm]=\"4\">\r\n                                <label for=\"username\" nz-form-item-required>账号</label>\r\n                            </div>\r\n                            <div nz-form-control nz-col [nzSm]=\"20\" nzHasFeedback [nzValidateStatus]=\"getFormControl('username')\">\r\n                                <nz-input formControlName=\"username\" [(ngModel)]=\"user.userName\" nzPlaceHolder=\"输入大于等于2并小于等于32的字符\" [nzId]=\"'username'\"></nz-input>\r\n                                <div nz-form-explain *ngIf=\"getFormControl('username').dirty&&getFormControl('username').hasError('maxlength')\">字符长度小于等于32</div>\r\n                                <div nz-form-explain *ngIf=\"getFormControl('username').dirty&&getFormControl('username').hasError('minlength')\">字符长度大于等于2</div>\r\n                                <div nz-form-explain *ngIf=\"getFormControl('username').dirty&&getFormControl('username').hasError('required')\">请输入账户</div>\r\n                            </div>\r\n                        </div>\r\n                        <div nz-form-item nz-row>\r\n                            <div nz-form-label nz-col [nzSm]=\"4\">\r\n                                <label for=\"name\" nz-form-item-required>用户名</label>\r\n                            </div>\r\n                            <div nz-form-control nz-col [nzSm]=\"16\" nzHasFeedback [nzValidateStatus]=\"getFormControl('name')\">\r\n                                <nz-input [nzDisabled]=\"isDisablec\" formControlName=\"name\" [(ngModel)]=\"user.name\" nzPlaceHolder=\"请输入小于等于32的字符\" [nzId]=\"'name'\"></nz-input>\r\n                                <div nz-form-explain *ngIf=\"getFormControl('name').dirty&&getFormControl('name').hasError('maxlength')\">字符长度小于等于32</div>\r\n                                <div nz-form-explain *ngIf=\"getFormControl('name').dirty&&getFormControl('name').hasError('required')\">请输入姓</div>\r\n                            </div>\r\n                            <div nz-col [nzSm]=\"4\" >\r\n                                <button nz-button [nzType]=\"'primary'\" [nzSize]=\"'large'\" type=\"button\" (click)=\"employee()\">\r\n                                    选择员工\r\n                                </button>\r\n                            </div>\r\n                            <!--<div nz-form-label nz-col [nzSm]=\"4\">\r\n                                <label for=\"surname\" nz-form-item-required>{{l(\"Surname\")}}</label>\r\n                            </div>\r\n                            <div nz-form-control nz-col [nzSm]=\"8\" nzHasFeedback [nzValidateStatus]=\"getFormControl('surname')\">\r\n                                <nz-input formControlName=\"surname\" [(ngModel)]=\"user.surname\" nzPlaceHolder=\"请输入小于等于32的字符\" [nzId]=\"'surname'\"></nz-input>\r\n                                <div nz-form-explain *ngIf=\"getFormControl('surname').dirty&&getFormControl('surname').hasError('maxlength')\">字符长度小于等于32</div>\r\n                                <div nz-form-explain *ngIf=\"getFormControl('surname').dirty&&getFormControl('surname').hasError('required')\">请输入名</div>\r\n                            </div> -->\r\n                        </div>\r\n                        <div nz-form-item nz-row>\r\n                            <div nz-form-label nz-col [nzSm]=\"4\">\r\n                                <label for=\"email\" nz-form-item-required>邮箱</label>\r\n                            </div>\r\n                            <div nz-form-control nz-col [nzSm]=\"20\" nzHasFeedback [nzValidateStatus]=\"getFormControl('email')\">\r\n                                <nz-input formControlName=\"email\" [(ngModel)]=\"user.emailAddress\" [nzId]=\"'email'\"></nz-input>\r\n                                <div nz-form-explain *ngIf=\"getFormControl('email').dirty&&getFormControl('email').hasError('email')\">邮箱地址无效</div>\r\n                            </div>\r\n                        </div>\r\n                        <div nz-form-item nz-row>\r\n                            <div nz-form-label nz-col [nzSm]=\"4\">\r\n                                <label for=\"password\" nz-form-item-required>密码</label>\r\n                            </div>\r\n                            <div nz-form-control nz-col [nzSm]=\"20\" nzHasFeedback [nzValidateStatus]=\"getFormControl('password')\">\r\n                                <nz-input formControlName=\"password\" [(ngModel)]=\"user.password\" [nzType]=\"'password'\" [nzId]=\"'password'\"></nz-input>\r\n                                <div nz-form-explain *ngIf=\"getFormControl('password').dirty&&getFormControl('password').hasError('required')\">请输入密码</div>\r\n                            </div>\r\n                        </div>\r\n                        <div nz-form-item nz-row>\r\n                            <div nz-form-label nz-col [nzSm]=\"4\">\r\n                                <label for=\"checkPassword\" nz-form-item-required>确认密码</label>\r\n                            </div>\r\n                            <div nz-form-control nz-col [nzSm]=\"20\" nzHasFeedback [nzValidateStatus]=\"getFormControl('checkPassword')\">\r\n                                <nz-input formControlName=\"checkPassword\" [(ngModel)]=\"user.confirmPassword\" [nzType]=\"'password'\" [nzId]=\"'checkPassword'\"></nz-input>\r\n                                <div nz-form-explain *ngIf=\"getFormControl('checkPassword').dirty&&getFormControl('checkPassword').hasError('required')\">请确认密码</div>\r\n                                <div nz-form-explain *ngIf=\"getFormControl('checkPassword').dirty&&getFormControl('checkPassword').hasError('confirm')\">两次输入的密码必须一致</div>\r\n                            </div>\r\n                        </div>\r\n                        <div nz-form-item nz-row>\r\n                            <div nz-form-control nz-col [nzSpan]=\"20\" [nzOffset]=\"4\">\r\n                                <label nz-checkbox formControlName=\"isactive\" [(ngModel)]=\"user.isActive\">\r\n                                    <span>启用</span>\r\n                                </label>\r\n                            </div>\r\n                        </div>\r\n                    </fieldset>\r\n                </nz-tab>\r\n                <nz-tab>\r\n                    <ng-template #nzTabHeading>\r\n                        用户角色\r\n                    </ng-template>\r\n                    <label nz-checkbox formControlName=\"rolegroup\" *ngFor=\"let role of roles\" [(ngModel)]=\"role.checked\">\r\n                        <span>{{role.label}}</span>\r\n                    </label>\r\n                </nz-tab>\r\n            </nz-tabset>\r\n        </ng-template>\r\n        <ng-template #modalFooter>\r\n            <button nz-button [nzType]=\"'default'\" [nzSize]=\"'large'\" type=\"button\" (click)=\"handleCancel($event)\">\r\n                取消\r\n            </button>\r\n            <button nz-button [nzType]=\"'primary'\" [nzSize]=\"'large'\" type=\"submit\" [nzLoading]=\"isConfirmLoading\">\r\n                保存\r\n            </button>\r\n        </ng-template>\r\n    </nz-modal>\r\n</form>\r\n<employee-modal *ngIf=\"modalVisible\" #selectEmployeeModal (modalSelect)=\"getSelectData($event)\"></employee-modal>\r\n"

/***/ }),

/***/ "../../../../../src/app/admin/users/create-user/create-user.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateUserComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_service_proxies_service_proxies__ = __webpack_require__("../../../../../src/app/shared/service-proxies/service-proxies.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_app_component_base__ = __webpack_require__("../../../../../src/app/shared/app-component-base.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__employee_modal_employee_modal_component__ = __webpack_require__("../../../../../src/app/admin/users/employee-modal/employee-modal.component.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

//import { ModalDirective } from 'ngx-bootstrap';




//import * as _ from "lodash";
var CreateUserComponent = /** @class */ (function (_super) {
    __extends(CreateUserComponent, _super);
    function CreateUserComponent(injector, _userService, fb) {
        var _this = _super.call(this, injector) || this;
        _this._userService = _userService;
        _this.fb = fb;
        _this.modalSave = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        _this.modalVisible = false;
        _this.isConfirmLoading = false;
        _this.isDisablec = false;
        _this.user = null;
        //roles: RoleDto[] = null;
        _this.roles = [];
        _this.handleCancel = function (e) {
            _this.modalVisible = false;
            _this.isConfirmLoading = false;
            _this.reset(e);
        };
        /*nicknameValidator = (control: FormControl): Observable<any> => {
            return control
                .valueChanges
                .debounceTime(500)
                .map((value) => {
                    if (value !== 'cipchk') {
                        control.setErrors({ checked: true, error: true });
                        return;
                    }
                    control.setErrors(null);
                });
        }*/
        _this.confirmationValidator = function (control) {
            if (!control.value) {
                return { required: true };
            }
            else if (control.value !== _this.form.controls['password'].value) {
                return { confirm: true, error: true };
            }
        };
        /**
         * 模态框返回
         */
        _this.getSelectData = function (employee) {
            //对isDisablec做初始化
            _this.isDisablec = false;
            if (employee) {
                if (employee.id) {
                    _this.isDisablec = true;
                }
                _this.user.name = employee.name;
                _this.user.employeeId = employee.id;
            }
            for (var key in _this.form.controls) {
                if (!_this.user[key]) {
                    _this.form.controls[key].markAsPristine();
                }
            }
        };
        return _this;
    }
    CreateUserComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._userService.getRoles()
            .subscribe(function (result) {
            _this.roles = result.items.map(function (i) { return { label: i.name, value: i.normalizedName, checked: true }; });
        });
        this.form = this.fb.group({
            email: [null, [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].email]],
            password: [null, [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].required]],
            checkPassword: [null, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].required, this.confirmationValidator])],
            //username: [null, Validators.compose([Validators.required, Validators.minLength(2)]), this.nicknameValidator.bind(this)],
            username: [null, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].minLength(2), __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].maxLength(32)])],
            name: [null, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].maxLength(32)])],
            //surname: [null, Validators.compose([Validators.required, Validators.maxLength(32)])],
            isactive: [true],
            rolegroup: [true]
        });
    };
    CreateUserComponent.prototype.show = function () {
        //this.modal.show();
        this.reset();
        this.user = new __WEBPACK_IMPORTED_MODULE_1__shared_service_proxies_service_proxies__["i" /* CreateUserDto */]();
        this.user.init({ isActive: true });
        this.roles.forEach(function (element) {
            element.checked = true;
        });
        this.modalVisible = true;
        //对isDisablec做初始化
        this.isDisablec = false;
    };
    //onShown(): void {
    //    $.AdminBSB.input.activate($(this.modalContent.nativeElement));
    //}
    CreateUserComponent.prototype.save = function (isSave) {
        var _this = this;
        if (isSave === void 0) { isSave = false; }
        for (var i in this.form.controls) {
            this.form.controls[i].markAsDirty();
        }
        console.log('log', this.form.value);
        if (this.form.valid) {
            //TODO: Refactor this, don't use jQuery style code
            var roles = [];
            this.roles.forEach(function (role) {
                if (role.checked) {
                    roles.push(role.value);
                }
            });
            this.user.roleNames = roles;
            this.user.surname = this.user.userName;
            this.isConfirmLoading = true;
            this._userService.create(this.user)
                .finally(function () { _this.isConfirmLoading = false; })
                .subscribe(function () {
                _this.notify.info(_this.l('保存成功！'));
                _this.close();
                _this.modalSave.emit(null);
            });
        }
    };
    CreateUserComponent.prototype.close = function () {
        this.modalVisible = false;
        //this.modal.hide();
    };
    CreateUserComponent.prototype.getFormControl = function (name) {
        return this.form.controls[name];
    };
    CreateUserComponent.prototype.reset = function (e) {
        if (e) {
            e.preventDefault();
        }
        this.form.reset();
        for (var key in this.form.controls) {
            this.form.controls[key].markAsPristine();
        }
    };
    /**
     * 显示员工列表模态框
     */
    CreateUserComponent.prototype.employee = function () {
        this.selectEmployeeModal.show();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('selectEmployeeModal'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_4__employee_modal_employee_modal_component__["a" /* EmployeeModalComponent */])
    ], CreateUserComponent.prototype, "selectEmployeeModal", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], CreateUserComponent.prototype, "modalSave", void 0);
    CreateUserComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'create-user-modal',
            template: __webpack_require__("../../../../../src/app/admin/users/create-user/create-user.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injector"],
            __WEBPACK_IMPORTED_MODULE_1__shared_service_proxies_service_proxies__["x" /* UserServiceProxy */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormBuilder"]])
    ], CreateUserComponent);
    return CreateUserComponent;
}(__WEBPACK_IMPORTED_MODULE_2__shared_app_component_base__["a" /* AppComponentBase */]));



/***/ }),

/***/ "../../../../../src/app/admin/users/edit-user/edit-user.component.html":
/***/ (function(module, exports) {

module.exports = "<form nz-form [formGroup]=\"eform\" *ngIf=\"modalVisible\" id=\"frm_edit_user\" (ngSubmit)=\"esave()\">\r\n    <nz-modal [nzVisible]=\"modalVisible\" [nzTitle]=\"'编辑用户'\" [nzConfirmLoading]=\"loading\" [nzContent]=\"modalContent\" [nzFooter]=\"modalFooter\"\r\n        (nzOnCancel)=\"handleCancel($event)\">\r\n        <ng-template #modalContent>\r\n            <nz-tabset>\r\n                <nz-tab>\r\n                    <ng-template #nzTabHeading>\r\n                        用户信息\r\n                    </ng-template>\r\n                    <fieldset>\r\n                        <div nz-form-item nz-row>\r\n                            <div nz-form-label nz-col [nzSm]=\"4\">\r\n                                <label for=\"username\" nz-form-item-required>账号</label>\r\n                            </div>\r\n                            <div nz-form-control nz-col [nzSm]=\"20\" nzHasFeedback [nzValidateStatus]=\"getFormControl('username')\">\r\n                                <nz-input formControlName=\"username\" [(ngModel)]=\"user.userName\" nzPlaceHolder=\"输入大于等于2并小于等于32的字符\" [nzId]=\"'username'\"></nz-input>\r\n                                <div nz-form-explain *ngIf=\"getFormControl('username').dirty&&getFormControl('username').hasError('maxlength')\">字符长度小于等于32</div>\r\n                                <div nz-form-explain *ngIf=\"getFormControl('username').dirty&&getFormControl('username').hasError('minlength')\">字符长度大于等于2</div>\r\n                                <div nz-form-explain *ngIf=\"getFormControl('username').dirty&&getFormControl('username').hasError('required')\">请输入账户</div>\r\n                            </div>\r\n                        </div>\r\n                        <div nz-form-item nz-row>\r\n                            <div nz-form-label nz-col [nzSm]=\"4\">\r\n                                <label for=\"name\" nz-form-item-required>用户名</label>\r\n                            </div>\r\n                            <div nz-form-control nz-col [nzSm]=\"16\" nzHasFeedback [nzValidateStatus]=\"getFormControl('name')\">\r\n                                <nz-input [nzDisabled]=\"isDisable\" formControlName=\"name\" [(ngModel)]=\"user.name\" nzPlaceHolder=\"请输入小于等于32的字符\" [nzId]=\"'name'\"></nz-input>\r\n                                <div nz-form-explain *ngIf=\"getFormControl('name').dirty&&getFormControl('name').hasError('maxlength')\">字符长度小于等于32</div>\r\n                                <div nz-form-explain *ngIf=\"getFormControl('name').dirty&&getFormControl('name').hasError('required')\">请输入姓</div>\r\n                            </div>\r\n                            <div nz-col [nzSm]=\"4\">\r\n                                <button nz-button [nzType]=\"'primary'\" [nzSize]=\"'large'\" type=\"button\" (click)=\"employees()\">\r\n                                    选择员工\r\n                                </button>\r\n                            </div>\r\n                            <!-- <div nz-form-label nz-col [nzSm]=\"4\">\r\n                                <label for=\"surname\" nz-form-item-required>{{l(\"Surname\")}}</label>\r\n                            </div>\r\n                            <div nz-form-control nz-col [nzSm]=\"8\" nzHasFeedback [nzValidateStatus]=\"getFormControl('surname')\">\r\n                                <nz-input formControlName=\"surname\" [(ngModel)]=\"user.surname\" nzPlaceHolder=\"请输入小于等于32的字符\" [nzId]=\"'surname'\"></nz-input>\r\n                                <div nz-form-explain *ngIf=\"getFormControl('surname').dirty&&getFormControl('surname').hasError('maxlength')\">字符长度小于等于32</div>\r\n                                <div nz-form-explain *ngIf=\"getFormControl('surname').dirty&&getFormControl('surname').hasError('required')\">请输入名</div>\r\n                            </div> -->\r\n                        </div>\r\n                        <div nz-form-item nz-row>\r\n                            <div nz-form-label nz-col [nzSm]=\"4\">\r\n                                <label for=\"email\" nz-form-item-required>邮箱</label>\r\n                            </div>\r\n                            <div nz-form-control nz-col [nzSm]=\"20\" nzHasFeedback [nzValidateStatus]=\"getFormControl('email')\">\r\n                                <nz-input formControlName=\"email\" [(ngModel)]=\"user.emailAddress\" [nzId]=\"'email'\"></nz-input>\r\n                                <div nz-form-explain *ngIf=\"getFormControl('email').dirty&&getFormControl('email').hasError('email')\">邮箱地址无效</div>\r\n                            </div>\r\n                        </div>\r\n                        <div nz-form-item nz-row>\r\n                            <div nz-form-control nz-col [nzSpan]=\"20\" [nzOffset]=\"4\">\r\n                                <label nz-checkbox formControlName=\"isactive\" [(ngModel)]=\"user.isActive\">\r\n                                    <span>启用</span>\r\n                                </label>\r\n                            </div>\r\n                        </div>\r\n                    </fieldset>\r\n                </nz-tab>\r\n                <nz-tab>\r\n                    <ng-template #nzTabHeading>\r\n                        用户角色\r\n                    </ng-template>\r\n                    <!-- <label nz-checkbox formControlName=\"editrolegroup\" *ngFor=\"let role of roles\" [(ngModel)]=\"role.checked\">\r\n                        <span>{{role.label}}</span>\r\n                    </label> -->\r\n                    <nz-checkbox-group formControlName=\"editrolegroup\" [(ngModel)]=\"roles\"></nz-checkbox-group>\r\n                </nz-tab>\r\n            </nz-tabset>\r\n        </ng-template>\r\n        <ng-template #modalFooter>\r\n            <button nz-button [nzType]=\"'default'\" [nzSize]=\"'large'\" type=\"button\" (click)=\"handleCancel($event)\">\r\n                取消\r\n            </button>\r\n            <button nz-button [nzType]=\"'primary'\" [nzSize]=\"'large'\" type=\"submit\" [nzLoading]=\"isConfirmLoading\">\r\n                保存\r\n            </button>\r\n        </ng-template>\r\n    </nz-modal>\r\n</form>\r\n<employee-modal *ngIf=\"modalVisible\" #selecteEmployeeModal (modalSelect)=\"getSelectData($event)\"></employee-modal>\r\n"

/***/ }),

/***/ "../../../../../src/app/admin/users/edit-user/edit-user.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditUserComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_service_proxies_service_proxies__ = __webpack_require__("../../../../../src/app/shared/service-proxies/service-proxies.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_app_component_base__ = __webpack_require__("../../../../../src/app/shared/app-component-base.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__employee_modal_employee_modal_component__ = __webpack_require__("../../../../../src/app/admin/users/employee-modal/employee-modal.component.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var EditUserComponent = /** @class */ (function (_super) {
    __extends(EditUserComponent, _super);
    function EditUserComponent(injector, fb, _userService) {
        var _this = _super.call(this, injector) || this;
        _this.fb = fb;
        _this._userService = _userService;
        _this.modalSave = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        _this.modalVisible = false;
        _this.user = null;
        _this.userRoles = null;
        _this.roles = [];
        _this.isConfirmLoading = false;
        _this.loading = false;
        _this.isDisable = false;
        _this.handleCancel = function (e) {
            _this.modalVisible = false;
            _this.isConfirmLoading = false;
            _this.reset(e);
        };
        /**
         * 选择员工弹框回传数据
         */
        _this.getSelectData = function (employee) {
            //对isDisable做初始化
            _this.isDisable = false;
            if (employee) {
                if (employee.id) {
                    _this.isDisable = true;
                }
                _this.user.name = employee.name;
                _this.user.employeeId = employee.id;
            }
            for (var key in _this.eform.controls) {
                if (!_this.user[key]) {
                    _this.eform.controls[key].markAsPristine();
                }
            }
        };
        return _this;
    }
    EditUserComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.user = new __WEBPACK_IMPORTED_MODULE_1__shared_service_proxies_service_proxies__["w" /* UserDto */]();
        this.user.init({ isActive: true });
        this._userService.getRoles()
            .subscribe(function (result) {
            _this.userRoles = result.items;
            _this.roles = _this.userRoles.map(function (i) { return { label: i.name, value: i.normalizedName, checked: true }; });
        });
        this.eform = this.fb.group({
            email: [null, [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].email]],
            username: [null, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].minLength(2), __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].maxLength(32)])],
            name: [null, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].maxLength(32)])],
            //surname: [null, Validators.compose([Validators.required, Validators.maxLength(32)])],
            isactive: [null],
            editrolegroup: [null]
        });
    };
    EditUserComponent.prototype.userInRole = function (role, user) {
        if (user.roleNames.indexOf(role.normalizedName) !== -1) {
            return true;
        }
        else {
            return false;
        }
    };
    EditUserComponent.prototype.userInRoles = function () {
        var _this = this;
        this.roles.forEach(function (role) {
            if (_this.user.roleNames.indexOf(role.value) !== -1) {
                role.checked = true;
            }
            else {
                role.checked = false;
            }
        });
    };
    EditUserComponent.prototype.show = function (id) {
        var _this = this;
        this.modalVisible = true;
        this.loading = true;
        //用户
        this._userService.get(id)
            .subscribe(function (result) {
            _this.user = result;
            //角色
            //this.roles = this.userRoles.map(i => { return { label: i.name, value: i.normalizedName, checked: this.userInRole(i, this.user) }; });
            _this.roles = _this.userRoles.map(function (i) { return { label: i.name, value: i.normalizedName, checked: true }; });
            _this.userInRoles();
            _this.loading = false;
            //对isDisable做初始化
            _this.isDisable = false;
            if (_this.user.employeeId) {
                _this.isDisable = true;
            }
        });
    };
    EditUserComponent.prototype.esave = function () {
        var _this = this;
        for (var i in this.eform.controls) {
            this.eform.controls[i].markAsDirty();
        }
        console.log('log', this.eform.value);
        if (this.eform.valid) {
            this.isConfirmLoading = true;
            var roles = [];
            this.roles.forEach(function (role) {
                if (role.checked) {
                    roles.push(role.value);
                }
            });
            this.user.roleNames = roles;
            this.user.surname = this.user.userName;
            this._userService.update(this.user)
                .finally(function () { _this.isConfirmLoading = false; })
                .subscribe(function () {
                _this.notify.info(_this.l('保存成功！'));
                _this.close();
                _this.modalSave.emit(null);
            });
        }
    };
    EditUserComponent.prototype.close = function () {
        this.modalVisible = false;
    };
    EditUserComponent.prototype.getFormControl = function (name) {
        return this.eform.controls[name];
    };
    EditUserComponent.prototype.reset = function (e) {
        if (e) {
            e.preventDefault();
        }
        this.eform.reset();
        for (var key in this.eform.controls) {
            this.eform.controls[key].markAsPristine();
        }
    };
    /**
     * 显示选择员工弹框
     */
    EditUserComponent.prototype.employees = function () {
        this.selecteEmployeeModal.show();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('selecteEmployeeModal'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_4__employee_modal_employee_modal_component__["a" /* EmployeeModalComponent */])
    ], EditUserComponent.prototype, "selecteEmployeeModal", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], EditUserComponent.prototype, "modalSave", void 0);
    EditUserComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'edit-user-modal',
            template: __webpack_require__("../../../../../src/app/admin/users/edit-user/edit-user.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injector"],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormBuilder"],
            __WEBPACK_IMPORTED_MODULE_1__shared_service_proxies_service_proxies__["x" /* UserServiceProxy */]])
    ], EditUserComponent);
    return EditUserComponent;
}(__WEBPACK_IMPORTED_MODULE_2__shared_app_component_base__["a" /* AppComponentBase */]));



/***/ }),

/***/ "../../../../../src/app/admin/users/employee-modal/employee-modal.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<nz-modal [nzVisible]=\"emodalVisible\" [nzTitle]=\"'选择员工'\" [nzConfirmLoading]=\"eloading\" [nzContent]=\"employeeContent\" [nzFooter]=\"employeeFooter\"\r\n    (nzOnCancel)=\"handleeCancel($event)\" style=\"width: 520px;\">\r\n    <ng-template #employeeContent>\r\n        <nz-card [nzBordered]=\"false\" *ngIf=\"emodalVisible\">\r\n            <form nz-form (ngSubmit)=\"refreshData()\" [nzLayout]=\"'inline'\">\r\n                <div nz-row [nzGutter]=\"24\">\r\n                    <div nz-col [nzSpan]=\"8\" class=\"mb-md\">\r\n                        <div nz-form-item class=\"d-flex\">\r\n                            <div nz-form-control class=\"flex-1\">\r\n                                <!-- <nz-input  [nzType]=\"'search'\" [(ngModel)]=\"q.no\" name=\"no\" [nzSize]=\"'large'\" [nzPlaceHolder]=\"'请输入员工名或员工编码'\" nzId=\"no\" style=\"width: 420px;\"></nz-input> -->\r\n                                <nz-input [nzType]=\"'search'\" [(ngModel)]=\"q.no\" name=\"no\" (nzOnSearch)=\"refreshData()\" [nzSize]=\"'large'\" [nzPlaceHolder]=\"'请输入员工名或员工编码'\"\r\n                                    nzId=\"no\" style=\"width: 420px;\"></nz-input>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </form>\r\n            <nz-table #nzTable [nzAjaxData]=\"employee\" [nzIsPagination]=\"false\" [nzScroll]=\"{ x:'500',y: '200' }\"  [nzLoading]=\"eloading\"\r\n                [nzShowSizeChanger]=\"true\">\r\n                <thead nz-thead>\r\n                    <tr>\r\n                        <th nz-th>\r\n                            <span>员工编码</span>\r\n                        </th>\r\n                        <th nz-th>\r\n                            <span>姓名</span>\r\n                        </th>\r\n                        <th nz-th>\r\n                            <span>职位</span>\r\n                        </th>\r\n                        <th nz-th>\r\n                            <span>操作</span>\r\n                        </th>\r\n                    </tr>\r\n                </thead>\r\n                <tbody nz-tbody>\r\n                    <tr nz-tbody-tr *ngFor=\"let employee of nzTable.data\">\r\n                        <td nz-td>{{employee.code}}</td>\r\n                        <td nz-td>{{employee.name}}</td>\r\n                        <td nz-td>{{employee.positionName}}</td>\r\n                        <td nz-td>\r\n                            <a (click)=\"SelectEmployee(employee)\">选择</a>\r\n                        </td>\r\n                    </tr>\r\n                </tbody>\r\n            </nz-table>\r\n        </nz-card>\r\n    </ng-template>\r\n    <ng-template #employeeFooter>\r\n\r\n    </ng-template>\r\n</nz-modal>"

/***/ }),

/***/ "../../../../../src/app/admin/users/employee-modal/employee-modal.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmployeeModalComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_service_proxies_marketing_service_employee_service__ = __webpack_require__("../../../../../src/app/shared/service-proxies/marketing-service/employee-service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_service_proxies_service_proxies__ = __webpack_require__("../../../../../src/app/shared/service-proxies/service-proxies.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EmployeeModalComponent = /** @class */ (function () {
    function EmployeeModalComponent(employeeService, service) {
        var _this = this;
        this.employeeService = employeeService;
        this.service = service;
        this.modalSelect = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.q = {
            pi: 1,
            ps: 10,
            total: 0,
            sorter: '',
            status: -1,
            statusList: [],
            no: ''
        };
        this.eloading = false;
        this.emodalVisible = false;
        this.employee = [];
        this.status = [
            { text: '启用', value: false, type: 'success' },
            { text: '禁用', value: false, type: 'default' }
        ];
        this.positions = [
            { text: '零售客户', value: 1 },
            { text: '客户经理', value: 2 },
            { text: '营销人员', value: 3 },
            { text: '消费者', value: 4 },
            { text: '取消关注', value: 5 },
        ];
        /**
         * 取消按钮事件
         */
        this.handleeCancel = function (e) {
            _this.emodalVisible = false;
            // this.isConfirmLoading = false;
            // this.reset(e);
            _this.modalSelect.emit(null);
            _this.q.no = '';
        };
    }
    EmployeeModalComponent.prototype.ngOnInit = function () {
    };
    EmployeeModalComponent.prototype.show = function () {
        this.employee = new Array();
        // this.employee=[];
        this.emodalVisible = true;
        this.refreshData();
    };
    /**
     * 获取
     */
    EmployeeModalComponent.prototype.refreshData = function () {
        var _this = this;
        this.eloading = true;
        this.service.getAllModal(this.q.no).subscribe(function (result) {
            _this.eloading = false;
            var status = 5;
            _this.employee = result.items.map(function (i) {
                i.positionName = _this.positions[i.position - 1].text;
                return i;
            });
            _this.q.total = result.totalCount;
        });
    };
    /**
     *
     * @param employee 选择事件（对选择的数据进行回传）
     */
    EmployeeModalComponent.prototype.SelectEmployee = function (employee) {
        this.q.no = '';
        this.modalSelect.emit(employee);
        this.emodalVisible = false;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], EmployeeModalComponent.prototype, "modalSelect", void 0);
    EmployeeModalComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            moduleId: module.i,
            selector: 'employee-modal',
            template: __webpack_require__("../../../../../src/app/admin/users/employee-modal/employee-modal.component.html"),
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_service_proxies_marketing_service_employee_service__["a" /* EmployeeServiceProxy */], __WEBPACK_IMPORTED_MODULE_2__shared_service_proxies_service_proxies__["k" /* EmployeesServiceProxy */]])
    ], EmployeeModalComponent);
    return EmployeeModalComponent;
}());



/***/ }),

/***/ "../../../../../src/app/admin/users/users.component.html":
/***/ (function(module, exports) {

module.exports = "<pro-header  ></pro-header>\r\n<nz-card [nzBordered]=\"false\">\r\n    <form nz-form (ngSubmit)=\"refreshData()\" [nzLayout]=\"'inline'\">\r\n        <div nz-row [nzGutter]=\"24\">\r\n            <div nz-col [nzSpan]=\"8\" class=\"mb-md\">\r\n                <div nz-form-item class=\"d-flex\">\r\n                    <div nz-form-label>\r\n                        <label for=\"no\">用户名</label>\r\n                    </div>\r\n                    <div nz-form-control class=\"flex-1\">\r\n                        <nz-input [(ngModel)]=\"q.no\" name=\"no\" [nzSize]=\"'large'\" [nzPlaceHolder]=\"'请输入'\" nzId=\"no\"></nz-input>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div nz-col [nzSpan]=\"8\" class=\"mb-md\">\r\n                <div nz-form-item class=\"d-flex\">\r\n                    <div nz-form-label>\r\n                        <label for=\"callNo\">邮箱地址</label>\r\n                    </div>\r\n                    <div nz-form-control class=\"flex-1\">\r\n                        <nz-input [nzSize]=\"'large'\" nzId=\"callNo\"></nz-input>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n            <div nz-col [nzSpan]=\"8\" class=\"mb-md\" [class.text-right]=\"'true'\">\r\n                <button nz-button type=\"submit\" [nzType]=\"'primary'\" [nzLoading]=\"loading\" [nzSize]=\"'large'\">查询</button>\r\n                <button nz-button type=\"reset\" (click)=\"refreshData()\" [nzSize]=\"'large'\" class=\"mx-sm\">重置</button>\r\n                <button nz-button (click)=\"adduser()\" [nzType]=\"'primary'\" [nzSize]=\"'large'\">\r\n                    <i class=\"anticon anticon-plus\"></i>\r\n                    <span>新建</span>\r\n                </button>\r\n            </div>\r\n        </div>\r\n    </form>\r\n    <nz-table #nzTable [nzAjaxData]=\"data\" [nzTotal]=\"q.total\" [(nzPageIndex)]=\"q.pi\" [(nzPageSize)]=\"q.ps\" [nzLoading]=\"loading\"\r\n        [nzShowSizeChanger]=\"true\" (nzPageIndexChange)=\"refreshData()\" (nzPageSizeChange)=\"refreshData()\">\r\n        <thead nz-thead>\r\n            <tr>\r\n                <th nz-th>\r\n                    <span>账号</span>\r\n                </th>\r\n                <th nz-th>\r\n                    <span>用户名</span>\r\n                </th>\r\n                <th nz-th>\r\n                    <span>邮箱</span>\r\n                </th>\r\n                <th nz-th>\r\n                    <span>启用</span>\r\n                </th>\r\n                <th nz-th>\r\n                    <span>操作</span>\r\n                </th>\r\n            </tr>\r\n        </thead>\r\n        <tbody nz-tbody>\r\n            <tr nz-tbody-tr *ngFor=\"let user of nzTable.data\">\r\n                <td nz-td>{{user.userName}}</td>\r\n                <td nz-td>{{user.name}}</td>\r\n                <td nz-td>{{user.emailAddress}}</td>\r\n                <td nz-td>\r\n                    <nz-badge [nzStatus]=\"user.activeType\" [nzText]=\"user.activeText\"></nz-badge>\r\n                </td>\r\n                <td nz-td>\r\n                    <a (click)=\"editUser(user)\">编辑</a>\r\n                    <span nz-table-divider></span>\r\n                    <a (click)=\"msg.success('删除' + user.id)\">删除</a>\r\n                </td>\r\n            </tr>\r\n        </tbody>\r\n    </nz-table>\r\n</nz-card>\r\n<edit-user-modal #editUserModal (modalSave)=\"refreshData()\"></edit-user-modal>\r\n<create-user-modal #createUserModal (modalSave)=\"refreshData()\"></create-user-modal>\r\n"

/***/ }),

/***/ "../../../../../src/app/admin/users/users.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsersComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng_zorro_antd__ = __webpack_require__("../../../../ng-zorro-antd/esm5/antd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_service_proxies_service_proxies__ = __webpack_require__("../../../../../src/app/shared/service-proxies/service-proxies.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_app_component_base__ = __webpack_require__("../../../../../src/app/shared/app-component-base.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__create_user_create_user_component__ = __webpack_require__("../../../../../src/app/admin/users/create-user/create-user.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__edit_user_edit_user_component__ = __webpack_require__("../../../../../src/app/admin/users/edit-user/edit-user.component.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//import { getRule, saveRule, removeRule } from '../../../../_mock/rule.service';




var UsersComponent = /** @class */ (function (_super) {
    __extends(UsersComponent, _super);
    function UsersComponent(injector, msg, _userService) {
        var _this = _super.call(this, injector) || this;
        _this.msg = msg;
        _this._userService = _userService;
        _this.q = {
            pi: 1,
            ps: 10,
            total: 0,
            sorter: '',
            status: -1,
            statusList: []
        };
        _this.data = [];
        _this.loading = false;
        _this.selectedRows = [];
        _this.curRows = [];
        _this.totalCallNo = 0;
        _this.allChecked = false;
        _this.indeterminate = false;
        _this.status = [
            { text: '启用', value: false, type: 'success' },
            { text: '禁用', value: false, type: 'default' }
        ];
        _this.sortMap = {};
        _this.expandForm = false;
        return _this;
    }
    UsersComponent.prototype.ngOnInit = function () {
        this.refreshData();
    };
    UsersComponent.prototype.adduser = function () {
        this.createUserModal.show();
    };
    /*remove() {
        this.selectedRows.forEach(i => removeRule(i.no));
        this.refreshData();
        this.clear();
    }*/
    UsersComponent.prototype.clear = function () {
        this.selectedRows = [];
        this.totalCallNo = 0;
        this.data.forEach(function (i) { return i.checked = false; });
        this.refreshStatus();
    };
    UsersComponent.prototype.refreshStatus = function () {
        var allChecked = this.curRows.every(function (value) { return value.disabled || value.checked; });
        var allUnChecked = this.curRows.every(function (value) { return value.disabled || !value.checked; });
        this.allChecked = allChecked;
        this.indeterminate = (!allChecked) && (!allUnChecked);
        this.selectedRows = this.data.filter(function (value) { return value.checked; });
        this.totalCallNo = this.selectedRows.reduce(function (total, cv) { return total + cv.callNo; }, 0);
    };
    UsersComponent.prototype.refreshData = function (reset) {
        var _this = this;
        if (reset === void 0) { reset = false; }
        if (reset) {
            this.q.pi = 1;
        }
        this.loading = true;
        this._userService.getAll((this.q.pi - 1) * this.q.ps, this.q.ps).subscribe(function (result) {
            _this.loading = false;
            var status = 0;
            _this.data = result.items.map(function (i) {
                if (i.isActive) {
                    status = 0;
                }
                else {
                    status = 1;
                }
                var statusItem = _this.status[status];
                i.activeText = statusItem.text;
                i.activeType = statusItem.type;
                return i;
            });
            _this.q.total = result.totalCount;
        });
    };
    ;
    UsersComponent.prototype.reset = function (ls) {
        for (var _i = 0, ls_1 = ls; _i < ls_1.length; _i++) {
            var item = ls_1[_i];
            item.value = false;
        }
        this.refreshData();
    };
    UsersComponent.prototype.editUser = function (user) {
        this.editUserModal.show(user.id);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('editUserModal'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_5__edit_user_edit_user_component__["a" /* EditUserComponent */])
    ], UsersComponent.prototype, "editUserModal", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('createUserModal'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_4__create_user_create_user_component__["a" /* CreateUserComponent */])
    ], UsersComponent.prototype, "createUserModal", void 0);
    UsersComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-page-users',
            template: __webpack_require__("../../../../../src/app/admin/users/users.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injector"], __WEBPACK_IMPORTED_MODULE_1_ng_zorro_antd__["NzMessageService"], __WEBPACK_IMPORTED_MODULE_2__shared_service_proxies_service_proxies__["x" /* UserServiceProxy */]])
    ], UsersComponent);
    return UsersComponent;
}(__WEBPACK_IMPORTED_MODULE_3__shared_app_component_base__["a" /* AppComponentBase */]));



/***/ }),

/***/ "../../../../../src/app/admin/weichat-setting/auth-setting/auth-setting.component.html":
/***/ (function(module, exports) {

module.exports = "<!--component html goes here -->\r\n<!-- <nz-card>\r\n\r\n</nz-card> -->\r\n<!-- <form nz-form [formGroup]=\"form\" (ngSubmit)=\"save()\">\r\n    <div nz-form-item nz-row>\r\n        <div nz-form-label nz-col [nzSm]=\"4\">\r\n            <label for=\"name\" nz-form-item-required>\r\n                <span>\r\n                    Nickname\r\n                    <nz-tooltip [nzTitle]=\"'What do you want other to call you'\">\r\n                        <i nz-tooltip class=\"anticon anticon-question-circle-o\"></i>\r\n                    </nz-tooltip>\r\n                </span>\r\n            </label>\r\n        </div>\r\n        <div nz-form-control nz-col [nzSm]=\"20\" nzHasFeedback [nzValidateStatus]=\"name\">\r\n            <nz-input formControlName=\"name\" nzPlaceHolder=\"minlength=6\" [nzId]=\"'name'\"></nz-input>\r\n            <ng-container *ngIf=\"name.dirty || name.touched\">\r\n                <p nz-form-explain *ngIf=\"name.errors?.required\">Please input your nickname!</p>\r\n                <p nz-form-explain *ngIf=\"name.errors?.checked\">Only input 'cipchk'</p>\r\n                <p nz-form-explain *ngIf=\"name.errors?.minlength\">This field requires a min length</p>\r\n            </ng-container>\r\n        </div>\r\n    </div>\r\n    <div nz-form-item nz-row>\r\n        <div nz-form-label nz-col [nzSm]=\"4\">\r\n            <label for=\"appOrgId\" nz-form-item-required>\r\n                <span>\r\n                    Nickname\r\n                    <nz-tooltip [nzTitle]=\"'What do you want other to call you'\">\r\n                        <i nz-tooltip class=\"anticon anticon-question-circle-o\"></i>\r\n                    </nz-tooltip>\r\n                </span>\r\n            </label>\r\n        </div>\r\n        <div nz-form-control nz-col [nzSm]=\"20\" nzHasFeedback [nzValidateStatus]=\"appOrgId\">\r\n            <nz-input formControlName=\"appOrgId\" nzPlaceHolder=\"minlength=6\" [nzId]=\"'appOrgId'\"></nz-input>\r\n            <ng-container *ngIf=\"appOrgId.dirty || appOrgId.touched\">\r\n                <p nz-form-explain *ngIf=\"appOrgId.errors?.required\">Please input your nickname!</p>\r\n                <p nz-form-explain *ngIf=\"appOrgId.errors?.checked\">Only input 'cipchk'</p>\r\n                <p nz-form-explain *ngIf=\"appOrgId.errors?.minlength\">This field requires a min length</p>\r\n            </ng-container>\r\n        </div>\r\n    </div>\r\n    <div nz-form-item nz-row>\r\n        <div nz-form-label nz-col [nzSm]=\"4\">\r\n            <label for=\"appType\" nz-form-item-required>\r\n                <span>\r\n                    Nickname\r\n                    <nz-tooltip [nzTitle]=\"'What do you want other to call you'\">\r\n                        <i nz-tooltip class=\"anticon anticon-question-circle-o\"></i>\r\n                    </nz-tooltip>\r\n                </span>\r\n            </label>\r\n        </div>\r\n        <div nz-form-control nz-col [nzSm]=\"20\" nzHasFeedback [nzValidateStatus]=\"appType\">\r\n            <nz-input formControlName=\"appType\" nzPlaceHolder=\"minlength=6\" [nzId]=\"'appType'\"></nz-input>\r\n            <ng-container *ngIf=\"appType.dirty || appType.touched\">\r\n                <p nz-form-explain *ngIf=\"appType.errors?.required\">Please input your nickname!</p>\r\n                <p nz-form-explain *ngIf=\"appType.errors?.checked\">Only input 'cipchk'</p>\r\n                <p nz-form-explain *ngIf=\"appType.errors?.minlength\">This field requires a min length</p>\r\n            </ng-container>\r\n        </div>\r\n    </div>\r\n    <div nz-form-item nz-row>\r\n        <div nz-form-label nz-col [nzSm]=\"4\">\r\n            <label for=\"appId\" nz-form-item-required>\r\n                <span>\r\n                    Nickname\r\n                    <nz-tooltip [nzTitle]=\"'What do you want other to call you'\">\r\n                        <i nz-tooltip class=\"anticon anticon-question-circle-o\"></i>\r\n                    </nz-tooltip>\r\n                </span>\r\n            </label>\r\n        </div>\r\n        <div nz-form-control nz-col [nzSm]=\"20\" nzHasFeedback [nzValidateStatus]=\"appId\">\r\n            <nz-input formControlName=\"appId\" nzPlaceHolder=\"minlength=6\" [nzId]=\"'appId'\"></nz-input>\r\n            <ng-container *ngIf=\"appId.dirty || appId.touched\">\r\n                <p nz-form-explain *ngIf=\"appId.errors?.required\">Please input your nickname!</p>\r\n                <p nz-form-explain *ngIf=\"appId.errors?.checked\">Only input 'cipchk'</p>\r\n                <p nz-form-explain *ngIf=\"appId.errors?.minlength\">This field requires a min length</p>\r\n            </ng-container>\r\n        </div>\r\n    </div>\r\n    <div nz-form-item nz-row>\r\n        <div nz-form-label nz-col [nzSm]=\"4\">\r\n            <label for=\"appSecret\" nz-form-item-required>\r\n                <span>\r\n                    Nickname\r\n                    <nz-tooltip [nzTitle]=\"'What do you want other to call you'\">\r\n                        <i nz-tooltip class=\"anticon anticon-question-circle-o\"></i>\r\n                    </nz-tooltip>\r\n                </span>\r\n            </label>\r\n        </div>\r\n        <div nz-form-control nz-col [nzSm]=\"20\" nzHasFeedback [nzValidateStatus]=\"appSecret\">\r\n            <nz-input formControlName=\"appSecret\" nzPlaceHolder=\"minlength=6\" [nzId]=\"'appSecret'\"></nz-input>\r\n            <ng-container *ngIf=\"appSecret.dirty || appSecret.touched\">\r\n                <p nz-form-explain *ngIf=\"appSecret.errors?.required\">Please input your nickname!</p>\r\n                <p nz-form-explain *ngIf=\"appSecret.errors?.checked\">Only input 'cipchk'</p>\r\n                <p nz-form-explain *ngIf=\"appSecret.errors?.minlength\">This field requires a min length</p>\r\n            </ng-container>\r\n        </div>\r\n    </div>\r\n    <div nz-form-item nz-row>\r\n        <div nz-form-label nz-col [nzSm]=\"4\">\r\n            <label for=\"qrCodeUrl\" nz-form-item-required>\r\n                <span>\r\n                    Nickname\r\n                    <nz-tooltip [nzTitle]=\"'What do you want other to call you'\">\r\n                        <i nz-tooltip class=\"anticon anticon-question-circle-o\"></i>\r\n                    </nz-tooltip>\r\n                </span>\r\n            </label>\r\n        </div>\r\n        <div nz-form-control nz-col [nzSm]=\"20\" nzHasFeedback [nzValidateStatus]=\"qrCodeUrl\">\r\n            <nz-input formControlName=\"qrCodeUrl\" nzPlaceHolder=\"minlength=6\" [nzId]=\"'qrCodeUrl'\"></nz-input>\r\n            <ng-container *ngIf=\"qrCodeUrl.dirty || qrCodeUrl.touched\">\r\n                <p nz-form-explain *ngIf=\"qrCodeUrl.errors?.required\">Please input your nickname!</p>\r\n                <p nz-form-explain *ngIf=\"qrCodeUrl.errors?.checked\">Only input 'cipchk'</p>\r\n                <p nz-form-explain *ngIf=\"qrCodeUrl.errors?.minlength\">This field requires a min length</p>\r\n            </ng-container>\r\n        </div>\r\n    </div>\r\n    <div nz-form-item nz-row>\r\n        <div nz-form-label nz-col [nzSm]=\"4\">\r\n            <label for=\"token\" nz-form-item-required>\r\n                <span>\r\n                    Nickname\r\n                    <nz-tooltip [nzTitle]=\"'What do you want other to call you'\">\r\n                        <i nz-tooltip class=\"anticon anticon-question-circle-o\"></i>\r\n                    </nz-tooltip>\r\n                </span>\r\n            </label>\r\n        </div>\r\n        <div nz-form-control nz-col [nzSm]=\"20\" nzHasFeedback [nzValidateStatus]=\"token\">\r\n            <nz-input formControlName=\"token\" nzPlaceHolder=\"minlength=6\" [nzId]=\"'token'\"></nz-input>\r\n            <ng-container *ngIf=\"token.dirty || token.touched\">\r\n                <p nz-form-explain *ngIf=\"token.errors?.required\">Please input your nickname!</p>\r\n                <p nz-form-explain *ngIf=\"token.errors?.checked\">Only input 'cipchk'</p>\r\n                <p nz-form-explain *ngIf=\"token.errors?.minlength\">This field requires a min length</p>\r\n            </ng-container>\r\n        </div>\r\n    </div>\r\n    <div nz-form-item nz-row>\r\n        <div nz-form-label nz-col [nzSm]=\"4\">\r\n            <label for=\"expiresIn\" nz-form-item-required>\r\n                <span>\r\n                    Nickname\r\n                    <nz-tooltip [nzTitle]=\"'What do you want other to call you'\">\r\n                        <i nz-tooltip class=\"anticon anticon-question-circle-o\"></i>\r\n                    </nz-tooltip>\r\n                </span>\r\n            </label>\r\n        </div>\r\n        <div nz-form-control nz-col [nzSm]=\"20\" nzHasFeedback [nzValidateStatus]=\"expiresIn\">\r\n            <nz-input formControlName=\"expiresIn\" nzPlaceHolder=\"minlength=6\" [nzId]=\"'expiresIn'\"></nz-input>\r\n            <ng-container *ngIf=\"expiresIn.dirty || expiresIn.touched\">\r\n                <p nz-form-explain *ngIf=\"expiresIn.errors?.required\">Please input your nickname!</p>\r\n                <p nz-form-explain *ngIf=\"expiresIn.errors?.checked\">Only input 'cipchk'</p>\r\n                <p nz-form-explain *ngIf=\"expiresIn.errors?.minlength\">This field requires a min length</p>\r\n            </ng-container>\r\n        </div>\r\n    </div>\r\n    <div nz-form-item nz-row>\r\n        <div nz-form-label nz-col [nzSm]=\"4\">\r\n            <label for=\"accessToken\" nz-form-item-required>\r\n                <span>\r\n                    Nickname\r\n                    <nz-tooltip [nzTitle]=\"'What do you want other to call you'\">\r\n                        <i nz-tooltip class=\"anticon anticon-question-circle-o\"></i>\r\n                    </nz-tooltip>\r\n                </span>\r\n            </label>\r\n        </div>\r\n        <div nz-form-control nz-col [nzSm]=\"20\" nzHasFeedback [nzValidateStatus]=\"accessToken\">\r\n            <nz-input formControlName=\"accessToken\" nzPlaceHolder=\"minlength=6\" [nzId]=\"'accessToken'\"></nz-input>\r\n            <ng-container *ngIf=\"accessToken.dirty || accessToken.touched\">\r\n                <p nz-form-explain *ngIf=\"accessToken.errors?.required\">Please input your nickname!</p>\r\n                <p nz-form-explain *ngIf=\"accessToken.errors?.checked\">Only input 'cipchk'</p>\r\n                <p nz-form-explain *ngIf=\"accessToken.errors?.minlength\">This field requires a min length</p>\r\n            </ng-container>\r\n        </div>\r\n    </div>\r\n    <div nz-form-item nz-row>\r\n        <div nz-form-label nz-col [nzSm]=\"4\">\r\n            <label for=\"nextGettime\" nz-form-item-required>\r\n                <span>\r\n                    Nickname\r\n                    <nz-tooltip [nzTitle]=\"'What do you want other to call you'\">\r\n                        <i nz-tooltip class=\"anticon anticon-question-circle-o\"></i>\r\n                    </nz-tooltip>\r\n                </span>\r\n            </label>\r\n        </div>\r\n        <div nz-form-control nz-col [nzSm]=\"20\" nzHasFeedback [nzValidateStatus]=\"nextGettime\">\r\n            <nz-input formControlName=\"nextGettime\" nzPlaceHolder=\"minlength=6\" [nzId]=\"'nextGettime'\"></nz-input>\r\n            <ng-container *ngIf=\"nextGettime.dirty || nextGettime.touched\">\r\n                <p nz-form-explain *ngIf=\"nextGettime.errors?.required\">Please input your nickname!</p>\r\n                <p nz-form-explain *ngIf=\"nextGettime.errors?.checked\">Only input 'cipchk'</p>\r\n                <p nz-form-explain *ngIf=\"nextGettime.errors?.minlength\">This field requires a min length</p>\r\n            </ng-container>\r\n        </div>\r\n    </div>\r\n</form> -->\r\n<nz-card>\r\n    <form nz-form [formGroup]=\"form\" id=\"frm_create_role\" (ngSubmit)=\"save()\">\r\n\r\n        <div nz-form-item nz-row>\r\n            <div nz-form-label nz-col [nzSm]=\"4\">\r\n                <label for=\"name\" nz-form-item-required>微信号名称</label>\r\n            </div>\r\n            <div nz-form-control nz-col [nzSm]=\"20\" nzHasFeedback [nzValidateStatus]=\"getFormControl('name')\">\r\n                <nz-input formControlName=\"name\" [(ngModel)]=\"authSet.name\" [nzId]=\"'name'\"></nz-input>\r\n                <div nz-form-explain *ngIf=\"getFormControl('name').dirty&&getFormControl('name').hasError('maxlength')\">字符长度小于等于50</div>\r\n                <div nz-form-explain *ngIf=\"getFormControl('name').dirty&&getFormControl('name').hasError('required')\">请输入微信号名称</div>\r\n            </div>\r\n        </div>\r\n        <div nz-form-item nz-row>\r\n            <div nz-form-label nz-col [nzSm]=\"4\">\r\n                <label for=\"appOrgId\" nz-form-item-required>微信原始ID</label>\r\n            </div>\r\n            <div nz-form-control nz-col [nzSm]=\"20\" nzHasFeedback [nzValidateStatus]=\"getFormControl('appOrgId')\">\r\n                <nz-input formControlName=\"appOrgId\" [(ngModel)]=\"authSet.appOrgId\" [nzId]=\"'appOrgId'\"></nz-input>\r\n                <div nz-form-explain *ngIf=\"getFormControl('appOrgId').dirty&&getFormControl('appOrgId').hasError('maxlength')\">字符长度小于等于250</div>\r\n                <div nz-form-explain *ngIf=\"getFormControl('appOrgId').dirty&&getFormControl('appOrgId').hasError('required')\">请输入微信原始ID</div>\r\n            </div>\r\n        </div>\r\n        <div nz-form-item nz-row>\r\n            <div nz-form-label nz-col [nzSm]=\"4\">\r\n                <label for=\"appType\" nz-form-item-required>微信类型</label>\r\n            </div>\r\n            <div nz-form-control nz-col [nzSm]=\"20\" nzHasFeedback [nzValidateStatus]=\"getFormControl('appType')\">\r\n                <!-- <nz-radio-group>\r\n                    <label nz-radio-button [nzValue]=\"'1'\">\r\n                        <span>订阅号</span>\r\n                    </label>\r\n                    <label nz-radio-button [nzValue]=\"'2'\">\r\n                        <span>认证订阅号</span>\r\n                    </label>\r\n                    <label nz-radio-button [nzValue]=\"'3'\">\r\n                        <span>服务号</span>\r\n                    </label>\r\n                    <label nz-radio-button [nzValue]=\"'4'\">\r\n                        <span>认证服务号</span>\r\n                    </label>\r\n                </nz-radio-group> -->\r\n                <nz-radio-group formControlName=\"appType\"  [(ngModel)]=\"authSet.appType\" class=\"mb-md\">\r\n                        <label nz-radio [nzValue]=\"1\"><span>订阅号</span></label>\r\n                        <label nz-radio [nzValue]=\"2\"><span>认证订阅号</span></label>\r\n                        <label nz-radio [nzValue]=\"3\"><span>服务号</span></label>\r\n                        <label nz-radio [nzValue]=\"4\"><span>认证服务号</span></label>\r\n                </nz-radio-group>\r\n                <!-- <nz-input formControlName=\"appType\" [(ngModel)]=\"authSet.appType\" nzPlaceHolder=\"请输入小于等于32的字符\" [nzId]=\"'appType'\"></nz-input>\r\n                    <div nz-form-explain *ngIf=\"getFormControl('appType').dirty&&getFormControl('appType').hasError('required')\">请输入角色显示名</div> -->\r\n            </div>\r\n        </div>\r\n        <div nz-form-item nz-row>\r\n            <div nz-form-label nz-col [nzSm]=\"4\">\r\n                <label for=\"appId\" nz-form-item-required>微信AppID</label>\r\n            </div>\r\n            <div nz-form-control nz-col [nzSm]=\"20\" nzHasFeedback [nzValidateStatus]=\"getFormControl('appId')\">\r\n                <nz-input formControlName=\"appId\" [(ngModel)]=\"authSet.appId\" [nzId]=\"'appId'\"></nz-input>\r\n                <div nz-form-explain *ngIf=\"getFormControl('appId').dirty&&getFormControl('appId').hasError('maxlength')\">字符长度小于等于250</div>\r\n                <div nz-form-explain *ngIf=\"getFormControl('appId').dirty&&getFormControl('appId').hasError('required')\">请输入微信AppID</div>\r\n            </div>\r\n        </div>\r\n        <div nz-form-item nz-row>\r\n            <div nz-form-label nz-col [nzSm]=\"4\">\r\n                <label for=\"appSecret\" nz-form-item-required>微信AppSecret</label>\r\n            </div>\r\n            <div nz-form-control nz-col [nzSm]=\"20\" nzHasFeedback [nzValidateStatus]=\"getFormControl('appSecret')\">\r\n                <nz-input formControlName=\"appSecret\" [(ngModel)]=\"authSet.appSecret\" [nzId]=\"'appSecret'\"></nz-input>\r\n                <div nz-form-explain *ngIf=\"getFormControl('appSecret').dirty&&getFormControl('appSecret').hasError('maxlength')\">字符长度小于等于250</div>\r\n                <div nz-form-explain *ngIf=\"getFormControl('appSecret').dirty&&getFormControl('appSecret').hasError('required')\">请输入微信AppSecret</div>\r\n            </div>\r\n        </div>\r\n        <div nz-form-item nz-row>\r\n            <div nz-form-label nz-col [nzSm]=\"4\">\r\n                <label for=\"encodingAESKey\">微信EncodingAESKey</label>\r\n            </div>\r\n            <div nz-form-control nz-col [nzSm]=\"20\" nzHasFeedback [nzValidateStatus]=\"getFormControl('encodingAESKey')\">\r\n                <nz-input formControlName=\"encodingAESKey\" [(ngModel)]=\"authSet.encodingAESKey\" [nzId]=\"'encodingAESKey'\"></nz-input>\r\n                <div nz-form-explain *ngIf=\"getFormControl('encodingAESKey').dirty&&getFormControl('encodingAESKey').hasError('maxlength')\">字符长度小于等于500</div>\r\n            </div>\r\n        </div>\r\n        <div nz-form-item nz-row>\r\n            <div nz-form-label nz-col [nzSm]=\"4\">\r\n                <label for=\"qrCodeUrl\">微信二维码图片URL</label>\r\n            </div>\r\n            <div nz-form-control nz-col [nzSm]=\"20\" nzHasFeedback [nzValidateStatus]=\"getFormControl('qrCodeUrl')\">\r\n                <!-- <nz-input formControlName=\"qrCodeUrl\" [(ngModel)]=\"authSet.qrCodeUrl\" [nzId]=\"'qrCodeUrl'\"></nz-input> -->\r\n                <label nz-upload nzAccept=\"image\"\r\n                nzAction=\"https://jsonplaceholder.typicode.com/posts/\">\r\n                <button nz-button>\r\n                  <i class=\"anticon anticon-upload\"></i><span>上传</span>\r\n                </button>\r\n              </label>\r\n                <!-- <div nz-form-explain *ngIf=\"getFormControl('qrCodeUrl').dirty&&getFormControl('qrCodeUrl').hasError('maxlength')\">字符长度小于等于250</div> -->\r\n            </div>\r\n        </div>\r\n        <div nz-form-item nz-row>\r\n            <div nz-form-label nz-col [nzSm]=\"4\">\r\n                <label for=\"token\" nz-form-item-required>微信Token</label>\r\n            </div>\r\n            <div nz-form-control nz-col [nzSm]=\"20\" nzHasFeedback [nzValidateStatus]=\"getFormControl('token')\">\r\n                <nz-input formControlName=\"token\" [(ngModel)]=\"authSet.token\" [nzId]=\"'token'\"></nz-input>\r\n                <div nz-form-explain *ngIf=\"getFormControl('token').dirty&&getFormControl('token').hasError('maxlength')\">字符长度小于等于250</div>\r\n                <div nz-form-explain *ngIf=\"getFormControl('token').dirty&&getFormControl('token').hasError('required')\">请输入角色显示名</div>\r\n            </div>\r\n        </div>\r\n        <!-- <div nz-form-item nz-row>\r\n            <div nz-form-label nz-col [nzSm]=\"4\">\r\n                <label for=\"accessToken\">微信access_token</label>\r\n            </div>\r\n            <div nz-form-control nz-col [nzSm]=\"20\" nzHasFeedback [nzValidateStatus]=\"getFormControl('accessToken')\">\r\n                <nz-input formControlName=\"accessToken\" [(ngModel)]=\"authSet.accessToken\" [nzId]=\"'accessToken'\"></nz-input>\r\n                <div nz-form-explain *ngIf=\"getFormControl('accessToken').dirty&&getFormControl('accessToken').hasError('maxlength')\">字符长度小于等于255</div>\r\n            </div>\r\n        </div>\r\n        <div nz-form-item nz-row>\r\n            <div nz-form-label nz-col [nzSm]=\"4\">\r\n                <label for=\"expiresIn\">微信expires_in</label>\r\n            </div>\r\n            <div nz-form-control nz-col [nzSm]=\"20\" nzHasFeedback [nzValidateStatus]=\"getFormControl('expiresIn')\">\r\n                <nz-input formControlName=\"expiresIn\" [(ngModel)]=\"authSet.expiresIn\" [nzId]=\"'expiresIn'\"></nz-input>\r\n            </div>\r\n        </div>\r\n        <div nz-form-item nz-row>\r\n            <div nz-form-label nz-col [nzSm]=\"4\">\r\n                <label for=\"nextGettime\">微信next_gettime</label>\r\n            </div>\r\n            <div nz-form-control nz-col [nzSm]=\"20\" nzHasFeedback [nzValidateStatus]=\"getFormControl('nextGettime')\">\r\n                <nz-input formControlName=\"nextGettime\" [(ngModel)]=\"authSet.nextGettime\" [nzId]=\"'nextGettime'\"></nz-input>\r\n            </div>\r\n        </div> -->\r\n        <div nz-form-item nz-row  class=\"mb0\">\r\n            <div nz-form-label nz-col [nzSm]=\"5\">\r\n                <!-- <button nz-button [nzType]=\"'default'\" [nzSize]=\"'large'\" type=\"button\" (click)=\"handleCancel($event)\">\r\n                    {{l(\"取消\")}}\r\n                </button> -->\r\n                <button nz-button [nzType]=\"'primary'\" [nzSize]=\"'large'\" type=\"submit\" [nzLoading]=\"isConfirmLoading\">\r\n                    {{l(\"保存\")}}\r\n                </button>\r\n            </div>\r\n        </div>\r\n    </form>\r\n</nz-card>"

/***/ }),

/***/ "../../../../../src/app/admin/weichat-setting/auth-setting/auth-setting.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthSettingComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_service_proxies_entity_auth_setting__ = __webpack_require__("../../../../../src/app/shared/service-proxies/entity/auth-setting.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_app_component_base__ = __webpack_require__("../../../../../src/app/shared/app-component-base.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_service_proxies_service_proxies__ = __webpack_require__("../../../../../src/app/shared/service-proxies/service-proxies.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AuthSettingComponent = /** @class */ (function (_super) {
    __extends(AuthSettingComponent, _super);
    function AuthSettingComponent(injector, fb, service) {
        var _this = _super.call(this, injector) || this;
        _this.fb = fb;
        _this.service = service;
        _this.authSet = new __WEBPACK_IMPORTED_MODULE_2__shared_service_proxies_entity_auth_setting__["a" /* AuthSetting */]();
        return _this;
    }
    /**
     * 页面初始加载
     */
    AuthSettingComponent.prototype.ngOnInit = function () {
        this.form = this.fb.group({
            name: [null, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].maxLength(50), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required])]],
            appOrgId: [null, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].maxLength(250)])]],
            appType: [null, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required]],
            appId: [null, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].maxLength(250)])]],
            appSecret: [null, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].maxLength(250)])]],
            encodingAESKey: [null, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].maxLength(500)])]],
            qrCodeUrl: [null, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].maxLength(250)]],
            token: [null, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].maxLength(250)])]]
            // accessToken: [null, [Validators.maxLength(255)]],
            // expiresIn: [null],
            // nextGettime: [null]
        });
        this.getAuthSetByTenantId();
    };
    /**
     *
     * @param name
     */
    AuthSettingComponent.prototype.getFormControl = function (name) {
        return this.form.controls[name];
    };
    /**
     * 更新新增微信配置
     */
    AuthSettingComponent.prototype.save = function () {
        var _this = this;
        for (var i in this.form.controls) {
            this.form.controls[i].markAsDirty();
        }
        if (this.form.valid) {
            this.service.update(this.authSet).subscribe(function () {
                _this.notify.info(_this.l('保存成功！'));
            });
        }
        abp.multiTenancy.setTenantIdCookie();
    };
    /**
     * 通过租户id获取微信配置
     */
    AuthSettingComponent.prototype.getAuthSetByTenantId = function () {
        var _this = this;
        this.service.get().subscribe(function (result) {
            _this.authSet = result;
        });
    };
    AuthSettingComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            moduleId: module.i,
            selector: 'auth-setting',
            template: __webpack_require__("../../../../../src/app/admin/weichat-setting/auth-setting/auth-setting.component.html"),
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injector"], __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormBuilder"], __WEBPACK_IMPORTED_MODULE_4__shared_service_proxies_service_proxies__["d" /* AuthSettingServiceProxy */]])
    ], AuthSettingComponent);
    return AuthSettingComponent;
}(__WEBPACK_IMPORTED_MODULE_3__shared_app_component_base__["a" /* AppComponentBase */]));



/***/ }),

/***/ "../../../../../src/app/admin/weichat-setting/messages/create-message/create-message.component.html":
/***/ (function(module, exports) {

module.exports = "<form nz-form [formGroup]=\"formc\" *ngIf=\"modalVisible\" id=\"frm_create_message\" (ngSubmit)=\"save()\">\r\n    <nz-modal [nzVisible]=\"modalVisible\" [nzTitle]=\"'创建关键字回复'\" [nzConfirmLoading]=\"loading\" [nzContent]=\"modalContent\" [nzFooter]=\"modalFooter\"\r\n        (nzOnCancel)=\"handleCancel($event)\">\r\n        <ng-template #modalContent>\r\n            <fieldset>\r\n                <div nz-form-item nz-row>\r\n                    <div nz-form-label nz-col [nzSm]=\"4\">\r\n                        <label for=\"keyWord\" nz-form-item-required>关键字</label>\r\n                    </div>\r\n                    <div nz-form-control nz-col [nzSm]=\"20\" nzHasFeedback [nzValidateStatus]=\"getcFormControl('keyWord')\">\r\n                        <nz-input formControlName=\"keyWord\" [(ngModel)]=\"messages.keyWord\"  [nzId]=\"'tenancyName'\"></nz-input>\r\n                        <div nz-form-explain *ngIf=\"getcFormControl('keyWord').dirty&&getcFormControl('keyWord').hasError('maxlength')\">字符长度小于等于50</div>\r\n                        <div nz-form-explain *ngIf=\"getcFormControl('keyWord').dirty&&getcFormControl('keyWord').hasError('required')\">关键字不能为空</div>\r\n                    </div>\r\n                </div>\r\n                <div nz-form-item nz-row>\r\n                    <div nz-form-label nz-col [nzSm]=\"4\">\r\n                        <label for=\"matchMode\" nz-form-item-required>匹配模式</label>\r\n                    </div>\r\n                    <div nz-form-control nz-col [nzSm]=\"20\" nzHasFeedback [nzValidateStatus]=\"getcFormControl('matchMode')\">\r\n                        <nz-radio-group formControlName=\"matchMode\" [(ngModel)]=\"messages.matchMode\" class=\"mb-md\">\r\n                            <label nz-radio [nzValue]=\"1\">\r\n                                <span>精准匹配</span>\r\n                            </label>\r\n                            <label nz-radio [nzValue]=\"2\">\r\n                                <span>模糊匹配</span>\r\n                            </label>\r\n                        </nz-radio-group>\r\n                    </div>\r\n                </div>\r\n                <div nz-form-item nz-row>\r\n                        <div nz-form-label nz-col [nzSm]=\"4\">\r\n                            <label for=\"msgType\" nz-form-item-required>消息类型</label>\r\n                        </div>\r\n                        <div nz-form-control nz-col [nzSm]=\"20\" nzHasFeedback [nzValidateStatus]=\"getcFormControl('msgType')\">\r\n                            <nz-radio-group formControlName=\"msgType\" [(ngModel)]=\"messages.msgType\" class=\"mb-md\">\r\n                                <label nz-radio [nzValue]=\"1\">\r\n                                    <span>文字消息</span>\r\n                                </label>\r\n                                <label nz-radio [nzValue]=\"2\">\r\n                                    <span>图文消息</span>\r\n                                </label>\r\n                            </nz-radio-group>\r\n                            <!-- <nz-dropdown *ngFor=\"let type of msyTypes\">\r\n                                <ul nz-menu >\r\n                                        <li nz-menu-item>  {{type.text}}</li>\r\n                                  </ul>\r\n                            </nz-dropdown> -->\r\n                        </div>\r\n                    </div>\r\n                <div nz-form-control nz-col [nzSm]=\"20\" nzHasFeedback [nzValidateStatus]=\"getcFormControl('content')\">\r\n                    <div nz-form-label nz-col [nzSm]=\"4\">\r\n                        <label for=\"content\" nz-form-item-required>内容</label>\r\n                    </div>\r\n                    <nz-input nzType=\"textarea\" nzRows=\"4\" formControlName=\"content\" [(ngModel)]=\"messages.content\" [nzId]=\"'content'\"></nz-input>\r\n                    <div nz-form-explain *ngIf=\"getcFormControl('content').dirty&&getcFormControl('content').hasError('required')\">内容不能为空</div>\r\n                </div>\r\n            </fieldset>\r\n        </ng-template>\r\n        <ng-template #modalFooter>\r\n            <button nz-button [nzType]=\"'default'\" [nzSize]=\"'large'\" type=\"button\" (click)=\"handleCancel($event)\">\r\n                {{l(\"取消\")}}\r\n            </button>\r\n            <button nz-button [nzType]=\"'primary'\" [nzSize]=\"'large'\" type=\"submit\" [nzLoading]=\"isConfirmLoading\">\r\n                {{l(\"保存\")}}\r\n            </button>\r\n        </ng-template>\r\n    </nz-modal>\r\n</form>"

/***/ }),

/***/ "../../../../../src/app/admin/weichat-setting/messages/create-message/create-message.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateMessageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_app_component_base__ = __webpack_require__("../../../../../src/app/shared/app-component-base.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_service_proxies_service_proxies__ = __webpack_require__("../../../../../src/app/shared/service-proxies/service-proxies.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_service_proxies_entity_messages__ = __webpack_require__("../../../../../src/app/shared/service-proxies/entity/messages.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CreateMessageComponent = /** @class */ (function (_super) {
    __extends(CreateMessageComponent, _super);
    function CreateMessageComponent(injector, messageService, fb) {
        var _this = _super.call(this, injector) || this;
        _this.messageService = messageService;
        _this.fb = fb;
        _this.modalSave = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        //模态框是否可见
        _this.modalVisible = false;
        //加载效果
        _this.isConfirmLoading = false;
        _this.messages = new __WEBPACK_IMPORTED_MODULE_3__shared_service_proxies_entity_messages__["a" /* Messagess */]();
        /**
         * 取消按钮事件
         */
        _this.handleCancel = function (e) {
            _this.modalVisible = false;
            _this.isConfirmLoading = false;
            _this.reset(e);
        };
        var msyTypes = [
            { value: 1, text: '文字消息' },
            { value: 2, text: '图文消息' },
        ];
        return _this;
    }
    /**
     * 页面初始加载
     */
    CreateMessageComponent.prototype.ngOnInit = function () {
        this.formc = this.fb.group({
            keyWord: [null, [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].maxLength(50)])]],
            matchMode: [null, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].required],
            msgType: [null, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].required],
            content: [null, [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].required])]]
        });
    };
    /**
     * 显示模态框（进入新增页）
     */
    CreateMessageComponent.prototype.show = function () {
        this.modalVisible = true;
    };
    CreateMessageComponent.prototype.reset = function (e) {
        if (e) {
            e.preventDefault();
        }
        this.formc.reset();
        for (var key in this.formc.controls) {
            this.formc.controls[key].markAsPristine();
        }
    };
    /**
     *
     * @param name
     */
    CreateMessageComponent.prototype.getcFormControl = function (name) {
        return this.formc.controls[name];
    };
    /**
     * 保存关键字回复信息
     */
    CreateMessageComponent.prototype.save = function () {
        var _this = this;
        for (var i in this.formc.controls) {
            this.formc.controls[i].markAsDirty();
        }
        this.isConfirmLoading = true;
        this.messageService.update(this.messages)
            .finally(function () {
            _this.isConfirmLoading = false;
        })
            .subscribe(function () {
            _this.notify.info(_this.l('保存成功！'));
            _this.modalVisible = false;
            _this.modalSave.emit(null);
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], CreateMessageComponent.prototype, "modalSave", void 0);
    CreateMessageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            moduleId: module.i,
            selector: 'create-message-modal',
            template: __webpack_require__("../../../../../src/app/admin/weichat-setting/messages/create-message/create-message.component.html"),
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injector"], __WEBPACK_IMPORTED_MODULE_2__shared_service_proxies_service_proxies__["n" /* MessageServiceProxy */], __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormBuilder"]])
    ], CreateMessageComponent);
    return CreateMessageComponent;
}(__WEBPACK_IMPORTED_MODULE_1__shared_app_component_base__["a" /* AppComponentBase */]));



/***/ }),

/***/ "../../../../../src/app/admin/weichat-setting/messages/edit-message/edit-message.component.html":
/***/ (function(module, exports) {

module.exports = "<form nz-form [formGroup]=\"forme\" *ngIf=\"modalVisible\" id=\"frm_edit_message\" (ngSubmit)=\"save()\">\r\n    <nz-modal [nzVisible]=\"modalVisible\" [nzTitle]=\"'关键字回复编辑'\" [nzConfirmLoading]=\"loading\" [nzContent]=\"modalContent\" [nzFooter]=\"modalFooter\"\r\n        (nzOnCancel)=\"handleCancel($event)\">\r\n        <ng-template #modalContent>\r\n\r\n            <ng-template #nzTabHeading>\r\n                关键字回复\r\n            </ng-template>\r\n            <fieldset>\r\n                <div nz-form-item nz-row>\r\n                    <div nz-form-label nz-col [nzSm]=\"4\">\r\n                        <label for=\"keyWord\" nz-form-item-required>关键字</label>\r\n                    </div>\r\n                    <div nz-form-control nz-col [nzSm]=\"20\" nzHasFeedback [nzValidateStatus]=\"geteFormControl('keyWord')\">\r\n                        <nz-input formControlName=\"keyWord\" [(ngModel)]=\"messages.keyWord\" [nzId]=\"'tenancyName'\"></nz-input>\r\n                        <div nz-form-explain *ngIf=\"geteFormControl('keyWord').dirty&&geteFormControl('keyWord').hasError('maxlength')\">字符长度小于等于50</div>\r\n                        <div nz-form-explain *ngIf=\"geteFormControl('keyWord').dirty&&geteFormControl('keyWord').hasError('required')\">关键字不能为空</div>\r\n                    </div>\r\n                </div>\r\n                <div nz-form-item nz-row>\r\n                    <div nz-form-label nz-col [nzSm]=\"4\">\r\n                        <label for=\"matchMode\" nz-form-item-required>匹配模式</label>\r\n                    </div>\r\n                    <div nz-form-control nz-col [nzSm]=\"20\" nzHasFeedback [nzValidateStatus]=\"geteFormControl('matchMode')\">\r\n                        <nz-radio-group formControlName=\"matchMode\" [(ngModel)]=\"messages.matchMode\" class=\"mb-md\">\r\n                            <label nz-radio [nzValue]=\"1\">\r\n                                <span>精准匹配</span>\r\n                            </label>\r\n                            <label nz-radio [nzValue]=\"2\">\r\n                                <span>模糊匹配</span>\r\n                            </label>\r\n                        </nz-radio-group>\r\n                        <!-- <nz-input formControlName=\"matchMode\" [(ngModel)]=\"messages.matchMode\" [nzId]=\"'matchMode'\"></nz-input>\r\n                        <div nz-form-explain *ngIf=\"geteFormControl('matchMode').dirty&&geteFormControl('matchMode').hasError('maxlength')\">字符长度小于等于128</div>\r\n                        <div nz-form-explain *ngIf=\"geteFormControl('matchMode').dirty&&geteFormControl('matchMode').hasError('required')\">请输入名称</div> -->\r\n                    </div>\r\n                </div>\r\n                <div nz-form-item nz-row>\r\n                    <div nz-form-label nz-col [nzSm]=\"4\">\r\n                        <label for=\"msgType\" nz-form-item-required>消息类型</label>\r\n                    </div>\r\n                    <div nz-form-control nz-col [nzSm]=\"20\" nzHasFeedback [nzValidateStatus]=\"geteFormControl('msgType')\">\r\n                        <nz-radio-group formControlName=\"msgType\" [(ngModel)]=\"messages.msgType\" class=\"mb-md\">\r\n                            <label nz-radio [nzValue]=\"1\">\r\n                                <span>文字消息</span>\r\n                            </label>\r\n                            <label nz-radio [nzValue]=\"2\">\r\n                                <span>图文消息</span>\r\n                            </label>\r\n                        </nz-radio-group>\r\n                    </div>\r\n                </div>\r\n                <div nz-form-control nz-col [nzSm]=\"20\" nzHasFeedback [nzValidateStatus]=\"geteFormControl('content')\">\r\n                    <div nz-form-label nz-col [nzSm]=\"4\">\r\n                        <label for=\"content\" nz-form-item-required>回复内容</label>\r\n                    </div>\r\n                    <nz-input nzType=\"textarea\" nzRows=\"4\" formControlName=\"content\" [(ngModel)]=\"messages.content\" [nzId]=\"'content'\"></nz-input>\r\n                    <div nz-form-explain *ngIf=\"geteFormControl('content').dirty&&geteFormControl('content').hasError('required')\">内容不能为空</div>\r\n                </div>\r\n            </fieldset>\r\n        </ng-template>\r\n        <ng-template #modalFooter>\r\n            <button nz-button [nzType]=\"'default'\" [nzSize]=\"'large'\" type=\"button\" (click)=\"handleCancel($event)\">\r\n                {{l(\"取消\")}}\r\n            </button>\r\n            <button nz-button [nzType]=\"'primary'\" [nzSize]=\"'large'\" type=\"submit\" [nzLoading]=\"isConfirmLoading\">\r\n                {{l(\"保存\")}}\r\n            </button>\r\n        </ng-template>\r\n    </nz-modal>\r\n</form>"

/***/ }),

/***/ "../../../../../src/app/admin/weichat-setting/messages/edit-message/edit-message.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditMessageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_service_proxies_service_proxies__ = __webpack_require__("../../../../../src/app/shared/service-proxies/service-proxies.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_service_proxies_entity_messages__ = __webpack_require__("../../../../../src/app/shared/service-proxies/entity/messages.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_app_component_base__ = __webpack_require__("../../../../../src/app/shared/app-component-base.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var EditMessageComponent = /** @class */ (function (_super) {
    __extends(EditMessageComponent, _super);
    function EditMessageComponent(injector, messageService, fb) {
        var _this = _super.call(this, injector) || this;
        _this.messageService = messageService;
        _this.fb = fb;
        _this.modalSave = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        _this.messages = new __WEBPACK_IMPORTED_MODULE_2__shared_service_proxies_entity_messages__["a" /* Messagess */]();
        _this.modalVisible = false;
        _this.isConfirmLoading = false;
        return _this;
    }
    /**
     * 页面初始加载
     */
    EditMessageComponent.prototype.ngOnInit = function () {
        this.forme = this.fb.group({
            keyWord: [null, [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].maxLength(50)])]],
            matchMode: [null, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].required],
            msgType: [null, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].required],
            content: [null, [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].required])]]
        });
    };
    /**
     * 进入编辑页方法
     * @param id
     */
    EditMessageComponent.prototype.show = function (id) {
        this.getMessageById(id);
        this.modalVisible = true;
    };
    /**
    *
    * @param name
    */
    EditMessageComponent.prototype.geteFormControl = function (name) {
        return this.forme.controls[name];
    };
    /**
     * 取消按钮
     */
    EditMessageComponent.prototype.handleCancel = function () {
        this.modalVisible = false;
        this.isConfirmLoading = false;
        this.reset();
    };
    EditMessageComponent.prototype.reset = function (e) {
        if (e) {
            e.preventDefault();
        }
        this.forme.reset();
        for (var key in this.forme.controls) {
            this.forme.controls[key].markAsPristine();
        }
    };
    /**
     * 获取单条自动回复消息
     * @param id 自动回复消息id
     */
    EditMessageComponent.prototype.getMessageById = function (id) {
        var _this = this;
        this.messageService.get(id).subscribe(function (result) {
            _this.messages = result;
        });
    };
    /**
     * 保存自动回复信息
     */
    EditMessageComponent.prototype.save = function () {
        var _this = this;
        //将控件标记为已编辑过
        for (var i in this.forme.controls) {
            this.forme.controls[i].markAsDirty();
        }
        if (this.forme.valid) {
            this.messageService.update(this.messages)
                .finally(function () { _this.isConfirmLoading = false; })
                .subscribe(function () {
                _this.notify.info(_this.l('保存成功！'));
                _this.modalVisible = false;
                _this.modalSave.emit(null);
            });
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], EditMessageComponent.prototype, "modalSave", void 0);
    EditMessageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            moduleId: module.i,
            selector: 'edit-message-modal',
            template: __webpack_require__("../../../../../src/app/admin/weichat-setting/messages/edit-message/edit-message.component.html"),
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injector"], __WEBPACK_IMPORTED_MODULE_1__shared_service_proxies_service_proxies__["n" /* MessageServiceProxy */], __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormBuilder"]])
    ], EditMessageComponent);
    return EditMessageComponent;
}(__WEBPACK_IMPORTED_MODULE_4__shared_app_component_base__["a" /* AppComponentBase */]));



/***/ }),

/***/ "../../../../../src/app/admin/weichat-setting/messages/messages.component.html":
/***/ (function(module, exports) {

module.exports = "<!--component html goes here -->\r\n<pro-header>\r\n</pro-header>\r\n<nz-tabset>\r\n    <nz-tab>\r\n        <ng-template #nzTabHeading>\r\n            自动回复\r\n        </ng-template>\r\n        <nz-card [nzBordered]=\"false\">\r\n            <form nz-form (ngSubmit)=\"getMessgeAll()\" [nzLayout]=\"'inline'\">\r\n                <div nz-row [nzGutter]=\"24\">\r\n                    <ng-template #deleteContent>\r\n                        <h2>是否删除关键字{{mesT}}?</h2>\r\n                    </ng-template>\r\n                    <div nz-col [nzSpan]=\"8\" class=\"mb-md\">\r\n                        <div nz-form-item class=\"d-flex\">\r\n                            <div nz-form-control class=\"flex-1\">\r\n                                <nz-input [(ngModel)]=\"mesText\" name=\"no\" [nzSize]=\"'large'\" [nzPlaceHolder]=\"'请输入关键字'\" nzId=\"no\"></nz-input>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div nz-col [nzSpan]=\"8\" class=\"mb-md\" [class.text-right]=\"'true'\">\r\n                        <button nz-button type=\"submit\" [nzType]=\"'primary'\" [nzLoading]=\"loading\" [nzSize]=\"'large'\">查询</button>\r\n                        <button nz-button type=\"reset\" (click)=\"ResetSearch()\" [nzSize]=\"'large'\" class=\"mx-sm\">重置</button>\r\n                        <button nz-button [nzType]=\"'primary'\" (click)=\"createMessage()\" [nzSize]=\"'large'\">\r\n                            <i class=\"anticon anticon-plus\"></i>\r\n                            <span>新建</span>\r\n                        </button>\r\n                    </div>\r\n                </div>\r\n            </form>\r\n            <nz-table #nzTable [nzAjaxData]=\"messagess\" [nzTotal]=\"q.total\" [(nzPageIndex)]=\"q.pi\" [(nzPageSize)]=\"q.ps\" [nzLoading]=\"loading\"\r\n                [nzShowSizeChanger]=\"true\" (nzPageIndexChange)=\"getMessgeAll()\" (nzPageSizeChange)=\"getMessgeAll()\">\r\n                <thead nz-thead>\r\n                    <tr>\r\n                        <th nz-th>\r\n                            <span>关键字</span>\r\n                        </th>\r\n                        <th nz-th>\r\n                            <span>回复内容</span>\r\n                        </th>\r\n                        <th nz-th>\r\n                            <span>操作</span>\r\n                        </th>\r\n                    </tr>\r\n                </thead>\r\n                <tbody nz-tbody>\r\n                    <tr nz-tbody-tr *ngFor=\"let message of nzTable.data\">\r\n                        <td nz-td>{{message.keyWord}}</td>\r\n                        <td nz-td>{{message.content}}</td>\r\n                        <td nz-td>\r\n                            <a (click)=\"editMessage(message)\">编辑</a>\r\n                            <span nz-table-divider></span>\r\n                            <a (click)=\"delete(message,deleteContent)\">删除</a>\r\n                        </td>\r\n                    </tr>\r\n                </tbody>\r\n            </nz-table>\r\n        </nz-card>\r\n        <edit-message-modal #editMessageModal (modalSave)=\"getMessgeAll()\"></edit-message-modal>\r\n        <create-message-modal #createMessageModal (modalSave)=\"getMessgeAll()\"></create-message-modal>\r\n    </nz-tab>\r\n    <nz-tab>\r\n        <ng-template #deletesContent>\r\n            <h2>是否删除被关注回复?</h2>\r\n        </ng-template>\r\n        <ng-template #nzTabHeading>\r\n            被关注回复\r\n        </ng-template>\r\n        <form nz-form [formGroup]=\"form\" id=\"frm_create_subscrite\"  (ngSubmit)=\"save()\">\r\n            <div nz-form-item nz-row>\r\n                <div nz-form-label nz-col [nzSm]=\"4\">\r\n                    <label for=\"msgType\" nz-form-item-required>消息类型</label>\r\n                </div>\r\n                <div nz-form-control nz-col [nzSm]=\"20\" nzHasFeedback [nzValidateStatus]=\"getFormControl('msgType')\">\r\n                    <nz-radio-group formControlName=\"msgType\" [(ngModel)]=\"subscribes.msgType\" class=\"mb-md\">\r\n                        <label nz-radio [nzValue]=\"1\">\r\n                            <span>文字消息</span>\r\n                        </label>\r\n                        <label nz-radio [nzValue]=\"2\">\r\n                            <span>图文消息</span>\r\n                        </label>\r\n                    </nz-radio-group>\r\n                </div>\r\n            </div>\r\n            <div nz-form-item nz-row>\r\n                <div nz-form-label nz-col [nzSm]=\"4\">\r\n                    <label for=\"content\" nz-form-item-required>回复内容</label>\r\n                </div>\r\n                <div nz-form-control nz-col [nzSm]=\"20\" nzHasFeedback [nzValidateStatus]=\"getFormControl('content')\">\r\n                    <nz-input nzType=\"textarea\" nzRows=\"6\" formControlName=\"content\" [(ngModel)]=\"subscribes.content\" [nzId]=\"'content'\"></nz-input>\r\n                    <div nz-form-explain *ngIf=\"getFormControl('content').dirty&&getFormControl('content').hasError('required')\">内容不能为空</div>\r\n                </div>\r\n            </div>\r\n\r\n            <div nz-form-item nz-row>\r\n                <div nz-form-label nz-col [nzSm]=\"7\">\r\n                    <button nz-button [nzType]=\"'primary'\" [nzSize]=\"'large'\" type=\"submit\" [nzLoading]=\"isConfirmLoading\">\r\n                        保存\r\n                    </button>\r\n                    <button nz-button [nzType]=\"'default'\" [nzSize]=\"'large'\" type=\"button\" (click)=\"deletes(deletesContent)\">\r\n                        删除回复\r\n                    </button>\r\n                </div>\r\n            </div>\r\n        </form>\r\n    </nz-tab>\r\n</nz-tabset>"

/***/ }),

/***/ "../../../../../src/app/admin/weichat-setting/messages/messages.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessagesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_service_proxies_service_proxies__ = __webpack_require__("../../../../../src/app/shared/service-proxies/service-proxies.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_service_proxies_entity_subscribe__ = __webpack_require__("../../../../../src/app/shared/service-proxies/entity/subscribe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_app_component_base__ = __webpack_require__("../../../../../src/app/shared/app-component-base.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__edit_message_edit_message_component__ = __webpack_require__("../../../../../src/app/admin/weichat-setting/messages/edit-message/edit-message.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__create_message_create_message_component__ = __webpack_require__("../../../../../src/app/admin/weichat-setting/messages/create-message/create-message.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng_zorro_antd__ = __webpack_require__("../../../../ng-zorro-antd/esm5/antd.js");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var MessagesComponent = /** @class */ (function (_super) {
    __extends(MessagesComponent, _super);
    function MessagesComponent(injector, messageService, subscribeService, fb, modal) {
        var _this = _super.call(this, injector) || this;
        _this.messageService = messageService;
        _this.subscribeService = subscribeService;
        _this.fb = fb;
        _this.modal = modal;
        _this.q = {
            pi: 1,
            ps: 10,
            total: 0,
            sorter: '',
            status: -1,
            statusList: []
        };
        _this.loading = false;
        _this.mesText = '';
        //用于显示删除框关键字
        _this.mesT = '';
        _this.isConfirmLoading = false;
        _this.messagess = [];
        _this.subscribes = new __WEBPACK_IMPORTED_MODULE_2__shared_service_proxies_entity_subscribe__["a" /* Subscribess */]();
        return _this;
    }
    /**
     * 页面初始加载
     */
    MessagesComponent.prototype.ngOnInit = function () {
        this.getMessgeAll();
        this.getSubscribe();
        this.form = this.fb.group({
            msgType: [null, [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].required])]],
            content: [null, [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].required])]]
        });
    };
    //#region 自动回复消息
    /**
     * 获取自动回复消息信息
     * @param reset
     */
    MessagesComponent.prototype.getMessgeAll = function (reset) {
        var _this = this;
        if (reset === void 0) { reset = false; }
        if (reset) {
            this.q.pi = 1;
        }
        this.loading = true;
        this.messageService.getAll((this.q.pi - 1) * this.q.ps, this.q.ps, this.mesText).subscribe(function (result) {
            _this.loading = false;
            var status = 0;
            _this.messagess = result.items;
            _this.q.total = result.totalCount;
        });
    };
    /**
     * 重置
     */
    MessagesComponent.prototype.ResetSearch = function () {
        this.mesText = '';
        this.getMessgeAll(true);
    };
    /**
     * 新建自动回复消息
     */
    MessagesComponent.prototype.createMessage = function () {
        this.createMessageModal.show();
    };
    /**
     * 更新自动回复消息
     */
    MessagesComponent.prototype.editMessage = function (message) {
        this.editMessageModal.show(message.id);
    };
    /**
     * 删除单条关键字回复
     * @param messages 关键字回复信息
     * @param contentTpl 删除框id
     */
    MessagesComponent.prototype.delete = function (messages, contentTpl) {
        var _this = this;
        this.mesT = messages.keyWord;
        this.modal.open({
            content: contentTpl,
            okText: '是',
            cancelText: '否',
            onOk: function () {
                _this.messageService.delete(messages.id)
                    .subscribe(function () {
                    _this.notify.info(_this.l('删除成功！'));
                    _this.getMessgeAll();
                });
            },
            onCancel: function () {
            }
        });
    };
    //#endregion
    //#region  关注回复消息 
    /**
     * 获取关注回复消息
     */
    MessagesComponent.prototype.getSubscribe = function () {
        var _this = this;
        this.subscribeService.get().subscribe(function (result) {
            _this.subscribes = result;
        });
    };
    /**
     *
     * @param name
     */
    MessagesComponent.prototype.getFormControl = function (name) {
        return this.form.controls[name];
    };
    /**
     * 保存关注回复消息
     */
    MessagesComponent.prototype.save = function () {
        var _this = this;
        for (var i in this.form.controls) {
            this.form.controls[i].markAsDirty();
        }
        if (this.form.valid) {
            this.subscribeService.update(this.subscribes)
                .finally(function () { _this.isConfirmLoading = false; })
                .subscribe(function () {
                _this.notify.info(_this.l('保存成功'));
                _this.getSubscribe();
            });
        }
    };
    MessagesComponent.prototype.deletes = function (contentTpl) {
        var _this = this;
        this.modal.open({
            content: contentTpl,
            okText: '是',
            cancelText: '否',
            onOk: function () {
                _this.subscribeService.delete(_this.subscribes.id)
                    .subscribe(function () {
                    _this.getSubscribe();
                    _this.form.reset();
                    _this.notify.info(_this.l('删除成功！'));
                });
            },
            onCancel: function () {
            }
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('editMessageModal'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_5__edit_message_edit_message_component__["a" /* EditMessageComponent */])
    ], MessagesComponent.prototype, "editMessageModal", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('createMessageModal'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_6__create_message_create_message_component__["a" /* CreateMessageComponent */])
    ], MessagesComponent.prototype, "createMessageModal", void 0);
    MessagesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            moduleId: module.i,
            selector: 'messages',
            template: __webpack_require__("../../../../../src/app/admin/weichat-setting/messages/messages.component.html"),
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injector"], __WEBPACK_IMPORTED_MODULE_1__shared_service_proxies_service_proxies__["n" /* MessageServiceProxy */],
            __WEBPACK_IMPORTED_MODULE_1__shared_service_proxies_service_proxies__["r" /* SubscribeServiceProxy */], __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormBuilder"],
            __WEBPACK_IMPORTED_MODULE_7_ng_zorro_antd__["NzModalService"]])
    ], MessagesComponent);
    return MessagesComponent;
}(__WEBPACK_IMPORTED_MODULE_4__shared_app_component_base__["a" /* AppComponentBase */]));



/***/ })

});
//# sourceMappingURL=admin.module.chunk.js.map