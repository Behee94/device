import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,private alertCtrl: AlertController) {

  }
  demarrer(){
    this.navCtrl.push('EssaiPage');
  }
  ale() {
  
    let alert = this.alertCtrl.create({
      title: '  صناعة التطبيقات',
      subTitle:' يعمل هذا التطبيق للسماح للمستخدمين لحساب تكلفة تطوير تطبيقات الهاتف المحمول في المستقبل.',
      message:'حساب سريع ودقيق. في أقل من دقيقة ، يمكنك الحصول على فكرة تقريبية عن تكلفة تطبيق ما لتحسين عملك.',
      buttons: ['حسنا']
    });
    alert.present();
  }

}
