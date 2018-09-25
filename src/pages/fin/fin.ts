import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams , ModalController} from 'ionic-angular';
import { Http } from '@angular/http';
import{EssaiPage} from '../essai/essai';

/**
 * Generated class for the FinPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-fin',
  templateUrl: 'fin.html',
})
export class FinPage {
  private prix:number;
  private rep:any=[];
  tab:any[]=[];
  tabques:any[]=[]; 
  listquest:any;
  private ind:number;

  constructor(public navCtrl: NavController, public navParams: NavParams,public http: Http,
    public modalCtrl: ModalController) {
    this.prix = this.navParams.get('somme');
    this.tab = this.navParams.get('reponses');
    this.listquest = this.navParams.get('listquest');
    
    console.log(this.tab);
    
    //console.log(this.prix);
    this.http.get("http://vps513308.ovh.net:8000/api/setting/reduction").subscribe((response)=> {
      console.log(response.json());
      this.rep=response.json();
    });
    
  }
  back(){
    this.ind=this.tab.length;
    //console.log(this.tab[this.ind-1]);
    this.prix=this.prix-this.tab[this.ind-1].coast
    console.log(this.prix);
    this.tab.pop();
    console.log(this.tab);
    this.navCtrl.pop();
   }

   vers(){
    this.navCtrl.push("CallPage",{repo:this.tab,listquest:this.listquest});
  }
  
//<a>أحصل على تخفيض 10%</a>   <a href="http://vps513308.ovh.net:8080/">أحصل على تطبيقك</a> 
  

}
