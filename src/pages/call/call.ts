import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, LoadingController } from 'ionic-angular';
import { FormBuilder, Validators } from '@angular/forms';
import { Http ,RequestOptions,Headers } from '@angular/http';
import { HomePage } from '../home/home';
/**
 * Generated class for the CallPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-call',
  templateUrl: 'call.html',
})
export class CallPage {

  private loginForm:any;
  name:string;
  email:string;
  message:string;
  somo:string;
  mob:number;
  listquest:any;
  loading:any;
  private submit:boolean=false; 
  tab:any[]=[];
  constructor(public navCtrl: NavController, public navParams: NavParams, 
    private fb: FormBuilder,public http: Http,private toastCtrl: ToastController,
  private loadingCtrl:LoadingController) {
    this.loginForm=fb.group({
      "nom":["",Validators.compose([Validators.required])],
      "mail":["",Validators.compose([Validators.required,Validators.pattern("^[a-zA-Z0-9._]+[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$")])],
      "msg":["",Validators.compose([Validators.required])],
      "mobile":["",Validators.compose([Validators.required])]

  });
      this.tab = this.navParams.get('repo');
      this.listquest = this.navParams.get('listquest');
      console.log(this.tab);
   }
   
   back()
    {
    this.navCtrl.pop();
    }

   click(){
     this.submit=true;
     
     let userCredentials = 
     {
      "reponses": this.tab.map(res=>res.name).toString(),
     "name": this.name, 
     "email": this.email,
     "mobile": this.mob,
     "description": this.message, 
     "questions":this.listquest, 
     }
     
   if(this.loginForm.valid){
         
    let toast= this.toastCtrl.create({
      message: 'تم حفظ البيانات',
      duration: 3000,
      position: 'bottom'
    });
    this.presentLoadingCustom();
     this.http.post("http://vps513308.ovh.net:8000/api/contact", userCredentials).subscribe((data)=> {
      console.log(data); 
      this.loading.dismiss();
      toast.present();
      this.navCtrl.setRoot(HomePage);
      });
      
     }
     
     }


     presentLoadingCustom() {
     this.loading = this.loadingCtrl.create({
        spinner: 'hide',
        content: `<div class="lds-grid"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>`,
      });

      this.loading.present();
    }
}

