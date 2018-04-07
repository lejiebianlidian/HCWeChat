webpackJsonp(["home.module"],{

/***/ "../../../../../src/app/home/home-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__layout_default_default_component__ = __webpack_require__("../../../../../src/app/layout/default/default.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__index_component__ = __webpack_require__("../../../../../src/app/home/index.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_auth_auth_route_guard__ = __webpack_require__("../../../../../src/app/shared/auth/auth-route-guard.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


// layout


//权限判断

var routes = [{
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__layout_default_default_component__["a" /* LayoutDefaultComponent */],
        children: [
            { path: '', redirectTo: 'index', pathMatch: 'full' },
            { path: 'index', component: __WEBPACK_IMPORTED_MODULE_3__index_component__["a" /* IndexComponent */], data: { translate: 'index' }, canActivate: [__WEBPACK_IMPORTED_MODULE_4__shared_auth_auth_route_guard__["a" /* AppRouteGuard */]] },
        ]
    }];
var HomeRoutingModule = /** @class */ (function () {
    function HomeRoutingModule() {
    }
    HomeRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["i" /* RouterModule */].forChild(routes)
                //RouterModule.forRoot(routes, { useHash: environment.useHash })
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["i" /* RouterModule */]]
        })
    ], HomeRoutingModule);
    return HomeRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/home/home.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function() { return HomeModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__layout_layout_module__ = __webpack_require__("../../../../../src/app/layout/layout.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_routing_module__ = __webpack_require__("../../../../../src/app/home/home-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__index_component__ = __webpack_require__("../../../../../src/app/home/index.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_auth_auth_route_guard__ = __webpack_require__("../../../../../src/app/shared/auth/auth-route-guard.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





//权限判断

var HomeModule = /** @class */ (function () {
    function HomeModule() {
    }
    HomeModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__shared_shared_module__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_2__layout_layout_module__["a" /* LayoutModule */],
                __WEBPACK_IMPORTED_MODULE_3__home_routing_module__["a" /* HomeRoutingModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_4__index_component__["a" /* IndexComponent */]],
            providers: [__WEBPACK_IMPORTED_MODULE_5__shared_auth_auth_route_guard__["a" /* AppRouteGuard */]]
        })
    ], HomeModule);
    return HomeModule;
}());



/***/ }),

/***/ "../../../../../src/app/home/index.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content__title\">\r\n    <h1>\r\n        {{ 'homeindex.title' | translate }}\r\n        <small class=\"text-sm hidden-xs\">{{ 'homeindex.welcome' | translate }}</small>\r\n    </h1>\r\n</div>\r\n<div class=\"quick-menu\" [class.show]=\"quickMenu\" (click)=\"quickMenu=!quickMenu\">\r\n    <div class=\"quick-menu-inner\">\r\n        <div class=\"settings-ctrl\">\r\n            <i class=\"anticon anticon-question-circle-o\"></i>\r\n        </div>\r\n        <div class=\"list-group list-group-flush\">\r\n            <a (click)=\"msg.info('item 1')\" class=\"list-group-item\">How do i create account?</a>\r\n            <a (click)=\"msg.info('item 2')\" class=\"list-group-item\">How do i create account?</a>\r\n            <a (click)=\"msg.info('item 3')\" class=\"list-group-item\">How do i create account?</a>\r\n            <a (click)=\"msg.info('item 4')\" class=\"list-group-item\">How do i create account?</a>\r\n            <a (click)=\"msg.info('item 5')\" class=\"list-group-item\">How do i create account?</a>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div nz-row nzGutter=\"16\">\r\n    <div nz-col nzXs=\"24\" nzSm=\"12\" nzMd=\"6\" class=\"mb-md\">\r\n        <div nz-row nzType=\"flex\" nzAlign=\"middle\" class=\"bg-primary rounded-md\">\r\n            <div nz-col nzSpan=\"12\" class=\"p-md text-white\">\r\n                <div class=\"h2 mt0\">123,456 单</div>\r\n                <p class=\"text-nowrap\">活动申请单总数</p>\r\n            </div>\r\n            <div nz-col nzSpan=\"12\">\r\n                <mini-bar height=\"35\" color=\"#fff\" borderWidth=\"3\" [padding]=\"[36, 30, 30, 30]\" [data]=\"webSite\"></mini-bar>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div nz-col nzXs=\"24\" nzSm=\"12\" nzMd=\"6\" class=\"mb-md\">\r\n        <div nz-row nzType=\"flex\" nzAlign=\"middle\" class=\"bg-success rounded-md\">\r\n            <div nz-col nzSpan=\"12\" class=\"p-md text-white\">\r\n                <div class=\"h2 mt0\">12,234,567 条</div>\r\n                <p class=\"text-nowrap\">申请商品总数</p>\r\n            </div>\r\n            <div nz-col nzSpan=\"12\">\r\n                <mini-bar height=\"35\" color=\"#fff\" borderWidth=\"3\" [padding]=\"[36, 30, 30, 30]\" [data]=\"webSite\"></mini-bar>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div nz-col nzXs=\"24\" nzSm=\"12\" nzMd=\"6\" class=\"mb-md\">\r\n        <div nz-row nzType=\"flex\" nzAlign=\"middle\" class=\"bg-orange rounded-md\">\r\n            <div nz-col nzSpan=\"12\" class=\"p-md text-white\">\r\n                <div class=\"h2 mt0\">458,778 单</div>\r\n                <p class=\"text-nowrap\">待审批申请单</p>\r\n            </div>\r\n            <div nz-col nzSpan=\"12\">\r\n                <mini-bar height=\"35\" color=\"#fff\" borderWidth=\"3\" [padding]=\"[36, 30, 30, 30]\" [data]=\"webSite\"></mini-bar>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div nz-col nzXs=\"24\" nzSm=\"12\" nzMd=\"6\" class=\"mb-md\">\r\n        <div nz-row nzType=\"flex\" nzAlign=\"middle\" class=\"bg-pink rounded-md\">\r\n            <div nz-col nzSpan=\"12\" class=\"p-md text-white\">\r\n                <div class=\"h2 mt0\">456 人</div>\r\n                <p class=\"text-nowrap\">微信关注用户数</p>\r\n            </div>\r\n            <div nz-col nzSpan=\"12\">\r\n                <mini-bar height=\"35\" color=\"#fff\" borderWidth=\"3\" [padding]=\"[36, 30, 30, 30]\" [data]=\"webSite\"></mini-bar>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div nz-row nzGutter=\"16\">\r\n    <div nz-col nzXs=\"24\" nzMd=\"12\">\r\n        <nz-card [nzBordered]=\"false\">\r\n            <ng-template #title>\r\n                近12个月申请单数\r\n            </ng-template>\r\n            <bar height=\"275\" [data]=\"salesData\"></bar>\r\n        </nz-card>\r\n    </div>\r\n    <div nz-col nzXs=\"24\" nzMd=\"12\">\r\n        <nz-card [nzTitle]=\"nzTitle1\" [nzBordered]=\"false\">\r\n            <ng-template #nzTitle1>\r\n                24小时网站访问量和活动申请单笔数\r\n            </ng-template>\r\n            <timeline [data]=\"offlineChartData\" [height]=\"239\" [padding]=\"[0, 0, 0, 0]\" [titleMap]=\"{ y1: '网站访问量', y2: '申请单笔数' }\"></timeline>\r\n        </nz-card>\r\n    </div>\r\n</div>\r\n<div nz-row nzGutter=\"16\">\r\n    <div nz-col nzXs=\"24\" nzMd=\"6\">\r\n        <nz-card [nzBordered]=\"false\"  [nzTitle]=\"nzTitle2\" class=\"ant-card__img\">\r\n            <ng-template #nzTitle2>\r\n                宜宾微信公众号\r\n            </ng-template>\r\n            <img class=\"img\" src=\"./assets/img/weixin.jpg\">\r\n        </nz-card>\r\n    </div>\r\n    <div nz-col nzXs=\"24\" nzMd=\"18\">\r\n        <nz-card [nzTitle]=\"nzTitle3\" [nzBordered]=\"false\" nzNoPadding>\r\n            <ng-template #nzTitle3>\r\n                最新用户建议反馈\r\n            </ng-template>\r\n            <div nz-row [nzType]=\"'flex'\" [nzJustify]=\"'center'\" [nzAlign]=\"'middle'\" class=\"py-sm bg-grey-lighter-h point\" *ngFor=\"let item of todoData\">\r\n                <div nz-col [nzSpan]=\"4\" class=\"text-center\">\r\n                    <nz-avatar [nzSrc]=\"'./assets/img/' + item.avatar + '.png'\" [nzSize]=\"'large'\"></nz-avatar>\r\n                </div>\r\n                <div nz-col [nzSpan]=\"20\">\r\n                    <strong>{{item.name}}</strong>\r\n                    <p>{{item.content}}</p>\r\n                </div>\r\n            </div>\r\n        </nz-card>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/home/index.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IndexComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ng_zorro_antd__ = __webpack_require__("../../../../ng-zorro-antd/esm5/antd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__delon_theme__ = __webpack_require__("../../../../@delon/theme/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var IndexComponent = /** @class */ (function () {
    function IndexComponent(http, msg) {
        this.http = http;
        this.msg = msg;
        this.todoData = [
            { completed: true, avatar: '1', name: '苏先生', content: "\u8BF7\u544A\u8BC9\u6211\uFF0C\u6211\u5E94\u8BE5\u8BF4\u70B9\u4EC0\u4E48\u597D\uFF1F" },
            { completed: false, avatar: '2', name: 'はなさき', content: "\u30CF\u30EB\u30AB\u30BD\u30E9\u30C8\u30AD\u30D8\u30C0\u30C4\u30D2\u30AB\u30EA" },
            { completed: false, avatar: '3', name: 'cipchk', content: "this world was never meant for one as beautiful as you." },
            { completed: false, avatar: '4', name: 'Kent', content: "my heart is beating with hers" },
            { completed: false, avatar: '5', name: 'Are you', content: "They always said that I love beautiful girl than my friends" },
            { completed: false, avatar: '6', name: 'Forever', content: "Walking through green fields \uFF0Csunshine in my eyes." }
        ];
        this.quickMenu = false;
        this.webSite = [];
        this.salesData = [];
        this.offlineChartData = [];
    }
    IndexComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.http.get('/chart').subscribe(function (res) {
            _this.webSite = res.visitData.slice(0, 10);
            _this.salesData = res.salesData;
            _this.offlineChartData = res.offlineChartData;
        });
    };
    IndexComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'app-home-index',
            template: __webpack_require__("../../../../../src/app/home/index.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__delon_theme__["l" /* _HttpClient */], __WEBPACK_IMPORTED_MODULE_0_ng_zorro_antd__["NzMessageService"]])
    ], IndexComponent);
    return IndexComponent;
}());



/***/ })

});
//# sourceMappingURL=home.module.chunk.js.map