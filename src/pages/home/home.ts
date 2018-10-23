import { Component } from '@angular/core';
import { NavController , LoadingController} from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { Http } from '@angular/http';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  private ques:any=[];
  question:string;
  description:string;
  img:string;
  loading:any;
  constructor(public navCtrl: NavController,private alertCtrl: AlertController,public http: Http
  ,private loadingCtrl:LoadingController) {
    this.presentLoadingCustom();
    this.http.get("http://vps513308.ovh.net:8000/api/questions").subscribe((response)=> {
     // console.log(response.json());
     this.loading.dismiss();
     this.ques=response.json();
      console.log(this.ques[0].urlImage);
      this.question=this.ques[0].name;
      this.description=this.ques[0].description
      this.img=this.ques[0].urlImage;
      this.ques.splice(0, 1);
      console.log(this.ques);
    })

  }
  demarrer(){
    this.navCtrl.push('EssaiPage',{ques:this.ques});
  }
  ale() {
  
    let alert = this.alertCtrl.create({
      title: '  تسعيرة تطبيقي',
      subTitle:' بالاجابة على بعض الأسئلة، اعرف كلفة تطبيقك الذي تنوي برمجته بطريقة سهلة وسريعة.',
      message:'ملاحظة : السعر المُقترح عبر التطبيق ليس نهائيا، إنّما هو سعر تقديري حسب معطيات السوق. يبقى تحديد السعر بين العميل وشركة البرمجة خاضعا لتوفير كراس الشروط وعقد البرمجة.',
      buttons: ['حسنا']
    });
    alert.present();
  }
  presentLoadingCustom() {
    this.loading = this.loadingCtrl.create({
       spinner: 'hide',
       content: `<div class="lds-grid"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>`,
     });

     this.loading.present();
   }

}
