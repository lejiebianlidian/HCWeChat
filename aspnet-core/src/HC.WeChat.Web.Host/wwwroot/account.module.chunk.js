webpackJsonp(["account.module"],{

/***/ "../../../../../src/app/account/account-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login_component__ = __webpack_require__("../../../../../src/app/account/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__account_component__ = __webpack_require__("../../../../../src/app/account/account.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



//import { RegisterComponent } from './register/register.component';

var routes = [{
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_3__account_component__["a" /* AccountComponent */],
        children: [
            { path: '', redirectTo: 'login', pathMatch: 'full' },
            { path: 'login', component: __WEBPACK_IMPORTED_MODULE_2__login_login_component__["a" /* LoginComponent */] } //,
            //{ path: 'register', component: RegisterComponent }
        ]
    }];
var AccountRoutingModule = /** @class */ (function () {
    function AccountRoutingModule() {
    }
    AccountRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["i" /* RouterModule */].forChild(routes)
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["i" /* RouterModule */]
            ]
        })
    ], AccountRoutingModule);
    return AccountRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/account/account.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "../../../../../src/app/account/account.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__login_login_service__ = __webpack_require__("../../../../../src/app/account/login/login.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_app_component_base__ = __webpack_require__("../../../../../src/app/shared/app-component-base.ts");
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



var AccountComponent = /** @class */ (function (_super) {
    __extends(AccountComponent, _super);
    function AccountComponent(injector, _loginService) {
        var _this = _super.call(this, injector) || this;
        _this._loginService = _loginService;
        _this.currentYear = new Date().getFullYear();
        return _this;
        //this.versionText = this.appSession.application.version + ' [' + this.appSession.application.releaseDate.format('YYYYDDMM') + ']';
    }
    AccountComponent.prototype.showTenantChange = function () {
        return abp.multiTenancy.isEnabled;
    };
    AccountComponent.prototype.ngOnInit = function () {
        //$('body').attr('class', 'login-page');
    };
    AccountComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            template: __webpack_require__("../../../../../src/app/account/account.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injector"],
            __WEBPACK_IMPORTED_MODULE_1__login_login_service__["a" /* LoginService */]])
    ], AccountComponent);
    return AccountComponent;
}(__WEBPACK_IMPORTED_MODULE_2__shared_app_component_base__["a" /* AppComponentBase */]));



/***/ }),

/***/ "../../../../../src/app/account/account.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountModule", function() { return AccountModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__abp_abp_module__ = __webpack_require__("../../../../abp-ng2-module/src/abp.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_service_proxies_service_proxy_module__ = __webpack_require__("../../../../../src/app/shared/service-proxies/service-proxy.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__account_routing_module__ = __webpack_require__("../../../../../src/app/account/account-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__account_component__ = __webpack_require__("../../../../../src/app/account/account.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__login_login_component__ = __webpack_require__("../../../../../src/app/account/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__login_login_service__ = __webpack_require__("../../../../../src/app/account/login/login.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__shared_session_app_session_service__ = __webpack_require__("../../../../../src/app/shared/session/app-session.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__tenant_tenant_component__ = __webpack_require__("../../../../../src/app/account/tenant/tenant.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




//import { ModalModule } from 'ngx-bootstrap';





//import { TenantChangeComponent } from './tenant/tenant-change.component';
//import { TenantChangeModalComponent } from './tenant/tenant-change-modal.component';

//import { RegisterComponent } from './register/register.component';
//import { AccountLanguagesComponent } from './layout/account-languages.component';



var AccountModule = /** @class */ (function () {
    function AccountModule() {
    }
    AccountModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* JsonpModule */],
                __WEBPACK_IMPORTED_MODULE_5__abp_abp_module__["b" /* AbpModule */],
                __WEBPACK_IMPORTED_MODULE_4__shared_shared_module__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_6__shared_service_proxies_service_proxy_module__["a" /* ServiceProxyModule */],
                __WEBPACK_IMPORTED_MODULE_7__account_routing_module__["a" /* AccountRoutingModule */] //,
                //ModalModule.forRoot()
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_8__account_component__["a" /* AccountComponent */],
                //TenantChangeComponent,
                //TenantChangeModalComponent,
                __WEBPACK_IMPORTED_MODULE_9__login_login_component__["a" /* LoginComponent */],
                //RegisterComponent,
                //AccountLanguagesComponent
                __WEBPACK_IMPORTED_MODULE_12__tenant_tenant_component__["a" /* TenantComponent */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_10__login_login_service__["a" /* LoginService */],
                __WEBPACK_IMPORTED_MODULE_11__shared_session_app_session_service__["a" /* AppSessionService */]
            ]
        })
    ], AccountModule);
    return AccountModule;
}());



/***/ }),

/***/ "../../../../../src/app/account/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\r\n    <div #cardBody class=\"abs-center mt-lg width-lg\">\r\n        <span>\r\n            {{l(\"当前租户\")}}:\r\n            <span *ngIf=\"tenancyName\" title=\"{{name}}\">\r\n                <strong>{{tenancyName}}</strong>\r\n            </span>\r\n            <span *ngIf=\"!tenancyName\">{{l(\"不存在\")}}</span> (\r\n            <a href=\"javascript:void();\" (click)=\"showChangeModal()\">{{l(\"切换租户\")}}</a>)\r\n            <tenant-change-modal #tenantChangeModal></tenant-change-modal>\r\n        </span>\r\n        <nz-card [nzTitle]=\"nzTitle\" [nzBordered]=\"false\" class=\"ant-card__primary ant-card__title-img\">\r\n            <ng-template #nzTitle>\r\n                <div class=\"text-center\" style=\"color:white; font-weight:bold;\">\r\n                    <img src=\"./assets/img/logo.svg\" style=\"height:20px;\"> 达州烟草信息化平台</div>\r\n            </ng-template>\r\n            <form nz-form [formGroup]=\"valForm\" #loginForm=\"ngForm\" method=\"post\" id=\"LoginForm\" (ngSubmit)=\"login()\" role=\"form\">\r\n                <div nz-form-item>\r\n                    <div nz-form-control [nzValidateStatus]=\"valForm.controls.userNameOrEmailAddress\">\r\n                        <nz-input formControlName=\"userNameOrEmailAddress\" [nzPlaceHolder]=\"'用户名或邮箱地址'\" [(ngModel)]=\"loginService.authenticateModel.userNameOrEmailAddress\"\r\n                            [nzSize]=\"'large'\">\r\n                            <ng-template #suffix>\r\n                                <i class=\"anticon anticon-user\"></i>\r\n                            </ng-template>\r\n                        </nz-input>\r\n                        <div nz-form-explain *ngIf=\"valForm.controls.userNameOrEmailAddress.dirty&&valForm.controls.userNameOrEmailAddress.hasError('required')\">请输入用户名或邮箱地址</div>\r\n                    </div>\r\n                </div>\r\n                <div nz-form-item>\r\n                    <div nz-form-control [nzValidateStatus]=\"valForm.controls.password\">\r\n                        <nz-input formControlName=\"password\" [(ngModel)]=\"loginService.authenticateModel.password\" [nzPlaceHolder]=\"'密码'\" [nzType]=\"'password'\"\r\n                            [nzSize]=\"'large'\">\r\n                            <ng-template #suffix>\r\n                                <i class=\"anticon anticon-lock\"></i>\r\n                            </ng-template>\r\n                        </nz-input>\r\n                        <div nz-form-explain *ngIf=\"valForm.controls.password.dirty&&valForm.controls.password.hasError('required')\">密码必填</div>\r\n                    </div>\r\n                </div>\r\n                <div nz-form-item nz-row>\r\n                    <div nz-col [nzSpan]=\"12\">\r\n                        <label nz-checkbox [(ngModel)]=\"loginService.rememberMe\" formControlName=\"rememberMe\">\r\n                            <span>记住我</span>\r\n                        </label>\r\n                    </div>\r\n                    <!-- <div nz-col [nzSpan]=\"12\" class=\"text-right\">\r\n                        <a [routerLink]=\"['../register']\" >{{l(\"Register\")}}</a>\r\n                    </div> -->\r\n                </div>\r\n                <div nz-form-item nz-row>\r\n                    <div nz-col [nzSpan]=\"24\">\r\n                        <button nz-button id=\"LoginButton\" type=\"submit\" [disabled]=\"!valForm.valid\" [nzType]=\"'primary'\" [nzSize]=\"'large'\" class=\"ant-btn__block\">\r\n                            <span>登录</span>\r\n                        </button>\r\n                    </div>\r\n                </div>\r\n            </form>\r\n        </nz-card>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/account/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_app_component_base__ = __webpack_require__("../../../../../src/app/shared/app-component-base.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_service__ = __webpack_require__("../../../../../src/app/account/login/login.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__tenant_tenant_component__ = __webpack_require__("../../../../../src/app/account/tenant/tenant.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_abp_ng2_module_src_session_abp_session_service__ = __webpack_require__("../../../../abp-ng2-module/src/session/abp-session.service.ts");
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







var LoginComponent = /** @class */ (function (_super) {
    __extends(LoginComponent, _super);
    function LoginComponent(injector, loginService, fb, router, sessionServer) {
        var _this = _super.call(this, injector) || this;
        _this.loginService = loginService;
        _this.router = router;
        _this.sessionServer = sessionServer;
        _this.submitting = false;
        //租户
        _this.tenancyName = '';
        _this.name = '';
        loginService.rememberMe = true;
        _this.valForm = fb.group({
            userNameOrEmailAddress: [null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required],
            password: [null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required],
            rememberMe: [null]
        });
        return _this;
    }
    LoginComponent.prototype.login = function () {
        var _this = this;
        // tslint:disable-next-line:forin
        for (var i in this.valForm.controls) {
            this.valForm.controls[i].markAsDirty();
        }
        if (this.valForm.valid) {
            this.submitting = true;
            this.loginService.authenticate(function () {
                _this.submitting = false;
            });
        }
    };
    Object.defineProperty(LoginComponent.prototype, "multiTenancySideIsTeanant", {
        get: function () {
            return this.sessionServer.tenantId > 0;
        },
        enumerable: true,
        configurable: true
    });
    LoginComponent.prototype.ngOnInit = function () {
        if (this.appSession.tenant) {
            this.tenancyName = this.appSession.tenant.tenancyName;
            this.name = this.appSession.tenant.name;
        }
    };
    LoginComponent.prototype.showChangeModal = function () {
        this.tenantChangeModal.show(this.tenancyName);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewChild"])('cardBody'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_core__["ElementRef"])
    ], LoginComponent.prototype, "cardBody", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewChild"])('tenantChangeModal'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_5__tenant_tenant_component__["a" /* TenantComponent */])
    ], LoginComponent.prototype, "tenantChangeModal", void 0);
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'app-pages-login',
            template: __webpack_require__("../../../../../src/app/account/login/login.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injector"], __WEBPACK_IMPORTED_MODULE_4__login_service__["a" /* LoginService */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormBuilder"], __WEBPACK_IMPORTED_MODULE_0__angular_router__["h" /* Router */], __WEBPACK_IMPORTED_MODULE_6_abp_ng2_module_src_session_abp_session_service__["a" /* AbpSessionService */]])
    ], LoginComponent);
    return LoginComponent;
}(__WEBPACK_IMPORTED_MODULE_3__shared_app_component_base__["a" /* AppComponentBase */]));



/***/ }),

/***/ "../../../../../src/app/account/login/login.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_service_proxies_service_proxies__ = __webpack_require__("../../../../../src/app/shared/service-proxies/service-proxies.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_helper_UrlHelper__ = __webpack_require__("../../../../../src/app/shared/helper/UrlHelper.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_AppConsts__ = __webpack_require__("../../../../../src/app/shared/AppConsts.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__abp_message_message_service__ = __webpack_require__("../../../../abp-ng2-module/src/message/message.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__abp_log_log_service__ = __webpack_require__("../../../../abp-ng2-module/src/log/log.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__abp_auth_token_service__ = __webpack_require__("../../../../abp-ng2-module/src/auth/token.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__abp_utils_utils_service__ = __webpack_require__("../../../../abp-ng2-module/src/utils/utils.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var LoginService = /** @class */ (function () {
    function LoginService(_tokenAuthService, _router, _utilsService, _messageService, _tokenService, _logService) {
        this._tokenAuthService = _tokenAuthService;
        this._router = _router;
        this._utilsService = _utilsService;
        this._messageService = _messageService;
        this._tokenService = _tokenService;
        this._logService = _logService;
        this.clear();
    }
    LoginService.prototype.authenticate = function (finallyCallback) {
        var _this = this;
        finallyCallback = finallyCallback || (function () { });
        this._tokenAuthService
            .authenticate(this.authenticateModel)
            .finally(finallyCallback)
            .subscribe(function (result) {
            _this.processAuthenticateResult(result);
        });
    };
    LoginService.prototype.processAuthenticateResult = function (authenticateResult) {
        this.authenticateResult = authenticateResult;
        if (authenticateResult.accessToken) {
            //Successfully logged in
            this.login(authenticateResult.accessToken, authenticateResult.encryptedAccessToken, authenticateResult.expireInSeconds, this.rememberMe);
        }
        else {
            //Unexpected result!
            this._logService.warn('Unexpected authenticateResult!');
            this._router.navigate(['account/login']);
        }
    };
    LoginService.prototype.login = function (accessToken, encryptedAccessToken, expireInSeconds, rememberMe) {
        var tokenExpireDate = rememberMe ? (new Date(new Date().getTime() + 1000 * expireInSeconds)) : undefined;
        this._tokenService.setToken(accessToken, tokenExpireDate);
        this._utilsService.setCookieValue(__WEBPACK_IMPORTED_MODULE_4__shared_AppConsts__["a" /* AppConsts */].authorization.encrptedAuthTokenName, encryptedAccessToken, tokenExpireDate, abp.appPath);
        var initialUrl = __WEBPACK_IMPORTED_MODULE_3__shared_helper_UrlHelper__["a" /* UrlHelper */].initialUrl;
        //添加#号处理
        if (initialUrl.indexOf('/login') > 0 || initialUrl == __WEBPACK_IMPORTED_MODULE_4__shared_AppConsts__["a" /* AppConsts */].appBaseUrl + '/#/') {
            initialUrl = __WEBPACK_IMPORTED_MODULE_4__shared_AppConsts__["a" /* AppConsts */].appBaseUrl;
        }
        location.href = initialUrl;
    };
    LoginService.prototype.clear = function () {
        this.authenticateModel = new __WEBPACK_IMPORTED_MODULE_2__shared_service_proxies_service_proxies__["e" /* AuthenticateModel */]();
        this.authenticateModel.rememberClient = false;
        this.authenticateResult = null;
        this.rememberMe = false;
    };
    LoginService.twoFactorRememberClientTokenName = 'TwoFactorRememberClientToken';
    LoginService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__shared_service_proxies_service_proxies__["v" /* TokenAuthServiceProxy */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["h" /* Router */],
            __WEBPACK_IMPORTED_MODULE_8__abp_utils_utils_service__["a" /* UtilsService */],
            __WEBPACK_IMPORTED_MODULE_5__abp_message_message_service__["a" /* MessageService */],
            __WEBPACK_IMPORTED_MODULE_7__abp_auth_token_service__["a" /* TokenService */],
            __WEBPACK_IMPORTED_MODULE_6__abp_log_log_service__["a" /* LogService */]])
    ], LoginService);
    return LoginService;
}());



/***/ }),

/***/ "../../../../../src/app/account/tenant/tenant.component.html":
/***/ (function(module, exports) {

module.exports = "<form *ngIf=\"modalVisible\" #changeTenantForm=\"ngForm\" novalidate (ngSubmit)=\"save()\">\r\n    <nz-modal [nzVisible]=\"modalVisible\" [nzTitle]=\"'选择租户'\" [nzConfirmLoading]=\"loading\" [nzContent]=\"modalContent\" [nzFooter]=\"modalFooter\"\r\n        (nzOnCancel)=\"handleCancel($event)\">\r\n        <ng-template #modalContent>\r\n            <div nz-form-item nz-row>\r\n                <!-- <div nz-form-label nz-col [nzSm]=\"4\">\r\n                    <label for=\"description\" nz-form-item-required>角色描述</label>\r\n                </div> -->\r\n                <div nz-form-control nz-col [nzSm]=\"20\" nzHasFeedback>\r\n                    <nz-input  type=\"text\" name=\"TenancyName\" class=\"form-control\" nzPlaceHolder=\"请输入租户名\"  [(ngModel)]=\"tenancyName\" maxlength=\"64\"></nz-input>\r\n                </div>\r\n            </div>\r\n        </ng-template>\r\n        <ng-template #modalFooter>\r\n            <button nz-button [nzType]=\"'default'\" [nzSize]=\"'large'\" type=\"button\" (click)=\"handleCancel($event)\">\r\n                    {{l(\"取消\")}}\r\n                </button>\r\n                <button nz-button [nzType]=\"'primary'\" [nzSize]=\"'large'\" type=\"submit\" [nzLoading]=\"isConfirmLoading\">\r\n                    {{l(\"保存\")}}\r\n                </button>\r\n        </ng-template>\r\n    </nz-modal>\r\n</form>\r\n"

/***/ }),

/***/ "../../../../../src/app/account/tenant/tenant.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TenantComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_app_component_base__ = __webpack_require__("../../../../../src/app/shared/app-component-base.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_service_proxies_service_proxies__ = __webpack_require__("../../../../../src/app/shared/service-proxies/service-proxies.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_AppEnums__ = __webpack_require__("../../../../../src/app/shared/AppEnums.ts");
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
    function TenantComponent(injector, accountService) {
        var _this = _super.call(this, injector) || this;
        _this.accountService = accountService;
        _this.tenancyName = '';
        _this.modalVisible = false;
        _this.saving = false;
        _this.handleCancel = function (e) {
            _this.modalVisible = false;
        };
        _this.tenancyName = '';
        return _this;
    }
    /**
     * 显示模态框
     * @param tenancyName 租户名字
     */
    TenantComponent.prototype.show = function (tenancyName) {
        this.tenancyName = tenancyName;
        this.modalVisible = true;
        // $(this.tenancyNameInput.nativeElement).focus().select();
    };
    /**
     * 关闭模态框
     */
    TenantComponent.prototype.close = function () {
        this.modalVisible = false;
    };
    /**
     * 保存当前租户
     */
    TenantComponent.prototype.save = function () {
        var _this = this;
        if (!this.tenancyName) {
            abp.multiTenancy.setTenantIdCookie(undefined);
            this.handleCancel();
            location.reload();
            return;
        }
        var input = new __WEBPACK_IMPORTED_MODULE_2__shared_service_proxies_service_proxies__["l" /* IsTenantAvailableInput */]();
        input.tenancyName = this.tenancyName;
        this.saving = true;
        this.accountService.isTenantAvailable(input)
            .finally(function () { _this.saving = false; })
            .subscribe(function (result) {
            switch (result.state) {
                case __WEBPACK_IMPORTED_MODULE_3__shared_AppEnums__["a" /* AppTenantAvailabilityState */].Available:
                    abp.multiTenancy.setTenantIdCookie(result.tenantId);
                    _this.handleCancel();
                    location.reload();
                    return;
                case __WEBPACK_IMPORTED_MODULE_3__shared_AppEnums__["a" /* AppTenantAvailabilityState */].InActive:
                    _this.message.warn(_this.l('TenantIsNotActive', _this.tenancyName));
                    break;
                case __WEBPACK_IMPORTED_MODULE_3__shared_AppEnums__["a" /* AppTenantAvailabilityState */].NotFound:
                    _this.message.warn(_this.l('ThereIsNoTenantDefinedWithName{0}', _this.tenancyName));
                    break;
            }
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('tenancyNameInput'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], TenantComponent.prototype, "tenancyNameInput", void 0);
    TenantComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'tenant-change-modal',
            template: __webpack_require__("../../../../../src/app/account/tenant/tenant.component.html"),
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injector"], __WEBPACK_IMPORTED_MODULE_2__shared_service_proxies_service_proxies__["b" /* AccountServiceProxy */]])
    ], TenantComponent);
    return TenantComponent;
}(__WEBPACK_IMPORTED_MODULE_1__shared_app_component_base__["a" /* AppComponentBase */]));



/***/ }),

/***/ "../../../../../src/app/shared/AppEnums.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppTenantAvailabilityState; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_service_proxies_service_proxies__ = __webpack_require__("../../../../../src/app/shared/service-proxies/service-proxies.ts");

var AppTenantAvailabilityState = /** @class */ (function () {
    function AppTenantAvailabilityState() {
    }
    AppTenantAvailabilityState.Available = __WEBPACK_IMPORTED_MODULE_0__shared_service_proxies_service_proxies__["m" /* IsTenantAvailableOutputState */]._1;
    AppTenantAvailabilityState.InActive = __WEBPACK_IMPORTED_MODULE_0__shared_service_proxies_service_proxies__["m" /* IsTenantAvailableOutputState */]._2;
    AppTenantAvailabilityState.NotFound = __WEBPACK_IMPORTED_MODULE_0__shared_service_proxies_service_proxies__["m" /* IsTenantAvailableOutputState */]._3;
    return AppTenantAvailabilityState;
}());



/***/ }),

/***/ "../../../../../src/app/shared/helper/UrlHelper.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UrlHelper; });
var UrlHelper = /** @class */ (function () {
    function UrlHelper() {
    }
    UrlHelper.getQueryParameters = function () {
        return document.location.search.replace(/(^\?)/, '').split("&").map(function (n) { return n = n.split("="), this[n[0]] = n[1], this; }.bind({}))[0];
    };
    /**
     * The URL requested, before initial routing.
     */
    UrlHelper.initialUrl = location.href;
    return UrlHelper;
}());



/***/ })

});
//# sourceMappingURL=account.module.chunk.js.map