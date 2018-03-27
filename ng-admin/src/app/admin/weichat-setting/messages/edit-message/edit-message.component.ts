import { Component, OnInit, Injector, Output, EventEmitter } from '@angular/core';
import { MessageServiceProxy } from '@shared/service-proxies/service-proxies';
import { Messagess } from '@shared/service-proxies/entity/messages';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AppComponentBase } from '@shared/app-component-base';

@Component({
    moduleId: module.id,
    selector: 'edit-message-modal',
    templateUrl: 'edit-message.component.html',
})
export class EditMessageComponent extends AppComponentBase implements OnInit {
    @Output() modalSave: EventEmitter<any> = new EventEmitter<any>();

    messages: Messagess = new Messagess();
    modalVisible=false;
    isConfirmLoading = false;
    form:FormGroup;
    constructor(injector:Injector ,private messageService: MessageServiceProxy,private fb:FormBuilder) {
        super(injector);
    }

    /**
     * 页面初始加载
     */
    ngOnInit(): void {
        this.form = this.fb.group({
            keyWord: [null, [Validators.compose([Validators.required, Validators.maxLength(50)])]],
            matchMode: [null],
            content: [null,[Validators.compose([Validators.required])]]
        });
    }

    /**
     * 进入编辑页方法
     * @param id 
     */
    show(id: number) {
       this.getMessageById(id);
       this.modalVisible=true;
    }
     /**
     * 
     * @param name 
     */
    getFormControl(name: string) {
        return this.form.controls[name];
    }
    /**
     * 取消按钮
     */
    handleCancel(){
        this.modalVisible = false;
        this.isConfirmLoading = false;
        this.reset();
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
     * 获取单条自动回复消息
     * @param id 自动回复消息id
     */
    getMessageById(id:number){
        this.messageService.get(id).subscribe((result: Messagess) => {
            this.messages = result;
        })
    }

    /**
     * 保存自动回复信息
     */
    save(){
        //将控件标记为已编辑过
        for(const i in this.form.controls){
            this.form.controls[i].markAsDirty();
        }
        if(this.form.valid){
            this.messageService.update(this.messages)
            .finally(()=>{this.isConfirmLoading=false;})
            .subscribe(()=>{
                this.notify.info(this.l('保存成功！'));
                this.modalVisible=false;
                this.modalSave.emit(null);
            });
        }
    }
}
