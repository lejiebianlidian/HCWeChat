import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthSetting } from '@shared/service-proxies/entity/auth-setting';

@Component({
    moduleId: module.id,
    selector: 'auth-setting',
    templateUrl: 'auth-setting.component.html',
})
export class AuthSettingComponent implements OnInit {
    form: FormGroup;
    authSet: AuthSetting = new AuthSetting();
    constructor(private fb: FormBuilder) {

    }
    ngOnInit(): void {
        this.form = this.fb.group({
            name: [null, [Validators.compose([Validators.maxLength(50), Validators.required])]],
            appOrgId: [null, [Validators.compose([Validators.required, Validators.maxLength(250)])]],
            appType: [null, [Validators.required]],
            appId: [null, [Validators.compose([Validators.required, Validators.maxLength(250)])]],
            appSecret: [null, [Validators.compose([Validators.required, Validators.maxLength(250)])]],
            qrCodeUrl: [null, [Validators.maxLength(250)]],
            token: [null, [Validators.compose([Validators.required, Validators.maxLength(250)])]],
            accessToken: [null, [Validators.maxLength(255)]],
            expiresIn: [null],
            nextGettime: [null]
        });
    }
    getFormControl(name: string) {
        return this.form.controls[name];
    }
}
