import { Router, ActivatedRoute } from '@angular/router';
import { Component, Injector, ElementRef, ViewChild, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AppComponentBase } from '@shared/app-component-base';

import { LoginService } from './login.service';
import { AbpSessionService } from 'abp-ng2-module/src/session/abp-session.service';

@Component({
  selector: 'app-pages-login',
  templateUrl: './login.component.html'
})
export class LoginComponent extends AppComponentBase implements OnInit {

  valForm: FormGroup;
  @ViewChild('cardBody') cardBody: ElementRef;
  //@ViewChild('tenantChangeModal') tenantChangeModal: TenantComponent;
  submitting: boolean = false;
  //租户
  tenancyName: string = '';
  name: string = '';

  constructor(injector: Injector, public loginService: LoginService, fb: FormBuilder, private router: Router, private route: ActivatedRoute, private sessionServer:AbpSessionService) {
    super(injector);
    loginService.rememberMe = true;
    this.valForm = fb.group({
      userNameOrEmailAddress: [null, Validators.required],//[null, Validators.compose([Validators.required, Validators.email])],
      password: [null, Validators.required],
      rememberMe: [null]
    });
    var tenancyId = this.route.snapshot.paramMap.get('id');
    console.log("tenancyId:"+tenancyId);
    //alert(tenancyId)
    if(tenancyId == '1'){
      abp.multiTenancy.setTenantIdCookie(undefined);
    } else if(tenancyId == '2'){
      abp.multiTenancy.setTenantIdCookie(2);
    } else {
      abp.multiTenancy.setTenantIdCookie(2);//默认宜宾
    }
  }

  login(): void {
    // tslint:disable-next-line:forin
    for (const i in this.valForm.controls) {
      this.valForm.controls[i].markAsDirty();
    }
    if (this.valForm.valid) {
      this.submitting = true;
      this.loginService.authenticate(
        () => {
          this.submitting = false;
        }
      );
    }
  }
  get multiTenancySideIsTeanant(): boolean {
    return this.sessionServer.tenantId > 0;
}
  ngOnInit(): void {
    if (this.appSession.tenant) {
      this.tenancyName = this.appSession.tenant.tenancyName;
      this.name = this.appSession.tenant.name;
    }
  }

}
