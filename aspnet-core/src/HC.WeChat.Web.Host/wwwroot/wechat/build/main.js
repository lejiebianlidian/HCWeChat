webpackJsonp([0],{

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HttpClient; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__loading_service__ = __webpack_require__(105);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HttpClient = (function () {
    function HttpClient(http, loading) {
        this.http = http;
        this.loading = loading;
    }
    HttpClient.prototype.get = function (url, params, showLoading) {
        return this._request(url + this._formatUrl(params), __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestMethod */].Get, null, showLoading);
    };
    HttpClient.prototype.post = function (url, body, showLoading) {
        return this._request(url, __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestMethod */].Post, body, showLoading);
    };
    HttpClient.prototype.postEx = function (url, params, showLoading) {
        return this._request(url + this._formatUrl(params), __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestMethod */].Post, null, showLoading);
    };
    HttpClient.prototype._request = function (url, method, body, showLoading) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["f" /* RequestOptions */]();
        options.headers = headers;
        options.url = url;
        options.method = method;
        options.body = body;
        options.withCredentials = true;
        var request = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Request */](options);
        if (showLoading !== false)
            this.loading.show();
        return this.http.request(request)
            .finally(function () {
            if (showLoading !== false)
                _this.loading.hide();
        });
    };
    /**
     * 将字典转为QueryString
     */
    HttpClient.prototype._formatUrl = function (params) {
        if (!params)
            return '';
        var fegment = [];
        for (var k in params) {
            var v = params[k];
            if (v instanceof Date) {
                v = __WEBPACK_IMPORTED_MODULE_3_moment__(v).format('YYYY-MM-DD HH:mm:SS');
            }
            fegment.push(k + "=" + v);
        }
        return '?' + fegment.join('&');
    };
    /**
    * 通用异常处理
    */
    HttpClient.prototype.handleError = function (error) {
        // In a real world app, we might use a remote logging infrastructure
        var errMsg;
        if (error instanceof __WEBPACK_IMPORTED_MODULE_1__angular_http__["g" /* Response */]) {
            var body = error.json() || '';
            var err = body.error || JSON.stringify(body);
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error ? error.toString() : '服务器发生异常，请稍后再试';
        }
        console.error(errMsg);
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(errMsg);
    };
    return HttpClient;
}());
HttpClient = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_4__loading_service__["a" /* LoadingService */]])
], HttpClient);

//# sourceMappingURL=httpclient.js.map

/***/ }),

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoadingService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoadingService = (function () {
    function LoadingService(loadingCtrl) {
        this.loadingCtrl = loadingCtrl;
        this.isShow = false;
    }
    LoadingService.prototype.show = function () {
        if (this.isShow)
            return;
        this.loader = this.loadingCtrl.create({
            content: '请稍等...'
        });
        this.isShow = true;
        this.loader.present();
    };
    LoadingService.prototype.hide = function () {
        if (!this.isShow)
            return;
        this.isShow = false;
        this.loader.dismiss();
    };
    return LoadingService;
}());
LoadingService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* LoadingController */]])
], LoadingService);

//# sourceMappingURL=loading.service.js.map

/***/ }),

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserBindComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_shared_app_component_base__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_core_index__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__user_user_component__ = __webpack_require__(54);
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





var UserBindComponent = (function (_super) {
    __extends(UserBindComponent, _super);
    function UserBindComponent(injector, platform, navCtrl) {
        var _this = _super.call(this, injector) || this;
        _this.navCtrl = navCtrl;
        _this.pet = 'retailer';
        _this.isAndroid = false;
        _this.isAndroid = platform.is('android');
        _this.retailer = new __WEBPACK_IMPORTED_MODULE_3__app_core_index__["d" /* Retailer */]();
        _this.retailer.Name = '刘洁';
        _this.retailer.LicenseKey = '1510250201010041';
        _this.employee = new __WEBPACK_IMPORTED_MODULE_3__app_core_index__["b" /* Employee */]();
        _this.employee.Name = '李钢';
        _this.employee.Code = 'YB0001';
        return _this;
    }
    UserBindComponent.prototype.bind = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__user_user_component__["a" /* UserComponent */]);
    };
    return UserBindComponent;
}(__WEBPACK_IMPORTED_MODULE_2__app_shared_app_component_base__["a" /* AppComponentBase */]));
UserBindComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'user-bind-component',template:/*ion-inline-start:"D:\mygit\HCWeChat\ng-wechat\src\pages\marketing\user-bind\user-bind.component.html"*/'<ion-header>\n\n  <ion-navbar no-border-bottom>\n\n    <ion-title>\n\n      用户绑定\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content class="userbind-content">\n\n  <ion-toolbar no-border-top>\n\n    <ion-segment [(ngModel)]="pet">\n\n      <ion-segment-button value="retailer">\n\n        零售客户\n\n      </ion-segment-button>\n\n      <ion-segment-button value="marker">\n\n        客户经理\n\n      </ion-segment-button>\n\n    </ion-segment>\n\n  </ion-toolbar>\n\n  <div [ngSwitch]="pet">\n\n    <ion-list *ngSwitchCase="\'retailer\'">\n\n      <ion-item>\n\n        <ion-label fixed>姓名</ion-label>\n\n        <ion-input type="text" [(ngModel)]="retailer.Name" value=""></ion-input>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label fixed>专卖证号</ion-label>\n\n        <ion-input type="text" [(ngModel)]="retailer.LicenseKey" value=""></ion-input>\n\n      </ion-item>\n\n    </ion-list>\n\n    <ion-list *ngSwitchCase="\'marker\'">\n\n        <ion-item>\n\n            <ion-label fixed>姓名</ion-label>\n\n            <ion-input type="text" [(ngModel)]="employee.Name" value=""></ion-input>\n\n          </ion-item>\n\n          <ion-item>\n\n            <ion-label fixed>员工编号</ion-label>\n\n            <ion-input type="text" [(ngModel)]="employee.Code" value=""></ion-input>\n\n          </ion-item>\n\n    </ion-list>\n\n    <div padding>\n\n        <button ion-button color="primary" (click)="bind()" block>绑定</button>\n\n      </div>\n\n  </div>\n\n</ion-content>'/*ion-inline-end:"D:\mygit\HCWeChat\ng-wechat\src\pages\marketing\user-bind\user-bind.component.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Injector */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* Platform */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */]])
], UserBindComponent);

//# sourceMappingURL=user-bind.component.js.map

/***/ }),

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponentBase; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_index__ = __webpack_require__(43);


var AppComponentBase = (function () {
    function AppComponentBase(injector) {
        var platform = injector.get(__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["o" /* Platform */]);
        this.weChat = new __WEBPACK_IMPORTED_MODULE_1__core_index__["f" /* WeChat */]();
        this.weChat.Code = platform.getQueryParam('code');
        this.weChat.State = platform.getQueryParam('state');
    }
    return AppComponentBase;
}());

//# sourceMappingURL=app-component-base.js.map

/***/ }),

/***/ 114:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 114;

/***/ }),

/***/ 157:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 157;

/***/ }),

/***/ 325:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Logger; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Logger = (function () {
    function Logger(toastCtrl) {
        this.toastCtrl = toastCtrl;
    }
    /**
     * 显示通知
     * @param msg 显示的内容
     * @param extro 将被保存到日志
     */
    Logger.prototype.info = function (msg, extro) {
        this._show(msg, 'secondary');
        this.save(extro);
    };
    /**
     * 显示警告
     * @param msg 警告的内容
     * @param extro 将被保存到日志
     */
    Logger.prototype.warn = function (msg, extro) {
        this._show(msg, 'danger');
        this.save(extro);
    };
    /**
     * 显示错误
     * @param msg 错误的内容
     * @param extro 将被保存到日志
     */
    Logger.prototype.error = function (msg, extro) {
        this._show(msg, 'danger');
        this.save(extro);
    };
    /**
     * 保存日志
     * @param msg 错误的内容
     * @param extro 将被保存为本地日志
     */
    Logger.prototype.save = function (extro) {
        if (!extro)
            return;
        console.log(JSON.stringify(extro));
    };
    Logger.prototype._show = function (msg, css) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 3000,
            cssClass: css
        });
        toast.present();
    };
    return Logger;
}());
Logger = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* ToastController */]])
], Logger);

//# sourceMappingURL=logger.js.map

/***/ }),

/***/ 326:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessageBox; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MessageBox = (function () {
    function MessageBox(alertCtrl, toastCtrl) {
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
    }
    /**
     * Toast提示框
     */
    MessageBox.prototype.toast = function (msg, css) {
        if (css === void 0) { css = ''; }
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 3000,
            cssClass: css
        });
        toast.present();
    };
    /** 提示框 */
    MessageBox.prototype.alert = function (msg) {
        var options = {
            title: '',
            subTitle: msg,
            buttons: [
                {
                    text: '',
                },
                {
                    text: '确定',
                }
            ]
        };
        this._present(options);
    };
    /**
     * 确认框
     */
    MessageBox.prototype.confirm = function (msg, onOk, onCancel, okText, cancelText) {
        if (onCancel === void 0) { onCancel = function () { }; }
        if (okText === void 0) { okText = '确定'; }
        if (cancelText === void 0) { cancelText = ''; }
        var options = {
            title: '',
            message: msg,
            buttons: [
                {
                    text: cancelText,
                    role: 'cancel',
                    handler: onCancel
                },
                {
                    text: okText,
                    role: 'ok',
                    handler: onOk
                }
            ]
        };
        this._present(options);
    };
    /**
     * 输入框
     */
    MessageBox.prototype.prompt = function (msg, inputName, inputPlaceholer, onOk, onCancel, okText, cancelText) {
        if (onCancel === void 0) { onCancel = function (data) { }; }
        if (okText === void 0) { okText = '确定'; }
        if (cancelText === void 0) { cancelText = ''; }
        this._present({
            title: '请输入',
            subTitle: msg,
            inputs: [
                {
                    name: inputName,
                    placeholder: inputPlaceholer
                }
            ],
            buttons: [
                {
                    text: cancelText,
                    role: 'cancel',
                    handler: onCancel
                },
                {
                    text: okText,
                    role: 'ok',
                    handler: onOk
                }
            ]
        });
    };
    MessageBox.prototype._present = function (options) {
        options.cssClass = 'messagebox';
        var alert = this.alertCtrl.create(options);
        alert.present();
    };
    return MessageBox;
}());
MessageBox = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* ToastController */]])
], MessageBox);

//# sourceMappingURL=messagebox.js.map

/***/ }),

/***/ 327:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GlobalState; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GlobalState = (function () {
    function GlobalState() {
        var _this = this;
        this._data = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
        this._dataStream$ = this._data.asObservable();
        this._subscriptions = new Map();
        this._dataStream$.subscribe(function (data) { return _this._onEvent(data); });
    }
    GlobalState.prototype.notifyDataChanged = function (event, value) {
        var current = this._data[event];
        if (current !== value) {
            this._data[event] = value;
            this._data.next({
                event: event,
                data: this._data[event]
            });
        }
    };
    GlobalState.prototype.subscribe = function (event, callback) {
        var subscribers = this._subscriptions.get(event) || [];
        subscribers.push(callback);
        this._subscriptions.set(event, subscribers);
    };
    GlobalState.prototype._onEvent = function (data) {
        var subscribers = this._subscriptions.get(data['event']) || [];
        subscribers.forEach(function (callback) {
            callback.call(null, data['data']);
        });
    };
    return GlobalState;
}());
GlobalState = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], GlobalState);

//# sourceMappingURL=global.state.js.map

/***/ }),

/***/ 328:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlatformService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PlatformService = (function () {
    function PlatformService(appCtrl, platform, toastCtrl) {
        this.appCtrl = appCtrl;
        this.platform = platform;
        this.toastCtrl = toastCtrl;
        /**
         * 用于判断返回键是否触发
         *
         * @private
         * @type {boolean}
         * @memberOf PlatformService
         */
        this._backButtonPressed = false;
    }
    Object.defineProperty(PlatformService.prototype, "rootNav", {
        /**
         * 在首页加载完成后，设置根导航组件
         *
         * @memberOf PlatformService
         */
        set: function (nav) {
            this._rootNav = nav;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * 注册返回键事件
     *
     * @memberOf PlatformService
     */
    PlatformService.prototype.registerBackButton = function () {
        if (this.platform.is('android')) {
            this._registerAndroidExit();
        }
        else if (this._isWechat()) {
            // 添加一条返回历史
            this._pushHistory();
            // 注册返回事件
            this._registerBrowserBack();
            // 进入Tabs之外的子页面时，添加页面历史
            this.appCtrl.viewDidLoad.subscribe(this._onViewLoaded);
        }
    };
    /**
     * 全局页面加载事件
     *
     * @private
     * @param {ViewController} viewCtl
     *
     * @memberOf PlatformService
     */
    PlatformService.prototype._onViewLoaded = function (viewCtl) {
        console.log(viewCtl);
        if (viewCtl instanceof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* Toast */]
            || viewCtl instanceof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheet */]
            || viewCtl instanceof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Alert */]
            || viewCtl instanceof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Loading */]
            || viewCtl instanceof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Modal */]
            || viewCtl instanceof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* Popover */]) {
            return;
        }
        window.history.pushState({
            title: viewCtl.component.name,
            url: viewCtl.component.name
        }, viewCtl.component.name, viewCtl.component.name);
    };
    /**
     * 根据UserAgent判断是否微信浏览器
     *
     *
     * @memberOf PlatformService
     */
    PlatformService.prototype._isWechat = function () {
        var ua = navigator.userAgent.toLowerCase();
        var isWechat = /micromessenger/.test(ua);
        return isWechat;
    };
    /**
     * 向页面记录表添加虚拟记录，用来拦截物理返回键
     *
     * @private
     *
     * @memberOf PlatformService
     */
    PlatformService.prototype._pushHistory = function () {
        var state = {
            title: 'wechat-index',
            url: '#'
        };
        window.history.pushState(state, state.title, '#');
    };
    /**
     * 为安卓注册双击返回退出app
     *
     * @private
     *
     * @memberOf MyApp
     */
    PlatformService.prototype._registerAndroidExit = function () {
        var _this = this;
        this.platform.registerBackButtonAction(function () { return _this._onBackButtonClicked; }, 101);
    };
    /**
     * 注册浏览器返回事件
     */
    PlatformService.prototype._registerBrowserBack = function () {
        var _this = this;
        window.addEventListener('popstate', function (e) {
            _this._onBackButtonClicked();
        }, false);
    };
    /**
     * 双击退出提示框，这里使用Ionic2的ToastController
     *
     * @private
     *
     * @memberOf MyApp
     */
    PlatformService.prototype._showExit = function () {
        var _this = this;
        if (this._backButtonPressed) {
            // 当触发标志为true时，即2秒内双击返回按键则退出APP
            if (this._isWechat()) {
            }
            else {
                this.platform.exitApp();
            }
        }
        else {
            var toast = this.toastCtrl.create({
                message: '再按一次退出应用',
                duration: 2000,
                position: 'bottom'
            });
            toast.present();
            this._backButtonPressed = true;
            // 2秒内没有再次点击返回则将触发标志标记为false
            setTimeout(function () {
                if (_this._isWechat()) {
                    // 再次添加一条记录，否则下一次返回键将退出本页面
                    _this._pushHistory();
                }
                _this._backButtonPressed = false;
            }, 2000);
        }
    };
    /**
     * 响应返回键点击事件
     *
     * @private
     *
     * @memberOf MyApp
     */
    PlatformService.prototype._onBackButtonClicked = function () {
        var activeVC = this._rootNav.getActive();
        var page = activeVC.instance;
        /*if (!(page instanceof TabsPage)) {
            if (!this._rootNav.canGoBack()) {
                // 当前页面为tabs，退出APP
                return this._showExit();
            }
            // 当前页面为tabs的子页面，正常返回
            return this._rootNav.pop();
        }*/
        // 获取主Tab组件
        var tabs = page.tabs;
        var activeNav = tabs.getSelected();
        if (!activeNav.canGoBack()) {
            // 当前页面为tab栏，退出APP
            return this._showExit();
        }
        // 当前页面为tab栏的子页面，正常返回
        return activeNav.pop();
    };
    return PlatformService;
}());
PlatformService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* App */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* ToastController */]])
], PlatformService);

//# sourceMappingURL=platform.service.js.map

/***/ }),

/***/ 329:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_storage__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__httpclient__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthService = (function () {
    function AuthService(http, storage) {
        this.http = http;
        this.storage = storage;
    }
    /**
     * 登录
     *
     * @param {string} userName
     * @param {string} password
     * @returns {Observable<boolean>}
     *
     * @memberOf AuthService
     */
    AuthService.prototype.login = function (userName, password) {
        var _this = this;
        return this.http.postEx('', {
            UserName: userName,
            Password: password
        }).map(function (r) {
            var result = r.json();
            if (result.Code >= 0 && result.Data) {
                _this._user = result.Data;
                _this.storage.set('user', result.Data).then(function () { return console.log('user info saved.'); });
                return true;
            }
            return false;
        }).catch(function (x) { return _this.http.handleError(x); });
    };
    /**
     * 获取当前登录用户
     *
     * @returns {Observable<User>}
     *
     * @memberOf AuthService
     */
    AuthService.prototype.getUser = function () {
        var _this = this;
        var emitter = new __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__["Subject"]();
        if (this._user) {
            setTimeout(function () { return emitter.next(_this._user); }, 0); // mac os 中直接next无法获取数据
        }
        else {
            this.storage.get('user').then(function (u) { return emitter.next(u); });
        }
        return emitter;
    };
    /**
     * 自动登录
     *
     * @returns {Observable<boolean>}
     *
     * @memberOf AuthService
     */
    AuthService.prototype.autoLogin = function () {
        var _this = this;
        var emitter = new __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__["Subject"]();
        this.storage.get('user').then(function (u) {
            if (!u) {
                setTimeout(function () { return emitter.next(false); }, 0);
            }
            else {
                _this.login(u.Name, u.Password)
                    .subscribe(function (res) { return emitter.next(res); });
            }
        });
        return emitter;
    };
    /**
     * 删除用户数据
     *
     * @memberOf AuthService
     */
    AuthService.prototype.delete = function () {
        this.storage.remove('user');
    };
    /**
     * 更新用户
     *
     * @param {string} [key]
     * @param {*} [value]
     *
     * @memberOf AuthService
     */
    AuthService.prototype.save = function (key, value) {
        if (key) {
            this._user[key] = value;
        }
        this.storage.set('user', this._user);
    };
    return AuthService;
}());
AuthService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__httpclient__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_1__ionic_storage__["b" /* Storage */]])
], AuthService);

//# sourceMappingURL=auth.service.js.map

/***/ }),

/***/ 330:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WechatHome; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__marketing_user_bind_user_bind_component__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_shared_app_component_base__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_marketing_user_user_component__ = __webpack_require__(54);
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
    function WechatHome(injector, navCtrl) {
        var _this = _super.call(this, injector) || this;
        _this.navCtrl = navCtrl;
        return _this;
    }
    WechatHome.prototype.goUserBind = function () {
        console.log("goUserBind");
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__marketing_user_bind_user_bind_component__["a" /* UserBindComponent */]);
    };
    WechatHome.prototype.goUser = function () {
        console.log("goUser");
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__pages_marketing_user_user_component__["a" /* UserComponent */]);
    };
    return WechatHome;
}(__WEBPACK_IMPORTED_MODULE_3__app_shared_app_component_base__["a" /* AppComponentBase */]));
WechatHome = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'wechat-home',template:/*ion-inline-start:"D:\mygit\HCWeChat\ng-wechat\src\pages\wechat-home\wechat-home.html"*/'<ion-header hideWhen="wechat">\n\n    <ion-navbar>\n\n        <ion-title>宜宾烟草</ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n<ion-content text-center class="icons-basic-page">\n\n    <h2>欢迎使用宜宾烟草!</h2>\n\n    <ion-row>\n\n        <ion-col>\n\n            <ion-icon name="md-person" color="primary" title="\'个人中心\'"></ion-icon>\n\n            <br/>个人中心</ion-col>\n\n        <ion-col>\n\n            <ion-icon name="md-person-add" color="primary" (click)="goUserBind()" title="\'用户绑定\'"></ion-icon>\n\n            <br/>用户绑定</ion-col>\n\n        <ion-col>\n\n            <ion-icon name="heart" color="danger" title="\'营销活动\'"></ion-icon>\n\n            <br/>营销活动</ion-col>\n\n        <ion-col>\n\n            <ion-icon name="ionitron" color="primary" title="\'活动申请\'"></ion-icon>\n\n            <br/>活动申请</ion-col>\n\n    </ion-row>\n\n</ion-content>'/*ion-inline-end:"D:\mygit\HCWeChat\ng-wechat\src\pages\wechat-home\wechat-home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Injector */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */]])
], WechatHome);

//# sourceMappingURL=wechat-home.js.map

/***/ }),

/***/ 331:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocalDatePipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(33);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * 1. 将UTC时间，改为本地时间：2017-1-1T12:01
 * 2. 将json时间，改为本地时间：‘/Date(1472608668000)/’
 */
var LocalDatePipe = (function () {
    function LocalDatePipe(date) {
        this.date = date;
    }
    LocalDatePipe.prototype.transform = function (value, pattern) {
        if (value instanceof Date) {
            return this.date.transform(value, pattern);
        }
        if (value.indexOf('T') >= 0) {
            return this.date.transform(value.replace('T', ' '), pattern);
        }
        var myRex = /^\/Date\(\d*\)\/$/;
        if (myRex.test(value)) {
            value = new Date(parseInt(value.replace(/^\/Date\(/, '').replace(/\)\/$/, ''), 10));
        }
        return this.date.transform(value, pattern);
    };
    return LocalDatePipe;
}());
LocalDatePipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["W" /* Pipe */])({
        name: 'date'
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common__["c" /* DatePipe */]])
], LocalDatePipe);

//# sourceMappingURL=localdate.pipe.js.map

/***/ }),

/***/ 332:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(333);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(351);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 351:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_camera__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_splash_screen__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__(398);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__core__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_pages_module__ = __webpack_require__(431);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */], {
                backButtonText: '',
                tabsHideOnSubPages: true,
                mode: 'ios'
            }),
            __WEBPACK_IMPORTED_MODULE_8__core__["a" /* CoreModule */],
            __WEBPACK_IMPORTED_MODULE_9__pages_pages_module__["a" /* PagesModule */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */]
        ],
        providers: [
            { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* IonicErrorHandler */] },
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_splash_screen__["a" /* SplashScreen */]
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 398:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__core__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_wechat_home_wechat_home__ = __webpack_require__(330);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_marketing_user_bind_user_bind_component__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_marketing_user_user_component__ = __webpack_require__(54);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen, platformService) {
        var _this = this;
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.platformService = platformService;
        //rootPage = TabsPage;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_wechat_home_wechat_home__["a" /* WechatHome */];
        //设置启动页
        this.pageId = platform.getQueryParam('pageId');
        //console.log("pageId:"+this.pageId);
        this.goWechatPage();
        platform.ready().then(function () {
            _this.splashScreen.hide();
            if (platform.is('ios') || platform.is('android')) {
                _this.statusBar.styleDefault();
            }
            // 注册返回按键事件
            _this.platformService.rootNav = _this.nav;
            _this.platformService.registerBackButton();
        });
    }
    MyApp.prototype.goWechatPage = function () {
        if (this.pageId == 1) {
            this.rootPage = __WEBPACK_IMPORTED_MODULE_6__pages_marketing_user_bind_user_bind_component__["a" /* UserBindComponent */];
        }
        else if (this.pageId == 2) {
            this.rootPage = __WEBPACK_IMPORTED_MODULE_7__pages_marketing_user_user_component__["a" /* UserComponent */];
        }
    };
    return MyApp;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Nav */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Nav */])
], MyApp.prototype, "nav", void 0);
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"D:\mygit\HCWeChat\ng-wechat\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"D:\mygit\HCWeChat\ng-wechat\src\app\app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
        __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
        __WEBPACK_IMPORTED_MODULE_4__core__["c" /* PlatformService */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 399:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CoreModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_storage__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_httpclient__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_logger__ = __webpack_require__(325);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_loading_service__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_messagebox__ = __webpack_require__(326);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_global_state__ = __webpack_require__(327);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_platform_service__ = __webpack_require__(328);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_auth_service__ = __webpack_require__(329);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__rxjs_operators__ = __webpack_require__(405);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var CoreModule = (function () {
    function CoreModule() {
    }
    return CoreModule;
}());
CoreModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__ionic_storage__["a" /* IonicStorageModule */].forRoot({ name: '_xg', driverOrder: ['sqlite', 'localstorage', 'websql', 'indexeddb'] })
        ],
        exports: [],
        declarations: [],
        providers: [
            __WEBPACK_IMPORTED_MODULE_3__services_logger__["a" /* Logger */],
            __WEBPACK_IMPORTED_MODULE_4__services_loading_service__["a" /* LoadingService */],
            __WEBPACK_IMPORTED_MODULE_2__services_httpclient__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_5__services_messagebox__["a" /* MessageBox */],
            __WEBPACK_IMPORTED_MODULE_6__services_global_state__["a" /* GlobalState */],
            __WEBPACK_IMPORTED_MODULE_7__services_platform_service__["a" /* PlatformService */],
            __WEBPACK_IMPORTED_MODULE_8__services_auth_service__["a" /* AuthService */]
        ]
    })
], CoreModule);

//# sourceMappingURL=core.module.js.map

/***/ }),

/***/ 404:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 203,
	"./af.js": 203,
	"./ar": 204,
	"./ar-dz": 205,
	"./ar-dz.js": 205,
	"./ar-kw": 206,
	"./ar-kw.js": 206,
	"./ar-ly": 207,
	"./ar-ly.js": 207,
	"./ar-ma": 208,
	"./ar-ma.js": 208,
	"./ar-sa": 209,
	"./ar-sa.js": 209,
	"./ar-tn": 210,
	"./ar-tn.js": 210,
	"./ar.js": 204,
	"./az": 211,
	"./az.js": 211,
	"./be": 212,
	"./be.js": 212,
	"./bg": 213,
	"./bg.js": 213,
	"./bm": 214,
	"./bm.js": 214,
	"./bn": 215,
	"./bn.js": 215,
	"./bo": 216,
	"./bo.js": 216,
	"./br": 217,
	"./br.js": 217,
	"./bs": 218,
	"./bs.js": 218,
	"./ca": 219,
	"./ca.js": 219,
	"./cs": 220,
	"./cs.js": 220,
	"./cv": 221,
	"./cv.js": 221,
	"./cy": 222,
	"./cy.js": 222,
	"./da": 223,
	"./da.js": 223,
	"./de": 224,
	"./de-at": 225,
	"./de-at.js": 225,
	"./de-ch": 226,
	"./de-ch.js": 226,
	"./de.js": 224,
	"./dv": 227,
	"./dv.js": 227,
	"./el": 228,
	"./el.js": 228,
	"./en-au": 229,
	"./en-au.js": 229,
	"./en-ca": 230,
	"./en-ca.js": 230,
	"./en-gb": 231,
	"./en-gb.js": 231,
	"./en-ie": 232,
	"./en-ie.js": 232,
	"./en-il": 233,
	"./en-il.js": 233,
	"./en-nz": 234,
	"./en-nz.js": 234,
	"./eo": 235,
	"./eo.js": 235,
	"./es": 236,
	"./es-do": 237,
	"./es-do.js": 237,
	"./es-us": 238,
	"./es-us.js": 238,
	"./es.js": 236,
	"./et": 239,
	"./et.js": 239,
	"./eu": 240,
	"./eu.js": 240,
	"./fa": 241,
	"./fa.js": 241,
	"./fi": 242,
	"./fi.js": 242,
	"./fo": 243,
	"./fo.js": 243,
	"./fr": 244,
	"./fr-ca": 245,
	"./fr-ca.js": 245,
	"./fr-ch": 246,
	"./fr-ch.js": 246,
	"./fr.js": 244,
	"./fy": 247,
	"./fy.js": 247,
	"./gd": 248,
	"./gd.js": 248,
	"./gl": 249,
	"./gl.js": 249,
	"./gom-latn": 250,
	"./gom-latn.js": 250,
	"./gu": 251,
	"./gu.js": 251,
	"./he": 252,
	"./he.js": 252,
	"./hi": 253,
	"./hi.js": 253,
	"./hr": 254,
	"./hr.js": 254,
	"./hu": 255,
	"./hu.js": 255,
	"./hy-am": 256,
	"./hy-am.js": 256,
	"./id": 257,
	"./id.js": 257,
	"./is": 258,
	"./is.js": 258,
	"./it": 259,
	"./it.js": 259,
	"./ja": 260,
	"./ja.js": 260,
	"./jv": 261,
	"./jv.js": 261,
	"./ka": 262,
	"./ka.js": 262,
	"./kk": 263,
	"./kk.js": 263,
	"./km": 264,
	"./km.js": 264,
	"./kn": 265,
	"./kn.js": 265,
	"./ko": 266,
	"./ko.js": 266,
	"./ky": 267,
	"./ky.js": 267,
	"./lb": 268,
	"./lb.js": 268,
	"./lo": 269,
	"./lo.js": 269,
	"./lt": 270,
	"./lt.js": 270,
	"./lv": 271,
	"./lv.js": 271,
	"./me": 272,
	"./me.js": 272,
	"./mi": 273,
	"./mi.js": 273,
	"./mk": 274,
	"./mk.js": 274,
	"./ml": 275,
	"./ml.js": 275,
	"./mr": 276,
	"./mr.js": 276,
	"./ms": 277,
	"./ms-my": 278,
	"./ms-my.js": 278,
	"./ms.js": 277,
	"./mt": 279,
	"./mt.js": 279,
	"./my": 280,
	"./my.js": 280,
	"./nb": 281,
	"./nb.js": 281,
	"./ne": 282,
	"./ne.js": 282,
	"./nl": 283,
	"./nl-be": 284,
	"./nl-be.js": 284,
	"./nl.js": 283,
	"./nn": 285,
	"./nn.js": 285,
	"./pa-in": 286,
	"./pa-in.js": 286,
	"./pl": 287,
	"./pl.js": 287,
	"./pt": 288,
	"./pt-br": 289,
	"./pt-br.js": 289,
	"./pt.js": 288,
	"./ro": 290,
	"./ro.js": 290,
	"./ru": 291,
	"./ru.js": 291,
	"./sd": 292,
	"./sd.js": 292,
	"./se": 293,
	"./se.js": 293,
	"./si": 294,
	"./si.js": 294,
	"./sk": 295,
	"./sk.js": 295,
	"./sl": 296,
	"./sl.js": 296,
	"./sq": 297,
	"./sq.js": 297,
	"./sr": 298,
	"./sr-cyrl": 299,
	"./sr-cyrl.js": 299,
	"./sr.js": 298,
	"./ss": 300,
	"./ss.js": 300,
	"./sv": 301,
	"./sv.js": 301,
	"./sw": 302,
	"./sw.js": 302,
	"./ta": 303,
	"./ta.js": 303,
	"./te": 304,
	"./te.js": 304,
	"./tet": 305,
	"./tet.js": 305,
	"./tg": 306,
	"./tg.js": 306,
	"./th": 307,
	"./th.js": 307,
	"./tl-ph": 308,
	"./tl-ph.js": 308,
	"./tlh": 309,
	"./tlh.js": 309,
	"./tr": 310,
	"./tr.js": 310,
	"./tzl": 311,
	"./tzl.js": 311,
	"./tzm": 312,
	"./tzm-latn": 313,
	"./tzm-latn.js": 313,
	"./tzm.js": 312,
	"./ug-cn": 314,
	"./ug-cn.js": 314,
	"./uk": 315,
	"./uk.js": 315,
	"./ur": 316,
	"./ur.js": 316,
	"./uz": 317,
	"./uz-latn": 318,
	"./uz-latn.js": 318,
	"./uz.js": 317,
	"./vi": 319,
	"./vi.js": 319,
	"./x-pseudo": 320,
	"./x-pseudo.js": 320,
	"./yo": 321,
	"./yo.js": 321,
	"./zh-cn": 322,
	"./zh-cn.js": 322,
	"./zh-hk": 323,
	"./zh-hk.js": 323,
	"./zh-tw": 324,
	"./zh-tw.js": 324
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 404;

/***/ }),

/***/ 405:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_observable_throw__ = __webpack_require__(406);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_add_observable_throw__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_catch__ = __webpack_require__(407);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_debounceTime__ = __webpack_require__(409);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_debounceTime___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_debounceTime__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_distinctUntilChanged__ = __webpack_require__(416);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_distinctUntilChanged___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_distinctUntilChanged__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(418);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_switchMap__ = __webpack_require__(419);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_switchMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_toPromise__ = __webpack_require__(421);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_finally__ = __webpack_require__(423);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_finally___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_finally__);
// import 'rxjs/Rx'; // adds ALL RxJS statics & operators to Observable
// See node_module/rxjs/Rxjs.js
// Import just the rxjs statics and operators needed for THIS app.
// Statics

// Operators







//# sourceMappingURL=rxjs-operators.js.map

/***/ }),

/***/ 425:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Config */
var Config = {
    environment: 'dev',
    host: '/'
};
//# sourceMappingURL=config.service.js.map

/***/ }),

/***/ 426:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export ApiResult */
var ApiResult = (function () {
    function ApiResult() {
    }
    return ApiResult;
}());

//# sourceMappingURL=apiresult.js.map

/***/ }),

/***/ 427:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
/* unused harmony export UserTypeEnum */
var User = (function () {
    function User() {
    }
    return User;
}());

var UserTypeEnum;
(function (UserTypeEnum) {
    UserTypeEnum[UserTypeEnum["Retailer"] = 1] = "Retailer";
    UserTypeEnum[UserTypeEnum["Manager"] = 2] = "Manager";
    UserTypeEnum[UserTypeEnum["Consumer"] = 3] = "Consumer";
})(UserTypeEnum || (UserTypeEnum = {}));
//# sourceMappingURL=user.js.map

/***/ }),

/***/ 428:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Retailer; });
var Retailer = (function () {
    function Retailer() {
    }
    return Retailer;
}());

//# sourceMappingURL=retailer.js.map

/***/ }),

/***/ 429:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Employee; });
var Employee = (function () {
    function Employee() {
    }
    return Employee;
}());

//# sourceMappingURL=employee.js.map

/***/ }),

/***/ 43:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__core_module__ = __webpack_require__(399);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__core_module__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_logger__ = __webpack_require__(325);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_config_service__ = __webpack_require__(425);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_loading_service__ = __webpack_require__(105);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_httpclient__ = __webpack_require__(104);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_messagebox__ = __webpack_require__(326);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_global_state__ = __webpack_require__(327);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_platform_service__ = __webpack_require__(328);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_7__services_platform_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__models_apiresult__ = __webpack_require__(426);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__models_user__ = __webpack_require__(427);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_9__models_user__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_auth_service__ = __webpack_require__(329);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__models_retailer__ = __webpack_require__(428);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_11__models_retailer__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__models_employee__ = __webpack_require__(429);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_12__models_employee__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__models_wechat__ = __webpack_require__(430);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_13__models_wechat__["a"]; });














//# sourceMappingURL=index.js.map

/***/ }),

/***/ 430:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WeChat; });
var WeChat = (function () {
    function WeChat() {
    }
    return WeChat;
}());

//# sourceMappingURL=wechat.js.map

/***/ }),

/***/ 431:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PagesModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_shared__ = __webpack_require__(432);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__wechat_home_wechat_home__ = __webpack_require__(330);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__marketing_marketing_module__ = __webpack_require__(435);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var _modules = [
    __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicModule */],
    __WEBPACK_IMPORTED_MODULE_2__app_shared__["a" /* SharedModule */],
    __WEBPACK_IMPORTED_MODULE_4__marketing_marketing_module__["a" /* MarketingModule */]
];
var _pages = [
    __WEBPACK_IMPORTED_MODULE_3__wechat_home_wechat_home__["a" /* WechatHome */]
];
var PagesModule = (function () {
    function PagesModule() {
    }
    return PagesModule;
}());
PagesModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        imports: _modules.slice(),
        exports: [],
        declarations: _pages.slice(),
        entryComponents: _pages.slice(),
        providers: [],
    })
], PagesModule);

//# sourceMappingURL=pages.module.js.map

/***/ }),

/***/ 432:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_module__ = __webpack_require__(433);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__shared_module__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pipes_localdate_pipe__ = __webpack_require__(331);
/* unused harmony namespace reexport */


//# sourceMappingURL=index.js.map

/***/ }),

/***/ 433:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharedModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__directives_camera_directive__ = __webpack_require__(434);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pipes_localdate_pipe__ = __webpack_require__(331);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__(33);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var _PROVIDDERS = [
    __WEBPACK_IMPORTED_MODULE_3__angular_common__["c" /* DatePipe */],
    __WEBPACK_IMPORTED_MODULE_2__pipes_localdate_pipe__["a" /* LocalDatePipe */]
];
var _DECLARATIONS = [
    __WEBPACK_IMPORTED_MODULE_1__directives_camera_directive__["a" /* CameraDirective */],
    __WEBPACK_IMPORTED_MODULE_2__pipes_localdate_pipe__["a" /* LocalDatePipe */]
];
var SharedModule = (function () {
    function SharedModule() {
    }
    return SharedModule;
}());
SharedModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        imports: [],
        exports: _DECLARATIONS.slice(),
        declarations: _DECLARATIONS.slice(),
        providers: _PROVIDDERS.slice(),
    })
], SharedModule);

//# sourceMappingURL=shared.module.js.map

/***/ }),

/***/ 434:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CameraDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * 拍照或者从相册中选取一张图片
 * 用法：<span [camera]="options" (completed)="onCameraCompleted($event)"><span>
 *
 * 问题：
 * 1. 安卓机上，completed的绑定方法里设置页面的img的src绑定属性无效，暂时使用js赋值的方式解决
 * onCameraCompleted(fileUrl:string) {
 *  (document.getElementById('img_test') as any).src=fileUrl;
 * }
 */
var CameraDirective = (function () {
    function CameraDirective(el, renderer, actionSheetCtrl, cameraPlugin) {
        this.el = el;
        this.renderer = renderer;
        this.actionSheetCtrl = actionSheetCtrl;
        this.cameraPlugin = cameraPlugin;
        this.completed = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this._default = {
            quality: 100,
            destinationType: this.cameraPlugin.DestinationType.FILE_URI,
            sourceType: this.cameraPlugin.PictureSourceType.CAMERA,
            allowEdit: true,
            targetWidth: 100,
            targetHeight: 100,
            mediaType: this.cameraPlugin.MediaType.PICTURE,
            correctOrientation: true,
            saveToPhotoAlbum: false,
            cameraDirection: this.cameraPlugin.Direction.BACK
        };
    }
    Object.defineProperty(CameraDirective.prototype, "camera", {
        set: function (options) {
            this._options = this._extend(options, this._default);
        },
        enumerable: true,
        configurable: true
    });
    CameraDirective.prototype.onClick = function () {
        var _this = this;
        this._presentActionSheet()
            .subscribe(function (type) {
            _this._options.sourceType = type;
            _this.cameraPlugin.getPicture(_this._options).then(function (imageData) {
                _this.completed.emit(imageData);
                // File.resolveLocalFilesystemUrl(imageData)
                //     .then(file=>{
                //          this.completed.emit(file.nativeURL);
                //         console.log('已获取图片:'+JSON.stringify(file));
                //     });          
            }, function (err) {
                console.error('获取图片失败:' + JSON.stringify(err));
            });
        }, function (error) {
            console.error('选择获取头像方式失败：' + error);
        });
    };
    CameraDirective.prototype._extend = function (left, right) {
        if (!(left && left instanceof Object))
            return right;
        if (right && right instanceof Object) {
            for (var k in right) {
                if (right[k] && right[k] !== left[k]) {
                    left[k] = right[k];
                }
            }
        }
        return left;
    };
    CameraDirective.prototype._presentActionSheet = function () {
        var sub = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
        var actionSheet = this.actionSheetCtrl.create({
            title: '选择头像',
            buttons: [
                {
                    text: '拍照',
                    role: '1',
                    handler: function () { return sub.next(1); }
                },
                {
                    text: '相册',
                    role: '0',
                    handler: function () { return sub.next(0); }
                },
                {
                    text: '取消',
                    role: 'cancel',
                    handler: function () { return sub.error(-1); }
                }
            ]
        });
        actionSheet.present();
        return sub;
    };
    return CameraDirective;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Output */])(),
    __metadata("design:type", Object)
], CameraDirective.prototype, "completed", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], CameraDirective.prototype, "camera", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* HostListener */])('click'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], CameraDirective.prototype, "onClick", null);
CameraDirective = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* Directive */])({ selector: '[camera]' }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */],
        __WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Renderer */],
        __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["b" /* ActionSheetController */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__["a" /* Camera */]])
], CameraDirective);

//# sourceMappingURL=camera.directive.js.map

/***/ }),

/***/ 435:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MarketingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__user_bind_user_bind_component__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__user_user_component__ = __webpack_require__(54);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var _components = [
    __WEBPACK_IMPORTED_MODULE_0__user_bind_user_bind_component__["a" /* UserBindComponent */],
    __WEBPACK_IMPORTED_MODULE_3__user_user_component__["a" /* UserComponent */]
];
var MarketingModule = (function () {
    function MarketingModule() {
    }
    return MarketingModule;
}());
MarketingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: _components.slice(),
        entryComponents: _components.slice(),
        imports: [
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* IonicPageModule */].forChild(_components)
        ],
        exports: [
            _components
        ]
    })
], MarketingModule);

//# sourceMappingURL=marketing.module.js.map

/***/ }),

/***/ 54:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_shared_app_component_base__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_core_index__ = __webpack_require__(43);
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




var UserComponent = (function (_super) {
    __extends(UserComponent, _super);
    function UserComponent(injector, navCtrl) {
        var _this = _super.call(this, injector) || this;
        _this.navCtrl = navCtrl;
        _this.user = new __WEBPACK_IMPORTED_MODULE_3__app_core_index__["e" /* User */]();
        _this.user.Name = '唐德舟';
        _this.user.UserTypeName = '零售客户';
        return _this;
    }
    return UserComponent;
}(__WEBPACK_IMPORTED_MODULE_2__app_shared_app_component_base__["a" /* AppComponentBase */]));
UserComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'user-component',template:/*ion-inline-start:"D:\mygit\HCWeChat\ng-wechat\src\pages\marketing\user\user.component.html"*/'<ion-header>\n\n    <ion-navbar no-border-bottom>\n\n        <ion-title>\n\n            用户中心\n\n        </ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n<ion-content class="user-content-basic">\n\n    <ion-item class="photo" text-center no-border>\n\n        <ion-icon name="contact" color="primary" ></ion-icon>\n\n        <ion-img width="80" height="80" *ngIf="false" src=""></ion-img>\n\n    </ion-item>\n\n    <ion-item no-border>\n\n        <ion-label>用户名</ion-label>\n\n        <ion-label>{{user.Name}}</ion-label>\n\n    </ion-item>\n\n    <ion-item no-border>\n\n        <ion-label>用户类型</ion-label>\n\n        <ion-label>{{user.UserTypeName}}</ion-label>\n\n    </ion-item>\n\n    <ion-list no-border>\n\n        <ion-list-header>\n\n            营销活动\n\n        </ion-list-header>\n\n        <ion-item>\n\n            <ion-icon ios="ios-hammer" md="md-hammer" color="primary" item-start></ion-icon>\n\n            待审核\n\n            <ion-badge color="danger" item-end>10</ion-badge>\n\n        </ion-item>\n\n        <ion-item>\n\n            <ion-icon ios="ios-arrow-forward" md="md-arrow-forward" color="primary" item-start></ion-icon>\n\n            资料回传\n\n            <ion-note item-end>\n\n                无\n\n            </ion-note>\n\n        </ion-item>\n\n        <ion-item small>\n\n            <ion-icon md="md-reorder" ios="ios-reorder" color="primary" item-start></ion-icon>\n\n            已完成\n\n        </ion-item>\n\n    </ion-list>\n\n</ion-content>'/*ion-inline-end:"D:\mygit\HCWeChat\ng-wechat\src\pages\marketing\user\user.component.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Injector */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */]])
], UserComponent);

//# sourceMappingURL=user.component.js.map

/***/ })

},[332]);
//# sourceMappingURL=main.js.map