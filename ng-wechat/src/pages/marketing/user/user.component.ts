import { Component, Injector } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AppComponentBase } from '../../../app/shared/app-component-base';
import { User } from '../../../app/core/index';

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
}
