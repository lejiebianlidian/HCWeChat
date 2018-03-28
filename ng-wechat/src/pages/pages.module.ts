import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { SharedModule } from '../app/shared';
import { WechatHome } from './wechat-home/wechat-home';
import { MarketingModule } from './marketing/marketing.module';

const _modules = [
    IonicModule,
    SharedModule,
    MarketingModule
];

const _pages = [
    WechatHome
];

@NgModule({
    imports: [
        ..._modules
    ],
    exports: [],
    declarations: [
        ..._pages
    ],
    entryComponents: [
        ..._pages
    ],
    providers: [],
})
export class PagesModule { }
