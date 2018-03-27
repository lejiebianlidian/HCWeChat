import { Component, OnInit, Injector, Output, EventEmitter } from '@angular/core';
import { AppComponentBase } from '@shared/app-component-base';
import { MessageServiceProxy } from '@shared/service-proxies/service-proxies';
import { Messagess } from '@shared/service-proxies/entity/messages';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
    moduleId: module.id,
    selector: 'create-message-modal',
    templateUrl: 'create-message.component.html',
})
export class CreateMessageComponent extends AppComponentBase implements OnInit {
    @Output() modalSave: EventEmitter<any> = new EventEmitter<any>();

    //模态框是否可见
    modalVisible = false;
    //加载效果
    isConfirmLoading = false;
    messages: Messagess = new Messagess();
    form: FormGroup;
    constructor(injector: Injector, private messageService: MessageServiceProxy, private fb: FormBuilder) {
        super(injector);
    }
    /**
     * 页面初始加载
     */
    ngOnInit(): void {
        this.form = this.fb.group({
            keyWord: [null, [Validators.compose([Validators.required, Validators.maxLength(50)])]],
            matchMode: [null],
            content: [null, [Validators.compose([Validators.required])]]
        });
    }
    /**
     * 显示模态框（进入新增页）
     */
    show() {
        this.modalVisible = true;
    }

    /**
     * 取消按钮事件
     */
    handleCancel = (e) => {
        this.modalVisible = false;
        this.isConfirmLoading = false;
        this.reset(e);
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

    /**
     * 
     * @param name 
     */
    getFormControl(name: string) {
        return this.form.controls[name];
    }

    /**
     * 保存关键字回复信息
     */
    save(): void {
        this.messageService.update(this.messages)
            .finally(() => {
                this.isConfirmLoading = false;
            })
            .subscribe(() => {
                this.notify.info(this.l('保存成功！'));
                this.modalVisible = false;
                this.modalSave.emit(null);
            });
    }
}
