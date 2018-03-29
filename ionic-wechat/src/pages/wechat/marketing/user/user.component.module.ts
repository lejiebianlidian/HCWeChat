import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UserComponent } from './user.component';

@NgModule({
  declarations: [
    UserComponent,
  ],
  imports: [
    IonicPageModule.forChild(UserComponent),
  ],
})
export class UserComponentModule {}
