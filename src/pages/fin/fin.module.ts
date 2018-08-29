import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FinPage } from './fin';

@NgModule({
  declarations: [
    FinPage,
  ],
  imports: [
    IonicPageModule.forChild(FinPage),
  ],
})
export class FinPageModule {}
