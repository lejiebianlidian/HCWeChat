import { Component, OnInit } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd';
import { _HttpClient } from '@delon/theme';
import { ActivatedRoute } from '@angular/router';
import { ActivityFormDto, ActivityBanquetDto, ActivityDeliveryInfoDto } from '@shared/service-proxies/entity';

@Component({
    selector: 'activity-form-detail',
    templateUrl: './activity-form-detail.component.html',
    styles: [`
    :host ::ng-deep .ant-card-meta-title {
        margin-bottom: 4px;
    }
    :host ::ng-deep nz-list nz-card {
        margin-bottom: 0 !important;
    }
    :host ::ng-deep .card-item-content {
        display: flex;
        margin-top: 16px;
        margin-bottom: -4px;
        line-height: 20px;
        height: 20px;
        justify-content: space-between;
    }
    `]
})
export class ActivityFormDetailComponent implements OnInit {
    formId: string;
    form: ActivityFormDto;
    formTitle: string;
    banquet: ActivityBanquetDto;
    delivery: ActivityDeliveryInfoDto;

    list: any[] = [ ];
    loading = true;

    constructor(public msg: NzMessageService, private http: _HttpClient, public route: ActivatedRoute) {
        this.formId = this.route.snapshot.params['id'];
        //alert( this.formId);
    }

    ngOnInit() {
        this.getData();
        this.formTitle = '单号：' + this.form.formCode + ' 状态：' + this.form.statusName;

        
    }

    getData() {
        //表单
        this.form = ActivityFormDto.fromJS({formCode:'123456'});
        //宴席信息
        this.banquet = ActivityBanquetDto.fromJS({ area: '宜宾城区'});
        this.loading = true;
        this.http.get('/api/list', { count: 4 }).subscribe((res: any) => {
            this.list = this.list.concat(res).map(item => {
                return item;
            });
            this.loading = false;
        });

        //收货信息
        this.delivery = ActivityDeliveryInfoDto.fromJS({address:'aaa'});
    }
}
