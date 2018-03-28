import { UserBindComponent } from './user-bind/user-bind.component';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UserComponent } from './user/user.component';

const _components = [
  UserBindComponent,
  UserComponent
]
@NgModule({
  declarations: [
    ..._components
  ],
  entryComponents: [
    ..._components
  ],
  imports: [
    IonicPageModule.forChild(_components)
  ],
  exports: [
    _components
  ]
})
export class MarketingModule { }
