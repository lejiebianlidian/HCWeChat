import { NzMessageService } from 'ng-zorro-antd';
import { Component, OnInit } from '@angular/core';
import { _HttpClient } from '@delon/theme';
import { AppSessionService } from '@shared/session/app-session.service';

@Component({
    selector: 'app-home-index',
    templateUrl: './index.component.html'
})
export class IndexComponent implements OnInit {

    constructor(private http: _HttpClient, public msg: NzMessageService, private _appSessionService: AppSessionService) { }

    todoData: any[] = [
        { completed: true, avatar: '1', name: '苏者名', content: `订货流程是什么样的？` },
        { completed: false, avatar: '2', name: '杨太', content: `我想咨询如何订货` },
        { completed: false, avatar: '3', name: '李红', content: `我想咨询如何参加本次活动` },
        { completed: false, avatar: '4', name: '曾开', content: `你们的营销电话是多少` }
    ];

    quickMenu = false;

    webSite: any[] = [ ];
    salesData: any[] =  [ ];
    offlineChartData: any[] = [];
    roleName: string = '';

    ngOnInit() {
        this.http.get('/chart').subscribe((res: any) => {
            this.webSite = res.visitData.slice(0, 10);
            this.salesData = res.salesData;
            this.offlineChartData = res.offlineChartData;
        });
        let roles = this._appSessionService.roles;
        if (roles.includes('HostAdmin')) {
            this.roleName += '系统管理员';
        }
        if (roles.includes('Admin')) {
            this.roleName += '管理员';
        }

        if (roles.includes('MarketingCenter')) {
            this.roleName += ' 营销中心';
        }

        if (roles.includes('CustomerManager')) {
            this.roleName += ' 客户经理';
        }
    }
}
