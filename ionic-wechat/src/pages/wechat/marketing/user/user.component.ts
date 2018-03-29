import { Component, Injector } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { AppComponentBase } from '../../app-component-base';
import { User } from '../../../../kl/model/index';

@IonicPage({
    name: 'user'
})
@Component({
    selector: 'user-component',
    templateUrl: 'user.component.html',
})
export class UserComponent extends AppComponentBase {
    user: User;

    constructor(injector: Injector, public navCtrl: NavController) {
        super(injector);
        this.user = new User();
        this.user.Name = '唐德舟';
        this.user.UserTypeName = '零售客户';
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad UserComponent');
    }
}
