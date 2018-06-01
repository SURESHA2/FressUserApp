import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
//import { NgForm } from '@angular/forms';
import { MenuController,ToastController,LoadingController,Events, AlertController, Platform,} from 'ionic-angular';
import { UserData } from '../../providers/user-data';
//import { UserOptions,LoginDetail } from '../../interfaces/user-options';
//import { ForgotpasswordPage } from '../forgotpassword/forgotpassword';
//import { SignupPage } from '../signup/signup';
//import { DashboardPage } from '../dashboard/dashboard';



 import { SetupService } from '../../providers/setup.services';
 import { SendPage } from '../send/send';
 import { SendsPage } from '../sends/sends';
 import { BarcodeScanner } from '@ionic-native/barcode-scanner';
 import { UserEmailId} from '../../interfaces/user-options';
 import { Clipboard } from '@ionic-native/clipboard';



//import { Clipboard } from '@ionic-native/clipboard';
/**
 * Generated class for the WalletPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-wallet',
  templateUrl: 'wallet.html',
})
export class WalletPage {
   wallet: string = "btcpage";
  isAndroid: boolean = false;
  qrData = null;
  createdCode = null;
  scannedCode = null;

   responseData:any;
   public user:any;
   public date:any;
   public amount:any;
   public txlist:any;
   submitted = false;
   public userName:any;
   public email:any;
   public balance:any;
   public BCHbalance:any;
   public stxbalance:any;
   public stxaddress:any;
   public address:any;
    public Address:any;
   public tx:any[]=[];
   public stxtx:any;

    userEmail: UserEmailId = { email: ''};


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
   public barcodeScanner: BarcodeScanner,

    public platform: Platform,
   private clipboard: Clipboard
   

   


   ) {
   
   this.isAndroid = platform.is('android');

   this.nav = nav
   this.userdata();
   this.getWallletBalance();
   this.getStxWallletBalance();
   this.getAddress();
   
   this.getStxAddress();
   this.getTx();
   this.getStxTx()
    let backAction =  platform.registerBackButtonAction(() => {
       this.navCtrl.pop();
       backAction();

      },)

  }
userdata(){
       this.user=JSON.parse(localStorage.getItem('logindetail'));
       if(this.user!=null||this.user!=undefined){
       this.userEmail.email=this.user.user.email;

      }
   }

  


  getWallletBalance(){

      this.setupService.createWalletDetail({userMailId:this.userEmail.email}).subscribe((result) => { 
         this.BCHbalance = result.balance;
         
         return this.BCHbalance;
    });
  }
  // For stx balence
  getStxWallletBalance(){
      this.setupService.createstxWalletDetail({userMailId:this.userEmail.email}).subscribe((result) => {

         this.stxbalance = result.balance;
    });
  }


 getAddress(){
      this.setupService.createAddressDetail({userMailId:this.userEmail.email}).subscribe((result) => {
        this.address = result.newaddress;
      
        return this.address;
     
    });

    }
  
   
    //For stx address
     getStxAddress(){
     this.setupService.createstxAddressDetail({email:this.userEmail.email}).subscribe((result) => {
        this.stxaddress = result.newaddress;

         return this.stxaddress;

    });

    }
     getTx(){
      this.setupService.createTransactionDetail({userMailId:this.userEmail.email}).subscribe((result) => {
        if(result.statusCode==200){

           
          // this.tx = result.tx;
           for(var i=0;i< result.tx.length;i++){
             
             this.tx.push({time : new Date(result.tx[i].time *1000), amount : result.tx[i].amount, txid : result.tx[i].txid});
           }  
          }
          this.tx = result.tx;
          

     });

    }
 //For Stx Transaction
getStxTx(){
      this.setupService.createstxTransactionDetail({userMailId:this.userEmail.email}).subscribe((result) => {
        if(result.statusCode==200){
          this.stxtx = result.tx;
           } 
         
       });
       }
//for btc address borcode reader
showConfirm(){
   var btcaddress= this.address;
  
  let alert = this.alertCtrl.create({
     title: '<div class="center" >My BTC Address</div>',
     subTitle: '<div class="center" (click)="copyAddress()"> <img src="http://chart.apis.google.com/chart?cht=qr&chs=300x300&chl='+btcaddress+'"  alt="QR Code" style="width: 80%;" ></div><div class="center">'+btcaddress+'<div>',
     
     buttons: [     
     {
        
         text: 'copy',
         handler: data => {
          
               this.clipboard.copy(btcaddress);
               this.responseData = Text;
            let toast = this.toastCtrl.create({
                     message: this.responseData.Copy,
                     showCloseButton: true,
                     closeButtonText: 'Copyed successfully',
                     duration: 5000
                });
                toast.present(); 
         }
       },
       {
         text: 'Cancel',
         handler: data => {            
              console.log("hello");
         }
       },]
   });
   alert.present();
   }

openSendPage() {
    this.nav.push(SendPage)

  }

  showStxConfirm(){
   var stxAddress= this.Address;

  let alert = this.alertCtrl.create({
     title: '<div class="center" >My BTC Address</div>',
     subTitle: '<div class="center" (click)="copyAddress()"> <img src="http://chart.apis.google.com/chart?cht=qr&chs=300x300&chl='+stxAddress+'"  alt="QR Code" style="width: 80%;" ></div><div class="center">'+stxAddress+'<div>',
     
     buttons: [
     {
         text: 'copy',
         handler: data => {
              this.clipboard.copy(stxAddress);
              this.responseData = Text;
            let toast = this.toastCtrl.create({
                     message: this.responseData.Copy,
                     showCloseButton: true,
                     closeButtonText: 'Copyed successfully',
                     duration: 5000
                });
                toast.present(); 
         }
       },
       {
         text: 'Cancel',
         handler: data => {            
              console.log("hello");
         }
       },]
   });
   alert.present();
   }
  openSendsPage() {
    this.nav.push(SendsPage)

  }
}

 



 

 

  
     



    





