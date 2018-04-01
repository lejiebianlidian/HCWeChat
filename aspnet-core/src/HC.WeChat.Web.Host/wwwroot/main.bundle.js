webpackJsonp(["main"],{

/***/ "../../../../../_mock/_api.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return APIS; });
// region: mock data
var titles = [
    'Alipay',
    'Angular',
    'Ant Design',
    'Ant Design Pro',
    'Bootstrap',
    'React',
    'Vue',
    'Webpack'
];
var avatars = [
    'https://gw.alipayobjects.com/zos/rmsportal/WdGqmHpayyMjiEhcKoVE.png',
    'https://gw.alipayobjects.com/zos/rmsportal/zOsKZmFRdUtvpqCImOVY.png',
    'https://gw.alipayobjects.com/zos/rmsportal/dURIMkkrRFpPgTuzkwnB.png',
    'https://gw.alipayobjects.com/zos/rmsportal/sfjbOqnsXXJgNCjCzDBL.png',
    'https://gw.alipayobjects.com/zos/rmsportal/siCrBXXhmvTQGWPNLBow.png',
    'https://gw.alipayobjects.com/zos/rmsportal/kZzEzemZyKLKFsojXItE.png',
    'https://gw.alipayobjects.com/zos/rmsportal/ComBAopevLwENQdKWiIn.png',
    'https://gw.alipayobjects.com/zos/rmsportal/nxkuOJlFJuAUhzlMTCEe.png' // Webpack
];
var covers = [
    'https://gw.alipayobjects.com/zos/rmsportal/HrxcVbrKnCJOZvtzSqjN.png',
    'https://gw.alipayobjects.com/zos/rmsportal/alaPpKWajEbIYEUvvVNf.png',
    'https://gw.alipayobjects.com/zos/rmsportal/RLwlKSYGSXGHuWSojyvp.png',
    'https://gw.alipayobjects.com/zos/rmsportal/gLaIAoVWTtLbBWZNYEMg.png'
];
var desc = [
    '那是一种内在的东西， 他们到达不了，也无法触及的',
    '希望是一个好东西，也许是最好的，好东西是不会消亡的',
    '生命就像一盒巧克力，结果往往出人意料',
    '城镇中有那么多的酒馆，她却偏偏走进了我的酒馆',
    '那时候我只会想自己想要什么，从不想自己拥有什么'
];
var user = [
    '卡色',
    'cipchk',
    '付小小',
    '曲丽丽',
    '林东东',
    '周星星',
    '吴加好',
    '朱偏右',
    '鱼酱',
    '乐哥',
    '谭小仪',
    '仲尼'
];
// endregion
function getFakeList(count) {
    if (count === void 0) { count = 20; }
    var list = [];
    for (var i = 0; i < count; i += 1) {
        list.push({
            id: "fake-list-" + i,
            owner: user[i % 10],
            title: titles[i % 8],
            avatar: avatars[i % 8],
            cover: parseInt((i / 4).toString(), 10) % 2 === 0 ? covers[i % 4] : covers[3 - (i % 4)],
            status: ['active', 'exception', 'normal'][i % 3],
            percent: Math.ceil(Math.random() * 50) + 50,
            logo: avatars[i % 8],
            href: 'https://ant.design',
            updatedAt: new Date(new Date().getTime() - (1000 * 60 * 60 * 2 * i)),
            createdAt: new Date(new Date().getTime() - (1000 * 60 * 60 * 2 * i)),
            subDescription: desc[i % 5],
            description: '在中台产品的研发过程中，会出现不同的设计规范和实现方式，但其中往往存在很多类似的页面和组件，这些类似的组件会被抽离成一套标准规范。',
            activeUser: Math.ceil(Math.random() * 100000) + 100000,
            newUser: Math.ceil(Math.random() * 1000) + 1000,
            star: Math.ceil(Math.random() * 100) + 100,
            like: Math.ceil(Math.random() * 100) + 100,
            message: Math.ceil(Math.random() * 10) + 10,
            content: '段落示意：蚂蚁金服设计平台 ant.design，用最小的工作量，无缝接入蚂蚁金服生态，提供跨越设计与开发的体验解决方案。蚂蚁金服设计平台 ant.design，用最小的工作量，无缝接入蚂蚁金服生态，提供跨越设计与开发的体验解决方案。',
            members: [
                {
                    avatar: 'https://gw.alipayobjects.com/zos/rmsportal/ZiESqWwCXBRQoaPONSJe.png',
                    name: '曲丽丽',
                },
                {
                    avatar: 'https://gw.alipayobjects.com/zos/rmsportal/tBOxZPlITHqwlGjsJWaF.png',
                    name: '王昭君',
                },
                {
                    avatar: 'https://gw.alipayobjects.com/zos/rmsportal/sBxjgqiuHMGRkIjqlQCd.png',
                    name: '董娜娜',
                },
            ]
        });
    }
    return list;
}
function getNotice() {
    return [
        {
            id: 'xxx1',
            title: titles[0],
            logo: avatars[0],
            description: '那是一种内在的东西， 他们到达不了，也无法触及的',
            updatedAt: new Date(),
            member: '科学搬砖组',
            href: '',
            memberLink: '',
        },
        {
            id: 'xxx2',
            title: titles[1],
            logo: avatars[1],
            description: '希望是一个好东西，也许是最好的，好东西是不会消亡的',
            updatedAt: new Date('2017-07-24'),
            member: '全组都是吴彦祖',
            href: '',
            memberLink: '',
        },
        {
            id: 'xxx3',
            title: titles[2],
            logo: avatars[2],
            description: '城镇中有那么多的酒馆，她却偏偏走进了我的酒馆',
            updatedAt: new Date(),
            member: '中二少女团',
            href: '',
            memberLink: '',
        },
        {
            id: 'xxx4',
            title: titles[3],
            logo: avatars[3],
            description: '那时候我只会想自己想要什么，从不想自己拥有什么',
            updatedAt: new Date('2017-07-23'),
            member: '程序员日常',
            href: '',
            memberLink: '',
        },
        {
            id: 'xxx5',
            title: titles[4],
            logo: avatars[4],
            description: '凛冬将至',
            updatedAt: new Date('2017-07-23'),
            member: '高逼格设计天团',
            href: '',
            memberLink: '',
        },
        {
            id: 'xxx6',
            title: titles[5],
            logo: avatars[5],
            description: '生命就像一盒巧克力，结果往往出人意料',
            updatedAt: new Date('2017-07-23'),
            member: '骗你来学计算机',
            href: '',
            memberLink: '',
        },
    ];
}
function getActivities() {
    return [
        {
            id: 'trend-1',
            updatedAt: new Date(),
            user: {
                name: '林东东',
                avatar: avatars[0],
            },
            group: {
                name: '高逼格设计天团',
                link: 'http://github.com/',
            },
            project: {
                name: '六月迭代',
                link: 'http://github.com/',
            },
            template: '在 @{group} 新建项目 @{project}',
        },
        {
            id: 'trend-2',
            updatedAt: new Date(),
            user: {
                name: '付小小',
                avatar: avatars[1],
            },
            group: {
                name: '高逼格设计天团',
                link: 'http://github.com/',
            },
            project: {
                name: '六月迭代',
                link: 'http://github.com/',
            },
            template: '在 @{group} 新建项目 @{project}',
        },
        {
            id: 'trend-3',
            updatedAt: new Date(),
            user: {
                name: '曲丽丽',
                avatar: avatars[2],
            },
            group: {
                name: '中二少女团',
                link: 'http://github.com/',
            },
            project: {
                name: '六月迭代',
                link: 'http://github.com/',
            },
            template: '在 @{group} 新建项目 @{project}',
        },
        {
            id: 'trend-4',
            updatedAt: new Date(),
            user: {
                name: '周星星',
                avatar: avatars[3],
            },
            project: {
                name: '5 月日常迭代',
                link: 'http://github.com/',
            },
            template: '将 @{project} 更新至已发布状态',
        },
        {
            id: 'trend-5',
            updatedAt: new Date(),
            user: {
                name: '朱偏右',
                avatar: avatars[4],
            },
            project: {
                name: '工程效能',
                link: 'http://github.com/',
            },
            comment: {
                name: '留言',
                link: 'http://github.com/',
            },
            template: '在 @{project} 发布了 @{comment}',
        },
        {
            id: 'trend-6',
            updatedAt: new Date(),
            user: {
                name: '乐哥',
                avatar: avatars[5],
            },
            group: {
                name: '程序员日常',
                link: 'http://github.com/',
            },
            project: {
                name: '品牌迭代',
                link: 'http://github.com/',
            },
            template: '在 @{group} 新建项目 @{project}',
        },
    ];
}
var APIS = {
    '/api/list': function (req) { return getFakeList(req.queryString.count); },
    '/api/notice': function () { return getNotice(); },
    '/api/activities': function () { return getActivities(); }
};


/***/ }),

/***/ "../../../../../_mock/_chart.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CHARTS; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mockjs__ = __webpack_require__("../../../../mockjs/dist/mock.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mockjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_mockjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_moment__ = __webpack_require__("../../../../moment/moment.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_moment__);
// tslint:disable


// region: mock data
var visitData = [];
var beginDay = new Date().getTime();
var fakeY = [7, 5, 4, 2, 4, 7, 5, 6, 5, 9, 6, 3, 1, 5, 3, 6, 5];
for (var i = 0; i < fakeY.length; i += 1) {
    visitData.push({
        x: __WEBPACK_IMPORTED_MODULE_1_moment__(new Date(beginDay + 1000 * 60 * 60 * 24 * i)).format("YYYY-MM-DD"),
        y: fakeY[i]
    });
}
var visitData2 = [];
var fakeY2 = [1, 6, 4, 8, 3, 7, 2];
for (var i = 0; i < fakeY2.length; i += 1) {
    visitData2.push({
        x: __WEBPACK_IMPORTED_MODULE_1_moment__(new Date(beginDay + 1000 * 60 * 60 * 24 * i)).format("YYYY-MM-DD"),
        y: fakeY2[i]
    });
}
var salesData = [];
for (var i = 0; i < 12; i += 1) {
    salesData.push({
        x: i + 1 + "\u6708",
        y: Math.floor(Math.random() * 1000) + 200
    });
}
var searchData = [];
for (var i = 0; i < 50; i += 1) {
    searchData.push({
        index: i + 1,
        keyword: "\u641C\u7D22\u5173\u952E\u8BCD-" + i,
        count: Math.floor(Math.random() * 1000),
        range: Math.floor(Math.random() * 100),
        status: Math.floor((Math.random() * 10) % 2)
    });
}
var salesTypeData = [
    {
        x: "家用电器",
        y: 4544
    },
    {
        x: "食用酒水",
        y: 3321
    },
    {
        x: "个护健康",
        y: 3113
    },
    {
        x: "服饰箱包",
        y: 2341
    },
    {
        x: "母婴产品",
        y: 1231
    },
    {
        x: "其他",
        y: 1231
    }
];
var salesTypeDataOnline = [
    {
        x: "家用电器",
        y: 244
    },
    {
        x: "食用酒水",
        y: 321
    },
    {
        x: "个护健康",
        y: 311
    },
    {
        x: "服饰箱包",
        y: 41
    },
    {
        x: "母婴产品",
        y: 121
    },
    {
        x: '其他',
        y: 111
    }
];
var salesTypeDataOffline = [
    {
        x: '家用电器',
        y: 99
    },
    {
        x: '个护健康',
        y: 188
    },
    {
        x: '服饰箱包',
        y: 344
    },
    {
        x: '母婴产品',
        y: 255
    },
    {
        x: '其他',
        y: 65
    }
];
var offlineData = [];
for (var i = 0; i < 10; i += 1) {
    offlineData.push({
        name: "\u95E8\u5E97" + i,
        cvr: Math.ceil(Math.random() * 9) / 10
    });
}
var offlineChartData = [];
for (var i = 0; i < 20; i += 1) {
    offlineChartData.push({
        x: new Date().getTime() + 1000 * 60 * 30 * i,
        y1: Math.floor(Math.random() * 100) + 10,
        y2: Math.floor(Math.random() * 100) + 10
    });
}
var radarOriginData = [
    {
        name: '个人',
        ref: 10,
        koubei: 8,
        output: 4,
        contribute: 5,
        hot: 7
    },
    {
        name: '团队',
        ref: 3,
        koubei: 9,
        output: 6,
        contribute: 3,
        hot: 1
    },
    {
        name: '部门',
        ref: 4,
        koubei: 1,
        output: 6,
        contribute: 5,
        hot: 7
    }
];
//
var radarData = [];
var radarTitleMap = {
    ref: '引用',
    koubei: '口碑',
    output: '产量',
    contribute: '贡献',
    hot: '热度'
};
radarOriginData.forEach(function (item) {
    Object.keys(item).forEach(function (key) {
        if (key !== 'name') {
            radarData.push({
                name: item.name,
                label: radarTitleMap[key],
                value: item[key]
            });
        }
    });
});
// endregion
var CHARTS = {
    '/chart': Object.assign({}, {
        visitData: visitData,
        visitData2: visitData2,
        salesData: salesData,
        searchData: searchData,
        offlineData: offlineData,
        offlineChartData: offlineChartData,
        salesTypeData: salesTypeData,
        salesTypeDataOnline: salesTypeDataOnline,
        salesTypeDataOffline: salesTypeDataOffline,
        radarData: radarData
    }),
    '/chart/visit': Object.assign([], visitData),
    '/chart/tags': __WEBPACK_IMPORTED_MODULE_0_mockjs__["mock"]({
        'list|100': [{ name: '@city', 'value|1-100': 150, 'type|0-2': 1 }]
    })
};


/***/ }),

/***/ "../../../../../_mock/_profile.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PROFILES; });
var basicGoods = [
    {
        id: '1234561',
        name: '矿泉水 550ml',
        barcode: '12421432143214321',
        price: '2.00',
        num: '1',
        amount: '2.00',
    },
    {
        id: '1234562',
        name: '凉茶 300ml',
        barcode: '12421432143214322',
        price: '3.00',
        num: '2',
        amount: '6.00',
    },
    {
        id: '1234563',
        name: '好吃的薯片',
        barcode: '12421432143214323',
        price: '7.00',
        num: '4',
        amount: '28.00',
    },
    {
        id: '1234564',
        name: '特别好吃的蛋卷',
        barcode: '12421432143214324',
        price: '8.50',
        num: '3',
        amount: '25.50',
    },
];
var basicProgress = [
    {
        key: '1',
        time: '2017-10-01 14:10',
        rate: '联系客户',
        status: 'processing',
        operator: '取货员 ID1234',
        cost: '5mins',
    },
    {
        key: '2',
        time: '2017-10-01 14:05',
        rate: '取货员出发',
        status: 'success',
        operator: '取货员 ID1234',
        cost: '1h',
    },
    {
        key: '3',
        time: '2017-10-01 13:05',
        rate: '取货员接单',
        status: 'success',
        operator: '取货员 ID1234',
        cost: '5mins',
    },
    {
        key: '4',
        time: '2017-10-01 13:00',
        rate: '申请审批通过',
        status: 'success',
        operator: '系统',
        cost: '1h',
    },
    {
        key: '5',
        time: '2017-10-01 12:00',
        rate: '发起退货申请',
        status: 'success',
        operator: '用户',
        cost: '5mins',
    },
];
var advancedOperation1 = [
    {
        key: 'op1',
        type: '订购关系生效',
        name: '曲丽丽',
        status: 'agree',
        updatedAt: '2017-10-03  19:23:12',
        memo: '-',
    },
    {
        key: 'op2',
        type: '财务复审',
        name: '付小小',
        status: 'reject',
        updatedAt: '2017-10-03  19:23:12',
        memo: '不通过原因',
    },
    {
        key: 'op3',
        type: '部门初审',
        name: '周毛毛',
        status: 'agree',
        updatedAt: '2017-10-03  19:23:12',
        memo: '-',
    },
    {
        key: 'op4',
        type: '提交订单',
        name: '林东东',
        status: 'agree',
        updatedAt: '2017-10-03  19:23:12',
        memo: '很棒',
    },
    {
        key: 'op5',
        type: '创建订单',
        name: '汗牙牙',
        status: 'agree',
        updatedAt: '2017-10-03  19:23:12',
        memo: '-',
    },
];
var advancedOperation2 = [
    {
        key: 'op1',
        type: '订购关系生效',
        name: '曲丽丽',
        status: 'agree',
        updatedAt: '2017-10-03  19:23:12',
        memo: '-',
    },
];
var advancedOperation3 = [
    {
        key: 'op1',
        type: '创建订单',
        name: '汗牙牙',
        status: 'agree',
        updatedAt: '2017-10-03  19:23:12',
        memo: '-',
    },
];
var PROFILES = {
    'GET /profile/progress': basicProgress,
    'GET /profile/goods': basicGoods,
    'GET /profile/advanced': { advancedOperation1: advancedOperation1, advancedOperation2: advancedOperation2, advancedOperation3: advancedOperation3 }
};


/***/ }),

/***/ "../../../../../_mock/_rule.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RULES; });
var list = [];
for (var i = 0; i < 46; i += 1) {
    list.push({
        key: i,
        disabled: ((i % 6) === 0),
        href: 'https://ant.design',
        avatar: ['https://gw.alipayobjects.com/zos/rmsportal/eeHMaZBwmTvLdIwMfBpg.png', 'https://gw.alipayobjects.com/zos/rmsportal/udxAbMEhpwthVVcjLXik.png'][i % 2],
        no: "TradeCode " + i,
        title: "\u4E00\u4E2A\u4EFB\u52A1\u540D\u79F0 " + i,
        owner: '曲丽丽',
        description: '这是一段描述',
        callNo: Math.floor(Math.random() * 1000),
        status: Math.floor(Math.random() * 10) % 4,
        updatedAt: new Date("2017-07-" + (Math.floor(i / 2) + 1)),
        createdAt: new Date("2017-07-" + (Math.floor(i / 2) + 1)),
        progress: Math.ceil(Math.random() * 100),
    });
}
function getRule(params) {
    var ret = list.slice();
    if (params.sorter) {
        var s_1 = params.sorter.split('_');
        ret = ret.sort(function (prev, next) {
            if (s_1[1] === 'descend') {
                return next[s_1[0]] - prev[s_1[0]];
            }
            return prev[s_1[0]] - next[s_1[0]];
        });
    }
    if (params.statusList && params.statusList.length > 0) {
        ret = ret.filter(function (data) { return params.statusList.indexOf(data.status) > -1; });
    }
    if (params.no) {
        ret = ret.filter(function (data) { return data.no.indexOf(params.no) > -1; });
    }
    return ret;
}
function removeRule(nos) {
    nos.split(',').forEach(function (no) {
        var idx = list.findIndex(function (w) { return w.no === no; });
        if (idx !== -1)
            list.splice(idx, 1);
    });
    return true;
}
function saveRule(description) {
    var i = Math.ceil(Math.random() * 10000);
    list.unshift({
        key: i,
        href: 'https://ant.design',
        avatar: ['https://gw.alipayobjects.com/zos/rmsportal/eeHMaZBwmTvLdIwMfBpg.png', 'https://gw.alipayobjects.com/zos/rmsportal/udxAbMEhpwthVVcjLXik.png'][i % 2],
        no: "TradeCode " + i,
        title: "\u4E00\u4E2A\u4EFB\u52A1\u540D\u79F0 " + i,
        owner: '曲丽丽',
        description: description,
        callNo: Math.floor(Math.random() * 1000),
        status: Math.floor(Math.random() * 10) % 2,
        updatedAt: new Date(),
        createdAt: new Date(),
        progress: Math.ceil(Math.random() * 100),
    });
}
var RULES = {
    '/rule': function (req) { return getRule(req.queryString); },
    'DELETE /rule': function (req) { return removeRule(req.queryString.nos); },
    'POST /rule': function (req) { return saveRule(req.body.description); }
};


/***/ }),

/***/ "../../../../../_mock/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__profile__ = __webpack_require__("../../../../../_mock/_profile.ts");
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "PROFILES", function() { return __WEBPACK_IMPORTED_MODULE_0__profile__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__rule__ = __webpack_require__("../../../../../_mock/_rule.ts");
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "RULES", function() { return __WEBPACK_IMPORTED_MODULE_1__rule__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__api__ = __webpack_require__("../../../../../_mock/_api.ts");
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "APIS", function() { return __WEBPACK_IMPORTED_MODULE_2__api__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__chart__ = __webpack_require__("../../../../../_mock/_chart.ts");
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "CHARTS", function() { return __WEBPACK_IMPORTED_MODULE_3__chart__["a"]; });






/***/ }),

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./account/account.module": [
		"../../../../../src/app/account/account.module.ts",
		"account.module"
	],
	"./admin/admin.module": [
		"../../../../../src/app/admin/admin.module.ts",
		"admin.module",
		"common"
	],
	"./home/home.module": [
		"../../../../../src/app/home/home.module.ts",
		"home.module",
		"common"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "../../../../../src/app/AppPreBootstrap.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppPreBootstrap; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_moment__ = __webpack_require__("../../../../moment/moment.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_AppConsts__ = __webpack_require__("../../../../../src/app/shared/AppConsts.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");



//abp 集成
var AppPreBootstrap = /** @class */ (function () {
    function AppPreBootstrap() {
    }
    AppPreBootstrap.run = function (callback) {
        AppPreBootstrap.getApplicationConfig(function () {
            AppPreBootstrap.getUserConfiguration(callback);
        });
    };
    AppPreBootstrap.bootstrap = function (moduleType, compilerOptions) {
        return Object(__WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(moduleType, compilerOptions);
    };
    AppPreBootstrap.getApplicationConfig = function (callback) {
        return abp.ajax({
            url: '/assets/appconfig.json',
            method: 'GET',
            headers: {
                'Abp.TenantId': abp.multiTenancy.getTenantIdCookie()
            }
        }).done(function (result) {
            __WEBPACK_IMPORTED_MODULE_1__shared_AppConsts__["a" /* AppConsts */].appBaseUrl = result.appBaseUrl;
            __WEBPACK_IMPORTED_MODULE_1__shared_AppConsts__["a" /* AppConsts */].remoteServiceBaseUrl = result.remoteServiceBaseUrl;
            callback();
        });
    };
    AppPreBootstrap.getCurrentClockProvider = function (currentProviderName) {
        if (currentProviderName === "unspecifiedClockProvider") {
            return abp.timing.unspecifiedClockProvider;
        }
        if (currentProviderName === "utcClockProvider") {
            return abp.timing.utcClockProvider;
        }
        return abp.timing.localClockProvider;
    };
    AppPreBootstrap.getUserConfiguration = function (callback) {
        var _this = this;
        return abp.ajax({
            url: __WEBPACK_IMPORTED_MODULE_1__shared_AppConsts__["a" /* AppConsts */].remoteServiceBaseUrl + '/AbpUserConfiguration/GetAll',
            method: 'GET',
            headers: {
                Authorization: 'Bearer ' + abp.auth.getToken(),
                '.AspNetCore.Culture': abp.utils.getCookieValue("Abp.Localization.CultureName"),
                'Abp.TenantId': abp.multiTenancy.getTenantIdCookie()
            }
        }).done(function (result) {
            $.extend(true, abp, result);
            abp.clock.provider = _this.getCurrentClockProvider(result.clock.provider);
            __WEBPACK_IMPORTED_MODULE_0_moment__["locale"](abp.localization.currentLanguage.name);
            if (abp.clock.provider.supportsMultipleTimezone) {
                __WEBPACK_IMPORTED_MODULE_0_moment__["tz"].setDefault(abp.timing.timeZoneInfo.iana.timeZoneId);
            }
            callback();
        });
    };
    return AppPreBootstrap;
}());



/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var routes = [
    { path: '', redirectTo: 'home/index', pathMatch: 'full' },
    {
        path: 'home',
        loadChildren: './home/home.module#HomeModule',
        data: { preload: true }
    },
    {
        path: 'account',
        loadChildren: './account/account.module#AccountModule',
        data: { preload: true }
    },
    {
        path: 'admin',
        loadChildren: './admin/admin.module#AdminModule',
        data: { preload: true }
    },
    { path: '**', redirectTo: 'home' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["i" /* RouterModule */].forRoot(routes, { useHash: true })],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["i" /* RouterModule */]],
            providers: []
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__delon_theme__ = __webpack_require__("../../../../@delon/theme/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operators__ = __webpack_require__("../../../../rxjs/_esm5/operators.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AppComponent = /** @class */ (function () {
    function AppComponent(theme, settings, router, titleSrv) {
        this.theme = theme;
        this.settings = settings;
        this.router = router;
        this.titleSrv = titleSrv;
    }
    Object.defineProperty(AppComponent.prototype, "isFixed", {
        get: function () { return this.settings.layout.fixed; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppComponent.prototype, "isBoxed", {
        get: function () { return this.settings.layout.boxed; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppComponent.prototype, "isCollapsed", {
        get: function () { return this.settings.layout.collapsed; },
        enumerable: true,
        configurable: true
    });
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.router.events.pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["e" /* filter */])(function (evt) { return evt instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* NavigationEnd */]; }), Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["h" /* map */])(function () { return _this.router.url; }))
            .subscribe(function (url) {
            _this.titleSrv.setTitleByUrl(url);
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"])('class.layout-fixed'),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [])
    ], AppComponent.prototype, "isFixed", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"])('class.layout-boxed'),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [])
    ], AppComponent.prototype, "isBoxed", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"])('class.aside-collapsed'),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [])
    ], AppComponent.prototype, "isCollapsed", null);
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: "<router-outlet></router-outlet>"
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__delon_theme__["i" /* ThemesService */],
            __WEBPACK_IMPORTED_MODULE_2__delon_theme__["h" /* SettingsService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["h" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__delon_theme__["j" /* TitleService */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export HttpLoaderFactory */
/* unused harmony export StartupServiceFactory */
/* unused harmony export getRemoteServiceBaseUrl */
/* unused harmony export getCurrentLanguage */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__delon_module__ = __webpack_require__("../../../../../src/app/delon.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__core_core_module__ = __webpack_require__("../../../../../src/app/core/core.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__abp_abp_module__ = __webpack_require__("../../../../abp-ng2-module/src/abp.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__layout_layout_module__ = __webpack_require__("../../../../../src/app/layout/layout.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__core_startup_startup_service__ = __webpack_require__("../../../../../src/app/core/startup/startup.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__core_net_default_interceptor__ = __webpack_require__("../../../../../src/app/core/net/default.interceptor.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__delon_auth__ = __webpack_require__("../../../../@delon/auth/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__angular_common_locales_zh_Hans__ = __webpack_require__("../../../common/locales/zh-Hans.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ngx_translate_core__ = __webpack_require__("../../../../@ngx-translate/core/@ngx-translate/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ngx_translate_http_loader__ = __webpack_require__("../../../../@ngx-translate/http-loader/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__delon_theme__ = __webpack_require__("../../../../@delon/theme/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__core_i18n_i18n_service__ = __webpack_require__("../../../../../src/app/core/i18n/i18n.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__shared_service_proxies_service_proxy_module__ = __webpack_require__("../../../../../src/app/shared/service-proxies/service-proxy.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__shared_AppConsts__ = __webpack_require__("../../../../../src/app/shared/AppConsts.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__shared_service_proxies_service_proxies__ = __webpack_require__("../../../../../src/app/shared/service-proxies/service-proxies.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__shared_session_app_session_service__ = __webpack_require__("../../../../../src/app/shared/session/app-session.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__AppPreBootstrap__ = __webpack_require__("../../../../../src/app/AppPreBootstrap.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









//import { RoutesModule } from './routes/routes.module';
//import { HomeModule } from './home/home.module'





// angular i18n


Object(__WEBPACK_IMPORTED_MODULE_14__angular_common__["registerLocaleData"])(__WEBPACK_IMPORTED_MODULE_15__angular_common_locales_zh_Hans__["a" /* default */]);
// i18n




//abp 集成





// AoT requires an exported function for factories
function HttpLoaderFactory(http) {
    return new __WEBPACK_IMPORTED_MODULE_17__ngx_translate_http_loader__["a" /* TranslateHttpLoader */](http, "assets/i18n/", '.json');
}
//export function StartupServiceFactory(startupService: StartupService): Function {
function StartupServiceFactory(injector) {
    //return () => startupService.load();
    return function () {
        return new Promise(function (resolve, reject) {
            __WEBPACK_IMPORTED_MODULE_24__AppPreBootstrap__["a" /* AppPreBootstrap */].run(function () {
                var appSessionService = injector.get(__WEBPACK_IMPORTED_MODULE_23__shared_session_app_session_service__["a" /* AppSessionService */]);
                appSessionService.init().then(function (result) {
                    resolve(result);
                }, function (err) {
                    reject(err);
                });
                var startupService = injector.get(__WEBPACK_IMPORTED_MODULE_11__core_startup_startup_service__["a" /* StartupService */]);
                startupService.load();
            });
        });
    };
}
function getRemoteServiceBaseUrl() {
    return __WEBPACK_IMPORTED_MODULE_21__shared_AppConsts__["a" /* AppConsts */].remoteServiceBaseUrl;
}
function getCurrentLanguage() {
    alert(abp.localization.currentLanguage.name);
    return abp.localization.currentLanguage.name;
}
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_4__delon_module__["b" /* DelonModule */],
                __WEBPACK_IMPORTED_MODULE_5__core_core_module__["a" /* CoreModule */],
                __WEBPACK_IMPORTED_MODULE_6__abp_abp_module__["b" /* AbpModule */],
                __WEBPACK_IMPORTED_MODULE_20__shared_service_proxies_service_proxy_module__["a" /* ServiceProxyModule */],
                __WEBPACK_IMPORTED_MODULE_7__shared_shared_module__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_10__layout_layout_module__["a" /* LayoutModule */],
                //RoutesModule,
                //HomeModule,
                __WEBPACK_IMPORTED_MODULE_9__app_routing_module__["a" /* AppRoutingModule */],
                // i18n
                __WEBPACK_IMPORTED_MODULE_16__ngx_translate_core__["b" /* TranslateModule */].forRoot({
                    loader: {
                        provide: __WEBPACK_IMPORTED_MODULE_16__ngx_translate_core__["a" /* TranslateLoader */],
                        useFactory: HttpLoaderFactory,
                        deps: [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]]
                    }
                })
            ],
            providers: [
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["LOCALE_ID"], useValue: 'zh-CN' },
                //{ provide: LOCALE_ID, useFactory: getCurrentLanguage }, //abp 集成
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HTTP_INTERCEPTORS */], useClass: __WEBPACK_IMPORTED_MODULE_13__delon_auth__["c" /* SimpleInterceptor */], multi: true },
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HTTP_INTERCEPTORS */], useClass: __WEBPACK_IMPORTED_MODULE_12__core_net_default_interceptor__["a" /* DefaultInterceptor */], multi: true },
                { provide: __WEBPACK_IMPORTED_MODULE_18__delon_theme__["a" /* ALAIN_I18N_TOKEN */], useClass: __WEBPACK_IMPORTED_MODULE_19__core_i18n_i18n_service__["a" /* I18NService */], multi: false },
                __WEBPACK_IMPORTED_MODULE_6__abp_abp_module__["a" /* ABP_HTTP_PROVIDER */],
                { provide: __WEBPACK_IMPORTED_MODULE_22__shared_service_proxies_service_proxies__["a" /* API_BASE_URL */], useFactory: getRemoteServiceBaseUrl },
                __WEBPACK_IMPORTED_MODULE_11__core_startup_startup_service__["a" /* StartupService */],
                __WEBPACK_IMPORTED_MODULE_23__shared_session_app_session_service__["a" /* AppSessionService */],
                {
                    provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["APP_INITIALIZER"],
                    useFactory: StartupServiceFactory,
                    deps: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injector"] /*StartupService*/],
                    multi: true
                }
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/core/core.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CoreModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__module_import_guard__ = __webpack_require__("../../../../../src/app/core/module-import-guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__i18n_i18n_service__ = __webpack_require__("../../../../../src/app/core/i18n/i18n.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var CoreModule = /** @class */ (function () {
    function CoreModule(parentModule) {
        Object(__WEBPACK_IMPORTED_MODULE_1__module_import_guard__["a" /* throwIfAlreadyLoaded */])(parentModule, 'CoreModule');
    }
    CoreModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            providers: [
                __WEBPACK_IMPORTED_MODULE_2__i18n_i18n_service__["a" /* I18NService */]
            ]
        }),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Optional"])()), __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["SkipSelf"])()),
        __metadata("design:paramtypes", [CoreModule])
    ], CoreModule);
    return CoreModule;
}());



/***/ }),

/***/ "../../../../../src/app/core/i18n/i18n.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return I18NService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng_zorro_antd__ = __webpack_require__("../../../../ng-zorro-antd/esm5/antd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__("../../../../@ngx-translate/core/@ngx-translate/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__delon_theme__ = __webpack_require__("../../../../@delon/theme/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var I18NService = /** @class */ (function () {
    function I18NService(settings, nzLocalService, translate, injector) {
        this.nzLocalService = nzLocalService;
        this.translate = translate;
        this.injector = injector;
        this._default = 'zh-CN';
        this._langs = [
            { code: 'en', text: 'English' },
            { code: 'zh-CN', text: '中文' }
        ];
        this._default = settings.layout.lang || translate.getBrowserLang();
        var lans = this._langs.map(function (item) { return item.code; });
        if (!lans.includes(this._default)) {
            this._default = lans[1]; //默认还是中文
        }
        translate.addLangs(lans);
    }
    I18NService.prototype.use = function (lang, firstLoad) {
        if (lang === void 0) { lang = null; }
        if (firstLoad === void 0) { firstLoad = true; }
        lang = lang || this.translate.getDefaultLang();
        this.nzLocalService.setLocale(lang === 'en' ? __WEBPACK_IMPORTED_MODULE_2_ng_zorro_antd__["enUS"] : __WEBPACK_IMPORTED_MODULE_2_ng_zorro_antd__["zhCN"]);
        // need reload router because of ng-zorro-antd local system
        if (!firstLoad)
            this.injector.get(__WEBPACK_IMPORTED_MODULE_1__angular_router__["h" /* Router */]).navigate(['/']);
        return this.translate.use(lang);
    };
    /** 获取语言列表 */
    I18NService.prototype.getLangs = function () {
        return this._langs;
    };
    /** 翻译 */
    I18NService.prototype.fanyi = function (key) {
        return this.translate.instant(key);
    };
    Object.defineProperty(I18NService.prototype, "defaultLang", {
        /** 默认语言 */
        get: function () {
            return this._default;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(I18NService.prototype, "currentLang", {
        /** 当前语言 */
        get: function () {
            return this.translate.currentLang || this.translate.getDefaultLang() || this._default;
        },
        enumerable: true,
        configurable: true
    });
    I18NService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__delon_theme__["h" /* SettingsService */],
            __WEBPACK_IMPORTED_MODULE_2_ng_zorro_antd__["NzLocaleService"],
            __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injector"]])
    ], I18NService);
    return I18NService;
}());



/***/ }),

/***/ "../../../../../src/app/core/module-import-guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = throwIfAlreadyLoaded;
// https://angular.io/guide/styleguide#style-04-12
function throwIfAlreadyLoaded(parentModule, moduleName) {
    if (parentModule) {
        throw new Error(moduleName + " has already been loaded. Import Core modules in the AppModule only.");
    }
}


/***/ }),

/***/ "../../../../../src/app/core/net/default.interceptor.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DefaultInterceptor; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_observable_ErrorObservable__ = __webpack_require__("../../../../rxjs/_esm5/observable/ErrorObservable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_operators__ = __webpack_require__("../../../../rxjs/_esm5/operators.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__env_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
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
 * 默认HTTP拦截器，其注册细节见 `app.module.ts`
 */
var DefaultInterceptor = /** @class */ (function () {
    function DefaultInterceptor(injector) {
        this.injector = injector;
    }
    DefaultInterceptor.prototype.goLogin = function () {
        var router = this.injector.get(__WEBPACK_IMPORTED_MODULE_1__angular_router__["h" /* Router */]);
        this.injector.get(__WEBPACK_IMPORTED_MODULE_1__angular_router__["h" /* Router */]).navigate(['/account/login']);
    };
    DefaultInterceptor.prototype.intercept = function (req, next) {
        // TIPS：原TOKEN信息已交由 `@delon/auth` 处理
        // Document: http://ng-alain.com/docs/auth
        var _this = this;
        // 统一加上服务端前缀
        var url = req.url;
        if (!url.startsWith('https://') && !url.startsWith('http://')) {
            url = __WEBPACK_IMPORTED_MODULE_6__env_environment__["a" /* environment */].SERVER_URL + url;
        }
        var newReq = req.clone({
            url: url
        });
        return next.handle(newReq).pipe(Object(__WEBPACK_IMPORTED_MODULE_5_rxjs_operators__["i" /* mergeMap */])(function (event) {
            // 允许统一对请求错误处理，这是因为一个请求若是业务上错误的情况下其HTTP请求的状态是200的情况下需要
            if (event instanceof __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["f" /* HttpResponse */] && event.status !== 200) {
                // 业务处理：observer.error 会跳转至后面的 `catch`
                // return ErrorObservable.create(event);
            }
            // 若一切都正常，则后续操作
            return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["a" /* Observable */].create(function (observer) { return observer.next(event); });
        }), Object(__WEBPACK_IMPORTED_MODULE_5_rxjs_operators__["a" /* catchError */])(function (res) {
            // 业务处理：一些通用操作
            switch (res.status) {
                case 401:// 未登录状态码
                    _this.goLogin();
                    break;
                case 200:
                    // 业务层级错误处理
                    console.log('业务错误');
                    break;
                case 404:
                    // 404
                    break;
            }
            // 以错误的形式结束本次请求
            return __WEBPACK_IMPORTED_MODULE_4_rxjs_observable_ErrorObservable__["a" /* ErrorObservable */].create(event);
        }));
    };
    DefaultInterceptor = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injector"]])
    ], DefaultInterceptor);
    return DefaultInterceptor;
}());



/***/ }),

/***/ "../../../../../src/app/core/startup/startup.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StartupService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_observable_zip__ = __webpack_require__("../../../../rxjs/_esm5/observable/zip.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__("../../../../@ngx-translate/core/@ngx-translate/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__delon_theme__ = __webpack_require__("../../../../@delon/theme/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__delon_acl__ = __webpack_require__("../../../../@delon/acl/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__i18n_i18n_service__ = __webpack_require__("../../../../../src/app/core/i18n/i18n.service.ts");
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
 * 用于应用启动时
 * 一般用来获取应用所需要的基础数据等
 */
var StartupService = /** @class */ (function () {
    function StartupService(menuService, translate, i18n, settingService, aclService, titleService, httpClient, injector) {
        this.menuService = menuService;
        this.translate = translate;
        this.i18n = i18n;
        this.settingService = settingService;
        this.aclService = aclService;
        this.titleService = titleService;
        this.httpClient = httpClient;
        this.injector = injector;
    }
    StartupService.prototype.load = function () {
        var _this = this;
        // only works with promises
        // https://github.com/angular/angular/issues/15088
        return new Promise(function (resolve, reject) {
            Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_observable_zip__["a" /* zip */])(_this.httpClient.get("assets/i18n/" + _this.i18n.defaultLang + ".json"), 
            //this.httpClient.get('assets/app-data.json')
            _this.httpClient.get('assets/abp-data.json')).subscribe(function (_a) {
                var langData = _a[0], appData = _a[1];
                // setting language data
                //alert('100' + this.i18n.defaultLang)
                _this.translate.setTranslation(_this.i18n.defaultLang, langData);
                _this.translate.setDefaultLang(_this.i18n.defaultLang);
                // application data
                var res = appData;
                // 应用信息：包括站点名、描述、年份
                _this.settingService.setApp(res.app);
                // 用户信息：包括姓名、头像、邮箱地址
                //this.settingService.setUser(res.user);
                // ACL：设置权限为全量
                //this.aclService.setFull(true);
                // 初始化菜单
                _this.menuService.add(res.menu);
                // 设置页面标题的后缀
                _this.titleService.suffix = res.app.name;
                resolve(res);
            }, function (err) {
                resolve(null);
            });
        });
    };
    StartupService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__delon_theme__["d" /* MenuService */],
            __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_6__i18n_i18n_service__["a" /* I18NService */],
            __WEBPACK_IMPORTED_MODULE_4__delon_theme__["h" /* SettingsService */],
            __WEBPACK_IMPORTED_MODULE_5__delon_acl__["a" /* ACLService */],
            __WEBPACK_IMPORTED_MODULE_4__delon_theme__["j" /* TitleService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injector"]])
    ], StartupService);
    return StartupService;
}());



/***/ }),

/***/ "../../../../../src/app/delon.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return ZORROMODULES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ABCMODULES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return DelonModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_module_import_guard__ = __webpack_require__("../../../../../src/app/core/module-import-guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng_zorro_antd__ = __webpack_require__("../../../../ng-zorro-antd/esm5/antd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__delon_abc__ = __webpack_require__("../../../../@delon/abc/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng_zorro_antd_extra__ = __webpack_require__("../../../../ng-zorro-antd-extra/bundles/ng-zorro-antd-extra.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng_zorro_antd_extra___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ng_zorro_antd_extra__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__delon_theme__ = __webpack_require__("../../../../@delon/theme/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__delon_auth__ = __webpack_require__("../../../../@delon/auth/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__delon_acl__ = __webpack_require__("../../../../@delon/acl/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__delon_cache__ = __webpack_require__("../../../../@delon/cache/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__delon_mock__ = __webpack_require__("../../../../@delon/mock/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__mock__ = __webpack_require__("../../../../../_mock/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__env_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
/**
 * 进一步对基础模块的导入提炼
 * 有关模块注册指导原则请参考：https://github.com/cipchk/ng-alain/issues/180
 */


// region: zorro modules

var ZORROMODULES = [
    // LoggerModule,
    // NzLocaleModule,
    __WEBPACK_IMPORTED_MODULE_2_ng_zorro_antd__["NzButtonModule"],
    __WEBPACK_IMPORTED_MODULE_2_ng_zorro_antd__["NzAlertModule"],
    __WEBPACK_IMPORTED_MODULE_2_ng_zorro_antd__["NzBadgeModule"],
    // NzCalendarModule,
    __WEBPACK_IMPORTED_MODULE_2_ng_zorro_antd__["NzCascaderModule"],
    __WEBPACK_IMPORTED_MODULE_2_ng_zorro_antd__["NzCheckboxModule"],
    __WEBPACK_IMPORTED_MODULE_2_ng_zorro_antd__["NzDatePickerModule"],
    __WEBPACK_IMPORTED_MODULE_2_ng_zorro_antd__["NzFormModule"],
    __WEBPACK_IMPORTED_MODULE_2_ng_zorro_antd__["NzInputModule"],
    __WEBPACK_IMPORTED_MODULE_2_ng_zorro_antd__["NzInputNumberModule"],
    __WEBPACK_IMPORTED_MODULE_2_ng_zorro_antd__["NzGridModule"],
    __WEBPACK_IMPORTED_MODULE_2_ng_zorro_antd__["NzMessageModule"],
    __WEBPACK_IMPORTED_MODULE_2_ng_zorro_antd__["NzModalModule"],
    __WEBPACK_IMPORTED_MODULE_2_ng_zorro_antd__["NzNotificationModule"],
    __WEBPACK_IMPORTED_MODULE_2_ng_zorro_antd__["NzPaginationModule"],
    __WEBPACK_IMPORTED_MODULE_2_ng_zorro_antd__["NzPopconfirmModule"],
    __WEBPACK_IMPORTED_MODULE_2_ng_zorro_antd__["NzPopoverModule"],
    __WEBPACK_IMPORTED_MODULE_2_ng_zorro_antd__["NzRadioModule"],
    __WEBPACK_IMPORTED_MODULE_2_ng_zorro_antd__["NzRateModule"],
    __WEBPACK_IMPORTED_MODULE_2_ng_zorro_antd__["NzSelectModule"],
    __WEBPACK_IMPORTED_MODULE_2_ng_zorro_antd__["NzSpinModule"],
    __WEBPACK_IMPORTED_MODULE_2_ng_zorro_antd__["NzSliderModule"],
    __WEBPACK_IMPORTED_MODULE_2_ng_zorro_antd__["NzSwitchModule"],
    __WEBPACK_IMPORTED_MODULE_2_ng_zorro_antd__["NzProgressModule"],
    __WEBPACK_IMPORTED_MODULE_2_ng_zorro_antd__["NzTableModule"],
    __WEBPACK_IMPORTED_MODULE_2_ng_zorro_antd__["NzTabsModule"],
    __WEBPACK_IMPORTED_MODULE_2_ng_zorro_antd__["NzTagModule"],
    __WEBPACK_IMPORTED_MODULE_2_ng_zorro_antd__["NzTimePickerModule"],
    __WEBPACK_IMPORTED_MODULE_2_ng_zorro_antd__["NzUtilModule"],
    __WEBPACK_IMPORTED_MODULE_2_ng_zorro_antd__["NzStepsModule"],
    __WEBPACK_IMPORTED_MODULE_2_ng_zorro_antd__["NzDropDownModule"],
    __WEBPACK_IMPORTED_MODULE_2_ng_zorro_antd__["NzMenuModule"],
    __WEBPACK_IMPORTED_MODULE_2_ng_zorro_antd__["NzBreadCrumbModule"],
    __WEBPACK_IMPORTED_MODULE_2_ng_zorro_antd__["NzLayoutModule"],
    __WEBPACK_IMPORTED_MODULE_2_ng_zorro_antd__["NzRootModule"],
    __WEBPACK_IMPORTED_MODULE_2_ng_zorro_antd__["NzCarouselModule"],
    // NzCardModule,
    __WEBPACK_IMPORTED_MODULE_2_ng_zorro_antd__["NzCollapseModule"],
    __WEBPACK_IMPORTED_MODULE_2_ng_zorro_antd__["NzTimelineModule"],
    __WEBPACK_IMPORTED_MODULE_2_ng_zorro_antd__["NzToolTipModule"],
    // NzBackTopModule,
    // NzAffixModule,
    // NzAnchorModule,
    __WEBPACK_IMPORTED_MODULE_2_ng_zorro_antd__["NzAvatarModule"]
];
// endregion
// region: @delon/abc modules

var ABCMODULES = [
    __WEBPACK_IMPORTED_MODULE_3__delon_abc__["s" /* AdSimpleTableModule */],
    __WEBPACK_IMPORTED_MODULE_3__delon_abc__["q" /* AdReuseTabModule */],
    __WEBPACK_IMPORTED_MODULE_3__delon_abc__["a" /* AdAvatarListModule */],
    __WEBPACK_IMPORTED_MODULE_3__delon_abc__["b" /* AdChartsModule */],
    __WEBPACK_IMPORTED_MODULE_3__delon_abc__["c" /* AdCountDownModule */],
    __WEBPACK_IMPORTED_MODULE_3__delon_abc__["d" /* AdDescListModule */],
    __WEBPACK_IMPORTED_MODULE_3__delon_abc__["f" /* AdEllipsisModule */],
    __WEBPACK_IMPORTED_MODULE_3__delon_abc__["g" /* AdErrorCollectModule */],
    __WEBPACK_IMPORTED_MODULE_3__delon_abc__["h" /* AdExceptionModule */],
    __WEBPACK_IMPORTED_MODULE_3__delon_abc__["i" /* AdFooterToolbarModule */],
    __WEBPACK_IMPORTED_MODULE_3__delon_abc__["k" /* AdGlobalFooterModule */],
    __WEBPACK_IMPORTED_MODULE_3__delon_abc__["m" /* AdNoticeIconModule */],
    __WEBPACK_IMPORTED_MODULE_3__delon_abc__["n" /* AdNumberInfoModule */],
    __WEBPACK_IMPORTED_MODULE_3__delon_abc__["o" /* AdProHeaderModule */],
    __WEBPACK_IMPORTED_MODULE_3__delon_abc__["p" /* AdResultModule */],
    __WEBPACK_IMPORTED_MODULE_3__delon_abc__["r" /* AdSidebarNavModule */],
    __WEBPACK_IMPORTED_MODULE_3__delon_abc__["t" /* AdStandardFormRowModule */],
    __WEBPACK_IMPORTED_MODULE_3__delon_abc__["u" /* AdTagSelectModule */],
    __WEBPACK_IMPORTED_MODULE_3__delon_abc__["v" /* AdTrendModule */],
    __WEBPACK_IMPORTED_MODULE_3__delon_abc__["e" /* AdDownFileModule */],
    __WEBPACK_IMPORTED_MODULE_3__delon_abc__["l" /* AdImageModule */],
    __WEBPACK_IMPORTED_MODULE_3__delon_abc__["w" /* AdUtilsModule */],
    __WEBPACK_IMPORTED_MODULE_3__delon_abc__["j" /* AdFullContentModule */],
    __WEBPACK_IMPORTED_MODULE_3__delon_abc__["x" /* AdXlsxModule */],
    __WEBPACK_IMPORTED_MODULE_3__delon_abc__["y" /* AdZipModule */]
];
// endregion







// mock



var MOCKMODULE = !__WEBPACK_IMPORTED_MODULE_11__env_environment__["a" /* environment */].production || __WEBPACK_IMPORTED_MODULE_11__env_environment__["a" /* environment */].chore === true ?
    [__WEBPACK_IMPORTED_MODULE_9__delon_mock__["a" /* DelonMockModule */].forRoot({ data: __WEBPACK_IMPORTED_MODULE_10__mock__ })] : [];
var DelonModule = /** @class */ (function () {
    function DelonModule(parentModule) {
        Object(__WEBPACK_IMPORTED_MODULE_1__core_module_import_guard__["a" /* throwIfAlreadyLoaded */])(parentModule, 'DelonModule');
    }
    DelonModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_ng_zorro_antd__["NgZorroAntdModule"].forRoot(),
                __WEBPACK_IMPORTED_MODULE_4_ng_zorro_antd_extra__["NgZorroAntdExtraModule"].forRoot(),
                // theme
                __WEBPACK_IMPORTED_MODULE_5__delon_theme__["b" /* AlainThemeModule */].forRoot(),
                // abc
                __WEBPACK_IMPORTED_MODULE_3__delon_abc__["z" /* AlainABCModule */].forRoot(),
                // auth
                __WEBPACK_IMPORTED_MODULE_6__delon_auth__["a" /* AlainAuthModule */].forRoot({
                    // ignores: [ `\\/login`, `assets\\/` ],
                    //login_url: `/passport/login`
                    login_url: "/account/login"
                }),
                // acl
                __WEBPACK_IMPORTED_MODULE_7__delon_acl__["b" /* AlainACLModule */].forRoot(),
                // cache
                __WEBPACK_IMPORTED_MODULE_8__delon_cache__["a" /* DelonCacheModule */].forRoot()
            ].concat(MOCKMODULE)
        }),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Optional"])()), __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["SkipSelf"])()),
        __metadata("design:paramtypes", [DelonModule])
    ], DelonModule);
    return DelonModule;
}());



/***/ }),

/***/ "../../../../../src/app/layout/default/default.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\r\n    <div class=\"router-progress-bar\" *ngIf=\"isFetching\"></div>\r\n    <app-header class=\"header\"></app-header>\r\n    <app-sidebar class=\"aside\"></app-sidebar>\r\n    <section class=\"content\">\r\n        <reuse-tab></reuse-tab>\r\n        <router-outlet></router-outlet>\r\n    </section>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/layout/default/default.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LayoutDefaultComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng_zorro_antd__ = __webpack_require__("../../../../ng-zorro-antd/esm5/antd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__delon_theme__ = __webpack_require__("../../../../@delon/theme/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LayoutDefaultComponent = /** @class */ (function () {
    function LayoutDefaultComponent(router, scroll, _message, menuSrv, settings) {
        var _this = this;
        this._message = _message;
        this.menuSrv = menuSrv;
        this.settings = settings;
        this.isFetching = false;
        // scroll to top in change page
        router.events.subscribe(function (evt) {
            if (!_this.isFetching && evt instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["f" /* RouteConfigLoadStart */]) {
                _this.isFetching = true;
            }
            if (evt instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["e" /* NavigationError */]) {
                _this.isFetching = false;
                _message.error("\u65E0\u6CD5\u52A0\u8F7D" + evt.url + "\u8DEF\u7531", { nzDuration: 1000 * 3 });
                return;
            }
            if (!(evt instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* NavigationEnd */])) {
                return;
            }
            setTimeout(function () {
                scroll.scrollToTop();
                _this.isFetching = false;
            }, 100);
        });
    }
    LayoutDefaultComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'layout-default',
            template: __webpack_require__("../../../../../src/app/layout/default/default.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["h" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3__delon_theme__["g" /* ScrollService */],
            __WEBPACK_IMPORTED_MODULE_2_ng_zorro_antd__["NzMessageService"],
            __WEBPACK_IMPORTED_MODULE_3__delon_theme__["d" /* MenuService */],
            __WEBPACK_IMPORTED_MODULE_3__delon_theme__["h" /* SettingsService */]])
    ], LayoutDefaultComponent);
    return LayoutDefaultComponent;
}());



/***/ }),

/***/ "../../../../../src/app/layout/default/header/components/fullscreen.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderFullScreenComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_screenfull__ = __webpack_require__("../../../../screenfull/dist/screenfull.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_screenfull___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_screenfull__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HeaderFullScreenComponent = /** @class */ (function () {
    function HeaderFullScreenComponent() {
        this.status = false;
    }
    HeaderFullScreenComponent.prototype._click = function () {
        if (__WEBPACK_IMPORTED_MODULE_1_screenfull__["enabled"]) {
            __WEBPACK_IMPORTED_MODULE_1_screenfull__["toggle"]();
        }
        this.status = !__WEBPACK_IMPORTED_MODULE_1_screenfull__["isFullscreen"];
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('click'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], HeaderFullScreenComponent.prototype, "_click", null);
    HeaderFullScreenComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'header-fullscreen',
            template: "\n    <i class=\"anticon anticon-{{status ? 'shrink' : 'arrows-alt'}}\"></i>\n    {{(status ? 'fullscreen-exit' : 'fullscreen') | translate }}\n    "
        })
    ], HeaderFullScreenComponent);
    return HeaderFullScreenComponent;
}());



/***/ }),

/***/ "../../../../../src/app/layout/default/header/components/icon.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderIconComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var HeaderIconComponent = /** @class */ (function () {
    function HeaderIconComponent() {
        this.loading = true;
    }
    HeaderIconComponent.prototype.change = function () {
        var _this = this;
        setTimeout(function () { return _this.loading = false; }, 500);
    };
    HeaderIconComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'header-icon',
            template: "\n    <nz-dropdown nzTrigger=\"click\" nzPlacement=\"bottomRight\" (nzVisibleChange)=\"change()\">\n        <div class=\"item\" nz-dropdown>\n            <i class=\"anticon anticon-appstore-o\"></i>\n        </div>\n        <div nz-menu class=\"wd-xl animated jello\">\n            <nz-spin [nzSpinning]=\"loading\" [nzTip]=\"'\u6B63\u5728\u8BFB\u53D6\u6570\u636E...'\">\n                <div nz-row [nzType]=\"'flex'\" [nzJustify]=\"'center'\" [nzAlign]=\"'middle'\" class=\"app-icons\">\n                    <div nz-col [nzSpan]=\"6\">\n                        <i class=\"anticon anticon-calendar bg-error text-white\"></i>\n                        <small>Calendar</small>\n                    </div>\n                    <div nz-col [nzSpan]=\"6\">\n                        <i class=\"anticon anticon-file bg-teal text-white\"></i>\n                        <small>Files</small>\n                    </div>\n                    <div nz-col [nzSpan]=\"6\">\n                        <i class=\"anticon anticon-cloud bg-success text-white\"></i>\n                        <small>Cloud</small>\n                    </div>\n                    <div nz-col [nzSpan]=\"6\">\n                        <i class=\"anticon anticon-star-o bg-pink text-white\"></i>\n                        <small>Star</small>\n                    </div>\n                    <div nz-col [nzSpan]=\"6\">\n                        <i class=\"anticon anticon-team bg-purple text-white\"></i>\n                        <small>Team</small>\n                    </div>\n                    <div nz-col [nzSpan]=\"6\">\n                        <i class=\"anticon anticon-scan bg-warning text-white\"></i>\n                        <small>QR</small>\n                    </div>\n                    <div nz-col [nzSpan]=\"6\">\n                        <i class=\"anticon anticon-pay-circle-o bg-cyan text-white\"></i>\n                        <small>Pay</small>\n                    </div>\n                    <div nz-col [nzSpan]=\"6\">\n                        <i class=\"anticon anticon-printer bg-grey text-white\"></i>\n                        <small>Print</small>\n                    </div>\n                </div>\n            </nz-spin>\n        </div>\n    </nz-dropdown>\n    "
        })
    ], HeaderIconComponent);
    return HeaderIconComponent;
}());



/***/ }),

/***/ "../../../../../src/app/layout/default/header/components/langs.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderLangsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__delon_theme__ = __webpack_require__("../../../../@delon/theme/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_i18n_i18n_service__ = __webpack_require__("../../../../../src/app/core/i18n/i18n.service.ts");
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



//abp 集成

var HeaderLangsComponent = /** @class */ (function (_super) {
    __extends(HeaderLangsComponent, _super);
    function HeaderLangsComponent(injector, menuService, settings, tsServ) {
        var _this = _super.call(this, injector) || this;
        _this.menuService = menuService;
        _this.settings = settings;
        _this.tsServ = tsServ;
        _this.langs = _this.tsServ.getLangs();
        return _this;
        //alert('200' + JSON.stringify(this.langs))
    }
    HeaderLangsComponent.prototype.change = function (lang) {
        var _this = this;
        //alert('300' + lang)
        this.tsServ.use(lang, false).subscribe(function () {
            _this.menuService.resume();
        });
        this.settings.setLayout('lang', lang);
        //集成abp部分
        this.abpchange(lang);
    };
    //集成abp 2018-1-14
    HeaderLangsComponent.prototype.abpchange = function (lang) {
        abp.utils.setCookieValue("Abp.Localization.CultureName", lang, new Date(new Date().getTime() + 5 * 365 * 86400000), //5 year
        abp.appPath);
        location.reload();
    };
    HeaderLangsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'header-langs',
            template: "\n    <nz-dropdown>\n        <div nz-dropdown>\n            <i class=\"anticon anticon-edit\"></i>\n            {{ 'language' | translate}}\n            <i class=\"anticon anticon-down\"></i>\n        </div>\n        <ul nz-menu>\n            <li nz-menu-item *ngFor=\"let item of langs\"\n            [nzSelected]=\"item.code === settings.layout.lang\"\n                (click)=\"change(item.code)\">{{item.text}}</li>\n        </ul>\n    </nz-dropdown>\n    "
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injector"],
            __WEBPACK_IMPORTED_MODULE_1__delon_theme__["d" /* MenuService */],
            __WEBPACK_IMPORTED_MODULE_1__delon_theme__["h" /* SettingsService */],
            __WEBPACK_IMPORTED_MODULE_2__core_i18n_i18n_service__["a" /* I18NService */]])
    ], HeaderLangsComponent);
    return HeaderLangsComponent;
}(__WEBPACK_IMPORTED_MODULE_3__shared_app_component_base__["a" /* AppComponentBase */]));



/***/ }),

/***/ "../../../../../src/app/layout/default/header/components/notify.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderNotifyComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ng_zorro_antd__ = __webpack_require__("../../../../ng-zorro-antd/esm5/antd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_observable_ArrayObservable__ = __webpack_require__("../../../../rxjs/_esm5/observable/ArrayObservable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operators__ = __webpack_require__("../../../../rxjs/_esm5/operators.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_moment__ = __webpack_require__("../../../../moment/moment.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__delon_theme__ = __webpack_require__("../../../../@delon/theme/index.js");
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
 * 菜单通知
 */
var HeaderNotifyComponent = /** @class */ (function () {
    function HeaderNotifyComponent(msg, settings) {
        this.msg = msg;
        this.settings = settings;
        this.data = [
            { title: '通知', list: [], emptyText: '你已查看所有通知', emptyImage: 'https://gw.alipayobjects.com/zos/rmsportal/wAhyIChODzsoKIOBHcBk.svg' },
            { title: '消息', list: [], emptyText: '您已读完所有消息', emptyImage: 'https://gw.alipayobjects.com/zos/rmsportal/sAuJeJzSKbUmHfBQRzmZ.svg' },
            { title: '待办', list: [], emptyText: '你已完成所有待办', emptyImage: 'https://gw.alipayobjects.com/zos/rmsportal/HsIsxMZiWKrNUavQUXqx.svg' }
        ];
        this.count = 0;
        this.loading = false;
    }
    HeaderNotifyComponent.prototype.ngOnInit = function () {
        // mock data
        this.count = this.settings.user.notifyCount || 12;
    };
    HeaderNotifyComponent.prototype.parseGroup = function (data) {
        var _this = this;
        console.log('parseGroup');
        data.pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["b" /* concatMap */])(function (i) { return i; }), Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["h" /* map */])(function (i) {
            if (i.datetime)
                i.datetime = __WEBPACK_IMPORTED_MODULE_4_moment__(i.datetime).fromNow();
            // change to color
            if (i.status) {
                i.color = ({
                    todo: '',
                    processing: 'blue',
                    urgent: 'red',
                    doing: 'gold',
                })[i.status];
            }
            return i;
        }), Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["g" /* groupBy */])(function (x) { return x.type; }), Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["i" /* mergeMap */])(function (g) { return g.pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["l" /* toArray */])()); }), Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["k" /* tap */])(function (ls) {
            _this.data.find(function (w) { return w.title === ls[0].type; }).list = ls;
        })).subscribe(function (res) { return _this.loading = false; });
    };
    HeaderNotifyComponent.prototype.loadData = function (res) {
        if (!res || this.loading)
            return;
        this.loading = true;
        // region: mock http request
        this.parseGroup(__WEBPACK_IMPORTED_MODULE_2_rxjs_observable_ArrayObservable__["a" /* ArrayObservable */].of([{
                id: '000000001',
                avatar: 'https://gw.alipayobjects.com/zos/rmsportal/ThXAXghbEsBCCSDihZxY.png',
                title: '你收到了 14 份新周报',
                datetime: '2017-08-09',
                type: '通知',
            }, {
                id: '000000002',
                avatar: 'https://gw.alipayobjects.com/zos/rmsportal/OKJXDXrmkNshAMvwtvhu.png',
                title: '你推荐的 曲妮妮 已通过第三轮面试',
                datetime: '2017-08-08',
                type: '通知',
            }, {
                id: '000000003',
                avatar: 'https://gw.alipayobjects.com/zos/rmsportal/kISTdvpyTAhtGxpovNWd.png',
                title: '这种模板可以区分多种通知类型',
                datetime: '2017-08-07',
                read: true,
                type: '通知',
            }, {
                id: '000000004',
                avatar: 'https://gw.alipayobjects.com/zos/rmsportal/GvqBnKhFgObvnSGkDsje.png',
                title: '左侧图标用于区分不同的类型',
                datetime: '2017-08-07',
                type: '通知',
            }, {
                id: '000000005',
                avatar: 'https://gw.alipayobjects.com/zos/rmsportal/ThXAXghbEsBCCSDihZxY.png',
                title: '内容不要超过两行字，超出时自动截断',
                datetime: '2017-08-07',
                type: '通知',
            }, {
                id: '000000006',
                avatar: 'https://gw.alipayobjects.com/zos/rmsportal/fcHMVNCjPOsbUGdEduuv.jpeg',
                title: '曲丽丽 评论了你',
                description: '描述信息描述信息描述信息',
                datetime: '2017-08-07',
                type: '消息',
            }, {
                id: '000000007',
                avatar: 'https://gw.alipayobjects.com/zos/rmsportal/fcHMVNCjPOsbUGdEduuv.jpeg',
                title: '朱偏右 回复了你',
                description: '这种模板用于提醒谁与你发生了互动，左侧放『谁』的头像',
                datetime: '2017-08-07',
                type: '消息',
            }, {
                id: '000000008',
                avatar: 'https://gw.alipayobjects.com/zos/rmsportal/fcHMVNCjPOsbUGdEduuv.jpeg',
                title: '标题',
                description: '这种模板用于提醒谁与你发生了互动，左侧放『谁』的头像',
                datetime: '2017-08-07',
                type: '消息',
            }, {
                id: '000000009',
                title: '任务名称',
                description: '任务需要在 2017-01-12 20:00 前启动',
                extra: '未开始',
                status: 'todo',
                type: '待办',
            }, {
                id: '000000010',
                title: '第三方紧急代码变更',
                description: '冠霖提交于 2017-01-06，需在 2017-01-07 前完成代码变更任务',
                extra: '马上到期',
                status: 'urgent',
                type: '待办',
            }, {
                id: '000000011',
                title: '信息安全考试',
                description: '指派竹尔于 2017-01-09 前完成更新并发布',
                extra: '已耗时 8 天',
                status: 'doing',
                type: '待办',
            }, {
                id: '000000012',
                title: 'ABCD 版本发布',
                description: '冠霖提交于 2017-01-06，需在 2017-01-07 前完成代码变更任务',
                extra: '进行中',
                status: 'processing',
                type: '待办',
            }
        ]).pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["d" /* delay */])(1000)));
        // endregion
    };
    HeaderNotifyComponent.prototype.clear = function (type) {
        this.msg.success("\u6E05\u7A7A\u4E86 " + type);
    };
    HeaderNotifyComponent.prototype.select = function (res) {
        this.msg.success("\u70B9\u51FB\u4E86 " + res.title + " \u7684 " + res.item.title);
    };
    HeaderNotifyComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'header-notify',
            template: "\n    <notice-icon\n        [data]=\"data\"\n        [count]=\"count\"\n        [loading]=\"loading\"\n        (select)=\"select($event)\"\n        (clear)=\"clear($event)\"\n        (popupVisibleChange)=\"loadData($event)\"></notice-icon>\n    "
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_ng_zorro_antd__["NzMessageService"], __WEBPACK_IMPORTED_MODULE_5__delon_theme__["h" /* SettingsService */]])
    ], HeaderNotifyComponent);
    return HeaderNotifyComponent;
}());



/***/ }),

/***/ "../../../../../src/app/layout/default/header/components/search.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderSearchComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderSearchComponent = /** @class */ (function () {
    function HeaderSearchComponent(el) {
        this.el = el;
        this.focus = false;
        this.searchToggled = false;
    }
    Object.defineProperty(HeaderSearchComponent.prototype, "toggleChange", {
        set: function (value) {
            var _this = this;
            if (typeof value === 'undefined')
                return;
            console.log('toggleChange', value);
            this.searchToggled = true;
            this.focus = true;
            setTimeout(function () { return _this.qIpt.focus(); }, 300);
        },
        enumerable: true,
        configurable: true
    });
    HeaderSearchComponent.prototype.ngAfterViewInit = function () {
        this.qIpt = this.el.nativeElement.querySelector('.ant-input');
    };
    HeaderSearchComponent.prototype.qFocus = function () {
        this.focus = true;
    };
    HeaderSearchComponent.prototype.qBlur = function () {
        this.focus = false;
        this.searchToggled = false;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"])('class.header-search__focus'),
        __metadata("design:type", Object)
    ], HeaderSearchComponent.prototype, "focus", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"])('class.header-search__toggled'),
        __metadata("design:type", Object)
    ], HeaderSearchComponent.prototype, "searchToggled", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], HeaderSearchComponent.prototype, "toggleChange", null);
    HeaderSearchComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'header-search',
            template: "\n    <nz-input nzPlaceHolder='{{ \"top-search-ph\" | translate}}' [(ngModel)]=\"q\"\n        (nzFocus)=\"qFocus()\" (nzBlur)=\"qBlur()\">\n        <ng-template #prefix>\n            <i class=\"anticon anticon-search\"></i>\n        </ng-template>\n    </nz-input>\n    "
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]])
    ], HeaderSearchComponent);
    return HeaderSearchComponent;
}());



/***/ }),

/***/ "../../../../../src/app/layout/default/header/components/storage.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderStorageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng_zorro_antd__ = __webpack_require__("../../../../ng-zorro-antd/esm5/antd.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HeaderStorageComponent = /** @class */ (function () {
    function HeaderStorageComponent(confirmServ, messageServ) {
        this.confirmServ = confirmServ;
        this.messageServ = messageServ;
    }
    HeaderStorageComponent.prototype._click = function () {
        var _this = this;
        this.confirmServ.confirm({
            title: 'Make sure clear all local storage?',
            onOk: function () {
                localStorage.clear();
                _this.messageServ.success('Clear Finished!');
            }
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('click'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], HeaderStorageComponent.prototype, "_click", null);
    HeaderStorageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'header-storage',
            template: "\n    <i class=\"anticon anticon-tool\"></i>\n    {{ 'clear-local-storage' | translate}}"
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ng_zorro_antd__["NzModalService"],
            __WEBPACK_IMPORTED_MODULE_1_ng_zorro_antd__["NzMessageService"]])
    ], HeaderStorageComponent);
    return HeaderStorageComponent;
}());



/***/ }),

/***/ "../../../../../src/app/layout/default/header/components/task.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderTaskComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var HeaderTaskComponent = /** @class */ (function () {
    function HeaderTaskComponent() {
        this.loading = true;
    }
    HeaderTaskComponent.prototype.change = function () {
        var _this = this;
        setTimeout(function () { return _this.loading = false; }, 500);
    };
    HeaderTaskComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'header-task',
            template: "\n    <nz-dropdown nzTrigger=\"click\" nzPlacement=\"bottomRight\" (nzVisibleChange)=\"change()\">\n        <div class=\"item\" nz-dropdown>\n            <nz-badge [nzDot]=\"true\">\n                <ng-template #content>\n                    <i class=\"anticon anticon-bell\"></i>\n                </ng-template>\n            </nz-badge>\n        </div>\n        <div nz-menu class=\"wd-lg\">\n            <nz-card nzTitle=\"Notifications\" [nzLoading]=\"loading\" class=\"ant-card__body-nopadding\">\n                <ng-template #extra><i class=\"anticon anticon-plus\"></i></ng-template>\n                <div nz-row [nzType]=\"'flex'\" [nzJustify]=\"'center'\" [nzAlign]=\"'middle'\" class=\"py-sm bg-grey-lighter-h point\">\n                    <div nz-col [nzSpan]=\"4\" class=\"text-center\">\n                        <nz-avatar [nzSrc]=\"'./assets/img/1.png'\" [nzSize]=\"'large'\"></nz-avatar>\n                    </div>\n                    <div nz-col [nzSpan]=\"20\">\n                        <strong>cipchk</strong>\n                        <p>Please tell me what happened in a few words, don't go into details.</p>\n                    </div>\n                </div>\n                <div nz-row [nzType]=\"'flex'\" [nzJustify]=\"'center'\" [nzAlign]=\"'middle'\" class=\"py-sm bg-grey-lighter-h point\">\n                    <div nz-col [nzSpan]=\"4\" class=\"text-center\">\n                        <nz-avatar [nzSrc]=\"'./assets/img/2.png'\" [nzSize]=\"'large'\"></nz-avatar>\n                    </div>\n                    <div nz-col [nzSpan]=\"20\">\n                        <strong>\u306F\u306A\u3055\u304D</strong>\n                        <p>\u30CF\u30EB\u30AB\u30BD\u30E9\u30C8\u30AD\u30D8\u30C0\u30C4\u30D2\u30AB\u30EA </p>\n                    </div>\n                </div>\n                <div nz-row [nzType]=\"'flex'\" [nzJustify]=\"'center'\" [nzAlign]=\"'middle'\" class=\"py-sm bg-grey-lighter-h point\">\n                    <div nz-col [nzSpan]=\"4\" class=\"text-center\">\n                        <nz-avatar [nzSrc]=\"'./assets/img/3.png'\" [nzSize]=\"'large'\"></nz-avatar>\n                    </div>\n                    <div nz-col [nzSpan]=\"20\">\n                        <strong>\u82CF\u5148\u751F</strong>\n                        <p>\u8BF7\u544A\u8BC9\u6211\uFF0C\u6211\u5E94\u8BE5\u8BF4\u70B9\u4EC0\u4E48\u597D\uFF1F</p>\n                    </div>\n                </div>\n                <div nz-row [nzType]=\"'flex'\" [nzJustify]=\"'center'\" [nzAlign]=\"'middle'\" class=\"py-sm bg-grey-lighter-h point\">\n                    <div nz-col [nzSpan]=\"4\" class=\"text-center\">\n                        <nz-avatar [nzSrc]=\"'./assets/img/4.png'\" [nzSize]=\"'large'\"></nz-avatar>\n                    </div>\n                    <div nz-col [nzSpan]=\"20\">\n                        <strong>Kent</strong>\n                        <p>Please tell me what happened in a few words, don't go into details.</p>\n                    </div>\n                </div>\n                <div nz-row [nzType]=\"'flex'\" [nzJustify]=\"'center'\" [nzAlign]=\"'middle'\" class=\"py-sm bg-grey-lighter-h point\">\n                    <div nz-col [nzSpan]=\"4\" class=\"text-center\">\n                        <nz-avatar [nzSrc]=\"'./assets/img/5.png'\" [nzSize]=\"'large'\"></nz-avatar>\n                    </div>\n                    <div nz-col [nzSpan]=\"20\">\n                        <strong>Jefferson</strong>\n                        <p>Please tell me what happened in a few words, don't go into details.</p>\n                    </div>\n                </div>\n                <div nz-row class=\"pt-lg pb-lg\">\n                    <div nz-col [nzSpan]=\"24\" class=\"text-center text-grey point\">\n                        See All\n                    </div>\n                </div>\n            </nz-card>\n        </div>\n    </nz-dropdown>\n    "
        })
    ], HeaderTaskComponent);
    return HeaderTaskComponent;
}());



/***/ }),

/***/ "../../../../../src/app/layout/default/header/components/theme.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderThemeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__delon_theme__ = __webpack_require__("../../../../@delon/theme/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HeaderThemeComponent = /** @class */ (function () {
    function HeaderThemeComponent(settings, themeServ) {
        this.settings = settings;
        this.themeServ = themeServ;
        this.themes = [
            { l: 'A', bg: '#108ee9', nav: '#fff', con: '#f5f7fa' },
            { l: 'B', bg: '#00a2ae', nav: '#fff', con: '#f5f7fa' },
            { l: 'C', bg: '#00a854', nav: '#fff', con: '#f5f7fa' },
            { l: 'D', bg: '#f04134', nav: '#fff', con: '#f5f7fa' },
            { l: 'E', bg: '#373d41', nav: '#fff', con: '#f5f7fa' },
            { l: 'F', bg: '#108ee9', nav: '#404040', con: '#f5f7fa' },
            { l: 'G', bg: '#00a2ae', nav: '#404040', con: '#f5f7fa' },
            { l: 'H', bg: '#00a854', nav: '#404040', con: '#f5f7fa' },
            { l: 'I', bg: '#f04134', nav: '#404040', con: '#f5f7fa' },
            { l: 'J', bg: '#373d41', nav: '#404040', con: '#f5f7fa' }
        ];
    }
    HeaderThemeComponent.prototype.changeTheme = function (theme) {
        this.themeServ.setTheme(theme);
        this.settings.setLayout('theme', theme);
    };
    HeaderThemeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'header-theme',
            template: "\n    <strong>{{ 'theme-switch' | translate}}</strong>\n    <div class=\"theme-icons\">\n        <label *ngFor=\"let item of themes\" (click)=\"changeTheme(item.l)\" [style.background]=\"item.bg\">\n            <i class=\"anticon anticon-check\" *ngIf=\"item.l == settings.layout.theme\"></i>\n            <div class=\"areas\">\n                <span class=\"nav\" [style.background]=\"item.nav\"></span>\n                <span class=\"con\" [style.background]=\"item.con\"></span>\n            </div>\n        </label>\n    </div>\n    "
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__delon_theme__["h" /* SettingsService */],
            __WEBPACK_IMPORTED_MODULE_1__delon_theme__["i" /* ThemesService */]])
    ], HeaderThemeComponent);
    return HeaderThemeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/layout/default/header/components/user.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderUserComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__delon_theme__ = __webpack_require__("../../../../@delon/theme/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__delon_auth__ = __webpack_require__("../../../../@delon/auth/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_auth_app_auth_service__ = __webpack_require__("../../../../../src/app/shared/auth/app-auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_app_component_base__ = __webpack_require__("../../../../../src/app/shared/app-component-base.ts");
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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};




//abp集成 2018-1-14


var HeaderUserComponent = /** @class */ (function (_super) {
    __extends(HeaderUserComponent, _super);
    function HeaderUserComponent(injector, settings, router, tokenService, _authService) {
        var _this = _super.call(this, injector) || this;
        _this.settings = settings;
        _this.router = router;
        _this.tokenService = tokenService;
        _this._authService = _authService;
        return _this;
    }
    HeaderUserComponent.prototype.ngOnInit = function () {
        /*this.tokenService.change().subscribe((res: any) => {
            this.settings.setUser(res);
        });
        // mock
        const token = this.tokenService.get() || {
            token: 'nothing',
            name: 'Admin',
            avatar: './assets/img/zorro.svg',
            email: 'cipchk@qq.com'
        };
        this.tokenService.set(token);*/
    };
    HeaderUserComponent.prototype.logout = function () {
        //this.tokenService.clear();
        //this.router.navigateByUrl(this.tokenService.login_url);
        this._authService.logout();
    };
    HeaderUserComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'header-user',
            template: "\n    <nz-dropdown nzPlacement=\"bottomRight\">\n        <div class=\"item d-flex align-items-center px-sm\" nz-dropdown>\n            <nz-avatar [nzSrc]=\"settings.user.avatar\" nzSize=\"small\" class=\"mr-sm\"></nz-avatar>\n            {{settings.user.name}}\n        </div>\n        <div nz-menu class=\"width-sm\">\n            <div nz-menu-item [nzDisable]=\"true\"><i class=\"anticon anticon-user mr-sm\"></i>\u4E2A\u4EBA\u4E2D\u5FC3</div>\n            <div nz-menu-item [nzDisable]=\"true\"><i class=\"anticon anticon-setting mr-sm\"></i>\u8BBE\u7F6E</div>\n            <li nz-menu-divider></li>\n            <div nz-menu-item (click)=\"logout()\"><i class=\"anticon anticon-setting mr-sm\"></i>\u9000\u51FA\u767B\u5F55</div>\n        </div>\n    </nz-dropdown>\n    "
        }),
        __param(3, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_3__delon_auth__["b" /* DA_SERVICE_TOKEN */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injector"],
            __WEBPACK_IMPORTED_MODULE_2__delon_theme__["h" /* SettingsService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["h" /* Router */], Object, __WEBPACK_IMPORTED_MODULE_4__shared_auth_app_auth_service__["a" /* AppAuthService */]])
    ], HeaderUserComponent);
    return HeaderUserComponent;
}(__WEBPACK_IMPORTED_MODULE_5__shared_app_component_base__["a" /* AppComponentBase */]));



/***/ }),

/***/ "../../../../../src/app/layout/default/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"logo\">\r\n    <a [routerLink]=\"['/']\">\r\n        <img class=\"expanded\" src=\"./assets/img/logo-full.svg\" alt=\"{{settings.app.name}}\" style=\"max-height:40px;\" />\r\n        <img class=\"collapsed\" src=\"./assets/img/logo.svg\" alt=\"{{settings.app.name}}\" style=\"max-height:30px;\" />\r\n    </a>\r\n</div>\r\n<div class=\"top-nav-wrap\">\r\n    <ul class=\"top-nav\">\r\n        <!-- Menu -->\r\n        <li>\r\n            <div class=\"item\" (click)=\"toggleCollapsedSideabar()\">\r\n                <i class=\"anticon anticon-menu-{{settings.layout.collapsed ? 'unfold' : 'fold'}}\"></i>\r\n            </div>\r\n        </li>\r\n        <!-- Lock Page -->\r\n        <li class=\"hidden-xs\">\r\n            <div class=\"item\" [routerLink]=\"['/pages/lock']\">\r\n                <i class=\"anticon anticon-lock\"></i>\r\n            </div>\r\n        </li> \r\n        <!-- Search Button -->\r\n        <!-- <li class=\"header-search__btn\" (click)=\"searchToggleChange()\">\r\n            <div class=\"item\">\r\n                <i class=\"anticon anticon-search\"></i>\r\n            </div>\r\n        </li> -->\r\n    </ul>\r\n    <!-- <header-search class=\"header-search\" [toggleChange]=\"searchToggleStatus\"></header-search> -->\r\n    <ul class=\"top-nav\">\r\n        <!-- Notify -->\r\n        <li>\r\n            <header-notify></header-notify>\r\n        </li>\r\n        <!-- Task -->\r\n        <!-- <li class=\"hidden-xs\">\r\n            <header-task></header-task>\r\n        </li> -->\r\n        <!-- App Icons -->\r\n        <!-- <li class=\"hidden-xs\">\r\n            <header-icon></header-icon>\r\n        </li> -->\r\n        <!-- Settings -->\r\n        <li class=\"hidden-xs\">\r\n            <nz-dropdown nzTrigger=\"click\" nzPlacement=\"bottomRight\">\r\n                <div class=\"item\" nz-dropdown>\r\n                    <i class=\"anticon anticon-setting\"></i>\r\n                </div>\r\n                <div nz-menu style=\"width:200px\">\r\n                    <div nz-menu-item class=\"theme-switch\">\r\n                        <header-theme></header-theme>\r\n                    </div>\r\n                    <div nz-menu-item>\r\n                        <header-fullscreen></header-fullscreen>\r\n                    </div>\r\n                    <div nz-menu-item>\r\n                        <header-storage></header-storage>\r\n                    </div>\r\n                    <!-- <div nz-menu-item>\r\n                        <header-langs></header-langs>\r\n                    </div> -->\r\n                </div>\r\n            </nz-dropdown>\r\n        </li>\r\n        <li class=\"hidden-xs\">\r\n            <header-user></header-user>\r\n        </li>\r\n    </ul>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/layout/default/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__delon_theme__ = __webpack_require__("../../../../@delon/theme/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(settings) {
        this.settings = settings;
    }
    HeaderComponent.prototype.toggleCollapsedSideabar = function () {
        this.settings.setLayout('collapsed', !this.settings.layout.collapsed);
    };
    HeaderComponent.prototype.searchToggleChange = function () {
        this.searchToggleStatus = !this.searchToggleStatus;
    };
    HeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-header',
            template: __webpack_require__("../../../../../src/app/layout/default/header/header.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__delon_theme__["h" /* SettingsService */]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "../../../../../src/app/layout/default/sidebar/sidebar.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"aside-inner\">\r\n    <nz-dropdown nzTrigger=\"click\" class=\"user-block clearfix\">\r\n        <div nz-dropdown class=\"user-block-dropdown\">\r\n            <nz-avatar class=\"avatar\" [nzIcon]=\"'user'\" [nzSize]=\"'large'\"></nz-avatar>\r\n            <div class=\"info\">\r\n                <strong>{{settings.user.name}}</strong>\r\n                <p class=\"text-truncate\">{{settings.user.email}}</p>\r\n            </div>\r\n        </div>\r\n        <ul nz-menu>\r\n            <li nz-menu-item (click)=\"msgSrv.success('profile')\">{{ 'profile' | translate }}</li>\r\n            <li nz-menu-item (click)=\"msgSrv.success('settings')\">{{ 'settings' | translate }}</li>\r\n            <li nz-menu-item (click)=\"logout()\">{{ 'logout' | translate }}</li>\r\n        </ul>\r\n    </nz-dropdown>\r\n    <sidebar-nav class=\"d-block py-lg\"></sidebar-nav>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/layout/default/sidebar/sidebar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SidebarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng_zorro_antd__ = __webpack_require__("../../../../ng-zorro-antd/esm5/antd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__delon_theme__ = __webpack_require__("../../../../@delon/theme/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_app_component_base__ = __webpack_require__("../../../../../src/app/shared/app-component-base.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_auth_app_auth_service__ = __webpack_require__("../../../../../src/app/shared/auth/app-auth.service.ts");
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



//集成abp 2018-1-14


var SidebarComponent = /** @class */ (function (_super) {
    __extends(SidebarComponent, _super);
    function SidebarComponent(injector, settings, msgSrv, _authService) {
        var _this = _super.call(this, injector) || this;
        _this.settings = settings;
        _this.msgSrv = msgSrv;
        _this._authService = _authService;
        return _this;
        //alert(JSON.stringify(settings.user))
    }
    SidebarComponent.prototype.logout = function () {
        this._authService.logout();
    };
    SidebarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-sidebar',
            template: __webpack_require__("../../../../../src/app/layout/default/sidebar/sidebar.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injector"], __WEBPACK_IMPORTED_MODULE_2__delon_theme__["h" /* SettingsService */], __WEBPACK_IMPORTED_MODULE_1_ng_zorro_antd__["NzMessageService"], __WEBPACK_IMPORTED_MODULE_4__shared_auth_app_auth_service__["a" /* AppAuthService */]])
    ], SidebarComponent);
    return SidebarComponent;
}(__WEBPACK_IMPORTED_MODULE_3__shared_app_component_base__["a" /* AppComponentBase */]));



/***/ }),

/***/ "../../../../../src/app/layout/fullscreen/fullscreen.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "../../../../../src/app/layout/fullscreen/fullscreen.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LayoutFullScreenComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var LayoutFullScreenComponent = /** @class */ (function () {
    function LayoutFullScreenComponent() {
    }
    LayoutFullScreenComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'layout-fullscreen',
            template: __webpack_require__("../../../../../src/app/layout/fullscreen/fullscreen.component.html")
        })
    ], LayoutFullScreenComponent);
    return LayoutFullScreenComponent;
}());



/***/ }),

/***/ "../../../../../src/app/layout/layout.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LayoutModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__default_default_component__ = __webpack_require__("../../../../../src/app/layout/default/default.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__fullscreen_fullscreen_component__ = __webpack_require__("../../../../../src/app/layout/fullscreen/fullscreen.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__default_header_header_component__ = __webpack_require__("../../../../../src/app/layout/default/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__default_sidebar_sidebar_component__ = __webpack_require__("../../../../../src/app/layout/default/sidebar/sidebar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__default_header_components_search_component__ = __webpack_require__("../../../../../src/app/layout/default/header/components/search.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__default_header_components_theme_component__ = __webpack_require__("../../../../../src/app/layout/default/header/components/theme.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__default_header_components_notify_component__ = __webpack_require__("../../../../../src/app/layout/default/header/components/notify.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__default_header_components_task_component__ = __webpack_require__("../../../../../src/app/layout/default/header/components/task.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__default_header_components_icon_component__ = __webpack_require__("../../../../../src/app/layout/default/header/components/icon.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__default_header_components_fullscreen_component__ = __webpack_require__("../../../../../src/app/layout/default/header/components/fullscreen.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__default_header_components_langs_component__ = __webpack_require__("../../../../../src/app/layout/default/header/components/langs.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__default_header_components_storage_component__ = __webpack_require__("../../../../../src/app/layout/default/header/components/storage.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__default_header_components_user_component__ = __webpack_require__("../../../../../src/app/layout/default/header/components/user.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__shared_auth_app_auth_service__ = __webpack_require__("../../../../../src/app/shared/auth/app-auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__passport_passport_component__ = __webpack_require__("../../../../../src/app/layout/passport/passport.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















//集成abp 2018-1-4

var COMPONENTS = [
    __WEBPACK_IMPORTED_MODULE_2__default_default_component__["a" /* LayoutDefaultComponent */],
    __WEBPACK_IMPORTED_MODULE_3__fullscreen_fullscreen_component__["a" /* LayoutFullScreenComponent */],
    __WEBPACK_IMPORTED_MODULE_4__default_header_header_component__["a" /* HeaderComponent */],
    __WEBPACK_IMPORTED_MODULE_5__default_sidebar_sidebar_component__["a" /* SidebarComponent */]
];
var HEADERCOMPONENTS = [
    __WEBPACK_IMPORTED_MODULE_6__default_header_components_search_component__["a" /* HeaderSearchComponent */],
    __WEBPACK_IMPORTED_MODULE_8__default_header_components_notify_component__["a" /* HeaderNotifyComponent */],
    __WEBPACK_IMPORTED_MODULE_9__default_header_components_task_component__["a" /* HeaderTaskComponent */],
    __WEBPACK_IMPORTED_MODULE_10__default_header_components_icon_component__["a" /* HeaderIconComponent */],
    __WEBPACK_IMPORTED_MODULE_11__default_header_components_fullscreen_component__["a" /* HeaderFullScreenComponent */],
    __WEBPACK_IMPORTED_MODULE_7__default_header_components_theme_component__["a" /* HeaderThemeComponent */],
    __WEBPACK_IMPORTED_MODULE_12__default_header_components_langs_component__["a" /* HeaderLangsComponent */],
    __WEBPACK_IMPORTED_MODULE_13__default_header_components_storage_component__["a" /* HeaderStorageComponent */],
    __WEBPACK_IMPORTED_MODULE_14__default_header_components_user_component__["a" /* HeaderUserComponent */]
];
// passport

var PASSPORT = [
    __WEBPACK_IMPORTED_MODULE_16__passport_passport_component__["a" /* LayoutPassportComponent */]
];
var LayoutModule = /** @class */ (function () {
    function LayoutModule() {
    }
    LayoutModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__shared_shared_module__["a" /* SharedModule */]],
            providers: [__WEBPACK_IMPORTED_MODULE_15__shared_auth_app_auth_service__["a" /* AppAuthService */]],
            declarations: COMPONENTS.concat(HEADERCOMPONENTS, PASSPORT),
            exports: COMPONENTS.concat(PASSPORT)
        })
    ], LayoutModule);
    return LayoutModule;
}());



/***/ }),

/***/ "../../../../../src/app/layout/passport/passport.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <div class=\"top\">\r\n        <div class=\"head\">\r\n            <a [routerLink]=\"['/']\">\r\n                <img class=\"logo\" src=\"./assets/img/logo-color.svg\">\r\n                <span class=\"title\">ng-alain</span>\r\n            </a>\r\n        </div>\r\n        <p class=\"desc\">武林中最有影响力的《葵花宝典》；欲练神功，挥刀自宫</p>\r\n    </div>\r\n    <router-outlet></router-outlet>\r\n    <global-footer [links]=\"links\">\r\n        <ng-template #copyright>\r\n            Copyright <nz-icon nzType=\"copyright\"></nz-icon> 2017 <a href=\"//github.com/cipchk\" target=\"_blank\">卡色</a>出品\r\n        </ng-template>\r\n    </global-footer>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/layout/passport/passport.component.less":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* stylelint-disable at-rule-empty-line-before,at-rule-name-space-after,at-rule-no-unknown */\n/* stylelint-disable declaration-bang-space-before */\n/* stylelint-disable declaration-bang-space-before */\n:host ::ng-deep .container {\n  background: #f0f2f5;\n  background-image: url(\"https://gw.alipayobjects.com/zos/rmsportal/TVYTbAXWheQpRcWDaDMu.svg\");\n  width: 100%;\n  min-height: 100%;\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: 100%;\n  padding: 110px 0 144px;\n  position: relative;\n}\n:host ::ng-deep .top {\n  text-align: center;\n}\n:host ::ng-deep .head {\n  height: 44px;\n  line-height: 44px;\n}\n:host ::ng-deep .head a {\n  text-decoration: none;\n}\n:host ::ng-deep .logo {\n  height: 44px;\n  vertical-align: top;\n  margin-right: 16px;\n}\n:host ::ng-deep .title {\n  font-size: 33px;\n  color: rgba(0, 0, 0, 0.85);\n  font-family: \"Myriad Pro\", \"Helvetica Neue\", Arial, Helvetica, sans-serif;\n  font-weight: 600;\n  position: relative;\n  top: 2px;\n}\n:host ::ng-deep .desc {\n  font-size: 12px;\n  color: rgba(0, 0, 0, 0.43);\n  margin-top: 12px;\n  margin-bottom: 40px;\n}\n:host ::ng-deep .footer {\n  position: absolute;\n  width: 100%;\n  bottom: 0;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/layout/passport/passport.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LayoutPassportComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var LayoutPassportComponent = /** @class */ (function () {
    function LayoutPassportComponent() {
        this.links = [
            {
                title: '帮助',
                href: ''
            },
            {
                title: '隐私',
                href: ''
            },
            {
                title: '条款',
                href: ''
            }
        ];
    }
    LayoutPassportComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'layout-passport',
            template: __webpack_require__("../../../../../src/app/layout/passport/passport.component.html"),
            styles: [__webpack_require__("../../../../../src/app/layout/passport/passport.component.less")]
        })
    ], LayoutPassportComponent);
    return LayoutPassportComponent;
}());



/***/ }),

/***/ "../../../../../src/app/shared/AppConsts.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppConsts; });
var AppConsts = /** @class */ (function () {
    function AppConsts() {
    }
    AppConsts.userManagement = {
        defaultAdminUserName: 'admin'
    };
    AppConsts.localization = {
        defaultLocalizationSourceName: 'WeChat'
    };
    AppConsts.authorization = {
        encrptedAuthTokenName: 'enc_auth_token'
    };
    return AppConsts;
}());



/***/ }),

/***/ "../../../../../src/app/shared/app-component-base.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponentBase; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_AppConsts__ = __webpack_require__("../../../../../src/app/shared/AppConsts.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__abp_localization_localization_service__ = __webpack_require__("../../../../abp-ng2-module/src/localization/localization.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__abp_auth_permission_checker_service__ = __webpack_require__("../../../../abp-ng2-module/src/auth/permission-checker.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__abp_features_feature_checker_service__ = __webpack_require__("../../../../abp-ng2-module/src/features/feature-checker.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__abp_notify_notify_service__ = __webpack_require__("../../../../abp-ng2-module/src/notify/notify.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__abp_settings_setting_service__ = __webpack_require__("../../../../abp-ng2-module/src/settings/setting.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__abp_message_message_service__ = __webpack_require__("../../../../abp-ng2-module/src/message/message.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__abp_multi_tenancy_abp_multi_tenancy_service__ = __webpack_require__("../../../../abp-ng2-module/src/multi-tenancy/abp-multi-tenancy.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__shared_session_app_session_service__ = __webpack_require__("../../../../../src/app/shared/session/app-session.service.ts");










//import { DatePipe } from '@angular/common';
var AppComponentBase = /** @class */ (function () {
    function AppComponentBase(injector) {
        this.localizationSourceName = __WEBPACK_IMPORTED_MODULE_1__shared_AppConsts__["a" /* AppConsts */].localization.defaultLocalizationSourceName;
        this.query = {
            pageIndex: 1,
            pageSize: 10,
            skipCount: function () { return (this.pageIndex - 1) * this.pageSize; },
            total: 0,
            sorter: '',
            status: -1,
            statusList: []
        };
        this.localization = injector.get(__WEBPACK_IMPORTED_MODULE_2__abp_localization_localization_service__["a" /* LocalizationService */]);
        this.permission = injector.get(__WEBPACK_IMPORTED_MODULE_3__abp_auth_permission_checker_service__["a" /* PermissionCheckerService */]);
        this.feature = injector.get(__WEBPACK_IMPORTED_MODULE_4__abp_features_feature_checker_service__["a" /* FeatureCheckerService */]);
        this.notify = injector.get(__WEBPACK_IMPORTED_MODULE_5__abp_notify_notify_service__["a" /* NotifyService */]);
        this.setting = injector.get(__WEBPACK_IMPORTED_MODULE_6__abp_settings_setting_service__["a" /* SettingService */]);
        this.message = injector.get(__WEBPACK_IMPORTED_MODULE_7__abp_message_message_service__["a" /* MessageService */]);
        this.multiTenancy = injector.get(__WEBPACK_IMPORTED_MODULE_8__abp_multi_tenancy_abp_multi_tenancy_service__["a" /* AbpMultiTenancyService */]);
        this.appSession = injector.get(__WEBPACK_IMPORTED_MODULE_9__shared_session_app_session_service__["a" /* AppSessionService */]);
        this.elementRef = injector.get(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]);
    }
    AppComponentBase.prototype.l = function (key) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        var localizedText = this.localization.localize(key, this.localizationSourceName);
        if (!localizedText) {
            localizedText = key;
        }
        if (!args || !args.length) {
            return localizedText;
        }
        args.unshift(localizedText);
        return abp.utils.formatString.apply(this, args);
    };
    AppComponentBase.prototype.isGranted = function (permissionName) {
        return this.permission.isGranted(permissionName);
    };
    AppComponentBase.prototype.dateFormat = function (date) {
        if (date === null) {
            return null;
        }
        var d = date;
        var y = d.getFullYear().toString();
        var m = (d.getMonth() + 1).toString();
        var day = d.getDate().toString();
        return y + '-' + m + '-' + day;
        //let dateStr:string = this.datePipe.transform(d,'yyyy-MM-dd');
        //return dateStr;
    };
    return AppComponentBase;
}());



/***/ }),

/***/ "../../../../../src/app/shared/auth/app-auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppAuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_AppConsts__ = __webpack_require__("../../../../../src/app/shared/AppConsts.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var AppAuthService = /** @class */ (function () {
    function AppAuthService() {
    }
    AppAuthService.prototype.logout = function (reload) {
        abp.auth.clearToken();
        if (reload !== false) {
            location.href = __WEBPACK_IMPORTED_MODULE_1__shared_AppConsts__["a" /* AppConsts */].appBaseUrl;
        }
    };
    AppAuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
    ], AppAuthService);
    return AppAuthService;
}());



/***/ }),

/***/ "../../../../../src/app/shared/service-proxies/entity/acitivity.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Activity; });
var Activity = /** @class */ (function () {
    function Activity(data) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
        }
    }
    Activity.prototype.init = function (data) {
        if (data) {
            this.id = data["id"];
            this.name = data["name"];
            this.beginTime = data["beginTime"];
            this.endTime = data["endTime"];
            this.activityType = data["activityType"];
            this.content = data["content"];
            this.mUnfinished = data["mUnfinished"];
            this.rUnfinished = data["rUnfinished"];
            this.tenantId = data["tenantId"];
            this.publishTime = data["publishTime"];
            this.status = data["status"];
            this.statusName = data["statusName"];
        }
    };
    Activity.fromJS = function (data) {
        var result = new Activity();
        result.init(data);
        return result;
    };
    Activity.prototype.toJSON = function (data) {
        data = typeof data === 'object' ? data : {};
        data["id"] = this.id;
        data["name"] = this.name;
        data["content"] = this.content;
        data["beginTime"] = this.beginTime;
        data["endTime"] = this.endTime;
        data["tenantId"] = this.tenantId;
        data["mUnfinished"] = this.mUnfinished;
        data["rUnfinished"] = this.rUnfinished;
        data["publishTime"] = this.publishTime;
        data["status"] = this.status;
        data["activityType"] = this.status;
        return data;
    };
    Activity.prototype.clone = function () {
        var json = this.toJSON();
        var result = new Activity();
        result.init(json);
        return result;
    };
    return Activity;
}());



/***/ }),

/***/ "../../../../../src/app/shared/service-proxies/entity/activity-banquet.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActivityBanquetDto; });
var ActivityBanquetDto = /** @class */ (function () {
    function ActivityBanquetDto(data) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
        }
    }
    ActivityBanquetDto.prototype.init = function (data) {
        if (data) {
            this.id = data["id"];
            this.activityFormId = data["activityFormId"];
            this.area = data["area"];
            this.responsible = data["responsible"];
            this.executor = data["executor"];
            this.banquetTime = data["banquetTime"];
            this.position = data["position"];
            this.num = data["num"];
            this.desc = data["desc"];
            this.photoUrl = data["photoUrl"];
            this.creationTime = data["creationTime"];
            this.userName = data["userName"];
        }
    };
    ActivityBanquetDto.fromJS = function (data) {
        var result = new ActivityBanquetDto();
        result.init(data);
        return result;
    };
    ActivityBanquetDto.prototype.toJSON = function (data) {
        data = typeof data === 'object' ? data : {};
        data["id"] = this.id;
        data["activityFormId"] = this.activityFormId;
        data["area"] = this.area;
        data["responsible"] = this.responsible;
        data["executor"] = this.executor;
        data["banquetTime"] = this.banquetTime;
        data["position"] = this.position;
        data["num"] = this.num;
        data["desc"] = this.desc;
        data["photoUrl"] = this.photoUrl;
        data["creationTime"] = this.creationTime;
        data["userName"] = this.userName;
        return data;
    };
    ActivityBanquetDto.prototype.clone = function () {
        var json = this.toJSON();
        var result = new ActivityBanquetDto();
        result.init(json);
        return result;
    };
    return ActivityBanquetDto;
}());



/***/ }),

/***/ "../../../../../src/app/shared/service-proxies/entity/activity-delivery.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActivityDeliveryInfoDto; });
var ActivityDeliveryInfoDto = /** @class */ (function () {
    function ActivityDeliveryInfoDto(data) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
        }
    }
    ActivityDeliveryInfoDto.prototype.init = function (data) {
        if (data) {
            this.id = data["id"];
            this.activityFormId = data["activityFormId"];
            this.userName = data["userName"];
            this.phone = data["phone"];
            this.address = data["address"];
        }
    };
    ActivityDeliveryInfoDto.fromJS = function (data) {
        var result = new ActivityDeliveryInfoDto();
        result.init(data);
        return result;
    };
    ActivityDeliveryInfoDto.prototype.toJSON = function (data) {
        data = typeof data === 'object' ? data : {};
        data["id"] = this.id;
        data["activityFormId"] = this.activityFormId;
        data["userName"] = this.userName;
        data["phone"] = this.phone;
        data["address"] = this.address;
        return data;
    };
    ActivityDeliveryInfoDto.prototype.clone = function () {
        var json = this.toJSON();
        var result = new ActivityDeliveryInfoDto();
        result.init(json);
        return result;
    };
    return ActivityDeliveryInfoDto;
}());



/***/ }),

/***/ "../../../../../src/app/shared/service-proxies/entity/activity-form-log.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export ActivityFormLogDto */
var ActivityFormLogDto = /** @class */ (function () {
    function ActivityFormLogDto(data) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
        }
    }
    ActivityFormLogDto.prototype.init = function (data) {
        if (data) {
            this.id = data["id"];
            this.activityFormId = data["activityFormId"];
            this.status = data["status"];
            this.statusName = data["statusName"];
            this.opinion = data["opinion"];
            this.userType = data["userType"];
            this.userId = data["userId"];
            this.userName = data["userName"];
            this.actionTime = data["actionTime"];
        }
    };
    ActivityFormLogDto.fromJS = function (data) {
        var result = new ActivityFormLogDto();
        result.init(data);
        return result;
    };
    ActivityFormLogDto.prototype.toJSON = function (data) {
        data = typeof data === 'object' ? data : {};
        data["id"] = this.id;
        data["activityFormId"] = this.activityFormId;
        data["status"] = this.status;
        data["statusName"] = this.statusName;
        data["opinion"] = this.opinion;
        data["userType"] = this.userType;
        data["userId"] = this.userId;
        data["userName"] = this.userName;
        data["actionTime"] = this.actionTime;
        return data;
    };
    ActivityFormLogDto.prototype.clone = function () {
        var json = this.toJSON();
        var result = new ActivityFormLogDto();
        result.init(json);
        return result;
    };
    return ActivityFormLogDto;
}());



/***/ }),

/***/ "../../../../../src/app/shared/service-proxies/entity/activity-form.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export ActivityForm */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActivityFormDto; });
var ActivityForm = /** @class */ (function () {
    function ActivityForm(data) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
        }
    }
    ActivityForm.prototype.init = function (data) {
        if (data) {
            this.id = data["id"];
            this.formCode = data["formCode"];
            this.activityId = data["activityId"];
            this.retailerId = data["retailerId"];
            this.activityGoodsId = data["activityGoodsId"];
            this.goodsSpecification = data["goodsSpecification"];
            this.num = data["num"];
            this.reason = data["reason"];
            this.status = data["status"];
            this.creationTime = data["creationTime"];
            this.activityName = data["activityName"];
            this.retailerName = data["retailerName"];
            this.managerName = data["managerName"];
            this.creationUser = data["creationUser"];
        }
    };
    ActivityForm.fromJS = function (data) {
        var result = new ActivityForm();
        result.init(data);
        return result;
    };
    ActivityForm.prototype.toJSON = function (data) {
        data = typeof data === 'object' ? data : {};
        data["id"] = this.id;
        data["formCode"] = this.formCode;
        data["activityId"] = this.activityId;
        data["retailerId"] = this.retailerId;
        data["activityGoodsId"] = this.activityGoodsId;
        data["goodsSpecification"] = this.goodsSpecification;
        data["num"] = this.num;
        data["reason"] = this.reason;
        data["status"] = this.status;
        data["creationTime"] = this.creationTime;
        data["activityName"] = this.activityName;
        data["retailerName"] = this.retailerName;
        data["managerName"] = this.managerName;
        data["creationUser"] = this.creationUser;
        return data;
    };
    ActivityForm.prototype.clone = function () {
        var json = this.toJSON();
        var result = new ActivityForm();
        result.init(json);
        return result;
    };
    return ActivityForm;
}());

var ActivityFormDto = /** @class */ (function () {
    function ActivityFormDto(data) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
        }
    }
    ActivityFormDto.prototype.init = function (data) {
        if (data) {
            this.id = data["id"];
            this.formCode = data["formCode"];
            this.activityId = data["activityId"];
            this.retailerId = data["retailerId"];
            this.activityGoodsId = data["activityGoodsId"];
            this.goodsSpecification = data["goodsSpecification"];
            this.num = data["num"];
            this.reason = data["reason"];
            this.status = data["status"];
            this.creationTime = data["creationTime"];
            this.activityName = data["activityName"];
            this.retailerName = data["retailerName"];
            this.managerName = data["managerName"];
            this.statusType = data["statusType"];
            this.statusName = data["statusName"];
            this.creationUser = data["creationUser"];
        }
    };
    ActivityFormDto.fromJS = function (data) {
        var result = new ActivityFormDto();
        result.init(data);
        return result;
    };
    ActivityFormDto.prototype.toJSON = function (data) {
        data = typeof data === 'object' ? data : {};
        data["id"] = this.id;
        data["formCode"] = this.formCode;
        data["activityId"] = this.activityId;
        data["retailerId"] = this.retailerId;
        data["activityGoodsId"] = this.activityGoodsId;
        data["goodsSpecification"] = this.goodsSpecification;
        data["num"] = this.num;
        data["reason"] = this.reason;
        data["status"] = this.status;
        data["creationTime"] = this.creationTime;
        data["activityName"] = this.activityName;
        data["retailerName"] = this.retailerName;
        data["managerName"] = this.managerName;
        data["creationUser"] = this.creationUser;
        return data;
    };
    ActivityFormDto.prototype.clone = function () {
        var json = this.toJSON();
        var result = new ActivityFormDto();
        result.init(json);
        return result;
    };
    return ActivityFormDto;
}());



/***/ }),

/***/ "../../../../../src/app/shared/service-proxies/entity/activity-goods.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActivityGoods; });
/* unused harmony export CreateActivityGoods */
var ActivityGoods = /** @class */ (function () {
    function ActivityGoods(data) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
        }
    }
    ActivityGoods.prototype.init = function (data) {
        if (data) {
            this.id = data["id"];
            this.specification = data["specification"];
            this.activityId = data["activityId"];
            this.minNum = data["minNum"];
            this.maxNum = data["maxNum"];
            this.discountDesc = data["discountDesc"];
            this.isDeleted = data["isDeleted"];
            this.creationTime = data["creationTime"];
            this.creatorUserId = data["creatorUserId"];
        }
    };
    ActivityGoods.fromJS = function (data) {
        var result = new ActivityGoods();
        result.init(data);
        return result;
    };
    ActivityGoods.prototype.toJSON = function (data) {
        data = typeof data === 'object' ? data : {};
        data["id"] = this.id;
        data["specification"] = this.specification;
        data["activityId"] = this.activityId;
        data["minNum"] = this.minNum;
        data["maxNum"] = this.maxNum;
        data["discountDesc"] = this.discountDesc;
        data["isDeleted"] = this.isDeleted;
        data["creationTime"] = this.creationTime;
        data["creatorUserId"] = this.creatorUserId;
        data["lastModificationTime"] = this.lastModificationTime;
        data["lastModifierUserId"] = this.lastModifierUserId;
        data["deletionTime"] = this.deletionTime;
        data["deleterUserId"] = this.deleterUserId;
        return data;
    };
    ActivityGoods.prototype.clone = function () {
        var json = this.toJSON();
        var result = new ActivityGoods();
        result.init(json);
        return result;
    };
    return ActivityGoods;
}());

var CreateActivityGoods = /** @class */ (function () {
    function CreateActivityGoods(data) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
        }
    }
    CreateActivityGoods.prototype.init = function (data) {
        if (data) {
            this.id = data["id"];
            this.specification = data["specification"];
            this.activityId = data["activityId"];
            this.minNum = data["minNum"];
            this.maxNum = data["maxNum"];
            this.discountDesc = data["discountDesc"];
            this.creationTime = data["creationTime"];
            this.creatorUserId = data["creatorUserId"];
        }
    };
    CreateActivityGoods.fromJS = function (data) {
        var result = new CreateActivityGoods();
        result.init(data);
        return result;
    };
    CreateActivityGoods.prototype.toJSON = function (data) {
        data = typeof data === 'object' ? data : {};
        data["id"] = this.id;
        data["specification"] = this.specification;
        data["activityId"] = this.activityId;
        data["minNum"] = this.minNum;
        data["maxNum"] = this.maxNum;
        data["discountDesc"] = this.discountDesc;
        data["creationTime"] = this.creationTime;
        data["creatorUserId"] = this.creatorUserId;
        data["lastModificationTime"] = this.lastModificationTime;
        data["lastModifierUserId"] = this.lastModifierUserId;
        return data;
    };
    CreateActivityGoods.prototype.clone = function () {
        var json = this.toJSON();
        var result = new CreateActivityGoods();
        result.init(json);
        return result;
    };
    return CreateActivityGoods;
}());



/***/ }),

/***/ "../../../../../src/app/shared/service-proxies/entity/auth-setting.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthSetting; });
var AuthSetting = /** @class */ (function () {
    function AuthSetting(data) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
        }
    }
    AuthSetting.prototype.init = function (data) {
        if (data) {
            this.name = data["name"];
            this.appOrgId = data["appOrgId"];
            this.appType = data["appType"];
            this.appId = data["appId"];
            this.appSecret = data["appSecret"];
            this.qrCodeUrl = data["qrCodeUrl"];
            this.token = data["token"];
            this.expiresIn = data["expiresIn"];
            this.accessToken = data["accessToken"];
            this.nextGettime = data["nextGettime"];
        }
    };
    AuthSetting.fromJS = function (data) {
        var result = new AuthSetting();
        result.init(data);
        return result;
    };
    AuthSetting.prototype.toJSON = function (data) {
        data = typeof data === 'object' ? data : {};
        data["name"] = this.name;
        data["appOrgId"] = this.appOrgId;
        data["appType"] = this.appType;
        data["appId"] = this.appId;
        data["appSecret"] = this.appSecret;
        data["qrCodeUrl"] = this.qrCodeUrl;
        data["token"] = this.token;
        data["expiresIn"] = this.expiresIn;
        data["accessToken"] = this.accessToken;
        data["nextGettime"] = this.nextGettime;
        return data;
    };
    AuthSetting.prototype.clone = function () {
        var json = this.toJSON();
        var result = new AuthSetting();
        result.init(json);
        return result;
    };
    return AuthSetting;
}());



/***/ }),

/***/ "../../../../../src/app/shared/service-proxies/entity/employee.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Employee; });
var Employee = /** @class */ (function () {
    function Employee(data) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
        }
    }
    Employee.prototype.init = function (data) {
        if (data) {
            this.id = data["id"];
            this.code = data["code"];
            this.name = data["name"];
            this.position = data["position"];
            this.phone = data["phone"];
            this.company = data["company"];
            this.department = data["department"];
            this.isAction = data["isAction"];
            this.isDeleted = data["isDeleted"];
            this.deleterUserId = data["deleterUserId"];
            this.deletionTime = data["deletionTime"];
            this.tenantId = data["tenantId"];
            this.creationTime = data["creationTime"];
            this.creatorUserId = data["creatorUserId"];
            this.lastModificationTime = data["lastModificationTime"];
            this.lastModifierUserId = data["lastModifierUserId"];
        }
    };
    Employee.fromJS = function (data) {
        var result = new Employee();
        result.init(data);
        return result;
    };
    Employee.prototype.toJSON = function (data) {
        data = typeof data === 'object' ? data : {};
        this.id = data["id"];
        this.code = data["code"];
        this.name = data["name"];
        this.position = data["position"];
        this.phone = data["phone"];
        this.company = data["company"];
        this.department = data["department"];
        this.isAction = data["isAction"];
        data["id"] = this.id;
        data["code"] = this.code;
        data["name"] = this.name;
        data["position"] = this.position;
        data["phone"] = this.phone;
        data["company"] = this.company;
        data["department"] = this.department;
        data["isAction"] = this.isAction;
        return data;
    };
    Employee.prototype.clone = function () {
        var json = this.toJSON();
        var result = new Employee();
        result.init(json);
        return result;
    };
    return Employee;
}());



/***/ }),

/***/ "../../../../../src/app/shared/service-proxies/entity/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__activity_form__ = __webpack_require__("../../../../../src/app/shared/service-proxies/entity/activity-form.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_0__activity_form__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__parameter__ = __webpack_require__("../../../../../src/app/shared/service-proxies/entity/parameter.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_1__parameter__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__activity_banquet__ = __webpack_require__("../../../../../src/app/shared/service-proxies/entity/activity-banquet.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_2__activity_banquet__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__activity_delivery__ = __webpack_require__("../../../../../src/app/shared/service-proxies/entity/activity-delivery.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_3__activity_delivery__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__activity_form_log__ = __webpack_require__("../../../../../src/app/shared/service-proxies/entity/activity-form-log.ts");
/* unused harmony namespace reexport */







/***/ }),

/***/ "../../../../../src/app/shared/service-proxies/entity/messages.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Messagess; });
var Messagess = /** @class */ (function () {
    function Messagess(data) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
        }
    }
    Messagess.prototype.init = function (data) {
        if (data) {
            this.id = data["id"];
            this.keyWord = data["keyWord"];
            this.matchMode = data["matchMode"];
            this.msgType = data["msgType"];
            this.content = data["content"];
            this.tenantId = data["tenantId"];
            this.creationTime = data["creationTime"];
            this.creatorUserId = data["creatorUserId"];
            this.lastModificationTime = data["lastModificationTime"];
            this.lastModifierUserId = data["lastModifierUserId"];
        }
    };
    Messagess.fromJS = function (data) {
        var result = new Messagess();
        result.init(data);
        return result;
    };
    Messagess.prototype.toJSON = function (data) {
        data = typeof data === 'object' ? data : {};
        data["id"] = this.id;
        data["keyWord"] = this.keyWord;
        data["matchMode"] = this.matchMode;
        data["msgType"] = this.msgType;
        data["content"] = this.content;
        data["tenantId"] = this.tenantId;
        return data;
    };
    Messagess.prototype.clone = function () {
        var json = this.toJSON();
        var result = new Messagess();
        result.init(json);
        return result;
    };
    return Messagess;
}());



/***/ }),

/***/ "../../../../../src/app/shared/service-proxies/entity/parameter.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Parameter; });
var Parameter = /** @class */ (function () {
    function Parameter() {
    }
    Parameter.prototype.init = function (data) {
        if (data) {
            this.key = data["key"];
            this.value = data["value"];
        }
    };
    Parameter.fromJS = function (data) {
        var result = new Parameter();
        result.init(data);
        return result;
    };
    Parameter.prototype.toJSON = function (data) {
        data = typeof data === 'object' ? data : {};
        data["key"] = this.key;
        data["value"] = this.value;
        return data;
    };
    return Parameter;
}());



/***/ }),

/***/ "../../../../../src/app/shared/service-proxies/entity/subscribe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Subscribess; });
var Subscribess = /** @class */ (function () {
    function Subscribess(data) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
        }
    }
    Subscribess.prototype.init = function (data) {
        if (data) {
            this.id = data["id"];
            this.msgType = data["msgType"];
            this.content = data["content"];
            this.tenantId = data["tenantId"];
            this.creationTime = data["creationTime"];
            this.creatorUserId = data["creatorUserId"];
            this.lastModificationTime = data["lastModificationTime"];
            this.lastModifierUserId = data["lastModifierUserId"];
        }
    };
    Subscribess.fromJS = function (data) {
        var result = new Subscribess();
        result.init(data);
        return result;
    };
    Subscribess.prototype.toJSON = function (data) {
        data = typeof data === 'object' ? data : {};
        data["msgType"] = this.msgType;
        data["content"] = this.content;
        data["tenantId"] = this.tenantId;
        data["id"] = this.id;
        return data;
    };
    Subscribess.prototype.clone = function () {
        var json = this.toJSON();
        var result = new Subscribess();
        result.init(json);
        return result;
    };
    return Subscribess;
}());



/***/ }),

/***/ "../../../../../src/app/shared/service-proxies/marketing-service/acticity-service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActivityServiceProxy; });
/* unused harmony export PagedResultDtoOfActivity */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_observable_fromPromise__ = __webpack_require__("../../../../rxjs/_esm5/add/observable/fromPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_observable_of__ = __webpack_require__("../../../../rxjs/_esm5/add/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_throw__ = __webpack_require__("../../../../rxjs/_esm5/add/observable/throw.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_mergeMap__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/mergeMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_service_proxies_entity_acitivity__ = __webpack_require__("../../../../../src/app/shared/service-proxies/entity/acitivity.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__shared_service_proxies_service_proxies__ = __webpack_require__("../../../../../src/app/shared/service-proxies/service-proxies.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};












function throwException(message, status, response, headers, result) {
    if (result !== null && result !== undefined)
        return __WEBPACK_IMPORTED_MODULE_10_rxjs_Observable__["a" /* Observable */].throw(result);
    else
        return __WEBPACK_IMPORTED_MODULE_10_rxjs_Observable__["a" /* Observable */].throw(new __WEBPACK_IMPORTED_MODULE_8__shared_service_proxies_service_proxies__["s" /* SwaggerException */](message, status, response, headers, null));
}
var ActivityServiceProxy = /** @class */ (function () {
    function ActivityServiceProxy(http, baseUrl) {
        this.jsonParseReviver = undefined;
        this.http = http;
        this.baseUrl = baseUrl ? baseUrl : "";
    }
    /**
     * 通过消息id获取自动回复消息信息
     * @param id 消息id
     */
    ActivityServiceProxy.prototype.get = function () {
        var _this = this;
        var url_ = this.baseUrl + "/api/services/app/Activity/GetActivityByTenantIdAsync?";
        url_ = url_.replace(/[?&]$/, "");
        var options_ = {
            method: "get",
            headers: new __WEBPACK_IMPORTED_MODULE_11__angular_http__["a" /* Headers */]({
                "Content-Type": "application/json",
                "Accept": "application/json"
            })
        };
        return this.http.request(url_, options_).flatMap(function (response_) {
            return _this.processGet(response_);
        }).catch(function (response_) {
            if (response_ instanceof __WEBPACK_IMPORTED_MODULE_11__angular_http__["f" /* Response */]) {
                try {
                    return _this.processGet(response_);
                }
                catch (e) {
                    return __WEBPACK_IMPORTED_MODULE_10_rxjs_Observable__["a" /* Observable */].throw(e);
                }
            }
            else
                return __WEBPACK_IMPORTED_MODULE_10_rxjs_Observable__["a" /* Observable */].throw(response_);
        });
    };
    ActivityServiceProxy.prototype.processGet = function (response) {
        var status = response.status;
        var _headers = response.headers ? response.headers.toJSON() : {};
        if (status === 200) {
            var _responseText = response.text();
            var result200 = null;
            var resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = resultData200 ? __WEBPACK_IMPORTED_MODULE_7__shared_service_proxies_entity_acitivity__["a" /* Activity */].fromJS(resultData200) : new __WEBPACK_IMPORTED_MODULE_7__shared_service_proxies_entity_acitivity__["a" /* Activity */]();
            return __WEBPACK_IMPORTED_MODULE_10_rxjs_Observable__["a" /* Observable */].of(result200);
        }
        else if (status === 401) {
            var _responseText = response.text();
            return throwException("A server error occurred.", status, _responseText, _headers);
        }
        else if (status === 403) {
            var _responseText = response.text();
            return throwException("A server error occurred.", status, _responseText, _headers);
        }
        else if (status !== 200 && status !== 204) {
            var _responseText = response.text();
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        }
        return __WEBPACK_IMPORTED_MODULE_10_rxjs_Observable__["a" /* Observable */].of(null);
    };
    /**
     * 新增或修改自动回复消息信息
     * @param input
     */
    ActivityServiceProxy.prototype.update = function (input) {
        var _this = this;
        var url_ = this.baseUrl + "/api/services/app/Activity/CreateOrUpdateActivityDto";
        url_ = url_.replace(/[?&]$/, "");
        var content_ = JSON.stringify(input);
        var options_ = {
            body: content_,
            method: "post",
            headers: new __WEBPACK_IMPORTED_MODULE_11__angular_http__["a" /* Headers */]({
                "Content-Type": "application/json",
                "Accept": "application/json"
            })
        };
        return this.http.request(url_, options_).flatMap(function (response_) {
            return _this.processUpdate(response_);
        }).catch(function (response_) {
            if (response_ instanceof __WEBPACK_IMPORTED_MODULE_11__angular_http__["f" /* Response */]) {
                try {
                    return _this.processUpdate(response_);
                }
                catch (e) {
                    return __WEBPACK_IMPORTED_MODULE_10_rxjs_Observable__["a" /* Observable */].throw(e);
                }
            }
            else
                return __WEBPACK_IMPORTED_MODULE_10_rxjs_Observable__["a" /* Observable */].throw(response_);
        });
    };
    ActivityServiceProxy.prototype.processUpdate = function (response) {
        var status = response.status;
        var _headers = response.headers ? response.headers.toJSON() : {};
        if (status === 200) {
            var _responseText = response.text();
            var result200 = null;
            var resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = resultData200 ? __WEBPACK_IMPORTED_MODULE_7__shared_service_proxies_entity_acitivity__["a" /* Activity */].fromJS(resultData200) : new __WEBPACK_IMPORTED_MODULE_7__shared_service_proxies_entity_acitivity__["a" /* Activity */]();
            return __WEBPACK_IMPORTED_MODULE_10_rxjs_Observable__["a" /* Observable */].of(result200);
        }
        else if (status === 401) {
            var _responseText = response.text();
            return throwException("A server error occurred.", status, _responseText, _headers);
        }
        else if (status === 403) {
            var _responseText = response.text();
            return throwException("A server error occurred.", status, _responseText, _headers);
        }
        else if (status !== 200 && status !== 204) {
            var _responseText = response.text();
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        }
        return __WEBPACK_IMPORTED_MODULE_10_rxjs_Observable__["a" /* Observable */].of(null);
    };
    /**
    * @return Success
    */
    ActivityServiceProxy.prototype.delete = function (id) {
        var _this = this;
        var url_ = this.baseUrl + "/api/services/app/Activity/DeleteActivity?";
        if (id !== undefined)
            url_ += "Id=" + encodeURIComponent("" + id) + "&";
        url_ = url_.replace(/[?&]$/, "");
        var options_ = {
            method: "delete",
            headers: new __WEBPACK_IMPORTED_MODULE_11__angular_http__["a" /* Headers */]({
                "Content-Type": "application/json",
            })
        };
        return this.http.request(url_, options_).flatMap(function (response_) {
            return _this.processDelete(response_);
        }).catch(function (response_) {
            if (response_ instanceof __WEBPACK_IMPORTED_MODULE_11__angular_http__["f" /* Response */]) {
                try {
                    return _this.processDelete(response_);
                }
                catch (e) {
                    return __WEBPACK_IMPORTED_MODULE_10_rxjs_Observable__["a" /* Observable */].throw(e);
                }
            }
            else
                return __WEBPACK_IMPORTED_MODULE_10_rxjs_Observable__["a" /* Observable */].throw(response_);
        });
    };
    ActivityServiceProxy.prototype.processDelete = function (response) {
        var status = response.status;
        var _headers = response.headers ? response.headers.toJSON() : {};
        if (status === 200) {
            var _responseText = response.text();
            return __WEBPACK_IMPORTED_MODULE_10_rxjs_Observable__["a" /* Observable */].of(null);
        }
        else if (status === 401) {
            var _responseText = response.text();
            return throwException("A server error occurred.", status, _responseText, _headers);
        }
        else if (status === 403) {
            var _responseText = response.text();
            return throwException("A server error occurred.", status, _responseText, _headers);
        }
        else if (status !== 200 && status !== 204) {
            var _responseText = response.text();
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        }
        return __WEBPACK_IMPORTED_MODULE_10_rxjs_Observable__["a" /* Observable */].of(null);
    };
    /**
     * 获取活动商品
     * @return Success
     */
    ActivityServiceProxy.prototype.getAll = function (skipCount, maxResultCount, parameter) {
        var _this = this;
        var url_ = this.baseUrl + "/api/services/app/Activity/GetPagedActivities?";
        if (skipCount !== undefined)
            url_ += "SkipCount=" + encodeURIComponent("" + skipCount) + "&";
        if (maxResultCount !== undefined)
            url_ += "MaxResultCount=" + encodeURIComponent("" + maxResultCount) + "&";
        if (parameter.length > 0) {
            parameter.forEach(function (element) {
                if (element.value !== undefined && element.value !== null) {
                    url_ += element.key + "=" + encodeURIComponent("" + element.value) + "&";
                }
            });
        }
        url_ = url_.replace(/[?&]$/, "");
        var options_ = {
            method: "get",
            headers: new __WEBPACK_IMPORTED_MODULE_11__angular_http__["a" /* Headers */]({
                "Content-Type": "application/json",
                "Accept": "application/json"
            })
        };
        return this.http.request(url_, options_).flatMap(function (response_) {
            return _this.processGetAll(response_);
        }).catch(function (response_) {
            if (response_ instanceof __WEBPACK_IMPORTED_MODULE_11__angular_http__["f" /* Response */]) {
                try {
                    return _this.processGetAll(response_);
                }
                catch (e) {
                    return __WEBPACK_IMPORTED_MODULE_10_rxjs_Observable__["a" /* Observable */].throw(e);
                }
            }
            else
                return __WEBPACK_IMPORTED_MODULE_10_rxjs_Observable__["a" /* Observable */].throw(response_);
        });
    };
    ActivityServiceProxy.prototype.processGetAll = function (response) {
        var status = response.status;
        var _headers = response.headers ? response.headers.toJSON() : {};
        if (status === 200) {
            var _responseText = response.text();
            var result200 = null;
            var resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = resultData200 ? PagedResultDtoOfActivity.fromJS(resultData200) : new PagedResultDtoOfActivity();
            return __WEBPACK_IMPORTED_MODULE_10_rxjs_Observable__["a" /* Observable */].of(result200);
        }
        else if (status === 401) {
            var _responseText = response.text();
            return throwException("A server error occurred.", status, _responseText, _headers);
        }
        else if (status === 403) {
            var _responseText = response.text();
            return throwException("A server error occurred.", status, _responseText, _headers);
        }
        else if (status !== 200 && status !== 204) {
            var _responseText = response.text();
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        }
        return __WEBPACK_IMPORTED_MODULE_10_rxjs_Observable__["a" /* Observable */].of(null);
    };
    ActivityServiceProxy = __decorate([
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_9__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_11__angular_http__["b" /* Http */])), __param(1, Object(__WEBPACK_IMPORTED_MODULE_9__angular_core__["Optional"])()), __param(1, Object(__WEBPACK_IMPORTED_MODULE_9__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_8__shared_service_proxies_service_proxies__["a" /* API_BASE_URL */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_11__angular_http__["b" /* Http */], String])
    ], ActivityServiceProxy);
    return ActivityServiceProxy;
}());

var PagedResultDtoOfActivity = /** @class */ (function () {
    function PagedResultDtoOfActivity(data) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
        }
    }
    PagedResultDtoOfActivity.prototype.init = function (data) {
        if (data) {
            this.totalCount = data["totalCount"];
            if (data["items"] && data["items"].constructor === Array) {
                this.items = [];
                for (var _i = 0, _a = data["items"]; _i < _a.length; _i++) {
                    var item = _a[_i];
                    this.items.push(__WEBPACK_IMPORTED_MODULE_7__shared_service_proxies_entity_acitivity__["a" /* Activity */].fromJS(item));
                }
            }
        }
    };
    PagedResultDtoOfActivity.fromJS = function (data) {
        var result = new PagedResultDtoOfActivity();
        result.init(data);
        return result;
    };
    PagedResultDtoOfActivity.prototype.toJSON = function (data) {
        data = typeof data === 'object' ? data : {};
        data["totalCount"] = this.totalCount;
        if (this.items && this.items.constructor === Array) {
            data["items"] = [];
            for (var _i = 0, _a = this.items; _i < _a.length; _i++) {
                var item = _a[_i];
                data["items"].push(item.toJSON());
            }
        }
        return data;
    };
    PagedResultDtoOfActivity.prototype.clone = function () {
        var json = this.toJSON();
        var result = new PagedResultDtoOfActivity();
        result.init(json);
        return result;
    };
    return PagedResultDtoOfActivity;
}());



/***/ }),

/***/ "../../../../../src/app/shared/service-proxies/marketing-service/activity-banquet-service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActivityBanquetServiceProxy; });
/* unused harmony export PagedResultDtoOfActivityBanquet */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_observable_fromPromise__ = __webpack_require__("../../../../rxjs/_esm5/add/observable/fromPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_observable_of__ = __webpack_require__("../../../../rxjs/_esm5/add/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_throw__ = __webpack_require__("../../../../rxjs/_esm5/add/observable/throw.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_mergeMap__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/mergeMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_service_proxies_entity__ = __webpack_require__("../../../../../src/app/shared/service-proxies/entity/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__shared_service_proxies_service_proxies__ = __webpack_require__("../../../../../src/app/shared/service-proxies/service-proxies.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};











// import * as moment from 'moment';

function throwException(message, status, response, headers, result) {
    if (result !== null && result !== undefined)
        return __WEBPACK_IMPORTED_MODULE_8_rxjs_Observable__["a" /* Observable */].throw(result);
    else
        return __WEBPACK_IMPORTED_MODULE_8_rxjs_Observable__["a" /* Observable */].throw(new __WEBPACK_IMPORTED_MODULE_11__shared_service_proxies_service_proxies__["s" /* SwaggerException */](message, status, response, headers, null));
}
var ActivityBanquetServiceProxy = /** @class */ (function () {
    function ActivityBanquetServiceProxy(http, baseUrl) {
        this.jsonParseReviver = undefined;
        this.http = http;
        this.baseUrl = baseUrl ? baseUrl : "";
    }
    /**
     * 通过id获取回传资料信息
     * @param id 消息id
     */
    ActivityBanquetServiceProxy.prototype.get = function (id) {
        var _this = this;
        var url_ = this.baseUrl + "/api/services/app/ActivityBanquet/GetActivityBanquetByIdAsync?";
        if (id !== undefined)
            url_ += "Id=" + encodeURIComponent("" + id) + "&";
        url_ = url_.replace(/[?&]$/, "");
        var options_ = {
            method: "get",
            headers: new __WEBPACK_IMPORTED_MODULE_10__angular_http__["a" /* Headers */]({
                "Content-Type": "application/json",
                "Accept": "application/json"
            })
        };
        return this.http.request(url_, options_).flatMap(function (response_) {
            return _this.processGet(response_);
        }).catch(function (response_) {
            if (response_ instanceof __WEBPACK_IMPORTED_MODULE_10__angular_http__["f" /* Response */]) {
                try {
                    return _this.processGet(response_);
                }
                catch (e) {
                    return __WEBPACK_IMPORTED_MODULE_8_rxjs_Observable__["a" /* Observable */].throw(e);
                }
            }
            else
                return __WEBPACK_IMPORTED_MODULE_8_rxjs_Observable__["a" /* Observable */].throw(response_);
        });
    };
    /**
    * 通过formId获取回传资料信息
    * @param formId 消息id
    */
    ActivityBanquetServiceProxy.prototype.getByFormId = function (formId) {
        var _this = this;
        var url_ = this.baseUrl + "/api/services/app/ActivityBanquet/GetActivityBanquetByFormIdAsync?";
        if (formId !== undefined)
            url_ += "Id=" + encodeURIComponent("" + formId) + "&";
        url_ = url_.replace(/[?&]$/, "");
        var options_ = {
            method: "get",
            headers: new __WEBPACK_IMPORTED_MODULE_10__angular_http__["a" /* Headers */]({
                "Content-Type": "application/json",
                "Accept": "application/json"
            })
        };
        return this.http.request(url_, options_).flatMap(function (response_) {
            return _this.processGet(response_);
        }).catch(function (response_) {
            if (response_ instanceof __WEBPACK_IMPORTED_MODULE_10__angular_http__["f" /* Response */]) {
                try {
                    return _this.processGet(response_);
                }
                catch (e) {
                    return __WEBPACK_IMPORTED_MODULE_8_rxjs_Observable__["a" /* Observable */].throw(e);
                }
            }
            else
                return __WEBPACK_IMPORTED_MODULE_8_rxjs_Observable__["a" /* Observable */].throw(response_);
        });
    };
    ActivityBanquetServiceProxy.prototype.processGet = function (response) {
        var status = response.status;
        var _headers = response.headers ? response.headers.toJSON() : {};
        if (status === 200) {
            var _responseText = response.text();
            var result200 = null;
            var resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = resultData200 ? __WEBPACK_IMPORTED_MODULE_7__shared_service_proxies_entity__["a" /* ActivityBanquetDto */].fromJS(resultData200) : new __WEBPACK_IMPORTED_MODULE_7__shared_service_proxies_entity__["a" /* ActivityBanquetDto */]();
            return __WEBPACK_IMPORTED_MODULE_8_rxjs_Observable__["a" /* Observable */].of(result200);
        }
        else if (status === 401) {
            var _responseText = response.text();
            return throwException("A server error occurred.", status, _responseText, _headers);
        }
        else if (status === 403) {
            var _responseText = response.text();
            return throwException("A server error occurred.", status, _responseText, _headers);
        }
        else if (status !== 200 && status !== 204) {
            var _responseText = response.text();
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        }
        return __WEBPACK_IMPORTED_MODULE_8_rxjs_Observable__["a" /* Observable */].of(null);
    };
    ActivityBanquetServiceProxy = __decorate([
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_9__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_10__angular_http__["b" /* Http */])), __param(1, Object(__WEBPACK_IMPORTED_MODULE_9__angular_core__["Optional"])()), __param(1, Object(__WEBPACK_IMPORTED_MODULE_9__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_11__shared_service_proxies_service_proxies__["a" /* API_BASE_URL */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_10__angular_http__["b" /* Http */], String])
    ], ActivityBanquetServiceProxy);
    return ActivityBanquetServiceProxy;
}());

var PagedResultDtoOfActivityBanquet = /** @class */ (function () {
    function PagedResultDtoOfActivityBanquet(data) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
        }
    }
    PagedResultDtoOfActivityBanquet.prototype.init = function (data) {
        if (data) {
            this.totalCount = data["totalCount"];
            if (data["items"] && data["items"].constructor === Array) {
                this.items = [];
                for (var _i = 0, _a = data["items"]; _i < _a.length; _i++) {
                    var item = _a[_i];
                    this.items.push(__WEBPACK_IMPORTED_MODULE_7__shared_service_proxies_entity__["a" /* ActivityBanquetDto */].fromJS(item));
                }
            }
        }
    };
    PagedResultDtoOfActivityBanquet.fromJS = function (data) {
        var result = new PagedResultDtoOfActivityBanquet();
        result.init(data);
        return result;
    };
    PagedResultDtoOfActivityBanquet.prototype.toJSON = function (data) {
        data = typeof data === 'object' ? data : {};
        data["totalCount"] = this.totalCount;
        if (this.items && this.items.constructor === Array) {
            data["items"] = [];
            for (var _i = 0, _a = this.items; _i < _a.length; _i++) {
                var item = _a[_i];
                data["items"].push(item.toJSON());
            }
        }
        return data;
    };
    PagedResultDtoOfActivityBanquet.prototype.clone = function () {
        var json = this.toJSON();
        var result = new PagedResultDtoOfActivityBanquet();
        result.init(json);
        return result;
    };
    return PagedResultDtoOfActivityBanquet;
}());



/***/ }),

/***/ "../../../../../src/app/shared/service-proxies/marketing-service/activity-delivery-service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActivityDeliveryInfoServiceProxy; });
/* unused harmony export PagedResultDtoOfActivityDeliveryInfo */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_observable_fromPromise__ = __webpack_require__("../../../../rxjs/_esm5/add/observable/fromPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_observable_of__ = __webpack_require__("../../../../rxjs/_esm5/add/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_throw__ = __webpack_require__("../../../../rxjs/_esm5/add/observable/throw.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_mergeMap__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/mergeMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_service_proxies_entity__ = __webpack_require__("../../../../../src/app/shared/service-proxies/entity/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__shared_service_proxies_service_proxies__ = __webpack_require__("../../../../../src/app/shared/service-proxies/service-proxies.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};











// import * as moment from 'moment';

function throwException(message, status, response, headers, result) {
    if (result !== null && result !== undefined)
        return __WEBPACK_IMPORTED_MODULE_8_rxjs_Observable__["a" /* Observable */].throw(result);
    else
        return __WEBPACK_IMPORTED_MODULE_8_rxjs_Observable__["a" /* Observable */].throw(new __WEBPACK_IMPORTED_MODULE_11__shared_service_proxies_service_proxies__["s" /* SwaggerException */](message, status, response, headers, null));
}
var ActivityDeliveryInfoServiceProxy = /** @class */ (function () {
    function ActivityDeliveryInfoServiceProxy(http, baseUrl) {
        this.jsonParseReviver = undefined;
        this.http = http;
        this.baseUrl = baseUrl ? baseUrl : "";
    }
    /**
     * 通过id获取回传资料信息
     * @param id 消息id
     */
    ActivityDeliveryInfoServiceProxy.prototype.get = function (id) {
        var _this = this;
        var url_ = this.baseUrl + "/api/services/app/ActivityDeliveryInfo/GetActivityDeliveryInfoByIdAsync?";
        if (id !== undefined)
            url_ += "Id=" + encodeURIComponent("" + id) + "&";
        url_ = url_.replace(/[?&]$/, "");
        var options_ = {
            method: "get",
            headers: new __WEBPACK_IMPORTED_MODULE_10__angular_http__["a" /* Headers */]({
                "Content-Type": "application/json",
                "Accept": "application/json"
            })
        };
        return this.http.request(url_, options_).flatMap(function (response_) {
            return _this.processGet(response_);
        }).catch(function (response_) {
            if (response_ instanceof __WEBPACK_IMPORTED_MODULE_10__angular_http__["f" /* Response */]) {
                try {
                    return _this.processGet(response_);
                }
                catch (e) {
                    return __WEBPACK_IMPORTED_MODULE_8_rxjs_Observable__["a" /* Observable */].throw(e);
                }
            }
            else
                return __WEBPACK_IMPORTED_MODULE_8_rxjs_Observable__["a" /* Observable */].throw(response_);
        });
    };
    /**
    * 通过formId获取回传资料信息
    * @param formId 消息id
    */
    ActivityDeliveryInfoServiceProxy.prototype.getByFormId = function (formId) {
        var _this = this;
        var url_ = this.baseUrl + "/api/services/app/ActivityDeliveryInfo/GetActivityDeliveryInfoByFormIdAsync?";
        if (formId !== undefined)
            url_ += "Id=" + encodeURIComponent("" + formId) + "&";
        url_ = url_.replace(/[?&]$/, "");
        var options_ = {
            method: "get",
            headers: new __WEBPACK_IMPORTED_MODULE_10__angular_http__["a" /* Headers */]({
                "Content-Type": "application/json",
                "Accept": "application/json"
            })
        };
        return this.http.request(url_, options_).flatMap(function (response_) {
            return _this.processGet(response_);
        }).catch(function (response_) {
            if (response_ instanceof __WEBPACK_IMPORTED_MODULE_10__angular_http__["f" /* Response */]) {
                try {
                    return _this.processGet(response_);
                }
                catch (e) {
                    return __WEBPACK_IMPORTED_MODULE_8_rxjs_Observable__["a" /* Observable */].throw(e);
                }
            }
            else
                return __WEBPACK_IMPORTED_MODULE_8_rxjs_Observable__["a" /* Observable */].throw(response_);
        });
    };
    ActivityDeliveryInfoServiceProxy.prototype.processGet = function (response) {
        var status = response.status;
        var _headers = response.headers ? response.headers.toJSON() : {};
        if (status === 200) {
            var _responseText = response.text();
            var result200 = null;
            var resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = resultData200 ? __WEBPACK_IMPORTED_MODULE_7__shared_service_proxies_entity__["b" /* ActivityDeliveryInfoDto */].fromJS(resultData200) : new __WEBPACK_IMPORTED_MODULE_7__shared_service_proxies_entity__["b" /* ActivityDeliveryInfoDto */]();
            return __WEBPACK_IMPORTED_MODULE_8_rxjs_Observable__["a" /* Observable */].of(result200);
        }
        else if (status === 401) {
            var _responseText = response.text();
            return throwException("A server error occurred.", status, _responseText, _headers);
        }
        else if (status === 403) {
            var _responseText = response.text();
            return throwException("A server error occurred.", status, _responseText, _headers);
        }
        else if (status !== 200 && status !== 204) {
            var _responseText = response.text();
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        }
        return __WEBPACK_IMPORTED_MODULE_8_rxjs_Observable__["a" /* Observable */].of(null);
    };
    ActivityDeliveryInfoServiceProxy = __decorate([
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_9__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_10__angular_http__["b" /* Http */])), __param(1, Object(__WEBPACK_IMPORTED_MODULE_9__angular_core__["Optional"])()), __param(1, Object(__WEBPACK_IMPORTED_MODULE_9__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_11__shared_service_proxies_service_proxies__["a" /* API_BASE_URL */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_10__angular_http__["b" /* Http */], String])
    ], ActivityDeliveryInfoServiceProxy);
    return ActivityDeliveryInfoServiceProxy;
}());

var PagedResultDtoOfActivityDeliveryInfo = /** @class */ (function () {
    function PagedResultDtoOfActivityDeliveryInfo(data) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
        }
    }
    PagedResultDtoOfActivityDeliveryInfo.prototype.init = function (data) {
        if (data) {
            this.totalCount = data["totalCount"];
            if (data["items"] && data["items"].constructor === Array) {
                this.items = [];
                for (var _i = 0, _a = data["items"]; _i < _a.length; _i++) {
                    var item = _a[_i];
                    this.items.push(__WEBPACK_IMPORTED_MODULE_7__shared_service_proxies_entity__["b" /* ActivityDeliveryInfoDto */].fromJS(item));
                }
            }
        }
    };
    PagedResultDtoOfActivityDeliveryInfo.fromJS = function (data) {
        var result = new PagedResultDtoOfActivityDeliveryInfo();
        result.init(data);
        return result;
    };
    PagedResultDtoOfActivityDeliveryInfo.prototype.toJSON = function (data) {
        data = typeof data === 'object' ? data : {};
        data["totalCount"] = this.totalCount;
        if (this.items && this.items.constructor === Array) {
            data["items"] = [];
            for (var _i = 0, _a = this.items; _i < _a.length; _i++) {
                var item = _a[_i];
                data["items"].push(item.toJSON());
            }
        }
        return data;
    };
    PagedResultDtoOfActivityDeliveryInfo.prototype.clone = function () {
        var json = this.toJSON();
        var result = new PagedResultDtoOfActivityDeliveryInfo();
        result.init(json);
        return result;
    };
    return PagedResultDtoOfActivityDeliveryInfo;
}());



/***/ }),

/***/ "../../../../../src/app/shared/service-proxies/marketing-service/activity-form-service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActivityFormServiceProxy; });
/* unused harmony export PagedResultDtoOfActivityForm */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_observable_fromPromise__ = __webpack_require__("../../../../rxjs/_esm5/add/observable/fromPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_observable_of__ = __webpack_require__("../../../../rxjs/_esm5/add/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_throw__ = __webpack_require__("../../../../rxjs/_esm5/add/observable/throw.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_mergeMap__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/mergeMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_service_proxies_entity__ = __webpack_require__("../../../../../src/app/shared/service-proxies/entity/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__shared_service_proxies_service_proxies__ = __webpack_require__("../../../../../src/app/shared/service-proxies/service-proxies.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};











// import * as moment from 'moment';

function throwException(message, status, response, headers, result) {
    if (result !== null && result !== undefined)
        return __WEBPACK_IMPORTED_MODULE_8_rxjs_Observable__["a" /* Observable */].throw(result);
    else
        return __WEBPACK_IMPORTED_MODULE_8_rxjs_Observable__["a" /* Observable */].throw(new __WEBPACK_IMPORTED_MODULE_11__shared_service_proxies_service_proxies__["s" /* SwaggerException */](message, status, response, headers, null));
}
var ActivityFormServiceProxy = /** @class */ (function () {
    function ActivityFormServiceProxy(http, baseUrl) {
        this.jsonParseReviver = undefined;
        this.http = http;
        this.baseUrl = baseUrl ? baseUrl : "";
    }
    /**
     * 获取活动表单
     * @return Success
     */
    ActivityFormServiceProxy.prototype.getAll = function (skipCount, maxResultCount, parameter) {
        var _this = this;
        var url_ = this.baseUrl + "/api/services/app/ActivityForm/GetPagedActivityForms?";
        if (skipCount !== undefined)
            url_ += "SkipCount=" + encodeURIComponent("" + skipCount) + "&";
        if (maxResultCount !== undefined)
            url_ += "MaxResultCount=" + encodeURIComponent("" + maxResultCount) + "&";
        //console.table(parameter);
        if (parameter.length > 0) {
            parameter.forEach(function (element) {
                if (element.value !== undefined && element.value !== null) {
                    url_ += element.key + "=" + encodeURIComponent("" + element.value) + "&";
                }
            });
        }
        url_ = url_.replace(/[?&]$/, "");
        var options_ = {
            method: "get",
            headers: new __WEBPACK_IMPORTED_MODULE_10__angular_http__["a" /* Headers */]({
                "Content-Type": "application/json",
                "Accept": "application/json"
            })
        };
        return this.http.request(url_, options_).flatMap(function (response_) {
            return _this.processGetAll(response_);
        }).catch(function (response_) {
            if (response_ instanceof __WEBPACK_IMPORTED_MODULE_10__angular_http__["f" /* Response */]) {
                try {
                    return _this.processGetAll(response_);
                }
                catch (e) {
                    return __WEBPACK_IMPORTED_MODULE_8_rxjs_Observable__["a" /* Observable */].throw(e);
                }
            }
            else
                return __WEBPACK_IMPORTED_MODULE_8_rxjs_Observable__["a" /* Observable */].throw(response_);
        });
    };
    ActivityFormServiceProxy.prototype.processGetAll = function (response) {
        var status = response.status;
        var _headers = response.headers ? response.headers.toJSON() : {};
        if (status === 200) {
            var _responseText = response.text();
            var result200 = null;
            var resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = resultData200 ? PagedResultDtoOfActivityForm.fromJS(resultData200) : new PagedResultDtoOfActivityForm();
            return __WEBPACK_IMPORTED_MODULE_8_rxjs_Observable__["a" /* Observable */].of(result200);
        }
        else if (status === 401) {
            var _responseText = response.text();
            return throwException("A server error occurred.", status, _responseText, _headers);
        }
        else if (status === 403) {
            var _responseText = response.text();
            return throwException("A server error occurred.", status, _responseText, _headers);
        }
        else if (status !== 200 && status !== 204) {
            var _responseText = response.text();
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        }
        return __WEBPACK_IMPORTED_MODULE_8_rxjs_Observable__["a" /* Observable */].of(null);
    };
    /**
     * 通过消息id
     * @param id 表单id
     */
    ActivityFormServiceProxy.prototype.get = function (id) {
        var _this = this;
        var url_ = this.baseUrl + "/api/services/app/ActivityForm/GetActivityFormByIdAsync?";
        if (id !== undefined)
            url_ += "Id=" + encodeURIComponent("" + id) + "&";
        url_ = url_.replace(/[?&]$/, "");
        var options_ = {
            method: "get",
            headers: new __WEBPACK_IMPORTED_MODULE_10__angular_http__["a" /* Headers */]({
                "Content-Type": "application/json",
                "Accept": "application/json"
            })
        };
        return this.http.request(url_, options_).flatMap(function (response_) {
            return _this.processGet(response_);
        }).catch(function (response_) {
            if (response_ instanceof __WEBPACK_IMPORTED_MODULE_10__angular_http__["f" /* Response */]) {
                try {
                    return _this.processGet(response_);
                }
                catch (e) {
                    return __WEBPACK_IMPORTED_MODULE_8_rxjs_Observable__["a" /* Observable */].throw(e);
                }
            }
            else
                return __WEBPACK_IMPORTED_MODULE_8_rxjs_Observable__["a" /* Observable */].throw(response_);
        });
    };
    ActivityFormServiceProxy.prototype.processGet = function (response) {
        var status = response.status;
        var _headers = response.headers ? response.headers.toJSON() : {};
        if (status === 200) {
            var _responseText = response.text();
            var result200 = null;
            var resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = resultData200 ? __WEBPACK_IMPORTED_MODULE_7__shared_service_proxies_entity__["c" /* ActivityFormDto */].fromJS(resultData200) : new __WEBPACK_IMPORTED_MODULE_7__shared_service_proxies_entity__["c" /* ActivityFormDto */]();
            return __WEBPACK_IMPORTED_MODULE_8_rxjs_Observable__["a" /* Observable */].of(result200);
        }
        else if (status === 401) {
            var _responseText = response.text();
            return throwException("A server error occurred.", status, _responseText, _headers);
        }
        else if (status === 403) {
            var _responseText = response.text();
            return throwException("A server error occurred.", status, _responseText, _headers);
        }
        else if (status !== 200 && status !== 204) {
            var _responseText = response.text();
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        }
        return __WEBPACK_IMPORTED_MODULE_8_rxjs_Observable__["a" /* Observable */].of(null);
    };
    ActivityFormServiceProxy = __decorate([
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_9__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_10__angular_http__["b" /* Http */])), __param(1, Object(__WEBPACK_IMPORTED_MODULE_9__angular_core__["Optional"])()), __param(1, Object(__WEBPACK_IMPORTED_MODULE_9__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_11__shared_service_proxies_service_proxies__["a" /* API_BASE_URL */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_10__angular_http__["b" /* Http */], String])
    ], ActivityFormServiceProxy);
    return ActivityFormServiceProxy;
}());

var PagedResultDtoOfActivityForm = /** @class */ (function () {
    function PagedResultDtoOfActivityForm(data) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
        }
    }
    PagedResultDtoOfActivityForm.prototype.init = function (data) {
        if (data) {
            this.totalCount = data["totalCount"];
            if (data["items"] && data["items"].constructor === Array) {
                this.items = [];
                for (var _i = 0, _a = data["items"]; _i < _a.length; _i++) {
                    var item = _a[_i];
                    this.items.push(__WEBPACK_IMPORTED_MODULE_7__shared_service_proxies_entity__["c" /* ActivityFormDto */].fromJS(item));
                }
            }
        }
    };
    PagedResultDtoOfActivityForm.fromJS = function (data) {
        var result = new PagedResultDtoOfActivityForm();
        result.init(data);
        return result;
    };
    PagedResultDtoOfActivityForm.prototype.toJSON = function (data) {
        data = typeof data === 'object' ? data : {};
        data["totalCount"] = this.totalCount;
        if (this.items && this.items.constructor === Array) {
            data["items"] = [];
            for (var _i = 0, _a = this.items; _i < _a.length; _i++) {
                var item = _a[_i];
                data["items"].push(item.toJSON());
            }
        }
        return data;
    };
    PagedResultDtoOfActivityForm.prototype.clone = function () {
        var json = this.toJSON();
        var result = new PagedResultDtoOfActivityForm();
        result.init(json);
        return result;
    };
    return PagedResultDtoOfActivityForm;
}());



/***/ }),

/***/ "../../../../../src/app/shared/service-proxies/marketing-service/activity-goods-service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActivityGoodsServiceProxy; });
/* unused harmony export PagedResultDtoOfActivityGoods */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_observable_fromPromise__ = __webpack_require__("../../../../rxjs/_esm5/add/observable/fromPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_observable_of__ = __webpack_require__("../../../../rxjs/_esm5/add/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_throw__ = __webpack_require__("../../../../rxjs/_esm5/add/observable/throw.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_mergeMap__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/mergeMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_finally__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/finally.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__shared_service_proxies_service_proxies__ = __webpack_require__("../../../../../src/app/shared/service-proxies/service-proxies.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__shared_service_proxies_entity_activity_goods__ = __webpack_require__("../../../../../src/app/shared/service-proxies/entity/activity-goods.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};













// import * as moment from 'moment';
function throwException(message, status, response, headers, result) {
    if (result !== null && result !== undefined)
        return __WEBPACK_IMPORTED_MODULE_8_rxjs_Observable__["a" /* Observable */].throw(result);
    else
        return __WEBPACK_IMPORTED_MODULE_8_rxjs_Observable__["a" /* Observable */].throw(new __WEBPACK_IMPORTED_MODULE_11__shared_service_proxies_service_proxies__["s" /* SwaggerException */](message, status, response, headers, null));
}
var ActivityGoodsServiceProxy = /** @class */ (function () {
    function ActivityGoodsServiceProxy(http, baseUrl) {
        this.jsonParseReviver = undefined;
        this.http = http;
        this.baseUrl = baseUrl ? baseUrl : "";
    }
    /**
     * 获取活动商品
     * @return Success
     */
    ActivityGoodsServiceProxy.prototype.getAll = function (skipCount, maxResultCount, parameter) {
        var _this = this;
        var url_ = this.baseUrl + "/api/services/app/ActivityGoods/GetPagedActivityGoodsesByAcId?";
        if (skipCount !== undefined)
            url_ += "SkipCount=" + encodeURIComponent("" + skipCount) + "&";
        if (maxResultCount !== undefined)
            url_ += "MaxResultCount=" + encodeURIComponent("" + maxResultCount) + "&";
        if (parameter.length > 0) {
            parameter.forEach(function (element) {
                if (element.value !== undefined && element.value !== null) {
                    url_ += element.key + "=" + encodeURIComponent("" + element.value) + "&";
                }
            });
        }
        url_ = url_.replace(/[?&]$/, "");
        var options_ = {
            method: "get",
            headers: new __WEBPACK_IMPORTED_MODULE_10__angular_http__["a" /* Headers */]({
                "Content-Type": "application/json",
                "Accept": "application/json"
            })
        };
        return this.http.request(url_, options_).flatMap(function (response_) {
            return _this.processGetAll(response_);
        }).catch(function (response_) {
            if (response_ instanceof __WEBPACK_IMPORTED_MODULE_10__angular_http__["f" /* Response */]) {
                try {
                    return _this.processGetAll(response_);
                }
                catch (e) {
                    return __WEBPACK_IMPORTED_MODULE_8_rxjs_Observable__["a" /* Observable */].throw(e);
                }
            }
            else
                return __WEBPACK_IMPORTED_MODULE_8_rxjs_Observable__["a" /* Observable */].throw(response_);
        });
    };
    ActivityGoodsServiceProxy.prototype.processGetAll = function (response) {
        var status = response.status;
        var _headers = response.headers ? response.headers.toJSON() : {};
        if (status === 200) {
            var _responseText = response.text();
            var result200 = null;
            var resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = resultData200 ? PagedResultDtoOfActivityGoods.fromJS(resultData200) : new PagedResultDtoOfActivityGoods();
            return __WEBPACK_IMPORTED_MODULE_8_rxjs_Observable__["a" /* Observable */].of(result200);
        }
        else if (status === 401) {
            var _responseText = response.text();
            return throwException("A server error occurred.", status, _responseText, _headers);
        }
        else if (status === 403) {
            var _responseText = response.text();
            return throwException("A server error occurred.", status, _responseText, _headers);
        }
        else if (status !== 200 && status !== 204) {
            var _responseText = response.text();
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        }
        return __WEBPACK_IMPORTED_MODULE_8_rxjs_Observable__["a" /* Observable */].of(null);
    };
    /**
     * 通过消息id获取活动商品信息
     * @param id 消息id
     */
    ActivityGoodsServiceProxy.prototype.get = function (id) {
        var _this = this;
        var url_ = this.baseUrl + "/api/services/app/ActivityGoods/GetActivityGoodsByIdAsync?";
        if (id !== undefined)
            url_ += "Id=" + encodeURIComponent("" + id) + "&";
        url_ = url_.replace(/[?&]$/, "");
        var options_ = {
            method: "get",
            headers: new __WEBPACK_IMPORTED_MODULE_10__angular_http__["a" /* Headers */]({
                "Content-Type": "application/json",
                "Accept": "application/json"
            })
        };
        return this.http.request(url_, options_).flatMap(function (response_) {
            return _this.processGet(response_);
        }).catch(function (response_) {
            if (response_ instanceof __WEBPACK_IMPORTED_MODULE_10__angular_http__["f" /* Response */]) {
                try {
                    return _this.processGet(response_);
                }
                catch (e) {
                    return __WEBPACK_IMPORTED_MODULE_8_rxjs_Observable__["a" /* Observable */].throw(e);
                }
            }
            else
                return __WEBPACK_IMPORTED_MODULE_8_rxjs_Observable__["a" /* Observable */].throw(response_);
        });
    };
    ActivityGoodsServiceProxy.prototype.processGet = function (response) {
        var status = response.status;
        var _headers = response.headers ? response.headers.toJSON() : {};
        if (status === 200) {
            var _responseText = response.text();
            var result200 = null;
            var resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = resultData200 ? __WEBPACK_IMPORTED_MODULE_12__shared_service_proxies_entity_activity_goods__["a" /* ActivityGoods */].fromJS(resultData200) : new __WEBPACK_IMPORTED_MODULE_12__shared_service_proxies_entity_activity_goods__["a" /* ActivityGoods */]();
            return __WEBPACK_IMPORTED_MODULE_8_rxjs_Observable__["a" /* Observable */].of(result200);
        }
        else if (status === 401) {
            var _responseText = response.text();
            return throwException("A server error occurred.", status, _responseText, _headers);
        }
        else if (status === 403) {
            var _responseText = response.text();
            return throwException("A server error occurred.", status, _responseText, _headers);
        }
        else if (status !== 200 && status !== 204) {
            var _responseText = response.text();
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        }
        return __WEBPACK_IMPORTED_MODULE_8_rxjs_Observable__["a" /* Observable */].of(null);
    };
    /**
     * 新增或修改自动回复消息信息
     * @param input
     */
    ActivityGoodsServiceProxy.prototype.update = function (input) {
        var _this = this;
        var url_ = this.baseUrl + "/api/services/app/ActivityGoods/CreateOrUpdateActivityGoodsDto";
        url_ = url_.replace(/[?&]$/, "");
        var content_ = JSON.stringify(input);
        var options_ = {
            body: content_,
            method: "post",
            headers: new __WEBPACK_IMPORTED_MODULE_10__angular_http__["a" /* Headers */]({
                "Content-Type": "application/json",
                "Accept": "application/json"
            })
        };
        return this.http.request(url_, options_).flatMap(function (response_) {
            return _this.processUpdate(response_);
        }).catch(function (response_) {
            if (response_ instanceof __WEBPACK_IMPORTED_MODULE_10__angular_http__["f" /* Response */]) {
                try {
                    return _this.processUpdate(response_);
                }
                catch (e) {
                    return __WEBPACK_IMPORTED_MODULE_8_rxjs_Observable__["a" /* Observable */].throw(e);
                }
            }
            else
                return __WEBPACK_IMPORTED_MODULE_8_rxjs_Observable__["a" /* Observable */].throw(response_);
        });
    };
    ActivityGoodsServiceProxy.prototype.processUpdate = function (response) {
        var status = response.status;
        var _headers = response.headers ? response.headers.toJSON() : {};
        if (status === 200) {
            var _responseText = response.text();
            var result200 = null;
            var resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = resultData200 ? __WEBPACK_IMPORTED_MODULE_12__shared_service_proxies_entity_activity_goods__["a" /* ActivityGoods */].fromJS(resultData200) : new __WEBPACK_IMPORTED_MODULE_12__shared_service_proxies_entity_activity_goods__["a" /* ActivityGoods */]();
            return __WEBPACK_IMPORTED_MODULE_8_rxjs_Observable__["a" /* Observable */].of(result200);
        }
        else if (status === 401) {
            var _responseText = response.text();
            return throwException("A server error occurred.", status, _responseText, _headers);
        }
        else if (status === 403) {
            var _responseText = response.text();
            return throwException("A server error occurred.", status, _responseText, _headers);
        }
        else if (status !== 200 && status !== 204) {
            var _responseText = response.text();
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        }
        return __WEBPACK_IMPORTED_MODULE_8_rxjs_Observable__["a" /* Observable */].of(null);
    };
    /**
    * @return Success
    */
    ActivityGoodsServiceProxy.prototype.delete = function (id) {
        var _this = this;
        var url_ = this.baseUrl + "/api/services/app/ActivityGoods/DeleteActivityGoods?";
        if (id !== undefined)
            url_ += "Id=" + encodeURIComponent("" + id) + "&";
        url_ = url_.replace(/[?&]$/, "");
        var options_ = {
            method: "delete",
            headers: new __WEBPACK_IMPORTED_MODULE_10__angular_http__["a" /* Headers */]({
                "Content-Type": "application/json",
            })
        };
        return this.http.request(url_, options_).flatMap(function (response_) {
            return _this.processDelete(response_);
        }).catch(function (response_) {
            if (response_ instanceof __WEBPACK_IMPORTED_MODULE_10__angular_http__["f" /* Response */]) {
                try {
                    return _this.processDelete(response_);
                }
                catch (e) {
                    return __WEBPACK_IMPORTED_MODULE_8_rxjs_Observable__["a" /* Observable */].throw(e);
                }
            }
            else
                return __WEBPACK_IMPORTED_MODULE_8_rxjs_Observable__["a" /* Observable */].throw(response_);
        });
    };
    ActivityGoodsServiceProxy.prototype.processDelete = function (response) {
        var status = response.status;
        var _headers = response.headers ? response.headers.toJSON() : {};
        if (status === 200) {
            var _responseText = response.text();
            return __WEBPACK_IMPORTED_MODULE_8_rxjs_Observable__["a" /* Observable */].of(null);
        }
        else if (status === 401) {
            var _responseText = response.text();
            return throwException("A server error occurred.", status, _responseText, _headers);
        }
        else if (status === 403) {
            var _responseText = response.text();
            return throwException("A server error occurred.", status, _responseText, _headers);
        }
        else if (status !== 200 && status !== 204) {
            var _responseText = response.text();
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        }
        return __WEBPACK_IMPORTED_MODULE_8_rxjs_Observable__["a" /* Observable */].of(null);
    };
    ActivityGoodsServiceProxy = __decorate([
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_9__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_10__angular_http__["b" /* Http */])), __param(1, Object(__WEBPACK_IMPORTED_MODULE_9__angular_core__["Optional"])()), __param(1, Object(__WEBPACK_IMPORTED_MODULE_9__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_11__shared_service_proxies_service_proxies__["a" /* API_BASE_URL */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_10__angular_http__["b" /* Http */], String])
    ], ActivityGoodsServiceProxy);
    return ActivityGoodsServiceProxy;
}());

var PagedResultDtoOfActivityGoods = /** @class */ (function () {
    function PagedResultDtoOfActivityGoods(data) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
        }
    }
    PagedResultDtoOfActivityGoods.prototype.init = function (data) {
        if (data) {
            this.totalCount = data["totalCount"];
            if (data["items"] && data["items"].constructor === Array) {
                this.items = [];
                for (var _i = 0, _a = data["items"]; _i < _a.length; _i++) {
                    var item = _a[_i];
                    this.items.push(__WEBPACK_IMPORTED_MODULE_12__shared_service_proxies_entity_activity_goods__["a" /* ActivityGoods */].fromJS(item));
                }
            }
        }
    };
    PagedResultDtoOfActivityGoods.fromJS = function (data) {
        var result = new PagedResultDtoOfActivityGoods();
        result.init(data);
        return result;
    };
    PagedResultDtoOfActivityGoods.prototype.toJSON = function (data) {
        data = typeof data === 'object' ? data : {};
        data["totalCount"] = this.totalCount;
        if (this.items && this.items.constructor === Array) {
            data["items"] = [];
            for (var _i = 0, _a = this.items; _i < _a.length; _i++) {
                var item = _a[_i];
                data["items"].push(item.toJSON());
            }
        }
        return data;
    };
    PagedResultDtoOfActivityGoods.prototype.clone = function () {
        var json = this.toJSON();
        var result = new PagedResultDtoOfActivityGoods();
        result.init(json);
        return result;
    };
    return PagedResultDtoOfActivityGoods;
}());



/***/ }),

/***/ "../../../../../src/app/shared/service-proxies/marketing-service/employee-service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmployeeServiceProxy; });
/* unused harmony export PagedResultDtoOfEmployee */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_observable_fromPromise__ = __webpack_require__("../../../../rxjs/_esm5/add/observable/fromPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_observable_of__ = __webpack_require__("../../../../rxjs/_esm5/add/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_throw__ = __webpack_require__("../../../../rxjs/_esm5/add/observable/throw.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_mergeMap__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/mergeMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_finally__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/finally.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__shared_service_proxies_entity_employee__ = __webpack_require__("../../../../../src/app/shared/service-proxies/entity/employee.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__shared_service_proxies_service_proxies__ = __webpack_require__("../../../../../src/app/shared/service-proxies/service-proxies.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};













// import * as moment from 'moment';
function throwException(message, status, response, headers, result) {
    if (result !== null && result !== undefined)
        return __WEBPACK_IMPORTED_MODULE_9_rxjs_Observable__["a" /* Observable */].throw(result);
    else
        return __WEBPACK_IMPORTED_MODULE_9_rxjs_Observable__["a" /* Observable */].throw(new __WEBPACK_IMPORTED_MODULE_12__shared_service_proxies_service_proxies__["s" /* SwaggerException */](message, status, response, headers, null));
}
var EmployeeServiceProxy = /** @class */ (function () {
    function EmployeeServiceProxy(http, baseUrl) {
        this.jsonParseReviver = undefined;
        this.http = http;
        this.baseUrl = baseUrl ? baseUrl : "";
    }
    /**
     * 获取自动回复消息
     * @return Success
     */
    EmployeeServiceProxy.prototype.getAll = function (skipCount, maxResultCount, Filter) {
        var _this = this;
        var url_ = this.baseUrl + "/api/services/app/Employee/GetPagedEmployees?";
        if (skipCount !== undefined)
            url_ += "SkipCount=" + encodeURIComponent("" + skipCount) + "&";
        if (maxResultCount !== undefined)
            url_ += "MaxResultCount=" + encodeURIComponent("" + maxResultCount) + "&";
        if (Filter !== undefined)
            url_ += "Filter=" + encodeURIComponent("" + Filter) + "&";
        url_ = url_.replace(/[?&]$/, "");
        var options_ = {
            method: "get",
            headers: new __WEBPACK_IMPORTED_MODULE_11__angular_http__["a" /* Headers */]({
                "Content-Type": "application/json",
                "Accept": "application/json"
            })
        };
        return this.http.request(url_, options_).flatMap(function (response_) {
            return _this.processGetAll(response_);
        }).catch(function (response_) {
            if (response_ instanceof __WEBPACK_IMPORTED_MODULE_11__angular_http__["f" /* Response */]) {
                try {
                    return _this.processGetAll(response_);
                }
                catch (e) {
                    return __WEBPACK_IMPORTED_MODULE_9_rxjs_Observable__["a" /* Observable */].throw(e);
                }
            }
            else
                return __WEBPACK_IMPORTED_MODULE_9_rxjs_Observable__["a" /* Observable */].throw(response_);
        });
    };
    EmployeeServiceProxy.prototype.processGetAll = function (response) {
        var status = response.status;
        var _headers = response.headers ? response.headers.toJSON() : {};
        if (status === 200) {
            var _responseText = response.text();
            var result200 = null;
            var resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = resultData200 ? PagedResultDtoOfEmployee.fromJS(resultData200) : new PagedResultDtoOfEmployee();
            return __WEBPACK_IMPORTED_MODULE_9_rxjs_Observable__["a" /* Observable */].of(result200);
        }
        else if (status === 401) {
            var _responseText = response.text();
            return throwException("A server error occurred.", status, _responseText, _headers);
        }
        else if (status === 403) {
            var _responseText = response.text();
            return throwException("A server error occurred.", status, _responseText, _headers);
        }
        else if (status !== 200 && status !== 204) {
            var _responseText = response.text();
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        }
        return __WEBPACK_IMPORTED_MODULE_9_rxjs_Observable__["a" /* Observable */].of(null);
    };
    /**
     * 通过消息id获取自动回复消息信息
     * @param id 消息id
     */
    EmployeeServiceProxy.prototype.get = function (id) {
        var _this = this;
        var url_ = this.baseUrl + "/api/services/app/Employee/GetEmployeeByIdAsync?";
        if (id !== undefined)
            url_ += "Id=" + encodeURIComponent("" + id) + "&";
        url_ = url_.replace(/[?&]$/, "");
        var options_ = {
            method: "get",
            headers: new __WEBPACK_IMPORTED_MODULE_11__angular_http__["a" /* Headers */]({
                "Content-Type": "application/json",
                "Accept": "application/json"
            })
        };
        return this.http.request(url_, options_).flatMap(function (response_) {
            return _this.processGet(response_);
        }).catch(function (response_) {
            if (response_ instanceof __WEBPACK_IMPORTED_MODULE_11__angular_http__["f" /* Response */]) {
                try {
                    return _this.processGet(response_);
                }
                catch (e) {
                    return __WEBPACK_IMPORTED_MODULE_9_rxjs_Observable__["a" /* Observable */].throw(e);
                }
            }
            else
                return __WEBPACK_IMPORTED_MODULE_9_rxjs_Observable__["a" /* Observable */].throw(response_);
        });
    };
    EmployeeServiceProxy.prototype.processGet = function (response) {
        var status = response.status;
        var _headers = response.headers ? response.headers.toJSON() : {};
        if (status === 200) {
            var _responseText = response.text();
            var result200 = null;
            var resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = resultData200 ? __WEBPACK_IMPORTED_MODULE_8__shared_service_proxies_entity_employee__["a" /* Employee */].fromJS(resultData200) : new __WEBPACK_IMPORTED_MODULE_8__shared_service_proxies_entity_employee__["a" /* Employee */]();
            return __WEBPACK_IMPORTED_MODULE_9_rxjs_Observable__["a" /* Observable */].of(result200);
        }
        else if (status === 401) {
            var _responseText = response.text();
            return throwException("A server error occurred.", status, _responseText, _headers);
        }
        else if (status === 403) {
            var _responseText = response.text();
            return throwException("A server error occurred.", status, _responseText, _headers);
        }
        else if (status !== 200 && status !== 204) {
            var _responseText = response.text();
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        }
        return __WEBPACK_IMPORTED_MODULE_9_rxjs_Observable__["a" /* Observable */].of(null);
    };
    /**
     * 新增或修改自动回复消息信息
     * @param input
     */
    EmployeeServiceProxy.prototype.update = function (input) {
        var _this = this;
        var url_ = this.baseUrl + "/api/services/app/Employee/CreateOrUpdateWechatMessageDto";
        url_ = url_.replace(/[?&]$/, "");
        var content_ = JSON.stringify(input);
        var options_ = {
            body: content_,
            method: "post",
            headers: new __WEBPACK_IMPORTED_MODULE_11__angular_http__["a" /* Headers */]({
                "Content-Type": "application/json",
                "Accept": "application/json"
            })
        };
        return this.http.request(url_, options_).flatMap(function (response_) {
            return _this.processUpdate(response_);
        }).catch(function (response_) {
            if (response_ instanceof __WEBPACK_IMPORTED_MODULE_11__angular_http__["f" /* Response */]) {
                try {
                    return _this.processUpdate(response_);
                }
                catch (e) {
                    return __WEBPACK_IMPORTED_MODULE_9_rxjs_Observable__["a" /* Observable */].throw(e);
                }
            }
            else
                return __WEBPACK_IMPORTED_MODULE_9_rxjs_Observable__["a" /* Observable */].throw(response_);
        });
    };
    EmployeeServiceProxy.prototype.processUpdate = function (response) {
        var status = response.status;
        var _headers = response.headers ? response.headers.toJSON() : {};
        if (status === 200) {
            var _responseText = response.text();
            var result200 = null;
            var resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = resultData200 ? __WEBPACK_IMPORTED_MODULE_8__shared_service_proxies_entity_employee__["a" /* Employee */].fromJS(resultData200) : new __WEBPACK_IMPORTED_MODULE_8__shared_service_proxies_entity_employee__["a" /* Employee */]();
            return __WEBPACK_IMPORTED_MODULE_9_rxjs_Observable__["a" /* Observable */].of(result200);
        }
        else if (status === 401) {
            var _responseText = response.text();
            return throwException("A server error occurred.", status, _responseText, _headers);
        }
        else if (status === 403) {
            var _responseText = response.text();
            return throwException("A server error occurred.", status, _responseText, _headers);
        }
        else if (status !== 200 && status !== 204) {
            var _responseText = response.text();
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        }
        return __WEBPACK_IMPORTED_MODULE_9_rxjs_Observable__["a" /* Observable */].of(null);
    };
    /**
    * @return Success
    */
    EmployeeServiceProxy.prototype.delete = function (id) {
        var _this = this;
        var url_ = this.baseUrl + "/api/services/app/Employee/DeleteEmployee?";
        if (id !== undefined)
            url_ += "Id=" + encodeURIComponent("" + id) + "&";
        url_ = url_.replace(/[?&]$/, "");
        var options_ = {
            method: "delete",
            headers: new __WEBPACK_IMPORTED_MODULE_11__angular_http__["a" /* Headers */]({
                "Content-Type": "application/json",
            })
        };
        return this.http.request(url_, options_).flatMap(function (response_) {
            return _this.processDelete(response_);
        }).catch(function (response_) {
            if (response_ instanceof __WEBPACK_IMPORTED_MODULE_11__angular_http__["f" /* Response */]) {
                try {
                    return _this.processDelete(response_);
                }
                catch (e) {
                    return __WEBPACK_IMPORTED_MODULE_9_rxjs_Observable__["a" /* Observable */].throw(e);
                }
            }
            else
                return __WEBPACK_IMPORTED_MODULE_9_rxjs_Observable__["a" /* Observable */].throw(response_);
        });
    };
    EmployeeServiceProxy.prototype.processDelete = function (response) {
        var status = response.status;
        var _headers = response.headers ? response.headers.toJSON() : {};
        if (status === 200) {
            var _responseText = response.text();
            return __WEBPACK_IMPORTED_MODULE_9_rxjs_Observable__["a" /* Observable */].of(null);
        }
        else if (status === 401) {
            var _responseText = response.text();
            return throwException("A server error occurred.", status, _responseText, _headers);
        }
        else if (status === 403) {
            var _responseText = response.text();
            return throwException("A server error occurred.", status, _responseText, _headers);
        }
        else if (status !== 200 && status !== 204) {
            var _responseText = response.text();
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        }
        return __WEBPACK_IMPORTED_MODULE_9_rxjs_Observable__["a" /* Observable */].of(null);
    };
    EmployeeServiceProxy = __decorate([
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_10__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_11__angular_http__["b" /* Http */])), __param(1, Object(__WEBPACK_IMPORTED_MODULE_10__angular_core__["Optional"])()), __param(1, Object(__WEBPACK_IMPORTED_MODULE_10__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_12__shared_service_proxies_service_proxies__["a" /* API_BASE_URL */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_11__angular_http__["b" /* Http */], String])
    ], EmployeeServiceProxy);
    return EmployeeServiceProxy;
}());

var PagedResultDtoOfEmployee = /** @class */ (function () {
    function PagedResultDtoOfEmployee(data) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
        }
    }
    PagedResultDtoOfEmployee.prototype.init = function (data) {
        if (data) {
            this.totalCount = data["totalCount"];
            if (data["items"] && data["items"].constructor === Array) {
                this.items = [];
                for (var _i = 0, _a = data["items"]; _i < _a.length; _i++) {
                    var item = _a[_i];
                    this.items.push(__WEBPACK_IMPORTED_MODULE_8__shared_service_proxies_entity_employee__["a" /* Employee */].fromJS(item));
                }
            }
        }
    };
    PagedResultDtoOfEmployee.fromJS = function (data) {
        var result = new PagedResultDtoOfEmployee();
        result.init(data);
        return result;
    };
    PagedResultDtoOfEmployee.prototype.toJSON = function (data) {
        data = typeof data === 'object' ? data : {};
        data["totalCount"] = this.totalCount;
        if (this.items && this.items.constructor === Array) {
            data["items"] = [];
            for (var _i = 0, _a = this.items; _i < _a.length; _i++) {
                var item = _a[_i];
                data["items"].push(item.toJSON());
            }
        }
        return data;
    };
    PagedResultDtoOfEmployee.prototype.clone = function () {
        var json = this.toJSON();
        var result = new PagedResultDtoOfEmployee();
        result.init(json);
        return result;
    };
    return PagedResultDtoOfEmployee;
}());



/***/ }),

/***/ "../../../../../src/app/shared/service-proxies/marketing-service/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__activity_banquet_service__ = __webpack_require__("../../../../../src/app/shared/service-proxies/marketing-service/activity-banquet-service.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__activity_banquet_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__activity_delivery_service__ = __webpack_require__("../../../../../src/app/shared/service-proxies/marketing-service/activity-delivery-service.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__activity_delivery_service__["a"]; });




/***/ }),

/***/ "../../../../../src/app/shared/service-proxies/service-proxies.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return API_BASE_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return AccountServiceProxy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return ConfigurationServiceProxy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return RoleServiceProxy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return SessionServiceProxy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "u", function() { return TenantServiceProxy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "v", function() { return TokenAuthServiceProxy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "x", function() { return UserServiceProxy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return IsTenantAvailableInput; });
/* unused harmony export IsTenantAvailableOutput */
/* unused harmony export RegisterInput */
/* unused harmony export RegisterOutput */
/* unused harmony export ChangeUiThemeInput */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return CreateRoleDto; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return RoleDto; });
/* unused harmony export ListResultDtoOfPermissionDto */
/* unused harmony export PermissionDto */
/* unused harmony export PagedResultDtoOfRoleDto */
/* unused harmony export GetCurrentLoginInformationsOutput */
/* unused harmony export ApplicationInfoDto */
/* unused harmony export UserLoginInfoDto */
/* unused harmony export TenantLoginInfoDto */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return CreateTenantDto; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return TenantDto; });
/* unused harmony export PagedResultDtoOfTenantDto */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return AuthenticateModel; });
/* unused harmony export AuthenticateResultModel */
/* unused harmony export ExternalLoginProviderInfoModel */
/* unused harmony export ExternalAuthenticateModel */
/* unused harmony export ExternalAuthenticateResultModel */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return CreateUserDto; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "w", function() { return UserDto; });
/* unused harmony export ListResultDtoOfRoleDto */
/* unused harmony export PagedResultDtoOfUserDto */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return IsTenantAvailableOutputState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return SwaggerException; });
/* unused harmony export Driver */
/* unused harmony export IDriver */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return DriverServiceProxy; });
/* unused harmony export PagedResultDtoOfDriver */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return AuthSettingServiceProxy; });
/* unused harmony export PagedResultDtoOfAuthSetting */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return MessageServiceProxy; });
/* unused harmony export PagedResultDtoOfMessage */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return SubscribeServiceProxy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return EmployeesServiceProxy; });
/* unused harmony export PagedResultDtoOfEmployee */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return ActivityServiceProxy; });
/* unused harmony export PagedResultDtoOfActivity */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_observable_fromPromise__ = __webpack_require__("../../../../rxjs/_esm5/add/observable/fromPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_observable_of__ = __webpack_require__("../../../../rxjs/_esm5/add/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_throw__ = __webpack_require__("../../../../rxjs/_esm5/add/observable/throw.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_mergeMap__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/mergeMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_moment__ = __webpack_require__("../../../../moment/moment.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_rxjs_add_operator_finally__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/finally.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__shared_service_proxies_entity_auth_setting__ = __webpack_require__("../../../../../src/app/shared/service-proxies/entity/auth-setting.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__shared_service_proxies_entity_messages__ = __webpack_require__("../../../../../src/app/shared/service-proxies/entity/messages.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__shared_service_proxies_entity_subscribe__ = __webpack_require__("../../../../../src/app/shared/service-proxies/entity/subscribe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__shared_service_proxies_entity_employee__ = __webpack_require__("../../../../../src/app/shared/service-proxies/entity/employee.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__shared_service_proxies_entity_acitivity__ = __webpack_require__("../../../../../src/app/shared/service-proxies/entity/acitivity.ts");
/* tslint:disable */
//----------------------
// <auto-generated>
//     Generated using the NSwag toolchain v11.9.0.0 (NJsonSchema v9.7.1.0 (Newtonsoft.Json v9.0.0.0)) (http://NSwag.org)
// </auto-generated>
//----------------------
// ReSharper disable InconsistentNaming
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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};











var API_BASE_URL = new __WEBPACK_IMPORTED_MODULE_8__angular_core__["InjectionToken"]('API_BASE_URL');
var AccountServiceProxy = /** @class */ (function () {
    function AccountServiceProxy(http, baseUrl) {
        this.jsonParseReviver = undefined;
        this.http = http;
        this.baseUrl = baseUrl ? baseUrl : "";
    }
    /**
     * @return Success
     */
    AccountServiceProxy.prototype.isTenantAvailable = function (input) {
        var _this = this;
        var url_ = this.baseUrl + "/api/services/app/Account/IsTenantAvailable";
        url_ = url_.replace(/[?&]$/, "");
        var content_ = JSON.stringify(input);
        var options_ = {
            body: content_,
            method: "post",
            headers: new __WEBPACK_IMPORTED_MODULE_9__angular_http__["a" /* Headers */]({
                "Content-Type": "application/json",
                "Accept": "application/json"
            })
        };
        return this.http.request(url_, options_).flatMap(function (response_) {
            return _this.processIsTenantAvailable(response_);
        }).catch(function (response_) {
            if (response_ instanceof __WEBPACK_IMPORTED_MODULE_9__angular_http__["f" /* Response */]) {
                try {
                    return _this.processIsTenantAvailable(response_);
                }
                catch (e) {
                    return __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__["a" /* Observable */].throw(e);
                }
            }
            else
                return __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__["a" /* Observable */].throw(response_);
        });
    };
    AccountServiceProxy.prototype.processIsTenantAvailable = function (response) {
        var status = response.status;
        var _headers = response.headers ? response.headers.toJSON() : {};
        if (status === 200) {
            var _responseText = response.text();
            var result200 = null;
            var resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = resultData200 ? IsTenantAvailableOutput.fromJS(resultData200) : new IsTenantAvailableOutput();
            return __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__["a" /* Observable */].of(result200);
        }
        else if (status !== 200 && status !== 204) {
            var _responseText = response.text();
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        }
        return __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__["a" /* Observable */].of(null);
    };
    /**
     * @return Success
     */
    AccountServiceProxy.prototype.register = function (input) {
        var _this = this;
        var url_ = this.baseUrl + "/api/services/app/Account/Register";
        url_ = url_.replace(/[?&]$/, "");
        var content_ = JSON.stringify(input);
        var options_ = {
            body: content_,
            method: "post",
            headers: new __WEBPACK_IMPORTED_MODULE_9__angular_http__["a" /* Headers */]({
                "Content-Type": "application/json",
                "Accept": "application/json"
            })
        };
        return this.http.request(url_, options_).flatMap(function (response_) {
            return _this.processRegister(response_);
        }).catch(function (response_) {
            if (response_ instanceof __WEBPACK_IMPORTED_MODULE_9__angular_http__["f" /* Response */]) {
                try {
                    return _this.processRegister(response_);
                }
                catch (e) {
                    return __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__["a" /* Observable */].throw(e);
                }
            }
            else
                return __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__["a" /* Observable */].throw(response_);
        });
    };
    AccountServiceProxy.prototype.processRegister = function (response) {
        var status = response.status;
        var _headers = response.headers ? response.headers.toJSON() : {};
        if (status === 200) {
            var _responseText = response.text();
            var result200 = null;
            var resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = resultData200 ? RegisterOutput.fromJS(resultData200) : new RegisterOutput();
            return __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__["a" /* Observable */].of(result200);
        }
        else if (status !== 200 && status !== 204) {
            var _responseText = response.text();
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        }
        return __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__["a" /* Observable */].of(null);
    };
    AccountServiceProxy = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_8__angular_core__["Injectable"])(),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_8__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_9__angular_http__["b" /* Http */])), __param(1, Object(__WEBPACK_IMPORTED_MODULE_8__angular_core__["Optional"])()), __param(1, Object(__WEBPACK_IMPORTED_MODULE_8__angular_core__["Inject"])(API_BASE_URL)),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_9__angular_http__["b" /* Http */], String])
    ], AccountServiceProxy);
    return AccountServiceProxy;
}());

var ConfigurationServiceProxy = /** @class */ (function () {
    function ConfigurationServiceProxy(http, baseUrl) {
        this.jsonParseReviver = undefined;
        this.http = http;
        this.baseUrl = baseUrl ? baseUrl : "";
    }
    /**
     * @return Success
     */
    ConfigurationServiceProxy.prototype.changeUiTheme = function (input) {
        var _this = this;
        var url_ = this.baseUrl + "/api/services/app/Configuration/ChangeUiTheme";
        url_ = url_.replace(/[?&]$/, "");
        var content_ = JSON.stringify(input);
        var options_ = {
            body: content_,
            method: "post",
            headers: new __WEBPACK_IMPORTED_MODULE_9__angular_http__["a" /* Headers */]({
                "Content-Type": "application/json",
            })
        };
        return this.http.request(url_, options_).flatMap(function (response_) {
            return _this.processChangeUiTheme(response_);
        }).catch(function (response_) {
            if (response_ instanceof __WEBPACK_IMPORTED_MODULE_9__angular_http__["f" /* Response */]) {
                try {
                    return _this.processChangeUiTheme(response_);
                }
                catch (e) {
                    return __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__["a" /* Observable */].throw(e);
                }
            }
            else
                return __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__["a" /* Observable */].throw(response_);
        });
    };
    ConfigurationServiceProxy.prototype.processChangeUiTheme = function (response) {
        var status = response.status;
        var _headers = response.headers ? response.headers.toJSON() : {};
        if (status === 200) {
            var _responseText = response.text();
            return __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__["a" /* Observable */].of(null);
        }
        else if (status !== 200 && status !== 204) {
            var _responseText = response.text();
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        }
        return __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__["a" /* Observable */].of(null);
    };
    ConfigurationServiceProxy = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_8__angular_core__["Injectable"])(),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_8__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_9__angular_http__["b" /* Http */])), __param(1, Object(__WEBPACK_IMPORTED_MODULE_8__angular_core__["Optional"])()), __param(1, Object(__WEBPACK_IMPORTED_MODULE_8__angular_core__["Inject"])(API_BASE_URL)),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_9__angular_http__["b" /* Http */], String])
    ], ConfigurationServiceProxy);
    return ConfigurationServiceProxy;
}());

var RoleServiceProxy = /** @class */ (function () {
    function RoleServiceProxy(http, baseUrl) {
        this.jsonParseReviver = undefined;
        this.http = http;
        this.baseUrl = baseUrl ? baseUrl : "";
    }
    /**
     * @return Success
     */
    RoleServiceProxy.prototype.create = function (input) {
        var _this = this;
        var url_ = this.baseUrl + "/api/services/app/Role/Create";
        url_ = url_.replace(/[?&]$/, "");
        var content_ = JSON.stringify(input);
        var options_ = {
            body: content_,
            method: "post",
            headers: new __WEBPACK_IMPORTED_MODULE_9__angular_http__["a" /* Headers */]({
                "Content-Type": "application/json",
                "Accept": "application/json"
            })
        };
        return this.http.request(url_, options_).flatMap(function (response_) {
            return _this.processCreate(response_);
        }).catch(function (response_) {
            if (response_ instanceof __WEBPACK_IMPORTED_MODULE_9__angular_http__["f" /* Response */]) {
                try {
                    return _this.processCreate(response_);
                }
                catch (e) {
                    return __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__["a" /* Observable */].throw(e);
                }
            }
            else
                return __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__["a" /* Observable */].throw(response_);
        });
    };
    RoleServiceProxy.prototype.processCreate = function (response) {
        var status = response.status;
        var _headers = response.headers ? response.headers.toJSON() : {};
        if (status === 200) {
            var _responseText = response.text();
            var result200 = null;
            var resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = resultData200 ? RoleDto.fromJS(resultData200) : new RoleDto();
            return __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__["a" /* Observable */].of(result200);
        }
        else if (status === 401) {
            var _responseText = response.text();
            return throwException("A server error occurred.", status, _responseText, _headers);
        }
        else if (status === 403) {
            var _responseText = response.text();
            return throwException("A server error occurred.", status, _responseText, _headers);
        }
        else if (status !== 200 && status !== 204) {
            var _responseText = response.text();
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        }
        return __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__["a" /* Observable */].of(null);
    };
    /**
     * @return Success
     */
    RoleServiceProxy.prototype.update = function (input) {
        var _this = this;
        var url_ = this.baseUrl + "/api/services/app/Role/Update";
        url_ = url_.replace(/[?&]$/, "");
        var content_ = JSON.stringify(input);
        var options_ = {
            body: content_,
            method: "put",
            headers: new __WEBPACK_IMPORTED_MODULE_9__angular_http__["a" /* Headers */]({
                "Content-Type": "application/json",
                "Accept": "application/json"
            })
        };
        return this.http.request(url_, options_).flatMap(function (response_) {
            return _this.processUpdate(response_);
        }).catch(function (response_) {
            if (response_ instanceof __WEBPACK_IMPORTED_MODULE_9__angular_http__["f" /* Response */]) {
                try {
                    return _this.processUpdate(response_);
                }
                catch (e) {
                    return __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__["a" /* Observable */].throw(e);
                }
            }
            else
                return __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__["a" /* Observable */].throw(response_);
        });
    };
    RoleServiceProxy.prototype.processUpdate = function (response) {
        var status = response.status;
        var _headers = response.headers ? response.headers.toJSON() : {};
        if (status === 200) {
            var _responseText = response.text();
            var result200 = null;
            var resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = resultData200 ? RoleDto.fromJS(resultData200) : new RoleDto();
            return __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__["a" /* Observable */].of(result200);
        }
        else if (status === 401) {
            var _responseText = response.text();
            return throwException("A server error occurred.", status, _responseText, _headers);
        }
        else if (status === 403) {
            var _responseText = response.text();
            return throwException("A server error occurred.", status, _responseText, _headers);
        }
        else if (status !== 200 && status !== 204) {
            var _responseText = response.text();
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        }
        return __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__["a" /* Observable */].of(null);
    };
    /**
     * @return Success
     */
    RoleServiceProxy.prototype.delete = function (id) {
        var _this = this;
        var url_ = this.baseUrl + "/api/services/app/Role/Delete?";
        if (id !== undefined)
            url_ += "Id=" + encodeURIComponent("" + id) + "&";
        url_ = url_.replace(/[?&]$/, "");
        var options_ = {
            method: "delete",
            headers: new __WEBPACK_IMPORTED_MODULE_9__angular_http__["a" /* Headers */]({
                "Content-Type": "application/json",
            })
        };
        return this.http.request(url_, options_).flatMap(function (response_) {
            return _this.processDelete(response_);
        }).catch(function (response_) {
            if (response_ instanceof __WEBPACK_IMPORTED_MODULE_9__angular_http__["f" /* Response */]) {
                try {
                    return _this.processDelete(response_);
                }
                catch (e) {
                    return __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__["a" /* Observable */].throw(e);
                }
            }
            else
                return __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__["a" /* Observable */].throw(response_);
        });
    };
    RoleServiceProxy.prototype.processDelete = function (response) {
        var status = response.status;
        var _headers = response.headers ? response.headers.toJSON() : {};
        if (status === 200) {
            var _responseText = response.text();
            return __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__["a" /* Observable */].of(null);
        }
        else if (status === 401) {
            var _responseText = response.text();
            return throwException("A server error occurred.", status, _responseText, _headers);
        }
        else if (status === 403) {
            var _responseText = response.text();
            return throwException("A server error occurred.", status, _responseText, _headers);
        }
        else if (status !== 200 && status !== 204) {
            var _responseText = response.text();
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        }
        return __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__["a" /* Observable */].of(null);
    };
    /**
     * @return Success
     */
    RoleServiceProxy.prototype.getAllPermissions = function () {
        var _this = this;
        var url_ = this.baseUrl + "/api/services/app/Role/GetAllPermissions";
        url_ = url_.replace(/[?&]$/, "");
        var options_ = {
            method: "get",
            headers: new __WEBPACK_IMPORTED_MODULE_9__angular_http__["a" /* Headers */]({
                "Content-Type": "application/json",
                "Accept": "application/json"
            })
        };
        return this.http.request(url_, options_).flatMap(function (response_) {
            return _this.processGetAllPermissions(response_);
        }).catch(function (response_) {
            if (response_ instanceof __WEBPACK_IMPORTED_MODULE_9__angular_http__["f" /* Response */]) {
                try {
                    return _this.processGetAllPermissions(response_);
                }
                catch (e) {
                    return __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__["a" /* Observable */].throw(e);
                }
            }
            else
                return __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__["a" /* Observable */].throw(response_);
        });
    };
    RoleServiceProxy.prototype.processGetAllPermissions = function (response) {
        var status = response.status;
        var _headers = response.headers ? response.headers.toJSON() : {};
        if (status === 200) {
            var _responseText = response.text();
            var result200 = null;
            var resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = resultData200 ? ListResultDtoOfPermissionDto.fromJS(resultData200) : new ListResultDtoOfPermissionDto();
            return __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__["a" /* Observable */].of(result200);
        }
        else if (status === 401) {
            var _responseText = response.text();
            return throwException("A server error occurred.", status, _responseText, _headers);
        }
        else if (status === 403) {
            var _responseText = response.text();
            return throwException("A server error occurred.", status, _responseText, _headers);
        }
        else if (status !== 200 && status !== 204) {
            var _responseText = response.text();
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        }
        return __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__["a" /* Observable */].of(null);
    };
    /**
     * @return Success
     */
    RoleServiceProxy.prototype.get = function (id) {
        var _this = this;
        var url_ = this.baseUrl + "/api/services/app/Role/Get?";
        if (id !== undefined)
            url_ += "Id=" + encodeURIComponent("" + id) + "&";
        url_ = url_.replace(/[?&]$/, "");
        var options_ = {
            method: "get",
            headers: new __WEBPACK_IMPORTED_MODULE_9__angular_http__["a" /* Headers */]({
                "Content-Type": "application/json",
                "Accept": "application/json"
            })
        };
        return this.http.request(url_, options_).flatMap(function (response_) {
            return _this.processGet(response_);
        }).catch(function (response_) {
            if (response_ instanceof __WEBPACK_IMPORTED_MODULE_9__angular_http__["f" /* Response */]) {
                try {
                    return _this.processGet(response_);
                }
                catch (e) {
                    return __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__["a" /* Observable */].throw(e);
                }
            }
            else
                return __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__["a" /* Observable */].throw(response_);
        });
    };
    RoleServiceProxy.prototype.processGet = function (response) {
        var status = response.status;
        var _headers = response.headers ? response.headers.toJSON() : {};
        if (status === 200) {
            var _responseText = response.text();
            var result200 = null;
            var resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = resultData200 ? RoleDto.fromJS(resultData200) : new RoleDto();
            return __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__["a" /* Observable */].of(result200);
        }
        else if (status === 401) {
            var _responseText = response.text();
            return throwException("A server error occurred.", status, _responseText, _headers);
        }
        else if (status === 403) {
            var _responseText = response.text();
            return throwException("A server error occurred.", status, _responseText, _headers);
        }
        else if (status !== 200 && status !== 204) {
            var _responseText = response.text();
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        }
        return __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__["a" /* Observable */].of(null);
    };
    /**
     * @return Success
     */
    RoleServiceProxy.prototype.getAll = function (skipCount, maxResultCount) {
        var _this = this;
        var url_ = this.baseUrl + "/api/services/app/Role/GetAll?";
        if (skipCount !== undefined)
            url_ += "SkipCount=" + encodeURIComponent("" + skipCount) + "&";
        if (maxResultCount !== undefined)
            url_ += "MaxResultCount=" + encodeURIComponent("" + maxResultCount) + "&";
        url_ = url_.replace(/[?&]$/, "");
        var options_ = {
            method: "get",
            headers: new __WEBPACK_IMPORTED_MODULE_9__angular_http__["a" /* Headers */]({
                "Content-Type": "application/json",
                "Accept": "application/json"
            })
        };
        return this.http.request(url_, options_).flatMap(function (response_) {
            return _this.processGetAll(response_);
        }).catch(function (response_) {
            if (response_ instanceof __WEBPACK_IMPORTED_MODULE_9__angular_http__["f" /* Response */]) {
                try {
                    return _this.processGetAll(response_);
                }
                catch (e) {
                    return __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__["a" /* Observable */].throw(e);
                }
            }
            else
                return __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__["a" /* Observable */].throw(response_);
        });
    };
    RoleServiceProxy.prototype.processGetAll = function (response) {
        var status = response.status;
        var _headers = response.headers ? response.headers.toJSON() : {};
        if (status === 200) {
            var _responseText = response.text();
            var result200 = null;
            var resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = resultData200 ? PagedResultDtoOfRoleDto.fromJS(resultData200) : new PagedResultDtoOfRoleDto();
            return __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__["a" /* Observable */].of(result200);
        }
        else if (status === 401) {
            var _responseText = response.text();
            return throwException("A server error occurred.", status, _responseText, _headers);
        }
        else if (status === 403) {
            var _responseText = response.text();
            return throwException("A server error occurred.", status, _responseText, _headers);
        }
        else if (status !== 200 && status !== 204) {
            var _responseText = response.text();
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        }
        return __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__["a" /* Observable */].of(null);
    };
    RoleServiceProxy = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_8__angular_core__["Injectable"])(),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_8__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_9__angular_http__["b" /* Http */])), __param(1, Object(__WEBPACK_IMPORTED_MODULE_8__angular_core__["Optional"])()), __param(1, Object(__WEBPACK_IMPORTED_MODULE_8__angular_core__["Inject"])(API_BASE_URL)),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_9__angular_http__["b" /* Http */], String])
    ], RoleServiceProxy);
    return RoleServiceProxy;
}());

var SessionServiceProxy = /** @class */ (function () {
    function SessionServiceProxy(http, baseUrl) {
        this.jsonParseReviver = undefined;
        this.http = http;
        this.baseUrl = baseUrl ? baseUrl : "";
    }
    /**
     * @return Success
     */
    SessionServiceProxy.prototype.getCurrentLoginInformations = function () {
        var _this = this;
        var url_ = this.baseUrl + "/api/services/app/Session/GetCurrentLoginInformations";
        url_ = url_.replace(/[?&]$/, "");
        var options_ = {
            method: "get",
            headers: new __WEBPACK_IMPORTED_MODULE_9__angular_http__["a" /* Headers */]({
                "Content-Type": "application/json",
                "Accept": "application/json"
            })
        };
        return this.http.request(url_, options_).flatMap(function (response_) {
            return _this.processGetCurrentLoginInformations(response_);
        }).catch(function (response_) {
            if (response_ instanceof __WEBPACK_IMPORTED_MODULE_9__angular_http__["f" /* Response */]) {
                try {
                    return _this.processGetCurrentLoginInformations(response_);
                }
                catch (e) {
                    return __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__["a" /* Observable */].throw(e);
                }
            }
            else
                return __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__["a" /* Observable */].throw(response_);
        });
    };
    SessionServiceProxy.prototype.processGetCurrentLoginInformations = function (response) {
        var status = response.status;
        var _headers = response.headers ? response.headers.toJSON() : {};
        if (status === 200) {
            var _responseText = response.text();
            var result200 = null;
            var resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = resultData200 ? GetCurrentLoginInformationsOutput.fromJS(resultData200) : new GetCurrentLoginInformationsOutput();
            return __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__["a" /* Observable */].of(result200);
        }
        else if (status !== 200 && status !== 204) {
            var _responseText = response.text();
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        }
        return __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__["a" /* Observable */].of(null);
    };
    SessionServiceProxy = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_8__angular_core__["Injectable"])(),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_8__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_9__angular_http__["b" /* Http */])), __param(1, Object(__WEBPACK_IMPORTED_MODULE_8__angular_core__["Optional"])()), __param(1, Object(__WEBPACK_IMPORTED_MODULE_8__angular_core__["Inject"])(API_BASE_URL)),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_9__angular_http__["b" /* Http */], String])
    ], SessionServiceProxy);
    return SessionServiceProxy;
}());

var TenantServiceProxy = /** @class */ (function () {
    function TenantServiceProxy(http, baseUrl) {
        this.jsonParseReviver = undefined;
        this.http = http;
        this.baseUrl = baseUrl ? baseUrl : "";
    }
    /**
     * @return Success
     */
    TenantServiceProxy.prototype.create = function (input) {
        var _this = this;
        var url_ = this.baseUrl + "/api/services/app/Tenant/Create";
        url_ = url_.replace(/[?&]$/, "");
        var content_ = JSON.stringify(input);
        var options_ = {
            body: content_,
            method: "post",
            headers: new __WEBPACK_IMPORTED_MODULE_9__angular_http__["a" /* Headers */]({
                "Content-Type": "application/json",
                "Accept": "application/json"
            })
        };
        return this.http.request(url_, options_).flatMap(function (response_) {
            return _this.processCreate(response_);
        }).catch(function (response_) {
            if (response_ instanceof __WEBPACK_IMPORTED_MODULE_9__angular_http__["f" /* Response */]) {
                try {
                    return _this.processCreate(response_);
                }
                catch (e) {
                    return __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__["a" /* Observable */].throw(e);
                }
            }
            else
                return __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__["a" /* Observable */].throw(response_);
        });
    };
    TenantServiceProxy.prototype.processCreate = function (response) {
        var status = response.status;
        var _headers = response.headers ? response.headers.toJSON() : {};
        if (status === 200) {
            var _responseText = response.text();
            var result200 = null;
            var resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = resultData200 ? TenantDto.fromJS(resultData200) : new TenantDto();
            return __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__["a" /* Observable */].of(result200);
        }
        else if (status === 401) {
            var _responseText = response.text();
            return throwException("A server error occurred.", status, _responseText, _headers);
        }
        else if (status === 403) {
            var _responseText = response.text();
            return throwException("A server error occurred.", status, _responseText, _headers);
        }
        else if (status !== 200 && status !== 204) {
            var _responseText = response.text();
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        }
        return __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__["a" /* Observable */].of(null);
    };
    /**
     * @return Success
     */
    TenantServiceProxy.prototype.delete = function (id) {
        var _this = this;
        var url_ = this.baseUrl + "/api/services/app/Tenant/Delete?";
        if (id !== undefined)
            url_ += "Id=" + encodeURIComponent("" + id) + "&";
        url_ = url_.replace(/[?&]$/, "");
        var options_ = {
            method: "delete",
            headers: new __WEBPACK_IMPORTED_MODULE_9__angular_http__["a" /* Headers */]({
                "Content-Type": "application/json",
            })
        };
        return this.http.request(url_, options_).flatMap(function (response_) {
            return _this.processDelete(response_);
        }).catch(function (response_) {
            if (response_ instanceof __WEBPACK_IMPORTED_MODULE_9__angular_http__["f" /* Response */]) {
                try {
                    return _this.processDelete(response_);
                }
                catch (e) {
                    return __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__["a" /* Observable */].throw(e);
                }
            }
            else
                return __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__["a" /* Observable */].throw(response_);
        });
    };
    TenantServiceProxy.prototype.processDelete = function (response) {
        var status = response.status;
        var _headers = response.headers ? response.headers.toJSON() : {};
        if (status === 200) {
            var _responseText = response.text();
            return __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__["a" /* Observable */].of(null);
        }
        else if (status === 401) {
            var _responseText = response.text();
            return throwException("A server error occurred.", status, _responseText, _headers);
        }
        else if (status === 403) {
            var _responseText = response.text();
            return throwException("A server error occurred.", status, _responseText, _headers);
        }
        else if (status !== 200 && status !== 204) {
            var _responseText = response.text();
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        }
        return __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__["a" /* Observable */].of(null);
    };
    /**
     * @return Success
     */
    TenantServiceProxy.prototype.get = function (id) {
        var _this = this;
        var url_ = this.baseUrl + "/api/services/app/Tenant/Get?";
        if (id !== undefined)
            url_ += "Id=" + encodeURIComponent("" + id) + "&";
        url_ = url_.replace(/[?&]$/, "");
        var options_ = {
            method: "get",
            headers: new __WEBPACK_IMPORTED_MODULE_9__angular_http__["a" /* Headers */]({
                "Content-Type": "application/json",
                "Accept": "application/json"
            })
        };
        return this.http.request(url_, options_).flatMap(function (response_) {
            return _this.processGet(response_);
        }).catch(function (response_) {
            if (response_ instanceof __WEBPACK_IMPORTED_MODULE_9__angular_http__["f" /* Response */]) {
                try {
                    return _this.processGet(response_);
                }
                catch (e) {
                    return __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__["a" /* Observable */].throw(e);
                }
            }
            else
                return __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__["a" /* Observable */].throw(response_);
        });
    };
    TenantServiceProxy.prototype.processGet = function (response) {
        var status = response.status;
        var _headers = response.headers ? response.headers.toJSON() : {};
        if (status === 200) {
            var _responseText = response.text();
            var result200 = null;
            var resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = resultData200 ? TenantDto.fromJS(resultData200) : new TenantDto();
            return __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__["a" /* Observable */].of(result200);
        }
        else if (status === 401) {
            var _responseText = response.text();
            return throwException("A server error occurred.", status, _responseText, _headers);
        }
        else if (status === 403) {
            var _responseText = response.text();
            return throwException("A server error occurred.", status, _responseText, _headers);
        }
        else if (status !== 200 && status !== 204) {
            var _responseText = response.text();
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        }
        return __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__["a" /* Observable */].of(null);
    };
    /**
     * @return Success
     */
    TenantServiceProxy.prototype.getAll = function (skipCount, maxResultCount) {
        var _this = this;
        var url_ = this.baseUrl + "/api/services/app/Tenant/GetAll?";
        if (skipCount !== undefined)
            url_ += "SkipCount=" + encodeURIComponent("" + skipCount) + "&";
        if (maxResultCount !== undefined)
            url_ += "MaxResultCount=" + encodeURIComponent("" + maxResultCount) + "&";
        url_ = url_.replace(/[?&]$/, "");
        var options_ = {
            method: "get",
            headers: new __WEBPACK_IMPORTED_MODULE_9__angular_http__["a" /* Headers */]({
                "Content-Type": "application/json",
                "Accept": "application/json"
            })
        };
        return this.http.request(url_, options_).flatMap(function (response_) {
            return _this.processGetAll(response_);
        }).catch(function (response_) {
            if (response_ instanceof __WEBPACK_IMPORTED_MODULE_9__angular_http__["f" /* Response */]) {
                try {
                    return _this.processGetAll(response_);
                }
                catch (e) {
                    return __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__["a" /* Observable */].throw(e);
                }
            }
            else
                return __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__["a" /* Observable */].throw(response_);
        });
    };
    TenantServiceProxy.prototype.processGetAll = function (response) {
        var status = response.status;
        var _headers = response.headers ? response.headers.toJSON() : {};
        if (status === 200) {
            var _responseText = response.text();
            var result200 = null;
            var resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = resultData200 ? PagedResultDtoOfTenantDto.fromJS(resultData200) : new PagedResultDtoOfTenantDto();
            return __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__["a" /* Observable */].of(result200);
        }
        else if (status === 401) {
            var _responseText = response.text();
            return throwException("A server error occurred.", status, _responseText, _headers);
        }
        else if (status === 403) {
            var _responseText = response.text();
            return throwException("A server error occurred.", status, _responseText, _headers);
        }
        else if (status !== 200 && status !== 204) {
            var _responseText = response.text();
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        }
        return __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__["a" /* Observable */].of(null);
    };
    /**
     * @return Success
     */
    TenantServiceProxy.prototype.update = function (input) {
        var _this = this;
        var url_ = this.baseUrl + "/api/services/app/Tenant/Update";
        url_ = url_.replace(/[?&]$/, "");
        var content_ = JSON.stringify(input);
        var options_ = {
            body: content_,
            method: "put",
            headers: new __WEBPACK_IMPORTED_MODULE_9__angular_http__["a" /* Headers */]({
                "Content-Type": "application/json",
                "Accept": "application/json"
            })
        };
        return this.http.request(url_, options_).flatMap(function (response_) {
            return _this.processUpdate(response_);
        }).catch(function (response_) {
            if (response_ instanceof __WEBPACK_IMPORTED_MODULE_9__angular_http__["f" /* Response */]) {
                try {
                    return _this.processUpdate(response_);
                }
                catch (e) {
                    return __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__["a" /* Observable */].throw(e);
                }
            }
            else
                return __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__["a" /* Observable */].throw(response_);
        });
    };
    TenantServiceProxy.prototype.processUpdate = function (response) {
        var status = response.status;
        var _headers = response.headers ? response.headers.toJSON() : {};
        if (status === 200) {
            var _responseText = response.text();
            var result200 = null;
            var resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = resultData200 ? TenantDto.fromJS(resultData200) : new TenantDto();
            return __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__["a" /* Observable */].of(result200);
        }
        else if (status === 401) {
            var _responseText = response.text();
            return throwException("A server error occurred.", status, _responseText, _headers);
        }
        else if (status === 403) {
            var _responseText = response.text();
            return throwException("A server error occurred.", status, _responseText, _headers);
        }
        else if (status !== 200 && status !== 204) {
            var _responseText = response.text();
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        }
        return __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__["a" /* Observable */].of(null);
    };
    TenantServiceProxy = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_8__angular_core__["Injectable"])(),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_8__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_9__angular_http__["b" /* Http */])), __param(1, Object(__WEBPACK_IMPORTED_MODULE_8__angular_core__["Optional"])()), __param(1, Object(__WEBPACK_IMPORTED_MODULE_8__angular_core__["Inject"])(API_BASE_URL)),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_9__angular_http__["b" /* Http */], String])
    ], TenantServiceProxy);
    return TenantServiceProxy;
}());

var TokenAuthServiceProxy = /** @class */ (function () {
    function TokenAuthServiceProxy(http, baseUrl) {
        this.jsonParseReviver = undefined;
        this.http = http;
        this.baseUrl = baseUrl ? baseUrl : "";
    }
    /**
     * @return Success
     */
    TokenAuthServiceProxy.prototype.authenticate = function (model) {
        var _this = this;
        var url_ = this.baseUrl + "/api/TokenAuth/Authenticate";
        url_ = url_.replace(/[?&]$/, "");
        var content_ = JSON.stringify(model);
        var options_ = {
            body: content_,
            method: "post",
            headers: new __WEBPACK_IMPORTED_MODULE_9__angular_http__["a" /* Headers */]({
                "Content-Type": "application/json",
                "Accept": "application/json"
            })
        };
        return this.http.request(url_, options_).flatMap(function (response_) {
            return _this.processAuthenticate(response_);
        }).catch(function (response_) {
            if (response_ instanceof __WEBPACK_IMPORTED_MODULE_9__angular_http__["f" /* Response */]) {
                try {
                    return _this.processAuthenticate(response_);
                }
                catch (e) {
                    return __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__["a" /* Observable */].throw(e);
                }
            }
            else
                return __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__["a" /* Observable */].throw(response_);
        });
    };
    TokenAuthServiceProxy.prototype.processAuthenticate = function (response) {
        var status = response.status;
        var _headers = response.headers ? response.headers.toJSON() : {};
        if (status === 200) {
            var _responseText = response.text();
            var result200 = null;
            var resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = resultData200 ? AuthenticateResultModel.fromJS(resultData200) : new AuthenticateResultModel();
            return __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__["a" /* Observable */].of(result200);
        }
        else if (status !== 200 && status !== 204) {
            var _responseText = response.text();
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        }
        return __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__["a" /* Observable */].of(null);
    };
    /**
     * @return Success
     */
    TokenAuthServiceProxy.prototype.getExternalAuthenticationProviders = function () {
        var _this = this;
        var url_ = this.baseUrl + "/api/TokenAuth/GetExternalAuthenticationProviders";
        url_ = url_.replace(/[?&]$/, "");
        var options_ = {
            method: "get",
            headers: new __WEBPACK_IMPORTED_MODULE_9__angular_http__["a" /* Headers */]({
                "Content-Type": "application/json",
                "Accept": "application/json"
            })
        };
        return this.http.request(url_, options_).flatMap(function (response_) {
            return _this.processGetExternalAuthenticationProviders(response_);
        }).catch(function (response_) {
            if (response_ instanceof __WEBPACK_IMPORTED_MODULE_9__angular_http__["f" /* Response */]) {
                try {
                    return _this.processGetExternalAuthenticationProviders(response_);
                }
                catch (e) {
                    return __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__["a" /* Observable */].throw(e);
                }
            }
            else
                return __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__["a" /* Observable */].throw(response_);
        });
    };
    TokenAuthServiceProxy.prototype.processGetExternalAuthenticationProviders = function (response) {
        var status = response.status;
        var _headers = response.headers ? response.headers.toJSON() : {};
        if (status === 200) {
            var _responseText = response.text();
            var result200 = null;
            var resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            if (resultData200 && resultData200.constructor === Array) {
                result200 = [];
                for (var _i = 0, resultData200_1 = resultData200; _i < resultData200_1.length; _i++) {
                    var item = resultData200_1[_i];
                    result200.push(ExternalLoginProviderInfoModel.fromJS(item));
                }
            }
            return __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__["a" /* Observable */].of(result200);
        }
        else if (status !== 200 && status !== 204) {
            var _responseText = response.text();
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        }
        return __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__["a" /* Observable */].of(null);
    };
    /**
     * @return Success
     */
    TokenAuthServiceProxy.prototype.externalAuthenticate = function (model) {
        var _this = this;
        var url_ = this.baseUrl + "/api/TokenAuth/ExternalAuthenticate";
        url_ = url_.replace(/[?&]$/, "");
        var content_ = JSON.stringify(model);
        var options_ = {
            body: content_,
            method: "post",
            headers: new __WEBPACK_IMPORTED_MODULE_9__angular_http__["a" /* Headers */]({
                "Content-Type": "application/json",
                "Accept": "application/json"
            })
        };
        return this.http.request(url_, options_).flatMap(function (response_) {
            return _this.processExternalAuthenticate(response_);
        }).catch(function (response_) {
            if (response_ instanceof __WEBPACK_IMPORTED_MODULE_9__angular_http__["f" /* Response */]) {
                try {
                    return _this.processExternalAuthenticate(response_);
                }
                catch (e) {
                    return __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__["a" /* Observable */].throw(e);
                }
            }
            else
                return __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__["a" /* Observable */].throw(response_);
        });
    };
    TokenAuthServiceProxy.prototype.processExternalAuthenticate = function (response) {
        var status = response.status;
        var _headers = response.headers ? response.headers.toJSON() : {};
        if (status === 200) {
            var _responseText = response.text();
            var result200 = null;
            var resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = resultData200 ? ExternalAuthenticateResultModel.fromJS(resultData200) : new ExternalAuthenticateResultModel();
            return __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__["a" /* Observable */].of(result200);
        }
        else if (status !== 200 && status !== 204) {
            var _responseText = response.text();
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        }
        return __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__["a" /* Observable */].of(null);
    };
    TokenAuthServiceProxy = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_8__angular_core__["Injectable"])(),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_8__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_9__angular_http__["b" /* Http */])), __param(1, Object(__WEBPACK_IMPORTED_MODULE_8__angular_core__["Optional"])()), __param(1, Object(__WEBPACK_IMPORTED_MODULE_8__angular_core__["Inject"])(API_BASE_URL)),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_9__angular_http__["b" /* Http */], String])
    ], TokenAuthServiceProxy);
    return TokenAuthServiceProxy;
}());

var UserServiceProxy = /** @class */ (function () {
    function UserServiceProxy(http, baseUrl) {
        this.jsonParseReviver = undefined;
        this.http = http;
        this.baseUrl = baseUrl ? baseUrl : "";
    }
    /**
     * @return Success
     */
    UserServiceProxy.prototype.create = function (input) {
        var _this = this;
        var url_ = this.baseUrl + "/api/services/app/User/Create";
        url_ = url_.replace(/[?&]$/, "");
        var content_ = JSON.stringify(input);
        var options_ = {
            body: content_,
            method: "post",
            headers: new __WEBPACK_IMPORTED_MODULE_9__angular_http__["a" /* Headers */]({
                "Content-Type": "application/json",
                "Accept": "application/json"
            })
        };
        return this.http.request(url_, options_).flatMap(function (response_) {
            return _this.processCreate(response_);
        }).catch(function (response_) {
            if (response_ instanceof __WEBPACK_IMPORTED_MODULE_9__angular_http__["f" /* Response */]) {
                try {
                    return _this.processCreate(response_);
                }
                catch (e) {
                    return __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__["a" /* Observable */].throw(e);
                }
            }
            else
                return __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__["a" /* Observable */].throw(response_);
        });
    };
    UserServiceProxy.prototype.processCreate = function (response) {
        var status = response.status;
        var _headers = response.headers ? response.headers.toJSON() : {};
        if (status === 200) {
            var _responseText = response.text();
            var result200 = null;
            var resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = resultData200 ? UserDto.fromJS(resultData200) : new UserDto();
            return __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__["a" /* Observable */].of(result200);
        }
        else if (status === 401) {
            var _responseText = response.text();
            return throwException("A server error occurred.", status, _responseText, _headers);
        }
        else if (status === 403) {
            var _responseText = response.text();
            return throwException("A server error occurred.", status, _responseText, _headers);
        }
        else if (status !== 200 && status !== 204) {
            var _responseText = response.text();
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        }
        return __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__["a" /* Observable */].of(null);
    };
    /**
     * @return Success
     */
    UserServiceProxy.prototype.update = function (input) {
        var _this = this;
        var url_ = this.baseUrl + "/api/services/app/User/Update";
        url_ = url_.replace(/[?&]$/, "");
        var content_ = JSON.stringify(input);
        var options_ = {
            body: content_,
            method: "put",
            headers: new __WEBPACK_IMPORTED_MODULE_9__angular_http__["a" /* Headers */]({
                "Content-Type": "application/json",
                "Accept": "application/json"
            })
        };
        return this.http.request(url_, options_).flatMap(function (response_) {
            return _this.processUpdate(response_);
        }).catch(function (response_) {
            if (response_ instanceof __WEBPACK_IMPORTED_MODULE_9__angular_http__["f" /* Response */]) {
                try {
                    return _this.processUpdate(response_);
                }
                catch (e) {
                    return __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__["a" /* Observable */].throw(e);
                }
            }
            else
                return __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__["a" /* Observable */].throw(response_);
        });
    };
    UserServiceProxy.prototype.processUpdate = function (response) {
        var status = response.status;
        var _headers = response.headers ? response.headers.toJSON() : {};
        if (status === 200) {
            var _responseText = response.text();
            var result200 = null;
            var resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = resultData200 ? UserDto.fromJS(resultData200) : new UserDto();
            return __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__["a" /* Observable */].of(result200);
        }
        else if (status === 401) {
            var _responseText = response.text();
            return throwException("A server error occurred.", status, _responseText, _headers);
        }
        else if (status === 403) {
            var _responseText = response.text();
            return throwException("A server error occurred.", status, _responseText, _headers);
        }
        else if (status !== 200 && status !== 204) {
            var _responseText = response.text();
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        }
        return __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__["a" /* Observable */].of(null);
    };
    /**
     * @return Success
     */
    UserServiceProxy.prototype.delete = function (id) {
        var _this = this;
        var url_ = this.baseUrl + "/api/services/app/User/Delete?";
        if (id !== undefined)
            url_ += "Id=" + encodeURIComponent("" + id) + "&";
        url_ = url_.replace(/[?&]$/, "");
        var options_ = {
            method: "delete",
            headers: new __WEBPACK_IMPORTED_MODULE_9__angular_http__["a" /* Headers */]({
                "Content-Type": "application/json",
            })
        };
        return this.http.request(url_, options_).flatMap(function (response_) {
            return _this.processDelete(response_);
        }).catch(function (response_) {
            if (response_ instanceof __WEBPACK_IMPORTED_MODULE_9__angular_http__["f" /* Response */]) {
                try {
                    return _this.processDelete(response_);
                }
                catch (e) {
                    return __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__["a" /* Observable */].throw(e);
                }
            }
            else
                return __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__["a" /* Observable */].throw(response_);
        });
    };
    UserServiceProxy.prototype.processDelete = function (response) {
        var status = response.status;
        var _headers = response.headers ? response.headers.toJSON() : {};
        if (status === 200) {
            var _responseText = response.text();
            return __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__["a" /* Observable */].of(null);
        }
        else if (status === 401) {
            var _responseText = response.text();
            return throwException("A server error occurred.", status, _responseText, _headers);
        }
        else if (status === 403) {
            var _responseText = response.text();
            return throwException("A server error occurred.", status, _responseText, _headers);
        }
        else if (status !== 200 && status !== 204) {
            var _responseText = response.text();
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        }
        return __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__["a" /* Observable */].of(null);
    };
    /**
     * @return Success
     */
    UserServiceProxy.prototype.getRoles = function () {
        var _this = this;
        var url_ = this.baseUrl + "/api/services/app/User/GetRoles";
        url_ = url_.replace(/[?&]$/, "");
        var options_ = {
            method: "get",
            headers: new __WEBPACK_IMPORTED_MODULE_9__angular_http__["a" /* Headers */]({
                "Content-Type": "application/json",
                "Accept": "application/json"
            })
        };
        return this.http.request(url_, options_).flatMap(function (response_) {
            return _this.processGetRoles(response_);
        }).catch(function (response_) {
            if (response_ instanceof __WEBPACK_IMPORTED_MODULE_9__angular_http__["f" /* Response */]) {
                try {
                    return _this.processGetRoles(response_);
                }
                catch (e) {
                    return __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__["a" /* Observable */].throw(e);
                }
            }
            else
                return __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__["a" /* Observable */].throw(response_);
        });
    };
    UserServiceProxy.prototype.processGetRoles = function (response) {
        var status = response.status;
        var _headers = response.headers ? response.headers.toJSON() : {};
        if (status === 200) {
            var _responseText = response.text();
            var result200 = null;
            var resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = resultData200 ? ListResultDtoOfRoleDto.fromJS(resultData200) : new ListResultDtoOfRoleDto();
            return __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__["a" /* Observable */].of(result200);
        }
        else if (status === 401) {
            var _responseText = response.text();
            return throwException("A server error occurred.", status, _responseText, _headers);
        }
        else if (status === 403) {
            var _responseText = response.text();
            return throwException("A server error occurred.", status, _responseText, _headers);
        }
        else if (status !== 200 && status !== 204) {
            var _responseText = response.text();
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        }
        return __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__["a" /* Observable */].of(null);
    };
    /**
     * @return Success
     */
    UserServiceProxy.prototype.get = function (id) {
        var _this = this;
        var url_ = this.baseUrl + "/api/services/app/User/Get?";
        if (id !== undefined)
            url_ += "Id=" + encodeURIComponent("" + id) + "&";
        url_ = url_.replace(/[?&]$/, "");
        var options_ = {
            method: "get",
            headers: new __WEBPACK_IMPORTED_MODULE_9__angular_http__["a" /* Headers */]({
                "Content-Type": "application/json",
                "Accept": "application/json"
            })
        };
        return this.http.request(url_, options_).flatMap(function (response_) {
            return _this.processGet(response_);
        }).catch(function (response_) {
            if (response_ instanceof __WEBPACK_IMPORTED_MODULE_9__angular_http__["f" /* Response */]) {
                try {
                    return _this.processGet(response_);
                }
                catch (e) {
                    return __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__["a" /* Observable */].throw(e);
                }
            }
            else
                return __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__["a" /* Observable */].throw(response_);
        });
    };
    UserServiceProxy.prototype.processGet = function (response) {
        var status = response.status;
        var _headers = response.headers ? response.headers.toJSON() : {};
        if (status === 200) {
            var _responseText = response.text();
            var result200 = null;
            var resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = resultData200 ? UserDto.fromJS(resultData200) : new UserDto();
            return __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__["a" /* Observable */].of(result200);
        }
        else if (status === 401) {
            var _responseText = response.text();
            return throwException("A server error occurred.", status, _responseText, _headers);
        }
        else if (status === 403) {
            var _responseText = response.text();
            return throwException("A server error occurred.", status, _responseText, _headers);
        }
        else if (status !== 200 && status !== 204) {
            var _responseText = response.text();
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        }
        return __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__["a" /* Observable */].of(null);
    };
    /**
     * @return Success
     */
    UserServiceProxy.prototype.getAll = function (skipCount, maxResultCount) {
        var _this = this;
        var url_ = this.baseUrl + "/api/services/app/User/GetAll?";
        if (skipCount !== undefined)
            url_ += "SkipCount=" + encodeURIComponent("" + skipCount) + "&";
        if (maxResultCount !== undefined)
            url_ += "MaxResultCount=" + encodeURIComponent("" + maxResultCount) + "&";
        url_ = url_.replace(/[?&]$/, "");
        var options_ = {
            method: "get",
            headers: new __WEBPACK_IMPORTED_MODULE_9__angular_http__["a" /* Headers */]({
                "Content-Type": "application/json",
                "Accept": "application/json"
            })
        };
        return this.http.request(url_, options_).flatMap(function (response_) {
            return _this.processGetAll(response_);
        }).catch(function (response_) {
            if (response_ instanceof __WEBPACK_IMPORTED_MODULE_9__angular_http__["f" /* Response */]) {
                try {
                    return _this.processGetAll(response_);
                }
                catch (e) {
                    return __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__["a" /* Observable */].throw(e);
                }
            }
            else
                return __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__["a" /* Observable */].throw(response_);
        });
    };
    UserServiceProxy.prototype.processGetAll = function (response) {
        var status = response.status;
        var _headers = response.headers ? response.headers.toJSON() : {};
        if (status === 200) {
            var _responseText = response.text();
            var result200 = null;
            var resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = resultData200 ? PagedResultDtoOfUserDto.fromJS(resultData200) : new PagedResultDtoOfUserDto();
            return __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__["a" /* Observable */].of(result200);
        }
        else if (status === 401) {
            var _responseText = response.text();
            return throwException("A server error occurred.", status, _responseText, _headers);
        }
        else if (status === 403) {
            var _responseText = response.text();
            return throwException("A server error occurred.", status, _responseText, _headers);
        }
        else if (status !== 200 && status !== 204) {
            var _responseText = response.text();
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        }
        return __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__["a" /* Observable */].of(null);
    };
    UserServiceProxy = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_8__angular_core__["Injectable"])(),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_8__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_9__angular_http__["b" /* Http */])), __param(1, Object(__WEBPACK_IMPORTED_MODULE_8__angular_core__["Optional"])()), __param(1, Object(__WEBPACK_IMPORTED_MODULE_8__angular_core__["Inject"])(API_BASE_URL)),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_9__angular_http__["b" /* Http */], String])
    ], UserServiceProxy);
    return UserServiceProxy;
}());

var IsTenantAvailableInput = /** @class */ (function () {
    function IsTenantAvailableInput(data) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
        }
    }
    IsTenantAvailableInput.prototype.init = function (data) {
        if (data) {
            this.tenancyName = data["tenancyName"];
        }
    };
    IsTenantAvailableInput.fromJS = function (data) {
        var result = new IsTenantAvailableInput();
        result.init(data);
        return result;
    };
    IsTenantAvailableInput.prototype.toJSON = function (data) {
        data = typeof data === 'object' ? data : {};
        data["tenancyName"] = this.tenancyName;
        return data;
    };
    IsTenantAvailableInput.prototype.clone = function () {
        var json = this.toJSON();
        var result = new IsTenantAvailableInput();
        result.init(json);
        return result;
    };
    return IsTenantAvailableInput;
}());

var IsTenantAvailableOutput = /** @class */ (function () {
    function IsTenantAvailableOutput(data) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
        }
    }
    IsTenantAvailableOutput.prototype.init = function (data) {
        if (data) {
            this.state = data["state"];
            this.tenantId = data["tenantId"];
        }
    };
    IsTenantAvailableOutput.fromJS = function (data) {
        var result = new IsTenantAvailableOutput();
        result.init(data);
        return result;
    };
    IsTenantAvailableOutput.prototype.toJSON = function (data) {
        data = typeof data === 'object' ? data : {};
        data["state"] = this.state;
        data["tenantId"] = this.tenantId;
        return data;
    };
    IsTenantAvailableOutput.prototype.clone = function () {
        var json = this.toJSON();
        var result = new IsTenantAvailableOutput();
        result.init(json);
        return result;
    };
    return IsTenantAvailableOutput;
}());

var RegisterInput = /** @class */ (function () {
    function RegisterInput(data) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
        }
    }
    RegisterInput.prototype.init = function (data) {
        if (data) {
            this.name = data["name"];
            this.surname = data["surname"];
            this.userName = data["userName"];
            this.emailAddress = data["emailAddress"];
            this.password = data["password"];
            this.captchaResponse = data["captchaResponse"];
        }
    };
    RegisterInput.fromJS = function (data) {
        var result = new RegisterInput();
        result.init(data);
        return result;
    };
    RegisterInput.prototype.toJSON = function (data) {
        data = typeof data === 'object' ? data : {};
        data["name"] = this.name;
        data["surname"] = this.surname;
        data["userName"] = this.userName;
        data["emailAddress"] = this.emailAddress;
        data["password"] = this.password;
        data["captchaResponse"] = this.captchaResponse;
        return data;
    };
    RegisterInput.prototype.clone = function () {
        var json = this.toJSON();
        var result = new RegisterInput();
        result.init(json);
        return result;
    };
    return RegisterInput;
}());

var RegisterOutput = /** @class */ (function () {
    function RegisterOutput(data) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
        }
    }
    RegisterOutput.prototype.init = function (data) {
        if (data) {
            this.canLogin = data["canLogin"];
        }
    };
    RegisterOutput.fromJS = function (data) {
        var result = new RegisterOutput();
        result.init(data);
        return result;
    };
    RegisterOutput.prototype.toJSON = function (data) {
        data = typeof data === 'object' ? data : {};
        data["canLogin"] = this.canLogin;
        return data;
    };
    RegisterOutput.prototype.clone = function () {
        var json = this.toJSON();
        var result = new RegisterOutput();
        result.init(json);
        return result;
    };
    return RegisterOutput;
}());

var ChangeUiThemeInput = /** @class */ (function () {
    function ChangeUiThemeInput(data) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
        }
    }
    ChangeUiThemeInput.prototype.init = function (data) {
        if (data) {
            this.theme = data["theme"];
        }
    };
    ChangeUiThemeInput.fromJS = function (data) {
        var result = new ChangeUiThemeInput();
        result.init(data);
        return result;
    };
    ChangeUiThemeInput.prototype.toJSON = function (data) {
        data = typeof data === 'object' ? data : {};
        data["theme"] = this.theme;
        return data;
    };
    ChangeUiThemeInput.prototype.clone = function () {
        var json = this.toJSON();
        var result = new ChangeUiThemeInput();
        result.init(json);
        return result;
    };
    return ChangeUiThemeInput;
}());

var CreateRoleDto = /** @class */ (function () {
    function CreateRoleDto(data) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
        }
    }
    CreateRoleDto.prototype.init = function (data) {
        if (data) {
            this.name = data["name"];
            this.displayName = data["displayName"];
            this.normalizedName = data["normalizedName"];
            this.description = data["description"];
            this.isStatic = data["isStatic"];
            if (data["permissions"] && data["permissions"].constructor === Array) {
                this.permissions = [];
                for (var _i = 0, _a = data["permissions"]; _i < _a.length; _i++) {
                    var item = _a[_i];
                    this.permissions.push(item);
                }
            }
        }
    };
    CreateRoleDto.fromJS = function (data) {
        var result = new CreateRoleDto();
        result.init(data);
        return result;
    };
    CreateRoleDto.prototype.toJSON = function (data) {
        data = typeof data === 'object' ? data : {};
        data["name"] = this.name;
        data["displayName"] = this.displayName;
        data["normalizedName"] = this.normalizedName;
        data["description"] = this.description;
        data["isStatic"] = this.isStatic;
        if (this.permissions && this.permissions.constructor === Array) {
            data["permissions"] = [];
            for (var _i = 0, _a = this.permissions; _i < _a.length; _i++) {
                var item = _a[_i];
                data["permissions"].push(item);
            }
        }
        return data;
    };
    CreateRoleDto.prototype.clone = function () {
        var json = this.toJSON();
        var result = new CreateRoleDto();
        result.init(json);
        return result;
    };
    return CreateRoleDto;
}());

var RoleDto = /** @class */ (function () {
    function RoleDto(data) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
        }
    }
    RoleDto.prototype.init = function (data) {
        if (data) {
            this.name = data["name"];
            this.displayName = data["displayName"];
            this.normalizedName = data["normalizedName"];
            this.description = data["description"];
            this.isStatic = data["isStatic"];
            if (data["permissions"] && data["permissions"].constructor === Array) {
                this.permissions = [];
                for (var _i = 0, _a = data["permissions"]; _i < _a.length; _i++) {
                    var item = _a[_i];
                    this.permissions.push(item);
                }
            }
            this.id = data["id"];
        }
    };
    RoleDto.fromJS = function (data) {
        var result = new RoleDto();
        result.init(data);
        return result;
    };
    RoleDto.prototype.toJSON = function (data) {
        data = typeof data === 'object' ? data : {};
        data["name"] = this.name;
        data["displayName"] = this.displayName;
        data["normalizedName"] = this.normalizedName;
        data["description"] = this.description;
        data["isStatic"] = this.isStatic;
        if (this.permissions && this.permissions.constructor === Array) {
            data["permissions"] = [];
            for (var _i = 0, _a = this.permissions; _i < _a.length; _i++) {
                var item = _a[_i];
                data["permissions"].push(item);
            }
        }
        data["id"] = this.id;
        return data;
    };
    RoleDto.prototype.clone = function () {
        var json = this.toJSON();
        var result = new RoleDto();
        result.init(json);
        return result;
    };
    return RoleDto;
}());

var ListResultDtoOfPermissionDto = /** @class */ (function () {
    function ListResultDtoOfPermissionDto(data) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
        }
    }
    ListResultDtoOfPermissionDto.prototype.init = function (data) {
        if (data) {
            if (data["items"] && data["items"].constructor === Array) {
                this.items = [];
                for (var _i = 0, _a = data["items"]; _i < _a.length; _i++) {
                    var item = _a[_i];
                    this.items.push(PermissionDto.fromJS(item));
                }
            }
        }
    };
    ListResultDtoOfPermissionDto.fromJS = function (data) {
        var result = new ListResultDtoOfPermissionDto();
        result.init(data);
        return result;
    };
    ListResultDtoOfPermissionDto.prototype.toJSON = function (data) {
        data = typeof data === 'object' ? data : {};
        if (this.items && this.items.constructor === Array) {
            data["items"] = [];
            for (var _i = 0, _a = this.items; _i < _a.length; _i++) {
                var item = _a[_i];
                data["items"].push(item.toJSON());
            }
        }
        return data;
    };
    ListResultDtoOfPermissionDto.prototype.clone = function () {
        var json = this.toJSON();
        var result = new ListResultDtoOfPermissionDto();
        result.init(json);
        return result;
    };
    return ListResultDtoOfPermissionDto;
}());

var PermissionDto = /** @class */ (function () {
    function PermissionDto(data) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
        }
    }
    PermissionDto.prototype.init = function (data) {
        if (data) {
            this.name = data["name"];
            this.displayName = data["displayName"];
            this.description = data["description"];
            this.id = data["id"];
        }
    };
    PermissionDto.fromJS = function (data) {
        var result = new PermissionDto();
        result.init(data);
        return result;
    };
    PermissionDto.prototype.toJSON = function (data) {
        data = typeof data === 'object' ? data : {};
        data["name"] = this.name;
        data["displayName"] = this.displayName;
        data["description"] = this.description;
        data["id"] = this.id;
        return data;
    };
    PermissionDto.prototype.clone = function () {
        var json = this.toJSON();
        var result = new PermissionDto();
        result.init(json);
        return result;
    };
    return PermissionDto;
}());

var PagedResultDtoOfRoleDto = /** @class */ (function () {
    function PagedResultDtoOfRoleDto(data) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
        }
    }
    PagedResultDtoOfRoleDto.prototype.init = function (data) {
        if (data) {
            this.totalCount = data["totalCount"];
            if (data["items"] && data["items"].constructor === Array) {
                this.items = [];
                for (var _i = 0, _a = data["items"]; _i < _a.length; _i++) {
                    var item = _a[_i];
                    this.items.push(RoleDto.fromJS(item));
                }
            }
        }
    };
    PagedResultDtoOfRoleDto.fromJS = function (data) {
        var result = new PagedResultDtoOfRoleDto();
        result.init(data);
        return result;
    };
    PagedResultDtoOfRoleDto.prototype.toJSON = function (data) {
        data = typeof data === 'object' ? data : {};
        data["totalCount"] = this.totalCount;
        if (this.items && this.items.constructor === Array) {
            data["items"] = [];
            for (var _i = 0, _a = this.items; _i < _a.length; _i++) {
                var item = _a[_i];
                data["items"].push(item.toJSON());
            }
        }
        return data;
    };
    PagedResultDtoOfRoleDto.prototype.clone = function () {
        var json = this.toJSON();
        var result = new PagedResultDtoOfRoleDto();
        result.init(json);
        return result;
    };
    return PagedResultDtoOfRoleDto;
}());

var GetCurrentLoginInformationsOutput = /** @class */ (function () {
    function GetCurrentLoginInformationsOutput(data) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
        }
    }
    GetCurrentLoginInformationsOutput.prototype.init = function (data) {
        if (data) {
            this.application = data["application"] ? ApplicationInfoDto.fromJS(data["application"]) : undefined;
            this.user = data["user"] ? UserLoginInfoDto.fromJS(data["user"]) : undefined;
            this.tenant = data["tenant"] ? TenantLoginInfoDto.fromJS(data["tenant"]) : undefined;
        }
    };
    GetCurrentLoginInformationsOutput.fromJS = function (data) {
        var result = new GetCurrentLoginInformationsOutput();
        result.init(data);
        return result;
    };
    GetCurrentLoginInformationsOutput.prototype.toJSON = function (data) {
        data = typeof data === 'object' ? data : {};
        data["application"] = this.application ? this.application.toJSON() : undefined;
        data["user"] = this.user ? this.user.toJSON() : undefined;
        data["tenant"] = this.tenant ? this.tenant.toJSON() : undefined;
        return data;
    };
    GetCurrentLoginInformationsOutput.prototype.clone = function () {
        var json = this.toJSON();
        var result = new GetCurrentLoginInformationsOutput();
        result.init(json);
        return result;
    };
    return GetCurrentLoginInformationsOutput;
}());

var ApplicationInfoDto = /** @class */ (function () {
    function ApplicationInfoDto(data) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
        }
    }
    ApplicationInfoDto.prototype.init = function (data) {
        if (data) {
            this.version = data["version"];
            this.releaseDate = data["releaseDate"] ? __WEBPACK_IMPORTED_MODULE_10_moment__(data["releaseDate"].toString()) : undefined;
            if (data["features"]) {
                this.features = {};
                for (var key in data["features"]) {
                    if (data["features"].hasOwnProperty(key))
                        this.features[key] = data["features"][key];
                }
            }
        }
    };
    ApplicationInfoDto.fromJS = function (data) {
        var result = new ApplicationInfoDto();
        result.init(data);
        return result;
    };
    ApplicationInfoDto.prototype.toJSON = function (data) {
        data = typeof data === 'object' ? data : {};
        data["version"] = this.version;
        data["releaseDate"] = this.releaseDate ? this.releaseDate.toISOString() : undefined;
        if (this.features) {
            data["features"] = {};
            for (var key in this.features) {
                if (this.features.hasOwnProperty(key))
                    data["features"][key] = this.features[key];
            }
        }
        return data;
    };
    ApplicationInfoDto.prototype.clone = function () {
        var json = this.toJSON();
        var result = new ApplicationInfoDto();
        result.init(json);
        return result;
    };
    return ApplicationInfoDto;
}());

var UserLoginInfoDto = /** @class */ (function () {
    function UserLoginInfoDto(data) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
        }
    }
    UserLoginInfoDto.prototype.init = function (data) {
        if (data) {
            this.name = data["name"];
            this.surname = data["surname"];
            this.userName = data["userName"];
            this.emailAddress = data["emailAddress"];
            this.id = data["id"];
        }
    };
    UserLoginInfoDto.fromJS = function (data) {
        var result = new UserLoginInfoDto();
        result.init(data);
        return result;
    };
    UserLoginInfoDto.prototype.toJSON = function (data) {
        data = typeof data === 'object' ? data : {};
        data["name"] = this.name;
        data["surname"] = this.surname;
        data["userName"] = this.userName;
        data["emailAddress"] = this.emailAddress;
        data["id"] = this.id;
        return data;
    };
    UserLoginInfoDto.prototype.clone = function () {
        var json = this.toJSON();
        var result = new UserLoginInfoDto();
        result.init(json);
        return result;
    };
    return UserLoginInfoDto;
}());

var TenantLoginInfoDto = /** @class */ (function () {
    function TenantLoginInfoDto(data) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
        }
    }
    TenantLoginInfoDto.prototype.init = function (data) {
        if (data) {
            this.tenancyName = data["tenancyName"];
            this.name = data["name"];
            this.id = data["id"];
        }
    };
    TenantLoginInfoDto.fromJS = function (data) {
        var result = new TenantLoginInfoDto();
        result.init(data);
        return result;
    };
    TenantLoginInfoDto.prototype.toJSON = function (data) {
        data = typeof data === 'object' ? data : {};
        data["tenancyName"] = this.tenancyName;
        data["name"] = this.name;
        data["id"] = this.id;
        return data;
    };
    TenantLoginInfoDto.prototype.clone = function () {
        var json = this.toJSON();
        var result = new TenantLoginInfoDto();
        result.init(json);
        return result;
    };
    return TenantLoginInfoDto;
}());

var CreateTenantDto = /** @class */ (function () {
    function CreateTenantDto(data) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
        }
    }
    CreateTenantDto.prototype.init = function (data) {
        if (data) {
            this.tenancyName = data["tenancyName"];
            this.name = data["name"];
            this.adminEmailAddress = data["adminEmailAddress"];
            this.connectionString = data["connectionString"];
            this.isActive = data["isActive"];
        }
    };
    CreateTenantDto.fromJS = function (data) {
        var result = new CreateTenantDto();
        result.init(data);
        return result;
    };
    CreateTenantDto.prototype.toJSON = function (data) {
        data = typeof data === 'object' ? data : {};
        data["tenancyName"] = this.tenancyName;
        data["name"] = this.name;
        data["adminEmailAddress"] = this.adminEmailAddress;
        data["connectionString"] = this.connectionString;
        data["isActive"] = this.isActive;
        return data;
    };
    CreateTenantDto.prototype.clone = function () {
        var json = this.toJSON();
        var result = new CreateTenantDto();
        result.init(json);
        return result;
    };
    return CreateTenantDto;
}());

var TenantDto = /** @class */ (function () {
    function TenantDto(data) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
        }
    }
    TenantDto.prototype.init = function (data) {
        if (data) {
            this.tenancyName = data["tenancyName"];
            this.name = data["name"];
            this.isActive = data["isActive"];
            this.id = data["id"];
        }
    };
    TenantDto.fromJS = function (data) {
        var result = new TenantDto();
        result.init(data);
        return result;
    };
    TenantDto.prototype.toJSON = function (data) {
        data = typeof data === 'object' ? data : {};
        data["tenancyName"] = this.tenancyName;
        data["name"] = this.name;
        data["isActive"] = this.isActive;
        data["id"] = this.id;
        return data;
    };
    TenantDto.prototype.clone = function () {
        var json = this.toJSON();
        var result = new TenantDto();
        result.init(json);
        return result;
    };
    return TenantDto;
}());

var PagedResultDtoOfTenantDto = /** @class */ (function () {
    function PagedResultDtoOfTenantDto(data) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
        }
    }
    PagedResultDtoOfTenantDto.prototype.init = function (data) {
        if (data) {
            this.totalCount = data["totalCount"];
            if (data["items"] && data["items"].constructor === Array) {
                this.items = [];
                for (var _i = 0, _a = data["items"]; _i < _a.length; _i++) {
                    var item = _a[_i];
                    this.items.push(TenantDto.fromJS(item));
                }
            }
        }
    };
    PagedResultDtoOfTenantDto.fromJS = function (data) {
        var result = new PagedResultDtoOfTenantDto();
        result.init(data);
        return result;
    };
    PagedResultDtoOfTenantDto.prototype.toJSON = function (data) {
        data = typeof data === 'object' ? data : {};
        data["totalCount"] = this.totalCount;
        if (this.items && this.items.constructor === Array) {
            data["items"] = [];
            for (var _i = 0, _a = this.items; _i < _a.length; _i++) {
                var item = _a[_i];
                data["items"].push(item.toJSON());
            }
        }
        return data;
    };
    PagedResultDtoOfTenantDto.prototype.clone = function () {
        var json = this.toJSON();
        var result = new PagedResultDtoOfTenantDto();
        result.init(json);
        return result;
    };
    return PagedResultDtoOfTenantDto;
}());

var AuthenticateModel = /** @class */ (function () {
    function AuthenticateModel(data) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
        }
    }
    AuthenticateModel.prototype.init = function (data) {
        if (data) {
            this.userNameOrEmailAddress = data["userNameOrEmailAddress"];
            this.password = data["password"];
            this.rememberClient = data["rememberClient"];
        }
    };
    AuthenticateModel.fromJS = function (data) {
        var result = new AuthenticateModel();
        result.init(data);
        return result;
    };
    AuthenticateModel.prototype.toJSON = function (data) {
        data = typeof data === 'object' ? data : {};
        data["userNameOrEmailAddress"] = this.userNameOrEmailAddress;
        data["password"] = this.password;
        data["rememberClient"] = this.rememberClient;
        return data;
    };
    AuthenticateModel.prototype.clone = function () {
        var json = this.toJSON();
        var result = new AuthenticateModel();
        result.init(json);
        return result;
    };
    return AuthenticateModel;
}());

var AuthenticateResultModel = /** @class */ (function () {
    function AuthenticateResultModel(data) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
        }
    }
    AuthenticateResultModel.prototype.init = function (data) {
        if (data) {
            this.accessToken = data["accessToken"];
            this.encryptedAccessToken = data["encryptedAccessToken"];
            this.expireInSeconds = data["expireInSeconds"];
            this.userId = data["userId"];
        }
    };
    AuthenticateResultModel.fromJS = function (data) {
        var result = new AuthenticateResultModel();
        result.init(data);
        return result;
    };
    AuthenticateResultModel.prototype.toJSON = function (data) {
        data = typeof data === 'object' ? data : {};
        data["accessToken"] = this.accessToken;
        data["encryptedAccessToken"] = this.encryptedAccessToken;
        data["expireInSeconds"] = this.expireInSeconds;
        data["userId"] = this.userId;
        return data;
    };
    AuthenticateResultModel.prototype.clone = function () {
        var json = this.toJSON();
        var result = new AuthenticateResultModel();
        result.init(json);
        return result;
    };
    return AuthenticateResultModel;
}());

var ExternalLoginProviderInfoModel = /** @class */ (function () {
    function ExternalLoginProviderInfoModel(data) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
        }
    }
    ExternalLoginProviderInfoModel.prototype.init = function (data) {
        if (data) {
            this.name = data["name"];
            this.clientId = data["clientId"];
        }
    };
    ExternalLoginProviderInfoModel.fromJS = function (data) {
        var result = new ExternalLoginProviderInfoModel();
        result.init(data);
        return result;
    };
    ExternalLoginProviderInfoModel.prototype.toJSON = function (data) {
        data = typeof data === 'object' ? data : {};
        data["name"] = this.name;
        data["clientId"] = this.clientId;
        return data;
    };
    ExternalLoginProviderInfoModel.prototype.clone = function () {
        var json = this.toJSON();
        var result = new ExternalLoginProviderInfoModel();
        result.init(json);
        return result;
    };
    return ExternalLoginProviderInfoModel;
}());

var ExternalAuthenticateModel = /** @class */ (function () {
    function ExternalAuthenticateModel(data) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
        }
    }
    ExternalAuthenticateModel.prototype.init = function (data) {
        if (data) {
            this.authProvider = data["authProvider"];
            this.providerKey = data["providerKey"];
            this.providerAccessCode = data["providerAccessCode"];
        }
    };
    ExternalAuthenticateModel.fromJS = function (data) {
        var result = new ExternalAuthenticateModel();
        result.init(data);
        return result;
    };
    ExternalAuthenticateModel.prototype.toJSON = function (data) {
        data = typeof data === 'object' ? data : {};
        data["authProvider"] = this.authProvider;
        data["providerKey"] = this.providerKey;
        data["providerAccessCode"] = this.providerAccessCode;
        return data;
    };
    ExternalAuthenticateModel.prototype.clone = function () {
        var json = this.toJSON();
        var result = new ExternalAuthenticateModel();
        result.init(json);
        return result;
    };
    return ExternalAuthenticateModel;
}());

var ExternalAuthenticateResultModel = /** @class */ (function () {
    function ExternalAuthenticateResultModel(data) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
        }
    }
    ExternalAuthenticateResultModel.prototype.init = function (data) {
        if (data) {
            this.accessToken = data["accessToken"];
            this.encryptedAccessToken = data["encryptedAccessToken"];
            this.expireInSeconds = data["expireInSeconds"];
            this.waitingForActivation = data["waitingForActivation"];
        }
    };
    ExternalAuthenticateResultModel.fromJS = function (data) {
        var result = new ExternalAuthenticateResultModel();
        result.init(data);
        return result;
    };
    ExternalAuthenticateResultModel.prototype.toJSON = function (data) {
        data = typeof data === 'object' ? data : {};
        data["accessToken"] = this.accessToken;
        data["encryptedAccessToken"] = this.encryptedAccessToken;
        data["expireInSeconds"] = this.expireInSeconds;
        data["waitingForActivation"] = this.waitingForActivation;
        return data;
    };
    ExternalAuthenticateResultModel.prototype.clone = function () {
        var json = this.toJSON();
        var result = new ExternalAuthenticateResultModel();
        result.init(json);
        return result;
    };
    return ExternalAuthenticateResultModel;
}());

var CreateUserDto = /** @class */ (function () {
    function CreateUserDto(data) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
        }
    }
    CreateUserDto.prototype.init = function (data) {
        if (data) {
            this.userName = data["userName"];
            this.name = data["name"];
            this.surname = data["surname"];
            this.emailAddress = data["emailAddress"];
            this.isActive = data["isActive"];
            if (data["roleNames"] && data["roleNames"].constructor === Array) {
                this.roleNames = [];
                for (var _i = 0, _a = data["roleNames"]; _i < _a.length; _i++) {
                    var item = _a[_i];
                    this.roleNames.push(item);
                }
            }
            this.password = data["password"];
            this.employeeId = data["employeeId"];
        }
    };
    CreateUserDto.fromJS = function (data) {
        var result = new CreateUserDto();
        result.init(data);
        return result;
    };
    CreateUserDto.prototype.toJSON = function (data) {
        data = typeof data === 'object' ? data : {};
        data["userName"] = this.userName;
        data["name"] = this.name;
        data["surname"] = this.surname;
        data["emailAddress"] = this.emailAddress;
        data["isActive"] = this.isActive;
        if (this.roleNames && this.roleNames.constructor === Array) {
            data["roleNames"] = [];
            for (var _i = 0, _a = this.roleNames; _i < _a.length; _i++) {
                var item = _a[_i];
                data["roleNames"].push(item);
            }
        }
        data["password"] = this.password;
        data["employeeId"] = this.employeeId;
        return data;
    };
    CreateUserDto.prototype.clone = function () {
        var json = this.toJSON();
        var result = new CreateUserDto();
        result.init(json);
        return result;
    };
    return CreateUserDto;
}());

var UserDto = /** @class */ (function () {
    function UserDto(data) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
        }
    }
    UserDto.prototype.init = function (data) {
        if (data) {
            this.userName = data["userName"];
            this.name = data["name"];
            this.surname = data["surname"];
            this.emailAddress = data["emailAddress"];
            this.isActive = data["isActive"];
            this.fullName = data["fullName"];
            this.lastLoginTime = data["lastLoginTime"] ? __WEBPACK_IMPORTED_MODULE_10_moment__(data["lastLoginTime"].toString()) : undefined;
            this.creationTime = data["creationTime"] ? __WEBPACK_IMPORTED_MODULE_10_moment__(data["creationTime"].toString()) : undefined;
            if (data["roleNames"] && data["roleNames"].constructor === Array) {
                this.roleNames = [];
                for (var _i = 0, _a = data["roleNames"]; _i < _a.length; _i++) {
                    var item = _a[_i];
                    this.roleNames.push(item);
                }
            }
            this.id = data["id"];
            this.employeeId = data['employeeId'];
        }
    };
    UserDto.fromJS = function (data) {
        var result = new UserDto();
        result.init(data);
        return result;
    };
    UserDto.prototype.toJSON = function (data) {
        data = typeof data === 'object' ? data : {};
        data["userName"] = this.userName;
        data["name"] = this.name;
        data["surname"] = this.surname;
        data["emailAddress"] = this.emailAddress;
        data["isActive"] = this.isActive;
        data["fullName"] = this.fullName;
        data["lastLoginTime"] = this.lastLoginTime ? this.lastLoginTime.toISOString() : undefined;
        data["creationTime"] = this.creationTime ? this.creationTime.toISOString() : undefined;
        if (this.roleNames && this.roleNames.constructor === Array) {
            data["roleNames"] = [];
            for (var _i = 0, _a = this.roleNames; _i < _a.length; _i++) {
                var item = _a[_i];
                data["roleNames"].push(item);
            }
        }
        data["id"] = this.id;
        data["employeeId"] = this.employeeId;
        return data;
    };
    UserDto.prototype.clone = function () {
        var json = this.toJSON();
        var result = new UserDto();
        result.init(json);
        return result;
    };
    return UserDto;
}());

var ListResultDtoOfRoleDto = /** @class */ (function () {
    function ListResultDtoOfRoleDto(data) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
        }
    }
    ListResultDtoOfRoleDto.prototype.init = function (data) {
        if (data) {
            if (data["items"] && data["items"].constructor === Array) {
                this.items = [];
                for (var _i = 0, _a = data["items"]; _i < _a.length; _i++) {
                    var item = _a[_i];
                    this.items.push(RoleDto.fromJS(item));
                }
            }
        }
    };
    ListResultDtoOfRoleDto.fromJS = function (data) {
        var result = new ListResultDtoOfRoleDto();
        result.init(data);
        return result;
    };
    ListResultDtoOfRoleDto.prototype.toJSON = function (data) {
        data = typeof data === 'object' ? data : {};
        if (this.items && this.items.constructor === Array) {
            data["items"] = [];
            for (var _i = 0, _a = this.items; _i < _a.length; _i++) {
                var item = _a[_i];
                data["items"].push(item.toJSON());
            }
        }
        return data;
    };
    ListResultDtoOfRoleDto.prototype.clone = function () {
        var json = this.toJSON();
        var result = new ListResultDtoOfRoleDto();
        result.init(json);
        return result;
    };
    return ListResultDtoOfRoleDto;
}());

var PagedResultDtoOfUserDto = /** @class */ (function () {
    function PagedResultDtoOfUserDto(data) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
        }
    }
    PagedResultDtoOfUserDto.prototype.init = function (data) {
        if (data) {
            this.totalCount = data["totalCount"];
            if (data["items"] && data["items"].constructor === Array) {
                this.items = [];
                for (var _i = 0, _a = data["items"]; _i < _a.length; _i++) {
                    var item = _a[_i];
                    this.items.push(UserDto.fromJS(item));
                }
            }
        }
    };
    PagedResultDtoOfUserDto.fromJS = function (data) {
        var result = new PagedResultDtoOfUserDto();
        result.init(data);
        return result;
    };
    PagedResultDtoOfUserDto.prototype.toJSON = function (data) {
        data = typeof data === 'object' ? data : {};
        data["totalCount"] = this.totalCount;
        if (this.items && this.items.constructor === Array) {
            data["items"] = [];
            for (var _i = 0, _a = this.items; _i < _a.length; _i++) {
                var item = _a[_i];
                data["items"].push(item.toJSON());
            }
        }
        return data;
    };
    PagedResultDtoOfUserDto.prototype.clone = function () {
        var json = this.toJSON();
        var result = new PagedResultDtoOfUserDto();
        result.init(json);
        return result;
    };
    return PagedResultDtoOfUserDto;
}());

var IsTenantAvailableOutputState;
(function (IsTenantAvailableOutputState) {
    IsTenantAvailableOutputState[IsTenantAvailableOutputState["_1"] = 1] = "_1";
    IsTenantAvailableOutputState[IsTenantAvailableOutputState["_2"] = 2] = "_2";
    IsTenantAvailableOutputState[IsTenantAvailableOutputState["_3"] = 3] = "_3";
})(IsTenantAvailableOutputState || (IsTenantAvailableOutputState = {}));
var SwaggerException = /** @class */ (function (_super) {
    __extends(SwaggerException, _super);
    function SwaggerException(message, status, response, headers, result) {
        var _this = _super.call(this) || this;
        _this.isSwaggerException = true;
        _this.message = message;
        _this.status = status;
        _this.response = response;
        _this.headers = headers;
        _this.result = result;
        return _this;
    }
    SwaggerException.isSwaggerException = function (obj) {
        return obj.isSwaggerException === true;
    };
    return SwaggerException;
}(Error));

function throwException(message, status, response, headers, result) {
    if (result !== null && result !== undefined)
        return __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__["a" /* Observable */].throw(result);
    else
        return __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__["a" /* Observable */].throw(new SwaggerException(message, status, response, headers, null));
}
function blobToText(blob) {
    return new __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__["a" /* Observable */](function (observer) {
        var reader = new FileReader();
        reader.onload = function () {
            observer.next(this.result);
            observer.complete();
        };
        reader.readAsText(blob);
    });
}
var Driver = /** @class */ (function () {
    function Driver(data) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
        }
    }
    Driver.prototype.init = function (data) {
        if (data) {
            this.useR_ID = data["useR_ID"];
            this.useR_NAME = data["useR_NAME"];
            this.positioN_CODE = data["positioN_CODE"];
            // if (data["roleNames"] && data["roleNames"].constructor === Array) {
            //     this.roleNames = [];
            //     for (let item of data["roleNames"])
            //         this.roleNames.push(item);
            // }
            // this.id = data["id"];
        }
    };
    Driver.fromJS = function (data) {
        var result = new Driver();
        result.init(data);
        return result;
    };
    Driver.prototype.toJSON = function (data) {
        data = typeof data === 'object' ? data : {};
        data["useR_ID"] = this.useR_ID;
        data["useR_NAME"] = this.useR_NAME;
        return data;
    };
    Driver.prototype.clone = function () {
        var json = this.toJSON();
        var result = new Driver();
        result.init(json);
        return result;
    };
    return Driver;
}());

var IDriver = /** @class */ (function () {
    function IDriver() {
    }
    return IDriver;
}());

var DriverServiceProxy = /** @class */ (function () {
    function DriverServiceProxy(http, baseUrl) {
        this.jsonParseReviver = undefined;
        this.http = http;
        this.baseUrl = baseUrl ? baseUrl : "";
    }
    /**
     * 获取驾驶员信息
     * @return Success
     */
    DriverServiceProxy.prototype.getAll = function (skipCount, maxResultCount) {
        var _this = this;
        var url_ = this.baseUrl + "/api/services/app/DistDriver/GetPagedDistDrivers?";
        if (skipCount !== undefined)
            url_ += "SkipCount=" + encodeURIComponent("" + skipCount) + "&";
        if (maxResultCount !== undefined)
            url_ += "MaxResultCount=" + encodeURIComponent("" + maxResultCount) + "&";
        url_ = url_.replace(/[?&]$/, "");
        var options_ = {
            method: "get",
            headers: new __WEBPACK_IMPORTED_MODULE_9__angular_http__["a" /* Headers */]({
                "Content-Type": "application/json",
                "Accept": "application/json"
            })
        };
        return this.http.request(url_, options_).flatMap(function (response_) {
            return _this.processGetAll(response_);
        }).catch(function (response_) {
            if (response_ instanceof __WEBPACK_IMPORTED_MODULE_9__angular_http__["f" /* Response */]) {
                try {
                    return _this.processGetAll(response_);
                }
                catch (e) {
                    return __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__["a" /* Observable */].throw(e);
                }
            }
            else
                return __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__["a" /* Observable */].throw(response_);
        });
    };
    DriverServiceProxy.prototype.processGetAll = function (response) {
        var status = response.status;
        var _headers = response.headers ? response.headers.toJSON() : {};
        if (status === 200) {
            var _responseText = response.text();
            var result200 = null;
            var resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = resultData200 ? PagedResultDtoOfDriver.fromJS(resultData200) : new PagedResultDtoOfDriver();
            return __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__["a" /* Observable */].of(result200);
        }
        else if (status === 401) {
            var _responseText = response.text();
            return throwException("A server error occurred.", status, _responseText, _headers);
        }
        else if (status === 403) {
            var _responseText = response.text();
            return throwException("A server error occurred.", status, _responseText, _headers);
        }
        else if (status !== 200 && status !== 204) {
            var _responseText = response.text();
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        }
        return __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__["a" /* Observable */].of(null);
    };
    DriverServiceProxy = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_8__angular_core__["Injectable"])(),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_8__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_9__angular_http__["b" /* Http */])), __param(1, Object(__WEBPACK_IMPORTED_MODULE_8__angular_core__["Optional"])()), __param(1, Object(__WEBPACK_IMPORTED_MODULE_8__angular_core__["Inject"])(API_BASE_URL)),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_9__angular_http__["b" /* Http */], String])
    ], DriverServiceProxy);
    return DriverServiceProxy;
}());

var PagedResultDtoOfDriver = /** @class */ (function () {
    function PagedResultDtoOfDriver(data) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
        }
    }
    PagedResultDtoOfDriver.prototype.init = function (data) {
        if (data) {
            this.totalCount = data["totalCount"];
            if (data["items"] && data["items"].constructor === Array) {
                this.items = [];
                for (var _i = 0, _a = data["items"]; _i < _a.length; _i++) {
                    var item = _a[_i];
                    this.items.push(Driver.fromJS(item));
                }
            }
        }
    };
    PagedResultDtoOfDriver.fromJS = function (data) {
        var result = new PagedResultDtoOfDriver();
        result.init(data);
        return result;
    };
    PagedResultDtoOfDriver.prototype.toJSON = function (data) {
        data = typeof data === 'object' ? data : {};
        data["totalCount"] = this.totalCount;
        if (this.items && this.items.constructor === Array) {
            data["items"] = [];
            for (var _i = 0, _a = this.items; _i < _a.length; _i++) {
                var item = _a[_i];
                data["items"].push(item.toJSON());
            }
        }
        return data;
    };
    PagedResultDtoOfDriver.prototype.clone = function () {
        var json = this.toJSON();
        var result = new PagedResultDtoOfDriver();
        result.init(json);
        return result;
    };
    return PagedResultDtoOfDriver;
}());

//#region  微信配置
var AuthSettingServiceProxy = /** @class */ (function () {
    function AuthSettingServiceProxy(http, baseUrl) {
        this.jsonParseReviver = undefined;
        this.http = http;
        this.baseUrl = baseUrl ? baseUrl : "";
    }
    /**
     * 获取微信配置信息
     * @return Success
     */
    AuthSettingServiceProxy.prototype.getAll = function (skipCount, maxResultCount) {
        var _this = this;
        var url_ = this.baseUrl + "/api/services/app/WechatAppConfig/GetTenantWechatAppConfigAsync?";
        if (skipCount !== undefined)
            url_ += "SkipCount=" + encodeURIComponent("" + skipCount) + "&";
        if (maxResultCount !== undefined)
            url_ += "MaxResultCount=" + encodeURIComponent("" + maxResultCount) + "&";
        url_ = url_.replace(/[?&]$/, "");
        var options_ = {
            method: "get",
            headers: new __WEBPACK_IMPORTED_MODULE_9__angular_http__["a" /* Headers */]({
                "Content-Type": "application/json",
                "Accept": "application/json"
            })
        };
        return this.http.request(url_, options_).flatMap(function (response_) {
            return _this.processGetAll(response_);
        }).catch(function (response_) {
            if (response_ instanceof __WEBPACK_IMPORTED_MODULE_9__angular_http__["f" /* Response */]) {
                try {
                    return _this.processGetAll(response_);
                }
                catch (e) {
                    return __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__["a" /* Observable */].throw(e);
                }
            }
            else
                return __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__["a" /* Observable */].throw(response_);
        });
    };
    AuthSettingServiceProxy.prototype.processGetAll = function (response) {
        var status = response.status;
        var _headers = response.headers ? response.headers.toJSON() : {};
        if (status === 200) {
            var _responseText = response.text();
            var result200 = null;
            var resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = resultData200 ? PagedResultDtoOfAuthSetting.fromJS(resultData200) : new PagedResultDtoOfAuthSetting();
            return __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__["a" /* Observable */].of(result200);
        }
        else if (status === 401) {
            var _responseText = response.text();
            return throwException("A server error occurred.", status, _responseText, _headers);
        }
        else if (status === 403) {
            var _responseText = response.text();
            return throwException("A server error occurred.", status, _responseText, _headers);
        }
        else if (status !== 200 && status !== 204) {
            var _responseText = response.text();
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        }
        return __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__["a" /* Observable */].of(null);
    };
    //#region 通过租户id获取微信配置
    AuthSettingServiceProxy.prototype.get = function () {
        var _this = this;
        var url_ = this.baseUrl + "/api/services/app/WechatAppConfig/GetTenantWechatAppConfigAsync?";
        url_ = url_.replace(/[?&]$/, "");
        var options_ = {
            method: "get",
            headers: new __WEBPACK_IMPORTED_MODULE_9__angular_http__["a" /* Headers */]({
                "Content-Type": "application/json",
                "Accept": "application/json"
            })
        };
        return this.http.request(url_, options_).flatMap(function (response_) {
            return _this.processGet(response_);
        }).catch(function (response_) {
            if (response_ instanceof __WEBPACK_IMPORTED_MODULE_9__angular_http__["f" /* Response */]) {
                try {
                    return _this.processGet(response_);
                }
                catch (e) {
                    return __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__["a" /* Observable */].throw(e);
                }
            }
            else
                return __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__["a" /* Observable */].throw(response_);
        });
    };
    AuthSettingServiceProxy.prototype.processGet = function (response) {
        var status = response.status;
        var _headers = response.headers ? response.headers.toJSON() : {};
        if (status === 200) {
            var _responseText = response.text();
            var result200 = null;
            var resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = resultData200 ? __WEBPACK_IMPORTED_MODULE_12__shared_service_proxies_entity_auth_setting__["a" /* AuthSetting */].fromJS(resultData200) : new __WEBPACK_IMPORTED_MODULE_12__shared_service_proxies_entity_auth_setting__["a" /* AuthSetting */]();
            return __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__["a" /* Observable */].of(result200);
        }
        else if (status === 401) {
            var _responseText = response.text();
            return throwException("A server error occurred.", status, _responseText, _headers);
        }
        else if (status === 403) {
            var _responseText = response.text();
            return throwException("A server error occurred.", status, _responseText, _headers);
        }
        else if (status !== 200 && status !== 204) {
            var _responseText = response.text();
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        }
        return __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__["a" /* Observable */].of(null);
    };
    //#endregion
    //#region 更新或新增微信配置
    AuthSettingServiceProxy.prototype.update = function (input) {
        var _this = this;
        var url_ = this.baseUrl + "/api/services/app/WechatAppConfig/CreateOrUpdateWechatAppConfigDto";
        url_ = url_.replace(/[?&]$/, "");
        var content_ = JSON.stringify(input);
        var options_ = {
            body: content_,
            method: "post",
            headers: new __WEBPACK_IMPORTED_MODULE_9__angular_http__["a" /* Headers */]({
                "Content-Type": "application/json",
                "Accept": "application/json"
            })
        };
        return this.http.request(url_, options_).flatMap(function (response_) {
            return _this.processUpdate(response_);
        }).catch(function (response_) {
            if (response_ instanceof __WEBPACK_IMPORTED_MODULE_9__angular_http__["f" /* Response */]) {
                try {
                    return _this.processUpdate(response_);
                }
                catch (e) {
                    return __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__["a" /* Observable */].throw(e);
                }
            }
            else
                return __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__["a" /* Observable */].throw(response_);
        });
    };
    AuthSettingServiceProxy.prototype.processUpdate = function (response) {
        var status = response.status;
        var _headers = response.headers ? response.headers.toJSON() : {};
        if (status === 200) {
            var _responseText = response.text();
            var result200 = null;
            var resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = resultData200 ? __WEBPACK_IMPORTED_MODULE_12__shared_service_proxies_entity_auth_setting__["a" /* AuthSetting */].fromJS(resultData200) : new __WEBPACK_IMPORTED_MODULE_12__shared_service_proxies_entity_auth_setting__["a" /* AuthSetting */]();
            return __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__["a" /* Observable */].of(result200);
        }
        else if (status === 401) {
            var _responseText = response.text();
            return throwException("A server error occurred.", status, _responseText, _headers);
        }
        else if (status === 403) {
            var _responseText = response.text();
            return throwException("A server error occurred.", status, _responseText, _headers);
        }
        else if (status !== 200 && status !== 204) {
            var _responseText = response.text();
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        }
        return __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__["a" /* Observable */].of(null);
    };
    AuthSettingServiceProxy = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_8__angular_core__["Injectable"])(),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_8__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_9__angular_http__["b" /* Http */])), __param(1, Object(__WEBPACK_IMPORTED_MODULE_8__angular_core__["Optional"])()), __param(1, Object(__WEBPACK_IMPORTED_MODULE_8__angular_core__["Inject"])(API_BASE_URL)),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_9__angular_http__["b" /* Http */], String])
    ], AuthSettingServiceProxy);
    return AuthSettingServiceProxy;
}());

var PagedResultDtoOfAuthSetting = /** @class */ (function () {
    function PagedResultDtoOfAuthSetting(data) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
        }
    }
    PagedResultDtoOfAuthSetting.prototype.init = function (data) {
        if (data) {
            this.totalCount = data["totalCount"];
            if (data["items"] && data["items"].constructor === Array) {
                this.items = [];
                for (var _i = 0, _a = data["items"]; _i < _a.length; _i++) {
                    var item = _a[_i];
                    this.items.push(__WEBPACK_IMPORTED_MODULE_12__shared_service_proxies_entity_auth_setting__["a" /* AuthSetting */].fromJS(item));
                }
            }
        }
    };
    PagedResultDtoOfAuthSetting.fromJS = function (data) {
        var result = new PagedResultDtoOfAuthSetting();
        result.init(data);
        return result;
    };
    PagedResultDtoOfAuthSetting.prototype.toJSON = function (data) {
        data = typeof data === 'object' ? data : {};
        data["totalCount"] = this.totalCount;
        if (this.items && this.items.constructor === Array) {
            data["items"] = [];
            for (var _i = 0, _a = this.items; _i < _a.length; _i++) {
                var item = _a[_i];
                data["items"].push(item.toJSON());
            }
        }
        return data;
    };
    PagedResultDtoOfAuthSetting.prototype.clone = function () {
        var json = this.toJSON();
        var result = new PagedResultDtoOfAuthSetting();
        result.init(json);
        return result;
    };
    return PagedResultDtoOfAuthSetting;
}());

//#endregion
//#region 自动回复
var MessageServiceProxy = /** @class */ (function () {
    function MessageServiceProxy(http, baseUrl) {
        this.jsonParseReviver = undefined;
        this.http = http;
        this.baseUrl = baseUrl ? baseUrl : "";
    }
    /**
     * 获取自动回复消息
     * @return Success
     */
    MessageServiceProxy.prototype.getAll = function (skipCount, maxResultCount, Filter) {
        var _this = this;
        var url_ = this.baseUrl + "/api/services/app/WechatMessage/GetPagedWechatMessages?";
        if (skipCount !== undefined)
            url_ += "SkipCount=" + encodeURIComponent("" + skipCount) + "&";
        if (maxResultCount !== undefined)
            url_ += "MaxResultCount=" + encodeURIComponent("" + maxResultCount) + "&";
        if (Filter !== undefined)
            url_ += "Filter=" + encodeURIComponent("" + Filter) + "&";
        url_ = url_.replace(/[?&]$/, "");
        var options_ = {
            method: "get",
            headers: new __WEBPACK_IMPORTED_MODULE_9__angular_http__["a" /* Headers */]({
                "Content-Type": "application/json",
                "Accept": "application/json"
            })
        };
        return this.http.request(url_, options_).flatMap(function (response_) {
            return _this.processGetAll(response_);
        }).catch(function (response_) {
            if (response_ instanceof __WEBPACK_IMPORTED_MODULE_9__angular_http__["f" /* Response */]) {
                try {
                    return _this.processGetAll(response_);
                }
                catch (e) {
                    return __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__["a" /* Observable */].throw(e);
                }
            }
            else
                return __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__["a" /* Observable */].throw(response_);
        });
    };
    MessageServiceProxy.prototype.processGetAll = function (response) {
        var status = response.status;
        var _headers = response.headers ? response.headers.toJSON() : {};
        if (status === 200) {
            var _responseText = response.text();
            var result200 = null;
            var resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = resultData200 ? PagedResultDtoOfMessage.fromJS(resultData200) : new PagedResultDtoOfMessage();
            return __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__["a" /* Observable */].of(result200);
        }
        else if (status === 401) {
            var _responseText = response.text();
            return throwException("A server error occurred.", status, _responseText, _headers);
        }
        else if (status === 403) {
            var _responseText = response.text();
            return throwException("A server error occurred.", status, _responseText, _headers);
        }
        else if (status !== 200 && status !== 204) {
            var _responseText = response.text();
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        }
        return __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__["a" /* Observable */].of(null);
    };
    /**
     * 通过消息id获取自动回复消息信息
     * @param id 消息id
     */
    MessageServiceProxy.prototype.get = function (id) {
        var _this = this;
        var url_ = this.baseUrl + "/api/services/app/WechatMessage/GetWechatMessageByIdAsync?";
        if (id !== undefined)
            url_ += "Id=" + encodeURIComponent("" + id) + "&";
        url_ = url_.replace(/[?&]$/, "");
        var options_ = {
            method: "get",
            headers: new __WEBPACK_IMPORTED_MODULE_9__angular_http__["a" /* Headers */]({
                "Content-Type": "application/json",
                "Accept": "application/json"
            })
        };
        return this.http.request(url_, options_).flatMap(function (response_) {
            return _this.processGet(response_);
        }).catch(function (response_) {
            if (response_ instanceof __WEBPACK_IMPORTED_MODULE_9__angular_http__["f" /* Response */]) {
                try {
                    return _this.processGet(response_);
                }
                catch (e) {
                    return __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__["a" /* Observable */].throw(e);
                }
            }
            else
                return __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__["a" /* Observable */].throw(response_);
        });
    };
    MessageServiceProxy.prototype.processGet = function (response) {
        var status = response.status;
        var _headers = response.headers ? response.headers.toJSON() : {};
        if (status === 200) {
            var _responseText = response.text();
            var result200 = null;
            var resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = resultData200 ? __WEBPACK_IMPORTED_MODULE_13__shared_service_proxies_entity_messages__["a" /* Messagess */].fromJS(resultData200) : new __WEBPACK_IMPORTED_MODULE_13__shared_service_proxies_entity_messages__["a" /* Messagess */]();
            return __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__["a" /* Observable */].of(result200);
        }
        else if (status === 401) {
            var _responseText = response.text();
            return throwException("A server error occurred.", status, _responseText, _headers);
        }
        else if (status === 403) {
            var _responseText = response.text();
            return throwException("A server error occurred.", status, _responseText, _headers);
        }
        else if (status !== 200 && status !== 204) {
            var _responseText = response.text();
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        }
        return __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__["a" /* Observable */].of(null);
    };
    /**
     * 新增或修改自动回复消息信息
     * @param input
     */
    MessageServiceProxy.prototype.update = function (input) {
        var _this = this;
        var url_ = this.baseUrl + "/api/services/app/WechatMessage/CreateOrUpdateWechatMessageDto";
        url_ = url_.replace(/[?&]$/, "");
        var content_ = JSON.stringify(input);
        var options_ = {
            body: content_,
            method: "post",
            headers: new __WEBPACK_IMPORTED_MODULE_9__angular_http__["a" /* Headers */]({
                "Content-Type": "application/json",
                "Accept": "application/json"
            })
        };
        return this.http.request(url_, options_).flatMap(function (response_) {
            return _this.processUpdate(response_);
        }).catch(function (response_) {
            if (response_ instanceof __WEBPACK_IMPORTED_MODULE_9__angular_http__["f" /* Response */]) {
                try {
                    return _this.processUpdate(response_);
                }
                catch (e) {
                    return __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__["a" /* Observable */].throw(e);
                }
            }
            else
                return __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__["a" /* Observable */].throw(response_);
        });
    };
    MessageServiceProxy.prototype.processUpdate = function (response) {
        var status = response.status;
        var _headers = response.headers ? response.headers.toJSON() : {};
        if (status === 200) {
            var _responseText = response.text();
            var result200 = null;
            var resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = resultData200 ? __WEBPACK_IMPORTED_MODULE_13__shared_service_proxies_entity_messages__["a" /* Messagess */].fromJS(resultData200) : new __WEBPACK_IMPORTED_MODULE_13__shared_service_proxies_entity_messages__["a" /* Messagess */]();
            return __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__["a" /* Observable */].of(result200);
        }
        else if (status === 401) {
            var _responseText = response.text();
            return throwException("A server error occurred.", status, _responseText, _headers);
        }
        else if (status === 403) {
            var _responseText = response.text();
            return throwException("A server error occurred.", status, _responseText, _headers);
        }
        else if (status !== 200 && status !== 204) {
            var _responseText = response.text();
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        }
        return __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__["a" /* Observable */].of(null);
    };
    /**
    * @return Success
    */
    MessageServiceProxy.prototype.delete = function (id) {
        var _this = this;
        var url_ = this.baseUrl + "/api/services/app/WechatMessage/DeleteWechatMessage?";
        if (id !== undefined)
            url_ += "Id=" + encodeURIComponent("" + id) + "&";
        url_ = url_.replace(/[?&]$/, "");
        var options_ = {
            method: "delete",
            headers: new __WEBPACK_IMPORTED_MODULE_9__angular_http__["a" /* Headers */]({
                "Content-Type": "application/json",
            })
        };
        return this.http.request(url_, options_).flatMap(function (response_) {
            return _this.processDelete(response_);
        }).catch(function (response_) {
            if (response_ instanceof __WEBPACK_IMPORTED_MODULE_9__angular_http__["f" /* Response */]) {
                try {
                    return _this.processDelete(response_);
                }
                catch (e) {
                    return __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__["a" /* Observable */].throw(e);
                }
            }
            else
                return __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__["a" /* Observable */].throw(response_);
        });
    };
    MessageServiceProxy.prototype.processDelete = function (response) {
        var status = response.status;
        var _headers = response.headers ? response.headers.toJSON() : {};
        if (status === 200) {
            var _responseText = response.text();
            return __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__["a" /* Observable */].of(null);
        }
        else if (status === 401) {
            var _responseText = response.text();
            return throwException("A server error occurred.", status, _responseText, _headers);
        }
        else if (status === 403) {
            var _responseText = response.text();
            return throwException("A server error occurred.", status, _responseText, _headers);
        }
        else if (status !== 200 && status !== 204) {
            var _responseText = response.text();
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        }
        return __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__["a" /* Observable */].of(null);
    };
    MessageServiceProxy = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_8__angular_core__["Injectable"])(),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_8__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_9__angular_http__["b" /* Http */])), __param(1, Object(__WEBPACK_IMPORTED_MODULE_8__angular_core__["Optional"])()), __param(1, Object(__WEBPACK_IMPORTED_MODULE_8__angular_core__["Inject"])(API_BASE_URL)),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_9__angular_http__["b" /* Http */], String])
    ], MessageServiceProxy);
    return MessageServiceProxy;
}());

var PagedResultDtoOfMessage = /** @class */ (function () {
    function PagedResultDtoOfMessage(data) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
        }
    }
    PagedResultDtoOfMessage.prototype.init = function (data) {
        if (data) {
            this.totalCount = data["totalCount"];
            if (data["items"] && data["items"].constructor === Array) {
                this.items = [];
                for (var _i = 0, _a = data["items"]; _i < _a.length; _i++) {
                    var item = _a[_i];
                    this.items.push(__WEBPACK_IMPORTED_MODULE_13__shared_service_proxies_entity_messages__["a" /* Messagess */].fromJS(item));
                }
            }
        }
    };
    PagedResultDtoOfMessage.fromJS = function (data) {
        var result = new PagedResultDtoOfMessage();
        result.init(data);
        return result;
    };
    PagedResultDtoOfMessage.prototype.toJSON = function (data) {
        data = typeof data === 'object' ? data : {};
        data["totalCount"] = this.totalCount;
        if (this.items && this.items.constructor === Array) {
            data["items"] = [];
            for (var _i = 0, _a = this.items; _i < _a.length; _i++) {
                var item = _a[_i];
                data["items"].push(item.toJSON());
            }
        }
        return data;
    };
    PagedResultDtoOfMessage.prototype.clone = function () {
        var json = this.toJSON();
        var result = new PagedResultDtoOfMessage();
        result.init(json);
        return result;
    };
    return PagedResultDtoOfMessage;
}());

//#endregion
//#region 关注回复消息
var SubscribeServiceProxy = /** @class */ (function () {
    function SubscribeServiceProxy(http, baseUrl) {
        this.jsonParseReviver = undefined;
        this.http = http;
        this.baseUrl = baseUrl ? baseUrl : "";
    }
    /**
     * 获取关注回复消息通过租户id
     * @return Success
     */
    SubscribeServiceProxy.prototype.get = function () {
        var _this = this;
        var url_ = this.baseUrl + "/api/services/app/WechatSubscribe/GetSubscribeInfoByTenantId?";
        url_ = url_.replace(/[?&]$/, "");
        var options_ = {
            method: "get",
            headers: new __WEBPACK_IMPORTED_MODULE_9__angular_http__["a" /* Headers */]({
                "Content-Type": "application/json",
                "Accept": "application/json"
            })
        };
        return this.http.request(url_, options_).flatMap(function (response_) {
            return _this.processGet(response_);
        }).catch(function (response_) {
            if (response_ instanceof __WEBPACK_IMPORTED_MODULE_9__angular_http__["f" /* Response */]) {
                try {
                    return _this.processGet(response_);
                }
                catch (e) {
                    return __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__["a" /* Observable */].throw(e);
                }
            }
            else
                return __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__["a" /* Observable */].throw(response_);
        });
    };
    SubscribeServiceProxy.prototype.processGet = function (response) {
        var status = response.status;
        var _headers = response.headers ? response.headers.toJSON() : {};
        if (status === 200) {
            var _responseText = response.text();
            var result200 = null;
            var resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = resultData200 ? __WEBPACK_IMPORTED_MODULE_14__shared_service_proxies_entity_subscribe__["a" /* Subscribess */].fromJS(resultData200) : new __WEBPACK_IMPORTED_MODULE_14__shared_service_proxies_entity_subscribe__["a" /* Subscribess */]();
            return __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__["a" /* Observable */].of(result200);
        }
        else if (status === 401) {
            var _responseText = response.text();
            return throwException("A server error occurred.", status, _responseText, _headers);
        }
        else if (status === 403) {
            var _responseText = response.text();
            return throwException("A server error occurred.", status, _responseText, _headers);
        }
        else if (status !== 200 && status !== 204) {
            var _responseText = response.text();
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        }
        return __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__["a" /* Observable */].of(null);
    };
    //#region 新增或修改关注回复消息
    SubscribeServiceProxy.prototype.update = function (input) {
        var _this = this;
        var url_ = this.baseUrl + "/api/services/app/WechatSubscribe/CreateOrUpdateWechatSubscribeDto";
        url_ = url_.replace(/[?&]$/, "");
        var content_ = JSON.stringify(input);
        var options_ = {
            body: content_,
            method: "post",
            headers: new __WEBPACK_IMPORTED_MODULE_9__angular_http__["a" /* Headers */]({
                "Content-Type": "application/json",
                "Accept": "application/json"
            })
        };
        return this.http.request(url_, options_).flatMap(function (response_) {
            return _this.processUpdate(response_);
        }).catch(function (response_) {
            if (response_ instanceof __WEBPACK_IMPORTED_MODULE_9__angular_http__["f" /* Response */]) {
                try {
                    return _this.processUpdate(response_);
                }
                catch (e) {
                    return __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__["a" /* Observable */].throw(e);
                }
            }
            else
                return __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__["a" /* Observable */].throw(response_);
        });
    };
    SubscribeServiceProxy.prototype.processUpdate = function (response) {
        var status = response.status;
        var _headers = response.headers ? response.headers.toJSON() : {};
        if (status === 200) {
            var _responseText = response.text();
            var result200 = null;
            var resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = resultData200 ? __WEBPACK_IMPORTED_MODULE_14__shared_service_proxies_entity_subscribe__["a" /* Subscribess */].fromJS(resultData200) : new __WEBPACK_IMPORTED_MODULE_14__shared_service_proxies_entity_subscribe__["a" /* Subscribess */]();
            return __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__["a" /* Observable */].of(result200);
        }
        else if (status === 401) {
            var _responseText = response.text();
            return throwException("A server error occurred.", status, _responseText, _headers);
        }
        else if (status === 403) {
            var _responseText = response.text();
            return throwException("A server error occurred.", status, _responseText, _headers);
        }
        else if (status !== 200 && status !== 204) {
            var _responseText = response.text();
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        }
        return __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__["a" /* Observable */].of(null);
    };
    //#endregion
    /**
    * @return Success
    */
    SubscribeServiceProxy.prototype.delete = function (id) {
        var _this = this;
        var url_ = this.baseUrl + "/api/services/app/WechatSubscribe/DeleteWechatSubscribe?";
        if (id !== undefined)
            url_ += "Id=" + encodeURIComponent("" + id) + "&";
        url_ = url_.replace(/[?&]$/, "");
        var options_ = {
            method: "delete",
            headers: new __WEBPACK_IMPORTED_MODULE_9__angular_http__["a" /* Headers */]({
                "Content-Type": "application/json",
            })
        };
        return this.http.request(url_, options_).flatMap(function (response_) {
            return _this.processDelete(response_);
        }).catch(function (response_) {
            if (response_ instanceof __WEBPACK_IMPORTED_MODULE_9__angular_http__["f" /* Response */]) {
                try {
                    return _this.processDelete(response_);
                }
                catch (e) {
                    return __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__["a" /* Observable */].throw(e);
                }
            }
            else
                return __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__["a" /* Observable */].throw(response_);
        });
    };
    SubscribeServiceProxy.prototype.processDelete = function (response) {
        var status = response.status;
        var _headers = response.headers ? response.headers.toJSON() : {};
        if (status === 200) {
            var _responseText = response.text();
            return __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__["a" /* Observable */].of(null);
        }
        else if (status === 401) {
            var _responseText = response.text();
            return throwException("A server error occurred.", status, _responseText, _headers);
        }
        else if (status === 403) {
            var _responseText = response.text();
            return throwException("A server error occurred.", status, _responseText, _headers);
        }
        else if (status !== 200 && status !== 204) {
            var _responseText = response.text();
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        }
        return __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__["a" /* Observable */].of(null);
    };
    SubscribeServiceProxy = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_8__angular_core__["Injectable"])(),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_8__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_9__angular_http__["b" /* Http */])), __param(1, Object(__WEBPACK_IMPORTED_MODULE_8__angular_core__["Optional"])()), __param(1, Object(__WEBPACK_IMPORTED_MODULE_8__angular_core__["Inject"])(API_BASE_URL)),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_9__angular_http__["b" /* Http */], String])
    ], SubscribeServiceProxy);
    return SubscribeServiceProxy;
}());

//#endregion
var EmployeesServiceProxy = /** @class */ (function () {
    function EmployeesServiceProxy(http, baseUrl) {
        this.jsonParseReviver = undefined;
        this.http = http;
        this.baseUrl = baseUrl ? baseUrl : "";
    }
    /**
     * 获取自动回复消息
     * @return Success
     */
    EmployeesServiceProxy.prototype.getAllModal = function (Filter) {
        var _this = this;
        var url_ = this.baseUrl + "/api/services/app/Employee/GetPagedEmployeesModal?";
        // if (skipCount !== undefined)
        //     url_ += "SkipCount=" + encodeURIComponent("" + skipCount) + "&"; 
        // if (maxResultCount !== undefined)
        //     url_ += "MaxResultCount=" + encodeURIComponent("" + maxResultCount) + "&"; 
        if (Filter !== undefined)
            url_ += "Filter=" + encodeURIComponent("" + Filter) + "&";
        url_ = url_.replace(/[?&]$/, "");
        var options_ = {
            method: "get",
            headers: new __WEBPACK_IMPORTED_MODULE_9__angular_http__["a" /* Headers */]({
                "Content-Type": "application/json",
                "Accept": "application/json"
            })
        };
        return this.http.request(url_, options_).flatMap(function (response_) {
            return _this.processGetAllModal(response_);
        }).catch(function (response_) {
            if (response_ instanceof __WEBPACK_IMPORTED_MODULE_9__angular_http__["f" /* Response */]) {
                try {
                    return _this.processGetAllModal(response_);
                }
                catch (e) {
                    return __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__["a" /* Observable */].throw(e);
                }
            }
            else
                return __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__["a" /* Observable */].throw(response_);
        });
    };
    EmployeesServiceProxy.prototype.processGetAllModal = function (response) {
        var status = response.status;
        var _headers = response.headers ? response.headers.toJSON() : {};
        if (status === 200) {
            var _responseText = response.text();
            var result200 = null;
            var resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = resultData200 ? PagedResultDtoOfEmployee.fromJS(resultData200) : new PagedResultDtoOfEmployee();
            return __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__["a" /* Observable */].of(result200);
        }
        else if (status === 401) {
            var _responseText = response.text();
            return throwException("A server error occurred.", status, _responseText, _headers);
        }
        else if (status === 403) {
            var _responseText = response.text();
            return throwException("A server error occurred.", status, _responseText, _headers);
        }
        else if (status !== 200 && status !== 204) {
            var _responseText = response.text();
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        }
        return __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__["a" /* Observable */].of(null);
    };
    EmployeesServiceProxy.prototype.getAll = function (skipCount, maxResultCount, Filter) {
        var _this = this;
        var url_ = this.baseUrl + "/api/services/app/Employee/GetPagedEmployees?";
        if (skipCount !== undefined)
            url_ += "SkipCount=" + encodeURIComponent("" + skipCount) + "&";
        if (maxResultCount !== undefined)
            url_ += "MaxResultCount=" + encodeURIComponent("" + maxResultCount) + "&";
        if (Filter !== undefined)
            url_ += "Filter=" + encodeURIComponent("" + Filter) + "&";
        url_ = url_.replace(/[?&]$/, "");
        var options_ = {
            method: "get",
            headers: new __WEBPACK_IMPORTED_MODULE_9__angular_http__["a" /* Headers */]({
                "Content-Type": "application/json",
                "Accept": "application/json"
            })
        };
        return this.http.request(url_, options_).flatMap(function (response_) {
            return _this.processGetAll(response_);
        }).catch(function (response_) {
            if (response_ instanceof __WEBPACK_IMPORTED_MODULE_9__angular_http__["f" /* Response */]) {
                try {
                    return _this.processGetAll(response_);
                }
                catch (e) {
                    return __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__["a" /* Observable */].throw(e);
                }
            }
            else
                return __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__["a" /* Observable */].throw(response_);
        });
    };
    EmployeesServiceProxy.prototype.processGetAll = function (response) {
        var status = response.status;
        var _headers = response.headers ? response.headers.toJSON() : {};
        if (status === 200) {
            var _responseText = response.text();
            var result200 = null;
            var resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = resultData200 ? PagedResultDtoOfEmployee.fromJS(resultData200) : new PagedResultDtoOfEmployee();
            return __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__["a" /* Observable */].of(result200);
        }
        else if (status === 401) {
            var _responseText = response.text();
            return throwException("A server error occurred.", status, _responseText, _headers);
        }
        else if (status === 403) {
            var _responseText = response.text();
            return throwException("A server error occurred.", status, _responseText, _headers);
        }
        else if (status !== 200 && status !== 204) {
            var _responseText = response.text();
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        }
        return __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__["a" /* Observable */].of(null);
    };
    /**
     * 通过消息id获取自动回复消息信息
     * @param id 消息id
     */
    EmployeesServiceProxy.prototype.get = function (id) {
        var _this = this;
        var url_ = this.baseUrl + "/api/services/app/Employee/GetEmployeeByIdAsync?";
        if (id !== undefined)
            url_ += "Id=" + encodeURIComponent("" + id) + "&";
        url_ = url_.replace(/[?&]$/, "");
        var options_ = {
            method: "get",
            headers: new __WEBPACK_IMPORTED_MODULE_9__angular_http__["a" /* Headers */]({
                "Content-Type": "application/json",
                "Accept": "application/json"
            })
        };
        return this.http.request(url_, options_).flatMap(function (response_) {
            return _this.processGet(response_);
        }).catch(function (response_) {
            if (response_ instanceof __WEBPACK_IMPORTED_MODULE_9__angular_http__["f" /* Response */]) {
                try {
                    return _this.processGet(response_);
                }
                catch (e) {
                    return __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__["a" /* Observable */].throw(e);
                }
            }
            else
                return __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__["a" /* Observable */].throw(response_);
        });
    };
    EmployeesServiceProxy.prototype.processGet = function (response) {
        var status = response.status;
        var _headers = response.headers ? response.headers.toJSON() : {};
        if (status === 200) {
            var _responseText = response.text();
            var result200 = null;
            var resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = resultData200 ? __WEBPACK_IMPORTED_MODULE_15__shared_service_proxies_entity_employee__["a" /* Employee */].fromJS(resultData200) : new __WEBPACK_IMPORTED_MODULE_15__shared_service_proxies_entity_employee__["a" /* Employee */]();
            return __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__["a" /* Observable */].of(result200);
        }
        else if (status === 401) {
            var _responseText = response.text();
            return throwException("A server error occurred.", status, _responseText, _headers);
        }
        else if (status === 403) {
            var _responseText = response.text();
            return throwException("A server error occurred.", status, _responseText, _headers);
        }
        else if (status !== 200 && status !== 204) {
            var _responseText = response.text();
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        }
        return __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__["a" /* Observable */].of(null);
    };
    /**
     * 新增或修改自动回复消息信息
     * @param input
     */
    EmployeesServiceProxy.prototype.update = function (input) {
        var _this = this;
        var url_ = this.baseUrl + "/api/services/app/Employee/CreateOrUpdateWechatMessageDto";
        url_ = url_.replace(/[?&]$/, "");
        var content_ = JSON.stringify(input);
        var options_ = {
            body: content_,
            method: "post",
            headers: new __WEBPACK_IMPORTED_MODULE_9__angular_http__["a" /* Headers */]({
                "Content-Type": "application/json",
                "Accept": "application/json"
            })
        };
        return this.http.request(url_, options_).flatMap(function (response_) {
            return _this.processUpdate(response_);
        }).catch(function (response_) {
            if (response_ instanceof __WEBPACK_IMPORTED_MODULE_9__angular_http__["f" /* Response */]) {
                try {
                    return _this.processUpdate(response_);
                }
                catch (e) {
                    return __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__["a" /* Observable */].throw(e);
                }
            }
            else
                return __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__["a" /* Observable */].throw(response_);
        });
    };
    EmployeesServiceProxy.prototype.processUpdate = function (response) {
        var status = response.status;
        var _headers = response.headers ? response.headers.toJSON() : {};
        if (status === 200) {
            var _responseText = response.text();
            var result200 = null;
            var resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = resultData200 ? __WEBPACK_IMPORTED_MODULE_15__shared_service_proxies_entity_employee__["a" /* Employee */].fromJS(resultData200) : new __WEBPACK_IMPORTED_MODULE_15__shared_service_proxies_entity_employee__["a" /* Employee */]();
            return __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__["a" /* Observable */].of(result200);
        }
        else if (status === 401) {
            var _responseText = response.text();
            return throwException("A server error occurred.", status, _responseText, _headers);
        }
        else if (status === 403) {
            var _responseText = response.text();
            return throwException("A server error occurred.", status, _responseText, _headers);
        }
        else if (status !== 200 && status !== 204) {
            var _responseText = response.text();
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        }
        return __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__["a" /* Observable */].of(null);
    };
    /**
    * @return Success
    */
    EmployeesServiceProxy.prototype.delete = function (id) {
        var _this = this;
        var url_ = this.baseUrl + "/api/services/app/Employee/DeleteEmployee?";
        if (id !== undefined)
            url_ += "Id=" + encodeURIComponent("" + id) + "&";
        url_ = url_.replace(/[?&]$/, "");
        var options_ = {
            method: "delete",
            headers: new __WEBPACK_IMPORTED_MODULE_9__angular_http__["a" /* Headers */]({
                "Content-Type": "application/json",
            })
        };
        return this.http.request(url_, options_).flatMap(function (response_) {
            return _this.processDelete(response_);
        }).catch(function (response_) {
            if (response_ instanceof __WEBPACK_IMPORTED_MODULE_9__angular_http__["f" /* Response */]) {
                try {
                    return _this.processDelete(response_);
                }
                catch (e) {
                    return __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__["a" /* Observable */].throw(e);
                }
            }
            else
                return __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__["a" /* Observable */].throw(response_);
        });
    };
    EmployeesServiceProxy.prototype.processDelete = function (response) {
        var status = response.status;
        var _headers = response.headers ? response.headers.toJSON() : {};
        if (status === 200) {
            var _responseText = response.text();
            return __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__["a" /* Observable */].of(null);
        }
        else if (status === 401) {
            var _responseText = response.text();
            return throwException("A server error occurred.", status, _responseText, _headers);
        }
        else if (status === 403) {
            var _responseText = response.text();
            return throwException("A server error occurred.", status, _responseText, _headers);
        }
        else if (status !== 200 && status !== 204) {
            var _responseText = response.text();
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        }
        return __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__["a" /* Observable */].of(null);
    };
    EmployeesServiceProxy = __decorate([
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_8__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_9__angular_http__["b" /* Http */])), __param(1, Object(__WEBPACK_IMPORTED_MODULE_8__angular_core__["Optional"])()), __param(1, Object(__WEBPACK_IMPORTED_MODULE_8__angular_core__["Inject"])(API_BASE_URL)),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_9__angular_http__["b" /* Http */], String])
    ], EmployeesServiceProxy);
    return EmployeesServiceProxy;
}());

var PagedResultDtoOfEmployee = /** @class */ (function () {
    function PagedResultDtoOfEmployee(data) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
        }
    }
    PagedResultDtoOfEmployee.prototype.init = function (data) {
        if (data) {
            this.totalCount = data["totalCount"];
            if (data["items"] && data["items"].constructor === Array) {
                this.items = [];
                for (var _i = 0, _a = data["items"]; _i < _a.length; _i++) {
                    var item = _a[_i];
                    this.items.push(__WEBPACK_IMPORTED_MODULE_15__shared_service_proxies_entity_employee__["a" /* Employee */].fromJS(item));
                }
            }
        }
    };
    PagedResultDtoOfEmployee.fromJS = function (data) {
        var result = new PagedResultDtoOfEmployee();
        result.init(data);
        return result;
    };
    PagedResultDtoOfEmployee.prototype.toJSON = function (data) {
        data = typeof data === 'object' ? data : {};
        data["totalCount"] = this.totalCount;
        if (this.items && this.items.constructor === Array) {
            data["items"] = [];
            for (var _i = 0, _a = this.items; _i < _a.length; _i++) {
                var item = _a[_i];
                data["items"].push(item.toJSON());
            }
        }
        return data;
    };
    PagedResultDtoOfEmployee.prototype.clone = function () {
        var json = this.toJSON();
        var result = new PagedResultDtoOfEmployee();
        result.init(json);
        return result;
    };
    return PagedResultDtoOfEmployee;
}());

//#region 营销活动
var ActivityServiceProxy = /** @class */ (function () {
    function ActivityServiceProxy(http, baseUrl) {
        this.jsonParseReviver = undefined;
        this.http = http;
        this.baseUrl = baseUrl ? baseUrl : "";
    }
    /**
     * 通过消息id获取营销活动信息
     * @param id 消息id
     */
    ActivityServiceProxy.prototype.get = function () {
        var _this = this;
        var url_ = this.baseUrl + "/api/services/app/Activity/GetActivityByTenantIdAsync?";
        // if (id !== undefined)
        //     url_ += "Id=" + encodeURIComponent("" + id) + "&"; 
        url_ = url_.replace(/[?&]$/, "");
        var options_ = {
            method: "get",
            headers: new __WEBPACK_IMPORTED_MODULE_9__angular_http__["a" /* Headers */]({
                "Content-Type": "application/json",
                "Accept": "application/json"
            })
        };
        return this.http.request(url_, options_).flatMap(function (response_) {
            return _this.processGet(response_);
        }).catch(function (response_) {
            if (response_ instanceof __WEBPACK_IMPORTED_MODULE_9__angular_http__["f" /* Response */]) {
                try {
                    return _this.processGet(response_);
                }
                catch (e) {
                    return __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__["a" /* Observable */].throw(e);
                }
            }
            else
                return __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__["a" /* Observable */].throw(response_);
        });
    };
    ActivityServiceProxy.prototype.processGet = function (response) {
        var status = response.status;
        var _headers = response.headers ? response.headers.toJSON() : {};
        if (status === 200) {
            var _responseText = response.text();
            var result200 = null;
            var resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = resultData200 ? __WEBPACK_IMPORTED_MODULE_16__shared_service_proxies_entity_acitivity__["a" /* Activity */].fromJS(resultData200) : new __WEBPACK_IMPORTED_MODULE_16__shared_service_proxies_entity_acitivity__["a" /* Activity */]();
            return __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__["a" /* Observable */].of(result200);
        }
        else if (status === 401) {
            var _responseText = response.text();
            return throwException("A server error occurred.", status, _responseText, _headers);
        }
        else if (status === 403) {
            var _responseText = response.text();
            return throwException("A server error occurred.", status, _responseText, _headers);
        }
        else if (status !== 200 && status !== 204) {
            var _responseText = response.text();
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        }
        return __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__["a" /* Observable */].of(null);
    };
    /**
     * 新增或修改营销活动信息
     * @param input
     */
    ActivityServiceProxy.prototype.update = function (input) {
        var _this = this;
        var url_ = this.baseUrl + "/api/services/app/Activity/CreateOrUpdateWechatMessageDto";
        url_ = url_.replace(/[?&]$/, "");
        var content_ = JSON.stringify(input);
        var options_ = {
            body: content_,
            method: "post",
            headers: new __WEBPACK_IMPORTED_MODULE_9__angular_http__["a" /* Headers */]({
                "Content-Type": "application/json",
                "Accept": "application/json"
            })
        };
        return this.http.request(url_, options_).flatMap(function (response_) {
            return _this.processUpdate(response_);
        }).catch(function (response_) {
            if (response_ instanceof __WEBPACK_IMPORTED_MODULE_9__angular_http__["f" /* Response */]) {
                try {
                    return _this.processUpdate(response_);
                }
                catch (e) {
                    return __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__["a" /* Observable */].throw(e);
                }
            }
            else
                return __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__["a" /* Observable */].throw(response_);
        });
    };
    ActivityServiceProxy.prototype.processUpdate = function (response) {
        var status = response.status;
        var _headers = response.headers ? response.headers.toJSON() : {};
        if (status === 200) {
            var _responseText = response.text();
            var result200 = null;
            var resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = resultData200 ? __WEBPACK_IMPORTED_MODULE_16__shared_service_proxies_entity_acitivity__["a" /* Activity */].fromJS(resultData200) : new __WEBPACK_IMPORTED_MODULE_16__shared_service_proxies_entity_acitivity__["a" /* Activity */]();
            return __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__["a" /* Observable */].of(result200);
        }
        else if (status === 401) {
            var _responseText = response.text();
            return throwException("A server error occurred.", status, _responseText, _headers);
        }
        else if (status === 403) {
            var _responseText = response.text();
            return throwException("A server error occurred.", status, _responseText, _headers);
        }
        else if (status !== 200 && status !== 204) {
            var _responseText = response.text();
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        }
        return __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__["a" /* Observable */].of(null);
    };
    /**
    * @return Success
    */
    ActivityServiceProxy.prototype.delete = function (id) {
        var _this = this;
        var url_ = this.baseUrl + "/api/services/app/Activity/DeleteActivity?";
        if (id !== undefined)
            url_ += "Id=" + encodeURIComponent("" + id) + "&";
        url_ = url_.replace(/[?&]$/, "");
        var options_ = {
            method: "delete",
            headers: new __WEBPACK_IMPORTED_MODULE_9__angular_http__["a" /* Headers */]({
                "Content-Type": "application/json",
            })
        };
        return this.http.request(url_, options_).flatMap(function (response_) {
            return _this.processDelete(response_);
        }).catch(function (response_) {
            if (response_ instanceof __WEBPACK_IMPORTED_MODULE_9__angular_http__["f" /* Response */]) {
                try {
                    return _this.processDelete(response_);
                }
                catch (e) {
                    return __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__["a" /* Observable */].throw(e);
                }
            }
            else
                return __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__["a" /* Observable */].throw(response_);
        });
    };
    ActivityServiceProxy.prototype.processDelete = function (response) {
        var status = response.status;
        var _headers = response.headers ? response.headers.toJSON() : {};
        if (status === 200) {
            var _responseText = response.text();
            return __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__["a" /* Observable */].of(null);
        }
        else if (status === 401) {
            var _responseText = response.text();
            return throwException("A server error occurred.", status, _responseText, _headers);
        }
        else if (status === 403) {
            var _responseText = response.text();
            return throwException("A server error occurred.", status, _responseText, _headers);
        }
        else if (status !== 200 && status !== 204) {
            var _responseText = response.text();
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        }
        return __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__["a" /* Observable */].of(null);
    };
    ActivityServiceProxy = __decorate([
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_8__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_9__angular_http__["b" /* Http */])), __param(1, Object(__WEBPACK_IMPORTED_MODULE_8__angular_core__["Optional"])()), __param(1, Object(__WEBPACK_IMPORTED_MODULE_8__angular_core__["Inject"])(API_BASE_URL)),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_9__angular_http__["b" /* Http */], String])
    ], ActivityServiceProxy);
    return ActivityServiceProxy;
}());

var PagedResultDtoOfActivity = /** @class */ (function () {
    function PagedResultDtoOfActivity(data) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
        }
    }
    PagedResultDtoOfActivity.prototype.init = function (data) {
        if (data) {
            this.totalCount = data["totalCount"];
            if (data["items"] && data["items"].constructor === Array) {
                this.items = [];
                for (var _i = 0, _a = data["items"]; _i < _a.length; _i++) {
                    var item = _a[_i];
                    this.items.push(__WEBPACK_IMPORTED_MODULE_16__shared_service_proxies_entity_acitivity__["a" /* Activity */].fromJS(item));
                }
            }
        }
    };
    PagedResultDtoOfActivity.fromJS = function (data) {
        var result = new PagedResultDtoOfActivity();
        result.init(data);
        return result;
    };
    PagedResultDtoOfActivity.prototype.toJSON = function (data) {
        data = typeof data === 'object' ? data : {};
        data["totalCount"] = this.totalCount;
        if (this.items && this.items.constructor === Array) {
            data["items"] = [];
            for (var _i = 0, _a = this.items; _i < _a.length; _i++) {
                var item = _a[_i];
                data["items"].push(item.toJSON());
            }
        }
        return data;
    };
    PagedResultDtoOfActivity.prototype.clone = function () {
        var json = this.toJSON();
        var result = new PagedResultDtoOfActivity();
        result.init(json);
        return result;
    };
    return PagedResultDtoOfActivity;
}());

//#endregion








/***/ }),

/***/ "../../../../../src/app/shared/service-proxies/service-proxy.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServiceProxyModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_proxies__ = __webpack_require__("../../../../../src/app/shared/service-proxies/service-proxies.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__marketing_service_employee_service__ = __webpack_require__("../../../../../src/app/shared/service-proxies/marketing-service/employee-service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__marketing_service_activity_form_service__ = __webpack_require__("../../../../../src/app/shared/service-proxies/marketing-service/activity-form-service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_service_proxies_marketing_service_acticity_service__ = __webpack_require__("../../../../../src/app/shared/service-proxies/marketing-service/acticity-service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_service_proxies_marketing_service_activity_goods_service__ = __webpack_require__("../../../../../src/app/shared/service-proxies/marketing-service/activity-goods-service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_service_proxies_marketing_service__ = __webpack_require__("../../../../../src/app/shared/service-proxies/marketing-service/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var ServiceProxyModule = /** @class */ (function () {
    function ServiceProxyModule() {
    }
    ServiceProxyModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            providers: [
                __WEBPACK_IMPORTED_MODULE_1__service_proxies__["p" /* RoleServiceProxy */],
                __WEBPACK_IMPORTED_MODULE_1__service_proxies__["q" /* SessionServiceProxy */],
                __WEBPACK_IMPORTED_MODULE_1__service_proxies__["u" /* TenantServiceProxy */],
                __WEBPACK_IMPORTED_MODULE_1__service_proxies__["x" /* UserServiceProxy */],
                __WEBPACK_IMPORTED_MODULE_1__service_proxies__["v" /* TokenAuthServiceProxy */],
                __WEBPACK_IMPORTED_MODULE_1__service_proxies__["b" /* AccountServiceProxy */],
                __WEBPACK_IMPORTED_MODULE_1__service_proxies__["f" /* ConfigurationServiceProxy */],
                __WEBPACK_IMPORTED_MODULE_1__service_proxies__["j" /* DriverServiceProxy */],
                __WEBPACK_IMPORTED_MODULE_1__service_proxies__["d" /* AuthSettingServiceProxy */],
                __WEBPACK_IMPORTED_MODULE_1__service_proxies__["n" /* MessageServiceProxy */],
                __WEBPACK_IMPORTED_MODULE_1__service_proxies__["r" /* SubscribeServiceProxy */],
                __WEBPACK_IMPORTED_MODULE_2__marketing_service_employee_service__["a" /* EmployeeServiceProxy */],
                __WEBPACK_IMPORTED_MODULE_1__service_proxies__["k" /* EmployeesServiceProxy */],
                __WEBPACK_IMPORTED_MODULE_4__shared_service_proxies_marketing_service_acticity_service__["a" /* ActivityServiceProxy */],
                __WEBPACK_IMPORTED_MODULE_1__service_proxies__["c" /* ActivityServiceProxy */],
                __WEBPACK_IMPORTED_MODULE_3__marketing_service_activity_form_service__["a" /* ActivityFormServiceProxy */],
                __WEBPACK_IMPORTED_MODULE_5__shared_service_proxies_marketing_service_activity_goods_service__["a" /* ActivityGoodsServiceProxy */],
                __WEBPACK_IMPORTED_MODULE_6__shared_service_proxies_marketing_service__["a" /* ActivityBanquetServiceProxy */],
                __WEBPACK_IMPORTED_MODULE_6__shared_service_proxies_marketing_service__["b" /* ActivityDeliveryInfoServiceProxy */]
            ]
        })
    ], ServiceProxyModule);
    return ServiceProxyModule;
}());



/***/ }),

/***/ "../../../../../src/app/shared/session/app-session.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppSessionService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_service_proxies_service_proxies__ = __webpack_require__("../../../../../src/app/shared/service-proxies/service-proxies.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__abp_multi_tenancy_abp_multi_tenancy_service__ = __webpack_require__("../../../../abp-ng2-module/src/multi-tenancy/abp-multi-tenancy.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__delon_theme__ = __webpack_require__("../../../../@delon/theme/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



//alain stting

var AppSessionService = /** @class */ (function () {
    function AppSessionService(_sessionService, _abpMultiTenancyService, settingService) {
        this._sessionService = _sessionService;
        this._abpMultiTenancyService = _abpMultiTenancyService;
        this.settingService = settingService;
    }
    Object.defineProperty(AppSessionService.prototype, "application", {
        get: function () {
            return this._application;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppSessionService.prototype, "user", {
        get: function () {
            /*this._user = UserLoginInfoDto.fromJS({
                "name":'donald',
                "surname": 'tangdezhou',
                "userName": 'donald',
                "emailAddress": 'tangdezhou@qq.com',
                "id": 1
            });*/
            return this._user;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppSessionService.prototype, "userId", {
        get: function () {
            return this.user ? this.user.id : null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppSessionService.prototype, "tenant", {
        get: function () {
            return this._tenant;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppSessionService.prototype, "tenantId", {
        get: function () {
            return this.tenant ? this.tenant.id : null;
        },
        enumerable: true,
        configurable: true
    });
    AppSessionService.prototype.getShownLoginName = function () {
        var userName = this._user.userName;
        if (!this._abpMultiTenancyService.isEnabled) {
            return userName;
        }
        return (this._tenant ? this._tenant.tenancyName : ".") + "\\" + userName;
    };
    AppSessionService.prototype.init = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this._sessionService.getCurrentLoginInformations().toPromise().then(function (result) {
                _this._application = result.application;
                _this._user = result.user;
                _this._tenant = result.tenant;
                //添加Alain框架设置user
                if (_this._user) {
                    var user = { name: _this._user.name, email: _this._user.emailAddress };
                    _this.settingService.setUser(user); //目前abp setting和 alain setting还未整合到一起，先兼容 保留两个一起使用
                }
                resolve(true);
            }, function (err) {
                reject(err);
            });
        });
    };
    AppSessionService.prototype.changeTenantIfNeeded = function (tenantId) {
        if (this.isCurrentTenant(tenantId)) {
            return false;
        }
        abp.multiTenancy.setTenantIdCookie(tenantId);
        location.reload();
        return true;
    };
    AppSessionService.prototype.isCurrentTenant = function (tenantId) {
        if (!tenantId && this.tenant) {
            return false;
        }
        else if (tenantId && (!this.tenant || this.tenant.id !== tenantId)) {
            return false;
        }
        return true;
    };
    AppSessionService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_service_proxies_service_proxies__["q" /* SessionServiceProxy */],
            __WEBPACK_IMPORTED_MODULE_2__abp_multi_tenancy_abp_multi_tenancy_service__["a" /* AbpMultiTenancyService */],
            __WEBPACK_IMPORTED_MODULE_3__delon_theme__["h" /* SettingsService */]])
    ], AppSessionService);
    return AppSessionService;
}());



/***/ }),

/***/ "../../../../../src/app/shared/shared.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharedModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng_zorro_antd_extra__ = __webpack_require__("../../../../ng-zorro-antd-extra/bundles/ng-zorro-antd-extra.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng_zorro_antd_extra___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ng_zorro_antd_extra__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__delon_theme__ = __webpack_require__("../../../../@delon/theme/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__delon_acl__ = __webpack_require__("../../../../@delon/acl/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__delon_module__ = __webpack_require__("../../../../../src/app/delon.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ngx_translate_core__ = __webpack_require__("../../../../@ngx-translate/core/@ngx-translate/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ngx_countdown__ = __webpack_require__("../../../../ngx-countdown/bundles/ngx-countdown.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ngx_countdown___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_ngx_countdown__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




// delon




// i18n

// region: third libs

var THIRDMODULES = [__WEBPACK_IMPORTED_MODULE_9_ngx_countdown__["CountdownModule"]];
// endregion
// region: your componets & directives
var COMPONENTS = [];
var DIRECTIVES = [];
var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_3__angular_router__["i" /* RouterModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["ReactiveFormsModule"]
            ].concat(__WEBPACK_IMPORTED_MODULE_7__delon_module__["c" /* ZORROMODULES */], [
                __WEBPACK_IMPORTED_MODULE_4_ng_zorro_antd_extra__["NgZorroAntdExtraModule"],
                __WEBPACK_IMPORTED_MODULE_5__delon_theme__["b" /* AlainThemeModule */].forChild()
            ], __WEBPACK_IMPORTED_MODULE_7__delon_module__["a" /* ABCMODULES */], [
                __WEBPACK_IMPORTED_MODULE_6__delon_acl__["b" /* AlainACLModule */]
            ], THIRDMODULES),
            declarations: COMPONENTS.concat(DIRECTIVES),
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["ReactiveFormsModule"],
                __WEBPACK_IMPORTED_MODULE_3__angular_router__["i" /* RouterModule */]
            ].concat(__WEBPACK_IMPORTED_MODULE_7__delon_module__["c" /* ZORROMODULES */], [
                __WEBPACK_IMPORTED_MODULE_4_ng_zorro_antd_extra__["NgZorroAntdExtraModule"],
                __WEBPACK_IMPORTED_MODULE_5__delon_theme__["b" /* AlainThemeModule */]
            ], __WEBPACK_IMPORTED_MODULE_7__delon_module__["a" /* ABCMODULES */], [
                // i18n
                __WEBPACK_IMPORTED_MODULE_8__ngx_translate_core__["b" /* TranslateModule */]
            ], THIRDMODULES, COMPONENTS, DIRECTIVES)
        })
    ], SharedModule);
    return SharedModule;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    chore: false,
    SERVER_URL: "./",
    production: false,
    hmr: false,
    useHash: true
};


/***/ }),

/***/ "../../../../../src/hmr.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export hmrBootstrap */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angularclass_hmr__ = __webpack_require__("../../../../@angularclass/hmr/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angularclass_hmr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__angularclass_hmr__);


var hmrBootstrap = function (module, bootstrap) {
    var ngModule;
    module.hot.accept();
    bootstrap().then(function (mod) {
        if (window.appBootstrap) {
            window.appBootstrap();
        }
        ngModule = mod;
    });
    module.hot.dispose(function () {
        var appRef = ngModule.injector.get(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ApplicationRef"]);
        var elements = appRef.components.map(function (c) { return c.location.nativeElement; });
        var makeVisible = Object(__WEBPACK_IMPORTED_MODULE_1__angularclass_hmr__["createNewHosts"])(elements);
        ngModule.destroy();
        makeVisible();
    });
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__hmr__ = __webpack_require__("../../../../../src/hmr.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__delon_theme__ = __webpack_require__("../../../../@delon/theme/index.js");






Object(__WEBPACK_IMPORTED_MODULE_5__delon_theme__["m" /* preloaderFinished */])();
if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
else {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
var bootstrap = function () {
    return Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */], {
        defaultEncapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].Emulated,
        preserveWhitespaces: false
    });
};
if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].hmr) {
    if (false) {
        hmrBootstrap(module, bootstrap);
    }
    else {
        console.error('HMR is not enabled for webpack-dev-server!');
        console.log('Are you using the --hmr flag for ng serve?');
    }
}
else {
    bootstrap().then(function () {
        if (window.appBootstrap) {
            window.appBootstrap();
        }
    });
}


/***/ }),

/***/ "../../../../moment/locale recursive ^\\.\\/.*$":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "../../../../moment/locale/af.js",
	"./af.js": "../../../../moment/locale/af.js",
	"./ar": "../../../../moment/locale/ar.js",
	"./ar-dz": "../../../../moment/locale/ar-dz.js",
	"./ar-dz.js": "../../../../moment/locale/ar-dz.js",
	"./ar-kw": "../../../../moment/locale/ar-kw.js",
	"./ar-kw.js": "../../../../moment/locale/ar-kw.js",
	"./ar-ly": "../../../../moment/locale/ar-ly.js",
	"./ar-ly.js": "../../../../moment/locale/ar-ly.js",
	"./ar-ma": "../../../../moment/locale/ar-ma.js",
	"./ar-ma.js": "../../../../moment/locale/ar-ma.js",
	"./ar-sa": "../../../../moment/locale/ar-sa.js",
	"./ar-sa.js": "../../../../moment/locale/ar-sa.js",
	"./ar-tn": "../../../../moment/locale/ar-tn.js",
	"./ar-tn.js": "../../../../moment/locale/ar-tn.js",
	"./ar.js": "../../../../moment/locale/ar.js",
	"./az": "../../../../moment/locale/az.js",
	"./az.js": "../../../../moment/locale/az.js",
	"./be": "../../../../moment/locale/be.js",
	"./be.js": "../../../../moment/locale/be.js",
	"./bg": "../../../../moment/locale/bg.js",
	"./bg.js": "../../../../moment/locale/bg.js",
	"./bm": "../../../../moment/locale/bm.js",
	"./bm.js": "../../../../moment/locale/bm.js",
	"./bn": "../../../../moment/locale/bn.js",
	"./bn.js": "../../../../moment/locale/bn.js",
	"./bo": "../../../../moment/locale/bo.js",
	"./bo.js": "../../../../moment/locale/bo.js",
	"./br": "../../../../moment/locale/br.js",
	"./br.js": "../../../../moment/locale/br.js",
	"./bs": "../../../../moment/locale/bs.js",
	"./bs.js": "../../../../moment/locale/bs.js",
	"./ca": "../../../../moment/locale/ca.js",
	"./ca.js": "../../../../moment/locale/ca.js",
	"./cs": "../../../../moment/locale/cs.js",
	"./cs.js": "../../../../moment/locale/cs.js",
	"./cv": "../../../../moment/locale/cv.js",
	"./cv.js": "../../../../moment/locale/cv.js",
	"./cy": "../../../../moment/locale/cy.js",
	"./cy.js": "../../../../moment/locale/cy.js",
	"./da": "../../../../moment/locale/da.js",
	"./da.js": "../../../../moment/locale/da.js",
	"./de": "../../../../moment/locale/de.js",
	"./de-at": "../../../../moment/locale/de-at.js",
	"./de-at.js": "../../../../moment/locale/de-at.js",
	"./de-ch": "../../../../moment/locale/de-ch.js",
	"./de-ch.js": "../../../../moment/locale/de-ch.js",
	"./de.js": "../../../../moment/locale/de.js",
	"./dv": "../../../../moment/locale/dv.js",
	"./dv.js": "../../../../moment/locale/dv.js",
	"./el": "../../../../moment/locale/el.js",
	"./el.js": "../../../../moment/locale/el.js",
	"./en-au": "../../../../moment/locale/en-au.js",
	"./en-au.js": "../../../../moment/locale/en-au.js",
	"./en-ca": "../../../../moment/locale/en-ca.js",
	"./en-ca.js": "../../../../moment/locale/en-ca.js",
	"./en-gb": "../../../../moment/locale/en-gb.js",
	"./en-gb.js": "../../../../moment/locale/en-gb.js",
	"./en-ie": "../../../../moment/locale/en-ie.js",
	"./en-ie.js": "../../../../moment/locale/en-ie.js",
	"./en-nz": "../../../../moment/locale/en-nz.js",
	"./en-nz.js": "../../../../moment/locale/en-nz.js",
	"./eo": "../../../../moment/locale/eo.js",
	"./eo.js": "../../../../moment/locale/eo.js",
	"./es": "../../../../moment/locale/es.js",
	"./es-do": "../../../../moment/locale/es-do.js",
	"./es-do.js": "../../../../moment/locale/es-do.js",
	"./es-us": "../../../../moment/locale/es-us.js",
	"./es-us.js": "../../../../moment/locale/es-us.js",
	"./es.js": "../../../../moment/locale/es.js",
	"./et": "../../../../moment/locale/et.js",
	"./et.js": "../../../../moment/locale/et.js",
	"./eu": "../../../../moment/locale/eu.js",
	"./eu.js": "../../../../moment/locale/eu.js",
	"./fa": "../../../../moment/locale/fa.js",
	"./fa.js": "../../../../moment/locale/fa.js",
	"./fi": "../../../../moment/locale/fi.js",
	"./fi.js": "../../../../moment/locale/fi.js",
	"./fo": "../../../../moment/locale/fo.js",
	"./fo.js": "../../../../moment/locale/fo.js",
	"./fr": "../../../../moment/locale/fr.js",
	"./fr-ca": "../../../../moment/locale/fr-ca.js",
	"./fr-ca.js": "../../../../moment/locale/fr-ca.js",
	"./fr-ch": "../../../../moment/locale/fr-ch.js",
	"./fr-ch.js": "../../../../moment/locale/fr-ch.js",
	"./fr.js": "../../../../moment/locale/fr.js",
	"./fy": "../../../../moment/locale/fy.js",
	"./fy.js": "../../../../moment/locale/fy.js",
	"./gd": "../../../../moment/locale/gd.js",
	"./gd.js": "../../../../moment/locale/gd.js",
	"./gl": "../../../../moment/locale/gl.js",
	"./gl.js": "../../../../moment/locale/gl.js",
	"./gom-latn": "../../../../moment/locale/gom-latn.js",
	"./gom-latn.js": "../../../../moment/locale/gom-latn.js",
	"./gu": "../../../../moment/locale/gu.js",
	"./gu.js": "../../../../moment/locale/gu.js",
	"./he": "../../../../moment/locale/he.js",
	"./he.js": "../../../../moment/locale/he.js",
	"./hi": "../../../../moment/locale/hi.js",
	"./hi.js": "../../../../moment/locale/hi.js",
	"./hr": "../../../../moment/locale/hr.js",
	"./hr.js": "../../../../moment/locale/hr.js",
	"./hu": "../../../../moment/locale/hu.js",
	"./hu.js": "../../../../moment/locale/hu.js",
	"./hy-am": "../../../../moment/locale/hy-am.js",
	"./hy-am.js": "../../../../moment/locale/hy-am.js",
	"./id": "../../../../moment/locale/id.js",
	"./id.js": "../../../../moment/locale/id.js",
	"./is": "../../../../moment/locale/is.js",
	"./is.js": "../../../../moment/locale/is.js",
	"./it": "../../../../moment/locale/it.js",
	"./it.js": "../../../../moment/locale/it.js",
	"./ja": "../../../../moment/locale/ja.js",
	"./ja.js": "../../../../moment/locale/ja.js",
	"./jv": "../../../../moment/locale/jv.js",
	"./jv.js": "../../../../moment/locale/jv.js",
	"./ka": "../../../../moment/locale/ka.js",
	"./ka.js": "../../../../moment/locale/ka.js",
	"./kk": "../../../../moment/locale/kk.js",
	"./kk.js": "../../../../moment/locale/kk.js",
	"./km": "../../../../moment/locale/km.js",
	"./km.js": "../../../../moment/locale/km.js",
	"./kn": "../../../../moment/locale/kn.js",
	"./kn.js": "../../../../moment/locale/kn.js",
	"./ko": "../../../../moment/locale/ko.js",
	"./ko.js": "../../../../moment/locale/ko.js",
	"./ky": "../../../../moment/locale/ky.js",
	"./ky.js": "../../../../moment/locale/ky.js",
	"./lb": "../../../../moment/locale/lb.js",
	"./lb.js": "../../../../moment/locale/lb.js",
	"./lo": "../../../../moment/locale/lo.js",
	"./lo.js": "../../../../moment/locale/lo.js",
	"./lt": "../../../../moment/locale/lt.js",
	"./lt.js": "../../../../moment/locale/lt.js",
	"./lv": "../../../../moment/locale/lv.js",
	"./lv.js": "../../../../moment/locale/lv.js",
	"./me": "../../../../moment/locale/me.js",
	"./me.js": "../../../../moment/locale/me.js",
	"./mi": "../../../../moment/locale/mi.js",
	"./mi.js": "../../../../moment/locale/mi.js",
	"./mk": "../../../../moment/locale/mk.js",
	"./mk.js": "../../../../moment/locale/mk.js",
	"./ml": "../../../../moment/locale/ml.js",
	"./ml.js": "../../../../moment/locale/ml.js",
	"./mr": "../../../../moment/locale/mr.js",
	"./mr.js": "../../../../moment/locale/mr.js",
	"./ms": "../../../../moment/locale/ms.js",
	"./ms-my": "../../../../moment/locale/ms-my.js",
	"./ms-my.js": "../../../../moment/locale/ms-my.js",
	"./ms.js": "../../../../moment/locale/ms.js",
	"./mt": "../../../../moment/locale/mt.js",
	"./mt.js": "../../../../moment/locale/mt.js",
	"./my": "../../../../moment/locale/my.js",
	"./my.js": "../../../../moment/locale/my.js",
	"./nb": "../../../../moment/locale/nb.js",
	"./nb.js": "../../../../moment/locale/nb.js",
	"./ne": "../../../../moment/locale/ne.js",
	"./ne.js": "../../../../moment/locale/ne.js",
	"./nl": "../../../../moment/locale/nl.js",
	"./nl-be": "../../../../moment/locale/nl-be.js",
	"./nl-be.js": "../../../../moment/locale/nl-be.js",
	"./nl.js": "../../../../moment/locale/nl.js",
	"./nn": "../../../../moment/locale/nn.js",
	"./nn.js": "../../../../moment/locale/nn.js",
	"./pa-in": "../../../../moment/locale/pa-in.js",
	"./pa-in.js": "../../../../moment/locale/pa-in.js",
	"./pl": "../../../../moment/locale/pl.js",
	"./pl.js": "../../../../moment/locale/pl.js",
	"./pt": "../../../../moment/locale/pt.js",
	"./pt-br": "../../../../moment/locale/pt-br.js",
	"./pt-br.js": "../../../../moment/locale/pt-br.js",
	"./pt.js": "../../../../moment/locale/pt.js",
	"./ro": "../../../../moment/locale/ro.js",
	"./ro.js": "../../../../moment/locale/ro.js",
	"./ru": "../../../../moment/locale/ru.js",
	"./ru.js": "../../../../moment/locale/ru.js",
	"./sd": "../../../../moment/locale/sd.js",
	"./sd.js": "../../../../moment/locale/sd.js",
	"./se": "../../../../moment/locale/se.js",
	"./se.js": "../../../../moment/locale/se.js",
	"./si": "../../../../moment/locale/si.js",
	"./si.js": "../../../../moment/locale/si.js",
	"./sk": "../../../../moment/locale/sk.js",
	"./sk.js": "../../../../moment/locale/sk.js",
	"./sl": "../../../../moment/locale/sl.js",
	"./sl.js": "../../../../moment/locale/sl.js",
	"./sq": "../../../../moment/locale/sq.js",
	"./sq.js": "../../../../moment/locale/sq.js",
	"./sr": "../../../../moment/locale/sr.js",
	"./sr-cyrl": "../../../../moment/locale/sr-cyrl.js",
	"./sr-cyrl.js": "../../../../moment/locale/sr-cyrl.js",
	"./sr.js": "../../../../moment/locale/sr.js",
	"./ss": "../../../../moment/locale/ss.js",
	"./ss.js": "../../../../moment/locale/ss.js",
	"./sv": "../../../../moment/locale/sv.js",
	"./sv.js": "../../../../moment/locale/sv.js",
	"./sw": "../../../../moment/locale/sw.js",
	"./sw.js": "../../../../moment/locale/sw.js",
	"./ta": "../../../../moment/locale/ta.js",
	"./ta.js": "../../../../moment/locale/ta.js",
	"./te": "../../../../moment/locale/te.js",
	"./te.js": "../../../../moment/locale/te.js",
	"./tet": "../../../../moment/locale/tet.js",
	"./tet.js": "../../../../moment/locale/tet.js",
	"./th": "../../../../moment/locale/th.js",
	"./th.js": "../../../../moment/locale/th.js",
	"./tl-ph": "../../../../moment/locale/tl-ph.js",
	"./tl-ph.js": "../../../../moment/locale/tl-ph.js",
	"./tlh": "../../../../moment/locale/tlh.js",
	"./tlh.js": "../../../../moment/locale/tlh.js",
	"./tr": "../../../../moment/locale/tr.js",
	"./tr.js": "../../../../moment/locale/tr.js",
	"./tzl": "../../../../moment/locale/tzl.js",
	"./tzl.js": "../../../../moment/locale/tzl.js",
	"./tzm": "../../../../moment/locale/tzm.js",
	"./tzm-latn": "../../../../moment/locale/tzm-latn.js",
	"./tzm-latn.js": "../../../../moment/locale/tzm-latn.js",
	"./tzm.js": "../../../../moment/locale/tzm.js",
	"./uk": "../../../../moment/locale/uk.js",
	"./uk.js": "../../../../moment/locale/uk.js",
	"./ur": "../../../../moment/locale/ur.js",
	"./ur.js": "../../../../moment/locale/ur.js",
	"./uz": "../../../../moment/locale/uz.js",
	"./uz-latn": "../../../../moment/locale/uz-latn.js",
	"./uz-latn.js": "../../../../moment/locale/uz-latn.js",
	"./uz.js": "../../../../moment/locale/uz.js",
	"./vi": "../../../../moment/locale/vi.js",
	"./vi.js": "../../../../moment/locale/vi.js",
	"./x-pseudo": "../../../../moment/locale/x-pseudo.js",
	"./x-pseudo.js": "../../../../moment/locale/x-pseudo.js",
	"./yo": "../../../../moment/locale/yo.js",
	"./yo.js": "../../../../moment/locale/yo.js",
	"./zh-cn": "../../../../moment/locale/zh-cn.js",
	"./zh-cn.js": "../../../../moment/locale/zh-cn.js",
	"./zh-hk": "../../../../moment/locale/zh-hk.js",
	"./zh-hk.js": "../../../../moment/locale/zh-hk.js",
	"./zh-tw": "../../../../moment/locale/zh-tw.js",
	"./zh-tw.js": "../../../../moment/locale/zh-tw.js"
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
webpackContext.id = "../../../../moment/locale recursive ^\\.\\/.*$";

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map