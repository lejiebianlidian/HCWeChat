import { Component, OnInit, Injector } from '@angular/core';
import { AppConsts } from '@shared/AppConsts';
import { NzMessageService, UploadFile } from 'ng-zorro-antd';
import { AppComponentBase } from '@shared/app-component-base';

@Component({
    selector: 'file-upload',
    templateUrl: './file-upload.component.html'
})
export class FileUploadComponent extends AppComponentBase implements OnInit {

    host: string;
    data: any = [{ number:1, text:2}];
    constructor(injector: Injector, private msgService: NzMessageService) {
        super(injector);
    }

    ngOnInit() {
        this.host = AppConsts.remoteServiceBaseUrl;
    }

    beforeExcelUpload = (file: UploadFile): boolean => {
        //console.table(file);
        if(!file.name.includes('.xlsx')){
            this.notify.error('上传文件必须是Excel文件(*.xlsx)');
            //this.msgService.error('上传文件必须是Excel文件(*.xlsx)');
            return false;
        }
        return true;
      }
    
      beforeJpgUpload = (file: UploadFile): boolean => {
        //console.table(file);
        if(!file.name.includes('.jpg')){
            this.notify.error('上传图片必须是jpg格式(*.jpg)');
            //this.msgService.error('上传图片必须是jpg格式(*.jpg)');
            return false;
        }
        return true;
      }

      handleChange = (info: { file: UploadFile }): void => {
          //console.table(info);
          
        if (info.file.status === 'error') {
            this.notify.error('上传文件异常，请重试');
        }
        if (info.file.status === 'done') {
            this.notify.success('上传文件完成');

        }
    }
    
}
