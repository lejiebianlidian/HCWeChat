import { Component, OnInit, Injector, ViewChild } from '@angular/core';
import { MessageServiceProxy, PagedResultDtoOfMessage, SubscribeServiceProxy } from '@shared/service-proxies/service-proxies';
import { Messagess } from '@shared/service-proxies/entity/messages';
import { Subscribess } from '@shared/service-proxies/entity/subscribe';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AppComponentBase } from '@shared/app-component-base';
import { EditMessageComponent } from './edit-message/edit-message.component';

@Component({
    moduleId: module.id,
    selector: 'messages',
    templateUrl: 'messages.component.html',
})
export class MessagesComponent extends AppComponentBase implements OnInit {
    @ViewChild('editMessageModal') editMessageModal: EditMessageComponent;

    q: any = {
        pi: 1,
        ps: 10,
        total: 0,
        sorter: '',
        status: -1,
        statusList: []
    };
    loading = false;
    mesText: string = '';
    isConfirmLoading = false;
    messagess: Messagess[] = [];
    subscribes: Subscribess = new Subscribess();
    form: FormGroup;
    constructor(injector: Injector, private messageService: MessageServiceProxy, private subscribeService: SubscribeServiceProxy, private fb: FormBuilder) {
        super(injector);
    }
    /**
     * 页面初始加载
     */
    ngOnInit(): void {
        this.getMessgeAll();
        this.getSubscribe();
        this.form = this.fb.group({
            msgType: [null, [Validators.compose([Validators.required])]],
            content: [null, [Validators.compose([Validators.required])]]
        }, );
    }
    //#region 自动回复消息

    /**
     * 获取自动回复消息信息
     * @param reset 
     */
    getMessgeAll(reset = false) {
        if (reset) {
            this.q.pi = 1;
        }
        this.loading = true;
        this.messageService.getAll((this.q.pi - 1) * this.q.ps, this.q.ps).subscribe((result: PagedResultDtoOfMessage) => {
            this.loading = false;
            let status = 0;
            this.messagess = result.items;
            this.q.total = result.totalCount;
        });
    }

    /**
     * 新建自动回复消息
     */
    createMessage() {

    }

    /**
     * 更新自动回复消息
     */
    editMessage(message: Messagess) {
        this.editMessageModal.show(message.id);
    }

    //#endregion

    //#region  关注回复消息 
    /**
     * 获取关注回复消息
     */
    getSubscribe() {
        this.subscribeService.get().subscribe((result: Subscribess) => {
            this.subscribes = result;
        });
    }
    /**
     * 
     * @param name 
     */
    getFormControl(name: string) {
        return this.form.controls[name];
    }

    /**
     * 保存关注回复消息
     */
    save(): void {
        for (const i in this.form.controls) {
            this.form.controls[i].markAsDirty();
        }
        if (this.form.valid) {
            this.subscribeService.update(this.subscribes)
                .finally(() => { this.isConfirmLoading = false; })
                .subscribe(() => {
                    this.notify.info(this.l('保存成功'));
                });
        }
    }
    //#endregion
}
