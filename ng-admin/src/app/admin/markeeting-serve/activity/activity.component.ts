import { Component, OnInit, Injector } from '@angular/core';
import { AppComponentBase } from '@shared/app-component-base';
import { ActivityServiceProxy } from '@shared/service-proxies/service-proxies';
import { Activity } from '@shared/service-proxies/entity/acitivity';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivityGoods } from '@shared/service-proxies/entity/activitygoods';
import { ActivityGoodsServiceProxy } from '@shared/service-proxies/marketing-service/activity-goods-service';

@Component({
    moduleId: module.id,
    selector: 'activity',
    templateUrl: 'activity.component.html',
})
export class ActivityComponent extends AppComponentBase implements OnInit {

    q: any = {
        pi: 1,
        ps: 10,
        total: 0,
        sorter: '',
        status: -1,
        statusList: [],
        search: ''
    };
    acitivityDto: Activity = new Activity;
    goodes:ActivityGoods=new ActivityGoods;
    html = '';
    formA: FormGroup;
    constructor(injector: Injector, private activityService: ActivityServiceProxy, 
        private fb: FormBuilder,private activityGoodsService:ActivityGoodsServiceProxy,
    ) {
        super(injector);
    }

    /**
     * 页面初始加载
     */
    ngOnInit(): void {
        this.formA = this.fb.group({
            name: [null, Validators.compose([Validators.required, Validators.maxLength(200)])],
            beginTime: [null, Validators.compose([Validators.required])],
            endTime: [null, [Validators.required]],
            activityType: [null, Validators.compose([Validators.required])],
            mUnfinished: [null],
            rUnfinished: [null],
            content: [null, Validators.compose([Validators.required])],
            status: [null],
            publishTime: [null],
        });
    }
    //#region 活动

    /**
     * 
     * @param name 
     */
    getFormControl(name:string) {
       return this.formA.controls[name];
    }

    //#endregion

    //#region 活动商品

    refreshData(){

    }
    //#endregion
}
