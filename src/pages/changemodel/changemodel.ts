import { Component, ViewEncapsulation,OnInit, ChangeDetectorRef, EventEmitter, Output  } from '@angular/core';
import { IonicPage, NavController, NavParams,ViewController,LoadingController,ToastController,MenuController } from 'ionic-angular';
import { Subject } from 'rxjs/Subject';
import { FormBuilder, FormGroup,FormControl,Validators } from '@angular/forms';
import { SetupService } from '../../providers/setup.services';

/**
 * Generated class for the ChangemodelPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-changemodel',
  templateUrl: 'changemodel.html',
})
export class ChangemodelPage {
	prop: string;
    addressDetails: any= { btc: '', stx: '' };

 constructor(public navCtrl: NavController,
 	public viewCtrl:ViewController, 
 	private fb: FormBuilder,
 	public toastCtrl: ToastController,
 	public menuCtrl: MenuController, 
 	public navParams: NavParams,
 	public _setupService: SetupService,
 	public loadingCtrl: LoadingController) {
}
  ionViewDidLoad() {
    console.log('ionViewDidLoad ChangemodelPage');
  }

Open(){

}


Close(){

}

dismiss() {
    this.viewCtrl.dismiss();
  }
}