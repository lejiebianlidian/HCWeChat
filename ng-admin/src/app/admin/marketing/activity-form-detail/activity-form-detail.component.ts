import { Component, OnInit, ViewChild, Injector } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd';
import { _HttpClient } from '@delon/theme';
import { ActivatedRoute } from '@angular/router';
import { ActivityFormDto, ActivityBanquetDto, ActivityDeliveryInfoDto, ActivityFormStatusDto } from '@shared/service-proxies/entity';
import { ActivityFormServiceProxy } from '@shared/service-proxies/marketing-service/activity-form-service';
import { ActivityBanquetServiceProxy, ActivityDeliveryInfoServiceProxy } from '@shared/service-proxies/marketing-service';
import { ApprovalComponent } from '../approval/approval.component';
import { AppComponentBase } from '@shared/app-component-base';

@Component({
    selector: 'activity-form-detail',
    templateUrl: './activity-form-detail.component.html',
    styleUrls: ['./activity-form-detail.component.scss']
})
export class ActivityFormDetailComponent extends AppComponentBase implements OnInit {

    @ViewChild('approvalModal') approvalModal: ApprovalComponent;

    formId: string;
    form: ActivityFormDto;
    formTitle: string;
    banquet: ActivityBanquetDto;
    delivery: ActivityDeliveryInfoDto;

    list: any[] = [];
    loading = true;

    constructor(injector: Injector,
        public msg: NzMessageService, private http: _HttpClient,
        public route: ActivatedRoute,
        private activityFormService: ActivityFormServiceProxy,
        private activityBanquetService: ActivityBanquetServiceProxy,
        private activityDeliveryService: ActivityDeliveryInfoServiceProxy
    ) {
        super(injector);
        this.formId = this.route.snapshot.params['id'];
        //alert( this.formId);
    }

    ngOnInit() {
        this.getData();
    }

    getData() {
        //表单
        this.getFormData();

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

    getFormData(){
        this.activityFormService.get(this.formId).subscribe(result => {
            this.form = result;
            this.formTitle = '单号：' + this.form.formCode + ' 状态：' + this.form.statusName;
        });
    }

    //初审
    firstApproval(){
        let formStatus = new ActivityFormStatusDto();
        formStatus.status = 2;
        formStatus.opinion = "初审通过";
        formStatus.id = this.formId;
        this.approvalModal.show(formStatus);
    }
    //取消
    cancel(){
        let formStatus = new ActivityFormStatusDto();
        formStatus.status = 5;
        formStatus.opinion = "取消";
        formStatus.id = this.formId;
        this.approvalModal.show(formStatus);
    }
    //拒绝
    reject(){
        let formStatus = new ActivityFormStatusDto();
        formStatus.status = 3;
        formStatus.opinion = "拒绝";
        formStatus.id = this.formId;
        this.approvalModal.show(formStatus);
    }
    //终审
    approval(){
        if (this.banquet.id == null || this.banquet.id == '') {
            this.notify.error('请先回传宴席资料');
            return;
        }
        let formStatus = new ActivityFormStatusDto();
        formStatus.status = 4;
        formStatus.opinion = "资料回传审核通过";
        formStatus.id = this.formId;
        this.approvalModal.show(formStatus);
    }
}
