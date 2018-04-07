import { Component, Injector, OnInit, ViewChild } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd';
import { ActivityViewDto, Parameter } from '@shared/service-proxies/entity';
import { ActivityFormServiceProxy, PagedResultOfActivityView } from '@shared/service-proxies/marketing-service/activity-form-service';

import { AppComponentBase } from '@shared/app-component-base';
import { Router } from '@angular/router';

@Component({
    selector: 'app-page-activity-view',
    templateUrl: './activity-view.component.html'
})
export class ActivityViewComponent extends AppComponentBase implements OnInit {
    data: ActivityViewDto[] = [];
    loading = false;
    parameters: any = { beginDate: null, endDate: null };


    constructor(injector: Injector, public msg: NzMessageService, private _ActivityFormService: ActivityFormServiceProxy, private _router: Router) {
        super(injector);
    }

    ngOnInit() {
        this.refreshData();
    }

    refreshData(reset = false) {
        if (reset) {
            this.query.pageIndex = 1;
        }
        this.loading = true;

        this._ActivityFormService.getView(this.query.skipCount(), this.query.pageSize, this.getParameter()).subscribe((result: PagedResultOfActivityView) => {
            this.loading = false;
            let status = 0;
            this.query.total = result.totalCount;
            this.data = result.items;
        })
    };

    getParameter(): Parameter[] {
        let parray = [];   
        parray.push(Parameter.fromJS({ key: 'BeginDate', value: this.dateFormat(this.parameters.beginDate) }));
        parray.push(Parameter.fromJS({ key: 'EndDate', value: this.dateFormat(this.parameters.endDate) }));
        parray.push(Parameter.fromJS({ key: 'ActivityArea', value: this.parameters.activityArea }));
        parray.push(Parameter.fromJS({ key: 'ManagerName', value: this.parameters.managerName }));
        parray.push(Parameter.fromJS({ key: 'GoodsSpecification', value: this.parameters.goodsSpecification }));
        return parray;
    }
}
