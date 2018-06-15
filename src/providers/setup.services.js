var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
/*
  Generated class for the ServicesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var SetupService = /** @class */ (function () {
    function SetupService(http) {
        this.http = http;
        this.io.sails.url = "http://103.201.142.41:3005"; 
        //this.endpoint_url = 'http://localhost:3000';
        this.http = http;
        // console.log('Hello ServicesProvider Provider');
    }
    //create new user account
    SetupService.prototype.createUserAccount = function (SignUpDetail) {
        var response = this.http.post(this.endpoint_url + '/user/createNewUser', SignUpDetail).map(function (res) { return res.json(); });
        return response;
    };
    // verify email
    SetupService.prototype.VerificationEmail = function (otpDetail) {
        var response = this.http.post(this.endpoint_url + '/user/verifyEmailAddress', otpDetail).map(function (res) { return res.json(); });
        return response;
    };
    // create login
    SetupService.prototype.createLoginDetail = function (loginDetail) {
        // alert("loginDetail = = "+JSON.stringfy(loginDetail));
        var response = this.http.post(this.endpoint_url + '/user/login', loginDetail).map(function (res) { return res.json(); });
        return response;
    };
    // walllet page
    SetupService.prototype.createWalletDetail = function (userMailId) {
        var response = this.http.post(this.endpoint_url + '/usercoin/getBalBCH', userMailId).map(function (res) { return res.json(); });
        //.catch(this.handleError);
        return response;
    };
    // private handleError(error: Response) { 
    //  console.error("response not comming:",error); 
    //  if(error.status===404){
    //    alert("Server is not responding,");
    //  }
    //  return Observable.throw(error.json().error; 
    //For Stx WalletPage
    SetupService.prototype.createstxWalletDetail = function (email) {
        var response = this.http.post(this.endpoint_url + '/usercoin/getBalBCH', email).map(function (res) { return res.json(); });
        return response;
        //.catch(this.handleError); 
    };
    //  private handleError(error: Response) { 
    //    console.error(error); 
    //    if(error.status===404)
    //      alert("Server is not responding");
    //    return Observable.throw(error.json().error()); 
    // } 
    //For amount 
    SetupService.prototype.amountDetail = function (AmountDetails) {
        var response = this.http.post(this.endpoint_url + '/crypto/compareamount', AmountDetails).map(function (res) { return res.json(); });
        return response;
    };
    //for change address
    SetupService.prototype.PostRequest = function (addressDetail) {
        var response = this.http.post(this.endpoint_url + '/crypto/compareamount', AmountDetails).map(function (res) { return res.json(); });
        return response;
    };
    //Address details
    SetupService.prototype.createAddressDetail = function (userMailId) {
        var response = this.http.post(this.endpoint_url + '/usercoin/getNewBCHAddress', userMailId).map(function (res) { return res.json(); });
        return response;
    };
    SetupService.prototype.getDetail = function (userMailId) {
        var response = this.http.post(this.endpoint_url + '/usercoin/getuserdetails', userMailId).map(function (res) { return res.json(); });
        return response;
    };
    //For Stx Address details
    SetupService.prototype.createstxAddressDetail = function (email) {
        var response = this.http.post(this.endpoint_url + '/usercoininr/getNewBCHAddress', email).map(function (res) { return res.json(); });
        return response;
    };
    SetupService.prototype.getstxDetail = function (email) {
        var response = this.http.post(this.endpoint_url + '/usercoininr/getuserdetails', email).map(function (res) { return res.json(); });
        return response;
    };
    // for Transaction details
    SetupService.prototype.createTransactionDetail = function (email) {
        var response = this.http.post(this.endpoint_url + '/usercoin/getTxsListBCH', email).map(function (res) { return res.json(); });
        return response;
    };
    //For Stx Transaction Details
    SetupService.prototype.createstxTransactionDetail = function (email) {
        var response = this.http.post(this.endpoint_url + '/usercoininr/getTxsListBCH', email).map(function (res) { return res.json(); });
        return response;
    };
    // for send page
    SetupService.prototype.createSendDetail = function (senddetails) {
        var response = this.http.post(this.endpoint_url + '/usercoin/sendBCH', senddetails).map(function (res) { return res.json(); });
        return response;
    };
    //For sendStx details
    SetupService.prototype.createstxSendDetail = function (sendstxdetails) {
        var response = this.http.post(this.endpoint_url + '/usercoininr/sendBCH', sendstxdetails).map(function (res) { return res.json(); });
        return response;
    };
    //get all traders list
    SetupService.prototype.getAllTrader = function () {
        var response = this.http.get(this.endpoint_url + '/trader/getAllTrader').map(function (res) { return res.json(); });
        return response;
    };
    // send freiend request
    SetupService.prototype.sendRequest = function (chatUser) {
        // alert("user detail = = "+chatUser);
        var response = this.http.post(this.endpoint_url + '/chat/createChat', chatUser).map(function (res) { return res.json(); });
        return response;
    };
    // sendRequest(chatUser:any){
    // alert("user detail = = "+this.endpoint_url);
    //  var response = this.http.post(this.endpoint_url+'/chat/createChat',chatUser).map(res => res.json());
    //  return response;
    // }
    //update  Acceptance
    SetupService.prototype.updateAcceptance = function (userId) {
        //alert("chatUser ==  "+JSON.stringify(userId));
        var response = this.http.get(this.endpoint_url + '/chat/updateAcceptance', userId).map(function (res) { return res.json(); });
        return response;
    };
    //get friends list
    SetupService.prototype.getfrienlist = function (emailId) {
        var response = this.http.post(this.endpoint_url + '/chat/getUserFriends', emailId).map(function (res) { return res.json(); });
        return response;
    };
    // get chat messages
    SetupService.prototype.getChatMessages = function (chatId) {
        var response = this.http.post(this.endpoint_url + '/chat/getChatMessages', chatId).map(function (res) { return res.json(); });
        return response;
    };
    //send message to traders
    SetupService.prototype.sendMessage = function (messageDetail) {
        var response = this.http.post(this.endpoint_url + '/chat/sendMessage', messageDetail).map(function (res) { return res.json(); });
        return response;
    };
    // get hard code data
    SetupService.prototype.getUserDetails = function () {
        var response = this.http.get('assets/data/userData.json').map(function (res) { return res.json(); });
        return response;
    };
    // get hard code data
    SetupService.prototype.getTradersLocation = function () {
        // var response = this.http.get('assets/data/tradersLocation.json').map(res => res.json());
        // return response;
        var response = this.http.get(this.endpoint_url + '/trader/getTradersByLocation').map(function (res) { return res.json(); });
        return response;
    };
    SetupService.prototype.getTraderInfo = function (emailId) {
        var response = this.http.post(this.endpoint_url + '/trader/getTraderInfo', emailId).map(function (res) { return res.json(); });
        return response;
    };
    // get hard code frienlist
    SetupService.prototype.getOldMessage = function () {
        var response = this.http.get('assets/data/messages.json').map(function (res) { return res.json(); });
        return response;
    };
    // get hard code frienlist
    SetupService.prototype.getcurrentMessage = function () {
        var response = this.http.get('assets/data/currentMessage.json').map(function (res) { return res.json(); });
        return response;
    };
    SetupService.prototype.getUserChats = function (emailId) {
        var response = this.http.get(this.endpoint_url + '/chat/getUserChats', emailId).map(function (res) { return res.json(); });
        return response;
    };
    SetupService.prototype.forgotPassword = function (userDetail) {
        var response = this.http.post(this.endpoint_url + '/user/sentOtpToEmailForgotPassword', userDetail).map(function (res) { return res.json(); });
        return response;
    };
    SetupService.prototype.forgotPasswordOTP = function (otp) {
        var response = this.http.post(this.endpoint_url + '/user/verifyOtpToEmailForgotPassord', otp).map(function (res) { return res.json(); });
        return response;
    };
    SetupService.prototype.updateForgotPassord = function (newpasswordvalues) {
        var response = this.http.post(this.endpoint_url + '/user/updateForgotPassordAfterVerify', newpasswordvalues).map(function (res) { return res.json(); });
        return response;
    };
    SetupService.prototype.acceptRequest = function (isAccepted) {
        var response = this.http.post(this.endpoint_url + '/chat/updateAcceptance', isAccepted).map(function (res) { return res.json(); });
        return response;
    };
    SetupService.prototype.rejectRequest = function (isAccepted) {
        var response = this.http.post(this.endpoint_url + '/chat/updateAcceptance', isAccepted).map(function (res) { return res.json(); });
        return response;
    };
    SetupService.prototype.getTraderLastUpdatedValue = function (emailId) {
        var response = this.http.post(this.endpoint_url + '/chat/updateAcceptance', emailId).map(function (res) { return res.json(); });
        return response;
    };
    // update current passeword
    SetupService.prototype.changecurrentpasswords = function (values) {
        var response = this.http.post(this.endpoint_url + '/user/updateCurrentPassword', values).map(function (res) { return res.json(); });
        return response;
    };
    //sent Otp To Email Verificatation
    SetupService.prototype.EmailVerifyforAccount = function (email) {
        //console.log("email = = "+JSON.stringify(email));
        var response = this.http.post(this.endpoint_url + '/user/sentOtpToEmailVerificatation', email).map(function (res) { return res.json(); });
        return response;
    };
    SetupService = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [Http])
    ], SetupService);
    return SetupService;
}());
export { SetupService };
//# sourceMappingURL=setup.services.js.map