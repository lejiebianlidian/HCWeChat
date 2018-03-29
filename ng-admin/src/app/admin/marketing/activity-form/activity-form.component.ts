import { Component, Injector, OnInit, ViewChild } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd';
//import { getRule, saveRule, removeRule } from '../../../../_mock/rule.service';
import { ActivityFormDto } from '@shared/service-proxies/entity';
import { ActivityFormServiceProxy, PagedResultDtoOfActivityForm } from '@shared/service-proxies/marketing-service/activity-form-service';

import { AppComponentBase } from '@shared/app-component-base';

@Component({
    selector: 'app-page-activity-form',
    templateUrl: './activity-form.component.html'
})
export class ActivityFormComponent extends AppComponentBase implements OnInit {

    q: any = {
        pi: 1,
        ps: 10,
        total: 0,
        sorter: '',
        status: -1,
        statusList: []
    };
    data: ActivityFormDto[] = [];
    loading = false;
    selectedRows: any[] = [];
    curRows: any[] = [];
    totalCallNo = 0;
    indeterminate = false;
    sortMap: any = {};
    expandForm = false;

    constructor(injector: Injector, public msg: NzMessageService, private _ActivityFormService: ActivityFormServiceProxy) {
        super(injector);
    }

    ngOnInit() {
        this.refreshData();
    }


    clear() {
        this.selectedRows = [];
        this.totalCallNo = 0;
    } 

    refreshData(reset = false) {
        if (reset) {
            this.q.pi = 1;
        }
        this.loading = true;
        this._ActivityFormService.getAll((this.q.pi - 1) * this.q.ps, this.q.ps, '').subscribe((result: PagedResultDtoOfActivityForm) => {
            this.loading = false;
            let status = 0;
            this.q.total = result.totalCount;
        })
    };

    reset(ls: any[]) {
        for (const item of ls) item.value = false;
        this.refreshData();
    }
}
