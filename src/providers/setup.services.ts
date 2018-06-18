import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
//import { Observable } from 'rxjs/Observable'; 
import 'rxjs/add/operator/do'; 
import 'rxjs/add/operator/catch';

/*
  Generated class for the ServicesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class SetupService {

  constructor(public http: Http) {
    this.http = http;
   // console.log('Hello ServicesProvider Provider');
  }

      
      endpoint_url = "http://103.201.142.41:3005";
      // endpoint_url : string = 'http://localhost:3000';

   //create new user account
    createUserAccount(SignUpDetail: any) {
        var response = this.http.post(this.endpoint_url + '/user/createNewUser',SignUpDetail ).map(res => res.json());
        return response;
    }

     // verify email
     VerificationEmail(otpDetail: any) {
        var response = this.http.post(this.endpoint_url + '/user/verifyEmailAddress',otpDetail ).map(res => res.json());
        return response;
    }

     // create login
      createLoginDetail(loginDetail: any) {
     // alert("loginDetail = = "+JSON.stringfy(loginDetail));
        let response = this.http.post(this.endpoint_url + '/user/login',loginDetail ).map(res => res.json());
        return response;
    }

    // walllet page
    createWalletDetail(userMailId:any) {   
         var response = this.http.post(this.endpoint_url+'/usercoin/getBalBCH',userMailId ).map(res => res.json());
         //.catch(this.handleError);

          return response;
    }
     // private handleError(error: Response) { 
     //  console.error("response not comming:",error); 
     //  if(error.status===404){
     //    alert("Server is not responding,");
     //  }
     //  return Observable.throw(error.json().error; 
    
      

    
    //For Stx WalletPage
     createstxWalletDetail(email:any) {   
         
        var response = this.http.post(this.endpoint_url+'/usercoin/getBalBCH',email ).map(res => res.json());
       return response; 
      //.catch(this.handleError); 
   }  
   //  private handleError(error: Response) { 
   //    console.error(error); 
   //    if(error.status===404)
   //      alert("Server is not responding");
   //    return Observable.throw(error.json().error()); 
   // } 
    
    //For amount 
     amountDetail(AmountDetails:any) {   
         
        var response = this.http.post(this.endpoint_url+'/crypto/compareamount',AmountDetails ).map(res => res.json());
        return response;
    }
    //for change address
    // PostRequest(addressDetail:any) {   
         
    //     var response = this.http.post(this.endpoint_url+'/crypto/compareamount',addressDetail ).map(res => res.json());
    //     return response;
    // }
    //Address details
     createAddressDetail(userMailId:any) {   
         
        var response = this.http.post(this.endpoint_url+'/usercoin/getNewBCHAddress',userMailId ).map(res => res.json());
        return response;
    }

    
     getDetail(userMailId:any) {   
         
        var response = this.http.post(this.endpoint_url+'/usercoin/getuserdetails',userMailId ).map(res => res.json());
        return response;
        
    }
     getaDetail(userMailId:any) {   
         
        var response = this.http.post(this.endpoint_url+'/usercoin/getuserdetails',userMailId ).map(res => res.json());
        return response;
        
    }
    //For Stx Address details
    createstxAddressDetail(email:any) {   
         
        var response = this.http.post(this.endpoint_url+'/usercoininr/getNewBCHAddress',email ).map(res => res.json());
        return response;
    }

     getstxDetail(email:any) {   
         
        var response = this.http.post(this.endpoint_url+'/usercoininr/getuserdetails',email ).map(res => res.json());
        return response;
    }
    // for Transaction details
    createTransactionDetail(email:any) {   
         
        var response = this.http.post(this.endpoint_url+'/usercoin/getTxsListBCH',email ).map(res => res.json());
        return response;
    }
      //For Stx Transaction Details
    createstxTransactionDetail(email:any) {   
         
        var response = this.http.post(this.endpoint_url+'/usercoininr/getTxsListBCH',email ).map(res => res.json());
        return response;
    }
     // for send page
    createSendDetail(senddetails:any) {   
         
        var response = this.http.post(this.endpoint_url+'/usercoin/sendBCH',senddetails).map(res => res.json());
      
        return response;

    }
    sendRequestdetail(email:any) {   
         
        var response = this.http.post(this.endpoint_url+'usercoininr/getNewBCHAddress',email).map(res => res.json());
      
        return response;

    }
    //For sendStx details
     createstxSendDetail(sendstxdetails:any) {   
         
        var response = this.http.post(this.endpoint_url+'/usercoininr/sendBCH',sendstxdetails).map(res => res.json());
      
        return response;

    }

      //get all traders list
        getAllTrader(){
          var response = this.http.get(this.endpoint_url +'/trader/getAllTrader').map(res => res.json());
          return response;
         }

      // send freiend request
        sendRequest(chatUser:any){
        // alert("user detail = = "+chatUser);
         var response = this.http.post(this.endpoint_url +'/chat/createChat',chatUser).map(res => res.json());
         return response;
        }

        // sendRequest(chatUser:any){
        // alert("user detail = = "+this.endpoint_url);
        //  var response = this.http.post(this.endpoint_url+'/chat/createChat',chatUser).map(res => res.json());
        //  return response;
        // }

      //update  Acceptance

        updateAcceptance(userId:any){
        //alert("chatUser ==  "+JSON.stringify(userId));
         var response = this.http.get(this.endpoint_url +'/chat/updateAcceptance',userId).map(res => res.json());
         return response;
       }

       //get friends list
        getfrienlist(emailId:any){
         var response = this.http.post(this.endpoint_url +'/chat/getUserFriends',emailId).map(res => res.json());
         return response;
        }

      // get chat messages

       getChatMessages(chatId:any){
         var response = this.http.post(this.endpoint_url +'/chat/getChatMessages',chatId).map(res => res.json());
         return response;
       }

       //send message to traders

       sendMessage(messageDetail:any){
         var response = this.http.post(this.endpoint_url +'/chat/sendMessage',messageDetail).map(res => res.json());
         return response;
       }


      // get hard code data
        getUserDetails(){
          var response = this.http.get('assets/data/userData.json').map(res => res.json());
          return response;
        }
        // get hard code data
        getTradersLocation(){
          // var response = this.http.get('assets/data/tradersLocation.json').map(res => res.json());
          // return response;
          var response = this.http.get(this.endpoint_url +'/trader/getTradersByLocation').map(res => res.json());
         return response;
        }
        getTraderInfo (emailId:any){
          var response = this.http.post(this.endpoint_url +'/trader/getTraderInfo',emailId).map(res => res.json());
         return response;
        }


         // get hard code frienlist
        getOldMessage(){
         var response = this.http.get('assets/data/messages.json').map(res => res.json());
         return response;
        }

    // get hard code frienlist
        getcurrentMessage(){
         var response = this.http.get('assets/data/currentMessage.json').map(res => res.json());
         return response;
        }


        getUserChats(emailId:any){
         var response = this.http.get(this.endpoint_url +'/chat/getUserChats',emailId).map(res => res.json());
         return response;
       }

        forgotPassword(userDetail: any) {
        var response = this.http.post(this.endpoint_url + '/user/sentOtpToEmailForgotPassword',userDetail ).map(res => res.json());
        return response;
        }

       forgotPasswordOTP(otp: any) {
          var response = this.http.post(this.endpoint_url + '/user/verifyOtpToEmailForgotPassord',otp ).map(res => res.json());
          return response;
       }

       updateForgotPassord(newpasswordvalues: any) {
         var response =this.http.post(this.endpoint_url +'/user/updateForgotPassordAfterVerify',newpasswordvalues).map(res =>res.json());
         return response;
      }
       acceptRequest(isAccepted: any){
         var response =this.http.post(this.endpoint_url +'/chat/updateAcceptance',isAccepted).map(res =>res.json());
         return response;
       }

       rejectRequest(isAccepted: any){
         var response =this.http.post(this.endpoint_url +'/chat/updateAcceptance',isAccepted).map(res =>res.json());
         return response;
       }

       getTraderLastUpdatedValue(emailId:any){
          var response =this.http.post(this.endpoint_url +'/chat/updateAcceptance',emailId).map(res =>res.json());
         return response;

       }

       // update current passeword
    changecurrentpasswords(values:any){
     var response =this.http.post(this.endpoint_url +'/user/updateCurrentPassword',values).map(res =>res.json());
      return response;
    }
    //sent Otp To Email Verificatation
     EmailVerifyforAccount(email:any){
       //console.log("email = = "+JSON.stringify(email));
          var response =this.http.post(this.endpoint_url +'/user/sentOtpToEmailVerificatation',email).map(res =>res.json());
          return response;
       }
}
