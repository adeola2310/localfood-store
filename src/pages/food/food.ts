import { Component,ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams,ViewController, ModalController } from 'ionic-angular';

import { FavoritePage } from '../favorite/favorite';
import { HomePage } from '../home/home';
import { YamPage } from '../yam/yam';
import { SemovitaPage } from "../semovita/semovita";
import { WheatPage } from "../wheat/wheat";
import { SplashScreen } from '@ionic-native/splash-screen';

import {  Nav,Platform  } from 'ionic-angular';
/**
 * Generated class for the FoodPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-food',
  templateUrl: 'food.html',
})
export class FoodPage {
    @ViewChild('xonsd') nav: Nav;

  // constructor(public navCtrl: NavController, public navParams: NavParams) {
  // }

rootPage:any = HomePage;
  pages: Array<{title: string, component: any}>;

     constructor(platform: Platform,public navCtrl: NavController,  splashScreen: SplashScreen, public modalCtrl : ModalController, public viewCtrl : ViewController) {
    platform.ready().then(() => {
      this.pages= [
        {title: 'favorite Page', component: FavoritePage}
      ];

      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      // statusBar.styleDefault();
      splashScreen.hide();

    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FoodPage');
  }
 openPage(page){
    if(this.nav)
      this.nav.setRoot(page.component);
    console.log(this.nav);
  }
  

  modalOpen(page){
    console.log(page);
    var data = { message : 'hello world' };
    var page_;
    switch(page){
      case 'yam' :
        page_ = YamPage;
        break;
      case 'semovita' :
        page_ = SemovitaPage;
        break;
        case 'wheat' :
        page_ = WheatPage;
        break;
      default:
        return;
    }
    var modalPage = this.modalCtrl.create(page_,data);
    modalPage.present();
  }

  modalClose(){

  }


}
  
