import { Component, OnInit, Injector } from '@angular/core';
import { Driver, DriverServiceProxy, PagedResultDtoOfDriver } from '@shared/service-proxies/service-proxies';

@Component({
    moduleId: module.id,
    selector: 'driver',
    templateUrl: 'driver.component.html',
    styleUrls: ['driver.component.scss']
})
export class DriverComponent implements OnInit {
    q: any = {
        pi: 1,
        ps: 10,
        total: 0,
        sorter: '',
        status: -1,
        statusList: []
    };
    loading = false;
    code: string = '';
    data: Driver[] = [];
    constructor(injector: Injector, private service: DriverServiceProxy) {

    }
    ngOnInit(): void {
        this.getDriverAll();
    }

    getDriverAll(reset = false) {
        if (reset) {
            this.q.pi = 1;
        }
        this.loading = true;
        this.service.getAll((this.q.pi - 1) * this.q.ps, this.q.ps).subscribe((result: PagedResultDtoOfDriver) => {
            this.loading = false;
            let status = 0;
            this.data = result.items.map(i => {
                // if (i.isActive) {
                //     status = 0;
                // } else {
                //     status = 1;
                // }
                // const statusItem = this.status[status];
                // i.activeText = statusItem.text;
                // i.activeType = statusItem.type;
                return i;
            })
            this.q.total = result.totalCount;
        })
    }
}
