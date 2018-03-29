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

    constructor(injector: Injector, public msg: NzMessageService, private _ActivityFormService: ActivityFormServiceProxy) {
        super(injector);
    }

    ngOnInit() {
        this.refreshData();
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
            this.data = result.items;
        })
    };
}
