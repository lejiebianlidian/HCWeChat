import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UserBindComponent } from './user-bind.component';

@NgModule({
  declarations: [
    UserBindComponent,
  ],
  imports: [
    IonicPageModule.forChild(UserBindComponent),
  ],
})
export class UserBindComponentModule {}