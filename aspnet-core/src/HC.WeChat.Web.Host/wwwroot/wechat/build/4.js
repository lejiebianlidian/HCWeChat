webpackJsonp([4],{

/***/ 434:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WeChatHomeModule", function() { return WeChatHomeModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__wechat_home__ = __webpack_require__(447);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var WeChatHomeModule = (function () {
    function WeChatHomeModule() {
    }
    return WeChatHomeModule;
}());
WeChatHomeModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__wechat_home__["a" /* WechatHome */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__wechat_home__["a" /* WechatHome */]),
        ],
    })
], WeChatHomeModule);

//# sourceMappingURL=wechat-home.module.js.map

/***/ }),

/***/ 438:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponentBase; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__kl_model_index__ = __webpack_require__(326);


var AppComponentBase = (function () {
    function AppComponentBase(injector) {
        var platform = injector.get(__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["k" /* Platform */]);
        this.weChat = new __WEBPACK_IMPORTED_MODULE_1__kl_model_index__["d" /* WeChat */]();
        this.weChat.Code = platform.getQueryParam('code');
        this.weChat.State = platform.getQueryParam('state');
    }
    return AppComponentBase;
}());

//# sourceMappingURL=app-component-base.js.map

/***/ }),

/***/ 447:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WechatHome; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component_base__ = __webpack_require__(438);
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



var WechatHome = (function (_super) {
    __extends(WechatHome, _super);
    function WechatHome(injector, navCtrl, navParams) {
        var _this = _super.call(this, injector) || this;
        _this.navCtrl = navCtrl;
        _this.navParams = navParams;
        alert(_this.weChat.Code);
        alert(_this.weChat.State);
        return _this;
    }
    WechatHome.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad WechatHome');
    };
    WechatHome.prototype.goUserBind = function () {
        console.log("goUserBind");
        this.navCtrl.push('user-bind');
    };
    WechatHome.prototype.goUser = function () {
        console.log("goUser");
        this.navCtrl.push('user');
    };
    return WechatHome;
}(__WEBPACK_IMPORTED_MODULE_2__app_component_base__["a" /* AppComponentBase */]));
WechatHome = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])({
        name: 'wechat-home'
    }),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'wechat-home-component',template:/*ion-inline-start:"D:\mygit\HCWeChat\ionic-wechat\src\pages\wechat\home\wechat-home.html"*/'<ion-header hideWhen="wechat">\n\n    <ion-navbar>\n\n        <ion-title>宜宾烟草</ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n<ion-content text-center class="icons-basic-page">\n\n    <h2>欢迎使用宜宾烟草!</h2>\n\n    <ion-row>\n\n        <ion-col>\n\n            <ion-icon name="md-person" color="primary" title="\'个人中心\'"></ion-icon>\n\n            <br/>个人中心</ion-col>\n\n        <ion-col>\n\n            <ion-icon name="md-person-add" color="primary" (click)="goUserBind()" title="\'用户绑定\'"></ion-icon>\n\n            <br/>用户绑定</ion-col>\n\n        <ion-col>\n\n            <ion-icon name="heart" color="danger" title="\'营销活动\'"></ion-icon>\n\n            <br/>营销活动</ion-col>\n\n        <ion-col>\n\n            <ion-icon name="ionitron" color="primary" title="\'活动申请\'"></ion-icon>\n\n            <br/>活动申请</ion-col>\n\n    </ion-row>\n\n</ion-content>'/*ion-inline-end:"D:\mygit\HCWeChat\ionic-wechat\src\pages\wechat\home\wechat-home.html"*/
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Injector */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Injector */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]) === "function" && _c || Object])
], WechatHome);

var _a, _b, _c;
//# sourceMappingURL=wechat-home.js.map

/***/ })

});
//# sourceMappingURL=4.js.map