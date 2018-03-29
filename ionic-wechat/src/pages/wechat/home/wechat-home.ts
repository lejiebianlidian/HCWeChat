import { Component, Injector } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AppComponentBase } from '../app-component-base';

@IonicPage({
    name: 'wechat-home'
})
@Component({
    selector: 'wechat-home-component',
    templateUrl: 'wechat-home.html'
})
export class WechatHome extends AppComponentBase {

    constructor(injector: Injector, public navCtrl: NavController, public navParams: NavParams) {
        super(injector);
        //alert(this.weChat.Code)
        //alert(this.weChat.State)
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad WechatHome');
    }

    goUserBind() {
        console.log("goUserBind");
        this.navCtrl.push('user-bind');
    }

    goUser() {
        console.log("goUser");
        this.navCtrl.push('user');
    }

}
