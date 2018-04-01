import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
//import { PlatformService } from 'kl/core';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage: any = 'wechat-home';
  //pageId: number;
  //@ViewChild(Nav) nav: Nav;

  constructor(
    platform: Platform,
    private statusBar: StatusBar,
    private splashScreen: SplashScreen
    //private platformService: PlatformService
  ) {

    //设置启动页
    //this.pageId = platform.getQueryParam('pageId');
    //console.log("pageId:"+this.pageId);
    //this.goWechatPage();

    platform.ready().then(() => {
      this.splashScreen.hide();

      if (platform.is('ios') || platform.is('android')) {
        this.statusBar.styleDefault();
      }
      // 注册返回按键事件
      //this.platformService.rootNav = this.nav;
      //this.platformService.registerBackButton();
    });
  }

  /*goWechatPage() {
    if (this.pageId == 1) {
      this.rootPage = 'user-bind';
    } else if (this.pageId == 2) {
      this.rootPage = 'user';
    }
  }*/
}
