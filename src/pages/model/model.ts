import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { MenuController,ToastController,LoadingController,Events, AlertController, Platform,} from 'ionic-angular';
import { UserData } from '../../providers/user-data';
import { SetupService } from '../../providers/setup.services';
import { UserEmailId,} from '../../interfaces/user-options';
import { AmountDetail } from '../../interfaces/user-options';
import { NgForm } from '@angular/forms';

/**
 * Generated class for the ModelPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-model',
  templateUrl: 'model.html',
})
export class ModelPage {
   responseData:any;
public user:any;
submitted = false;
//public userName:any;
 public email:any;
 public userBCHAddress:any;
public address:any;
	 userEmail: UserEmailId = { email: ''};
 amountdetails: AmountDetail = { amount: '' };

constructor(public userData: UserData,
  public navCtrl: NavController,
  public nav: NavController,
  public toastCtrl: ToastController,
  public events: Events,
  public menuCtrl: MenuController,
   public navParams: NavParams,
   public setupService: SetupService,
   public loadingCtrl: LoadingController,
   public alertCtrl: AlertController,
   public viewCtrl: ViewController,

    public platform: Platform,
   
   

   


   ) {
   
  

   this.nav = nav
   this.userdata();
   ;
  
   this.createAddress()
   
   
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

 createAddress(){
   console.log("calling<<<<<<<",this.address)
   if(this.address=="undefined" || this.address==undefined){
     console.log("this.user---------------------------------------",this.userEmail.email)
      this.setupService.createAddressDetail({userMailId:this.userEmail.email}).subscribe((result) => {
        this.address = result.newaddress;
    console.log("result..............................",result)
    if(result.statusCode>200)
    {
      console.log("lets get address from db")
       this.setupService.getDetail({userMailId:this.userEmail.email}).subscribe((result) => {
        this.address = result.user.userBCHAddress;
      console.log("22222222222",this.address)
        return this.address;

        });
    }
    else
      return this.address;
    });
    }
  
     
    
     // console.log("11111111111111",result)
     //    if(this.address)
     //    return this.address;
      else
     {
       this.setupService.getDetail({userMailId:this.userEmail.email}).subscribe((result) => {
        this.address = result.newaddress;
      // console.log("22222222222",result)
        return this.address;

        });
      }
  
}
  
  onsendBalance(Form: NgForm){
  this.amountdetails=this.email;
  this.submitted = true;
  if (Form.valid) {
       //this.userData.send(this.send.amount);
       let loading = this.loadingCtrl.create({
      content: 'transaction is procced...'
     });
       loading.present();


     this.setupService.createSendDetail(this.amountdetails).subscribe((result) => {

         console.log(this.amountdetails);
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

  
   
  


  closeModal() {
    this.viewCtrl.dismiss();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModelPage');
  }

}
 

 