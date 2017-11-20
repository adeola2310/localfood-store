import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { YamPage } from './yam';

@NgModule({
  declarations: [
    YamPage,
  ],
  imports: [
    IonicPageModule.forChild(YamPage),
  ],
})
export class YamPageModule {}
