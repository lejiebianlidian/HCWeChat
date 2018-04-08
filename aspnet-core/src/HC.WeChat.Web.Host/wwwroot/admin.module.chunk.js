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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__tenant_tenant_component__ = __webpack_require__("../../../../../src/app/admin/tenant/tenant.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__weichat_setting_auth_setting_auth_setting_component__ = __webpack_require__("../../../../../src/app/admin/weichat-setting/auth-setting/auth-setting.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__weichat_setting_messages_messages_component__ = __webpack_require__("../../../../../src/app/admin/weichat-setting/messages/messages.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__marketing_activity_form_activity_form_component__ = __webpack_require__("../../../../../src/app/admin/marketing/activity-form/activity-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__markeeting_serve_employees_employees_component__ = __webpack_require__("../../../../../src/app/admin/markeeting-serve/employees/employees.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__markeeting_serve_activity_activity_component__ = __webpack_require__("../../../../../src/app/admin/markeeting-serve/activity/activity.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__marketing_activity_form_detail_activity_form_detail_component__ = __webpack_require__("../../../../../src/app/admin/marketing/activity-form-detail/activity-form-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__markeeting_serve_activity_activity_list_component__ = __webpack_require__("../../../../../src/app/admin/markeeting-serve/activity/activity-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__customer_service_retail_customer_retail_customer_component__ = __webpack_require__("../../../../../src/app/admin/customer-service/retail-customer/retail-customer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__wechat_manager_wechat_user_wechat_user_component__ = __webpack_require__("../../../../../src/app/admin/wechat-manager/wechat-user/wechat-user.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__customer_service_retail_customer_detail_retail_customer_detail_component__ = __webpack_require__("../../../../../src/app/admin/customer-service/retail-customer-detail/retail-customer-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__marketing_user_question_user_question_component__ = __webpack_require__("../../../../../src/app/admin/marketing/user-question/user-question.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__marketing_user_answer_user_answer_component__ = __webpack_require__("../../../../../src/app/admin/marketing/user-answer/user-answer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__consumer_advise_advise_component__ = __webpack_require__("../../../../../src/app/admin/consumer/advise/advise.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__marketing_activity_view_activity_view_component__ = __webpack_require__("../../../../../src/app/admin/marketing/activity-view/activity-view.component.ts");
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
            { path: 'tenant', component: __WEBPACK_IMPORTED_MODULE_6__tenant_tenant_component__["a" /* TenantComponent */], data: { translate: 'tenant', permission: 'Pages.Tenants' }, canActivate: [__WEBPACK_IMPORTED_MODULE_5__shared_auth_auth_route_guard__["a" /* AppRouteGuard */]] },
            { path: 'authsetting', component: __WEBPACK_IMPORTED_MODULE_7__weichat_setting_auth_setting_auth_setting_component__["a" /* AuthSettingComponent */], data: { translate: 'authsetting', permission: 'Pages' }, canActivate: [__WEBPACK_IMPORTED_MODULE_5__shared_auth_auth_route_guard__["a" /* AppRouteGuard */]] },
            { path: 'message', component: __WEBPACK_IMPORTED_MODULE_8__weichat_setting_messages_messages_component__["a" /* MessagesComponent */], data: { translate: 'message', permission: 'Pages' }, canActivate: [__WEBPACK_IMPORTED_MODULE_5__shared_auth_auth_route_guard__["a" /* AppRouteGuard */]] },
            { path: 'employee', component: __WEBPACK_IMPORTED_MODULE_10__markeeting_serve_employees_employees_component__["a" /* EmployeesComponent */], data: { translate: 'employee', permission: 'Pages' }, canActivate: [__WEBPACK_IMPORTED_MODULE_5__shared_auth_auth_route_guard__["a" /* AppRouteGuard */]] },
            { path: 'activity', component: __WEBPACK_IMPORTED_MODULE_11__markeeting_serve_activity_activity_component__["a" /* ActivityComponent */], data: { translate: 'activity', permission: 'Pages', title: '新增活动' }, canActivate: [__WEBPACK_IMPORTED_MODULE_5__shared_auth_auth_route_guard__["a" /* AppRouteGuard */]] },
            { path: 'activity-form', component: __WEBPACK_IMPORTED_MODULE_9__marketing_activity_form_activity_form_component__["a" /* ActivityFormComponent */], data: { translate: 'activity-form', permission: 'Pages' }, canActivate: [__WEBPACK_IMPORTED_MODULE_5__shared_auth_auth_route_guard__["a" /* AppRouteGuard */]] },
            { path: 'activity-form-detail/:id', component: __WEBPACK_IMPORTED_MODULE_12__marketing_activity_form_detail_activity_form_detail_component__["a" /* ActivityFormDetailComponent */], data: { translate: 'activity-form-detail', permission: 'Pages', title: '申请单明细' }, canActivate: [__WEBPACK_IMPORTED_MODULE_5__shared_auth_auth_route_guard__["a" /* AppRouteGuard */]] },
            { path: 'activity-list', component: __WEBPACK_IMPORTED_MODULE_13__markeeting_serve_activity_activity_list_component__["a" /* ActivityListComponent */], data: { translate: 'activity-list', permission: 'Pages' }, canActivate: [__WEBPACK_IMPORTED_MODULE_5__shared_auth_auth_route_guard__["a" /* AppRouteGuard */]] },
            { path: 'activity/:id', component: __WEBPACK_IMPORTED_MODULE_11__markeeting_serve_activity_activity_component__["a" /* ActivityComponent */], data: { translate: 'activity', permission: 'Pages', title: '活动详情' }, canActivate: [__WEBPACK_IMPORTED_MODULE_5__shared_auth_auth_route_guard__["a" /* AppRouteGuard */]] },
            { path: 'retail-customer', component: __WEBPACK_IMPORTED_MODULE_14__customer_service_retail_customer_retail_customer_component__["a" /* RetailCustomerComponent */], data: { translate: 'retail-customer', permission: 'Pages' }, canActivate: [__WEBPACK_IMPORTED_MODULE_5__shared_auth_auth_route_guard__["a" /* AppRouteGuard */]] },
            { path: 'wechat-user', component: __WEBPACK_IMPORTED_MODULE_15__wechat_manager_wechat_user_wechat_user_component__["a" /* WechatUserComponent */], data: { translate: 'wechat-user', permission: 'Pages' }, canActivate: [__WEBPACK_IMPORTED_MODULE_5__shared_auth_auth_route_guard__["a" /* AppRouteGuard */]] },
            { path: 'retail-detail', component: __WEBPACK_IMPORTED_MODULE_16__customer_service_retail_customer_detail_retail_customer_detail_component__["a" /* RetailCustomerDetailComponent */], data: { translate: 'retail-detail', permission: 'Pages', title: '新增零售用户' }, canActivate: [__WEBPACK_IMPORTED_MODULE_5__shared_auth_auth_route_guard__["a" /* AppRouteGuard */]] },
            { path: 'retail-detail/:id', component: __WEBPACK_IMPORTED_MODULE_16__customer_service_retail_customer_detail_retail_customer_detail_component__["a" /* RetailCustomerDetailComponent */], data: { translate: 'retail-detail', permission: 'Pages', title: '零售户详情' }, canActivate: [__WEBPACK_IMPORTED_MODULE_5__shared_auth_auth_route_guard__["a" /* AppRouteGuard */]] },
            { path: 'user-question', component: __WEBPACK_IMPORTED_MODULE_17__marketing_user_question_user_question_component__["a" /* UserQuestionComponent */], data: { translate: 'user-question', permission: 'Pages' }, canActivate: [__WEBPACK_IMPORTED_MODULE_5__shared_auth_auth_route_guard__["a" /* AppRouteGuard */]] },
            { path: 'user-question-detail/:id', component: __WEBPACK_IMPORTED_MODULE_18__marketing_user_answer_user_answer_component__["a" /* UserAnswerComponent */], data: { translate: 'user-question-detail', permission: 'Pages', title: '问卷调查详细' }, canActivate: [__WEBPACK_IMPORTED_MODULE_5__shared_auth_auth_route_guard__["a" /* AppRouteGuard */]] },
            { path: 'advise', component: __WEBPACK_IMPORTED_MODULE_19__consumer_advise_advise_component__["a" /* AdviseComponent */], data: { translate: 'advise', permission: 'Pages' }, canActivate: [__WEBPACK_IMPORTED_MODULE_5__shared_auth_auth_route_guard__["a" /* AppRouteGuard */]] },
            { path: 'activity-query', component: __WEBPACK_IMPORTED_MODULE_20__marketing_activity_view_activity_view_component__["a" /* ActivityViewComponent */], data: { translate: 'activity-query', permission: 'Pages' }, canActivate: [__WEBPACK_IMPORTED_MODULE_5__shared_auth_auth_route_guard__["a" /* AppRouteGuard */]] },
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__roles_edit_role_edit_role_component__ = __webpack_require__("../../../../../src/app/admin/roles/edit-role/edit-role.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__tenant_tenant_component__ = __webpack_require__("../../../../../src/app/admin/tenant/tenant.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__tenant_create_tenant_create_tenant_component__ = __webpack_require__("../../../../../src/app/admin/tenant/create-tenant/create-tenant.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__tenant_edit_tenant_edit_tenant_component__ = __webpack_require__("../../../../../src/app/admin/tenant/edit-tenant/edit-tenant.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__weichat_setting_auth_setting_auth_setting_component__ = __webpack_require__("../../../../../src/app/admin/weichat-setting/auth-setting/auth-setting.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__weichat_setting_messages_messages_component__ = __webpack_require__("../../../../../src/app/admin/weichat-setting/messages/messages.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__weichat_setting_messages_edit_message_edit_message_component__ = __webpack_require__("../../../../../src/app/admin/weichat-setting/messages/edit-message/edit-message.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__weichat_setting_messages_create_message_create_message_component__ = __webpack_require__("../../../../../src/app/admin/weichat-setting/messages/create-message/create-message.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__users_employee_modal_employee_modal_component__ = __webpack_require__("../../../../../src/app/admin/users/employee-modal/employee-modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__markeeting_serve_employees_employees_component__ = __webpack_require__("../../../../../src/app/admin/markeeting-serve/employees/employees.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__markeeting_serve_activity_activity_component__ = __webpack_require__("../../../../../src/app/admin/markeeting-serve/activity/activity.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__marketing_activity_form_activity_form_component__ = __webpack_require__("../../../../../src/app/admin/marketing/activity-form/activity-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__marketing_activity_form_detail_activity_form_detail_component__ = __webpack_require__("../../../../../src/app/admin/marketing/activity-form-detail/activity-form-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__shared_auth_auth_route_guard__ = __webpack_require__("../../../../../src/app/shared/auth/auth-route-guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__markeeting_serve_activity_activity_list_component__ = __webpack_require__("../../../../../src/app/admin/markeeting-serve/activity/activity-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__markeeting_serve_employees_create_employee_create_employee_component__ = __webpack_require__("../../../../../src/app/admin/markeeting-serve/employees/create-employee/create-employee.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__markeeting_serve_employees_edit_employee_edit_employee_component__ = __webpack_require__("../../../../../src/app/admin/markeeting-serve/employees/edit-employee/edit-employee.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__customer_service_retail_customer_retail_customer_component__ = __webpack_require__("../../../../../src/app/admin/customer-service/retail-customer/retail-customer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__wechat_manager_wechat_user_wechat_user_component__ = __webpack_require__("../../../../../src/app/admin/wechat-manager/wechat-user/wechat-user.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__customer_service_retail_customer_detail_retail_customer_detail_component__ = __webpack_require__("../../../../../src/app/admin/customer-service/retail-customer-detail/retail-customer-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__marketing_approval_approval_component__ = __webpack_require__("../../../../../src/app/admin/marketing/approval/approval.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__marketing_edit_form_edit_form_component__ = __webpack_require__("../../../../../src/app/admin/marketing/edit-form/edit-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__marketing_edit_delivery_edit_delivery_component__ = __webpack_require__("../../../../../src/app/admin/marketing/edit-delivery/edit-delivery.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__marketing_edit_express_edit_express_component__ = __webpack_require__("../../../../../src/app/admin/marketing/edit-express/edit-express.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__marketing_user_question_user_question_component__ = __webpack_require__("../../../../../src/app/admin/marketing/user-question/user-question.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__marketing_user_answer_user_answer_component__ = __webpack_require__("../../../../../src/app/admin/marketing/user-answer/user-answer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__consumer_advise_advise_component__ = __webpack_require__("../../../../../src/app/admin/consumer/advise/advise.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__marketing_edit_banquet_edit_banquet_component__ = __webpack_require__("../../../../../src/app/admin/marketing/edit-banquet/edit-banquet.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__marketing_activity_view_activity_view_component__ = __webpack_require__("../../../../../src/app/admin/marketing/activity-view/activity-view.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39_ng2_file_upload__ = __webpack_require__("../../../../ng2-file-upload/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39_ng2_file_upload___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_39_ng2_file_upload__);
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
                __WEBPACK_IMPORTED_MODULE_39_ng2_file_upload__["FileUploadModule"],
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
                __WEBPACK_IMPORTED_MODULE_10__roles_edit_role_edit_role_component__["a" /* EditRoleComponent */],
                __WEBPACK_IMPORTED_MODULE_11__tenant_tenant_component__["a" /* TenantComponent */],
                __WEBPACK_IMPORTED_MODULE_12__tenant_create_tenant_create_tenant_component__["a" /* CreateTenantComponent */],
                __WEBPACK_IMPORTED_MODULE_13__tenant_edit_tenant_edit_tenant_component__["a" /* EditTenantComponent */],
                __WEBPACK_IMPORTED_MODULE_14__weichat_setting_auth_setting_auth_setting_component__["a" /* AuthSettingComponent */],
                __WEBPACK_IMPORTED_MODULE_15__weichat_setting_messages_messages_component__["a" /* MessagesComponent */],
                __WEBPACK_IMPORTED_MODULE_16__weichat_setting_messages_edit_message_edit_message_component__["a" /* EditMessageComponent */],
                __WEBPACK_IMPORTED_MODULE_17__weichat_setting_messages_create_message_create_message_component__["a" /* CreateMessageComponent */],
                __WEBPACK_IMPORTED_MODULE_18__users_employee_modal_employee_modal_component__["a" /* EmployeeModalComponent */],
                __WEBPACK_IMPORTED_MODULE_19__markeeting_serve_employees_employees_component__["a" /* EmployeesComponent */],
                __WEBPACK_IMPORTED_MODULE_20__markeeting_serve_activity_activity_component__["a" /* ActivityComponent */],
                __WEBPACK_IMPORTED_MODULE_21__marketing_activity_form_activity_form_component__["a" /* ActivityFormComponent */],
                __WEBPACK_IMPORTED_MODULE_22__marketing_activity_form_detail_activity_form_detail_component__["a" /* ActivityFormDetailComponent */],
                __WEBPACK_IMPORTED_MODULE_24__markeeting_serve_activity_activity_list_component__["a" /* ActivityListComponent */],
                __WEBPACK_IMPORTED_MODULE_25__markeeting_serve_employees_create_employee_create_employee_component__["a" /* CreateEmployeeComponent */],
                __WEBPACK_IMPORTED_MODULE_26__markeeting_serve_employees_edit_employee_edit_employee_component__["a" /* EditEmployeeComponent */],
                __WEBPACK_IMPORTED_MODULE_27__customer_service_retail_customer_retail_customer_component__["a" /* RetailCustomerComponent */],
                __WEBPACK_IMPORTED_MODULE_28__wechat_manager_wechat_user_wechat_user_component__["a" /* WechatUserComponent */],
                __WEBPACK_IMPORTED_MODULE_29__customer_service_retail_customer_detail_retail_customer_detail_component__["a" /* RetailCustomerDetailComponent */],
                __WEBPACK_IMPORTED_MODULE_30__marketing_approval_approval_component__["a" /* ApprovalComponent */],
                __WEBPACK_IMPORTED_MODULE_31__marketing_edit_form_edit_form_component__["a" /* EditFormComponent */],
                __WEBPACK_IMPORTED_MODULE_32__marketing_edit_delivery_edit_delivery_component__["a" /* EditDeliveryComponent */],
                __WEBPACK_IMPORTED_MODULE_33__marketing_edit_express_edit_express_component__["a" /* EditExpressComponent */],
                __WEBPACK_IMPORTED_MODULE_34__marketing_user_question_user_question_component__["a" /* UserQuestionComponent */],
                __WEBPACK_IMPORTED_MODULE_35__marketing_user_answer_user_answer_component__["a" /* UserAnswerComponent */],
                __WEBPACK_IMPORTED_MODULE_36__consumer_advise_advise_component__["a" /* AdviseComponent */],
                __WEBPACK_IMPORTED_MODULE_37__marketing_edit_banquet_edit_banquet_component__["a" /* EditBanquetComponent */],
                __WEBPACK_IMPORTED_MODULE_38__marketing_activity_view_activity_view_component__["a" /* ActivityViewComponent */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_23__shared_auth_auth_route_guard__["a" /* AppRouteGuard */]]
        })
    ], AdminModule);
    return AdminModule;
}());



/***/ }),

/***/ "../../../../../src/app/admin/consumer/advise/advise.component.html":
/***/ (function(module, exports) {

module.exports = "<pro-header></pro-header>\r\n<nz-card [nzBordered]=\"false\">\r\n    <form nz-form (ngSubmit)=\"refreshData()\" [nzLayout]=\"'inline'\">\r\n        <div nz-row [nzGutter]=\"24\">\r\n            <div nz-col [nzSpan]=\"16\" class=\"mb-md\">\r\n                <div nz-form-item class=\"d-flex\">\r\n                    <div nz-form-label>\r\n                        <label for=\"filter\">关 键 字</label>\r\n                    </div>\r\n                    <div nz-form-control class=\"flex-1\">\r\n                        <nz-input [nzSize]=\"'large'\" name=\"filter\" nzId=\"filter\" [(ngModel)]=\"parameters.filter\" [nzPlaceHolder]=\"'标题、联系电话、内容'\"></nz-input>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div nz-col [nzSpan]=\"8\" class=\"mb-md\" [class.text-right]=\"'true'\">\r\n                <button nz-button type=\"submit\" [nzType]=\"'primary'\" [nzLoading]=\"loading\" [nzSize]=\"'large'\">查询</button>\r\n                <button nz-button type=\"reset\" (click)=\"refreshData()\" [nzSize]=\"'large'\" class=\"mx-sm\">重置</button>\r\n            </div>\r\n        </div>\r\n    </form>\r\n    <nz-table #nzTable [nzAjaxData]=\"data\" [nzTotal]=\"query.total\" [(nzPageIndex)]=\"query.pageIndex\" [(nzPageSize)]=\"query.pageSize\"\r\n        [nzLoading]=\"loading\" [nzShowSizeChanger]=\"true\" (nzPageIndexChange)=\"refreshData()\" (nzPageSizeChange)=\"refreshData()\">\r\n        <thead nz-thead>\r\n            <tr>\r\n                <th nz-th>\r\n                    <span>标题</span>\r\n                </th>\r\n                <th nz-th>\r\n                    <span>用户类型</span>\r\n                </th>      \r\n                <th nz-th>\r\n                    <span>联系电话</span>\r\n                </th>\r\n                <th nz-th>\r\n                    <span>举报内容</span>\r\n                </th>                \r\n                <th nz-th>\r\n                    <span>提交时间</span>\r\n                </th>\r\n            </tr>\r\n        </thead>\r\n        <tbody nz-tbody>\r\n            <tr nz-tbody-tr *ngFor=\"let item of nzTable.data\">\r\n                <td nz-td>{{item.title}}</td>\r\n                <td nz-td>{{item.userTypeName}}</td>\r\n                <td nz-td>{{item.phone}}</td>\r\n                <td nz-td>{{item.content}}</td>\r\n                <td nz-td>{{item.creationTime | _date}}</td>\r\n            </tr>\r\n        </tbody>\r\n    </nz-table>\r\n</nz-card>"

/***/ }),

/***/ "../../../../../src/app/admin/consumer/advise/advise.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdviseComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng_zorro_antd__ = __webpack_require__("../../../../ng-zorro-antd/esm5/antd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_service_proxies_entity__ = __webpack_require__("../../../../../src/app/shared/service-proxies/entity/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_service_proxies_consumer_service__ = __webpack_require__("../../../../../src/app/shared/service-proxies/consumer-service/index.ts");
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






var AdviseComponent = /** @class */ (function (_super) {
    __extends(AdviseComponent, _super);
    function AdviseComponent(injector, msg, _adviseService, _router) {
        var _this = _super.call(this, injector) || this;
        _this.msg = msg;
        _this._adviseService = _adviseService;
        _this._router = _router;
        _this.data = [];
        _this.loading = false;
        _this.parameters = { beginDate: null, endDate: null };
        return _this;
    }
    AdviseComponent.prototype.ngOnInit = function () {
        this.refreshData();
    };
    AdviseComponent.prototype.refreshData = function (reset) {
        var _this = this;
        if (reset === void 0) { reset = false; }
        if (reset) {
            this.query.pageIndex = 1;
        }
        this.loading = true;
        this._adviseService.getAll(this.query.skipCount(), this.query.pageSize, this.getParameter()).subscribe(function (result) {
            _this.loading = false;
            var status = 0;
            _this.query.total = result.totalCount;
            _this.data = result.items;
        });
    };
    ;
    AdviseComponent.prototype.getParameter = function () {
        var parray = [];
        parray.push(__WEBPACK_IMPORTED_MODULE_2__shared_service_proxies_entity__["h" /* Parameter */].fromJS({ key: 'Filter', value: this.parameters.filter }));
        return parray;
    };
    AdviseComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-page-advise',
            template: __webpack_require__("../../../../../src/app/admin/consumer/advise/advise.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injector"], __WEBPACK_IMPORTED_MODULE_1_ng_zorro_antd__["NzMessageService"], __WEBPACK_IMPORTED_MODULE_3__shared_service_proxies_consumer_service__["a" /* AdviseService */], __WEBPACK_IMPORTED_MODULE_5__angular_router__["h" /* Router */]])
    ], AdviseComponent);
    return AdviseComponent;
}(__WEBPACK_IMPORTED_MODULE_4__shared_app_component_base__["a" /* AppComponentBase */]));



/***/ }),

/***/ "../../../../../src/app/admin/customer-service/retail-customer-detail/retail-customer-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<form nz-form [formGroup]=\"form\" id=\"frm_create_role\">\r\n\r\n    <div nz-row [nzGutter]=\"24\">\r\n        <div nz-col nzMd=\"8\" nzSm=\"14\" nzXs=\"24\">\r\n            <div nz-form-item nz-row>\r\n                <div nz-form-label nz-col>\r\n                    <label nz-form-item-required>客户编码</label>\r\n                </div>\r\n                <div nz-form-control nz-col nzHasFeedback [nzValidateStatus]=\"getFormControl('code')\">\r\n                    <nz-input style=\"height:32px;\" formControlName=\"code\" [(ngModel)]=\"retailCustomerd.code\" [nzId]=\"'code'\"></nz-input>\r\n                    <div nz-form-explain *ngIf=\"getFormControl('code').dirty&&getFormControl('code').hasError('maxlength')\">字符长度小于等于50</div>\r\n                    <div nz-form-explain *ngIf=\"getFormControl('code').dirty&&getFormControl('code').hasError('required')\">请输入客户编码</div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div nz-col nzMd=\"8\" nzSm=\"12\" nzXs=\"24\">\r\n            <div nz-form-item nz-row>\r\n                <div nz-form-label nz-col>\r\n                    <label nz-form-item-required>客户姓名</label>\r\n                </div>\r\n                <div nz-form-control nz-col nzHasFeedback [nzValidateStatus]=\"getFormControl('name')\">\r\n                    <nz-input formControlName=\"name\" [(ngModel)]=\"retailCustomerd.name\" [nzId]=\"'name'\"></nz-input>\r\n                    <div nz-form-explain *ngIf=\"getFormControl('name').dirty&&getFormControl('name').hasError('maxlength')\">字符长度小于等于50</div>\r\n                    <div nz-form-explain *ngIf=\"getFormControl('name').dirty&&getFormControl('name').hasError('required')\">请输入客户姓名</div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div nz-col nzMd=\"8\" nzSm=\"12\" nzXs=\"24\">\r\n            <div nz-form-item nz-row>\r\n                <div nz-form-label nz-col>\r\n                    <label>客户分档</label>\r\n                </div>\r\n                <div nz-form-control nz-col nzHasFeedback [nzValidateStatus]=\"getFormControl('archivalLevel')\">\r\n                    <nz-input formControlName=\"archivalLevel\" [(ngModel)]=\"retailCustomerd.archivalLevel\" [nzId]=\"'archivalLevel'\"></nz-input>\r\n                    <div nz-form-explain *ngIf=\"getFormControl('archivalLevel').dirty&&getFormControl('archivalLevel').hasError('maxlength')\">字符长度小于等于100</div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <!-- <div nz-col nzMd=\"6\" nzSm=\"12\" nzXs=\"24\">\r\n                <div nz-form-item nz-row>\r\n                    <div nz-form-label nz-col>\r\n                        <label></label>\r\n                    </div>\r\n                </div>\r\n            </div> -->\r\n\r\n\r\n\r\n    <div nz-row [nzGutter]=\"16\">\r\n\r\n        <div nz-col nzMd=\"8\" nzSm=\"14\" nzXs=\"24\">\r\n            <div nz-form-item nz-row>\r\n                <div nz-form-label nz-col>\r\n                    <label>经营地址</label>\r\n                </div>\r\n                <div nz-form-control nz-col nzHasFeedback [nzValidateStatus]=\"getFormControl('businessAddress')\">\r\n                    <nz-input formControlName=\"businessAddress\" [(ngModel)]=\"retailCustomerd.businessAddress\" [nzId]=\"'businessAddress'\"></nz-input>\r\n                    <div nz-form-explain *ngIf=\"getFormControl('businessAddress').dirty&&getFormControl('businessAddress').hasError('maxlength')\">字符长度小于等于500</div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <div nz-col nzMd=\"8\" nzSm=\"12\" nzXs=\"24\">\r\n            <div nz-form-item nz-row>\r\n                <div nz-form-label nz-col>\r\n                    <label>订货周期</label>\r\n                </div>\r\n                <div nz-form-control nz-col nzHasFeedback [nzValidateStatus]=\"getFormControl('orderCycle')\">\r\n                    <nz-input formControlName=\"orderCycle\" [(ngModel)]=\"retailCustomerd.orderCycle\" [nzId]=\"'orderCycle'\"></nz-input>\r\n                    <div nz-form-explain *ngIf=\"getFormControl('orderCycle').dirty&&getFormControl('orderCycle').hasError('maxlength')\">字符长度小于等于100</div>\r\n\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <div nz-col nzMd=\"8\" nzSm=\"12\" nzXs=\"24\">\r\n            <div nz-form-item nz-row>\r\n                <div nz-form-label nz-col>\r\n                    <label>订货电话</label>\r\n                </div>\r\n                <div nz-form-control nz-col nzHasFeedback [nzValidateStatus]=\"getFormControl('telephone')\">\r\n                    <nz-input formControlName=\"telephone\" [(ngModel)]=\"retailCustomerd.telephone\" [nzId]=\"'telephone'\"></nz-input>\r\n                    <div nz-form-explain *ngIf=\"getFormControl('telephone').dirty&&getFormControl('telephone').hasError('maxlength')\">字符长度小于等于100</div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <div nz-row [nzGutter]=\"16\">\r\n\r\n        <div nz-col nzMd=\"8\" nzSm=\"12\" nzXs=\"24\">\r\n            <div nz-form-item nz-row>\r\n                <div nz-form-label nz-col>\r\n                    <label>订货方式</label>\r\n                </div>\r\n                <div nz-form-control nz-col nzHasFeedback [nzValidateStatus]=\"getFormControl('orderMode')\">\r\n                    <nz-select formControlName=\"orderMode\" [nzPlaceHolder]=\"'请选择订货方式'\" [(ngModel)]=\"retailCustomerd.orderMode\" [nzShowSearch]=\"true\"\r\n                        nzSize=\"large\">\r\n                        <nz-option *ngFor=\"let i of orderModes\" [nzLabel]=\"i.text\" [nzValue]=\"i.value\">\r\n                        </nz-option>\r\n                    </nz-select>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <div nz-col nzMd=\"8\" nzSm=\"12\" nzXs=\"24\">\r\n            <div nz-form-item nz-row>\r\n                <div nz-form-label nz-col>\r\n                    <label>业态</label>\r\n                </div>\r\n                <div nz-form-control nz-col nzHasFeedback [nzValidateStatus]=\"getFormControl('storeType')\">\r\n                    <nz-input formControlName=\"storeType\" [(ngModel)]=\"retailCustomerd.storeType\" [nzId]=\"'storeType'\"></nz-input>\r\n                    <div nz-form-explain *ngIf=\"getFormControl('storeType').dirty&&getFormControl('storeType').hasError('maxlength')\">字符长度小于等于100</div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <div nz-col nzMd=\"8\" nzSm=\"12\" nzXs=\"24\">\r\n            <div nz-form-item nz-row>\r\n                <div nz-form-label nz-col>\r\n                    <label>分公司</label>\r\n                </div>\r\n                <div nz-form-control nz-col nzHasFeedback [nzValidateStatus]=\"getFormControl('branchCompany')\">\r\n                    <nz-input formControlName=\"branchCompany\" [(ngModel)]=\"retailCustomerd.branchCompany\" [nzId]=\"'branchCompany'\"></nz-input>\r\n                    <div nz-form-explain *ngIf=\"getFormControl('branchCompany').dirty&&getFormControl('branchCompany').hasError('maxlength')\">字符长度小于等于200</div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <div nz-row [nzGutter]=\"16\">\r\n        <div nz-col nzMd=\"8\" nzSm=\"12\" nzXs=\"24\">\r\n            <div nz-form-label nz-col>\r\n                <label>客户经理</label>\r\n            </div>\r\n            <div nz-form-item nz-row style=\"width:100%;\" [nzGutter]=\"8\">\r\n                <div nz-form-control nz-col [nzSpan]=\"12\" nzHasFeedback [nzValidateStatus]=\"getFormControl('manager')\">\r\n                    <nz-input [nzDisabled]=\"isDisablec\" formControlName=\"manager\" [(ngModel)]=\"retailCustomerd.manager\" [nzId]=\"'content'\">\r\n                    </nz-input>\r\n                    <div nz-form-explain *ngIf=\"getFormControl('manager').dirty&&getFormControl('manager').hasError('maxlength')\">字符长度小于等于50</div>\r\n                </div>\r\n                <div nz-col [nzSpan]=\"12\">\r\n                    <button nz-button style=\"width: 80px;\" [nzType]=\"'primary'\" [nzSize]=\"'large '\" type=\"button\" (click)=\"employee()\">\r\n                        选择经理\r\n                    </button>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <div nz-col nzMd=\"8\" nzSm=\"12\" nzXs=\"24\">\r\n            <div nz-form-item nz-row>\r\n                <div nz-form-label nz-col>\r\n                    <label>终端类型</label>\r\n                </div>\r\n                <div nz-form-control nz-col nzHasFeedback [nzValidateStatus]=\"getFormControl('terminalType')\">\r\n                    <nz-select formControlName=\"terminalType\" [nzPlaceHolder]=\"'请选择终端类型'\" [(ngModel)]=\"retailCustomerd.terminalType\" [nzShowSearch]=\"true\"\r\n                        nzSize=\"large\">\r\n                        <nz-option *ngFor=\"let i of terminalTypes\" [nzLabel]=\"i.text\" [nzValue]=\"i.value\">\r\n                        </nz-option>\r\n                    </nz-select>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div nz-col nzMd=\"8\" nzSm=\"12\" nzXs=\"24\">\r\n            <div nz-form-item nz-row>\r\n                <div nz-form-label nz-col>\r\n                    <label>商圈类型</label>\r\n                </div>\r\n                <div nz-form-control nz-col nzHasFeedback [nzValidateStatus]=\"getFormControl('businessType')\">\r\n                    <nz-input formControlName=\"businessType\" [(ngModel)]=\"retailCustomerd.businessType\" [nzId]=\"'businessType'\"></nz-input>\r\n                    <div nz-form-explain *ngIf=\"getFormControl('businessType').dirty&&getFormControl('businessType').hasError('maxlength')\">字符长度小于等于100</div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <div nz-row [nzGutter]=\"16\">\r\n\r\n        <div nz-col nzMd=\"8\" nzSm=\"12\" nzXs=\"24\">\r\n            <div nz-form-item nz-row>\r\n                <div nz-form-label nz-col>\r\n                    <label>经营规模</label>\r\n                </div>\r\n                <div nz-form-control nz-col nzHasFeedback [nzValidateStatus]=\"getFormControl('scale')\">\r\n                    <nz-select formControlName=\"scale\" [nzPlaceHolder]=\"'请选择经营规模'\" [(ngModel)]=\"retailCustomerd.scale\" [nzShowSearch]=\"true\"\r\n                        nzSize=\"large\">\r\n                        <nz-option *ngFor=\"let i of scales\" [nzLabel]=\"i.text\" [nzValue]=\"i.value\">\r\n                        </nz-option>\r\n                    </nz-select>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div nz-col nzMd=\"8\" nzSm=\"12\" nzXs=\"24\">\r\n            <div nz-form-item nz-row>\r\n                <div nz-form-label nz-col>\r\n                    <label>市场类型</label>\r\n                </div>\r\n                <div nz-form-control nz-col nzHasFeedback [nzValidateStatus]=\"getFormControl('marketType')\">\r\n                    <nz-select formControlName=\"marketType\" [nzPlaceHolder]=\"'请选择市场类型'\" [(ngModel)]=\"retailCustomerd.marketType\" [nzShowSearch]=\"true\"\r\n                        nzSize=\"large\">\r\n                        <nz-option *ngFor=\"let i of marketTypes\" [nzLabel]=\"i.text\" [nzValue]=\"i.value\">\r\n                        </nz-option>\r\n                    </nz-select>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div nz-col nzMd=\"8\" nzSm=\"12\" nzXs=\"24\">\r\n            <div nz-form-item nz-row>\r\n                <div nz-form-label nz-col>\r\n                    <label>送货线路</label>\r\n                </div>\r\n                <div nz-form-control nz-col nzHasFeedback [nzValidateStatus]=\"getFormControl('deliveryLine')\">\r\n                    <nz-input formControlName=\"deliveryLine\" [(ngModel)]=\"retailCustomerd.deliveryLine\" [nzId]=\"'deliveryLine'\"></nz-input>\r\n                    <div nz-form-explain *ngIf=\"getFormControl('deliveryLine').dirty&&getFormControl('deliveryLine').hasError('maxlength')\">字符长度小于等于500</div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <div nz-row [nzGutter]=\"16\">\r\n        <div nz-col nzMd=\"9\" nzSm=\"12\" nzXs=\"24\">\r\n            <div nz-form-item nz-row>\r\n                <div nz-form-label nz-col>\r\n                    <label>专卖证号</label>\r\n                </div>\r\n                <div nz-form-control nz-col nzHasFeedback [nzValidateStatus]=\"getFormControl('licenseKey')\">\r\n                    <nz-input formControlName=\"licenseKey\" [(ngModel)]=\"retailCustomerd.licenseKey\" [nzId]=\"'licenseKey'\"></nz-input>\r\n                    <div nz-form-explain *ngIf=\"getFormControl('licenseKey').dirty&&getFormControl('licenseKey').hasError('maxlength')\">字符长度小于等于50</div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div nz-col nzMd=\"5\" nzSm=\"12\" nzXs=\"24\">\r\n            <div nz-form-item nz-row>\r\n                <div nz-form-label nz-col>\r\n                </div>\r\n                <div nz-form-control nz-col>\r\n                    <label nz-form-item-required nz-checkbox nz-col formControlName=\"isAction\" [(ngModel)]=\"retailCustomerd.isAction\">\r\n                        <span>启用</span>\r\n                    </label>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</form>\r\n<footer-toolbar errorCollect>\r\n    <button nz-button [nzType]=\"'primary'\" (click)=\"saveSub()\" [nzSize]=\"'large'\" [nzLoading]=\"isConfirmLoading\">\r\n        {{l(\"保存\")}}\r\n    </button>\r\n    <button nz-button [nzType]=\"'primary'\" (click)=\"Return()\" [nzSize]=\"'large'\">\r\n        {{l(\"返回\")}}\r\n    </button>\r\n    <!-- <a routerLink=\"../admin/retail-customer\" routerLinkActive=\"ngOnInit\">Heroes</a> -->\r\n</footer-toolbar>\r\n<employee-modal #selectEmployeeModal (modalSelect)=\"getSelectData($event)\"></employee-modal>"

/***/ }),

/***/ "../../../../../src/app/admin/customer-service/retail-customer-detail/retail-customer-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RetailCustomerDetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_app_component_base__ = __webpack_require__("../../../../../src/app/shared/app-component-base.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_service_proxies_customer_service__ = __webpack_require__("../../../../../src/app/shared/service-proxies/customer-service/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_service_proxies_entity__ = __webpack_require__("../../../../../src/app/shared/service-proxies/entity/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__users_employee_modal_employee_modal_component__ = __webpack_require__("../../../../../src/app/admin/users/employee-modal/employee-modal.component.ts");
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








var RetailCustomerDetailComponent = /** @class */ (function (_super) {
    __extends(RetailCustomerDetailComponent, _super);
    function RetailCustomerDetailComponent(injector, retailService, ActRouter, fb, router, modal) {
        var _this = _super.call(this, injector) || this;
        _this.retailService = retailService;
        _this.ActRouter = ActRouter;
        _this.fb = fb;
        _this.router = router;
        _this.modal = modal;
        _this.retailCustomerd = new __WEBPACK_IMPORTED_MODULE_4__shared_service_proxies_entity__["i" /* RetailCustomer */]();
        // 市场类型
        _this.marketTypes = [
            { text: '乡村', value: 1 },
            { text: '城镇', value: 2 },
        ];
        // 经营规模
        _this.scales = [
            { text: '小', value: 1 },
            { text: '中', value: 2 },
            { text: '大', value: 3 },
        ];
        // 终端
        _this.terminalTypes = [
            { text: '无', value: 0 },
            { text: '建议终端', value: 1 },
            { text: '普通终端', value: 2 },
            { text: '现代终端', value: 3 },
        ];
        // 订货方式
        _this.orderModes = [
            { text: '无', value: 0 },
            { text: '网上订货', value: 1 },
            { text: '电话订货', value: 2 },
            { text: '手机', value: 3 },
        ];
        _this.isConfirmLoading = false;
        //经理不可编辑
        _this.isDisablec = true;
        /**
         * 模态框返回
         */
        _this.getSelectData = function (employee) {
            if (employee) {
                _this.retailCustomerd.manager = employee.name;
                _this.retailCustomerd.employeeId = employee.id;
            }
        };
        _this.id = _this.ActRouter.snapshot.params['id'];
        console.log('id:');
        console.log(_this.id);
        return _this;
    }
    RetailCustomerDetailComponent.prototype.ngOnInit = function () {
        this.form = this.fb.group({
            code: [null, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].maxLength(50)])],
            name: [null, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].maxLength(50)])],
            businessAddress: [null, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].maxLength(500)])],
            archivalLevel: [null, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].maxLength(100)])],
            orderCycle: [null, [__WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].maxLength(100)]],
            storeType: [null, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].maxLength(100)])],
            telephone: [null, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].maxLength(100)])],
            isAction: [null, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].required])],
            branchCompany: [null, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].maxLength(200)])],
            department: [null, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].maxLength(100)])],
            manager: [null, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].maxLength(50)])],
            orderMode: [null],
            terminalType: [null],
            businessType: [null, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].maxLength(100)])],
            scale: [null],
            marketType: [null],
            deliveryLine: [null, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].maxLength(500)])],
            licenseKey: [null, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].maxLength(50)])],
        });
        this.getSingleRetailCustomer();
    };
    /**
     * 获取单个零售户信息
     */
    RetailCustomerDetailComponent.prototype.getSingleRetailCustomer = function () {
        var _this = this;
        this.retailService.get(this.id).subscribe(function (result) {
            _this.retailCustomerd = result;
            if (_this.retailCustomerd.id) {
            }
            else {
                _this.retailCustomerd.init({ isAction: true });
            }
        });
    };
    /**
     *
     * @param name
     */
    RetailCustomerDetailComponent.prototype.getFormControl = function (name) {
        return this.form.controls[name];
    };
    RetailCustomerDetailComponent.prototype.employee = function () {
        this.selectEmployeeModal.show(true);
    };
    RetailCustomerDetailComponent.prototype.saveSub = function () {
        var _this = this;
        //检查form验证
        for (var i in this.form.controls) {
            this.form.controls[i].markAsDirty();
        }
        if (this.form.valid) {
            this.isConfirmLoading = true;
            this.retailService.CheckCode(this.retailCustomerd.code, this.retailCustomerd.id).subscribe(function (isCode) {
                if (isCode) {
                    _this.retailService.update(_this.retailCustomerd)
                        .finally(function () { _this.isConfirmLoading = false; })
                        .subscribe(function () {
                        _this.notify.info(_this.l('保存成功！'));
                    });
                }
                else {
                    _this.isConfirmLoading = false;
                    _this.modal.warning({
                        title: '改客户编码已存在！'
                    });
                }
            });
        }
    };
    /**
     * 返回
     */
    RetailCustomerDetailComponent.prototype.Return = function () {
        this.router.navigate(['admin/retail-customer']);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('selectEmployeeModal'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_6__users_employee_modal_employee_modal_component__["a" /* EmployeeModalComponent */])
    ], RetailCustomerDetailComponent.prototype, "selectEmployeeModal", void 0);
    RetailCustomerDetailComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            moduleId: module.i,
            selector: 'retail-customer-detail',
            template: __webpack_require__("../../../../../src/app/admin/customer-service/retail-customer-detail/retail-customer-detail.component.html"),
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injector"], __WEBPACK_IMPORTED_MODULE_2__shared_service_proxies_customer_service__["a" /* RetailCustomerServiceProxy */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_5__angular_forms__["FormBuilder"], __WEBPACK_IMPORTED_MODULE_3__angular_router__["h" /* Router */], __WEBPACK_IMPORTED_MODULE_7_ng_zorro_antd__["NzModalService"]])
    ], RetailCustomerDetailComponent);
    return RetailCustomerDetailComponent;
}(__WEBPACK_IMPORTED_MODULE_1__shared_app_component_base__["a" /* AppComponentBase */]));



/***/ }),

/***/ "../../../../../src/app/admin/customer-service/retail-customer/retail-customer.component.html":
/***/ (function(module, exports) {

module.exports = "<pro-header></pro-header>\r\n<nz-card [nzBordered]=\"false\">\r\n    <form nz-form (ngSubmit)=\"refreshData()\" [nzLayout]=\"'inline'\">\r\n        <div nz-row [nzGutter]=\"24\">\r\n            <ng-template #deleteContent>\r\n                <h2>是否删除零售户{{employeeName}}?</h2>\r\n            </ng-template>\r\n            <div nz-col [nzSpan]=\"6\" class=\"mb-md\">\r\n                <div nz-form-item class=\"d-flex\">\r\n                    <div nz-form-control class=\"flex-1\">\r\n                        <nz-input [(ngModel)]=\"search.name\" name=\"name\" [nzSize]=\"'large'\" [nzPlaceHolder]=\"'请输入客户编码或名称'\" nzId=\"name\"></nz-input>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div nz-col [nzSpan]=\"6\" class=\"mb-md\">\r\n                <div nz-form-item class=\"d-flex\">\r\n                    <div nz-form-control class=\"flex-1\">\r\n                        <nz-select name=\"scale\" [nzPlaceHolder]=\"'请选择经营规模'\" [(ngModel)]=\"search.scale\" [nzShowSearch]=\"true\" nzSize=\"large\">\r\n                            <nz-option *ngFor=\"let i of scales\" [nzLabel]=\"i.text\" [nzValue]=\"i.value\">\r\n                            </nz-option>\r\n                        </nz-select>\r\n                        <!-- <nz-input [(ngModel)]=\"search.position\" name=\"position\" [nzSize]=\"'large'\" [nzPlaceHolder]=\"'请输入员工名或员工编码'\" nzId=\"position\"></nz-input> -->\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div nz-col [nzSpan]=\"6\" class=\"mb-md\">\r\n                    <div nz-form-item class=\"d-flex\">\r\n                        <div nz-form-control class=\"flex-1\">\r\n                            <nz-select name=\"market\" [nzPlaceHolder]=\"'请选择市场类型'\" [(ngModel)]=\"search.market\" [nzShowSearch]=\"true\" nzSize=\"large\">\r\n                                <nz-option *ngFor=\"let i of markets\" [nzLabel]=\"i.text\" [nzValue]=\"i.value\">\r\n                                </nz-option>\r\n                            </nz-select>\r\n                            <!-- <nz-input [(ngModel)]=\"search.position\" name=\"position\" [nzSize]=\"'large'\" [nzPlaceHolder]=\"'请输入员工名或员工编码'\" nzId=\"position\"></nz-input> -->\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            <div nz-col [nzSpan]=\"6\" class=\"mb-md\" [class.text-right]=\"'true'\">\r\n                <button nz-button type=\"submit\" [nzType]=\"'primary'\" [nzLoading]=\"loading\" [nzSize]=\"'large'\">查询</button>\r\n                <button nz-button type=\"reset\" (click)=\"refreshData(true)\" [nzSize]=\"'large'\" class=\"mx-sm\">重置</button>\r\n                <button nz-button (click)=\"createRetail()\" [nzType]=\"'primary'\" [nzSize]=\"'large'\">\r\n                    <i class=\"anticon anticon-plus\"></i>\r\n                    <span>新建</span>\r\n                </button>\r\n            </div>\r\n        </div>\r\n    </form>\r\n    <nz-table #nzTable [nzAjaxData]=\"retailCustomer\" [nzTotal]=\"query.total\" [(nzPageIndex)]=\"query.pageIndex\" [(nzPageSize)]=\"query.pageSize\"\r\n        [nzLoading]=\"loading\" [nzShowSizeChanger]=\"true\" (nzPageIndexChange)=\"refreshData()\" (nzPageSizeChange)=\"refreshData()\">\r\n        <thead nz-thead>\r\n            <tr>\r\n                <th nz-th>\r\n                    <span>编码</span>\r\n                </th>\r\n                <th nz-th>\r\n                    <span>姓名</span>\r\n                </th>\r\n                <!-- <th nz-th>\r\n                    <span>经营地址</span>\r\n                </th> -->\r\n                <th nz-th>\r\n                    <span>客户分档</span>\r\n                </th>\r\n                <!-- <th nz-th>\r\n                    <span>订货周期</span>\r\n                </th> -->\r\n                <th nz-th>\r\n                    <span>业态</span>\r\n                </th>\r\n                <th nz-th>\r\n                    <span>订货电话</span>\r\n                </th>\r\n                <!-- <th nz-th>\r\n                    <span>分公司</span>\r\n                </th> -->\r\n                <th nz-th>\r\n                    <span>市场部</span>\r\n                </th>\r\n                <th nz-th>\r\n                    <span>客户经理</span>\r\n                </th>\r\n                <th nz-th>\r\n                    <span>订货方式</span>\r\n                </th>\r\n                <th nz-th>\r\n                    <span>终端类型</span>\r\n                </th>\r\n                <!-- <th nz-th>\r\n                    <span>商圈类型</span>\r\n                </th> -->\r\n                <th nz-th>\r\n                    <span>经营规模</span>\r\n                </th>\r\n                <th nz-th>\r\n                    <span>市场类型</span>\r\n                </th>\r\n                <!-- <th nz-th>\r\n                    <span>送货线路</span>\r\n                </th> -->\r\n                <!-- <th nz-th>\r\n                    <span>专卖证号</span>\r\n                </th> -->\r\n                <th nz-th>\r\n                        <span>状态</span>\r\n                    </th>\r\n                <th nz-th>\r\n                    <span>操作</span>\r\n                </th>\r\n            </tr>\r\n        </thead>\r\n        <tbody nz-tbody>\r\n            <tr nz-tbody-tr *ngFor=\"let retail of nzTable.data\">\r\n                <td nz-td>{{retail.code}}</td>\r\n                <td nz-td>{{retail.name}}</td>\r\n                <!-- <td nz-td>{{retail.businessAddress}}</td> -->\r\n                <td nz-td>{{retail.archivalLevel}}</td>\r\n                <!-- <td nz-td>{{retail.orderCycle}}</td> -->\r\n                <td nz-td>{{retail.storeType}}</td>\r\n                <td nz-td>{{retail.telephone}}</td>\r\n                <!-- <td nz-td>{{retail.branchCompany}}</td> -->\r\n                <td nz-td>{{retail.department}}</td>\r\n                <td nz-td>{{retail.manager}}</td>\r\n                <td nz-td>{{retail.orderModeName}}</td>\r\n                <td nz-td>{{retail.terminalTypeName}}</td>\r\n                <!-- <td nz-td>{{retail.businessType}}</td> -->\r\n                <td nz-td>{{retail.scaleName}}</td>\r\n                <td nz-td>{{retail.marketTypeName}}</td>\r\n                <!-- <td nz-td>{{retail.deliveryLine}}</td> -->\r\n                <!-- <td nz-td>{{retail.licenseKey}}</td> -->\r\n                <td nz-td>\r\n                    <nz-badge [nzStatus]=\"retail.activeType\" [nzText]=\"retail.activeText\"></nz-badge>\r\n                </td>\r\n                <td nz-td>\r\n                    <a (click)=\"editRetail(retail)\">详情</a>\r\n                    <span nz-table-divider></span>\r\n                    <a (click)=\"delete(retail,deleteContent)\">删除</a>\r\n                </td>\r\n            </tr>\r\n        </tbody>\r\n    </nz-table>\r\n</nz-card>\r\n<!-- <edit-employee-modal #editEmployeeModal (modalSave)=\"refreshData()\"></edit-employee-modal>\r\n<create-employee-modal #createEmployeeModal (modalSave)=\"refreshData()\"></create-employee-modal> -->"

/***/ }),

/***/ "../../../../../src/app/admin/customer-service/retail-customer/retail-customer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RetailCustomerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_app_component_base__ = __webpack_require__("../../../../../src/app/shared/app-component-base.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_service_proxies_customer_service__ = __webpack_require__("../../../../../src/app/shared/service-proxies/customer-service/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_service_proxies_entity__ = __webpack_require__("../../../../../src/app/shared/service-proxies/entity/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
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






var RetailCustomerComponent = /** @class */ (function (_super) {
    __extends(RetailCustomerComponent, _super);
    function RetailCustomerComponent(injector, retailService, router, modal) {
        var _this = _super.call(this, injector) || this;
        _this.retailService = retailService;
        _this.router = router;
        _this.modal = modal;
        _this.loading = false;
        _this.search = {};
        _this.status = [
            { text: '有效', value: false, type: 'success' },
            { text: '无效', value: false, type: 'default' },
        ];
        _this.scales = [
            { text: '小', value: 1 },
            { text: '中', value: 2 },
            { text: '大', value: 3 },
        ];
        _this.markets = [
            { text: '乡村', value: 1 },
            { text: '城镇', value: 2 },
        ];
        _this.retailCustomer = [];
        return _this;
    }
    RetailCustomerComponent.prototype.ngOnInit = function () {
        this.refreshData();
    };
    RetailCustomerComponent.prototype.refreshData = function (reset) {
        var _this = this;
        if (reset === void 0) { reset = false; }
        if (reset) {
            this.query.pageIndex = 1;
            this.search = {};
        }
        this.loading = true;
        this.retailService.getAll(this.query.skipCount(), this.query.pageSize, this.getParameter()).subscribe(function (result) {
            _this.loading = false;
            var status = 0;
            _this.retailCustomer = result.items.map(function (i) {
                if (i.isAction) {
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
            _this.query.total = result.totalCount;
        });
    };
    RetailCustomerComponent.prototype.getParameter = function () {
        var arry = [];
        arry.push(__WEBPACK_IMPORTED_MODULE_3__shared_service_proxies_entity__["h" /* Parameter */].fromJS({ key: 'Name', value: this.search.name }));
        arry.push(__WEBPACK_IMPORTED_MODULE_3__shared_service_proxies_entity__["h" /* Parameter */].fromJS({ key: 'Scale', value: this.search.scale }));
        arry.push(__WEBPACK_IMPORTED_MODULE_3__shared_service_proxies_entity__["h" /* Parameter */].fromJS({ key: 'Markets', value: this.search.market }));
        return arry;
    };
    RetailCustomerComponent.prototype.editRetail = function (retail) {
        this.router.navigate(['admin/retail-detail', retail.id]);
    };
    /**
     *
     */
    RetailCustomerComponent.prototype.delete = function (retail, TplContent) {
        var _this = this;
        this.modal.confirm({
            content: TplContent,
            cancelText: '否',
            okText: '是',
            onOk: function () {
                _this.retailService.delete(retail.id).subscribe(function () {
                    _this.notify.info(_this.l('删除成功！'));
                    _this.refreshData();
                });
            }
        });
    };
    RetailCustomerComponent.prototype.createRetail = function () {
        this.router.navigate(['admin/retail-detail']);
    };
    RetailCustomerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            moduleId: module.i,
            selector: 'retail-customer',
            template: __webpack_require__("../../../../../src/app/admin/customer-service/retail-customer/retail-customer.component.html"),
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injector"], __WEBPACK_IMPORTED_MODULE_2__shared_service_proxies_customer_service__["a" /* RetailCustomerServiceProxy */], __WEBPACK_IMPORTED_MODULE_4__angular_router__["h" /* Router */],
            __WEBPACK_IMPORTED_MODULE_5_ng_zorro_antd__["NzModalService"]])
    ], RetailCustomerComponent);
    return RetailCustomerComponent;
}(__WEBPACK_IMPORTED_MODULE_1__shared_app_component_base__["a" /* AppComponentBase */]));



/***/ }),

/***/ "../../../../../src/app/admin/markeeting-serve/activity/activity-list.component.html":
/***/ (function(module, exports) {

module.exports = "<pro-header></pro-header>\r\n<nz-card [nzBordered]=\"false\">\r\n    <form nz-form (ngSubmit)=\"refreshData()\" [nzLayout]=\"'inline'\">\r\n        <div nz-row [nzGutter]=\"16\">\r\n            <ng-template #deleteContent>\r\n                <h2>是否删除活动{{activityName}}?</h2>\r\n            </ng-template>\r\n            <div nz-col nz-col nzMd=\"6\" nzSm=\"12\" nzXs=\"24\">\r\n                <div nz-form-item class=\"d-flex\">\r\n                    <div nz-form-label>\r\n                        <label for=\"name\">活动名称</label>\r\n                    </div>\r\n                    <div nz-form-control class=\"flex-1\">\r\n                        <nz-input [(ngModel)]=\"search.name\" name=\"name\" [nzSize]=\"'large'\" [nzPlaceHolder]=\"'请选择活动名称'\" nzId=\"name\"></nz-input>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div nz-col nzMd=\"6\" nzSm=\"12\" nzXs=\"24\">\r\n                <div nz-form-item class=\"d-flex\">\r\n                    <div nz-form-label>\r\n                        <label for=\"startTime\">开始时间</label>\r\n                    </div>\r\n                    <div nz-form-control class=\"flex-1\">\r\n                        <nz-datepicker name=\"startTime\" style=\"width:100%;\" [nzSize]=\"'large'\" nzId=\"startTime\" [(ngModel)]=\"search.startTime\" nzPlaceHolder=\"请选择开始时间\"></nz-datepicker>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n            <div nz-col nzMd=\"6\" nzSm=\"12\" nzXs=\"24\">\r\n                <div nz-form-item class=\"d-flex\">\r\n                    <div nz-form-label>\r\n                        <label>结束时间</label>\r\n                    </div>\r\n                    <div nz-form-control class=\"flex-1\">\r\n                        <nz-datepicker name=\"endTime\" style=\"width:100%;\" nzId=\"endTime\" [(ngModel)]=\"search.endTime\" nzPlaceHolder=\"请选择结束时间\"></nz-datepicker>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div nz-col nzMd=\"6\" nzSm=\"12\" nzXs=\"24\">\r\n                <div nz-form-item class=\"d-flex\">\r\n                    <div nz-form-label>\r\n                        <label>活动分类</label>\r\n                    </div>\r\n                    <div nz-form-control class=\"flex-1\">\r\n                        <nz-select  [nzPlaceHolder]=\"'请选择活动分类'\" name=\"type\" [(ngModel)]=\"search.type\" [nzShowSearch]=\"true\" nzSize=\"large\">\r\n                            <nz-option *ngFor=\"let i of AcTypes\" [nzLabel]=\"i.text\" [nzValue]=\"i.value\">\r\n                            </nz-option>\r\n                        </nz-select>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <div nz-row [nzGutter]=\"16\">\r\n            <div nz-col nzMd=\"6\" nzSm=\"12\" nzXs=\"24\">\r\n                <div nz-form-item class=\"d-flex\">\r\n                    <div nz-form-label>\r\n                        <label>活动状态</label>\r\n                    </div>\r\n                    <div nz-form-control class=\"flex-1\">\r\n                        <nz-select [nzPlaceHolder]=\"'活动状态'\" name=\"status\" [(ngModel)]=\"search.status\" [nzShowSearch]=\"true\" nzSize=\"large\">\r\n                            <nz-option *ngFor=\"let i of statuses\" [nzLabel]=\"i.text\" [nzValue]=\"i.value\">\r\n                            </nz-option>\r\n                        </nz-select>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div nz-col nzMd=\"6\" nzSm=\"12\" nzXs=\"24\">\r\n                <button nz-button type=\"submit\" [nzType]=\"'primary'\" [nzLoading]=\"loading\" [nzSize]=\"'large'\">查询</button>\r\n                <button nz-button type=\"reset\" (click)=\"refreshData(true)\" [nzSize]=\"'large'\" class=\"mx-sm\">重置</button>\r\n                <button nz-button (click)=\"createActivity()\" [nzType]=\"'primary'\" [nzSize]=\"'large'\">\r\n                    <i class=\"anticon anticon-plus\"></i>\r\n                    <span>新建</span>\r\n                </button>\r\n            </div>\r\n        </div>\r\n    </form>\r\n    <nz-table #nzTable [nzAjaxData]=\"acticities\" [nzTotal]=\"query.total\" [(nzPageIndex)]=\"query.pageIndex\" [(nzPageSize)]=\"query.pageSize\"\r\n        [nzLoading]=\"loading\" [nzShowSizeChanger]=\"true\" (nzPageIndexChange)=\"refreshData()\" (nzPageSizeChange)=\"refreshData()\">\r\n        <thead nz-thead>\r\n            <tr>\r\n                <th nz-th>\r\n                    <span>名称</span>\r\n                </th>\r\n                <th nz-th>\r\n                    <span>开始时间</span>\r\n                </th>\r\n                <th nz-th>\r\n                    <span>结束时间</span>\r\n                </th>\r\n                <th nz-th>\r\n                    <span>分类</span>\r\n                </th>\r\n                <!-- <th nz-th>\r\n                    <span>活动内容</span>\r\n                </th> -->\r\n                <th nz-th>\r\n                    <span>客户经理申请限制</span>\r\n                </th>\r\n                <th nz-th>\r\n                    <span>零售客户申请限制</span>\r\n                </th>\r\n                <th nz-th>\r\n                    <span>发布时间</span>\r\n                </th>\r\n                <th nz-th>\r\n                    <span>状态</span>\r\n                </th>\r\n                <th nz-th>\r\n                    <span>操作</span>\r\n                </th>\r\n            </tr>\r\n        </thead>\r\n        <tbody nz-tbody>\r\n            <tr nz-tbody-tr *ngFor=\"let activity of nzTable.data\">\r\n                <td nz-td>{{activity.name}}</td>\r\n                <td nz-td>{{activity.beginTime | _date}}</td>\r\n                <td nz-td>{{activity.endTime | _date}}</td>\r\n                <td nz-td>{{activity.typeName}}</td>\r\n                <!-- <td nz-td>{{activity.content}}</td> -->\r\n                <td nz-td>{{activity.mUnfinished}}</td>\r\n                <td nz-td>{{activity.rUnfinished}}</td>\r\n                <td nz-td>{{activity.publishTime | _date}}</td>\r\n                <td nz-td>{{activity.statusName}}</td>\r\n                <td nz-td>\r\n                    <a (click)=\"editActivity(activity)\">查看详情</a>\r\n                    <!-- <span nz-table-divider></span> -->\r\n                    <!-- <a (click)=\"delete(activity,deleteContent)\">删除</a> -->\r\n                </td>\r\n            </tr>\r\n        </tbody>\r\n    </nz-table>\r\n</nz-card>"

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
        _this.search = { startTime: null, endTime: null, status: null, type: null };
        //活动类型下拉数据
        _this.AcTypes = [
            { text: '办事用烟', value: 1 }
        ];
        //活动状态下拉数据
        _this.statuses = [
            { text: '草稿', value: 1 },
            { text: '已发布', value: 2 },
            { text: '已下架', value: 3 }
        ];
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
            this.search = { startTime: null, endTime: null, status: null, type: null };
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
        arry.push(__WEBPACK_IMPORTED_MODULE_3__shared_service_proxies_entity__["h" /* Parameter */].fromJS({ key: 'Name', value: this.search.name }));
        arry.push(__WEBPACK_IMPORTED_MODULE_3__shared_service_proxies_entity__["h" /* Parameter */].fromJS({ key: 'StartTime', value: this.dateFormat(this.search.startTime) }));
        arry.push(__WEBPACK_IMPORTED_MODULE_3__shared_service_proxies_entity__["h" /* Parameter */].fromJS({ key: 'EndTime', value: this.dateFormat(this.search.endTime) }));
        arry.push(__WEBPACK_IMPORTED_MODULE_3__shared_service_proxies_entity__["h" /* Parameter */].fromJS({ key: 'Type', value: this.search.type }));
        arry.push(__WEBPACK_IMPORTED_MODULE_3__shared_service_proxies_entity__["h" /* Parameter */].fromJS({ key: 'Status', value: this.search.status }));
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

module.exports = "<!--component html goes here -->\r\n<!-- <div class=\"content__title\">\r\n    <h1>UEditor\r\n        <small>Dependencies\r\n            <a href=\"//github.com/cipchk/ngx-ueditor\" target=\"_blank\">ngx-ueditor</a>\r\n        </small>\r\n    </h1>\r\n</div> -->\r\n\r\n<!-- <nz-card>\r\n    <ueditor [(ngModel)]=\"html\"></ueditor>\r\n</nz-card> -->\r\n<!-- (ngSubmit)=\"saveSub()\" -->\r\n<form nz-form [formGroup]=\"formA\" id=\"frm_create_role\">\r\n    <nz-card [nzBordered]=\"false\" nzTitle=\"活动管理\">\r\n        <div nz-row [nzGutter]=\"16\">\r\n            <div nz-col nzMd=\"7\" nzSm=\"12\" nzXs=\"24\">\r\n                <div nz-form-item nz-row>\r\n                    <div nz-form-label nz-col>\r\n                        <label nz-form-item-required>名称</label>\r\n                    </div>\r\n                    <div nz-form-control nz-col nzHasFeedback [nzValidateStatus]=\"getFormControl('name')\">\r\n                        <nz-input style=\"height:32px;\" formControlName=\"name\" [(ngModel)]=\"acitivityDto.name\" [nzId]=\"'name'\"></nz-input>\r\n                        <div nz-form-explain *ngIf=\"getFormControl('name').dirty&&getFormControl('name').hasError('maxlength')\">字符长度小于等于200</div>\r\n                        <div nz-form-explain *ngIf=\"getFormControl('name').dirty&&getFormControl('name').hasError('required')\">请输入活动名称</div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div nz-col nzMd=\"7\" nzSm=\"12\" nzXs=\"24\">\r\n                <div nz-form-item nz-row>\r\n                    <div nz-form-label nz-col>\r\n                        <label>状态</label>\r\n                    </div>\r\n                    <div nz-form-control nz-col class=\"text-pink-light\">\r\n                        {{acitivityDto.statusName}}\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div nz-col nzMd=\"6\" nzSm=\"12\" nzXs=\"24\">\r\n                <div nz-form-item nz-row>\r\n                    <div nz-form-label nz-col>\r\n                        <label>发布时间</label>\r\n                    </div>\r\n                    <div nz-form-control nz-col class=\"text-pink-light\">\r\n                        {{acitivityDto.publishTime|_date}}\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <!-- <div nz-col nzMd=\"6\" nzSm=\"12\" nzXs=\"24\">\r\n            <div nz-form-item nz-row>\r\n                <div nz-form-label nz-col>\r\n                    <label></label>\r\n                </div>\r\n            </div>\r\n        </div> -->\r\n\r\n\r\n\r\n        <div nz-row [nzGutter]=\"16\">\r\n\r\n            <div nz-col nzMd=\"7\" nzSm=\"12\" nzXs=\"24\">\r\n                <div nz-form-item nz-row>\r\n                    <div nz-form-label nz-col>\r\n                        <label nz-form-item-required>开始时间</label>\r\n                    </div>\r\n                    <div nz-form-control nz-col nzHasFeedback [nzValidateStatus]=\"getFormControl('beginTime')\">\r\n                        <nz-datepicker style=\"height:32px;width:100%;\" [nzSize]=\"'large'\" formControlName=\"beginTime\" [(ngModel)]=\"acitivityDto.beginTime\"></nz-datepicker>\r\n                        <div nz-form-explain *ngIf=\"getFormControl('beginTime').dirty&&getFormControl('beginTime').hasError('required')\">请输入活动开始时间</div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n            <div nz-col nzMd=\"7\" nzSm=\"12\" nzXs=\"24\">\r\n                <div nz-form-item nz-row>\r\n                    <div nz-form-label nz-col>\r\n                        <label nz-form-item-required>结束时间</label>\r\n                    </div>\r\n                    <div nz-form-control nz-col nzHasFeedback [nzValidateStatus]=\"getFormControl('endTime')\">\r\n                        <nz-datepicker style=\"width:100%;\" formControlName=\"endTime\" [(ngModel)]=\"acitivityDto.endTime\"></nz-datepicker>\r\n                        <div nz-form-explain *ngIf=\"getFormControl('endTime').dirty&&getFormControl('endTime').hasError('required')\">请输入活动结束时间</div>\r\n                    </div>\r\n\r\n                </div>\r\n            </div>\r\n\r\n            <div nz-col nzMd=\"6\" nzSm=\"12\" nzXs=\"24\">\r\n                <div nz-form-item nz-row>\r\n                    <div nz-form-label nz-col>\r\n                        <label nz-form-item-required>活动类型</label>\r\n                    </div>\r\n                    <div nz-form-control nz-col nzHasFeedback [nzValidateStatus]=\"getFormControl('activityType')\">\r\n                        <nz-select formControlName=\"activityType\" [nzPlaceHolder]=\"'请选择活动类型'\" [(ngModel)]=\"acitivityDto.activityType\" [nzShowSearch]=\"true\"\r\n                            nzSize=\"large\">\r\n                            <nz-option *ngFor=\"let i of AcTypes\" [nzLabel]=\"i.text\" [nzValue]=\"i.value\">\r\n                            </nz-option>\r\n                        </nz-select>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n        </div>\r\n\r\n        <div nz-row [nzGutter]=\"16\">\r\n\r\n            <div nz-col nzMd=\"7\" nzSm=\"12\" nzXs=\"24\">\r\n                <div nz-form-item nz-row>\r\n                    <div nz-form-label nz-col>\r\n                    </div>\r\n                    <div nz-form-control nz-col nzHasFeedback>\r\n                        <label>未完成用烟申请单限制（经理、客户）</label>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n            <div nz-col nzMd=\"7\" nzSm=\"12\" nzXs=\"24\">\r\n                <div nz-form-item nz-row>\r\n                    <div nz-form-label nz-col>\r\n                        <label>客户经理</label>\r\n                    </div>\r\n                    <div nz-form-control nz-col nzHasFeedback [nzValidateStatus]=\"getFormControl('mUnfinished')\">\r\n                        <nz-input-number style=\"width:100%;\" [nzSize]=\"'large'\" [nzStep]=\"1\" [nzMin]=\"0\" [nzMax]=\"9999\" formControlName=\"mUnfinished\"\r\n                            [(ngModel)]=\"acitivityDto.mUnfinished\"></nz-input-number>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n            <div nz-col nzMd=\"6\" nzSm=\"12\" nzXs=\"24\">\r\n                <div nz-form-item nz-row>\r\n                    <div nz-form-label nz-col>\r\n                        <label>零售客户</label>\r\n                    </div>\r\n                    <div nz-form-control nz-col nzHasFeedback [nzValidateStatus]=\"getFormControl('rUnfinished')\">\r\n                        <nz-input-number style=\"width:100%;\" [nzSize]=\"'large'\" [nzStep]=\"1\" [nzMin]=\"0\" [nzMax]=\"9999\" formControlName=\"rUnfinished\"\r\n                            [(ngModel)]=\"acitivityDto.rUnfinished\"></nz-input-number>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <div nz-row [nzGutter]=\"16\">\r\n            <div nz-form-label nz-col>\r\n                <label nz-form-item-required>内容</label>\r\n            </div>\r\n            <div nz-form-control nz-col nzHasFeedback [nzValidateStatus]=\"getFormControl('content')\">\r\n                <nz-input nzType=\"textarea\" formControlName=\"content\" [(ngModel)]=\"acitivityDto.content\" [nzId]=\"'content'\"></nz-input>\r\n                <div nz-form-explain *ngIf=\"getFormControl('content').dirty&&getFormControl('content').hasError('required')\">请输入活动内容</div>\r\n            </div>\r\n\r\n        </div>\r\n\r\n    </nz-card>\r\n    <nz-card *ngIf=\"isGoodabled\" [nzBordered]=\"false\" nzTitle=\"商品管理\">\r\n        <nz-table formArrayName=\"items\" [nzDataSource]=\"items.value\" [nzIsPagination]=\"false\">\r\n            <thead nz-thead>\r\n                <tr>\r\n                    <th nz-th>商品规格</th>\r\n                    <th nz-th>单次申请最小限制（条）</th>\r\n                    <th nz-th>单次申请最大限制（条）</th>\r\n                    <th nz-th>优惠说明</th>\r\n                    <th nz-th>操作</th>\r\n                </tr>\r\n            </thead>\r\n            <tbody nz-tbody>\r\n                <tr nz-tbody-tr *ngFor=\"let item of items.controls; let i = index\" [formGroupName]=\"i\">\r\n                    <td nz-td>\r\n                        <span *ngIf=\"editIndex!==i\">{{items.value[i].specification}}</span>\r\n                        <span *ngIf=\"editIndex===i\" nz-form-control [nzValidateStatus]=\"item.controls.specification\">\r\n                            <label nz-form-item-required></label>\r\n                            <nz-input style=\"width:85%;\" formControlName=\"specification\" nzPlaceHolder=\"商品规格\" nzSize=\"large\"></nz-input>\r\n                            <div nz-form-explain *ngIf=\"item.controls.specification.dirty&&item.controls.specification.hasError('required')\">规格不能为空</div>\r\n                        </span>\r\n                    </td>\r\n                    <td nz-td>\r\n                        <span *ngIf=\"editIndex!==i\">{{items.value[i].minNum}}</span>\r\n                        <span *ngIf=\"editIndex===i\" nz-form-control [nzValidateStatus]=\"item.controls.minNum\">\r\n                            <label nz-form-item-required></label>\r\n                            <nz-input-number [nzMin]=\"0\" style=\"width:85%;\" formControlName=\"minNum\" nzPlaceHolder=\"单次申请最小限制\" nzSize=\"large\"></nz-input-number>\r\n                        </span>\r\n                    </td>\r\n                    <td nz-td>\r\n                        <span *ngIf=\"editIndex!==i\">{{items.value[i].maxNum}}</span>\r\n                        <span *ngIf=\"editIndex===i\" nz-form-control [nzValidateStatus]=\"item.controls.maxNum\">\r\n                            <label nz-form-item-required></label>\r\n                            <nz-input-number [nzMin]=\"0\" style=\"width:85%;\" formControlName=\"maxNum\" nzPlaceHolder=\"单次申请最大限制\" nzSize=\"large\"></nz-input-number>\r\n                        </span>\r\n                    </td>\r\n                    <td nz-td>\r\n                        <span *ngIf=\"editIndex!==i\">{{items.value[i].discountDesc}}</span>\r\n                        <span *ngIf=\"editIndex===i\" nz-form-control [nzValidateStatus]=\"item.controls.discountDesc\">\r\n                            <nz-input formControlName=\"discountDesc\" nzPlaceHolder=\"优惠说明\" nzSize=\"large\"></nz-input>\r\n                        </span>\r\n                    </td>\r\n                    <!-- <td nz-td style=\"display:none\">\r\n                        <span *ngIf=\"editIndex!==i\">{{items.value[i].id}}</span>\r\n                        <span *ngIf=\"editIndex===i\" nz-form-control [nzValidateStatus]=\"item.controls.id\">\r\n                            <nz-input formControlName=\"id\"  nzPlaceHolder=\"商品id\" nzSize=\"large\"></nz-input>\r\n                        </span>\r\n                    </td> -->\r\n                    <td nz-td>\r\n                        <span *ngIf=\"editIndex!==i\">\r\n                            <a (click)=\"edit(i)\">编辑</a>\r\n                            <span nz-table-divider></span>\r\n                            <nz-popconfirm (nzOnConfirm)=\"delete(i,items.value[i].id)\" [nzTitle]=\"'是否要删除'+items.value[i].specification+'?'\">\r\n                                <a nz-popconfirm>删除</a>\r\n                            </nz-popconfirm>\r\n                        </span>\r\n                        <span *ngIf=\"editIndex===i\">\r\n                            <a (click)=\"save(i)\">保存</a>\r\n                            <span nz-table-divider></span>\r\n                            <nz-popconfirm (nzOnConfirm)=\"cancel(i)\" [nzTitle]=\"'是否要取消操作？'\">\r\n                                <a nz-popconfirm>取消</a>\r\n                            </nz-popconfirm>\r\n                        </span>\r\n                    </td>\r\n                </tr>\r\n            </tbody>\r\n        </nz-table>\r\n        <button *ngIf=\"editIndex===-1\" nz-button [nzType]=\"'dashed'\" [nzSize]=\"'large'\" (click)=\"add()\" class=\"ant-btn__block mt-md\">\r\n            <i class=\"anticon anticon-plus\"></i>\r\n            <span>新增商品</span>\r\n        </button>\r\n    </nz-card>\r\n\r\n    <!-- <button *ngIf=\"isSave\" nz-button [nzType]=\"'primary'\" [nzSize]=\"'large'\" type=\"submit\" [nzLoading]=\"isConfirmLoading\">\r\n        {{l(\"保存\")}}\r\n    </button>\r\n    <button *ngIf=\"isPulish\" nz-button [nzType]=\"'primary'\" (click)=\"pulish(modelContent)\" [nzSize]=\"'large'\" [nzLoading]=\"isConfirmLoading\">\r\n        {{l(\"发布\")}}\r\n    </button> -->\r\n</form>\r\n<footer-toolbar errorCollect>\r\n    <button *ngIf=\"isSave\" nz-button [nzType]=\"'primary'\" (click)=\"saveSub()\" [nzSize]=\"'large'\" [nzLoading]=\"isConfirmLoading\">\r\n        {{l(\"保存\")}}\r\n    </button>\r\n    <button *ngIf=\"isPulish\" nz-button [nzType]=\"'primary'\" (click)=\"pulish(modelContent,2)\" [nzSize]=\"'large'\" [nzLoading]=\"isConfirmLoading\">\r\n        {{l(\"发布\")}}\r\n    </button>\r\n    <button *ngIf=\"isDropOff\" nz-button [nzType]=\"'primary'\" (click)=\"pulish(modelContent,3)\" [nzSize]=\"'large'\" [nzLoading]=\"isConfirmLoading\">\r\n        {{l(\"下架\")}}\r\n    </button>\r\n    <!-- <button  nz-button [nzType]=\"'primary'\" (click)=\"Return()\" [nzSize]=\"'large'\" >\r\n        {{l(\"返回\")}}\r\n    </button> -->\r\n</footer-toolbar>"

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
    function ActivityComponent(injector, activityService, fb, activityGoodsService, modal, routerpar, router) {
        var _this = _super.call(this, injector) || this;
        _this.activityService = activityService;
        _this.fb = fb;
        _this.activityGoodsService = activityGoodsService;
        _this.modal = modal;
        _this.routerpar = routerpar;
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
        _this.isDropOff = false;
        //商品管理
        _this.isGoodabled = false;
        _this.isConfirmLoading = false;
        _this.isAlert = false;
        //行内编辑
        _this.editIndex = -1;
        _this.editObj = {};
        _this.id = 0;
        _this.id = _this.routerpar.snapshot.params['id'];
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
        this.activityService.get(this.id).subscribe(function (result) {
            _this.acitivityDto = result;
            // this.publishTimes = this.acitivityDto.publishTime;
            _this.activityId = result.id;
            if (_this.acitivityDto.id) {
                _this.isGoodabled = true;
                _this.isSave = _this.acitivityDto.status == 1 || _this.acitivityDto.status == 3 ? true : false;
                _this.isPulish = _this.acitivityDto.status == 1 || _this.acitivityDto.status == 3 ? true : false;
                _this.isDropOff = _this.acitivityDto.status == 2 ? true : false;
            }
            else {
                //新增时清除日期默认值
                _this.acitivityDto.beginTime = null;
                _this.acitivityDto.endTime = null;
                _this.acitivityDto.activityType = 1;
                //活动活动状态
                _this.acitivityDto.status = 1;
                _this.acitivityDto.statusName = '草稿';
                //按钮是否可见
                _this.isSave = true;
                _this.isPulish = false;
                _this.acitivityDto.mUnfinished = 15;
                _this.acitivityDto.rUnfinished = 6;
            }
            //当活动状态为发布时下架按钮可见
            _this.isDropOff = _this.acitivityDto.status == 2 ? true : false;
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
            if (_this.acitivityDto.id) {
                _this.isGoodabled = true;
                _this.isSave = _this.acitivityDto.status == 1 || _this.acitivityDto.status == 3 ? true : false;
                _this.isPulish = _this.acitivityDto.status == 1 || _this.acitivityDto.status == 3 ? true : false;
                _this.isDropOff = _this.acitivityDto.status == 2 ? true : false;
                // this.isPulish = true;
            }
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
        arry.push(__WEBPACK_IMPORTED_MODULE_5__shared_service_proxies_entity__["h" /* Parameter */].fromJS({ key: 'AvtivityId', value: this.acitivityDto.id }));
        arry.push(__WEBPACK_IMPORTED_MODULE_5__shared_service_proxies_entity__["h" /* Parameter */].fromJS({ key: 'SearchName', value: this.searchName }));
        return arry;
    };
    /**
     * 新增
     * @param i
     */
    ActivityComponent.prototype.add = function () {
        this.items.push(this.createFormGoods());
        var index = this.items.length - 1;
        this.addIndex = index;
        this.edit(index);
        // this.items.at(index).value.minNum = 10;
    };
    /**
     * 编辑
     * @param i
     */
    ActivityComponent.prototype.edit = function (index) {
        var addIndex = this.items.length - 1;
        if (addIndex != index) {
            if (!this.items.at(addIndex).value.id) {
                this.delete(addIndex);
            }
        }
        console.log('editIndex:');
        console.log(this.editIndex);
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
            if (!_this.good.id) {
                _this.goodes.push(result);
            }
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
    ActivityComponent.prototype.pulish = function (contentTpl, status) {
        var _this = this;
        if (this.goodes.length > 0) {
            if (status == 2) {
                this.activityService.isPulish().subscribe(function (isPulishs) {
                    if (isPulishs) {
                        _this.acitivityDto.status = status;
                        _this.acitivityDto.publishTime = new Date;
                        _this.saveSub();
                    }
                    else {
                        _this.modal.warning({
                            title: '请先下架其它已发布商品！'
                        });
                    }
                });
            }
            else {
                this.acitivityDto.status = status;
                this.acitivityDto.publishTime = null;
                this.saveSub();
            }
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
            __WEBPACK_IMPORTED_MODULE_7_ng_zorro_antd__["NzModalService"], __WEBPACK_IMPORTED_MODULE_9__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_9__angular_router__["h" /* Router */]])
    ], ActivityComponent);
    return ActivityComponent;
}(__WEBPACK_IMPORTED_MODULE_1__shared_app_component_base__["a" /* AppComponentBase */]));



/***/ }),

/***/ "../../../../../src/app/admin/markeeting-serve/employees/create-employee/create-employee.component.html":
/***/ (function(module, exports) {

module.exports = "<form nz-form [formGroup]=\"formc\" *ngIf=\"cmodalVisible\" id=\"frm_create_employee\" (ngSubmit)=\"savec(deleteContent)\">\r\n    <nz-modal [nzVisible]=\"cmodalVisible\" [nzTitle]=\"'创建员工'\" [nzConfirmLoading]=\"cloading\" [nzContent]=\"modalContent\" [nzFooter]=\"modalFooter\"\r\n        (nzOnCancel)=\"chandleCancel($event)\">\r\n        <ng-template #modalContent>\r\n            <ng-template #nzTabHeading>\r\n                员工信息\r\n            </ng-template>\r\n            <ng-template #deleteContent>\r\n                </ng-template>\r\n            <fieldset>\r\n                <div nz-form-item nz-row>\r\n                    <div nz-form-label nz-col [nzSm]=\"5\">\r\n                        <label for=\"code\" nz-form-item-required>员工编码</label>\r\n                    </div>\r\n                    <div nz-form-control nz-col [nzSm]=\"19\" nzHasFeedback [nzValidateStatus]=\"getFormControl('code')\">\r\n                        <nz-input formControlName=\"code\" [(ngModel)]=\"employeec.code\" [nzId]=\"'code'\"></nz-input>\r\n                        <div nz-form-explain *ngIf=\"getFormControl('code').dirty&&getFormControl('code').hasError('maxlength')\">字符长度小于等于50</div>\r\n                        <div nz-form-explain *ngIf=\"getFormControl('code').dirty&&getFormControl('code').hasError('required')\">请输入员工编码</div>\r\n                    </div>\r\n                </div>\r\n                <div nz-form-item nz-row>\r\n                    <div nz-form-label nz-col [nzSm]=\"5\">\r\n                        <label for=\"name\" nz-form-item-required>姓名</label>\r\n                    </div>\r\n                    <div nz-form-control nz-col [nzSm]=\"19\" nzHasFeedback [nzValidateStatus]=\"getFormControl('name')\">\r\n                        <nz-input formControlName=\"name\" [(ngModel)]=\"employeec.name\" [nzId]=\"'name'\"></nz-input>\r\n                        <div nz-form-explain *ngIf=\"getFormControl('name').dirty&&getFormControl('name').hasError('maxlength')\">字符长度小于等于50</div>\r\n                        <div nz-form-explain *ngIf=\"getFormControl('name').dirty&&getFormControl('name').hasError('required')\">请输入姓名</div>\r\n                    </div>\r\n                    <!--<div nz-form-label nz-col [nzSm]=\"4\">\r\n                                    <label for=\"surname\" nz-form-item-required>{{l(\"Surname\")}}</label>\r\n                                </div>\r\n                                <div nz-form-control nz-col [nzSm]=\"8\" nzHasFeedback [nzValidateStatus]=\"getFormControl('surname')\">\r\n                                    <nz-input formControlName=\"surname\" [(ngModel)]=\"user.surname\" nzPlaceHolder=\"请输入小于等于32的字符\" [nzId]=\"'surname'\"></nz-input>\r\n                                    <div nz-form-explain *ngIf=\"getFormControl('surname').dirty&&getFormControl('surname').hasError('maxlength')\">字符长度小于等于32</div>\r\n                                    <div nz-form-explain *ngIf=\"getFormControl('surname').dirty&&getFormControl('surname').hasError('required')\">请输入名</div>\r\n                                </div> -->\r\n                </div>\r\n                <div nz-form-item nz-row>\r\n                    <div nz-form-label nz-col [nzSm]=\"5\">\r\n                        <label for=\"position\" nz-form-item-required>职位</label>\r\n                    </div>\r\n                    <div nz-form-control nz-col [nzSm]=\"19\" nzHasFeedback [nzValidateStatus]=\"getFormControl('position')\">\r\n                        <nz-select formControlName=\"position\" [nzPlaceHolder]=\"'职位'\" [(ngModel)]=\"employeec.position\" [nzShowSearch]=\"true\"\r\n                            nzSize=\"large\">\r\n                            <nz-option *ngFor=\"let i of positions\" [nzLabel]=\"i.text\" [nzValue]=\"i.value\">\r\n                            </nz-option>\r\n                        </nz-select>\r\n                        <!-- <nz-input formControlName=\"position\" [(ngModel)]=\"employeec.emailAddress\" [nzId]=\"'position'\"></nz-input>\r\n                        <div nz-form-explain *ngIf=\"getFormControl('position').dirty&&getFormControl('position').hasError('required')\">请输入职位</div> -->\r\n                    </div>\r\n                </div>\r\n                <div nz-form-item nz-row>\r\n                    <div nz-form-label nz-col [nzSm]=\"5\">\r\n                        <label for=\"phone\">电话</label>\r\n                    </div>\r\n                    <div nz-form-control nz-col [nzSm]=\"19\" nzHasFeedback [nzValidateStatus]=\"getFormControl('phone')\">\r\n                        <nz-input formControlName=\"phone\" [(ngModel)]=\"employeec.phone\" [nzType]=\"'phone'\" [nzId]=\"'phone'\"></nz-input>\r\n                        <div nz-form-explain *ngIf=\"getFormControl('phone').dirty&&getFormControl('phone').hasError('pattern')\">请输入正确的电话号码</div>\r\n                    </div>\r\n                </div>\r\n                <div nz-form-item nz-row>\r\n                    <div nz-form-label nz-col [nzSm]=\"5\">\r\n                        <label for=\"company\" >所属公司</label>\r\n                    </div>\r\n                    <div nz-form-control nz-col [nzSm]=\"19\" nzHasFeedback [nzValidateStatus]=\"getFormControl('company')\">\r\n                        <nz-input formControlName=\"company\" [(ngModel)]=\"employeec.company\" [nzId]=\"'company'\"></nz-input>\r\n                        <div nz-form-explain *ngIf=\"getFormControl('company').dirty&&getFormControl('company').hasError('maxlength')\">字符长度小于等于200</div>\r\n                    </div>\r\n                </div>\r\n                <div nz-form-item nz-row>\r\n                    <div nz-form-label nz-col [nzSm]=\"5\">\r\n                        <label for=\"department\" >所属市场部</label>\r\n                    </div>\r\n                    <div nz-form-control nz-col [nzSm]=\"19\" nzHasFeedback [nzValidateStatus]=\"getFormControl('department')\">\r\n                        <nz-input formControlName=\"department\" [(ngModel)]=\"employeec.department\" [nzId]=\"'department'\"></nz-input>\r\n                        <div nz-form-explain *ngIf=\"getFormControl('department').dirty&&getFormControl('department').hasError('maxlength')\">字符长度小于等于200</div>\r\n                    </div>\r\n                </div>\r\n                <div nz-form-item nz-row>\r\n                    <div nz-form-control nz-col [nzSpan]=\"19\" [nzOffset]=\"5\">\r\n                        <label nz-checkbox formControlName=\"isactive\" [(ngModel)]=\"employeec.isAction\">\r\n                            <span>启用</span>\r\n                        </label>\r\n                    </div>\r\n                </div>\r\n            </fieldset>\r\n        </ng-template>\r\n        <ng-template #modalFooter>\r\n            <button nz-button [nzType]=\"'default'\" [nzSize]=\"'large'\" type=\"button\" (click)=\"chandleCancel($event)\">\r\n                取消\r\n            </button>\r\n            <button nz-button [nzType]=\"'primary'\" [nzSize]=\"'large'\" type=\"submit\" [nzLoading]=\"isConfirmLoading\">\r\n                保存\r\n            </button>\r\n        </ng-template>\r\n    </nz-modal>\r\n</form>"

/***/ }),

/***/ "../../../../../src/app/admin/markeeting-serve/employees/create-employee/create-employee.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateEmployeeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_app_component_base__ = __webpack_require__("../../../../../src/app/shared/app-component-base.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_service_proxies_entity_employee__ = __webpack_require__("../../../../../src/app/shared/service-proxies/entity/employee.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_service_proxies_marketing_service__ = __webpack_require__("../../../../../src/app/shared/service-proxies/marketing-service/index.ts");
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






var CreateEmployeeComponent = /** @class */ (function (_super) {
    __extends(CreateEmployeeComponent, _super);
    function CreateEmployeeComponent(injector, fb, employeeService, modal) {
        var _this = _super.call(this, injector) || this;
        _this.fb = fb;
        _this.employeeService = employeeService;
        _this.modal = modal;
        _this.modalSave = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        _this.cmodalVisible = false;
        _this.cloading = false;
        _this.isConfirmLoading = false;
        _this.employeec = new __WEBPACK_IMPORTED_MODULE_2__shared_service_proxies_entity_employee__["a" /* Employee */]();
        _this.positions = [
            { text: '客户经理', value: 2 },
            { text: '营销人员', value: 3 },
        ];
        /**
         * 取消按钮时间
         */
        _this.chandleCancel = function (e) {
            _this.cmodalVisible = false;
            _this.isConfirmLoading = false;
            _this.reset(e);
        };
        return _this;
    }
    /**
     * 页面初始加载
     */
    CreateEmployeeComponent.prototype.ngOnInit = function () {
        this.formc = this.fb.group({
            code: [null, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].maxLength(50)])],
            name: [null, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].maxLength(50)])],
            position: [null, [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].required]],
            phone: [null, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].pattern('^1[3|4|5|7|8|9][0-9]{9}$')])],
            company: [null, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].maxLength(200)])],
            department: [null, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].maxLength(200)])],
            isactive: [true],
        });
    };
    /**
     * 显示模态框（进入新增页）
     */
    CreateEmployeeComponent.prototype.show = function () {
        this.reset();
        this.employeec = new __WEBPACK_IMPORTED_MODULE_2__shared_service_proxies_entity_employee__["a" /* Employee */]();
        // this.employeec.position = 2;
        this.employeec.init({ isAction: true, position: 2 });
        this.cmodalVisible = true;
    };
    CreateEmployeeComponent.prototype.getFormControl = function (name) {
        return this.formc.controls[name];
    };
    CreateEmployeeComponent.prototype.savec = function (deleteContent) {
        var _this = this;
        //检查form验证
        for (var i in this.formc.controls) {
            this.formc.controls[i].markAsDirty();
        }
        if (this.formc.valid) {
            this.isConfirmLoading = true;
            this.employeeService.CheckCode(this.employeec.code).subscribe(function (isCode) {
                if (isCode) {
                    _this.employeeService.update(_this.employeec)
                        .finally(function () { _this.isConfirmLoading = false; })
                        .subscribe(function () {
                        _this.notify.info(_this.l('保存成功！'));
                        _this.cmodalVisible = false;
                        _this.modalSave.emit(null);
                    });
                }
                else {
                    console.log('进来了吗？');
                    _this.isConfirmLoading = false;
                    _this.modal.warning({
                        content: deleteContent,
                        title: '改员工编码已存在！'
                    });
                }
            });
        }
    };
    CreateEmployeeComponent.prototype.reset = function (e) {
        if (e) {
            e.preventDefault();
        }
        this.formc.reset();
        for (var key in this.formc.controls) {
            this.formc.controls[key].markAsPristine();
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], CreateEmployeeComponent.prototype, "modalSave", void 0);
    CreateEmployeeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            moduleId: module.i,
            selector: 'create-employee-modal',
            template: __webpack_require__("../../../../../src/app/admin/markeeting-serve/employees/create-employee/create-employee.component.html"),
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injector"], __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormBuilder"], __WEBPACK_IMPORTED_MODULE_4__shared_service_proxies_marketing_service__["e" /* EmployeeServiceProxy */],
            __WEBPACK_IMPORTED_MODULE_5_ng_zorro_antd__["NzModalService"]])
    ], CreateEmployeeComponent);
    return CreateEmployeeComponent;
}(__WEBPACK_IMPORTED_MODULE_1__shared_app_component_base__["a" /* AppComponentBase */]));



/***/ }),

/***/ "../../../../../src/app/admin/markeeting-serve/employees/edit-employee/edit-employee.component.html":
/***/ (function(module, exports) {

module.exports = "<form nz-form [formGroup]=\"forme\" *ngIf=\"emodalVisible\" id=\"frm_edit_employee\" (ngSubmit)=\"savee()\">\r\n        <nz-modal [nzVisible]=\"emodalVisible\" [nzTitle]=\"'创建员工'\" [nzConfirmLoading]=\"cloading\" [nzContent]=\"modalContent\" [nzFooter]=\"modalFooter\"\r\n            (nzOnCancel)=\"ehandleCancel($event)\">\r\n            <ng-template #modalContent>\r\n                <ng-template #nzTabHeading>\r\n                    员工信息\r\n                </ng-template>\r\n                <fieldset>\r\n                    <div nz-form-item nz-row>\r\n                        <div nz-form-label nz-col [nzSm]=\"5\">\r\n                            <label for=\"code\" nz-form-item-required>员工编码</label>\r\n                        </div>\r\n                        <div nz-form-control nz-col [nzSm]=\"19\" nzHasFeedback [nzValidateStatus]=\"getFormControl('code')\">\r\n                            <nz-input formControlName=\"code\" [(ngModel)]=\"employeee.code\" [nzId]=\"'code'\"></nz-input>\r\n                            <div nz-form-explain *ngIf=\"getFormControl('code').dirty&&getFormControl('code').hasError('maxlength')\">字符长度小于等于50</div>\r\n                            <div nz-form-explain *ngIf=\"getFormControl('code').dirty&&getFormControl('code').hasError('required')\">请输入员工编码</div>\r\n                        </div>\r\n                    </div>\r\n                    <div nz-form-item nz-row>\r\n                        <div nz-form-label nz-col [nzSm]=\"5\">\r\n                            <label for=\"name\" nz-form-item-required>姓名</label>\r\n                        </div>\r\n                        <div nz-form-control nz-col [nzSm]=\"19\" nzHasFeedback [nzValidateStatus]=\"getFormControl('name')\">\r\n                            <nz-input formControlName=\"name\" [(ngModel)]=\"employeee.name\" [nzId]=\"'name'\"></nz-input>\r\n                            <div nz-form-explain *ngIf=\"getFormControl('name').dirty&&getFormControl('name').hasError('maxlength')\">字符长度小于等于50</div>\r\n                            <div nz-form-explain *ngIf=\"getFormControl('name').dirty&&getFormControl('name').hasError('required')\">请输入姓名</div>\r\n                        </div>\r\n                        <!--<div nz-form-label nz-col [nzSm]=\"4\">\r\n                                        <label for=\"surname\" nz-form-item-required>{{l(\"Surname\")}}</label>\r\n                                    </div>\r\n                                    <div nz-form-control nz-col [nzSm]=\"8\" nzHasFeedback [nzValidateStatus]=\"getFormControl('surname')\">\r\n                                        <nz-input formControlName=\"surname\" [(ngModel)]=\"user.surname\" nzPlaceHolder=\"请输入小于等于32的字符\" [nzId]=\"'surname'\"></nz-input>\r\n                                        <div nz-form-explain *ngIf=\"getFormControl('surname').dirty&&getFormControl('surname').hasError('maxlength')\">字符长度小于等于32</div>\r\n                                        <div nz-form-explain *ngIf=\"getFormControl('surname').dirty&&getFormControl('surname').hasError('required')\">请输入名</div>\r\n                                    </div> -->\r\n                    </div>\r\n                    <div nz-form-item nz-row>\r\n                        <div nz-form-label nz-col [nzSm]=\"5\">\r\n                            <label for=\"position\" nz-form-item-required>职位</label>\r\n                        </div>\r\n                        <div nz-form-control nz-col [nzSm]=\"19\" nzHasFeedback [nzValidateStatus]=\"getFormControl('position')\">\r\n                            <nz-select formControlName=\"position\" [nzPlaceHolder]=\"'职位'\" [(ngModel)]=\"employeee.position\" [nzShowSearch]=\"true\"\r\n                                nzSize=\"large\">\r\n                                <nz-option *ngFor=\"let i of positions\" [nzLabel]=\"i.text\" [nzValue]=\"i.value\">\r\n                                </nz-option>\r\n                            </nz-select>\r\n                            <!-- <nz-input formControlName=\"position\" [(ngModel)]=\"employeee.emailAddress\" [nzId]=\"'position'\"></nz-input>\r\n                            <div nz-form-explain *ngIf=\"getFormControl('position').dirty&&getFormControl('position').hasError('required')\">请输入职位</div> -->\r\n                        </div>\r\n                    </div>\r\n                    <div nz-form-item nz-row>\r\n                        <div nz-form-label nz-col [nzSm]=\"5\">\r\n                            <label for=\"phone\">电话</label>\r\n                        </div>\r\n                        <div nz-form-control nz-col [nzSm]=\"19\" nzHasFeedback [nzValidateStatus]=\"getFormControl('phone')\">\r\n                            <nz-input formControlName=\"phone\" [(ngModel)]=\"employeee.phone\" [nzType]=\"'phone'\" [nzId]=\"'phone'\"></nz-input>\r\n                            <div nz-form-explain *ngIf=\"getFormControl('phone').dirty&&getFormControl('phone').hasError('pattern')\">请输入正确的电话号码</div>\r\n                        </div>\r\n                    </div>\r\n                    <div nz-form-item nz-row>\r\n                        <div nz-form-label nz-col [nzSm]=\"5\">\r\n                            <label for=\"company\" >所属公司</label>\r\n                        </div>\r\n                        <div nz-form-control nz-col [nzSm]=\"19\" nzHasFeedback [nzValidateStatus]=\"getFormControl('company')\">\r\n                            <nz-input formControlName=\"company\" [(ngModel)]=\"employeee.company\" [nzId]=\"'company'\"></nz-input>\r\n                            <div nz-form-explain *ngIf=\"getFormControl('company').dirty&&getFormControl('company').hasError('maxlength')\">字符长度小于等于200</div>\r\n                        </div>\r\n                    </div>\r\n                    <div nz-form-item nz-row>\r\n                        <div nz-form-label nz-col [nzSm]=\"5\">\r\n                            <label for=\"department\" >所属市场部</label>\r\n                        </div>\r\n                        <div nz-form-control nz-col [nzSm]=\"19\" nzHasFeedback [nzValidateStatus]=\"getFormControl('department')\">\r\n                            <nz-input formControlName=\"department\" [(ngModel)]=\"employeee.department\" [nzId]=\"'department'\"></nz-input>\r\n                            <div nz-form-explain *ngIf=\"getFormControl('department').dirty&&getFormControl('department').hasError('maxlength')\">字符长度小于等于200</div>\r\n                        </div>\r\n                    </div>\r\n                    <div nz-form-item nz-row>\r\n                        <div nz-form-control nz-col [nzSpan]=\"19\" [nzOffset]=\"5\">\r\n                            <label nz-checkbox formControlName=\"isactive\" [(ngModel)]=\"employeee.isAction\">\r\n                                <span>启用</span>\r\n                            </label>\r\n                        </div>\r\n                    </div>\r\n                </fieldset>\r\n            </ng-template>\r\n            <ng-template #modalFooter>\r\n                <button nz-button [nzType]=\"'default'\" [nzSize]=\"'large'\" type=\"button\" (click)=\"ehandleCancel($event)\">\r\n                    取消\r\n                </button>\r\n                <button nz-button [nzType]=\"'primary'\" [nzSize]=\"'large'\" type=\"submit\" [nzLoading]=\"iseConfirmLoading\">\r\n                    保存\r\n                </button>\r\n            </ng-template>\r\n        </nz-modal>\r\n    </form>"

/***/ }),

/***/ "../../../../../src/app/admin/markeeting-serve/employees/edit-employee/edit-employee.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditEmployeeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_app_component_base__ = __webpack_require__("../../../../../src/app/shared/app-component-base.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_service_proxies_marketing_service__ = __webpack_require__("../../../../../src/app/shared/service-proxies/marketing-service/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_service_proxies_entity_employee__ = __webpack_require__("../../../../../src/app/shared/service-proxies/entity/employee.ts");
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






var EditEmployeeComponent = /** @class */ (function (_super) {
    __extends(EditEmployeeComponent, _super);
    function EditEmployeeComponent(injector, employeeService, fb, modal) {
        var _this = _super.call(this, injector) || this;
        _this.employeeService = employeeService;
        _this.fb = fb;
        _this.modal = modal;
        _this.modalSave = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        _this.emodalVisible = false;
        _this.iseConfirmLoading = false;
        _this.positions = [
            { text: '客户经理', value: 2 },
            { text: '营销人员', value: 3 },
        ];
        /**
         * 取消按钮事件
         */
        _this.ehandleCancel = function (e) {
            _this.emodalVisible = false;
            _this.iseConfirmLoading = false;
            _this.reset();
        };
        return _this;
    }
    EditEmployeeComponent.prototype.ngOnInit = function () {
        this.forme = this.fb.group({
            code: [null, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].maxLength(50)])],
            name: [null, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].maxLength(50)])],
            position: [null, [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].required]],
            phone: [null, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].pattern('^1[3|4|5|7|8|9][0-9]{9}$')])],
            company: [null, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].maxLength(200)])],
            department: [null, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].maxLength(200)])],
            isactive: [true],
        });
    };
    /**
     * 显示模态框（进入新增页）
     * @param id 员工id
     */
    EditEmployeeComponent.prototype.show = function (id) {
        this.emodalVisible = true;
        this.employeee = new __WEBPACK_IMPORTED_MODULE_4__shared_service_proxies_entity_employee__["a" /* Employee */]();
        this.getEmployeeById(id);
    };
    /**
     * 根据员工id
     * @param id
     */
    EditEmployeeComponent.prototype.getEmployeeById = function (id) {
        var _this = this;
        this.employeeService.get(id).subscribe(function (result) {
            _this.employeee = result;
        });
    };
    /**
     *
     * @param name
     */
    EditEmployeeComponent.prototype.getFormControl = function (name) {
        return this.forme.controls[name];
    };
    EditEmployeeComponent.prototype.reset = function (e) {
        if (e) {
            e.preventDefault();
        }
        this.forme.reset();
        for (var key in this.forme.controls) {
            this.forme.controls[key].markAsPristine();
        }
    };
    /**
     * 保存员工信息
     */
    EditEmployeeComponent.prototype.savee = function () {
        var _this = this;
        //检查form验证
        for (var i in this.forme.controls) {
            this.forme.controls[i].markAsDirty();
        }
        if (this.forme.valid) {
            this.iseConfirmLoading = true;
            this.employeeService.CheckCode(this.employeee.code, this.employeee.id).subscribe(function (isCode) {
                if (isCode) {
                    _this.employeeService.update(_this.employeee)
                        .finally(function () {
                        _this.iseConfirmLoading = false;
                    })
                        .subscribe(function () {
                        _this.notify.info(_this.l('保存成功！'));
                        _this.emodalVisible = false;
                        _this.modalSave.emit(null);
                    });
                }
                else {
                    _this.iseConfirmLoading = false;
                    _this.modal.warning({
                        title: '改员工编码已存在！'
                    });
                }
            });
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], EditEmployeeComponent.prototype, "modalSave", void 0);
    EditEmployeeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            moduleId: module.i,
            selector: 'edit-employee-modal',
            template: __webpack_require__("../../../../../src/app/admin/markeeting-serve/employees/edit-employee/edit-employee.component.html"),
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injector"], __WEBPACK_IMPORTED_MODULE_2__shared_service_proxies_marketing_service__["e" /* EmployeeServiceProxy */], __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormBuilder"],
            __WEBPACK_IMPORTED_MODULE_5_ng_zorro_antd__["NzModalService"]])
    ], EditEmployeeComponent);
    return EditEmployeeComponent;
}(__WEBPACK_IMPORTED_MODULE_1__shared_app_component_base__["a" /* AppComponentBase */]));



/***/ }),

/***/ "../../../../../src/app/admin/markeeting-serve/employees/employees.component.html":
/***/ (function(module, exports) {

module.exports = "<pro-header></pro-header>\r\n<nz-card [nzBordered]=\"false\">\r\n    <form nz-form (ngSubmit)=\"refreshData()\" [nzLayout]=\"'inline'\">\r\n        <div nz-row [nzGutter]=\"24\">\r\n            <ng-template #deleteContent>\r\n                <h2>是否删除员工{{employeeName}}?</h2>\r\n            </ng-template>\r\n            <div nz-col [nzSpan]=\"8\" class=\"mb-md\">\r\n                <div nz-form-item class=\"d-flex\">\r\n                    <div nz-form-control class=\"flex-1\">\r\n                        <nz-input [(ngModel)]=\"search.name\" name=\"name\" [nzSize]=\"'large'\" [nzPlaceHolder]=\"'请输入员工名或员工编码'\" nzId=\"name\"></nz-input>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div nz-col [nzSpan]=\"8\" class=\"mb-md\">\r\n                <div nz-form-item class=\"d-flex\">\r\n                    <div nz-form-control class=\"flex-1\">\r\n                        <nz-select name=\"position\" [nzPlaceHolder]=\"'请选择职位'\" [(ngModel)]=\"search.position\" [nzShowSearch]=\"true\" nzSize=\"large\">\r\n                            <nz-option *ngFor=\"let i of positions\" [nzLabel]=\"i.text\" [nzValue]=\"i.value\">\r\n                            </nz-option>\r\n                        </nz-select>\r\n                        <!-- <nz-input [(ngModel)]=\"search.position\" name=\"position\" [nzSize]=\"'large'\" [nzPlaceHolder]=\"'请输入员工名或员工编码'\" nzId=\"position\"></nz-input> -->\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div nz-col [nzSpan]=\"8\" class=\"mb-md\" [class.text-right]=\"'true'\">\r\n                <button nz-button type=\"submit\" [nzType]=\"'primary'\" [nzLoading]=\"loading\" [nzSize]=\"'large'\">查询</button>\r\n                <button nz-button type=\"reset\" (click)=\"refreshData(true)\" [nzSize]=\"'large'\" class=\"mx-sm\">重置</button>\r\n                <button nz-button (click)=\"createEmployee()\" [nzType]=\"'primary'\" [nzSize]=\"'large'\">\r\n                    <i class=\"anticon anticon-plus\"></i>\r\n                    <span>新建</span>\r\n                </button>\r\n            </div>\r\n        </div>\r\n    </form>\r\n    <nz-table #nzTable [nzAjaxData]=\"employees\" [nzTotal]=\"query.total\" [(nzPageIndex)]=\"query.pageIndex\" [(nzPageSize)]=\"query.pageSize\"\r\n        [nzLoading]=\"loading\" [nzShowSizeChanger]=\"true\" (nzPageIndexChange)=\"refreshData()\" (nzPageSizeChange)=\"refreshData()\">\r\n        <thead nz-thead>\r\n            <tr>\r\n                <th nz-th>\r\n                    <span>员工编码</span>\r\n                </th>\r\n                <th nz-th>\r\n                    <span>姓名</span>\r\n                </th>\r\n                <th nz-th>\r\n                    <span>职位</span>\r\n                </th>\r\n                <th nz-th>\r\n                    <span>电话</span>\r\n                </th>\r\n                <th nz-th>\r\n                    <span>所属公司</span>\r\n                </th>\r\n                <th nz-th>\r\n                    <span>所属市场部</span>\r\n                </th>\r\n                <th nz-th>\r\n                    <span>启用</span>\r\n                </th>\r\n                <th nz-th>\r\n                    <span>操作</span>\r\n                </th>\r\n            </tr>\r\n        </thead>\r\n        <tbody nz-tbody>\r\n            <tr nz-tbody-tr *ngFor=\"let employee of nzTable.data\">\r\n                <td nz-td>{{employee.code}}</td>\r\n                <td nz-td>{{employee.name}}</td>\r\n                <td nz-td>{{employee.positionName}}</td>\r\n                <td nz-td>{{employee.phone}}</td>\r\n                <td nz-td>{{employee.company}}</td>\r\n                <td nz-td>{{employee.department}}</td>\r\n                <td nz-td>\r\n                    <nz-badge [nzStatus]=\"employee.activeType\" [nzText]=\"employee.activeText\"></nz-badge>\r\n                </td>\r\n                <td nz-td>\r\n                    <a (click)=\"editEmployee(employee)\">编辑</a>\r\n                    <span nz-table-divider></span>\r\n                    <a (click)=\"delete(employee,deleteContent)\">删除</a>\r\n                </td>\r\n            </tr>\r\n        </tbody>\r\n    </nz-table>\r\n</nz-card>\r\n<edit-employee-modal #editEmployeeModal (modalSave)=\"refreshData()\"></edit-employee-modal>\r\n<create-employee-modal #createEmployeeModal (modalSave)=\"refreshData()\"></create-employee-modal>"

/***/ }),

/***/ "../../../../../src/app/admin/markeeting-serve/employees/employees.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmployeesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_app_component_base__ = __webpack_require__("../../../../../src/app/shared/app-component-base.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_service_proxies_service_proxies__ = __webpack_require__("../../../../../src/app/shared/service-proxies/service-proxies.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng_zorro_antd__ = __webpack_require__("../../../../ng-zorro-antd/esm5/antd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__create_employee_create_employee_component__ = __webpack_require__("../../../../../src/app/admin/markeeting-serve/employees/create-employee/create-employee.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__edit_employee_edit_employee_component__ = __webpack_require__("../../../../../src/app/admin/markeeting-serve/employees/edit-employee/edit-employee.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_service_proxies_entity__ = __webpack_require__("../../../../../src/app/shared/service-proxies/entity/index.ts");
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
        _this.loading = false;
        _this.status = [
            { text: '启用', value: false, type: 'success' },
            { text: '禁用', value: false, type: 'default' },
        ];
        _this.positions = [
            { text: '客户经理', value: 2 },
            { text: '营销人员', value: 3 },
        ];
        _this.employees = [];
        //用于删除框的员工名称显示
        _this.employeeName = '';
        _this.search = { position: null, name: '' };
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
            this.query.pageIndex = 1;
            this.search = { position: null, name: '' };
        }
        this.loading = true;
        this.employeeService.getAll(this.query.skipCount(), this.query.pageSize, this.getParameter()).subscribe(function (result) {
            _this.loading = false;
            var status = 0;
            _this.employees = result.items.map(function (i) {
                if (i.isAction) {
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
            _this.query.total = result.totalCount;
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
        this.createEmployeeModal.show();
    };
    /**
     * 打开编辑员工模态框
     */
    EmployeesComponent.prototype.editEmployee = function (employee) {
        this.editEmployeeModal.show(employee.id);
    };
    EmployeesComponent.prototype.getParameter = function () {
        var arry = [];
        arry.push(__WEBPACK_IMPORTED_MODULE_6__shared_service_proxies_entity__["h" /* Parameter */].fromJS({ key: 'Filter', value: this.search.name }));
        arry.push(__WEBPACK_IMPORTED_MODULE_6__shared_service_proxies_entity__["h" /* Parameter */].fromJS({ key: 'Position', value: this.search.position }));
        return arry;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('editEmployeeModal'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_5__edit_employee_edit_employee_component__["a" /* EditEmployeeComponent */])
    ], EmployeesComponent.prototype, "editEmployeeModal", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('createEmployeeModal'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_4__create_employee_create_employee_component__["a" /* CreateEmployeeComponent */])
    ], EmployeesComponent.prototype, "createEmployeeModal", void 0);
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

module.exports = "<pro-header [title]=\"formTitle\">\r\n    <ng-template #logo>\r\n        <img src=\"https://gw.alipayobjects.com/zos/rmsportal/nxkuOJlFJuAUhzlMTCEe.png\">\r\n    </ng-template>\r\n    <ng-template *ngIf=\"form\" #action>\r\n        <button nz-button *ngIf=\"form.status == 1\" [nzSize]=\"'large'\" (click)=\"editForm()\">修改商品信息</button>\r\n        <button nz-button [nzSize]=\"'large'\" (click)=\"cancel()\" *ngIf=\"form.status == 1 || form.status == 2 || form.status == 3\">取消</button>\r\n        <button nz-button [nzSize]=\"'large'\" (click)=\"reject()\" *ngIf=\"form.status == 1 || form.status == 2\">拒绝</button>\r\n        <button nz-button [nzType]=\"'primary'\" (click)=\"firstApproval()\" *ngIf=\"form.status == 1\" [nzSize]=\"'large'\">初审通过</button>\r\n        <button nz-button [nzType]=\"'primary'\" (click)=\"approval()\" *ngIf=\"form.status == 2\" [nzSize]=\"'large'\">资料回传审核通过</button>\r\n        <button nz-button [nzType]=\"'primary'\" (click)=\"approval()\" *ngIf=\"form.status == 4\" [nzSize]=\"'large'\">营销中心审核通过</button>\r\n    </ng-template>\r\n    <ng-template style=\"display:none; width:0px;\" #extra></ng-template>\r\n    <ng-template #content>\r\n        <desc-list size=\"small\" col=\"3\" *ngIf=\"form\">\r\n            <desc-list-item term=\"活动名称\">{{form.activityName}}</desc-list-item>\r\n            <desc-list-item term=\"零售客户\">{{form.retailerName}}</desc-list-item>\r\n            <desc-list-item term=\"客户经理\">{{form.managerName}}</desc-list-item>\r\n            <desc-list-item term=\"商品规格\">{{form.goodsSpecification}}</desc-list-item>\r\n            <desc-list-item term=\"申请数量\">{{form.num}}</desc-list-item>\r\n            <desc-list-item term=\"申请人\">{{form.creationUser}}</desc-list-item>\r\n            <desc-list-item term=\"申请时间\">{{form.creationTime | _date}}</desc-list-item>\r\n            <desc-list-item term=\"申请理由\">{{form.reason}}</desc-list-item>\r\n        </desc-list>\r\n    </ng-template>\r\n    <ng-template #tab>\r\n        <nz-tabset [nzSize]=\"'default'\">\r\n            <nz-tab>\r\n                <ng-template #nzTabHeading>详情</ng-template>\r\n                <span>\r\n                    <nz-card *ngIf=\"form\" class=\"mb-lg\">\r\n                        <nz-steps [nzCurrent]=\"form.currentStep\">\r\n                            <nz-step *ngFor=\"let log of form.formLogList\" [nzTitle]=\"log.statusName\" [nzDescription]=\"showDesc\">\r\n                                <ng-template #showDesc>\r\n                                    <p>{{log.desc}}</p>\r\n                                    <p *ngIf=\"log.userName\" class=\"my-sm\">{{log.userName}}({{log.userTypeName}})</p>\r\n                                    <p *ngIf=\"log.actionTime\">{{log.actionTime | _date}}</p>\r\n                                    <p *ngIf=\"log.opinion\">意见：{{log.opinion}}</p>\r\n                                </ng-template>\r\n                            </nz-step>\r\n                        </nz-steps>\r\n                        <div class=\"steps-content\"></div>\r\n                    </nz-card>\r\n                    <nz-card class=\"mb-lg\">\r\n                        <ng-template #title>\r\n                            宴席信息\r\n                        </ng-template>\r\n                        <ng-template #extra>\r\n                            <a (click)=\"editBanquet()\">上传/修改</a>\r\n                        </ng-template>\r\n                        <ng-template #body>\r\n                            <desc-list class=\"mb-lg\" *ngIf=\"banquet\">\r\n                                <desc-list-item term=\"区县\">{{banquet.area}}</desc-list-item>\r\n                                <desc-list-item term=\"责任人\">{{banquet.responsible}}</desc-list-item>\r\n                                <desc-list-item term=\"活动执行人\">{{banquet.executor}}</desc-list-item>\r\n                                <desc-list-item term=\"宴席时间\">{{banquet.banquetTime | _date}}</desc-list-item>\r\n                                <desc-list-item term=\"宴席地点\">{{banquet.position}}</desc-list-item>\r\n                                <desc-list-item term=\"现场人数\">{{banquet.num}}</desc-list-item>\r\n                                <desc-list-item term=\"上传时间\">{{banquet.creationTime | _date}}</desc-list-item>\r\n                                <desc-list-item term=\"上传人\">{{banquet.userName}}</desc-list-item>\r\n                                <desc-list-item term=\"现场简述\">{{banquet.desc}}</desc-list-item>\r\n                            </desc-list>\r\n                            <h4 class=\"mb-md\">现场照片</h4>\r\n                            <nz-list [nzLoading]=\"loading\" class=\"imgList\" [nzDataSource]=\"list\" [nzGrid]=\"{gutter: 24, lg: 6, md: 8, sm: 12, xs: 24 }\">\r\n                                <ng-template #item let-item>\r\n                                    <nz-list-item>\r\n                                        <img alt=\"{{item.title}}\" src=\"{{item.cover}}\">\r\n                                    </nz-list-item>\r\n                                </ng-template>\r\n                            </nz-list>\r\n                        </ng-template>\r\n                    </nz-card>\r\n                </span>\r\n            </nz-tab>\r\n            <nz-tab>\r\n                <ng-template #nzTabHeading>消费者信息</ng-template>\r\n                <nz-card class=\"mb-lg\">\r\n                    <ng-template #title>\r\n                        基本信息\r\n                    </ng-template>\r\n                    <ng-template #extra>\r\n                        <a (click)=\"editDelivery()\" >修改</a>\r\n                    </ng-template>\r\n                    <ng-template #body>\r\n                        <desc-list class=\"mb-lg\" *ngIf=\"delivery\">\r\n                            <desc-list-item term=\"姓名\">{{delivery.userName}}</desc-list-item>\r\n                            <desc-list-item term=\"地址\">{{delivery.address}}</desc-list-item>\r\n                            <desc-list-item term=\"联系电话\">{{delivery.phone}}</desc-list-item>\r\n                        </desc-list>\r\n                        <div *ngIf=\"!delivery\" style=\"text-align: center;\">\r\n                            没有数据\r\n                        </div>\r\n                    </ng-template>\r\n                </nz-card>\r\n                <nz-card class=\"mb-lg\">\r\n                    <ng-template #title>\r\n                        物流信息\r\n                    </ng-template>\r\n                    <ng-template #extra>\r\n                        <a (click)=\"editExpress()\">添加/修改</a>\r\n                    </ng-template>\r\n                    <ng-template #body>\r\n                        <desc-list class=\"mb-lg\" *ngIf=\"delivery\">\r\n                            <desc-list-item term=\"快递公司\">{{delivery.expressCompany}}</desc-list-item>\r\n                            <desc-list-item term=\"快递单号\">{{delivery.expressNo}}</desc-list-item>\r\n                            <desc-list-item term=\"发件日期\">{{delivery.sendTime | _date}}</desc-list-item>\r\n                            <desc-list-item term=\"备注\">{{delivery.remark}}</desc-list-item>\r\n                        </desc-list>\r\n                        <div *ngIf=\"!delivery\" style=\"text-align: center;\">\r\n                            没有数据\r\n                        </div>\r\n                    </ng-template>\r\n                </nz-card>\r\n            </nz-tab>\r\n            <nz-tab>\r\n                <ng-template #nzTabHeading>推荐人信息</ng-template>\r\n                <nz-card class=\"mb-lg\">\r\n                    <ng-template #title>\r\n                        基本信息\r\n                    </ng-template>\r\n                    <ng-template #extra>\r\n                        <a (click)=\"editRDelivery()\" >添加/修改</a>\r\n                    </ng-template>\r\n                    <ng-template #body>\r\n                        <desc-list class=\"mb-lg\" *ngIf=\"rdelivery\">\r\n                            <desc-list-item term=\"姓名\">{{rdelivery.userName}}</desc-list-item>\r\n                            <desc-list-item term=\"地址\">{{rdelivery.address}}</desc-list-item>\r\n                            <desc-list-item term=\"联系电话\">{{rdelivery.phone}}</desc-list-item>\r\n                        </desc-list>\r\n                        <div *ngIf=\"!rdelivery\" style=\"text-align: center;\">\r\n                            没有数据\r\n                        </div>\r\n                    </ng-template>\r\n                </nz-card>\r\n                <nz-card class=\"mb-lg\">\r\n                    <ng-template #title>\r\n                        物流信息\r\n                    </ng-template>\r\n                    <ng-template #extra>\r\n                        <a (click)=\"editRExpress()\" >添加/修改</a>\r\n                    </ng-template>\r\n                    <ng-template #body>\r\n                        <desc-list class=\"mb-lg\" *ngIf=\"rdelivery\">\r\n                            <desc-list-item term=\"快递公司\">{{rdelivery.expressCompany}}</desc-list-item>\r\n                            <desc-list-item term=\"快递单号\">{{rdelivery.expressNo}}</desc-list-item>\r\n                            <desc-list-item term=\"发件日期\">{{rdelivery.sendTime | _date}}</desc-list-item>\r\n                            <desc-list-item term=\"备注\">{{rdelivery.remark}}</desc-list-item>\r\n                        </desc-list>\r\n                        <div *ngIf=\"!rdelivery\" style=\"text-align: center;\">\r\n                            没有数据\r\n                        </div>\r\n                    </ng-template>\r\n                </nz-card>\r\n            </nz-tab>\r\n        </nz-tabset>\r\n    </ng-template>\r\n</pro-header>\r\n<approval-modal #approvalModal (modalSave)=\"getFormData()\"></approval-modal>\r\n<edit-form-modal #editFormModal (modalSave)=\"getFormData()\"></edit-form-modal>\r\n<edit-delivery-modal #editDeliveryModal (modalSave)=\"getDeliveryData()\" ></edit-delivery-modal>\r\n<edit-express-modal #editExpressModal (modalSave)=\"getDeliveryData()\" ></edit-express-modal>\r\n<edit-banquet-modal #editBanquetModal (modalSave)=\"getBanquetData()\"></edit-banquet-modal>"

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__approval_approval_component__ = __webpack_require__("../../../../../src/app/admin/marketing/approval/approval.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__edit_form_edit_form_component__ = __webpack_require__("../../../../../src/app/admin/marketing/edit-form/edit-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__edit_delivery_edit_delivery_component__ = __webpack_require__("../../../../../src/app/admin/marketing/edit-delivery/edit-delivery.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__edit_express_edit_express_component__ = __webpack_require__("../../../../../src/app/admin/marketing/edit-express/edit-express.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__shared_app_component_base__ = __webpack_require__("../../../../../src/app/shared/app-component-base.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__edit_banquet_edit_banquet_component__ = __webpack_require__("../../../../../src/app/admin/marketing/edit-banquet/edit-banquet.component.ts");
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













var ActivityFormDetailComponent = /** @class */ (function (_super) {
    __extends(ActivityFormDetailComponent, _super);
    function ActivityFormDetailComponent(injector, msg, http, route, activityFormService, activityBanquetService, activityDeliveryService) {
        var _this = _super.call(this, injector) || this;
        _this.msg = msg;
        _this.http = http;
        _this.route = route;
        _this.activityFormService = activityFormService;
        _this.activityBanquetService = activityBanquetService;
        _this.activityDeliveryService = activityDeliveryService;
        _this.list = [];
        _this.loading = true;
        _this.formId = _this.route.snapshot.params['id'];
        return _this;
        //alert( this.formId);
    }
    ActivityFormDetailComponent.prototype.ngOnInit = function () {
        this.getData();
    };
    ActivityFormDetailComponent.prototype.getData = function () {
        var _this = this;
        //表单
        this.getFormData();
        //宴席信息
        this.getBanquetData();
        this.loading = true;
        this.http.get('/api/list', { count: 4 }).subscribe(function (res) {
            _this.list = _this.list.concat(res).map(function (item) {
                return item;
            });
            _this.loading = false;
        });
        //收货信息
        this.getDeliveryData();
    };
    ActivityFormDetailComponent.prototype.getBanquetData = function () {
        var _this = this;
        this.activityBanquetService.getByFormId(this.formId).subscribe(function (result) {
            _this.banquet = result;
        });
    };
    ActivityFormDetailComponent.prototype.getDeliveryData = function () {
        var _this = this;
        this.activityDeliveryService.getByFormId(this.formId).subscribe(function (result) {
            for (var _i = 0, result_1 = result; _i < result_1.length; _i++) {
                var d = result_1[_i];
                if (d.type == 1) {
                    _this.delivery = d;
                }
                else if (d.type == 2) {
                    _this.rdelivery = d;
                }
            }
        });
    };
    ActivityFormDetailComponent.prototype.getFormData = function () {
        var _this = this;
        this.activityFormService.get(this.formId).subscribe(function (result) {
            _this.form = result;
            _this.formTitle = '单号：' + _this.form.formCode + ' 状态：' + _this.form.statusName;
        });
    };
    //初审
    ActivityFormDetailComponent.prototype.firstApproval = function () {
        var formStatus = new __WEBPACK_IMPORTED_MODULE_4__shared_service_proxies_entity__["d" /* ActivityFormStatusDto */]();
        formStatus.status = 2;
        formStatus.opinion = "初审通过";
        formStatus.id = this.formId;
        this.approvalModal.show(formStatus);
    };
    //取消
    ActivityFormDetailComponent.prototype.cancel = function () {
        var formStatus = new __WEBPACK_IMPORTED_MODULE_4__shared_service_proxies_entity__["d" /* ActivityFormStatusDto */]();
        formStatus.status = 5;
        formStatus.opinion = "取消";
        formStatus.id = this.formId;
        this.approvalModal.show(formStatus);
    };
    //拒绝
    ActivityFormDetailComponent.prototype.reject = function () {
        var formStatus = new __WEBPACK_IMPORTED_MODULE_4__shared_service_proxies_entity__["d" /* ActivityFormStatusDto */]();
        formStatus.status = 3;
        formStatus.opinion = "拒绝";
        formStatus.id = this.formId;
        this.approvalModal.show(formStatus);
    };
    //终审
    ActivityFormDetailComponent.prototype.approval = function () {
        if (this.banquet.id == null || this.banquet.id == '') {
            this.notify.error('请先回传宴席资料');
            return;
        }
        if (this.rdelivery == null || this.rdelivery == undefined) {
            this.notify.error('请先完善推荐人信息');
            return;
        }
        var formStatus = new __WEBPACK_IMPORTED_MODULE_4__shared_service_proxies_entity__["d" /* ActivityFormStatusDto */]();
        formStatus.status = 4;
        formStatus.opinion = "资料回传审核通过";
        formStatus.id = this.formId;
        this.approvalModal.show(formStatus);
    };
    //修改商品信息
    ActivityFormDetailComponent.prototype.editForm = function () {
        this.editFormModal.show(this.form);
    };
    //修改收货信息
    ActivityFormDetailComponent.prototype.editDelivery = function () {
        this.editDeliveryModal.title = '消费者信息';
        if (this.delivery) {
            var d = this.delivery.clone();
            this.editDeliveryModal.show(d);
        }
        else {
            var del = new __WEBPACK_IMPORTED_MODULE_4__shared_service_proxies_entity__["b" /* ActivityDeliveryInfoDto */]();
            del.activityFormId = this.formId;
            del.type = 1;
            del.creationTime = new Date();
            this.editDeliveryModal.show(del);
        }
    };
    ActivityFormDetailComponent.prototype.editRDelivery = function () {
        this.editDeliveryModal.title = '推荐人信息';
        if (this.rdelivery) {
            var r = this.rdelivery.clone();
            this.editDeliveryModal.show(r);
        }
        else {
            var del = new __WEBPACK_IMPORTED_MODULE_4__shared_service_proxies_entity__["b" /* ActivityDeliveryInfoDto */]();
            del.activityFormId = this.formId;
            del.type = 2;
            del.creationTime = new Date();
            this.editDeliveryModal.show(del);
        }
    };
    //修改物流信息
    ActivityFormDetailComponent.prototype.editExpress = function () {
        this.editExpressModal.title = '消费者物流信息';
        if (this.delivery) {
            var d = this.delivery.clone();
            this.editExpressModal.show(d);
        }
        else {
            var del = new __WEBPACK_IMPORTED_MODULE_4__shared_service_proxies_entity__["b" /* ActivityDeliveryInfoDto */]();
            del.activityFormId = this.formId;
            del.type = 1;
            del.creationTime = new Date();
            this.editExpressModal.show(del);
        }
    };
    ActivityFormDetailComponent.prototype.editRExpress = function () {
        this.editExpressModal.title = '推荐人物流信息';
        if (this.rdelivery) {
            var r = this.rdelivery.clone();
            this.editExpressModal.show(r);
        }
        else {
            var del = new __WEBPACK_IMPORTED_MODULE_4__shared_service_proxies_entity__["b" /* ActivityDeliveryInfoDto */]();
            del.activityFormId = this.formId;
            del.type = 2;
            del.creationTime = new Date();
            this.editExpressModal.show(del);
        }
    };
    ActivityFormDetailComponent.prototype.editBanquet = function () {
        this.banquet.activityFormId = this.formId;
        var b = this.banquet.clone();
        this.editBanquetModal.show(b);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('approvalModal'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_7__approval_approval_component__["a" /* ApprovalComponent */])
    ], ActivityFormDetailComponent.prototype, "approvalModal", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('editFormModal'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_8__edit_form_edit_form_component__["a" /* EditFormComponent */])
    ], ActivityFormDetailComponent.prototype, "editFormModal", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('editDeliveryModal'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_9__edit_delivery_edit_delivery_component__["a" /* EditDeliveryComponent */])
    ], ActivityFormDetailComponent.prototype, "editDeliveryModal", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('editExpressModal'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_10__edit_express_edit_express_component__["a" /* EditExpressComponent */])
    ], ActivityFormDetailComponent.prototype, "editExpressModal", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('editBanquetModal'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_12__edit_banquet_edit_banquet_component__["a" /* EditBanquetComponent */])
    ], ActivityFormDetailComponent.prototype, "editBanquetModal", void 0);
    ActivityFormDetailComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'activity-form-detail',
            template: __webpack_require__("../../../../../src/app/admin/marketing/activity-form-detail/activity-form-detail.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injector"],
            __WEBPACK_IMPORTED_MODULE_1_ng_zorro_antd__["NzMessageService"], __WEBPACK_IMPORTED_MODULE_2__delon_theme__["l" /* _HttpClient */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_5__shared_service_proxies_marketing_service_activity_form_service__["a" /* ActivityFormServiceProxy */],
            __WEBPACK_IMPORTED_MODULE_6__shared_service_proxies_marketing_service__["a" /* ActivityBanquetServiceProxy */],
            __WEBPACK_IMPORTED_MODULE_6__shared_service_proxies_marketing_service__["b" /* ActivityDeliveryInfoServiceProxy */]])
    ], ActivityFormDetailComponent);
    return ActivityFormDetailComponent;
}(__WEBPACK_IMPORTED_MODULE_11__shared_app_component_base__["a" /* AppComponentBase */]));



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
        parray.push(__WEBPACK_IMPORTED_MODULE_2__shared_service_proxies_entity__["h" /* Parameter */].fromJS({ key: 'FormCode', value: this.parameters.formCode }));
        parray.push(__WEBPACK_IMPORTED_MODULE_2__shared_service_proxies_entity__["h" /* Parameter */].fromJS({ key: 'BeginDate', value: this.dateFormat(this.parameters.beginDate) }));
        parray.push(__WEBPACK_IMPORTED_MODULE_2__shared_service_proxies_entity__["h" /* Parameter */].fromJS({ key: 'EndDate', value: this.dateFormat(this.parameters.endDate) }));
        parray.push(__WEBPACK_IMPORTED_MODULE_2__shared_service_proxies_entity__["h" /* Parameter */].fromJS({ key: 'Status', value: this.parameters.status }));
        parray.push(__WEBPACK_IMPORTED_MODULE_2__shared_service_proxies_entity__["h" /* Parameter */].fromJS({ key: 'Filter', value: this.parameters.filter }));
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

/***/ "../../../../../src/app/admin/marketing/activity-view/activity-view.component.html":
/***/ (function(module, exports) {

module.exports = "<pro-header></pro-header>\r\n<nz-card [nzBordered]=\"false\">\r\n    <form nz-form (ngSubmit)=\"refreshData()\" [nzLayout]=\"'inline'\">\r\n        <div nz-row [nzGutter]=\"24\">\r\n            <div nz-col [nzSpan]=\"8\" class=\"mb-md\">\r\n                <div nz-form-item class=\"d-flex\">\r\n                    <div nz-form-label>\r\n                        <label for=\"activityArea\">区&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;县</label>\r\n                    </div>\r\n                    <div nz-form-control class=\"flex-1\">\r\n                        <nz-input [nzSize]=\"'large'\" name=\"activityArea\" [(ngModel)]=\"parameters.activityArea\" [nzPlaceHolder]=\"'区县'\"></nz-input>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div nz-col [nzSpan]=\"8\" class=\"mb-md\">\r\n                <div nz-form-item class=\"d-flex\">\r\n                    <div nz-form-label>\r\n                        <label for=\"goodsSpecification\">商品规格</label>\r\n                    </div>\r\n                    <div nz-form-control class=\"flex-1\">\r\n                        <nz-input [nzSize]=\"'large'\" name=\"goodsSpecification\"  [(ngModel)]=\"parameters.goodsSpecification\" [nzPlaceHolder]=\"'商品规格'\"></nz-input>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div nz-col [nzSpan]=\"8\" class=\"mb-md\">\r\n                <div nz-form-item class=\"d-flex\">\r\n                    <div nz-form-label>\r\n                        <label for=\"managerName\">客户经理</label>\r\n                    </div>\r\n                    <div nz-form-control class=\"flex-1\">\r\n                        <nz-input [nzSize]=\"'large'\" name=\"managerName\" [(ngModel)]=\"parameters.managerName\" [nzPlaceHolder]=\"'客户经理'\"></nz-input>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div nz-col [nzSpan]=\"8\" class=\"mb-md\">\r\n                <div nz-form-item class=\"d-flex\">\r\n                    <div nz-form-label>\r\n                        <label for=\"beginDate\">开始日期</label>\r\n                    </div>\r\n                    <div nz-form-control class=\"flex-1\">\r\n                        <nz-datepicker [nzSize]=\"'large'\" name=\"beginDate\" [nzPlaceHolder]=\"'请输入开始日期'\" [(ngModel)]=\"parameters.beginDate\" class=\"d-block\"></nz-datepicker>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div nz-col [nzSpan]=\"8\" class=\"mb-md\">\r\n                <div nz-form-item class=\"d-flex\">\r\n                    <div nz-form-label>\r\n                        <label for=\"endDate\">结束日期</label>\r\n                    </div>\r\n                    <div nz-form-control class=\"flex-1\">\r\n                        <nz-datepicker [nzSize]=\"'large'\" name=\"endDate\" [nzPlaceHolder]=\"'请输入结束日期'\" [(ngModel)]=\"parameters.endDate\" class=\"d-block\"></nz-datepicker>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div nz-col [nzSpan]=\"8\" class=\"mb-md\" [class.text-right]=\"'true'\">\r\n                <button nz-button type=\"submit\" [nzType]=\"'primary'\" [nzLoading]=\"loading\" [nzSize]=\"'large'\">查询</button>\r\n                <button nz-button type=\"reset\" (click)=\"refreshData()\" [nzSize]=\"'large'\" class=\"mx-sm\">重置</button>\r\n            </div>\r\n        </div>\r\n    </form>\r\n    <nz-table #nzTable [nzAjaxData]=\"data\" [nzTotal]=\"query.total\" [(nzPageIndex)]=\"query.pageIndex\" [(nzPageSize)]=\"query.pageSize\" [nzLoading]=\"loading\"\r\n        [nzShowSizeChanger]=\"true\" (nzPageIndexChange)=\"refreshData()\" (nzPageSizeChange)=\"refreshData()\">\r\n        <thead nz-thead>\r\n            <tr>\r\n                <th nz-th>\r\n                    <span>区县</span>\r\n                </th>\r\n                <th nz-th>\r\n                    <span>商品规格</span>\r\n                </th>\r\n                <th nz-th>\r\n                    <span>客户经理</span>\r\n                </th>\r\n                <th nz-th>\r\n                    <span>开展场次</span>\r\n                </th>\r\n                <th nz-th>\r\n                    <span>商品数量（条）</span>\r\n                </th>\r\n            </tr>\r\n        </thead>\r\n        <tbody nz-tbody>\r\n            <tr nz-tbody-tr *ngFor=\"let item of nzTable.data\">\r\n                <td nz-td>{{item.area}}</td>\r\n                <td nz-td>{{item.goodsSpecification}}</td>\r\n                <td nz-td>{{item.managerName}}</td>\r\n                <td nz-td>{{item.openNum}}</td>\r\n                <td nz-td>{{item.goodsNum}}</td>\r\n            </tr>\r\n        </tbody>\r\n    </nz-table>\r\n</nz-card>"

/***/ }),

/***/ "../../../../../src/app/admin/marketing/activity-view/activity-view.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActivityViewComponent; });
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






var ActivityViewComponent = /** @class */ (function (_super) {
    __extends(ActivityViewComponent, _super);
    function ActivityViewComponent(injector, msg, _ActivityFormService, _router) {
        var _this = _super.call(this, injector) || this;
        _this.msg = msg;
        _this._ActivityFormService = _ActivityFormService;
        _this._router = _router;
        _this.data = [];
        _this.loading = false;
        _this.parameters = { beginDate: null, endDate: null };
        return _this;
    }
    ActivityViewComponent.prototype.ngOnInit = function () {
        this.refreshData();
    };
    ActivityViewComponent.prototype.refreshData = function (reset) {
        var _this = this;
        if (reset === void 0) { reset = false; }
        if (reset) {
            this.query.pageIndex = 1;
        }
        this.loading = true;
        this._ActivityFormService.getView(this.query.skipCount(), this.query.pageSize, this.getParameter()).subscribe(function (result) {
            _this.loading = false;
            var status = 0;
            _this.query.total = result.totalCount;
            _this.data = result.items;
        });
    };
    ;
    ActivityViewComponent.prototype.getParameter = function () {
        var parray = [];
        parray.push(__WEBPACK_IMPORTED_MODULE_2__shared_service_proxies_entity__["h" /* Parameter */].fromJS({ key: 'BeginDate', value: this.dateFormat(this.parameters.beginDate) }));
        parray.push(__WEBPACK_IMPORTED_MODULE_2__shared_service_proxies_entity__["h" /* Parameter */].fromJS({ key: 'EndDate', value: this.dateFormat(this.parameters.endDate) }));
        parray.push(__WEBPACK_IMPORTED_MODULE_2__shared_service_proxies_entity__["h" /* Parameter */].fromJS({ key: 'ActivityArea', value: this.parameters.activityArea }));
        parray.push(__WEBPACK_IMPORTED_MODULE_2__shared_service_proxies_entity__["h" /* Parameter */].fromJS({ key: 'ManagerName', value: this.parameters.managerName }));
        parray.push(__WEBPACK_IMPORTED_MODULE_2__shared_service_proxies_entity__["h" /* Parameter */].fromJS({ key: 'GoodsSpecification', value: this.parameters.goodsSpecification }));
        return parray;
    };
    ActivityViewComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-page-activity-view',
            template: __webpack_require__("../../../../../src/app/admin/marketing/activity-view/activity-view.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injector"], __WEBPACK_IMPORTED_MODULE_1_ng_zorro_antd__["NzMessageService"], __WEBPACK_IMPORTED_MODULE_3__shared_service_proxies_marketing_service_activity_form_service__["a" /* ActivityFormServiceProxy */], __WEBPACK_IMPORTED_MODULE_5__angular_router__["h" /* Router */]])
    ], ActivityViewComponent);
    return ActivityViewComponent;
}(__WEBPACK_IMPORTED_MODULE_4__shared_app_component_base__["a" /* AppComponentBase */]));



/***/ }),

/***/ "../../../../../src/app/admin/marketing/approval/approval.component.html":
/***/ (function(module, exports) {

module.exports = "<form nz-form [formGroup]=\"form\" *ngIf=\"modalVisible\" id=\"frm_approval\" (ngSubmit)=\"save()\">\r\n    <nz-modal [nzVisible]=\"modalVisible\" [nzTitle]=\"'审批意见'\" [nzConfirmLoading]=\"loading\" [nzContent]=\"modalContent\" [nzFooter]=\"modalFooter\"\r\n        (nzOnCancel)=\"handleCancel($event)\">\r\n        <ng-template #modalContent>\r\n            <div nz-form-item nz-row>\r\n                <div nz-form-control nz-col [nzSm]=\"24\" nzHasFeedback [nzValidateStatus]=\"getFormControl('opinion')\">\r\n                    <nz-input [nzType]=\"'textarea'\" [nzRows]=\"'4'\" formControlName=\"opinion\" [(ngModel)]=\"formStatus.opinion\" nzPlaceHolder=\"输入审批意见小于等于200\"\r\n                        [nzId]=\"'opinion'\"></nz-input>\r\n                    <div nz-form-explain *ngIf=\"getFormControl('opinion').dirty&&getFormControl('opinion').hasError('required')\">请输入审批意见</div>\r\n                    <div nz-form-explain *ngIf=\"getFormControl('opinion').dirty&&getFormControl('opinion').hasError('maxlength')\">字符长度小于等于200</div>\r\n                </div>\r\n            </div>\r\n        </ng-template>\r\n        <ng-template #modalFooter>\r\n            <button nz-button [nzType]=\"'default'\" [nzSize]=\"'large'\" type=\"button\" (click)=\"handleCancel($event)\">\r\n                取消\r\n            </button>\r\n            <button nz-button [nzType]=\"'primary'\" [nzSize]=\"'large'\" type=\"submit\" [nzLoading]=\"isConfirmLoading\">\r\n                提交\r\n            </button>\r\n        </ng-template>\r\n    </nz-modal>\r\n</form>"

/***/ }),

/***/ "../../../../../src/app/admin/marketing/approval/approval.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApprovalComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_app_component_base__ = __webpack_require__("../../../../../src/app/shared/app-component-base.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_service_proxies_marketing_service__ = __webpack_require__("../../../../../src/app/shared/service-proxies/marketing-service/index.ts");
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




//import * as _ from "lodash";
var ApprovalComponent = /** @class */ (function (_super) {
    __extends(ApprovalComponent, _super);
    function ApprovalComponent(injector, _activityFormService, fb) {
        var _this = _super.call(this, injector) || this;
        _this._activityFormService = _activityFormService;
        _this.fb = fb;
        _this.modalSave = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        _this.modalVisible = false;
        _this.isConfirmLoading = false;
        _this.isDisablec = false;
        _this.formStatus = null;
        _this.handleCancel = function (e) {
            _this.modalVisible = false;
            _this.isConfirmLoading = false;
            _this.reset(e);
        };
        return _this;
    }
    ApprovalComponent.prototype.ngOnInit = function () {
        this.form = this.fb.group({
            opinion: [null, [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].maxLength]]
        });
    };
    ApprovalComponent.prototype.show = function (status) {
        this.reset();
        this.formStatus = status;
        this.modalVisible = true;
        //对isDisablec做初始化
        this.isDisablec = false;
    };
    ApprovalComponent.prototype.save = function (isSave) {
        var _this = this;
        if (isSave === void 0) { isSave = false; }
        for (var i in this.form.controls) {
            this.form.controls[i].markAsDirty();
        }
        if (this.form.valid) {
            this._activityFormService.changeStatus(this.formStatus)
                .finally(function () { _this.isConfirmLoading = false; })
                .subscribe(function () {
                _this.notify.info('提交成功！');
                _this.close();
                _this.modalSave.emit(null);
            });
        }
    };
    ApprovalComponent.prototype.close = function () {
        this.modalVisible = false;
        //this.modal.hide();
    };
    ApprovalComponent.prototype.getFormControl = function (name) {
        return this.form.controls[name];
    };
    ApprovalComponent.prototype.reset = function (e) {
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
    ], ApprovalComponent.prototype, "modalSave", void 0);
    ApprovalComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'approval-modal',
            template: __webpack_require__("../../../../../src/app/admin/marketing/approval/approval.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injector"],
            __WEBPACK_IMPORTED_MODULE_3__shared_service_proxies_marketing_service__["c" /* ActivityFormServiceProxy */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormBuilder"]])
    ], ApprovalComponent);
    return ApprovalComponent;
}(__WEBPACK_IMPORTED_MODULE_1__shared_app_component_base__["a" /* AppComponentBase */]));



/***/ }),

/***/ "../../../../../src/app/admin/marketing/edit-banquet/edit-banquet.component.html":
/***/ (function(module, exports) {

module.exports = "<form nz-form [formGroup]=\"form\" *ngIf=\"modalVisible\" id=\"frm_edit_banquet\" (ngSubmit)=\"save()\">\r\n    <nz-modal [nzVisible]=\"modalVisible\" [nzTitle]=\"title\" [nzConfirmLoading]=\"loading\" [nzContent]=\"modalContent\" [nzFooter]=\"modalFooter\"\r\n        (nzOnCancel)=\"handleCancel($event)\">\r\n        <ng-template #modalContent>\r\n            <nz-tabset>\r\n                <nz-tab>\r\n                    <ng-template #nzTabHeading>\r\n                        宴席信息\r\n                    </ng-template>\r\n                    <fieldset>\r\n                        <div nz-form-item nz-row>\r\n                            <div nz-form-label nz-col [nzSm]=\"4\">\r\n                                <label for=\"area\" nz-form-item-required>区县</label>\r\n                            </div>\r\n                            <div nz-form-control nz-col [nzSm]=\"20\" nzHasFeedback [nzValidateStatus]=\"getFormControl('area')\">\r\n                                <nz-input formControlName=\"area\" [(ngModel)]=\"banquetDto.area\" nzPlaceHolder=\"请输入区县\"></nz-input>\r\n                                <div nz-form-explain *ngIf=\"getFormControl('area').dirty&&getFormControl('area').hasError('required')\">请输入区县</div>\r\n                            </div>\r\n                        </div>\r\n                        <div nz-form-item nz-row>\r\n                            <div nz-form-label nz-col [nzSm]=\"4\">\r\n                                <label for=\"responsible\" nz-form-item-required>责任人</label>\r\n                            </div>\r\n                            <div nz-form-control nz-col [nzSm]=\"20\" nzHasFeedback [nzValidateStatus]=\"getFormControl('responsible')\">\r\n                                <nz-input formControlName=\"responsible\" [(ngModel)]=\"banquetDto.responsible\" nzPlaceHolder=\"请输入责任人\"></nz-input>\r\n                                <div nz-form-explain *ngIf=\"getFormControl('responsible').dirty&&getFormControl('responsible').hasError('maxlength')\">字符长度小于等于50</div>\r\n                                <div nz-form-explain *ngIf=\"getFormControl('responsible').dirty&&getFormControl('responsible').hasError('required')\">请输入责任人</div>\r\n                            </div>\r\n                        </div>\r\n                        <div nz-form-item nz-row>\r\n                            <div nz-form-label nz-col [nzSm]=\"4\">\r\n                                <label for=\"executor\" nz-form-item-required>执行人</label>\r\n                            </div>\r\n                            <div nz-form-control nz-col [nzSm]=\"20\" nzHasFeedback [nzValidateStatus]=\"getFormControl('executor')\">\r\n                                <nz-input formControlName=\"executor\" [(ngModel)]=\"banquetDto.executor\" nzPlaceHolder=\"请输入执行人\"></nz-input>\r\n                                <div nz-form-explain *ngIf=\"getFormControl('executor').dirty&&getFormControl('executor').hasError('maxlength')\">字符长度小于等于50</div>\r\n                                <div nz-form-explain *ngIf=\"getFormControl('executor').dirty&&getFormControl('executor').hasError('required')\">请输入执行人</div>\r\n                            </div>\r\n                        </div>\r\n                        <div nz-form-item nz-row>\r\n                            <div nz-form-label nz-col [nzSm]=\"4\">\r\n                                <label for=\"banquetTime\" nz-form-item-required>宴席时间</label>\r\n                            </div>\r\n                            <div nz-form-control nz-col [nzSm]=\"20\" nzHasFeedback [nzValidateStatus]=\"getFormControl('banquetTime')\">\r\n                                <nz-datepicker [(ngModel)]=\"banquetDto.banquetTime\" formControlName=\"banquetTime\" [nzPlaceHolder]=\"'请输入宴席时间'\"></nz-datepicker>\r\n                                <div nz-form-explain *ngIf=\"getFormControl('banquetTime').dirty&&getFormControl('banquetTime').hasError('required')\">请输入宴席时间</div>\r\n                            </div>\r\n                        </div>\r\n                        <div nz-form-item nz-row>\r\n                            <div nz-form-label nz-col [nzSm]=\"4\">\r\n                                <label for=\"position\" nz-form-item-required>宴席地点</label>\r\n                            </div>\r\n                            <div nz-form-control nz-col [nzSm]=\"20\" nzHasFeedback [nzValidateStatus]=\"getFormControl('position')\">\r\n                                <nz-input formControlName=\"position\" [(ngModel)]=\"banquetDto.position\" nzPlaceHolder=\"请输入宴席地点\"></nz-input>\r\n                                <div nz-form-explain *ngIf=\"getFormControl('position').dirty&&getFormControl('position').hasError('maxlength')\">字符长度小于等于500</div>\r\n                                <div nz-form-explain *ngIf=\"getFormControl('position').dirty&&getFormControl('position').hasError('required')\">请输入宴席地点</div>\r\n                            </div>\r\n                        </div>\r\n                        <div nz-form-item nz-row>\r\n                            <div nz-form-label nz-col [nzSpan]=\"4\">\r\n                                <label for=\"num\" nz-form-item-required>现场人数</label>\r\n                            </div>\r\n                            <div nz-form-control nz-col [nzSpan]=\"14\">\r\n                                <nz-input-number formControlName=\"num\" [(ngModel)]=\"banquetDto.num\" [nzSize]=\"'large'\" [nzStep]=\"1\" [nzMin]=\"1\"></nz-input-number>\r\n                                <span nz-form-text> 人</span>\r\n                                <div nz-form-explain *ngIf=\"getFormControl('num').dirty&&getFormControl('num').hasError('required')\">请输入现场人数</div>\r\n                            </div>\r\n                        </div>\r\n                        <div nz-form-item nz-row>\r\n                            <div nz-form-label nz-col [nzSm]=\"4\">\r\n                                <label for=\"desc\" nz-form-item-required>现场简述</label>\r\n                            </div>\r\n                            <div nz-form-control nz-col [nzSm]=\"20\" nzHasFeedback [nzValidateStatus]=\"getFormControl('desc')\">\r\n                                <nz-input [nzType]=\"'textarea'\" [nzRows]=\"'4'\" formControlName=\"desc\" [(ngModel)]=\"banquetDto.desc\" nzPlaceHolder=\"输入现场简述\"></nz-input>\r\n                                <div nz-form-explain *ngIf=\"getFormControl('desc').dirty&&getFormControl('desc').hasError('required')\">请输入现场简述</div>\r\n                                <div nz-form-explain *ngIf=\"getFormControl('desc').dirty&&getFormControl('desc').hasError('maxlength')\">字符长度小于等于500</div>\r\n                            </div>\r\n                        </div>\r\n                    </fieldset>\r\n                </nz-tab>\r\n                <nz-tab>\r\n                    <ng-template #nzTabHeading>\r\n                        上传照片\r\n                    </ng-template>\r\n\r\n                </nz-tab>\r\n            </nz-tabset>\r\n        </ng-template>\r\n        <ng-template #modalFooter>\r\n            <button nz-button [nzType]=\"'default'\" [nzSize]=\"'large'\" type=\"button\" (click)=\"handleCancel($event)\">\r\n                取消\r\n            </button>\r\n            <button nz-button [nzType]=\"'primary'\" [nzSize]=\"'large'\" type=\"submit\" [nzLoading]=\"isConfirmLoading\">\r\n                保存\r\n            </button>\r\n        </ng-template>\r\n    </nz-modal>\r\n</form>\r\n<form id=\"uploadForm\" enctype=\"multipart/form-data\">\r\n    <input type=\"file\" name=\"imgs\" ng2FileSelect [uploader]=\"uploader\" (change)=\"selectedFileOnChanged($event)\" />\r\n    <button nz-button (click)=\"uploadFile()\" [nzType]=\"'primary'\" [nzSize]=\"'small'\">上传</button>\r\n</form>"

/***/ }),

/***/ "../../../../../src/app/admin/marketing/edit-banquet/edit-banquet.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditBanquetComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng_zorro_antd__ = __webpack_require__("../../../../ng-zorro-antd/esm5/antd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_app_component_base__ = __webpack_require__("../../../../../src/app/shared/app-component-base.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_service_proxies_marketing_service__ = __webpack_require__("../../../../../src/app/shared/service-proxies/marketing-service/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_operators_filter__ = __webpack_require__("../../../../rxjs/_esm5/operators/filter.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng2_file_upload__ = __webpack_require__("../../../../ng2-file-upload/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng2_file_upload___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_ng2_file_upload__);
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





//import * as _ from "lodash";



var EditBanquetComponent = /** @class */ (function (_super) {
    __extends(EditBanquetComponent, _super);
    function EditBanquetComponent(injector, _activityBanquetService, fb, http, msg) {
        var _this = _super.call(this, injector) || this;
        _this._activityBanquetService = _activityBanquetService;
        _this.fb = fb;
        _this.http = http;
        _this.msg = msg;
        _this.modalSave = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        _this.title = '宴席信息';
        _this.modalVisible = false;
        _this.isConfirmLoading = false;
        _this.isDisablec = false;
        _this.banquetDto = null;
        _this.uploading = false;
        _this.fileList = [];
        _this.uploader = new __WEBPACK_IMPORTED_MODULE_7_ng2_file_upload__["FileUploader"]({
            url: "http://localhost:21021/WeChatFile/UploadFile",
            method: "POST",
            itemAlias: "uploadedfile"
        });
        _this.handleCancel = function (e) {
            _this.modalVisible = false;
            _this.isConfirmLoading = false;
            _this.reset(e);
        };
        _this.beforeUpload = function (file) {
            _this.fileList.push(file);
            return false;
        };
        return _this;
    }
    // C: 定义事件，选择文件
    EditBanquetComponent.prototype.selectedFileOnChanged = function (event) {
        // 打印文件选择名称
        console.log(event.target.value);
    };
    // D: 定义事件，上传文件
    EditBanquetComponent.prototype.uploadFile = function () {
        // 上传
        this.uploader.queue[0].onSuccess = function (response, status, headers) {
            // 上传文件成功
            if (status == 200) {
                // 上传文件后获取服务器返回的数据
                var tempRes = JSON.parse(response);
            }
            else {
                // 上传文件后获取服务器返回的数据错误
                alert("");
            }
        };
        this.uploader.queue[0].upload(); // 开始上传
    };
    EditBanquetComponent.prototype.ngOnInit = function () {
        this.form = this.fb.group({
            area: [null, [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].required]],
            responsible: [null, [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].maxLength(50)]],
            executor: [null, [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].maxLength(50)]],
            banquetTime: [null, [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].required]],
            position: [null, [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].maxLength(500)]],
            num: [null, [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].required]],
            desc: [null, [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].maxLength(500)]],
        });
    };
    EditBanquetComponent.prototype.show = function (delivery) {
        this.reset();
        this.banquetDto = delivery;
        this.modalVisible = true;
        //对isDisablec做初始化
        this.isDisablec = false;
    };
    EditBanquetComponent.prototype.save = function (isSave) {
        var _this = this;
        if (isSave === void 0) { isSave = false; }
        for (var i in this.form.controls) {
            this.form.controls[i].markAsDirty();
        }
        this.banquetDto.photoUrl = 'test.jpg';
        if (this.form.valid) {
            this._activityBanquetService.update(this.banquetDto)
                .finally(function () { _this.isConfirmLoading = false; })
                .subscribe(function () {
                _this.notify.info('保存成功！');
                _this.close();
                _this.modalSave.emit(null);
            });
        }
    };
    EditBanquetComponent.prototype.close = function () {
        this.modalVisible = false;
        //this.modal.hide();
    };
    EditBanquetComponent.prototype.getFormControl = function (name) {
        return this.form.controls[name];
    };
    EditBanquetComponent.prototype.reset = function (e) {
        if (e) {
            e.preventDefault();
        }
        this.form.reset();
        for (var key in this.form.controls) {
            this.form.controls[key].markAsPristine();
        }
    };
    EditBanquetComponent.prototype.handleChange = function (info) {
        this._activityBanquetService.uploadBase64(info.file).subscribe(function (result) {
        });
    };
    EditBanquetComponent.prototype.handleUpload = function () {
        var _this = this;
        var formData = new FormData();
        this.fileList.forEach(function (file) {
            formData.append('files[]', file);
        });
        this.uploading = true;
        // You can use any AJAX library you like
        var req = new __WEBPACK_IMPORTED_MODULE_6__angular_common_http__["h" /* HttpRequest */]('POST', 'https://jsonplaceholder.typicode.com/posts/', formData, {});
        this.http.request(req).pipe(Object(__WEBPACK_IMPORTED_MODULE_5_rxjs_operators_filter__["a" /* filter */])(function (e) { return e instanceof __WEBPACK_IMPORTED_MODULE_6__angular_common_http__["i" /* HttpResponse */]; })).subscribe(function (event) {
            _this.uploading = false;
            _this.msg.success('upload successfully.');
        }, function (err) {
            _this.uploading = false;
            _this.msg.error('upload failed.');
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], EditBanquetComponent.prototype, "modalSave", void 0);
    EditBanquetComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'edit-banquet-modal',
            template: __webpack_require__("../../../../../src/app/admin/marketing/edit-banquet/edit-banquet.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injector"],
            __WEBPACK_IMPORTED_MODULE_4__shared_service_proxies_marketing_service__["a" /* ActivityBanquetServiceProxy */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormBuilder"],
            __WEBPACK_IMPORTED_MODULE_6__angular_common_http__["b" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_1_ng_zorro_antd__["NzMessageService"]])
    ], EditBanquetComponent);
    return EditBanquetComponent;
}(__WEBPACK_IMPORTED_MODULE_2__shared_app_component_base__["a" /* AppComponentBase */]));



/***/ }),

/***/ "../../../../../src/app/admin/marketing/edit-delivery/edit-delivery.component.html":
/***/ (function(module, exports) {

module.exports = "<form nz-form [formGroup]=\"form\" *ngIf=\"modalVisible\" id=\"frm_edit_delivery\" (ngSubmit)=\"save()\">\r\n    <nz-modal [nzVisible]=\"modalVisible\" [nzTitle]=\"title\" [nzConfirmLoading]=\"loading\" [nzContent]=\"modalContent\" [nzFooter]=\"modalFooter\"\r\n        (nzOnCancel)=\"handleCancel($event)\">\r\n        <ng-template #modalContent>\r\n            <div nz-form-item nz-row>\r\n                <div nz-form-label nz-col [nzSm]=\"4\">\r\n                    <label for=\"userName\" nz-form-item-required>姓名</label>\r\n                </div>\r\n                <div nz-form-control nz-col [nzSm]=\"20\" nzHasFeedback [nzValidateStatus]=\"getFormControl('userName')\">\r\n                    <nz-input formControlName=\"userName\" [(ngModel)]=\"deliveryDto.userName\" nzPlaceHolder=\"请输入姓名\" [nzId]=\"'username'\"></nz-input>\r\n                    <div nz-form-explain *ngIf=\"getFormControl('userName').dirty&&getFormControl('userName').hasError('maxlength')\">字符长度小于等于50</div>\r\n                    <div nz-form-explain *ngIf=\"getFormControl('userName').dirty&&getFormControl('userName').hasError('required')\">请输入姓名</div>\r\n                </div>\r\n            </div>\r\n            <div nz-form-item nz-row>\r\n                <div nz-form-label nz-col [nzSm]=\"4\">\r\n                    <label for=\"phone\" nz-form-item-required>联系电话</label>\r\n                </div>\r\n                <div nz-form-control nz-col [nzSm]=\"20\" nzHasFeedback [nzValidateStatus]=\"getFormControl('phone')\">\r\n                    <nz-input formControlName=\"phone\" [(ngModel)]=\"deliveryDto.phone\" nzPlaceHolder=\"请输入联系电话\" [nzId]=\"'phone'\"></nz-input>\r\n                    <div nz-form-explain *ngIf=\"getFormControl('phone').dirty&&getFormControl('phone').hasError('maxlength')\">字符长度小于等于20</div>\r\n                    <div nz-form-explain *ngIf=\"getFormControl('phone').dirty&&getFormControl('phone').hasError('required')\">请输入联系电话</div>\r\n                </div>\r\n            </div>\r\n            <div nz-form-item nz-row>\r\n                <div nz-form-label nz-col [nzSm]=\"4\">\r\n                    <label for=\"address\" nz-form-item-required>地址</label>\r\n                </div>\r\n                <div nz-form-control nz-col [nzSm]=\"20\" nzHasFeedback [nzValidateStatus]=\"getFormControl('address')\">\r\n                    <nz-input [nzType]=\"'textarea'\" [nzRows]=\"'4'\" formControlName=\"address\" [(ngModel)]=\"deliveryDto.address\" nzPlaceHolder=\"输入地址\"\r\n                        [nzId]=\"'address'\"></nz-input>\r\n                    <div nz-form-explain *ngIf=\"getFormControl('address').dirty&&getFormControl('address').hasError('required')\">请输入地址</div>\r\n                    <div nz-form-explain *ngIf=\"getFormControl('address').dirty&&getFormControl('address').hasError('maxlength')\">字符长度小于等于200</div>\r\n                </div>\r\n            </div>\r\n        </ng-template>\r\n        <ng-template #modalFooter>\r\n            <button nz-button [nzType]=\"'default'\" [nzSize]=\"'large'\" type=\"button\" (click)=\"handleCancel($event)\">\r\n                取消\r\n            </button>\r\n            <button nz-button [nzType]=\"'primary'\" [nzSize]=\"'large'\" type=\"submit\" [nzLoading]=\"isConfirmLoading\">\r\n                保存\r\n            </button>\r\n        </ng-template>\r\n    </nz-modal>\r\n</form>"

/***/ }),

/***/ "../../../../../src/app/admin/marketing/edit-delivery/edit-delivery.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditDeliveryComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_app_component_base__ = __webpack_require__("../../../../../src/app/shared/app-component-base.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_service_proxies_marketing_service__ = __webpack_require__("../../../../../src/app/shared/service-proxies/marketing-service/index.ts");
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




//import * as _ from "lodash";
var EditDeliveryComponent = /** @class */ (function (_super) {
    __extends(EditDeliveryComponent, _super);
    function EditDeliveryComponent(injector, _activityDeliveryInfoService, fb) {
        var _this = _super.call(this, injector) || this;
        _this._activityDeliveryInfoService = _activityDeliveryInfoService;
        _this.fb = fb;
        _this.modalSave = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        _this.title = '基本信息';
        _this.modalVisible = false;
        _this.isConfirmLoading = false;
        _this.isDisablec = false;
        _this.deliveryDto = null;
        _this.handleCancel = function (e) {
            _this.modalVisible = false;
            _this.isConfirmLoading = false;
            _this.reset(e);
        };
        return _this;
    }
    EditDeliveryComponent.prototype.ngOnInit = function () {
        this.form = this.fb.group({
            userName: [null, [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].maxLength(50)]],
            address: [null, [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].maxLength(200)]],
            phone: [null, [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].maxLength(20)]]
        });
    };
    EditDeliveryComponent.prototype.show = function (delivery) {
        this.reset();
        this.deliveryDto = delivery;
        this.modalVisible = true;
        //对isDisablec做初始化
        this.isDisablec = false;
    };
    EditDeliveryComponent.prototype.save = function (isSave) {
        var _this = this;
        if (isSave === void 0) { isSave = false; }
        for (var i in this.form.controls) {
            this.form.controls[i].markAsDirty();
        }
        if (this.form.valid) {
            this._activityDeliveryInfoService.update(this.deliveryDto)
                .finally(function () { _this.isConfirmLoading = false; })
                .subscribe(function () {
                _this.notify.info('保存成功！');
                _this.close();
                _this.modalSave.emit(null);
            });
        }
    };
    EditDeliveryComponent.prototype.close = function () {
        this.modalVisible = false;
        //this.modal.hide();
    };
    EditDeliveryComponent.prototype.getFormControl = function (name) {
        return this.form.controls[name];
    };
    EditDeliveryComponent.prototype.reset = function (e) {
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
    ], EditDeliveryComponent.prototype, "modalSave", void 0);
    EditDeliveryComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'edit-delivery-modal',
            template: __webpack_require__("../../../../../src/app/admin/marketing/edit-delivery/edit-delivery.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injector"],
            __WEBPACK_IMPORTED_MODULE_3__shared_service_proxies_marketing_service__["b" /* ActivityDeliveryInfoServiceProxy */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormBuilder"]])
    ], EditDeliveryComponent);
    return EditDeliveryComponent;
}(__WEBPACK_IMPORTED_MODULE_1__shared_app_component_base__["a" /* AppComponentBase */]));



/***/ }),

/***/ "../../../../../src/app/admin/marketing/edit-express/edit-express.component.html":
/***/ (function(module, exports) {

module.exports = "<form nz-form [formGroup]=\"form\" *ngIf=\"modalVisible\" id=\"frm_edit_express\" (ngSubmit)=\"save()\">\r\n    <nz-modal [nzVisible]=\"modalVisible\" [nzTitle]=\"title\" [nzConfirmLoading]=\"loading\" [nzContent]=\"modalContent\" [nzFooter]=\"modalFooter\"\r\n        (nzOnCancel)=\"handleCancel($event)\">\r\n        <ng-template #modalContent>\r\n            <div nz-form-item nz-row>\r\n                <div nz-form-label nz-col [nzSm]=\"4\">\r\n                    <label for=\"expressCompany\" nz-form-item-required>快递公司</label>\r\n                </div>\r\n                <div nz-form-control nz-col [nzSm]=\"20\" nzHasFeedback [nzValidateStatus]=\"getFormControl('expressCompany')\">\r\n                    <nz-input formControlName=\"expressCompany\" [(ngModel)]=\"deliveryDto.expressCompany\" nzPlaceHolder=\"请输入物流公司\" [nzId]=\"'expressCompany'\"></nz-input>\r\n                    <div nz-form-explain *ngIf=\"getFormControl('expressCompany').dirty&&getFormControl('expressCompany').hasError('maxlength')\">字符长度小于等于200</div>\r\n                    <div nz-form-explain *ngIf=\"getFormControl('expressCompany').dirty&&getFormControl('expressCompany').hasError('required')\">请输入物流公司</div>\r\n                </div>\r\n            </div>\r\n            <div nz-form-item nz-row>\r\n                <div nz-form-label nz-col [nzSm]=\"4\">\r\n                    <label for=\"expressNo\" nz-form-item-required>快递单号</label>\r\n                </div>\r\n                <div nz-form-control nz-col [nzSm]=\"20\" nzHasFeedback [nzValidateStatus]=\"getFormControl('expressNo')\">\r\n                    <nz-input formControlName=\"expressNo\" [(ngModel)]=\"deliveryDto.expressNo\" nzPlaceHolder=\"请输入快递单号\" [nzId]=\"'expressNo'\"></nz-input>\r\n                    <div nz-form-explain *ngIf=\"getFormControl('expressNo').dirty&&getFormControl('expressNo').hasError('maxlength')\">字符长度小于等于200</div>\r\n                    <div nz-form-explain *ngIf=\"getFormControl('expressNo').dirty&&getFormControl('expressNo').hasError('required')\">请输入快递单号</div>\r\n                </div>\r\n            </div>\r\n            <div nz-form-item nz-row>\r\n                <div nz-form-label nz-col [nzSm]=\"4\">\r\n                    <label for=\"sendTime\" nz-form-item-required>发件日期</label>\r\n                </div>\r\n                <div nz-form-control nz-col [nzSm]=\"20\" nzHasFeedback [nzValidateStatus]=\"getFormControl('sendTime')\">\r\n                    <nz-datepicker [(ngModel)]=\"deliveryDto.sendTime\" formControlName=\"sendTime\" [nzPlaceHolder]=\"'请输入发件日期'\"></nz-datepicker>\r\n                    <div nz-form-explain *ngIf=\"getFormControl('sendTime').dirty&&getFormControl('sendTime').hasError('required')\">请输入发件日期</div>\r\n                </div>\r\n            </div>\r\n            <div nz-form-item nz-row>\r\n                <div nz-form-label nz-col [nzSm]=\"4\">\r\n                    <label for=\"remark\">备注</label>\r\n                </div>\r\n                <div nz-form-control nz-col [nzSm]=\"20\" nzHasFeedback [nzValidateStatus]=\"getFormControl('remark')\">\r\n                    <nz-input [nzType]=\"'textarea'\" [nzRows]=\"'4'\" formControlName=\"remark\" [(ngModel)]=\"deliveryDto.remark\" nzPlaceHolder=\"输入备注\"\r\n                        [nzId]=\"'remark'\"></nz-input>\r\n                    <div nz-form-explain *ngIf=\"getFormControl('remark').dirty&&getFormControl('remark').hasError('maxlength')\">字符长度小于等于500</div>\r\n                </div>\r\n            </div>\r\n        </ng-template>\r\n        <ng-template #modalFooter>\r\n            <button nz-button [nzType]=\"'default'\" [nzSize]=\"'large'\" type=\"button\" (click)=\"handleCancel($event)\">\r\n                取消\r\n            </button>\r\n            <button nz-button [nzType]=\"'primary'\" [nzSize]=\"'large'\" type=\"submit\" [nzLoading]=\"isConfirmLoading\">\r\n                保存\r\n            </button>\r\n        </ng-template>\r\n    </nz-modal>\r\n</form>"

/***/ }),

/***/ "../../../../../src/app/admin/marketing/edit-express/edit-express.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditExpressComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_app_component_base__ = __webpack_require__("../../../../../src/app/shared/app-component-base.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_service_proxies_marketing_service__ = __webpack_require__("../../../../../src/app/shared/service-proxies/marketing-service/index.ts");
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




//import * as _ from "lodash";
var EditExpressComponent = /** @class */ (function (_super) {
    __extends(EditExpressComponent, _super);
    function EditExpressComponent(injector, _activityDeliveryInfoService, fb) {
        var _this = _super.call(this, injector) || this;
        _this._activityDeliveryInfoService = _activityDeliveryInfoService;
        _this.fb = fb;
        _this.modalSave = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        _this.title = '物流信息';
        _this.modalVisible = false;
        _this.isConfirmLoading = false;
        _this.isDisablec = false;
        _this.deliveryDto = null;
        _this.handleCancel = function (e) {
            _this.modalVisible = false;
            _this.isConfirmLoading = false;
            _this.reset(e);
        };
        return _this;
    }
    EditExpressComponent.prototype.ngOnInit = function () {
        this.form = this.fb.group({
            expressCompany: [null, [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].maxLength(200)]],
            expressNo: [null, [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].maxLength(200)]],
            sendTime: [null, [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required]],
            remark: [null, [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].maxLength(500)]]
        });
    };
    EditExpressComponent.prototype.show = function (delivery) {
        this.reset();
        this.deliveryDto = delivery;
        this.modalVisible = true;
        //对isDisablec做初始化
        this.isDisablec = false;
    };
    EditExpressComponent.prototype.save = function (isSave) {
        var _this = this;
        if (isSave === void 0) { isSave = false; }
        for (var i in this.form.controls) {
            this.form.controls[i].markAsDirty();
        }
        if (this.form.valid) {
            this._activityDeliveryInfoService.update(this.deliveryDto)
                .finally(function () { _this.isConfirmLoading = false; })
                .subscribe(function () {
                _this.notify.info('保存成功！');
                _this.close();
                _this.modalSave.emit(null);
            });
        }
    };
    EditExpressComponent.prototype.close = function () {
        this.modalVisible = false;
        //this.modal.hide();
    };
    EditExpressComponent.prototype.getFormControl = function (name) {
        return this.form.controls[name];
    };
    EditExpressComponent.prototype.reset = function (e) {
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
    ], EditExpressComponent.prototype, "modalSave", void 0);
    EditExpressComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'edit-express-modal',
            template: __webpack_require__("../../../../../src/app/admin/marketing/edit-express/edit-express.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injector"],
            __WEBPACK_IMPORTED_MODULE_3__shared_service_proxies_marketing_service__["b" /* ActivityDeliveryInfoServiceProxy */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormBuilder"]])
    ], EditExpressComponent);
    return EditExpressComponent;
}(__WEBPACK_IMPORTED_MODULE_1__shared_app_component_base__["a" /* AppComponentBase */]));



/***/ }),

/***/ "../../../../../src/app/admin/marketing/edit-form/edit-form.component.html":
/***/ (function(module, exports) {

module.exports = "<form nz-form [formGroup]=\"form\" *ngIf=\"modalVisible\" id=\"frm_edit_form\" (ngSubmit)=\"save()\">\r\n    <nz-modal [nzVisible]=\"modalVisible\" [nzTitle]=\"'修改商品信息'\" [nzConfirmLoading]=\"loading\" [nzContent]=\"modalContent\" [nzFooter]=\"modalFooter\"\r\n        (nzOnCancel)=\"handleCancel($event)\">\r\n        <ng-template #modalContent>\r\n            <div nz-form-item nz-row>\r\n                <div nz-form-label nz-col [nzSpan]=\"6\">\r\n                    <label nz-form-item-required>商品规格</label>\r\n                </div>\r\n                <div nz-form-control nz-col [nzSpan]=\"14\">\r\n                    <nz-select formControlName=\"activityGoodsId\" [(ngModel)]=\"formDto.activityGoodsId\" [nzPlaceHolder]=\"'请选择商品规格'\" [nzSize]=\"'large'\">\r\n                        <nz-option *ngFor=\"let goods of goodsList\" [nzLabel]=\"goods.specification\" [nzValue]=\"goods.id\">\r\n                        </nz-option>\r\n                        <div nz-form-explain *ngIf=\"getFormControl('activityGoodsId').dirty&&getFormControl('activityGoodsId').hasError('required')\">商品规格必填</div>\r\n                    </nz-select>\r\n                </div>\r\n            </div>\r\n            <div nz-form-item nz-row>\r\n                <div nz-form-label nz-col [nzSpan]=\"6\">\r\n                    <label>申请数量</label>\r\n                </div>\r\n                <div nz-form-control nz-col [nzSpan]=\"14\">\r\n                    <nz-input-number formControlName=\"num\" [(ngModel)]=\"formDto.num\" [nzSize]=\"'large'\" [nzStep]=\"1\" [nzMin]=\"1\"></nz-input-number>\r\n                    <span nz-form-text> 条</span>\r\n                    <div nz-form-explain *ngIf=\"getFormControl('num').dirty&&getFormControl('num').hasError('required')\">申请数量必填</div>\r\n                </div>\r\n            </div>\r\n        </ng-template>\r\n        <ng-template #modalFooter>\r\n            <button nz-button [nzType]=\"'default'\" [nzSize]=\"'large'\" type=\"button\" (click)=\"handleCancel($event)\">\r\n                取消\r\n            </button>\r\n            <button nz-button [nzType]=\"'primary'\" [nzSize]=\"'large'\" type=\"submit\" [nzLoading]=\"isConfirmLoading\">\r\n                保存\r\n            </button>\r\n        </ng-template>\r\n    </nz-modal>\r\n</form>"

/***/ }),

/***/ "../../../../../src/app/admin/marketing/edit-form/edit-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_app_component_base__ = __webpack_require__("../../../../../src/app/shared/app-component-base.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_service_proxies_marketing_service__ = __webpack_require__("../../../../../src/app/shared/service-proxies/marketing-service/index.ts");
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




//import * as _ from "lodash";
var EditFormComponent = /** @class */ (function (_super) {
    __extends(EditFormComponent, _super);
    function EditFormComponent(injector, _activityFormService, _activityGoodsService, fb) {
        var _this = _super.call(this, injector) || this;
        _this._activityFormService = _activityFormService;
        _this._activityGoodsService = _activityGoodsService;
        _this.fb = fb;
        _this.modalSave = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        _this.modalVisible = false;
        _this.isConfirmLoading = false;
        _this.isDisablec = false;
        _this.formDto = null;
        _this.handleCancel = function (e) {
            _this.modalVisible = false;
            _this.isConfirmLoading = false;
            _this.reset(e);
        };
        return _this;
    }
    EditFormComponent.prototype.ngOnInit = function () {
        this.form = this.fb.group({
            activityGoodsId: [null, [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required]],
            num: [null, [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required]]
        });
    };
    EditFormComponent.prototype.show = function (fdto) {
        this.reset();
        this.formDto = fdto;
        this.getGoodList();
        this.modalVisible = true;
        //对isDisablec做初始化
        this.isDisablec = false;
    };
    EditFormComponent.prototype.getGoodList = function () {
        var _this = this;
        this._activityGoodsService.getByActivityId(this.formDto.activityId)
            .finally(function () { _this.isConfirmLoading = false; })
            .subscribe(function (result) {
            _this.goodsList = result;
        });
    };
    EditFormComponent.prototype.setGoodsSpecification = function () {
        var _this = this;
        this.goodsList.forEach(function (goods) {
            if (goods.id == _this.formDto.activityGoodsId) {
                _this.formDto.goodsSpecification = goods.specification;
                return;
            }
        });
    };
    EditFormComponent.prototype.save = function (isSave) {
        var _this = this;
        if (isSave === void 0) { isSave = false; }
        for (var i in this.form.controls) {
            this.form.controls[i].markAsDirty();
        }
        this.setGoodsSpecification();
        if (this.form.valid) {
            this._activityFormService.update(this.formDto)
                .finally(function () { _this.isConfirmLoading = false; })
                .subscribe(function () {
                _this.notify.info('修改成功！');
                _this.close();
                _this.modalSave.emit(null);
            });
        }
    };
    EditFormComponent.prototype.close = function () {
        this.modalVisible = false;
        //this.modal.hide();
    };
    EditFormComponent.prototype.getFormControl = function (name) {
        return this.form.controls[name];
    };
    EditFormComponent.prototype.reset = function (e) {
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
    ], EditFormComponent.prototype, "modalSave", void 0);
    EditFormComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'edit-form-modal',
            template: __webpack_require__("../../../../../src/app/admin/marketing/edit-form/edit-form.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injector"],
            __WEBPACK_IMPORTED_MODULE_3__shared_service_proxies_marketing_service__["c" /* ActivityFormServiceProxy */],
            __WEBPACK_IMPORTED_MODULE_3__shared_service_proxies_marketing_service__["d" /* ActivityGoodsServiceProxy */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormBuilder"]])
    ], EditFormComponent);
    return EditFormComponent;
}(__WEBPACK_IMPORTED_MODULE_1__shared_app_component_base__["a" /* AppComponentBase */]));



/***/ }),

/***/ "../../../../../src/app/admin/marketing/user-answer/user-answer.component.html":
/***/ (function(module, exports) {

module.exports = "<pro-header [title]=\"'问卷调查详细'\"></pro-header>\r\n<nz-card [nzNoHovering]=\"true\" >\r\n    <ng-template #body>\r\n            <div class=\"text-lg mb-md\">用户提交信息</div>\r\n        <desc-list size=\"large\" class=\"mb-lg\">\r\n            <desc-list-item term=\"问卷主题\">{{question.name}}</desc-list-item>\r\n            <desc-list-item term=\"客户姓名\">{{question.userName}}</desc-list-item>\r\n            <desc-list-item term=\"联系电话\">{{question.phone}}</desc-list-item>\r\n            <desc-list-item term=\"客户地址\">{{question.address}}</desc-list-item>\r\n            <desc-list-item term=\"提交时间\">{{question.creationTime | _date}}</desc-list-item>\r\n        </desc-list>\r\n        <nz-divider class=\"mb-lg\"></nz-divider>\r\n        <div *ngFor=\"let q of questions\">\r\n            <div class=\"text-lg mb-md\">{{q.no}}. {{q.text}}</div>\r\n            <nz-checkbox-group [(ngModel)]=\"q.answers\"></nz-checkbox-group>\r\n            <nz-divider class=\"mb-lg\"></nz-divider>\r\n        </div>\r\n    </ng-template>\r\n</nz-card>"

/***/ }),

/***/ "../../../../../src/app/admin/marketing/user-answer/user-answer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserAnswerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng_zorro_antd__ = __webpack_require__("../../../../ng-zorro-antd/esm5/antd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_service_proxies_marketing_service__ = __webpack_require__("../../../../../src/app/shared/service-proxies/marketing-service/index.ts");
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





var UserAnswerComponent = /** @class */ (function (_super) {
    __extends(UserAnswerComponent, _super);
    function UserAnswerComponent(injector, msg, _userAnswerService, _userQuestionService, route) {
        var _this = _super.call(this, injector) || this;
        _this.msg = msg;
        _this._userAnswerService = _userAnswerService;
        _this._userQuestionService = _userQuestionService;
        _this.route = route;
        _this.data = [];
        _this.questions = [
            {
                no: 1,
                text: '您所开的烟店地处什么位置?',
                answers: [
                    { label: '城市', checked: false },
                    { label: '乡镇', checked: false },
                    { label: '郊区', checked: false },
                    { label: '农村', checked: false }
                ]
            },
            {
                no: 2,
                text: '您经营卷烟零售有多长时间?',
                answers: [
                    { label: '1年或1年以内', checked: false },
                    { label: '1～5年', checked: false },
                    { label: '5年以上', checked: false }
                ]
            },
            {
                no: 3,
                text: '您每月卷烟销量有多少?',
                answers: [
                    { label: '20条以下', checked: false },
                    { label: '20～70条', checked: false },
                    { label: '70～150条', checked: false },
                    { label: '150条以上', checked: false }
                ]
            },
            {
                no: 4,
                text: '您每月销售的卷烟中哪种档次的卷烟销量较大?',
                answers: [
                    { label: '30元以下', checked: false },
                    { label: '30～80元', checked: false },
                    { label: '80元以上', checked: false }
                ]
            },
            {
                no: 5,
                text: '您所售卷烟中哪些牌号卷烟销量较大，请依次填写?',
                answers: [
                    { label: '30元以下', checked: false },
                    { label: '30～80元', checked: false },
                    { label: '80元以上', checked: false }
                ]
            },
            {
                no: 6,
                text: '烟草公司的访销员每周到你户访销几次?',
                answers: [
                    { label: '一次', checked: false },
                    { label: '两次', checked: false },
                    { label: '两次以上', checked: false },
                    { label: '不走访', checked: false }
                ]
            },
            {
                no: 7,
                text: '您认为我们访销员一周上门访销几次为好?',
                answers: [
                    { label: '一次', checked: false },
                    { label: '两次', checked: false },
                    { label: '三次', checked: false },
                    { label: '无所谓', checked: false }
                ]
            },
            {
                no: 8,
                text: '您对我们上门访销员、市场经理的服务态度是否满意?',
                answers: [
                    { label: '满意', checked: false },
                    { label: '基本满意', checked: false },
                    { label: '不满意', checked: false }
                ]
            },
            {
                no: 9,
                text: '您对我们配送员、驾驶员的服务态度是否满意?',
                answers: [
                    { label: '满意', checked: false },
                    { label: '基本满意', checked: false },
                    { label: '不满意', checked: false }
                ]
            },
            {
                no: 10,
                text: '访销员每次上门访销时做些什么工作?',
                answers: [
                    { label: '完成定单', checked: false },
                    { label: '市场管理', checked: false },
                    { label: '询问信息', checked: false }
                ]
            }
        ];
        _this.questionId = _this.route.snapshot.params['id'];
        return _this;
    }
    UserAnswerComponent.prototype.ngOnInit = function () {
        this.getQuestion();
        this.getAanswerData();
    };
    UserAnswerComponent.prototype.getQuestion = function () {
        var _this = this;
        this._userQuestionService.get(this.questionId).subscribe(function (result) {
            _this.question = result;
        });
    };
    UserAnswerComponent.prototype.getAanswerData = function () {
        var _this = this;
        this._userAnswerService.getByQuestionId(this.questionId).subscribe(function (result) {
            _this.data = result;
            if (_this.data != undefined) {
                for (var _i = 0, _a = _this.data; _i < _a.length; _i++) {
                    var item = _a[_i];
                    _this.setQuestion(item);
                }
            }
        });
    };
    UserAnswerComponent.prototype.setQuestion = function (answer) {
        for (var _i = 0, _a = this.questions; _i < _a.length; _i++) {
            var question = _a[_i];
            if (answer.answerSqe == question.no) {
                for (var _b = 0, _c = question.answers; _b < _c.length; _b++) {
                    var aitem = _c[_b];
                    if (aitem.label == answer.content) {
                        aitem.checked = true;
                        return;
                    }
                }
                return;
            }
        }
    };
    UserAnswerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-page-user-answer',
            template: __webpack_require__("../../../../../src/app/admin/marketing/user-answer/user-answer.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injector"], __WEBPACK_IMPORTED_MODULE_2_ng_zorro_antd__["NzMessageService"],
            __WEBPACK_IMPORTED_MODULE_3__shared_service_proxies_marketing_service__["f" /* UserAnswerService */],
            __WEBPACK_IMPORTED_MODULE_3__shared_service_proxies_marketing_service__["g" /* UserQuestionService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]])
    ], UserAnswerComponent);
    return UserAnswerComponent;
}(__WEBPACK_IMPORTED_MODULE_4__shared_app_component_base__["a" /* AppComponentBase */]));



/***/ }),

/***/ "../../../../../src/app/admin/marketing/user-question/user-question.component.html":
/***/ (function(module, exports) {

module.exports = "<pro-header></pro-header>\r\n<nz-card [nzBordered]=\"false\">\r\n    <form nz-form (ngSubmit)=\"refreshData()\" [nzLayout]=\"'inline'\">\r\n        <div nz-row [nzGutter]=\"24\">\r\n            <div nz-col [nzSpan]=\"16\" class=\"mb-md\">\r\n                <div nz-form-item class=\"d-flex\">\r\n                    <div nz-form-label>\r\n                        <label for=\"filter\">关 键 字</label>\r\n                    </div>\r\n                    <div nz-form-control class=\"flex-1\">\r\n                        <nz-input [nzSize]=\"'large'\" name=\"filter\" nzId=\"filter\" [(ngModel)]=\"parameters.filter\" [nzPlaceHolder]=\"'客户姓名、客户电话'\"></nz-input>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div nz-col [nzSpan]=\"8\" class=\"mb-md\" [class.text-right]=\"'true'\">\r\n                <button nz-button type=\"submit\" [nzType]=\"'primary'\" [nzLoading]=\"loading\" [nzSize]=\"'large'\">查询</button>\r\n                <button nz-button type=\"reset\" (click)=\"refreshData()\" [nzSize]=\"'large'\" class=\"mx-sm\">重置</button>\r\n            </div>\r\n        </div>\r\n    </form>\r\n    <nz-table #nzTable [nzAjaxData]=\"data\" [nzTotal]=\"query.total\" [(nzPageIndex)]=\"query.pageIndex\" [(nzPageSize)]=\"query.pageSize\"\r\n        [nzLoading]=\"loading\" [nzShowSizeChanger]=\"true\" (nzPageIndexChange)=\"refreshData()\" (nzPageSizeChange)=\"refreshData()\">\r\n        <thead nz-thead>\r\n            <tr>\r\n                <th nz-th>\r\n                    <span>问卷主题</span>\r\n                </th>\r\n                <th nz-th>\r\n                    <span>客户姓名</span>\r\n                </th>\r\n                <th nz-th>\r\n                    <span>联系电话</span>\r\n                </th>\r\n                <th nz-th>\r\n                    <span>客户地址</span>\r\n                </th>\r\n                <th nz-th>\r\n                    <span>提交时间</span>\r\n                </th>\r\n                <th nz-th>\r\n                    <span>操作</span>\r\n                </th>\r\n            </tr>\r\n        </thead>\r\n        <tbody nz-tbody>\r\n            <tr nz-tbody-tr *ngFor=\"let item of nzTable.data\">\r\n                <td nz-td>{{item.name}}</td>\r\n                <td nz-td>{{item.userName}}</td>\r\n                <td nz-td>{{item.phone}}</td>\r\n                <td nz-td>{{item.address}}</td>\r\n                <td nz-td>{{item.creationTime | _date}}</td>\r\n                <td nz-td>\r\n                    <a (click)=\"goDetail(item.id)\">用户回答详细</a>\r\n                </td>\r\n            </tr>\r\n        </tbody>\r\n    </nz-table>\r\n</nz-card>"

/***/ }),

/***/ "../../../../../src/app/admin/marketing/user-question/user-question.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserQuestionComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng_zorro_antd__ = __webpack_require__("../../../../ng-zorro-antd/esm5/antd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_service_proxies_entity__ = __webpack_require__("../../../../../src/app/shared/service-proxies/entity/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_service_proxies_marketing_service__ = __webpack_require__("../../../../../src/app/shared/service-proxies/marketing-service/index.ts");
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






var UserQuestionComponent = /** @class */ (function (_super) {
    __extends(UserQuestionComponent, _super);
    function UserQuestionComponent(injector, msg, _userQuestionService, _router) {
        var _this = _super.call(this, injector) || this;
        _this.msg = msg;
        _this._userQuestionService = _userQuestionService;
        _this._router = _router;
        _this.data = [];
        _this.loading = false;
        _this.parameters = { beginDate: null, endDate: null };
        return _this;
    }
    UserQuestionComponent.prototype.ngOnInit = function () {
        this.refreshData();
    };
    UserQuestionComponent.prototype.refreshData = function (reset) {
        var _this = this;
        if (reset === void 0) { reset = false; }
        if (reset) {
            this.query.pageIndex = 1;
        }
        this.loading = true;
        this._userQuestionService.getAll(this.query.skipCount(), this.query.pageSize, this.getParameter()).subscribe(function (result) {
            _this.loading = false;
            var status = 0;
            _this.query.total = result.totalCount;
            _this.data = result.items;
        });
    };
    ;
    UserQuestionComponent.prototype.getParameter = function () {
        var parray = [];
        parray.push(__WEBPACK_IMPORTED_MODULE_2__shared_service_proxies_entity__["h" /* Parameter */].fromJS({ key: 'Filter', value: this.parameters.filter }));
        return parray;
    };
    UserQuestionComponent.prototype.goDetail = function (id) {
        this._router.navigate(['admin/user-question-detail', id]);
    };
    UserQuestionComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-page-user-question',
            template: __webpack_require__("../../../../../src/app/admin/marketing/user-question/user-question.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injector"], __WEBPACK_IMPORTED_MODULE_1_ng_zorro_antd__["NzMessageService"], __WEBPACK_IMPORTED_MODULE_3__shared_service_proxies_marketing_service__["g" /* UserQuestionService */], __WEBPACK_IMPORTED_MODULE_5__angular_router__["h" /* Router */]])
    ], UserQuestionComponent);
    return UserQuestionComponent;
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
            this.isConfirmLoading = true;
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_service_proxies_entity__ = __webpack_require__("../../../../../src/app/shared/service-proxies/entity/index.ts");
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
        this.isManger = false;
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
    //isManger用判断模态框是否只显示经理级的员工
    EmployeeModalComponent.prototype.show = function (isManger) {
        if (isManger === void 0) { isManger = false; }
        this.isManger = isManger;
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
        this.service.getAllModal(this.getParameter()).subscribe(function (result) {
            _this.eloading = false;
            var status = 5;
            _this.employee = result.items;
            _this.q.total = result.totalCount;
        });
    };
    EmployeeModalComponent.prototype.getParameter = function () {
        var arry = [];
        arry.push(__WEBPACK_IMPORTED_MODULE_3__shared_service_proxies_entity__["h" /* Parameter */].fromJS({ key: 'Filter', value: this.q.no }));
        arry.push(__WEBPACK_IMPORTED_MODULE_3__shared_service_proxies_entity__["h" /* Parameter */].fromJS({ key: 'IsManger', value: this.isManger }));
        return arry;
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

/***/ "../../../../../src/app/admin/wechat-manager/wechat-user/wechat-user.component.html":
/***/ (function(module, exports) {

module.exports = "<pro-header></pro-header>\r\n<nz-card [nzBordered]=\"false\">\r\n    <form nz-form (ngSubmit)=\"refreshData()\" [nzLayout]=\"'inline'\">\r\n        <div nz-row [nzGutter]=\"24\">\r\n            <ng-template #deleteContent>\r\n                <h2>是否解除绑定微信用户{{WechatUserName}}?</h2>\r\n            </ng-template>\r\n            <div nz-col [nzSpan]=\"8\" class=\"mb-md\">\r\n                <div nz-form-item class=\"d-flex\">\r\n                    <div nz-form-control class=\"flex-1\">\r\n                        <nz-input [(ngModel)]=\"search.name\" name=\"name\" [nzSize]=\"'large'\" [nzPlaceHolder]=\"'请输入昵称或用户名'\" nzId=\"name\"></nz-input>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div nz-col [nzSpan]=\"8\" class=\"mb-md\">\r\n                <div nz-form-item class=\"d-flex\">\r\n                    <div nz-form-control class=\"flex-1\">\r\n                        <nz-select name=\"UserType\" [nzPlaceHolder]=\"'请选择用户类型'\" [(ngModel)]=\"search.UserType\" [nzShowSearch]=\"true\" nzSize=\"large\">\r\n                            <nz-option *ngFor=\"let i of positions\" [nzLabel]=\"i.text\" [nzValue]=\"i.value\">\r\n                            </nz-option>\r\n                        </nz-select>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div nz-col [nzSpan]=\"8\" class=\"mb-md\" [class.text-right]=\"'true'\">\r\n                <button nz-button type=\"submit\" [nzType]=\"'primary'\" [nzLoading]=\"loading\" [nzSize]=\"'large'\">查询</button>\r\n                <button nz-button type=\"reset\" (click)=\"refreshData(true)\" [nzSize]=\"'large'\" class=\"mx-sm\">重置</button>\r\n            </div>\r\n        </div>\r\n    </form>\r\n    <nz-table #nzTable [nzAjaxData]=\"weChatUsers\" [nzTotal]=\"query.total\" [(nzPageIndex)]=\"query.pageIndex\" [(nzPageSize)]=\"query.pageSize\"\r\n        [nzLoading]=\"loading\" [nzShowSizeChanger]=\"true\" (nzPageIndexChange)=\"refreshData()\" (nzPageSizeChange)=\"refreshData()\">\r\n        <thead nz-thead>\r\n            <tr>\r\n                <th nz-th>\r\n                    <span>微信昵称</span>\r\n                </th>\r\n                <th nz-th>\r\n                    <span>微信OpenId</span>\r\n                </th>\r\n                <th nz-th>\r\n                    <span>用户类型</span>\r\n                </th>\r\n                <th nz-th>\r\n                    <span>用户名</span>\r\n                </th>\r\n                <th nz-th>\r\n                    <span>绑定状态</span>\r\n                </th>\r\n                <th nz-th>\r\n                    <span>绑定时间</span>\r\n                </th>\r\n                <th nz-th>\r\n                    <span>解绑时间</span>\r\n                </th>\r\n                <th nz-th>\r\n                    <span>操作</span>\r\n                </th>\r\n            </tr>\r\n        </thead>\r\n        <tbody nz-tbody>\r\n            <tr nz-tbody-tr *ngFor=\"let wechatUser of nzTable.data\">\r\n                <td nz-td>{{wechatUser.nickName}}</td>\r\n                <td nz-td>{{wechatUser.openId}}</td>\r\n                <td nz-td>{{wechatUser.userTypeName}}</td>\r\n                <td nz-td>{{wechatUser.userName}}</td>\r\n                <td nz-td>{{wechatUser.bindStatusName}}</td>\r\n                <td nz-td>{{wechatUser.bindTime | _date}}</td>\r\n                <td nz-td>{{wechatUser.unBindTime | _date}}</td>\r\n                <td nz-td>\r\n                    <a *ngIf=\"wechatUser.bindStatus==1\" (click)=\"unBinding(wechatUser,deleteContent)\">解除绑定</a>\r\n                    <!-- <span nz-table-divider></span>\r\n                    <a (click)=\"delete(employee,deleteContent)\">删除</a> -->\r\n                </td>\r\n            </tr>\r\n        </tbody>\r\n    </nz-table>\r\n</nz-card>\r\n"

/***/ }),

/***/ "../../../../../src/app/admin/wechat-manager/wechat-user/wechat-user.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WechatUserComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_app_component_base__ = __webpack_require__("../../../../../src/app/shared/app-component-base.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_service_proxies_wechat_manager_wechat_user_service__ = __webpack_require__("../../../../../src/app/shared/service-proxies/wechat-manager/wechat-user-service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_service_proxies_entity__ = __webpack_require__("../../../../../src/app/shared/service-proxies/entity/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng_zorro_antd__ = __webpack_require__("../../../../ng-zorro-antd/esm5/antd.js");
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





var WechatUserComponent = /** @class */ (function (_super) {
    __extends(WechatUserComponent, _super);
    function WechatUserComponent(injector, wechatUserService, modal) {
        var _this = _super.call(this, injector) || this;
        _this.wechatUserService = wechatUserService;
        _this.modal = modal;
        _this.search = { name: '', UserType: null };
        _this.loading = false;
        _this.weChatUsers = [];
        _this.positions = [
            { text: '客户经理', value: 2 },
            { text: '营销人员', value: 3 },
            { text: '零售客户', value: 1 },
        ];
        _this.WechatUserName = '';
        return _this;
    }
    WechatUserComponent.prototype.ngOnInit = function () {
        this.refreshData();
    };
    WechatUserComponent.prototype.refreshData = function (reset) {
        var _this = this;
        if (reset === void 0) { reset = false; }
        if (reset) {
            this.query.pageIndex = 1;
            this.search = { name: '', UserType: null };
        }
        this.loading = true;
        this.wechatUserService.getAll(this.query.skipCount(), this.query.pageSize, this.getParameter()).subscribe(function (result) {
            _this.weChatUsers = result.items;
            _this.loading = false;
            _this.query.total = result.totalCount;
        });
    };
    WechatUserComponent.prototype.getParameter = function () {
        var arry = [];
        arry.push(__WEBPACK_IMPORTED_MODULE_3__shared_service_proxies_entity__["h" /* Parameter */].fromJS({ key: 'Name', value: this.search.name }));
        arry.push(__WEBPACK_IMPORTED_MODULE_3__shared_service_proxies_entity__["h" /* Parameter */].fromJS({ key: 'UserType', value: this.search.UserType }));
        return arry;
    };
    /**
     * 解除绑定
     * @param wechatUser 微信用户实体
     */
    WechatUserComponent.prototype.unBinding = function (wechatUser, TplContent) {
        var _this = this;
        this.WechatUserName = wechatUser.nickName;
        this.modal.confirm({
            content: TplContent,
            cancelText: '取消',
            okText: '确定',
            onOk: function () {
                wechatUser.userType = 4;
                wechatUser.bindStatus = 0;
                wechatUser.unBindTime = new Date;
                _this.wechatUserService.update(wechatUser).subscribe(function () {
                    _this.notify.info(_this.l('解除绑定成功！'));
                    _this.refreshData();
                });
            }
        });
    };
    WechatUserComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            moduleId: module.i,
            selector: 'wechat-user',
            template: __webpack_require__("../../../../../src/app/admin/wechat-manager/wechat-user/wechat-user.component.html"),
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injector"], __WEBPACK_IMPORTED_MODULE_2__shared_service_proxies_wechat_manager_wechat_user_service__["a" /* WechatUserServiceProxy */], __WEBPACK_IMPORTED_MODULE_4_ng_zorro_antd__["NzModalService"]])
    ], WechatUserComponent);
    return WechatUserComponent;
}(__WEBPACK_IMPORTED_MODULE_1__shared_app_component_base__["a" /* AppComponentBase */]));



/***/ }),

/***/ "../../../../../src/app/admin/weichat-setting/auth-setting/auth-setting.component.html":
/***/ (function(module, exports) {

module.exports = "<!--component html goes here -->\r\n<nz-card>\r\n    <form nz-form [formGroup]=\"form\" id=\"frm_create_role\" (ngSubmit)=\"save()\">\r\n\r\n        <div nz-form-item nz-row>\r\n            <div nz-form-label nz-col [nzSm]=\"4\">\r\n                <label for=\"name\" nz-form-item-required>微信号名称</label>\r\n            </div>\r\n            <div nz-form-control nz-col [nzSm]=\"20\" nzHasFeedback [nzValidateStatus]=\"getFormControl('name')\">\r\n                <nz-input formControlName=\"name\" [(ngModel)]=\"authSet.name\" [nzId]=\"'name'\"></nz-input>\r\n                <div nz-form-explain *ngIf=\"getFormControl('name').dirty&&getFormControl('name').hasError('maxlength')\">字符长度小于等于50</div>\r\n                <div nz-form-explain *ngIf=\"getFormControl('name').dirty&&getFormControl('name').hasError('required')\">请输入微信号名称</div>\r\n            </div>\r\n        </div>\r\n        <div nz-form-item nz-row>\r\n            <div nz-form-label nz-col [nzSm]=\"4\">\r\n                <label for=\"appOrgId\" nz-form-item-required>微信原始ID</label>\r\n            </div>\r\n            <div nz-form-control nz-col [nzSm]=\"20\" nzHasFeedback [nzValidateStatus]=\"getFormControl('appOrgId')\">\r\n                <nz-input formControlName=\"appOrgId\" [(ngModel)]=\"authSet.appOrgId\" [nzId]=\"'appOrgId'\"></nz-input>\r\n                <div nz-form-explain *ngIf=\"getFormControl('appOrgId').dirty&&getFormControl('appOrgId').hasError('maxlength')\">字符长度小于等于250</div>\r\n                <div nz-form-explain *ngIf=\"getFormControl('appOrgId').dirty&&getFormControl('appOrgId').hasError('required')\">请输入微信原始ID</div>\r\n            </div>\r\n        </div>\r\n        <div nz-form-item nz-row>\r\n            <div nz-form-label nz-col [nzSm]=\"4\">\r\n                <label for=\"appType\" nz-form-item-required>微信类型</label>\r\n            </div>\r\n            <div nz-form-control nz-col [nzSm]=\"20\" nzHasFeedback [nzValidateStatus]=\"getFormControl('appType')\">\r\n\r\n                <nz-radio-group formControlName=\"appType\" [(ngModel)]=\"authSet.appType\" class=\"mb-md\">\r\n                    <label nz-radio [nzValue]=\"o.value\" *ngFor=\"let o of appTypes\">\r\n                        <span>{{o.text}}</span>\r\n                    </label>\r\n                </nz-radio-group>\r\n            </div>\r\n        </div>\r\n        <div nz-form-item nz-row>\r\n            <div nz-form-label nz-col [nzSm]=\"4\">\r\n                <label for=\"appId\" nz-form-item-required>微信AppID</label>\r\n            </div>\r\n            <div nz-form-control nz-col [nzSm]=\"20\" nzHasFeedback [nzValidateStatus]=\"getFormControl('appId')\">\r\n                <nz-input formControlName=\"appId\" [(ngModel)]=\"authSet.appId\" [nzId]=\"'appId'\"></nz-input>\r\n                <div nz-form-explain *ngIf=\"getFormControl('appId').dirty&&getFormControl('appId').hasError('maxlength')\">字符长度小于等于250</div>\r\n                <div nz-form-explain *ngIf=\"getFormControl('appId').dirty&&getFormControl('appId').hasError('required')\">请输入微信AppID</div>\r\n            </div>\r\n        </div>\r\n        <div nz-form-item nz-row>\r\n            <div nz-form-label nz-col [nzSm]=\"4\">\r\n                <label for=\"appSecret\" nz-form-item-required>微信AppSecret</label>\r\n            </div>\r\n            <div nz-form-control nz-col [nzSm]=\"20\" nzHasFeedback [nzValidateStatus]=\"getFormControl('appSecret')\">\r\n                <nz-input formControlName=\"appSecret\" [(ngModel)]=\"authSet.appSecret\" [nzId]=\"'appSecret'\"></nz-input>\r\n                <div nz-form-explain *ngIf=\"getFormControl('appSecret').dirty&&getFormControl('appSecret').hasError('maxlength')\">字符长度小于等于250</div>\r\n                <div nz-form-explain *ngIf=\"getFormControl('appSecret').dirty&&getFormControl('appSecret').hasError('required')\">请输入微信AppSecret</div>\r\n            </div>\r\n        </div>\r\n        <div nz-form-item nz-row>\r\n            <div nz-form-label nz-col [nzSm]=\"4\">\r\n                <label for=\"encodingAESKey\">微信EncodingAESKey</label>\r\n            </div>\r\n            <div nz-form-control nz-col [nzSm]=\"20\" nzHasFeedback [nzValidateStatus]=\"getFormControl('encodingAESKey')\">\r\n                <nz-input formControlName=\"encodingAESKey\" [(ngModel)]=\"authSet.encodingAESKey\" [nzId]=\"'encodingAESKey'\"></nz-input>\r\n                <div nz-form-explain *ngIf=\"getFormControl('encodingAESKey').dirty&&getFormControl('encodingAESKey').hasError('maxlength')\">字符长度小于等于500</div>\r\n            </div>\r\n        </div>\r\n        <div nz-form-item nz-row>\r\n            <div nz-form-label nz-col [nzSm]=\"4\">\r\n                <label for=\"qrCodeUrl\">微信二维码图片URL</label>\r\n            </div>\r\n            <div nz-form-control nz-col [nzSm]=\"20\" nzHasFeedback [nzValidateStatus]=\"getFormControl('qrCodeUrl')\">\r\n                <!-- <nz-input formControlName=\"qrCodeUrl\" [(ngModel)]=\"authSet.qrCodeUrl\" [nzId]=\"'qrCodeUrl'\"></nz-input> -->\r\n                <!--<label nz-upload nzAccept=\"image\" nzAction=\"https://jsonplaceholder.typicode.com/posts/\">\r\n                    <button nz-button>\r\n                        <i class=\"anticon anticon-upload\"></i>\r\n                        <span>上传</span>\r\n                    </button>\r\n                    <div ><nz-avatar nzSize=\"large\" nzSrc=\"authSet.qrCodeUrl\"></nz-avatar></div>\r\n                   \r\n                </label>-->\r\n                <!--<img [src]=\"authSet.qrCodeUrl\" >-->\r\n                <img src=\"{{authSet.qrCodeUrl}}\" >\r\n                <!-- <nz-upload class=\"avatar-uploader\" nzAction=\"https://jsonplaceholder.typicode.com/posts/\" nzName=\"avatar\" nzListType=\"picture-card\"\r\n                     [nzBeforeUpload]=\"beforeUpload\" (nzChange)=\"handleChange($event)\">\r\n                    <ng-container>\r\n                        <i class=\"anticon anticon-plus\"></i>\r\n                        <div class=\"ant-upload-text\">Upload</div>\r\n                    </ng-container> -->\r\n                   \r\n                <!-- </nz-upload> -->\r\n                <!-- <div nz-form-explain *ngIf=\"getFormControl('qrCodeUrl').dirty&&getFormControl('qrCodeUrl').hasError('maxlength')\">字符长度小于等于250</div> -->\r\n            </div>\r\n        </div>\r\n        <div nz-form-item nz-row>\r\n            <div nz-form-label nz-col [nzSm]=\"4\">\r\n                <label for=\"token\" nz-form-item-required>微信Token</label>\r\n            </div>\r\n            <div nz-form-control nz-col [nzSm]=\"20\" nzHasFeedback [nzValidateStatus]=\"getFormControl('token')\">\r\n                <nz-input formControlName=\"token\" [(ngModel)]=\"authSet.token\" [nzId]=\"'token'\"></nz-input>\r\n                <div nz-form-explain *ngIf=\"getFormControl('token').dirty&&getFormControl('token').hasError('maxlength')\">字符长度小于等于250</div>\r\n                <div nz-form-explain *ngIf=\"getFormControl('token').dirty&&getFormControl('token').hasError('required')\">请输入角色显示名</div>\r\n            </div>\r\n        </div>\r\n        <!-- <div nz-form-item nz-row>\r\n            <div nz-form-label nz-col [nzSm]=\"4\">\r\n                <label for=\"accessToken\">微信access_token</label>\r\n            </div>\r\n            <div nz-form-control nz-col [nzSm]=\"20\" nzHasFeedback [nzValidateStatus]=\"getFormControl('accessToken')\">\r\n                <nz-input formControlName=\"accessToken\" [(ngModel)]=\"authSet.accessToken\" [nzId]=\"'accessToken'\"></nz-input>\r\n                <div nz-form-explain *ngIf=\"getFormControl('accessToken').dirty&&getFormControl('accessToken').hasError('maxlength')\">字符长度小于等于255</div>\r\n            </div>\r\n        </div>\r\n        <div nz-form-item nz-row>\r\n            <div nz-form-label nz-col [nzSm]=\"4\">\r\n                <label for=\"expiresIn\">微信expires_in</label>\r\n            </div>\r\n            <div nz-form-control nz-col [nzSm]=\"20\" nzHasFeedback [nzValidateStatus]=\"getFormControl('expiresIn')\">\r\n                <nz-input formControlName=\"expiresIn\" [(ngModel)]=\"authSet.expiresIn\" [nzId]=\"'expiresIn'\"></nz-input>\r\n            </div>\r\n        </div>\r\n        <div nz-form-item nz-row>\r\n            <div nz-form-label nz-col [nzSm]=\"4\">\r\n                <label for=\"nextGettime\">微信next_gettime</label>\r\n            </div>\r\n            <div nz-form-control nz-col [nzSm]=\"20\" nzHasFeedback [nzValidateStatus]=\"getFormControl('nextGettime')\">\r\n                <nz-input formControlName=\"nextGettime\" [(ngModel)]=\"authSet.nextGettime\" [nzId]=\"'nextGettime'\"></nz-input>\r\n            </div>\r\n        </div> -->\r\n        <div nz-form-item nz-row class=\"mb0\">\r\n            <div nz-form-label nz-col [nzSm]=\"5\">\r\n                <!-- <button nz-button [nzType]=\"'default'\" [nzSize]=\"'large'\" type=\"button\" (click)=\"handleCancel($event)\">\r\n                    {{l(\"取消\")}}\r\n                </button> -->\r\n                <button nz-button [nzType]=\"'primary'\" [nzSize]=\"'large'\" type=\"submit\">\r\n                    {{l(\"保存\")}}\r\n                </button>\r\n            </div>\r\n        </div>\r\n    </form>\r\n</nz-card>"

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
        _this.appTypes = [
            { text: '订阅号', value: 1 },
            { text: '认证订阅号', value: 2 },
            { text: '服务号', value: 3 },
            { text: '认证服务号', value: 4 },
        ];
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
            console.log('保存');
            console.log(this.authSet);
            this.service.update(this.authSet).subscribe(function () {
                _this.notify.info(_this.l('保存成功！'));
                _this.getAuthSetByTenantId();
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
            console.log('获取');
            console.log(_this.authSet);
            if (!_this.authSet.id) {
                _this.authSet.appType = 3;
            }
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

module.exports = "<form nz-form [formGroup]=\"formc\" *ngIf=\"modalVisible\" id=\"frm_create_message\" (ngSubmit)=\"save()\">\r\n    <nz-modal [nzVisible]=\"modalVisible\" [nzTitle]=\"'创建关键字回复'\" [nzConfirmLoading]=\"loading\" [nzContent]=\"modalContent\" [nzFooter]=\"modalFooter\"\r\n        (nzOnCancel)=\"handleCancel($event)\">\r\n        <ng-template #modalContent>\r\n            <fieldset>\r\n                <div nz-form-item nz-row [nzGutter]=\"24\">\r\n                    <div nz-form-label nz-col [nzSm]=\"6\">\r\n                        <label for=\"keyWord\" nz-form-item-required>关键字</label>\r\n                    </div>\r\n                    <div nz-form-control nz-col [nzSm]=\"18\" nzHasFeedback [nzValidateStatus]=\"getcFormControl('keyWord')\">\r\n                        <nz-input formControlName=\"keyWord\" [(ngModel)]=\"messages.keyWord\" [nzId]=\"'tenancyName'\"></nz-input>\r\n                        <div nz-form-explain *ngIf=\"getcFormControl('keyWord').dirty&&getcFormControl('keyWord').hasError('maxlength')\">字符长度小于等于50</div>\r\n                        <div nz-form-explain *ngIf=\"getcFormControl('keyWord').dirty&&getcFormControl('keyWord').hasError('required')\">关键字不能为空</div>\r\n                    </div>\r\n                </div>\r\n                <div nz-form-item nz-row [nzGutter]=\"24\">\r\n                    <div nz-form-label nz-col [nzSm]=\"6\">\r\n                        <label for=\"matchMode\" nz-form-item-required>匹配模式</label>\r\n                    </div>\r\n                    <div nz-form-control nz-col [nzSm]=\"18\" nzHasFeedback [nzValidateStatus]=\"getcFormControl('matchMode')\">\r\n                        <nz-radio-group formControlName=\"matchMode\" [(ngModel)]=\"messages.matchMode\" class=\"mb-md\">\r\n                            <label nz-radio [nzValue]=\"o.value\" *ngFor=\"let o of matchModes\">\r\n                                <span>{{o.text}}</span>\r\n                            </label>\r\n                        </nz-radio-group>\r\n                    </div>\r\n                </div>\r\n                <div nz-form-item nz-row [nzGutter]=\"24\">\r\n                    <div nz-form-label nz-col [nzSm]=\"6\">\r\n                        <label for=\"msgType\" nz-form-item-required>消息类型</label>\r\n                    </div>\r\n                    <div nz-form-control nz-col [nzSm]=\"18\" nzHasFeedback [nzValidateStatus]=\"getcFormControl('msgType')\">\r\n                        <nz-radio-group formControlName=\"msgType\" [(ngModel)]=\"messages.msgType\" class=\"mb-md\">\r\n                            <label nz-radio [nzValue]=\"o.value\" *ngFor=\"let o of msyTypes\">\r\n                                <span>{{o.text}}</span>\r\n                            </label>\r\n                        </nz-radio-group>\r\n                    </div>\r\n                </div>\r\n                <div nz-form-item nz-row [nzGutter]=\"24\">\r\n                    <div nz-form-label nz-col [nzSm]=\"6\">\r\n                        <label for=\"content\" nz-form-item-required>回复内容</label>\r\n                    </div>\r\n                    <div nz-form-control nz-col [nzSm]=\"18\" nzHasFeedback [nzValidateStatus]=\"getcFormControl('content')\">\r\n                        <nz-input nzType=\"textarea\" nzRows=\"4\" formControlName=\"content\" [(ngModel)]=\"messages.content\" [nzId]=\"'content'\"></nz-input>\r\n                        <div nz-form-explain *ngIf=\"getcFormControl('content').dirty&&getcFormControl('content').hasError('required')\">内容不能为空</div>\r\n                    </div>\r\n                </div>\r\n            </fieldset>\r\n        </ng-template>\r\n        <ng-template #modalFooter>\r\n            <button nz-button [nzType]=\"'default'\" [nzSize]=\"'large'\" type=\"button\" (click)=\"handleCancel($event)\">\r\n                {{l(\"取消\")}}\r\n            </button>\r\n            <button nz-button [nzType]=\"'primary'\" [nzSize]=\"'large'\" type=\"submit\" [nzLoading]=\"isConfirmLoading\">\r\n                {{l(\"保存\")}}\r\n            </button>\r\n        </ng-template>\r\n    </nz-modal>\r\n</form>"

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
        // 加载效果  
        _this.isConfirmLoading = false;
        _this.messages = new __WEBPACK_IMPORTED_MODULE_3__shared_service_proxies_entity_messages__["a" /* Messagess */]();
        // msgTypes:[
        //     {text:'文字消息',value:1}
        // ]
        _this.msyTypes = [
            { value: 1, text: '文字消息' },
        ];
        _this.matchModes = [
            { value: 1, text: '精准匹配' },
            { value: 2, text: '模糊匹配' },
        ];
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
        this.reset();
        this.messages = new __WEBPACK_IMPORTED_MODULE_3__shared_service_proxies_entity_messages__["a" /* Messagess */]();
        this.messages.msgType = 1;
        this.messages.matchMode = 1;
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

module.exports = "<form nz-form [formGroup]=\"forme\" *ngIf=\"modalVisible\" id=\"frm_edit_message\" (ngSubmit)=\"save()\">\r\n    <nz-modal [nzVisible]=\"modalVisible\" [nzTitle]=\"'关键字回复编辑'\" [nzConfirmLoading]=\"loading\" [nzContent]=\"modalContent\" [nzFooter]=\"modalFooter\"\r\n        (nzOnCancel)=\"handleCancel($event)\">\r\n        <ng-template #modalContent>\r\n\r\n            <ng-template #nzTabHeading>\r\n                关键字回复\r\n            </ng-template>\r\n            <fieldset>\r\n                <div nz-form-item nz-row [nzGutter]=\"24\">\r\n                    <div nz-form-label nz-col [nzSm]=\"6\">\r\n                        <label for=\"keyWord\" nz-form-item-required>关键字</label>\r\n                    </div>\r\n                    <div nz-form-control nz-col [nzSm]=\"18\" nzHasFeedback [nzValidateStatus]=\"geteFormControl('keyWord')\">\r\n                        <nz-input formControlName=\"keyWord\" [(ngModel)]=\"messages.keyWord\" [nzId]=\"'tenancyName'\"></nz-input>\r\n                        <div nz-form-explain *ngIf=\"geteFormControl('keyWord').dirty&&geteFormControl('keyWord').hasError('maxlength')\">字符长度小于等于50</div>\r\n                        <div nz-form-explain *ngIf=\"geteFormControl('keyWord').dirty&&geteFormControl('keyWord').hasError('required')\">关键字不能为空</div>\r\n                    </div>\r\n                </div>\r\n                <div nz-form-item nz-row [nzGutter]=\"24\">\r\n                    <div nz-form-label nz-col [nzSm]=\"6\">\r\n                        <label for=\"matchMode\" nz-form-item-required>匹配模式</label>\r\n                    </div>\r\n                    <div nz-form-control nz-col [nzSm]=\"18\" nzHasFeedback [nzValidateStatus]=\"geteFormControl('matchMode')\">\r\n                        <nz-radio-group formControlName=\"matchMode\" [(ngModel)]=\"messages.matchMode\" class=\"mb-md\">\r\n                            <label nz-radio [nzValue]=\"o.value\" *ngFor=\"let o of matchModes\">\r\n                                <span>{{o.text}}</span>\r\n                            </label>\r\n                        </nz-radio-group>\r\n                    </div>\r\n                </div>\r\n                <div nz-form-item nz-row [nzGutter]=\"24\">\r\n                    <div nz-form-label nz-col [nzSm]=\"6\">\r\n                        <label for=\"msgType\" nz-form-item-required>消息类型</label>\r\n                    </div>\r\n                    <div nz-form-control nz-col [nzSm]=\"18\" nzHasFeedback [nzValidateStatus]=\"geteFormControl('msgType')\">\r\n                        <nz-radio-group formControlName=\"msgType\" [(ngModel)]=\"messages.msgType\" class=\"mb-md\">\r\n                            <label nz-radio [nzValue]=\"o.value\" *ngFor=\"let o of msyTypes\">\r\n                                <span>{{o.text}}</span>\r\n                            </label>\r\n                        </nz-radio-group>\r\n                    </div>\r\n                </div>\r\n                <div nz-form-item nz-row [nzGutter]=\"24\">\r\n                    <div nz-form-label nz-col [nzSm]=\"6\">\r\n                        <label for=\"content\" nz-form-item-required>回复内容</label>\r\n                    </div>\r\n                    <div nz-form-control nz-col [nzSm]=\"18\" nzHasFeedback [nzValidateStatus]=\"geteFormControl('content')\">\r\n                        <nz-input nzType=\"textarea\" nzRows=\"4\" formControlName=\"content\" [(ngModel)]=\"messages.content\" [nzId]=\"'content'\"></nz-input>\r\n                        <div nz-form-explain *ngIf=\"geteFormControl('content').dirty&&geteFormControl('content').hasError('required')\">内容不能为空</div>\r\n                    </div>\r\n                </div>\r\n            </fieldset>\r\n        </ng-template>\r\n        <ng-template #modalFooter>\r\n            <button nz-button [nzType]=\"'default'\" [nzSize]=\"'large'\" type=\"button\" (click)=\"handleCancel($event)\">\r\n                {{l(\"取消\")}}\r\n            </button>\r\n            <button nz-button [nzType]=\"'primary'\" [nzSize]=\"'large'\" type=\"submit\" [nzLoading]=\"isConfirmLoading\">\r\n                {{l(\"保存\")}}\r\n            </button>\r\n        </ng-template>\r\n    </nz-modal>\r\n</form>"

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
        _this.msyTypes = [
            { value: 1, text: '文字消息' },
        ];
        _this.matchModes = [
            { value: 1, text: '精准匹配' },
            { value: 2, text: '模糊匹配' },
        ];
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

module.exports = "<!--component html goes here -->\r\n<pro-header>\r\n</pro-header>\r\n<nz-tabset>\r\n    <nz-tab>\r\n        <ng-template #nzTabHeading>\r\n            自动回复\r\n        </ng-template>\r\n        <nz-card [nzBordered]=\"false\">\r\n            <form nz-form (ngSubmit)=\"getMessgeAll()\" [nzLayout]=\"'inline'\">\r\n                <div nz-row [nzGutter]=\"24\">\r\n                    <ng-template #deleteContent>\r\n                        <h2>是否删除关键字{{mesT}}?</h2>\r\n                    </ng-template>\r\n                    <div nz-col [nzSpan]=\"8\" class=\"mb-md\">\r\n                        <div nz-form-item class=\"d-flex\">\r\n                            <div nz-form-control class=\"flex-1\">\r\n                                <nz-input [(ngModel)]=\"mesText\" name=\"no\" [nzSize]=\"'large'\" [nzPlaceHolder]=\"'请输入关键字'\" nzId=\"no\"></nz-input>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div nz-col [nzSpan]=\"8\" class=\"mb-md\" [class.text-right]=\"'true'\">\r\n                        <button nz-button type=\"submit\" [nzType]=\"'primary'\" [nzLoading]=\"loading\" [nzSize]=\"'large'\">查询</button>\r\n                        <button nz-button type=\"reset\" (click)=\"ResetSearch()\" [nzSize]=\"'large'\" class=\"mx-sm\">重置</button>\r\n                        <button nz-button [nzType]=\"'primary'\" (click)=\"createMessage()\" [nzSize]=\"'large'\">\r\n                            <i class=\"anticon anticon-plus\"></i>\r\n                            <span>新建</span>\r\n                        </button>\r\n                    </div>\r\n                </div>\r\n            </form>\r\n            <nz-table #nzTable [nzAjaxData]=\"messagess\" [nzTotal]=\"query.total\" [(nzPageIndex)]=\"query.pageIndex\" [(nzPageSize)]=\"query.pageSize\" [nzLoading]=\"loading\"\r\n                [nzShowSizeChanger]=\"true\" (nzPageIndexChange)=\"getMessgeAll()\" (nzPageSizeChange)=\"getMessgeAll()\">\r\n                <thead nz-thead>\r\n                    <tr>\r\n                        <th nz-th>\r\n                            <span>关键字</span>\r\n                        </th>\r\n                        <th nz-th>\r\n                            <span>回复内容</span>\r\n                        </th>\r\n                        <th nz-th>\r\n                            <span>操作</span>\r\n                        </th>\r\n                    </tr>\r\n                </thead>\r\n                <tbody nz-tbody>\r\n                    <tr nz-tbody-tr *ngFor=\"let message of nzTable.data\">\r\n                        <td nz-td>{{message.keyWord}}</td>\r\n                        <td nz-td>{{message.content}}</td>\r\n                        <td nz-td>\r\n                            <a (click)=\"editMessage(message)\">编辑</a>\r\n                            <span nz-table-divider></span>\r\n                            <a (click)=\"delete(message,deleteContent)\">删除</a>\r\n                        </td>\r\n                    </tr>\r\n                </tbody>\r\n            </nz-table>\r\n        </nz-card>\r\n        <edit-message-modal #editMessageModal (modalSave)=\"getMessgeAll()\"></edit-message-modal>\r\n        <create-message-modal #createMessageModal (modalSave)=\"getMessgeAll()\"></create-message-modal>\r\n    </nz-tab>\r\n    <nz-tab>\r\n        <ng-template #deletesContent>\r\n            <h2>是否删除被关注回复?</h2>\r\n        </ng-template>\r\n        <ng-template #nzTabHeading>\r\n            被关注回复\r\n        </ng-template>\r\n        <form nz-form [formGroup]=\"form\" id=\"frm_create_subscrite\" (ngSubmit)=\"save()\">\r\n            <div nz-form-item nz-row>\r\n                <div nz-form-label nz-col [nzSm]=\"4\">\r\n                    <label for=\"msgType\" nz-form-item-required>消息类型</label>\r\n                </div>\r\n                <div nz-form-control nz-col [nzSm]=\"20\" nzHasFeedback [nzValidateStatus]=\"getFormControl('msgType')\">\r\n                    <nz-radio-group formControlName=\"msgType\" [(ngModel)]=\"subscribes.msgType\" class=\"mb-md\">\r\n                        <label nz-radio [nzValue]=\"o.value\" *ngFor=\"let o of msyTypes\">\r\n                            <span>{{o.text}}</span>\r\n                        </label>\r\n                    </nz-radio-group>\r\n                </div>\r\n            </div>\r\n            <div nz-form-item nz-row>\r\n                <div nz-form-label nz-col [nzSm]=\"4\">\r\n                    <label for=\"content\" nz-form-item-required>回复内容</label>\r\n                </div>\r\n                <div nz-form-control nz-col [nzSm]=\"20\" nzHasFeedback [nzValidateStatus]=\"getFormControl('content')\">\r\n                    <nz-input nzType=\"textarea\" nzRows=\"6\" formControlName=\"content\" [(ngModel)]=\"subscribes.content\" [nzId]=\"'content'\"></nz-input>\r\n                    <div nz-form-explain *ngIf=\"getFormControl('content').dirty&&getFormControl('content').hasError('required')\">内容不能为空</div>\r\n                </div>\r\n            </div>\r\n\r\n            <div nz-form-item nz-row>\r\n                <div nz-form-label nz-col [nzSm]=\"7\">\r\n                    <button nz-button [nzType]=\"'primary'\" [nzSize]=\"'large'\" type=\"submit\" [nzLoading]=\"isConfirmLoading\">\r\n                        保存\r\n                    </button>\r\n                    <button nz-button [nzType]=\"'default'\" [nzSize]=\"'large'\" type=\"button\" (click)=\"deletes(deletesContent)\">\r\n                        删除回复\r\n                    </button>\r\n                </div>\r\n            </div>\r\n        </form>\r\n    </nz-tab>\r\n</nz-tabset>"

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
        _this.msyTypes = [
            { value: 1, text: '文字消息' },
        ];
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
        this.messageService.getAll(this.query.skipCount(), this.query.pageSize, this.mesText).subscribe(function (result) {
            _this.loading = false;
            var status = 0;
            _this.messagess = result.items;
            _this.query.total = result.totalCount;
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
        this.modal.confirm({
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
            if (!result.id) {
                _this.subscribes.msgType = 1;
            }
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
        this.modal.confirm({
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



/***/ }),

/***/ "../../../../../src/app/shared/service-proxies/customer-service/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__retail_cunstomer_service__ = __webpack_require__("../../../../../src/app/shared/service-proxies/customer-service/retail-cunstomer-service.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__retail_cunstomer_service__["a"]; });



/***/ }),

/***/ "../../../../ng2-file-upload/file-upload/file-drop.directive.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var file_uploader_class_1 = __webpack_require__("../../../../ng2-file-upload/file-upload/file-uploader.class.js");
var FileDropDirective = (function () {
    function FileDropDirective(element) {
        this.fileOver = new core_1.EventEmitter();
        this.onFileDrop = new core_1.EventEmitter();
        this.element = element;
    }
    FileDropDirective.prototype.getOptions = function () {
        return this.uploader.options;
    };
    FileDropDirective.prototype.getFilters = function () {
        return {};
    };
    FileDropDirective.prototype.onDrop = function (event) {
        var transfer = this._getTransfer(event);
        if (!transfer) {
            return;
        }
        var options = this.getOptions();
        var filters = this.getFilters();
        this._preventAndStop(event);
        this.uploader.addToQueue(transfer.files, options, filters);
        this.fileOver.emit(false);
        this.onFileDrop.emit(transfer.files);
    };
    FileDropDirective.prototype.onDragOver = function (event) {
        var transfer = this._getTransfer(event);
        if (!this._haveFiles(transfer.types)) {
            return;
        }
        transfer.dropEffect = 'copy';
        this._preventAndStop(event);
        this.fileOver.emit(true);
    };
    FileDropDirective.prototype.onDragLeave = function (event) {
        if (this.element) {
            if (event.currentTarget === this.element[0]) {
                return;
            }
        }
        this._preventAndStop(event);
        this.fileOver.emit(false);
    };
    FileDropDirective.prototype._getTransfer = function (event) {
        return event.dataTransfer ? event.dataTransfer : event.originalEvent.dataTransfer; // jQuery fix;
    };
    FileDropDirective.prototype._preventAndStop = function (event) {
        event.preventDefault();
        event.stopPropagation();
    };
    FileDropDirective.prototype._haveFiles = function (types) {
        if (!types) {
            return false;
        }
        if (types.indexOf) {
            return types.indexOf('Files') !== -1;
        }
        else if (types.contains) {
            return types.contains('Files');
        }
        else {
            return false;
        }
    };
    return FileDropDirective;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", file_uploader_class_1.FileUploader)
], FileDropDirective.prototype, "uploader", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], FileDropDirective.prototype, "fileOver", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], FileDropDirective.prototype, "onFileDrop", void 0);
__decorate([
    core_1.HostListener('drop', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], FileDropDirective.prototype, "onDrop", null);
__decorate([
    core_1.HostListener('dragover', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], FileDropDirective.prototype, "onDragOver", null);
__decorate([
    core_1.HostListener('dragleave', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Object)
], FileDropDirective.prototype, "onDragLeave", null);
FileDropDirective = __decorate([
    core_1.Directive({ selector: '[ng2FileDrop]' }),
    __metadata("design:paramtypes", [core_1.ElementRef])
], FileDropDirective);
exports.FileDropDirective = FileDropDirective;


/***/ }),

/***/ "../../../../ng2-file-upload/file-upload/file-item.class.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var file_like_object_class_1 = __webpack_require__("../../../../ng2-file-upload/file-upload/file-like-object.class.js");
var FileItem = (function () {
    function FileItem(uploader, some, options) {
        this.url = '/';
        this.headers = [];
        this.withCredentials = true;
        this.formData = [];
        this.isReady = false;
        this.isUploading = false;
        this.isUploaded = false;
        this.isSuccess = false;
        this.isCancel = false;
        this.isError = false;
        this.progress = 0;
        this.index = void 0;
        this.uploader = uploader;
        this.some = some;
        this.options = options;
        this.file = new file_like_object_class_1.FileLikeObject(some);
        this._file = some;
        if (uploader.options) {
            this.method = uploader.options.method || 'POST';
            this.alias = uploader.options.itemAlias || 'file';
        }
        this.url = uploader.options.url;
    }
    FileItem.prototype.upload = function () {
        try {
            this.uploader.uploadItem(this);
        }
        catch (e) {
            this.uploader._onCompleteItem(this, '', 0, {});
            this.uploader._onErrorItem(this, '', 0, {});
        }
    };
    FileItem.prototype.cancel = function () {
        this.uploader.cancelItem(this);
    };
    FileItem.prototype.remove = function () {
        this.uploader.removeFromQueue(this);
    };
    FileItem.prototype.onBeforeUpload = function () {
        return void 0;
    };
    FileItem.prototype.onBuildForm = function (form) {
        return { form: form };
    };
    FileItem.prototype.onProgress = function (progress) {
        return { progress: progress };
    };
    FileItem.prototype.onSuccess = function (response, status, headers) {
        return { response: response, status: status, headers: headers };
    };
    FileItem.prototype.onError = function (response, status, headers) {
        return { response: response, status: status, headers: headers };
    };
    FileItem.prototype.onCancel = function (response, status, headers) {
        return { response: response, status: status, headers: headers };
    };
    FileItem.prototype.onComplete = function (response, status, headers) {
        return { response: response, status: status, headers: headers };
    };
    FileItem.prototype._onBeforeUpload = function () {
        this.isReady = true;
        this.isUploading = true;
        this.isUploaded = false;
        this.isSuccess = false;
        this.isCancel = false;
        this.isError = false;
        this.progress = 0;
        this.onBeforeUpload();
    };
    FileItem.prototype._onBuildForm = function (form) {
        this.onBuildForm(form);
    };
    FileItem.prototype._onProgress = function (progress) {
        this.progress = progress;
        this.onProgress(progress);
    };
    FileItem.prototype._onSuccess = function (response, status, headers) {
        this.isReady = false;
        this.isUploading = false;
        this.isUploaded = true;
        this.isSuccess = true;
        this.isCancel = false;
        this.isError = false;
        this.progress = 100;
        this.index = void 0;
        this.onSuccess(response, status, headers);
    };
    FileItem.prototype._onError = function (response, status, headers) {
        this.isReady = false;
        this.isUploading = false;
        this.isUploaded = true;
        this.isSuccess = false;
        this.isCancel = false;
        this.isError = true;
        this.progress = 0;
        this.index = void 0;
        this.onError(response, status, headers);
    };
    FileItem.prototype._onCancel = function (response, status, headers) {
        this.isReady = false;
        this.isUploading = false;
        this.isUploaded = false;
        this.isSuccess = false;
        this.isCancel = true;
        this.isError = false;
        this.progress = 0;
        this.index = void 0;
        this.onCancel(response, status, headers);
    };
    FileItem.prototype._onComplete = function (response, status, headers) {
        this.onComplete(response, status, headers);
        if (this.uploader.options.removeAfterUpload) {
            this.remove();
        }
    };
    FileItem.prototype._prepareToUploading = function () {
        this.index = this.index || ++this.uploader._nextIndex;
        this.isReady = true;
    };
    return FileItem;
}());
exports.FileItem = FileItem;


/***/ }),

/***/ "../../../../ng2-file-upload/file-upload/file-like-object.class.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function isElement(node) {
    return !!(node && (node.nodeName || node.prop && node.attr && node.find));
}
var FileLikeObject = (function () {
    function FileLikeObject(fileOrInput) {
        this.rawFile = fileOrInput;
        var isInput = isElement(fileOrInput);
        var fakePathOrObject = isInput ? fileOrInput.value : fileOrInput;
        var postfix = typeof fakePathOrObject === 'string' ? 'FakePath' : 'Object';
        var method = '_createFrom' + postfix;
        this[method](fakePathOrObject);
    }
    FileLikeObject.prototype._createFromFakePath = function (path) {
        this.lastModifiedDate = void 0;
        this.size = void 0;
        this.type = 'like/' + path.slice(path.lastIndexOf('.') + 1).toLowerCase();
        this.name = path.slice(path.lastIndexOf('/') + path.lastIndexOf('\\') + 2);
    };
    FileLikeObject.prototype._createFromObject = function (object) {
        this.size = object.size;
        this.type = object.type;
        this.name = object.name;
    };
    return FileLikeObject;
}());
exports.FileLikeObject = FileLikeObject;


/***/ }),

/***/ "../../../../ng2-file-upload/file-upload/file-select.directive.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var file_uploader_class_1 = __webpack_require__("../../../../ng2-file-upload/file-upload/file-uploader.class.js");
var FileSelectDirective = (function () {
    function FileSelectDirective(element) {
        this.onFileSelected = new core_1.EventEmitter();
        this.element = element;
    }
    FileSelectDirective.prototype.getOptions = function () {
        return this.uploader.options;
    };
    FileSelectDirective.prototype.getFilters = function () {
        return {};
    };
    FileSelectDirective.prototype.isEmptyAfterSelection = function () {
        return !!this.element.nativeElement.attributes.multiple;
    };
    FileSelectDirective.prototype.onChange = function () {
        var files = this.element.nativeElement.files;
        var options = this.getOptions();
        var filters = this.getFilters();
        this.uploader.addToQueue(files, options, filters);
        this.onFileSelected.emit(files);
        if (this.isEmptyAfterSelection()) {
            this.element.nativeElement.value = '';
        }
    };
    return FileSelectDirective;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", file_uploader_class_1.FileUploader)
], FileSelectDirective.prototype, "uploader", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], FileSelectDirective.prototype, "onFileSelected", void 0);
__decorate([
    core_1.HostListener('change'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Object)
], FileSelectDirective.prototype, "onChange", null);
FileSelectDirective = __decorate([
    core_1.Directive({ selector: '[ng2FileSelect]' }),
    __metadata("design:paramtypes", [core_1.ElementRef])
], FileSelectDirective);
exports.FileSelectDirective = FileSelectDirective;


/***/ }),

/***/ "../../../../ng2-file-upload/file-upload/file-type.class.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var FileType = (function () {
    function FileType() {
    }
    FileType.getMimeClass = function (file) {
        var mimeClass = 'application';
        if (this.mime_psd.indexOf(file.type) !== -1) {
            mimeClass = 'image';
        }
        else if (file.type.match('image.*')) {
            mimeClass = 'image';
        }
        else if (file.type.match('video.*')) {
            mimeClass = 'video';
        }
        else if (file.type.match('audio.*')) {
            mimeClass = 'audio';
        }
        else if (file.type === 'application/pdf') {
            mimeClass = 'pdf';
        }
        else if (this.mime_compress.indexOf(file.type) !== -1) {
            mimeClass = 'compress';
        }
        else if (this.mime_doc.indexOf(file.type) !== -1) {
            mimeClass = 'doc';
        }
        else if (this.mime_xsl.indexOf(file.type) !== -1) {
            mimeClass = 'xls';
        }
        else if (this.mime_ppt.indexOf(file.type) !== -1) {
            mimeClass = 'ppt';
        }
        if (mimeClass === 'application') {
            mimeClass = this.fileTypeDetection(file.name);
        }
        return mimeClass;
    };
    FileType.fileTypeDetection = function (inputFilename) {
        var types = {
            'jpg': 'image',
            'jpeg': 'image',
            'tif': 'image',
            'psd': 'image',
            'bmp': 'image',
            'png': 'image',
            'nef': 'image',
            'tiff': 'image',
            'cr2': 'image',
            'dwg': 'image',
            'cdr': 'image',
            'ai': 'image',
            'indd': 'image',
            'pin': 'image',
            'cdp': 'image',
            'skp': 'image',
            'stp': 'image',
            '3dm': 'image',
            'mp3': 'audio',
            'wav': 'audio',
            'wma': 'audio',
            'mod': 'audio',
            'm4a': 'audio',
            'compress': 'compress',
            'zip': 'compress',
            'rar': 'compress',
            '7z': 'compress',
            'lz': 'compress',
            'z01': 'compress',
            'pdf': 'pdf',
            'xls': 'xls',
            'xlsx': 'xls',
            'ods': 'xls',
            'mp4': 'video',
            'avi': 'video',
            'wmv': 'video',
            'mpg': 'video',
            'mts': 'video',
            'flv': 'video',
            '3gp': 'video',
            'vob': 'video',
            'm4v': 'video',
            'mpeg': 'video',
            'm2ts': 'video',
            'mov': 'video',
            'doc': 'doc',
            'docx': 'doc',
            'eps': 'doc',
            'txt': 'doc',
            'odt': 'doc',
            'rtf': 'doc',
            'ppt': 'ppt',
            'pptx': 'ppt',
            'pps': 'ppt',
            'ppsx': 'ppt',
            'odp': 'ppt'
        };
        var chunks = inputFilename.split('.');
        if (chunks.length < 2) {
            return 'application';
        }
        var extension = chunks[chunks.length - 1].toLowerCase();
        if (types[extension] === undefined) {
            return 'application';
        }
        else {
            return types[extension];
        }
    };
    return FileType;
}());
/*  MS office  */
FileType.mime_doc = [
    'application/msword',
    'application/msword',
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    'application/vnd.openxmlformats-officedocument.wordprocessingml.template',
    'application/vnd.ms-word.document.macroEnabled.12',
    'application/vnd.ms-word.template.macroEnabled.12'
];
FileType.mime_xsl = [
    'application/vnd.ms-excel',
    'application/vnd.ms-excel',
    'application/vnd.ms-excel',
    'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    'application/vnd.openxmlformats-officedocument.spreadsheetml.template',
    'application/vnd.ms-excel.sheet.macroEnabled.12',
    'application/vnd.ms-excel.template.macroEnabled.12',
    'application/vnd.ms-excel.addin.macroEnabled.12',
    'application/vnd.ms-excel.sheet.binary.macroEnabled.12'
];
FileType.mime_ppt = [
    'application/vnd.ms-powerpoint',
    'application/vnd.ms-powerpoint',
    'application/vnd.ms-powerpoint',
    'application/vnd.ms-powerpoint',
    'application/vnd.openxmlformats-officedocument.presentationml.presentation',
    'application/vnd.openxmlformats-officedocument.presentationml.template',
    'application/vnd.openxmlformats-officedocument.presentationml.slideshow',
    'application/vnd.ms-powerpoint.addin.macroEnabled.12',
    'application/vnd.ms-powerpoint.presentation.macroEnabled.12',
    'application/vnd.ms-powerpoint.presentation.macroEnabled.12',
    'application/vnd.ms-powerpoint.slideshow.macroEnabled.12'
];
/* PSD */
FileType.mime_psd = [
    'image/photoshop',
    'image/x-photoshop',
    'image/psd',
    'application/photoshop',
    'application/psd',
    'zz-application/zz-winassoc-psd'
];
/* Compressed files */
FileType.mime_compress = [
    'application/x-gtar',
    'application/x-gcompress',
    'application/compress',
    'application/x-tar',
    'application/x-rar-compressed',
    'application/octet-stream'
];
exports.FileType = FileType;


/***/ }),

/***/ "../../../../ng2-file-upload/file-upload/file-upload.module.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var common_1 = __webpack_require__("../../../common/esm5/common.js");
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var file_drop_directive_1 = __webpack_require__("../../../../ng2-file-upload/file-upload/file-drop.directive.js");
var file_select_directive_1 = __webpack_require__("../../../../ng2-file-upload/file-upload/file-select.directive.js");
var FileUploadModule = (function () {
    function FileUploadModule() {
    }
    return FileUploadModule;
}());
FileUploadModule = __decorate([
    core_1.NgModule({
        imports: [common_1.CommonModule],
        declarations: [file_drop_directive_1.FileDropDirective, file_select_directive_1.FileSelectDirective],
        exports: [file_drop_directive_1.FileDropDirective, file_select_directive_1.FileSelectDirective]
    })
], FileUploadModule);
exports.FileUploadModule = FileUploadModule;


/***/ }),

/***/ "../../../../ng2-file-upload/file-upload/file-uploader.class.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var core_1 = __webpack_require__("../../../core/esm5/core.js");
var file_like_object_class_1 = __webpack_require__("../../../../ng2-file-upload/file-upload/file-like-object.class.js");
var file_item_class_1 = __webpack_require__("../../../../ng2-file-upload/file-upload/file-item.class.js");
var file_type_class_1 = __webpack_require__("../../../../ng2-file-upload/file-upload/file-type.class.js");
function isFile(value) {
    return (File && value instanceof File);
}
var FileUploader = (function () {
    function FileUploader(options) {
        this.isUploading = false;
        this.queue = [];
        this.progress = 0;
        this._nextIndex = 0;
        this.options = {
            autoUpload: false,
            isHTML5: true,
            filters: [],
            removeAfterUpload: false,
            disableMultipart: false,
            formatDataFunction: function (item) { return item._file; },
            formatDataFunctionIsAsync: false
        };
        this.setOptions(options);
        this.response = new core_1.EventEmitter();
    }
    FileUploader.prototype.setOptions = function (options) {
        this.options = Object.assign(this.options, options);
        this.authToken = this.options.authToken;
        this.authTokenHeader = this.options.authTokenHeader || 'Authorization';
        this.autoUpload = this.options.autoUpload;
        this.options.filters.unshift({ name: 'queueLimit', fn: this._queueLimitFilter });
        if (this.options.maxFileSize) {
            this.options.filters.unshift({ name: 'fileSize', fn: this._fileSizeFilter });
        }
        if (this.options.allowedFileType) {
            this.options.filters.unshift({ name: 'fileType', fn: this._fileTypeFilter });
        }
        if (this.options.allowedMimeType) {
            this.options.filters.unshift({ name: 'mimeType', fn: this._mimeTypeFilter });
        }
        for (var i = 0; i < this.queue.length; i++) {
            this.queue[i].url = this.options.url;
        }
    };
    FileUploader.prototype.addToQueue = function (files, options, filters) {
        var _this = this;
        var list = [];
        for (var _i = 0, files_1 = files; _i < files_1.length; _i++) {
            var file = files_1[_i];
            list.push(file);
        }
        var arrayOfFilters = this._getFilters(filters);
        var count = this.queue.length;
        var addedFileItems = [];
        list.map(function (some) {
            if (!options) {
                options = _this.options;
            }
            var temp = new file_like_object_class_1.FileLikeObject(some);
            if (_this._isValidFile(temp, arrayOfFilters, options)) {
                var fileItem = new file_item_class_1.FileItem(_this, some, options);
                addedFileItems.push(fileItem);
                _this.queue.push(fileItem);
                _this._onAfterAddingFile(fileItem);
            }
            else {
                var filter = arrayOfFilters[_this._failFilterIndex];
                _this._onWhenAddingFileFailed(temp, filter, options);
            }
        });
        if (this.queue.length !== count) {
            this._onAfterAddingAll(addedFileItems);
            this.progress = this._getTotalProgress();
        }
        this._render();
        if (this.options.autoUpload) {
            this.uploadAll();
        }
    };
    FileUploader.prototype.removeFromQueue = function (value) {
        var index = this.getIndexOfItem(value);
        var item = this.queue[index];
        if (item.isUploading) {
            item.cancel();
        }
        this.queue.splice(index, 1);
        this.progress = this._getTotalProgress();
    };
    FileUploader.prototype.clearQueue = function () {
        while (this.queue.length) {
            this.queue[0].remove();
        }
        this.progress = 0;
    };
    FileUploader.prototype.uploadItem = function (value) {
        var index = this.getIndexOfItem(value);
        var item = this.queue[index];
        var transport = this.options.isHTML5 ? '_xhrTransport' : '_iframeTransport';
        item._prepareToUploading();
        if (this.isUploading) {
            return;
        }
        this.isUploading = true;
        this[transport](item);
    };
    FileUploader.prototype.cancelItem = function (value) {
        var index = this.getIndexOfItem(value);
        var item = this.queue[index];
        var prop = this.options.isHTML5 ? item._xhr : item._form;
        if (item && item.isUploading) {
            prop.abort();
        }
    };
    FileUploader.prototype.uploadAll = function () {
        var items = this.getNotUploadedItems().filter(function (item) { return !item.isUploading; });
        if (!items.length) {
            return;
        }
        items.map(function (item) { return item._prepareToUploading(); });
        items[0].upload();
    };
    FileUploader.prototype.cancelAll = function () {
        var items = this.getNotUploadedItems();
        items.map(function (item) { return item.cancel(); });
    };
    FileUploader.prototype.isFile = function (value) {
        return isFile(value);
    };
    FileUploader.prototype.isFileLikeObject = function (value) {
        return value instanceof file_like_object_class_1.FileLikeObject;
    };
    FileUploader.prototype.getIndexOfItem = function (value) {
        return typeof value === 'number' ? value : this.queue.indexOf(value);
    };
    FileUploader.prototype.getNotUploadedItems = function () {
        return this.queue.filter(function (item) { return !item.isUploaded; });
    };
    FileUploader.prototype.getReadyItems = function () {
        return this.queue
            .filter(function (item) { return (item.isReady && !item.isUploading); })
            .sort(function (item1, item2) { return item1.index - item2.index; });
    };
    FileUploader.prototype.destroy = function () {
        return void 0;
    };
    FileUploader.prototype.onAfterAddingAll = function (fileItems) {
        return { fileItems: fileItems };
    };
    FileUploader.prototype.onBuildItemForm = function (fileItem, form) {
        return { fileItem: fileItem, form: form };
    };
    FileUploader.prototype.onAfterAddingFile = function (fileItem) {
        return { fileItem: fileItem };
    };
    FileUploader.prototype.onWhenAddingFileFailed = function (item, filter, options) {
        return { item: item, filter: filter, options: options };
    };
    FileUploader.prototype.onBeforeUploadItem = function (fileItem) {
        return { fileItem: fileItem };
    };
    FileUploader.prototype.onProgressItem = function (fileItem, progress) {
        return { fileItem: fileItem, progress: progress };
    };
    FileUploader.prototype.onProgressAll = function (progress) {
        return { progress: progress };
    };
    FileUploader.prototype.onSuccessItem = function (item, response, status, headers) {
        return { item: item, response: response, status: status, headers: headers };
    };
    FileUploader.prototype.onErrorItem = function (item, response, status, headers) {
        return { item: item, response: response, status: status, headers: headers };
    };
    FileUploader.prototype.onCancelItem = function (item, response, status, headers) {
        return { item: item, response: response, status: status, headers: headers };
    };
    FileUploader.prototype.onCompleteItem = function (item, response, status, headers) {
        return { item: item, response: response, status: status, headers: headers };
    };
    FileUploader.prototype.onCompleteAll = function () {
        return void 0;
    };
    FileUploader.prototype._mimeTypeFilter = function (item) {
        return !(this.options.allowedMimeType && this.options.allowedMimeType.indexOf(item.type) === -1);
    };
    FileUploader.prototype._fileSizeFilter = function (item) {
        return !(this.options.maxFileSize && item.size > this.options.maxFileSize);
    };
    FileUploader.prototype._fileTypeFilter = function (item) {
        return !(this.options.allowedFileType &&
            this.options.allowedFileType.indexOf(file_type_class_1.FileType.getMimeClass(item)) === -1);
    };
    FileUploader.prototype._onErrorItem = function (item, response, status, headers) {
        item._onError(response, status, headers);
        this.onErrorItem(item, response, status, headers);
    };
    FileUploader.prototype._onCompleteItem = function (item, response, status, headers) {
        item._onComplete(response, status, headers);
        this.onCompleteItem(item, response, status, headers);
        var nextItem = this.getReadyItems()[0];
        this.isUploading = false;
        if (nextItem) {
            nextItem.upload();
            return;
        }
        this.onCompleteAll();
        this.progress = this._getTotalProgress();
        this._render();
    };
    FileUploader.prototype._headersGetter = function (parsedHeaders) {
        return function (name) {
            if (name) {
                return parsedHeaders[name.toLowerCase()] || void 0;
            }
            return parsedHeaders;
        };
    };
    FileUploader.prototype._xhrTransport = function (item) {
        var _this = this;
        var that = this;
        var xhr = item._xhr = new XMLHttpRequest();
        var sendable;
        this._onBeforeUploadItem(item);
        if (typeof item._file.size !== 'number') {
            throw new TypeError('The file specified is no longer valid');
        }
        if (!this.options.disableMultipart) {
            sendable = new FormData();
            this._onBuildItemForm(item, sendable);
            var appendFile = function () { return sendable.append(item.alias, item._file, item.file.name); };
            if (!this.options.parametersBeforeFiles) {
                appendFile();
            }
            // For AWS, Additional Parameters must come BEFORE Files
            if (this.options.additionalParameter !== undefined) {
                Object.keys(this.options.additionalParameter).forEach(function (key) {
                    var paramVal = _this.options.additionalParameter[key];
                    // Allow an additional parameter to include the filename
                    if (typeof paramVal === 'string' && paramVal.indexOf('{{file_name}}') >= 0) {
                        paramVal = paramVal.replace('{{file_name}}', item.file.name);
                    }
                    sendable.append(key, paramVal);
                });
            }
            if (this.options.parametersBeforeFiles) {
                appendFile();
            }
        }
        else {
            sendable = this.options.formatDataFunction(item);
        }
        xhr.upload.onprogress = function (event) {
            var progress = Math.round(event.lengthComputable ? event.loaded * 100 / event.total : 0);
            _this._onProgressItem(item, progress);
        };
        xhr.onload = function () {
            var headers = _this._parseHeaders(xhr.getAllResponseHeaders());
            var response = _this._transformResponse(xhr.response, headers);
            var gist = _this._isSuccessCode(xhr.status) ? 'Success' : 'Error';
            var method = '_on' + gist + 'Item';
            _this[method](item, response, xhr.status, headers);
            _this._onCompleteItem(item, response, xhr.status, headers);
        };
        xhr.onerror = function () {
            var headers = _this._parseHeaders(xhr.getAllResponseHeaders());
            var response = _this._transformResponse(xhr.response, headers);
            _this._onErrorItem(item, response, xhr.status, headers);
            _this._onCompleteItem(item, response, xhr.status, headers);
        };
        xhr.onabort = function () {
            var headers = _this._parseHeaders(xhr.getAllResponseHeaders());
            var response = _this._transformResponse(xhr.response, headers);
            _this._onCancelItem(item, response, xhr.status, headers);
            _this._onCompleteItem(item, response, xhr.status, headers);
        };
        xhr.open(item.method, item.url, true);
        xhr.withCredentials = item.withCredentials;
        if (this.options.headers) {
            for (var _i = 0, _a = this.options.headers; _i < _a.length; _i++) {
                var header = _a[_i];
                xhr.setRequestHeader(header.name, header.value);
            }
        }
        if (item.headers.length) {
            for (var _b = 0, _c = item.headers; _b < _c.length; _b++) {
                var header = _c[_b];
                xhr.setRequestHeader(header.name, header.value);
            }
        }
        if (this.authToken) {
            xhr.setRequestHeader(this.authTokenHeader, this.authToken);
        }
        xhr.onreadystatechange = function () {
            if (xhr.readyState == XMLHttpRequest.DONE) {
                that.response.emit(xhr.responseText);
            }
        };
        if (this.options.formatDataFunctionIsAsync) {
            sendable.then(function (result) { return xhr.send(JSON.stringify(result)); });
        }
        else {
            xhr.send(sendable);
        }
        this._render();
    };
    FileUploader.prototype._getTotalProgress = function (value) {
        if (value === void 0) { value = 0; }
        if (this.options.removeAfterUpload) {
            return value;
        }
        var notUploaded = this.getNotUploadedItems().length;
        var uploaded = notUploaded ? this.queue.length - notUploaded : this.queue.length;
        var ratio = 100 / this.queue.length;
        var current = value * ratio / 100;
        return Math.round(uploaded * ratio + current);
    };
    FileUploader.prototype._getFilters = function (filters) {
        if (!filters) {
            return this.options.filters;
        }
        if (Array.isArray(filters)) {
            return filters;
        }
        if (typeof filters === 'string') {
            var names_1 = filters.match(/[^\s,]+/g);
            return this.options.filters
                .filter(function (filter) { return names_1.indexOf(filter.name) !== -1; });
        }
        return this.options.filters;
    };
    FileUploader.prototype._render = function () {
        return void 0;
    };
    FileUploader.prototype._queueLimitFilter = function () {
        return this.options.queueLimit === undefined || this.queue.length < this.options.queueLimit;
    };
    FileUploader.prototype._isValidFile = function (file, filters, options) {
        var _this = this;
        this._failFilterIndex = -1;
        return !filters.length ? true : filters.every(function (filter) {
            _this._failFilterIndex++;
            return filter.fn.call(_this, file, options);
        });
    };
    FileUploader.prototype._isSuccessCode = function (status) {
        return (status >= 200 && status < 300) || status === 304;
    };
    FileUploader.prototype._transformResponse = function (response, headers) {
        return response;
    };
    FileUploader.prototype._parseHeaders = function (headers) {
        var parsed = {};
        var key;
        var val;
        var i;
        if (!headers) {
            return parsed;
        }
        headers.split('\n').map(function (line) {
            i = line.indexOf(':');
            key = line.slice(0, i).trim().toLowerCase();
            val = line.slice(i + 1).trim();
            if (key) {
                parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
            }
        });
        return parsed;
    };
    FileUploader.prototype._onWhenAddingFileFailed = function (item, filter, options) {
        this.onWhenAddingFileFailed(item, filter, options);
    };
    FileUploader.prototype._onAfterAddingFile = function (item) {
        this.onAfterAddingFile(item);
    };
    FileUploader.prototype._onAfterAddingAll = function (items) {
        this.onAfterAddingAll(items);
    };
    FileUploader.prototype._onBeforeUploadItem = function (item) {
        item._onBeforeUpload();
        this.onBeforeUploadItem(item);
    };
    FileUploader.prototype._onBuildItemForm = function (item, form) {
        item._onBuildForm(form);
        this.onBuildItemForm(item, form);
    };
    FileUploader.prototype._onProgressItem = function (item, progress) {
        var total = this._getTotalProgress(progress);
        this.progress = total;
        item._onProgress(progress);
        this.onProgressItem(item, progress);
        this.onProgressAll(total);
        this._render();
    };
    FileUploader.prototype._onSuccessItem = function (item, response, status, headers) {
        item._onSuccess(response, status, headers);
        this.onSuccessItem(item, response, status, headers);
    };
    FileUploader.prototype._onCancelItem = function (item, response, status, headers) {
        item._onCancel(response, status, headers);
        this.onCancelItem(item, response, status, headers);
    };
    return FileUploader;
}());
exports.FileUploader = FileUploader;


/***/ }),

/***/ "../../../../ng2-file-upload/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
__export(__webpack_require__("../../../../ng2-file-upload/file-upload/file-select.directive.js"));
__export(__webpack_require__("../../../../ng2-file-upload/file-upload/file-drop.directive.js"));
__export(__webpack_require__("../../../../ng2-file-upload/file-upload/file-uploader.class.js"));
__export(__webpack_require__("../../../../ng2-file-upload/file-upload/file-item.class.js"));
__export(__webpack_require__("../../../../ng2-file-upload/file-upload/file-like-object.class.js"));
var file_upload_module_1 = __webpack_require__("../../../../ng2-file-upload/file-upload/file-upload.module.js");
exports.FileUploadModule = file_upload_module_1.FileUploadModule;


/***/ })

});
//# sourceMappingURL=admin.module.chunk.js.map