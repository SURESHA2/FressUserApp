import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,Platform } from 'ionic-angular';
// import { DragulaService } from 'ng2-dragula/ng2-dragula';

/**
 * Generated class for the ExchangePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-exchange',
  templateUrl: 'exchange.html',
  
})
export class ExchangePage {
   Exchange: string = "Page";
  isAndroid: boolean = false;

  constructor(public navCtrl: NavController, 
  	          public navParams: NavParams,
  	          public platform: Platform,
              // private dragula: DragulaService
  	) {
  	// this.dragula.setOptions('bag-items',{
   //    revertOnSpil:true
   //  });
   this.isAndroid = platform.is('android');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ExchangePage');
  }

 

}
