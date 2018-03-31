import { Component, OnInit } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd';
import { _HttpClient } from '@delon/theme';
import { ActivatedRoute } from '@angular/router';
import { ActivityFormDto, ActivityBanquetDto, ActivityDeliveryInfoDto } from '@shared/service-proxies/entity';
import { ActivityFormServiceProxy } from '@shared/service-proxies/marketing-service/activity-form-service';
import { ActivityBanquetServiceProxy, ActivityDeliveryInfoServiceProxy } from '@shared/service-proxies/marketing-service';

@Component({
    selector: 'activity-form-detail',
    templateUrl: './activity-form-detail.component.html',
    styleUrls: ['./activity-form-detail.component.scss']
})
export class ActivityFormDetailComponent implements OnInit {
    formId: string;
    form: ActivityFormDto;
    formTitle: string;
    banquet: ActivityBanquetDto;
    delivery: ActivityDeliveryInfoDto;

    list: any[] = [];
    loading = true;

    constructor(public msg: NzMessageService, private http: _HttpClient,
        public route: ActivatedRoute,
        private activityFormService: ActivityFormServiceProxy,
        private activityBanquetService: ActivityBanquetServiceProxy,
        private activityDeliveryService: ActivityDeliveryInfoServiceProxy
    ) {
        this.formId = this.route.snapshot.params['id'];
        //alert( this.formId);
    }

    ngOnInit() {
        this.getData();
    }

    getData() {
        //表单
        this.activityFormService.get(this.formId).subscribe(result => {
            this.form = result;
            this.formTitle = '单号：' + this.form.formCode + ' 状态：' + this.form.statusName;
        });

        //宴席信息
        this.banquet = ActivityBanquetDto.fromJS({ area: '宜宾城区' });
        this.loading = true;
        this.http.get('/api/list', { count: 4 }).subscribe((res: any) => {
            this.list = this.list.concat(res).map(item => {
                return item;
            });
            this.loading = false;
        });

        this.activityBanquetService.getByFormId(this.formId).subscribe(result => {
            this.banquet = result;
        });

        //收货信息
        this.activityDeliveryService.getByFormId(this.formId).subscribe(result => {
            this.delivery = result;
        });
    }
}
