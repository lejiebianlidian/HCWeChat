import { Component, OnInit, } from '@angular/core';
import { AppConsts } from '@shared/AppConsts';

@Component({
    selector: 'file-upload',
    templateUrl: './file-upload.component.html'
})
export class FileUploadComponent implements OnInit {

    host: string;
    data: any = [{ number:1, text:2}];
    constructor() {
    }

    ngOnInit() {
        this.host = AppConsts.remoteServiceBaseUrl;
    }
    
}
