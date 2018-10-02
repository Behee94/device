import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EssaiPage } from './essai';
import { IonicImageLoader } from 'ionic-image-loader';
@NgModule({
  declarations: [
    EssaiPage,
  ],
  imports: [
    IonicPageModule.forChild(EssaiPage),
    IonicImageLoader
  ],
})
export class EssaiPageModule {}
