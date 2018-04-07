import { Component, ViewChild, Injector, Output, EventEmitter, ElementRef, OnInit } from '@angular/core';
import { ActivityBanquetDto } from '@shared/service-proxies/entity';
import { UploadFile } from 'ng-zorro-antd';
import { AppComponentBase } from '@shared/app-component-base';
import { FormGroup, FormBuilder, Validators, FormControl, AsyncValidatorFn, AbstractControl } from '@angular/forms';

import { Observable } from 'rxjs/Observable';
import { ActivityBanquetServiceProxy } from '@shared/service-proxies/marketing-service';

//import * as _ from "lodash";

@Component({
    selector: 'edit-banquet-modal',
    templateUrl: './edit-banquet.component.html',
    styles: [`
    :host ::ng-deep i {
        font-size: 32px;
        color: #999;
    }
    :host ::ng-deep .ant-upload-text {
        margin-top: 8px;
        color: #666;
    }
    `]
})
export class EditBanquetComponent extends AppComponentBase implements OnInit {

    @Output() modalSave: EventEmitter<any> = new EventEmitter<any>();
    title: string = '宴席信息';

    modalVisible = false;
    isConfirmLoading = false;
    isDisablec = false;
    banquetDto: ActivityBanquetDto = null;
    form: FormGroup;

    fileList = [{
        uid: '-1',
        name: 'xxx.png',
        status: 'done',
        url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    }];
    previewImage = '';
    previewVisible = false;

    constructor(
        injector: Injector,
        private _activityBanquetService: ActivityBanquetServiceProxy,
        private fb: FormBuilder
    ) {
        super(injector);
    }

    ngOnInit(): void {
        this.form = this.fb.group({
            area: [null, [Validators.required]],
            responsible: [null, [Validators.required, Validators.maxLength(50)]],
            executor: [null, [Validators.required, Validators.maxLength(50)]],
            banquetTime: [null, [Validators.required]],
            position: [null, [Validators.required, Validators.maxLength(500)]],
            num: [null, [Validators.required]],
            desc: [null, [Validators.required, Validators.maxLength(500)]],
        });
    }

    handlePreview = (file: UploadFile) => {
        this.previewImage = file.url || file.thumbUrl;
        this.previewVisible = true;
      }
    

    show(delivery: ActivityBanquetDto): void {
        this.reset();
        this.banquetDto = delivery;
        this.modalVisible = true;
        //对isDisablec做初始化
        this.isDisablec = false;
    }

    save(isSave = false): void {
        for (const i in this.form.controls) {
            this.form.controls[i].markAsDirty();
        }
        this.banquetDto.photoUrl = 'test.jpg';
        if (this.form.valid) {
            this._activityBanquetService.update(this.banquetDto)
                .finally(() => { this.isConfirmLoading = false; })
                .subscribe(() => {
                    this.notify.info('保存成功！');
                    this.close();
                    this.modalSave.emit(null);
                });
        }
    }

    close(): void {
        this.modalVisible = false;
        //this.modal.hide();
    }

    handleCancel = (e) => {
        this.modalVisible = false;
        this.isConfirmLoading = false;
        this.reset(e);
    }

    getFormControl(name: string) {
        return this.form.controls[name];
    }

    reset(e?): void {
        if (e) {
            e.preventDefault();
        }
        this.form.reset();
        for (const key in this.form.controls) {
            this.form.controls[key].markAsPristine();
        }
    }

    handleChange(info: { file: UploadFile }): void {
        this._activityBanquetService.upload(info.file).subscribe(result => {
            
        });
    }
}
