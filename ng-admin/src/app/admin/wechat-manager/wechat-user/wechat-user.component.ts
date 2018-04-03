import { Component, OnInit, Injector } from '@angular/core';
import { AppComponentBase } from '@shared/app-component-base';
import { WechatUserServiceProxy } from '@shared/service-proxies/wechat-manager/wechat-user-service';

@Component({
    moduleId: module.id,
    selector: 'wechat-user',
    templateUrl: 'wechat-user.component.html',
    styleUrls: ['wechat-user.component.scss']
})
export class WechatUserComponent extends AppComponentBase implements OnInit {
    constructor(injector:Injector,private wechatUserService:WechatUserServiceProxy){
        super(injector);
    }
    ngOnInit(): void {

    }
    refreshData(){

    }

    unBinding(){
        
    }
}
