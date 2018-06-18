import { Component } from '@angular/core';
//import { IonicPage, NavController, NavParams,Platform } from 'ionic-angular';

//import { NgForm } from '@angular/forms';
import { IonicPage, NavController, NavParams,Platform, MenuController,ToastController,LoadingController,Events } from 'ionic-angular';
//import { UserData } from '../../providers/user-data';
//import { UserOptions,LoginDetail } from '../../interfaces/user-options';
//import { ForgotpasswordPage } from '../forgotpassword/forgotpassword';
//import { SignupPage } from '../signup/signup';
//import { DashboardPage } from '../dashboard/dashboard';



 import { SetupService } from '../../providers/setup.services';
 //import { SendPage } from '../send/send';
// import { SendsPage } from '../sends/sends';
 //import { BarcodeScanner } from '@ionic-native/barcode-scanner';
 import { UserEmailId} from '../../interfaces/user-options';
 //import { Clipboard } from '@ionic-native/clipboard';

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
   user:any;
 public amount:any;


  userEmail: UserEmailId = { email: ''};


  constructor(public navCtrl: NavController, 
  	          public navParams: NavParams,
  	          public platform: Platform,
               public setupService: SetupService,
              // private dragula: DragulaService
  	) {
  	// this.dragula.setOptions('bag-items',{
   //    revertOnSpil:true
   //  });
   this.isAndroid = platform.is('android');
    //this.nav = nav
   this.userdata();
   this.getBTCAmount();
  let backAction =  platform.registerBackButtonAction(() => {
       this.navCtrl.pop();
       backAction();

      },)

  }
userdata(){
  console.log("localhost::::::::::",JSON.parse(localStorage.getItem('logindetail')))
       this.user=JSON.parse(localStorage.getItem('logindetail'))
       console.log("this user>>>>>>>>>>>>>>>>",this.user.user.email)
       if(this.user!=null||this.user!=undefined){
       this.userEmail.email=this.user.user.email;
       console.log("this.userEmail????????????????????",this.userEmail.email)
       
      }
   }

 getBTCAmount(){

      this.setupService.amountDetail({userMailId:this.userEmail.email}).subscribe((result) => { 
       
     
         this.amount = result.amount;
         
         return this.amount;
    });
  }
}