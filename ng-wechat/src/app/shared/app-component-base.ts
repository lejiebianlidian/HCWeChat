import { Injector } from '@angular/core';
import { Platform } from 'ionic-angular';
import { WeChat } from '../core/index';

export abstract class AppComponentBase implements IAppComponentBase {
    weChat: WeChat;
    constructor(injector: Injector) {
        let platform = injector.get(Platform);
        this.weChat = new WeChat();
        this.weChat.Code = platform.getQueryParam('code');
        this.weChat.State = platform.getQueryParam('state');
    }
}

export interface IAppComponentBase {

}
