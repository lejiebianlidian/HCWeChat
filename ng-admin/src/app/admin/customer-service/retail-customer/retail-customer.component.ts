import { Component, OnInit, Injector } from '@angular/core';
import { AppComponentBase } from '@shared/app-component-base';

@Component({
    moduleId: module.id,
    selector: 'retail-customer',
    templateUrl: 'retail-customer.component.html',
})
export class RetailCustomerComponent extends AppComponentBase implements OnInit {
    constructor(injector:Injector){
        super(injector);
    }
    ngOnInit(): void {
    }
}
