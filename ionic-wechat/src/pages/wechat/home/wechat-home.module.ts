import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { WechatHome } from './wechat-home';

@NgModule({
  declarations: [
    WechatHome,
  ],
  imports: [
    IonicPageModule.forChild(WechatHome),
  ],
})
export class WeChatHomeModule {}
