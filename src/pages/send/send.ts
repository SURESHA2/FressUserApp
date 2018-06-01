import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { NavController,Platform, NavParams,AlertController,LoadingController,ToastController} from 'ionic-angular';
import { SetupService } from '../../providers/setup.services';
import { SendOption,SendDetail } from '../../interfaces/user-options';
import { UserData } from '../../providers/user-data';
import { NgForm } from '@angular/forms';
/**
 * Generated class for the SendPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-send',
  templateUrl: 'send.html',
})
export class SendPage {
  responseData:any;

  user:any;
  email:any;

  public submitted = false;
  senddetails: SendDetail = { userMailId:'', amount: '', address: '', spendingPassword: '' };
  send: SendOption = { amount: '', spendingPassword: '' };
  constructor(public userData: UserData,
  public navCtrl: NavController,
  public navParams: NavParams,
  public _setupService: SetupService,
  public alertCtrl: AlertController,
  public toastCtrl: ToastController,
  public loadingCtrl: LoadingController,
  public platform: Platform
   ) {
   var user =JSON.parse(localStorage.getItem('logindetail'));
   this.email = user.trader.email;
   let backAction =  platform.registerBackButtonAction(() => {
       this.navCtrl.pop();
       backAction();

      },)

  }


onsendBalance(Form: NgForm){
  this.senddetails.userMailId=this.email;
  this.submitted = true;
  if (Form.valid) {
       //this.userData.(this.send.amount);
       let loading = this.loadingCtrl.create({
      content: 'transaction is procced...'
     });
       loading.present();


     this._setupService.createSendDetail(this.senddetails).subscribe((result) => {

         console.log(this.senddetails);
          if(result.statusCode== 200){
            this.responseData = result;
console.log("transactions completed");
let toast = this.toastCtrl.create({
          message: 'transaction successfully completed',
          showCloseButton: true,
          closeButtonText: 'Ok',
          duration: 5000
     });
     toast.present();
//      let prompt = this.alertCtrl.create({
//     message: 'transaction successfully completed'
//
// });
loading.dismiss();
this.navCtrl.setRoot(SendPage);

}
else{
               this.responseData = result;
               loading.dismiss();
               let toast = this.toastCtrl.create({
               message: this.responseData.message,
               showCloseButton: true,
               closeButtonText: 'Ok',
               duration: 5000
          });
          toast.present();
    }

              // localStorage.setItem('senddetails',JSON.stringify(this.responseData));
              // this.user=JSON.parse(localStorage.getItem('senddetails'));


      });
    }
    }
}
