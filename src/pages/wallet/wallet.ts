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
  
   this.createAddress()
   
   this.getStxAddress();
   this.getTx();
   this.getStxTx()
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

  


  getWallletBalance(){

      this.setupService.createWalletDetail({userMailId:this.userEmail.email}).subscribe((result) => { 
        
       
         this.balance = result.user.BCHbalance;
         
         return this.balance;
    });
  }
  // For stx balence
  getStxWallletBalance(){
      this.setupService.createstxWalletDetail({userMailId:this.userEmail.email}).subscribe((result) => {
  
         this.stxbalance = result.user.STXbalance;
         return this.stxbalance;
    });
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
    
   
    //For stx address
     getStxAddress(){
   console.log("calling<<<<<<<",this.stxaddress)
   if(this.stxaddress=="undefined" || this.stxaddress==undefined){
     console.log("this.user---------------------------------------",this.userEmail.email)
      this.setupService.createstxAddressDetail({userMailId:this.userEmail.email}).subscribe((result) => {
        this.stxaddress = result.newaddress;
    console.log("result..............................",result)
    if(result.statusCode>200)
    {
      console.log("lets get address from db")
       this.setupService.getstxDetail({userMailId:this.userEmail.email}).subscribe((result) => {
        this.stxaddress = result.user.userSTXAddress;
      console.log("111111111111111",this.stxaddress)
        return this.stxaddress;

        });
    }
    else
      return this.stxaddress;
    });
    }
  
     
    
     // console.log("11111111111111",result)
     //    if(this.address)
     //    return this.address;
      else
     {
       this.setupService.getstxDetail({userMailId:this.userEmail.email}).subscribe((result) => {
        this.stxaddress = result.newaddress;
      // console.log("22222222222",result)
        return this.stxaddress;

        });
      }
  
}
    
     getTx(){
      this.setupService.createTransactionDetail({userMailId:this.userEmail.email}).subscribe((result) => {
        if(result.statusCode==200){

           
          this.tx = []
           for(var i=0;i< result.tx.length;i++){
             
             this.tx.push({time : new Date(result.tx[i].time*1000), amount : result.tx[i].amount, txid : result.tx[i].txid});
           }  
          }
          // this.tx = result.tx;
          console.log("this.tx************************",this.tx)

     });

    }
 //For Stx Transaction
getStxTx(){
      this.setupService.createstxTransactionDetail({userMailId:this.userEmail.email}).subscribe((result) => {
        if(result.statusCode==200){
          //this.stxtx = result.tx;
           this.stxtx = []
           for(var i=0;i< result.tx.length;i++){
            this.stxtx.push({time : new Date(result.tx[i].time*1000), amount : result.tx[i].amount, txid : result.tx[i].txid});
           } 
         }
         console.log("this.tx************************",this.stxtx)
       });
       }
//for btc address borcode reader
 showConfirm(){
  console.log("hiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii")
  // this.address = await this.createAddress();
   var btcaddress= this.address;
  console.log("btcaddress)))))))))))))))))))))))))))))))))))))",btcaddress)
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
              
         }
       },]
   });
   alert.present();
   }

openSendPage() {
    this.nav.push(SendPage)

  }

  showStxConfirm(){
   var stxAddress= this.stxaddress;

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
             
         }
       },]
   });
   alert.present();
   }
  openSendsPage() {
    this.nav.push(SendsPage)

  }
}

 



 

 

  
     



    





