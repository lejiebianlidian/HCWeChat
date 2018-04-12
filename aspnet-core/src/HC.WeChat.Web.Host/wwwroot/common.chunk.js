webpackJsonp(["common"],{

/***/ "./src/app/shared/auth/auth-route-guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRouteGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__abp_auth_permission_checker_service__ = __webpack_require__("./node_modules/abp-ng2-module/src/auth/permission-checker.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__session_app_session_service__ = __webpack_require__("./src/app/shared/session/app-session.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AppRouteGuard = /** @class */ (function () {
    function AppRouteGuard(_permissionChecker, _router, _sessionService) {
        this._permissionChecker = _permissionChecker;
        this._router = _router;
        this._sessionService = _sessionService;
    }
    AppRouteGuard.prototype.canActivate = function (route, state) {
        if (!this._sessionService.user) {
            this._router.navigate(['account/login']);
            return false;
        }
        if (!route.data || !route.data["permission"]) {
            return true;
        }
        if (this._permissionChecker.isGranted(route.data["permission"])) {
            return true;
        }
        this._router.navigate([this.selectBestRoute()]);
        return false;
    };
    AppRouteGuard.prototype.canActivateChild = function (route, state) {
        return this.canActivate(route, state);
    };
    AppRouteGuard.prototype.selectBestRoute = function () {
        if (!this._sessionService.user) {
            return 'account/login';
        }
        if (this._permissionChecker.isGranted('Pages.Users')) {
            return 'admin/users';
        }
        return 'home/index';
    };
    AppRouteGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__abp_auth_permission_checker_service__["a" /* PermissionCheckerService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["h" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__session_app_session_service__["a" /* AppSessionService */]])
    ], AppRouteGuard);
    return AppRouteGuard;
}());



/***/ })

});
//# sourceMappingURL=common.chunk.js.map