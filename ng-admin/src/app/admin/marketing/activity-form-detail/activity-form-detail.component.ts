import { Component, OnInit } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd';
import { _HttpClient } from '@delon/theme';

@Component({
    selector: 'activity-form-detail',
    templateUrl: './activity-form-detail.component.html'
})
export class ActivityFormDetailComponent implements OnInit {
    data = {
        advancedOperation1: [],
        advancedOperation2: [],
        advancedOperation3: []
    };

    constructor(public msg: NzMessageService, private http: _HttpClient) {}

    ngOnInit() {
        this.http.get('/profile/advanced').subscribe(res => this.data = res);
    }
}
