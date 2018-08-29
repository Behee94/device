import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams , LoadingController } from 'ionic-angular';
import { Slides } from 'ionic-angular';
import { ViewChild } from '@angular/core';
import { Http } from '@angular/http';
import { AlertController } from 'ionic-angular';

/**
 * Generated class for the EssaiPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-essai',
  templateUrl: 'essai.html',
})
export class EssaiPage {
  @ViewChild(Slides) slides: Slides;
  private ques:any=[];
  i:number;
  g:number;
  ss:number;
  tab:any[]=[]; 
  rep:any[]=[]; 
  que:any[]=[]; 
  us:string;
  le:number;
  el:number;
  ind:number;
  loading:any;
  constructor(public navCtrl: NavController, public navParams: NavParams,
    public http: Http,private alertCtrl: AlertController,private loadingCtrl:LoadingController) {
    this.ss=0;
  }

  ionViewDidEnter() {
    this.presentLoadingCustom();
    this.slides.lockSwipes(true);
    console.log(this.slides.getActiveIndex());
    console.log(this.slides.length());
    this.el=this.slides.getActiveIndex();
    this.le=this.slides.length()-1;
    this.http.get("http://127.0.0.1:8000/api/questions").subscribe((response)=> {
     // console.log(response.json());
     this.ques=response.json();
     this.loading.dismiss();
      //console.log(this.ques);
  
    })
    if(this.le==this.el){
      this.ind=this.tab.length;
      this.ss=this.ss-this.tab[this.ind-1];
      this.tab.pop();
    }
    console.log(this.rep);
    console.log(this.tab);
    
  }
  presentLoadingCustom() {
    this.loading = this.loadingCtrl.create({
       spinner: 'hide',
       content: `<div class="lds-grid"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>`,
     });

     this.loading.present();
   }
  nav(q,last,qname?){
    //console.log(last);
   console.log();
    this.slides.lockSwipes(false);
    if(!last){
    this.i=0;
    this.g=this.slides.length();
   // console.log(this.slides.getActiveIndex());
    this.i=this.slides.getActiveIndex();
    this.i++;
    this.slides.slideTo(this.i);
    setTimeout(() => {
      this.slides.lockSwipes(true);
    }, 10);
    console.log(q.coast);
    this.tab.push(q.coast);
    this.rep.push(q);
    console.log(this.slides.getActiveIndex());
    console.log(this.tab);
    console.log(this.rep);
    this.ss=q.coast+this.ss;
   //console.log(this.slides.length());
  }else{
    this.tab.push(q.coast);
    this.ss=q.coast+this.ss;
    this.rep.push(q);
    console.log(this.rep);
    this.navCtrl.push('FinPage',{somme:this.ss,reponses:this.rep,listquest:this.ques.map(res=>res.name).toString()});
    console.log(this.ss);
    
  }


}
  back(index){
    
    if(index==0)
    {
      console.log('fff');
      this.navCtrl.pop();
    }
    else{
    this.slides.lockSwipes(false);
    this.i=this.slides.getActiveIndex();
    this.i--;
    this.slides.slideTo(this.i);
    setTimeout(() => {
      this.slides.lockSwipes(true);
    }, 10);
    this.ss=this.ss-this.tab[this.i];
    this.tab.pop();
    this.rep.pop();
    console.log(this.tab);
    console.log(this.rep);
   }
   }
   click(){
    let alert = this.alertCtrl.create({
      title: 'شركة براعة المحدودة',
      subTitle:'8111 التخصصي - المحمدية - وحدة رقم 215 3282 - 12363 الرياض - المملكة العربية السعودية',
      message:'info@baraah.sa',
      buttons: ['حسنا']
    });
    alert.present();
  }
  backg(){

  }
}

