import { Component, Injector } from '@angular/core';
import { NavController } from 'ionic-angular';
import { UserBindComponent } from '../marketing/user-bind/user-bind.component';
import { AppComponentBase } from '../../app/shared/app-component-base';
import { UserComponent } from '../../pages/marketing/user/user.component';
import { WeChat } from '../../app/core/index';

@Component({
    selector: 'wechat-home',
    templateUrl: 'wechat-home.html'
})
export class WechatHome extends AppComponentBase {

    constructor(injector: Injector, public navCtrl: NavController) {
        super(injector);
    }

    goUserBind() {
        console.log("goUserBind");
        this.navCtrl.push(UserBindComponent);
    }

    goUser() {
        console.log("goUser");
        this.navCtrl.push(UserComponent);
    }

}
