import { Component, Injector } from '@angular/core';
import { IonicPage, NavController, Platform } from 'ionic-angular';
import { AppComponentBase } from '../../app-component-base';
import { Retailer, Employee } from '../../../../kl/model/index';

@IonicPage({
  name: 'user-bind'
})
@Component({
  selector: 'user-bind-component',
  templateUrl: 'user-bind.component.html',
})
export class UserBindComponent extends AppComponentBase {

  pet: string = 'retailer';
  isAndroid: boolean = false;
  retailer: Retailer;
  employee: Employee;

  constructor(injector: Injector, platform: Platform, public navCtrl: NavController) {
    super(injector);
    this.isAndroid = platform.is('android');
    this.retailer = new Retailer();
    this.retailer.Name = '刘洁';
    this.retailer.LicenseKey = '1510250201010041';

    this.employee = new Employee();
    this.employee.Name = '李钢';
    this.employee.Code = 'YB0001';
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UserBindComponent');
  }

  bind() {
    this.navCtrl.push('user');
  }
}
