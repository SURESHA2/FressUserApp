webpackJsonp([0],{

/***/ 116:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForgotpasswordPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__signup_signup__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__changepassword_changepassword__ = __webpack_require__(252);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_setup_services__ = __webpack_require__(20);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the ForgotpasswordPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ForgotpasswordPage = (function () {
    function ForgotpasswordPage(navCtrl, toastCtrl, menuCtrl, navParams, alertCtrl, _setupService, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.toastCtrl = toastCtrl;
        this.menuCtrl = menuCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this._setupService = _setupService;
        this.loadingCtrl = loadingCtrl;
        this.emailId = { email: '' };
        this.otpvalue = { traderMailId: '', otp: '', };
        this.submitted = false;
    }
    ForgotpasswordPage.prototype.ionViewDidEnter = function () {
        // the root left menu should be disabled on the tutorial page
        this.menuCtrl.enable(false);
    };
    ForgotpasswordPage.prototype.ionViewWillLeave = function () {
        // enable the root left menu when leaving the tutorial page
        this.menuCtrl.enable(true);
    };
    ForgotpasswordPage.prototype.forgotPassword = function (form) {
        var _this = this;
        this.submitted = true;
        if (form.valid) {
            var loading_1 = this.loadingCtrl.create({
                content: 'sending otp in your mailId...'
            });
            loading_1.present();
            this._setupService.forgotPassword(this.emailId).subscribe(function (response) {
                if (response.statusCode == 200) {
                    _this.responseData = response;
                    loading_1.dismiss();
                    localStorage.setItem('ResponseData', JSON.stringify(response));
                    var toast = _this.toastCtrl.create({
                        message: 'OTP sent to your email id',
                        showCloseButton: true,
                        closeButtonText: 'Ok',
                        duration: 5000
                    });
                    toast.present();
                    var prompt_1 = _this.alertCtrl.create({
                        title: 'One Time Password',
                        inputs: [
                            {
                                name: 'otp',
                                type: 'password',
                                placeholder: 'One Time Password'
                            }
                        ],
                        buttons: [
                            {
                                text: 'Cancel',
                                handler: function (data) {
                                }
                            },
                            {
                                text: 'submit',
                                handler: function (data) {
                                    var loading = _this.loadingCtrl.create({
                                        content: 'verifying otp...'
                                    });
                                    loading.present();
                                    _this._setupService.forgotPasswordOTP({ "userMailId": response.userMailId, "otp": data.otp
                                    }).subscribe(function (response) {
                                        if (response.statusCode == 200) {
                                            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__changepassword_changepassword__["a" /* ChangepasswordPage */]);
                                            loading.dismiss();
                                        }
                                        else {
                                            var toast_1 = _this.toastCtrl.create({
                                                message: response.message,
                                                showCloseButton: true,
                                                closeButtonText: 'Ok',
                                                duration: 5000
                                            });
                                            toast_1.present();
                                            loading.dismiss();
                                        }
                                    });
                                }
                            }
                        ],
                        enableBackdropDismiss: false
                    });
                    prompt_1.present();
                }
                else {
                    _this.responseData = response;
                    var toast = _this.toastCtrl.create({
                        message: _this.responseData.message,
                        showCloseButton: true,
                        closeButtonText: 'Ok',
                        duration: 5000
                    });
                    toast.present();
                    loading_1.dismiss();
                }
            });
        }
    };
    ForgotpasswordPage.prototype.login = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */]);
    };
    ForgotpasswordPage.prototype.signup = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__signup_signup__["a" /* SignupPage */]);
    };
    ForgotpasswordPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-forgotpassword',template:/*ion-inline-start:"F:\My Current Office Work\StreetxUserApp\src\pages\forgotpassword\forgotpassword.html"*/'<ion-header>\n\n	<ion-navbar>\n\n		<ion-title>Forgot Password</ion-title>\n\n	</ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n	\n\n\n\n	<form #forgotPasswordForm="ngForm" novalidate>\n\n		<ion-list no-lines>\n\n			<ion-item>\n\n				<ion-label stacked color="primary">Email id</ion-label>\n\n				<ion-input [(ngModel)]="emailId.email" placeholder="enter email id" name="email" type="text" #email="ngModel" spellcheck="false" autocapitalize="off"\n\n					required>\n\n				</ion-input>\n\n			</ion-item>\n\n			<p ion-text [hidden]="email.valid || submitted == false" color="danger" padding-left>\n\n				Email is required\n\n			</p>\n\n		</ion-list>\n\n    <ion-row responsive-sm>\n\n          <ion-col>\n\n				<button ion-button (click)="forgotPassword(forgotPasswordForm)" type="submit" block>Submit</button>\n\n			</ion-col>\n\n	</ion-row> \n\n		\n\n	</form>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"F:\My Current Office Work\StreetxUserApp\src\pages\forgotpassword\forgotpassword.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* MenuController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_5__providers_setup_services__["a" /* SetupService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */]])
    ], ForgotpasswordPage);
    return ForgotpasswordPage;
}());

//# sourceMappingURL=forgotpassword.js.map

/***/ }),

/***/ 130:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatuserlistPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_setup_services__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_chatroom_chatroom__ = __webpack_require__(251);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_geolocation__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__gmap_gmap__ = __webpack_require__(38);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the ChatuserlistPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ChatuserlistPage = (function () {
    function ChatuserlistPage(geolocation, _setupService, navCtrl, navParams, platform) {
        var _this = this;
        this.geolocation = geolocation;
        this._setupService = _setupService;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.platform = platform;
        this.userData = [];
        this.nickname = '';
        this.UserId = { email: '' };
        var backAction = platform.registerBackButtonAction(function () {
            _this.navCtrl.pop();
            backAction();
        }, 2);
        this.userdata();
        this._setupService.getfrienlist({ email: this.UserId.email }).subscribe(function (response) {
            if (response.statusCode == 200) {
                _this.friendList = response.data;
                console.log(" this.friendList = = " + JSON.stringify(_this.friendList));
            }
        });
    }
    ChatuserlistPage.prototype.userdata = function () {
        this.user = JSON.parse(localStorage.getItem('logindetail'));
        if (this.user != null || this.user != undefined) {
            this.UserId.email = this.user.user.email;
        }
    };
    ChatuserlistPage.prototype.openChat = function (senderEmail, receiverEmail, chatId) {
        // alert("senderEmail = = "+senderEmail);  
        // alert("receiverEmail = = "+receiverEmail);
        // alert("chatId = = "+chatId);    
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__pages_chatroom_chatroom__["a" /* ChatroomPage */], { sender: senderEmail, receiver: receiverEmail, chatId: chatId });
    };
    ChatuserlistPage.prototype.joinChat = function () {
        this.navCtrl.push('ChatRoomPage', { nickname: this.nickname });
    };
    ChatuserlistPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.platform.ready().then(function () {
            var options = {
                enableHighAccuracy: true,
                maximumAge: 3600,
                timeout: 10000
            };
            _this.geolocation.getCurrentPosition(options).then(function (response) {
                _this.latitude = response.coords.latitude;
                _this.longitude = response.coords.longitude;
                _this.zoom = 16;
            }).catch(function (error) {
            });
        });
    };
    ChatuserlistPage.prototype.addTraders = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__gmap_gmap__["a" /* GmapPage */]);
    };
    ChatuserlistPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-chatuserlist',template:/*ion-inline-start:"F:\My Current Office Work\StreetxUserApp\src\pages\chatuserlist\chatuserlist.html"*/'\n\n\n\n\n\n<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Trader List</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n\n\n<div *ngFor="let friend of friendList" class="row chat-all">\n\n	<div class="col-2">\n\n		 <ion-icon name="contact" class="icon-chat-user"></ion-icon>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;	\n\n	</div>\n\n	<div class="col-8">\n\n		 <span class="chat-user" (click)="openChat(friend.sender,friend.email,friend.chatId)">{{friend.email}}</span>\n\n	</div>\n\n	<div class="col-2" *ngIf="friend.isAccepted === false">\n\n		 <button style="background-color: #3996ea;" ion-button  type="submit"  >Pending</button>\n\n	</div>\n\n</div>\n\n\n\n<!-- <div *ngIf="!friendList">\n\n	No Traders avaliable here : <button style="background-color: #3996ea;" ion-button  type="submit"  (click)="addTraders()">Add Trader</button>\n\n</div> -->\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"F:\My Current Office Work\StreetxUserApp\src\pages\chatuserlist\chatuserlist.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__ionic_native_geolocation__["a" /* Geolocation */], __WEBPACK_IMPORTED_MODULE_2__providers_setup_services__["a" /* SetupService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */]])
    ], ChatuserlistPage);
    return ChatuserlistPage;
}());

//# sourceMappingURL=chatuserlist.js.map

/***/ }),

/***/ 141:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 141;

/***/ }),

/***/ 183:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 183;

/***/ }),

/***/ 20:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SetupService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(227);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the ServicesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var SetupService = (function () {
    function SetupService(http) {
        this.http = http;
        //endpoint_url: string = 'http://192.168.1.20:3000';
        this.endpoint_url = 'http://192.168.0.133:3000';
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
        console.log("email = = " + JSON.stringify(email));
        var response = this.http.post(this.endpoint_url + '/user/sentOtpToEmailVerificatation', email).map(function (res) { return res.json(); });
        return response;
    };
    SetupService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], SetupService);
    return SetupService;
}());

//# sourceMappingURL=setup.services.js.map

/***/ }),

/***/ 226:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TutorialPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_user_data__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__forgotpassword_forgotpassword__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__signup_signup__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__gmap_gmap__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_setup_services__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_storage__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_login_login__ = __webpack_require__(37);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var TutorialPage = (function () {
    function TutorialPage(userData, navCtrl, toastCtrl, events, menuCtrl, navParams, _setupService, loadingCtrl, menu, storage) {
        this.userData = userData;
        this.navCtrl = navCtrl;
        this.toastCtrl = toastCtrl;
        this.events = events;
        this.menuCtrl = menuCtrl;
        this.navParams = navParams;
        this._setupService = _setupService;
        this.loadingCtrl = loadingCtrl;
        this.menu = menu;
        this.storage = storage;
        this.showSkip = true;
        this.login1 = { username: '', password: '' };
        this.loginDetail = { email: '', password: '', lat: '', long: '' };
        this.submitted = false;
    }
    TutorialPage.prototype.startApp = function () {
        var _this = this;
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__pages_login_login__["a" /* LoginPage */]).then(function () {
            _this.storage.set('hasSeenTutorial', 'true');
        });
    };
    TutorialPage.prototype.onSlideChangeStart = function (slider) {
        this.showSkip = !slider.isEnd();
    };
    TutorialPage.prototype.ionViewWillEnter = function () {
        this.slides.update();
    };
    TutorialPage.prototype.ionViewDidEnter = function () {
        this.menu.enable(false);
    };
    TutorialPage.prototype.ionViewDidLeave = function () {
        this.menu.enable(false);
    };
    TutorialPage.prototype.login = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_8__pages_login_login__["a" /* LoginPage */]);
    };
    TutorialPage.prototype.signup = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__signup_signup__["a" /* SignupPage */]);
    };
    TutorialPage.prototype.setCurrentPosition = function () {
        var _this = this;
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition(function (position) {
                _this.loginDetail.lat = position.coords.latitude;
                _this.loginDetail.long = position.coords.longitude;
            });
        }
    };
    TutorialPage.prototype.onlogin1 = function (form) {
        var _this = this;
        this.submitted = true;
        if (form.valid) {
            this.userData.login(this.login1.username);
            var loading_1 = this.loadingCtrl.create({
                content: 'Logging please wait...'
            });
            loading_1.present();
            this._setupService.createLoginDetail(this.loginDetail).subscribe(function (result) {
                if (result.statusCode == 200) {
                    _this.responseData = result;
                    console.log("res = = " + JSON.stringify(_this.responseData));
                    localStorage.setItem('logindetail', JSON.stringify(_this.responseData));
                    _this.user = JSON.parse(localStorage.getItem('logindetail'));
                    loading_1.dismiss();
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__gmap_gmap__["a" /* GmapPage */]);
                }
                else {
                    _this.responseData = result;
                    loading_1.dismiss();
                    var toast = _this.toastCtrl.create({
                        message: _this.responseData.message,
                        showCloseButton: true,
                        closeButtonText: 'Ok',
                        duration: 5000
                    });
                    toast.present();
                }
            });
        }
    };
    TutorialPage.prototype.onLogin = function (form) {
        this.submitted = true;
        if (form.valid) {
            this.userData.login(this.login1.username);
            this.userName = this.loginDetail.email;
            this.events.publish("shareObject", this.userName);
            this.storage.set('hasSeenTutorial', 'true');
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__gmap_gmap__["a" /* GmapPage */]);
        }
    };
    TutorialPage.prototype.onSignup = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__signup_signup__["a" /* SignupPage */]);
        this.storage.set('hasSeenTutorial', 'true');
    };
    TutorialPage.prototype.forgotPassword = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__forgotpassword_forgotpassword__["a" /* ForgotpasswordPage */]);
        this.storage.set('hasSeenTutorial', 'true');
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('slides'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Slides */])
    ], TutorialPage.prototype, "slides", void 0);
    TutorialPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-tutorial',template:/*ion-inline-start:"F:\My Current Office Work\StreetxUserApp\src\pages\tutorial\tutorial.html"*/'<ion-content no-bounce>\n\n  <ion-slides #slides (ionSlideWillChange)="onSlideChangeStart($event)" pager>\n\n    <ion-slide>\n\n      <img src="assets/img/welcome-1.jpg"  style="width: 100%;height: 100%" />\n\n    </ion-slide>\n\n\n\n    <ion-slide>\n\n      <img src="assets/img/welcome-2.jpg" style="width: 100%;height: 100%" />\n\n    <div style="position: fixed;z-index: 1;margin-top: -45px;margin-left:323px;color: #00000" (click)="startApp()">\n\n         Next &nbsp;<ion-icon name="arrow-forward"  ></ion-icon>\n\n       </div>\n\n    </ion-slide>\n\n\n\n  </ion-slides>\n\n</ion-content>\n\n'/*ion-inline-end:"F:\My Current Office Work\StreetxUserApp\src\pages\tutorial\tutorial.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_user_data__["a" /* UserData */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Events */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_6__providers_setup_services__["a" /* SetupService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_storage__["b" /* Storage */]])
    ], TutorialPage);
    return TutorialPage;
}());

//# sourceMappingURL=tutorial.js.map

/***/ }),

/***/ 251:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatroomPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_setup_services__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_socket_io_client__ = __webpack_require__(237);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_socket_io_client___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_socket_io_client__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_sails_io_js__ = __webpack_require__(250);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_sails_io_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_sails_io_js__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ChatroomPage = (function () {
    function ChatroomPage(ngZone, platform, navCtrl, navParams, _setupService, events) {
        var _this = this;
        this.ngZone = ngZone;
        this.platform = platform;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this._setupService = _setupService;
        this.events = events;
        this.nickname = '';
        this.chatId = '';
        this.io = __WEBPACK_IMPORTED_MODULE_4_sails_io_js__(__WEBPACK_IMPORTED_MODULE_3_socket_io_client__);
        this.messageDetails = { sender: '', recipient: '', content: '', chatId: '' };
        this.messages = [];
        this.chatid = {
            "chatId": ""
        };
        this.myInfo = this.messages[0];
        this.UserId = { email: '' };
        //this.io.sails.url = this._setupService.endpoint_url;    // connect to socket
        this.io.sails.url = "http://192.168.0.133:3000";
        this.userdata();
        this.messageDetails.sender = this.UserId.email;
        this.nickname = this.messageDetails.sender;
        this.messageDetails.recipient = this.navParams.get('receiver');
        this.messageDetails.chatId = this.navParams.get('chatId');
        this.chatid.chatId = this.messageDetails.chatId;
        // used for enabel device back button
        var backAction = platform.registerBackButtonAction(function () {
            _this.navCtrl.pop();
            backAction();
        }, 2);
        // create connection between user based on chat id
        this.io.socket.get('/chat/sendMessage', { chatId: this.messageDetails.chatId }, function (data, response) {
        });
        // get old message based on chat id
        this._setupService.getChatMessages({ chatId: this.messageDetails.chatId }).subscribe(function (response) {
            if (response.statusCode == 200) {
                _this.messages = response.data;
            }
            else {
            }
        });
        // event listner when any events brodcast messages
        var ngZ = this.ngZone;
        var event = this.events;
        this.io.socket.on('NEWMESSAGE', function (respons) {
            var _this = this;
            ngZ.run(function () {
                _this.messages = respons.data;
                event.publish("sharemessage", _this.messages);
            });
        });
        this.listenToDataChangeEvents();
    }
    ChatroomPage.prototype.userdata = function () {
        this.user = JSON.parse(localStorage.getItem('logindetail'));
        if (this.user != null || this.user != undefined) {
            this.UserId.email = this.user.user.email;
        }
    };
    ChatroomPage.prototype.listenToDataChangeEvents = function () {
        var _this = this;
        this.events.subscribe('sharemessage', function (userData) {
            _this.messages.push(userData);
            _this.userContent = '';
        });
    };
    ChatroomPage.prototype.sendMessage = function () {
        this.messageDetails.content = this.userContent;
        this.io.socket.post('/chat/sendMessage', this.messageDetails, function (data, response) {
        });
    };
    ChatroomPage.prototype.ionViewWillLeave = function () {
        this.io.socket.disconnect();
        delete this.io.sails;
    };
    ChatroomPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-chat-room',template:/*ion-inline-start:"F:\My Current Office Work\StreetxUserApp\src\pages\chatroom\chatroom.html"*/'\n\n\n\n<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>{{messageDetails.recipient}}</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <ion-grid>\n\n    <ion-row *ngFor="let message of messages "> \n\n \n\n\n\n\n\n      <ion-col offset-3 col-9 *ngIf="message.sender !== nickname" class="message" [ngClass]="{\'my_message\': message.sender === nickname, \'other_message\': message.sender !== nickname}">\n\n        <span class="user_name">{{ message.sender }}</span><br>\n\n        <span>{{ message.content }}</span>\n\n      <div class="time">{{message.createdAt | date:\'hh:MM\'}}</div> \n\n      </ion-col>\n\n      <ion-col col-9 *ngIf="message.sender === nickname" class="message" [ngClass]="{\'my_message\': message.sender === nickname, \'other_message\': message.sender !== nickname}">\n\n        <span class="user_name">{{ message.sender }}</span><br>\n\n        <span>{{ message.content }}</span>\n\n   <div class="time">{{message.createdAt | date:\'hh:MM\'}}</div>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n</ion-content>\n\n\n\n<ion-footer>\n\n  <ion-toolbar>\n\n    <ion-row class="message_row">\n\n      <ion-col col-9>\n\n        <ion-item no-lines>\n\n          <ion-input type="text" placeholder="type your message here..." [(ngModel)]="userContent"></ion-input>\n\n        </ion-item>\n\n      </ion-col>\n\n      <ion-col col-3>\n\n        <button ion-button clear color="primary" (click)="sendMessage()" [disabled]="userContent ==\'\'">\n\n        Send\n\n      </button>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-toolbar>\n\n</ion-footer>'/*ion-inline-end:"F:\My Current Office Work\StreetxUserApp\src\pages\chatroom\chatroom.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgZone */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_setup_services__["a" /* SetupService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Events */]])
    ], ChatroomPage);
    return ChatroomPage;
}());

//# sourceMappingURL=chatroom.js.map

/***/ }),

/***/ 252:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChangepasswordPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_setup_services__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login__ = __webpack_require__(37);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the ChangepasswordPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ChangepasswordPage = (function () {
    function ChangepasswordPage(navCtrl, toastCtrl, menuCtrl, alertCtrl, _setupService, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.toastCtrl = toastCtrl;
        this.menuCtrl = menuCtrl;
        this.alertCtrl = alertCtrl;
        this._setupService = _setupService;
        this.loadingCtrl = loadingCtrl;
        this.submitted = false;
        this.newPasswordvalue = { userMailId: '', newPassword: '', confirmNewPassword: '' };
        this.userdata();
    }
    ChangepasswordPage.prototype.userdata = function () {
        this.user = JSON.parse(localStorage.getItem('ResponseData'));
        this.newPasswordvalue.userMailId = this.user.userMailId;
    };
    ChangepasswordPage.prototype.changecurrentPassword = function (form) {
        var _this = this;
        this.submitted = true;
        if (form.valid) {
            var loading_1 = this.loadingCtrl.create({
                content: 'updating current password...'
            });
            loading_1.present();
            this._setupService.updateForgotPassord(this.newPasswordvalue).subscribe(function (response) {
                if (response.statusCode == 200) {
                    loading_1.dismiss();
                    var toast = _this.toastCtrl.create({
                        message: 'Password update successfully',
                        showCloseButton: true,
                        closeButtonText: 'Ok',
                        duration: 5000
                    });
                    toast.present();
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__login_login__["a" /* LoginPage */]);
                }
                else {
                    loading_1.dismiss();
                    var toast = _this.toastCtrl.create({
                        message: response.message,
                        showCloseButton: true,
                        closeButtonText: 'Ok',
                        duration: 5000
                    });
                    toast.present();
                }
            });
        }
    };
    ChangepasswordPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-changepassword',template:/*ion-inline-start:"F:\My Current Office Work\StreetxUserApp\src\pages\changepassword\changepassword.html"*/'<ion-header>\n\n	<ion-navbar>\n\n		<button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n		<ion-title>Change Password</ion-title>\n\n	</ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="login-page">\n\n\n\n	\n\n\n\n	<form #changePasswordForm="ngForm" novalidate>\n\n		<ion-list no-lines>\n\n			<ion-item>\n\n				<ion-label stacked color="primary">New Password</ion-label>\n\n				<ion-input [(ngModel)]="newPasswordvalue.newPassword" placeholder="enter new password"name="fullName" type="text" #fullName="ngModel" required>\n\n				</ion-input>\n\n			</ion-item>\n\n			<p ion-text [hidden]="fullName.valid || submitted == false" color="danger" padding-left>\n\n				new password is required\n\n			</p>\n\n\n\n			<ion-item>\n\n				<ion-label stacked color="primary">Confirm New Password</ion-label>\n\n				<ion-input [(ngModel)]="newPasswordvalue.confirmNewPassword" placeholder="enter confirm new password" name="password" type="password" #password="ngModel" required>\n\n				</ion-input>\n\n			</ion-item>\n\n			<p ion-text [hidden]="password.valid || submitted == false" color="danger" padding-left>\n\n				confirm new password is required\n\n			</p>\n\n		</ion-list>\n\n		<div padding>\n\n			<button ion-button (click)="changecurrentPassword(changePasswordForm)" type="submit" block>submit</button>\n\n		</div>\n\n	</form>\n\n\n\n</ion-content>\n\n\n\n'/*ion-inline-end:"F:\My Current Office Work\StreetxUserApp\src\pages\changepassword\changepassword.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* MenuController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_2__providers_setup_services__["a" /* SetupService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */]])
    ], ChangepasswordPage);
    return ChangepasswordPage;
}());

//# sourceMappingURL=changepassword.js.map

/***/ }),

/***/ 253:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__gmap_gmap__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_setup_services__ = __webpack_require__(20);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the SettingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SettingPage = (function () {
    function SettingPage(navCtrl, alertCtrl, toastCtrl, _setupService, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this._setupService = _setupService;
        this.loadingCtrl = loadingCtrl;
        this.verifyEmail = false;
        this.userEmail = { email: '' };
        this.passwordValue = { "userMailId": "", "currentPassword": "", "newPassword": "", "confirmNewPassword": "" };
        this.otpvalues = { "email": "", "otp": "" };
        this.userdata();
        //this.verifyEmail=false;        
    }
    SettingPage.prototype.userdata = function () {
        this.user = JSON.parse(localStorage.getItem('logindetail'));
        if (this.user != null || this.user != undefined) {
            this.userEmail.email = this.user.user.email;
            this.verifyEmail = this.user.user.verifyEmail;
        }
    };
    SettingPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SettingPage');
    };
    // change current password
    SettingPage.prototype.changeCurrentPassword = function () {
        var _this = this;
        var prompt = this.alertCtrl.create({
            title: 'Change Password',
            inputs: [
                {
                    name: 'currentPassword',
                    type: 'password',
                    placeholder: 'Current Password',
                },
                {
                    name: 'newPassword',
                    type: 'password',
                    placeholder: 'New Password',
                },
                {
                    name: 'confirmNewPassword',
                    type: 'password',
                    placeholder: 'Confirm New Password',
                },
            ],
            buttons: [
                {
                    text: 'Cancel',
                    handler: function (data) {
                    }
                },
                {
                    text: 'submit',
                    handler: function (data) {
                        var loading = _this.loadingCtrl.create({
                            content: 'updating current password...'
                        });
                        loading.present();
                        _this.passwordValue.userMailId = _this.userEmail.email;
                        _this.passwordValue.currentPassword = data.currentPassword;
                        _this.passwordValue.newPassword = data.newPassword;
                        _this.passwordValue.confirmNewPassword = data.confirmNewPassword;
                        _this._setupService.changecurrentpasswords(_this.passwordValue).subscribe(function (response) {
                            if (response.statusCode == 200) {
                                loading.dismiss();
                                var toast = _this.toastCtrl.create({
                                    message: 'Password change successfully',
                                    showCloseButton: true,
                                    closeButtonText: 'Ok',
                                    duration: 5000
                                });
                                toast.present();
                                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__gmap_gmap__["a" /* GmapPage */]);
                            }
                            else {
                                loading.dismiss();
                                var toast = _this.toastCtrl.create({
                                    message: response.message,
                                    showCloseButton: true,
                                    closeButtonText: 'Ok',
                                    duration: 5000
                                });
                                toast.present();
                            }
                        });
                    }
                }
            ],
            enableBackdropDismiss: false
        });
        prompt.present();
    };
    // veryfy email id
    SettingPage.prototype.veryfyEmail = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: 'sending otp in your emailId..'
        });
        loading.present();
        this._setupService.EmailVerifyforAccount(this.userEmail).subscribe(function (response) {
            loading.dismiss();
            var prompt = _this.alertCtrl.create({
                title: 'Enter One Time Password',
                inputs: [
                    {
                        name: 'otp',
                        type: 'password',
                        placeholder: 'One Time Password',
                    }
                ],
                buttons: [
                    {
                        text: 'Cancel',
                        handler: function (data) {
                        }
                    },
                    {
                        text: 'submit',
                        handler: function (data) {
                            var loading = _this.loadingCtrl.create({
                                content: 'verifying OtP...'
                            });
                            loading.present();
                            _this.otpvalues.email = _this.userEmail.email;
                            _this.otpvalues.otp = data.otp;
                            _this._setupService.VerificationEmail(_this.otpvalues).subscribe(function (response) {
                                if (response.statusCode == 200) {
                                    loading.dismiss();
                                    localStorage.setItem('logindetail', JSON.stringify(response));
                                    _this.user = JSON.parse(localStorage.getItem('logindetail'));
                                    ;
                                    _this.userEmail.email = _this.user.user.email;
                                    _this.verifyEmail = _this.user.user.verifyEmail;
                                    var toast = _this.toastCtrl.create({
                                        message: 'verify email successfully !!',
                                        showCloseButton: true,
                                        closeButtonText: 'Ok',
                                        duration: 5000
                                    });
                                    toast.present();
                                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__gmap_gmap__["a" /* GmapPage */]);
                                }
                                else {
                                    loading.dismiss();
                                    var toast = _this.toastCtrl.create({
                                        message: response.message,
                                        showCloseButton: true,
                                        closeButtonText: 'Ok',
                                        duration: 5000
                                    });
                                    toast.present();
                                }
                            });
                        }
                    }
                ],
                enableBackdropDismiss: false
            });
            prompt.present();
        });
    };
    SettingPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-setting',template:/*ion-inline-start:"F:\My Current Office Work\StreetxUserApp\src\pages\setting\setting.html"*/'<!--\n\n  Generated template for the SettingPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n  	 <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Settings</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n<div padding-top text-center >\n\n    <img src="http://www.gravatar.com/avatar?d=mm&s=140" alt="avatar">\n\n\n\n    <ion-list inset>   	 \n\n          \n\n          <span style="margin-right: 259px !important;" > Account verify</span>\n\n          <br>{{userEmail.email}}\n\n          <span (click)="veryfyEmail(userEmail.email)" class="pull-left red-text" *ngIf="verifyEmail==false"> Not Verified</span>\n\n          <span class="pull-right green-text" *ngIf="verifyEmail==true"> Verified</span><hr>        \n\n          <button ion-item (click)="changeCurrentPassword()">Change Password</button><hr>  \n\n \n\n    </ion-list>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"F:\My Current Office Work\StreetxUserApp\src\pages\setting\setting.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */], __WEBPACK_IMPORTED_MODULE_3__providers_setup_services__["a" /* SetupService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */]])
    ], SettingPage);
    return SettingPage;
}());

//# sourceMappingURL=setting.js.map

/***/ }),

/***/ 254:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConferenceData; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_data__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(227);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_of__ = __webpack_require__(358);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_of__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ConferenceData = (function () {
    function ConferenceData(http, user) {
        this.http = http;
        this.user = user;
    }
    ConferenceData.prototype.load = function () {
        if (this.data) {
            return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].of(this.data);
        }
        else {
            return this.http.get('assets/data/data.json')
                .map(this.processData, this);
        }
    };
    ConferenceData.prototype.processData = function (data) {
        var _this = this;
        // just some good 'ol JS fun with objects and arrays
        // build up the data by linking speakers to sessions
        this.data = data.json();
        this.data.tracks = [];
        // loop through each day in the schedule
        this.data.schedule.forEach(function (day) {
            // loop through each timeline group in the day
            day.groups.forEach(function (group) {
                // loop through each session in the timeline group
                group.sessions.forEach(function (session) {
                    session.speakers = [];
                    if (session.speakerNames) {
                        session.speakerNames.forEach(function (speakerName) {
                            var speaker = _this.data.speakers.find(function (s) { return s.name === speakerName; });
                            if (speaker) {
                                session.speakers.push(speaker);
                                speaker.sessions = speaker.sessions || [];
                                speaker.sessions.push(session);
                            }
                        });
                    }
                    if (session.tracks) {
                        session.tracks.forEach(function (track) {
                            if (_this.data.tracks.indexOf(track) < 0) {
                                _this.data.tracks.push(track);
                            }
                        });
                    }
                });
            });
        });
        return this.data;
    };
    ConferenceData.prototype.getTimeline = function (dayIndex, queryText, excludeTracks, segment) {
        var _this = this;
        if (queryText === void 0) { queryText = ''; }
        if (excludeTracks === void 0) { excludeTracks = []; }
        if (segment === void 0) { segment = 'all'; }
        return this.load().map(function (data) {
            var day = data.schedule[dayIndex];
            day.shownSessions = 0;
            queryText = queryText.toLowerCase().replace(/,|\.|-/g, ' ');
            var queryWords = queryText.split(' ').filter(function (w) { return !!w.trim().length; });
            day.groups.forEach(function (group) {
                group.hide = true;
                group.sessions.forEach(function (session) {
                    // check if this session should show or not
                    _this.filterSession(session, queryWords, excludeTracks, segment);
                    if (!session.hide) {
                        // if this session is not hidden then this group should show
                        group.hide = false;
                        day.shownSessions++;
                    }
                });
            });
            return day;
        });
    };
    ConferenceData.prototype.filterSession = function (session, queryWords, excludeTracks, segment) {
        var matchesQueryText = false;
        if (queryWords.length) {
            // of any query word is in the session name than it passes the query test
            queryWords.forEach(function (queryWord) {
                if (session.name.toLowerCase().indexOf(queryWord) > -1) {
                    matchesQueryText = true;
                }
            });
        }
        else {
            // if there are no query words then this session passes the query test
            matchesQueryText = true;
        }
        // if any of the sessions tracks are not in the
        // exclude tracks then this session passes the track test
        var matchesTracks = false;
        session.tracks.forEach(function (trackName) {
            if (excludeTracks.indexOf(trackName) === -1) {
                matchesTracks = true;
            }
        });
        // if the segement is 'favorites', but session is not a user favorite
        // then this session does not pass the segment test
        var matchesSegment = false;
        if (segment === 'favorites') {
            if (this.user.hasFavorite(session.name)) {
                matchesSegment = true;
            }
        }
        else {
            matchesSegment = true;
        }
        // all tests must be true if it should not be hidden
        session.hide = !(matchesQueryText && matchesTracks && matchesSegment);
    };
    ConferenceData.prototype.getSpeakers = function () {
        return this.load().map(function (data) {
            return data.speakers.sort(function (a, b) {
                var aName = a.name.split(' ').pop();
                var bName = b.name.split(' ').pop();
                return aName.localeCompare(bName);
            });
        });
    };
    ConferenceData.prototype.getTracks = function () {
        return this.load().map(function (data) {
            return data.tracks.sort();
        });
    };
    ConferenceData.prototype.getMap = function () {
        return this.load().map(function (data) {
            return data.map;
        });
    };
    ConferenceData = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_2__user_data__["a" /* UserData */]])
    ], ConferenceData);
    return ConferenceData;
}());

//# sourceMappingURL=conference-data.js.map

/***/ }),

/***/ 255:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(256);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(278);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 278:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_in_app_browser__ = __webpack_require__(320);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__ = __webpack_require__(224);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__ = __webpack_require__(225);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_storage__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_component__ = __webpack_require__(332);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_tutorial_tutorial__ = __webpack_require__(226);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_login_login__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_forgotpassword_forgotpassword__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_signup_signup__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_changepassword_changepassword__ = __webpack_require__(252);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_chatuserlist_chatuserlist__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_chatroom_chatroom__ = __webpack_require__(251);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_gmap_gmap__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__agm_core__ = __webpack_require__(228);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__providers_setup_services__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_setting_setting__ = __webpack_require__(253);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__ionic_native_geolocation__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__providers_conference_data__ = __webpack_require__(254);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__providers_user_data__ = __webpack_require__(36);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};























var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* ConferenceApp */],
                __WEBPACK_IMPORTED_MODULE_9__pages_tutorial_tutorial__["a" /* TutorialPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_chatuserlist_chatuserlist__["a" /* ChatuserlistPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_chatroom_chatroom__["a" /* ChatroomPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_forgotpassword_forgotpassword__["a" /* ForgotpasswordPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_changepassword_changepassword__["a" /* ChangepasswordPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_gmap_gmap__["a" /* GmapPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_signup_signup__["a" /* SignupPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_setting_setting__["a" /* SettingPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_17__agm_core__["a" /* AgmCoreModule */].forRoot({
                    apiKey: 'AIzaSyCS-JPv-UnylrjSuPAgTEolYkYhMBjOCvs', libraries: ["places"]
                }),
                __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["f" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* ConferenceApp */], {}, {
                    links: [
                        { component: __WEBPACK_IMPORTED_MODULE_9__pages_tutorial_tutorial__["a" /* TutorialPage */], name: 'Tutorial', segment: 'tutorial' },
                        { component: __WEBPACK_IMPORTED_MODULE_10__pages_login_login__["a" /* LoginPage */], name: 'LoginPage', segment: 'login' },
                        { component: __WEBPACK_IMPORTED_MODULE_11__pages_forgotpassword_forgotpassword__["a" /* ForgotpasswordPage */], name: 'ForgotpasswordPage', segment: 'forgotpassword' },
                        { component: __WEBPACK_IMPORTED_MODULE_12__pages_signup_signup__["a" /* SignupPage */], name: 'SignupPage', segment: 'signup' },
                        { component: __WEBPACK_IMPORTED_MODULE_13__pages_changepassword_changepassword__["a" /* ChangepasswordPage */], name: 'ChangepasswordPage', segment: 'changepassword' },
                        { component: __WEBPACK_IMPORTED_MODULE_14__pages_chatuserlist_chatuserlist__["a" /* ChatuserlistPage */], name: 'ChatuserlistPage', segment: 'Chatuserlist' },
                        { component: __WEBPACK_IMPORTED_MODULE_15__pages_chatroom_chatroom__["a" /* ChatroomPage */], name: 'ChatroomPage', segment: 'chatroom' },
                        { component: __WEBPACK_IMPORTED_MODULE_19__pages_setting_setting__["a" /* SettingPage */], name: 'SettingPage', segment: 'setting' },
                        { component: __WEBPACK_IMPORTED_MODULE_16__pages_gmap_gmap__["a" /* GmapPage */], name: 'Gmap', segment: 'gmap' },
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_7__ionic_storage__["a" /* IonicStorageModule */].forRoot()
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["d" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* ConferenceApp */],
                __WEBPACK_IMPORTED_MODULE_9__pages_tutorial_tutorial__["a" /* TutorialPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_chatuserlist_chatuserlist__["a" /* ChatuserlistPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_chatroom_chatroom__["a" /* ChatroomPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_forgotpassword_forgotpassword__["a" /* ForgotpasswordPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_changepassword_changepassword__["a" /* ChangepasswordPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_gmap_gmap__["a" /* GmapPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_setting_setting__["a" /* SettingPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_signup_signup__["a" /* SignupPage */],
            ],
            providers: [
                { provide: __WEBPACK_IMPORTED_MODULE_2__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["e" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_21__providers_conference_data__["a" /* ConferenceData */], __WEBPACK_IMPORTED_MODULE_20__ionic_native_geolocation__["a" /* Geolocation */],
                __WEBPACK_IMPORTED_MODULE_22__providers_user_data__["a" /* UserData */], __WEBPACK_IMPORTED_MODULE_18__providers_setup_services__["a" /* SetupService */], __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_in_app_browser__["a" /* InAppBrowser */],
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__["a" /* SplashScreen */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 332:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConferenceApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_splash_screen__ = __webpack_require__(224);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__ = __webpack_require__(225);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_tutorial_tutorial__ = __webpack_require__(226);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_login_login__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_signup_signup__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_chatuserlist_chatuserlist__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_gmap_gmap__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_setting_setting__ = __webpack_require__(253);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_conference_data__ = __webpack_require__(254);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__providers_user_data__ = __webpack_require__(36);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};













var ConferenceApp = (function () {
    function ConferenceApp(events, userData, menu, platform, confData, storage, splashScreen, app, alertCtrl, statusBar, loadingCtrl) {
        var _this = this;
        this.events = events;
        this.userData = userData;
        this.menu = menu;
        this.platform = platform;
        this.confData = confData;
        this.storage = storage;
        this.splashScreen = splashScreen;
        this.app = app;
        this.alertCtrl = alertCtrl;
        this.statusBar = statusBar;
        this.loadingCtrl = loadingCtrl;
        this.loggedInPages = [
            { title: 'Home', name: 'GmapPage', component: __WEBPACK_IMPORTED_MODULE_9__pages_gmap_gmap__["a" /* GmapPage */], icon: 'home' },
            { title: 'Chat', name: 'ChatuserlistPage', component: __WEBPACK_IMPORTED_MODULE_8__pages_chatuserlist_chatuserlist__["a" /* ChatuserlistPage */], icon: 'chatbubbles' },
            { title: 'Setting', name: 'SettingPage', component: __WEBPACK_IMPORTED_MODULE_10__pages_setting_setting__["a" /* SettingPage */], icon: 'settings' },
            { title: 'Logout', name: null, component: null, icon: 'log-out', logsOut: true }
        ];
        this.loggedOutPages = [
            { title: 'Login', name: 'LoginPage', component: __WEBPACK_IMPORTED_MODULE_6__pages_login_login__["a" /* LoginPage */], icon: 'log-in' },
            { title: 'Signup', name: 'SignupPage', component: __WEBPACK_IMPORTED_MODULE_7__pages_signup_signup__["a" /* SignupPage */], icon: 'person-add' }
        ];
        this.registerBackButtonAction();
        // Check if the user has already seen the tutorial
        this.storage.get('hasSeenTutorial')
            .then(function (hasSeenTutorial) {
            if (hasSeenTutorial) {
                _this.rootPage = __WEBPACK_IMPORTED_MODULE_6__pages_login_login__["a" /* LoginPage */];
            }
            else {
                _this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_tutorial_tutorial__["a" /* TutorialPage */];
            }
            _this.platformReady();
        });
        // load the conference data
        confData.load();
        // decide which menu items should be hidden by current login status stored in local storage
        this.userData.hasLoggedIn().then(function (hasLoggedIn) {
            _this.enableMenu(hasLoggedIn === true);
        });
        this.enableMenu(true);
        this.listenToLoginEvents();
        events.subscribe('shareObject', function (userData) {
            localStorage.setItem('userprofileEmailId', JSON.stringify(userData));
            _this.userEmail = JSON.parse(localStorage.getItem('userprofileEmailId'));
            _this.emailId = _this.userEmail;
        });
    }
    ConferenceApp.prototype.registerBackButtonAction = function () {
        var _this = this;
        this.platform.registerBackButtonAction(function () {
            var nav = _this.app.getActiveNavs()[0];
            var activeView = nav.getActive();
            if (activeView.name === "GmapPage") {
                if (nav.canGoBack()) {
                    nav.pop();
                }
                else {
                    var alert_1 = _this.alertCtrl.create({
                        title: 'App termination',
                        message: 'Do you want to close the app?',
                        buttons: [{
                                text: 'Cancel',
                                role: 'cancel',
                                handler: function () {
                                    console.log('Application exit prevented!');
                                }
                            }, {
                                text: 'Close App',
                                handler: function () {
                                    _this.platform.exitApp(); // Close this application
                                }
                            }]
                    });
                    alert_1.present();
                }
            }
        });
    };
    ConferenceApp.prototype.openPage = function (page) {
        var _this = this;
        var params = {};
        // the nav component was found using @ViewChild(Nav)
        // setRoot on the nav to remove previous pages and only have this page
        // we wouldn't want the back button to show in this scenario
        if (page.index) {
            params = { tabIndex: page.index };
        }
        // If we are already on tabs just change the selected tab
        // don't setRoot again, this maintains the history stack of the
        // tabs even if changing them from the menu
        if (this.nav.getActiveChildNavs().length && page.index != undefined) {
            this.nav.getActiveChildNavs()[0].select(page.index);
        }
        else {
            this.nav.setRoot(page.component, params).catch(function (err) {
                console.log("Didn't set nav root: " + err);
            });
        }
        if (page.logsOut === true) {
            // Give the menu time to close before changing to logged out
            var loading = this.loadingCtrl.create({
                content: 'Logout please wait...'
            });
            loading.present();
            localStorage.removeItem("logindetail");
            localStorage.removeItem("userprofileEmailId");
            setTimeout(function () { return _this.welcomeToBack(); }, loading.dismiss(), 1000);
        }
    };
    ConferenceApp.prototype.welcomeToBack = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_6__pages_login_login__["a" /* LoginPage */]);
    };
    // openTutorial() {
    //   this.nav.setRoot(TutorialPage);
    // }
    ConferenceApp.prototype.listenToLoginEvents = function () {
        var _this = this;
        this.events.subscribe('user:login', function () {
            _this.enableMenu(true);
        });
        this.events.subscribe('user:signup', function () {
            _this.enableMenu(true);
        });
        this.events.subscribe('user:logout', function () {
            _this.enableMenu(false);
        });
    };
    ConferenceApp.prototype.enableMenu = function (loggedIn) {
        this.menu.enable(loggedIn, 'loggedInMenu');
        this.menu.enable(!loggedIn, 'loggedOutMenu');
    };
    ConferenceApp.prototype.platformReady = function () {
        var _this = this;
        // Call any initial plugins when ready
        this.platform.ready().then(function () {
            _this.statusBar.backgroundColorByHexString('#001f38');
            _this.splashScreen.hide();
        });
    };
    ConferenceApp.prototype.isActive = function (page) {
        var childNav = this.nav.getActiveChildNavs()[0];
        // Tabs are a special case because they have their own navigation
        if (childNav) {
            if (childNav.getSelected() && childNav.getSelected().root === page.tabComponent) {
                return 'primary';
            }
            return;
        }
        if (this.nav.getActive() && this.nav.getActive().name === page.name) {
            return 'primary';
        }
        return;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Nav */])
    ], ConferenceApp.prototype, "nav", void 0);
    ConferenceApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"F:\My Current Office Work\StreetxUserApp\src\app\app.template.html"*/'<ion-split-pane>\n\n\n\n \n\n\n\n  <!-- logged in menu -->\n\n  <ion-menu id="loggedInMenu" [content]="content">\n\n\n\n    <ion-header>\n\n      <ion-toolbar>\n\n         <ion-title style="color: #fff; padding: 0 20px 1px;" text-left> <ion-icon name="contact" class="icon-chat-user">     \n\n          </ion-icon><br>\n\n          <small class="white-text">{{this.emailId}}</small>\n\n       </ion-title>\n\n      </ion-toolbar>\n\n    </ion-header>\n\n\n\n    <ion-content class="outer-content">\n\n\n\n      <ion-list>\n\n        <!-- <ion-list-header>\n\n          Account\n\n        </ion-list-header> -->\n\n        <button class="sidemenu-item" ion-item menuClose *ngFor="let p of loggedInPages" (click)="openPage(p)">\n\n          <ion-icon item-start [name]="p.icon" [color]="isActive(p)"></ion-icon>\n\n          {{p.title}}\n\n        </button>\n\n      </ion-list>\n\n\n\n\n\n    </ion-content>\n\n\n\n  </ion-menu>\n\n\n\n  <!-- main navigation -->\n\n  <ion-nav [root]="rootPage" #content swipeBackEnabled="false" main name="app"></ion-nav>\n\n\n\n</ion-split-pane>\n\n'/*ion-inline-end:"F:\My Current Office Work\StreetxUserApp\src\app\app.template.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Events */],
            __WEBPACK_IMPORTED_MODULE_12__providers_user_data__["a" /* UserData */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_11__providers_conference_data__["a" /* ConferenceData */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */]])
    ], ConferenceApp);
    return ConferenceApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 355:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 36:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserData; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(49);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserData = (function () {
    function UserData(events, storage) {
        this.events = events;
        this.storage = storage;
        this._favorites = [];
        this.HAS_LOGGED_IN = 'hasLoggedIn';
        this.HAS_SEEN_TUTORIAL = 'hasSeenTutorial';
    }
    UserData.prototype.hasFavorite = function (sessionName) {
        return (this._favorites.indexOf(sessionName) > -1);
    };
    ;
    UserData.prototype.addFavorite = function (sessionName) {
        this._favorites.push(sessionName);
    };
    ;
    UserData.prototype.removeFavorite = function (sessionName) {
        var index = this._favorites.indexOf(sessionName);
        if (index > -1) {
            this._favorites.splice(index, 1);
        }
    };
    ;
    UserData.prototype.login = function (username) {
        this.storage.set(this.HAS_LOGGED_IN, true);
        this.setUsername(username);
        this.events.publish('user:login');
    };
    ;
    UserData.prototype.signup = function (username) {
        this.storage.set(this.HAS_LOGGED_IN, true);
        this.setUsername(username);
        this.events.publish('user:signup');
    };
    ;
    UserData.prototype.logout = function () {
        this.storage.remove(this.HAS_LOGGED_IN);
        this.storage.remove('username');
        this.events.publish('user:logout');
    };
    ;
    UserData.prototype.setUsername = function (username) {
        this.storage.set('username', username);
    };
    ;
    UserData.prototype.getUsername = function () {
        return this.storage.get('username').then(function (value) {
            return value;
        });
    };
    ;
    UserData.prototype.hasLoggedIn = function () {
        return this.storage.get(this.HAS_LOGGED_IN).then(function (value) {
            return value === true;
        });
    };
    ;
    UserData.prototype.checkHasSeenTutorial = function () {
        return this.storage.get(this.HAS_SEEN_TUTORIAL).then(function (value) {
            return value;
        });
    };
    ;
    UserData = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Events */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]])
    ], UserData);
    return UserData;
}());

//# sourceMappingURL=user-data.js.map

/***/ }),

/***/ 37:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_user_data__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__forgotpassword_forgotpassword__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__signup_signup__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__gmap_gmap__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_setup_services__ = __webpack_require__(20);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var LoginPage = (function () {
    function LoginPage(userData, navCtrl, toastCtrl, events, menuCtrl, navParams, _setupService, loadingCtrl) {
        this.userData = userData;
        this.navCtrl = navCtrl;
        this.toastCtrl = toastCtrl;
        this.events = events;
        this.menuCtrl = menuCtrl;
        this.navParams = navParams;
        this._setupService = _setupService;
        this.loadingCtrl = loadingCtrl;
        this.login = { username: '', password: '' };
        this.loginDetail = { email: "", password: "", lat: '', long: '' };
        this.submitted = false;
        this.setCurrentPosition();
    }
    LoginPage.prototype.setCurrentPosition = function () {
        var _this = this;
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition(function (position) {
                _this.loginDetail.lat = position.coords.latitude;
                _this.loginDetail.long = position.coords.longitude;
            });
        }
    };
    LoginPage.prototype.onlogin1 = function (form) {
        var _this = this;
        this.submitted = true;
        if (form.valid) {
            this.userData.login(this.login.username);
            var loading_1 = this.loadingCtrl.create({
                content: 'Logging please wait...'
            });
            loading_1.present();
            this._setupService.createLoginDetail(this.loginDetail).subscribe(function (result) {
                if (result.statusCode == 200) {
                    _this.responseData = result;
                    localStorage.setItem('logindetail', JSON.stringify(_this.responseData));
                    _this.user = JSON.parse(localStorage.getItem('logindetail'));
                    _this.userName = _this.responseData.user.email;
                    _this.events.publish("shareObject", _this.userName);
                    loading_1.dismiss();
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__gmap_gmap__["a" /* GmapPage */]);
                }
                else {
                    _this.responseData = result;
                    loading_1.dismiss();
                    var toast = _this.toastCtrl.create({
                        message: _this.responseData.message,
                        showCloseButton: true,
                        closeButtonText: 'Ok',
                        duration: 5000
                    });
                    toast.present();
                }
            });
        }
    };
    LoginPage.prototype.ionViewDidEnter = function () {
        // the root left menu should be disabled on the tutorial page
        this.menuCtrl.enable(false);
    };
    LoginPage.prototype.ionViewWillLeave = function () {
        // enable the root left menu when leaving the tutorial page
        this.menuCtrl.enable(true);
    };
    LoginPage.prototype.onlogin12 = function (form) {
        this.submitted = true;
        if (form.valid) {
            this.userData.login(this.login.username);
            this.userName = this.loginDetail.email;
            this.events.publish("shareObject", this.userName);
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__gmap_gmap__["a" /* GmapPage */]);
        }
    };
    LoginPage.prototype.onSignup = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__signup_signup__["a" /* SignupPage */]);
    };
    LoginPage.prototype.forgotPassword = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__forgotpassword_forgotpassword__["a" /* ForgotpasswordPage */]);
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-user',template:/*ion-inline-start:"F:\My Current Office Work\StreetxUserApp\src\pages\login\login.html"*/'\n\n\n\n<ion-content>\n\n	<div  text-center style=" margin-top: 26px;">\n\n		<img src="assets/img/Streetx logo.png" alt="Ionic logo" class="brand-logo">\n\n	</div>\n\n	<ion-row class="logo" text-center>\n\n		 <ion-col col-12 style="    font-size: 2em;    margin-top: 38px;    color: #3896ea;"><ion-icon name="contact" class="icon-chat-user"></ion-icon></ion-col>\n\n		 <ion-col col-12><h3 style="color: #3896ea;"><strong>Sign In</strong></h3></ion-col>\n\n	</ion-row>\n\n	<form #loginForm="ngForm" novalidate>\n\n		<ion-list no-lines class="form-input-fields">\n\n			<ion-item>\n\n				<ion-input [(ngModel)]="loginDetail.email" placeholder="enter emailid" name="email" type="text" #email="ngModel" spellcheck="false" autocapitalize="off" class="login-input"\n\n					required>\n\n				</ion-input>\n\n			</ion-item>\n\n			<p ion-text [hidden]="email.valid || submitted == false" color="danger" padding-left>\n\n				email is required\n\n			</p>\n\n\n\n			<ion-item>\n\n				<ion-input [(ngModel)]="loginDetail.password" placeholder="enter password" name="password" type="password" #password="ngModel" required class="login-input" >\n\n				</ion-input>\n\n			</ion-item>\n\n			<p ion-text [hidden]="password.valid || submitted == false" color="danger" padding-left>\n\n				Password is required\n\n			</p>\n\n			<ion-row>\n\n				<ion-col text-right>\n\n			      <a style="font-size: 0.8em; color: #bdbdbd;" (click)="forgotPassword()">Forgot password?</a>\n\n			    </ion-col>\n\n			</ion-row>\n\n			<ion-row responsive-sm>\n\n				<ion-col >\n\n					<button style="    background-color: #3996ea;" ion-button (click)="onlogin1(loginForm)" type="submit" block>Login</button>\n\n				</ion-col>\n\n			</ion-row>\n\n			<hr>\n\n			<ion-row>\n\n				<ion-col text-center  style="font-size: 0.8em; color: #bdbdbd;">\n\n					Not a member? <a (click)="onSignup()">Create an account</a>\n\n				</ion-col>\n\n			</ion-row>\n\n		</ion-list>\n\n	</form>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"F:\My Current Office Work\StreetxUserApp\src\pages\login\login.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_user_data__["a" /* UserData */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Events */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* MenuController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_6__providers_setup_services__["a" /* SetupService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 38:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GmapPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__agm_core__ = __webpack_require__(228);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_setup_services__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_geolocation__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_socket_io_client__ = __webpack_require__(237);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_socket_io_client___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_socket_io_client__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_sails_io_js__ = __webpack_require__(250);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_sails_io_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_sails_io_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__chatuserlist_chatuserlist__ = __webpack_require__(130);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






//import { UserData } from '../../providers/user-data';




/**
 * Generated class for the MapPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var GmapPage = (function () {
    function GmapPage(navCtrl, toastCtrl, events, geolocation, platform, loadingCtrl, storage, mapsAPILoader, _setupService, ngZone) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.toastCtrl = toastCtrl;
        this.events = events;
        this.geolocation = geolocation;
        this.platform = platform;
        this.loadingCtrl = loadingCtrl;
        this.storage = storage;
        this.mapsAPILoader = mapsAPILoader;
        this._setupService = _setupService;
        this.ngZone = ngZone;
        this.io = __WEBPACK_IMPORTED_MODULE_8_sails_io_js__(__WEBPACK_IMPORTED_MODULE_7_socket_io_client__);
        this.userData = [];
        this.tradersUpdate = [];
        this.chatRequest = { sender: '', recipient: '' };
        this.trderinfoGet = { email: '' };
        this.traderBtcValueAfterUpdate = { email: '', buyRate: '0', currencyType: '', volume: '0', sellRate: '0' };
        this.traderInrValueAfterUpdate = { email: '', buyRate: '0', currencyType: '', volume: '0', sellRate: '0' };
        this.io.sails.url = "http://192.168.0.133:3000";
        this.data = false;
        this.userdata();
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition(function (position) {
                _this.latitude = position.coords.latitude;
                _this.longitude = position.coords.longitude;
                _this.zoom = 16;
            });
        }
        this.setCurrentPosition();
        var ngZ = this.ngZone;
        var event = this.events;
        this.io.socket.on('updatedTrades', function (respons) {
            ngZ.run(function () {
                event.publish("ShareUpdatedValues", respons.data[0]);
            });
        });
        this.listenToDataChangeEvents();
    }
    GmapPage.prototype.listenToDataChangeEvents = function () {
        var _this = this;
        this.events.subscribe('ShareUpdatedValues', function (userData) {
            _this.clickedMarker(_this.trderinfoGet.email);
            for (var i = 0; i < _this.tradersUpdate.length; i++) {
                if (userData == undefined) {
                }
                else {
                    if (_this.tradersUpdate[i].currencyType == userData.currencyType) {
                        _this.tradersUpdate[i] = userData;
                    }
                }
            }
        });
    };
    //end constructor
    GmapPage.prototype.currenloct = function () {
        this.setCurrentPosition();
    };
    GmapPage.prototype.userdata = function () {
        this.user = JSON.parse(localStorage.getItem('logindetail'));
        if (this.user != null || this.user != undefined) {
            this.chatRequest.sender = this.user.user.email;
        }
    };
    GmapPage.prototype.mapClicked = function () {
        this.setCurrentPosition();
        this.data = false;
    };
    GmapPage.prototype.ionViewWillEnter = function () {
        this.setCurrentPosition();
    };
    GmapPage.prototype.ngOnInit = function () {
        var _this = this;
        this.agmMap.triggerResize();
        this.searchControl = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormControl */]();
        //set current position
        this.setCurrentPosition();
        this.loadAllTraders();
        //load Places Autocomplete
        this.mapsAPILoader.load().then(function () {
            var autocomplete = new google.maps.places.Autocomplete(_this.searchElementRef.nativeElement, {
                types: ["address"]
            });
            autocomplete.addListener("place_changed", function () {
                _this.ngZone.run(function () {
                    //get the place result
                    var place = autocomplete.getPlace();
                    if (place.geometry === undefined || place.geometry === null) {
                        return;
                    }
                    //set latitude, longitude and zoom
                    _this.latitude = place.geometry.location.lat();
                    _this.longitude = place.geometry.location.lng();
                    _this.icon = 'assets/img/currentUserIcon.png';
                    _this.zoom = 16;
                });
            });
        });
    };
    //set current position
    GmapPage.prototype.setCurrentPosition = function () {
        var _this = this;
        this.platform.ready().then(function () {
            var options = {
                enableHighAccuracy: true,
                maximumAge: 3600,
                timeout: 10000
            };
            _this.geolocation.getCurrentPosition(options).then(function (response) {
                _this.latitude = response.coords.latitude;
                _this.longitude = response.coords.longitude;
                _this.zoom = 16;
            }).catch(function (error) {
            });
        });
    };
    // click on marker and open tab in buttom
    GmapPage.prototype.clickedMarker = function (traderEmail) {
        var _this = this;
        this.traderBtcValueAfterUpdate.email = traderEmail;
        this.trderinfoGet.email = traderEmail;
        this._setupService.getTraderInfo(this.trderinfoGet).subscribe(function (response) {
            if (response.statusCode == 200) {
                _this.data = true;
                if (response.data.length > 0) {
                    _this.tradersUpdate = response.data;
                }
            }
            else {
                var toast = _this.toastCtrl.create({
                    message: response.message,
                    showCloseButton: true,
                    closeButtonText: 'Ok',
                    duration: 5000
                });
                toast.present();
            }
        });
    };
    // send request when click on marker and click in request button
    GmapPage.prototype.requestToTraders = function (recipientEmail) {
        var _this = this;
        this.chatRequest.recipient = recipientEmail;
        var loading = this.loadingCtrl.create({
            content: 'sending request...'
        });
        loading.present();
        this._setupService.sendRequest(this.chatRequest).subscribe(function (response) {
            loading.dismiss();
            if (response.statusCode == 200) {
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_9__chatuserlist_chatuserlist__["a" /* ChatuserlistPage */]);
                var toast = _this.toastCtrl.create({
                    message: response.message,
                    showCloseButton: true,
                    closeButtonText: 'Ok',
                    duration: 5000
                });
                toast.present();
            }
            else {
                var toast = _this.toastCtrl.create({
                    message: response.message,
                    showCloseButton: true,
                    closeButtonText: 'Ok',
                    duration: 5000
                });
                toast.present();
            }
        });
    };
    //
    GmapPage.prototype.loadAllTraders = function () {
        var _this = this;
        this.tradersMarker = [];
        this._setupService.getTradersLocation().subscribe(function (res) {
            if (res) {
                for (var _i = 0, _a = res.data; _i < _a.length; _i++) {
                    var traders = _a[_i];
                    _this.tradersMarker.push({
                        lat: Number(traders.lat),
                        lng: Number(traders.long),
                        title: traders.email,
                        icon: 'assets/img/tradersIcon.png',
                        draggable: false,
                    });
                }
            }
        });
    };
    GmapPage.prototype.ionViewWillLeave = function () {
        this.io.socket.disconnect();
        delete this.io.sails;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["_8" /* ViewChild */])("search"),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__angular_core__["t" /* ElementRef */])
    ], GmapPage.prototype, "searchElementRef", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_0__agm_core__["b" /* AgmMap */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__agm_core__["b" /* AgmMap */])
    ], GmapPage.prototype, "agmMap", void 0);
    GmapPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["m" /* Component */])({
            selector: 'page-map',
            styles: ["\n    agm-map {\n      height: 100%;\n      width:100%;\n    }\n  "],template:/*ion-inline-start:"F:\My Current Office Work\StreetxUserApp\src\pages\gmap\gmap.html"*/'\n\n<ion-content class="gmapPage">\n\n  <button class="gmap-menu-button" ion-button menuToggle>\n\n    <ion-icon name="menu"></ion-icon>\n\n  </button>\n\n	<div class="form-group gmap-search">    \n\n      <input placeholder="search for location" autocorrect="off" autocapitalize="off" spellcheck="off" type="text" class="form-control gmap-search-input" #search [formControl]="searchControl">\n\n    <ion-icon name="locate" (click)="currenloct()" class="gmap-current-location"></ion-icon> \n\n  </div>\n\n     <agm-map #agmMap [latitude]="latitude" [longitude]="longitude" [scrollwheel]="false"  [zoom]="zoom" (mapClick)="mapClicked($event)" style="position:fixed;" >\n\n        <agm-marker [latitude]="latitude" [longitude]="longitude" ></agm-marker>\n\n         <agm-circle [latitude]="latitude" [longitude]="longitude" [radius]="50" [fillColor]="\'blue\'"></agm-circle>\n\n         <agm-marker *ngFor="let m of tradersMarker; let i = index"\n\n          [latitude]="m.lat" [longitude]="m.lng" [title]="m.title"\n\n                                            [markerDraggable]="m.draggable" (dragEnd)="markerDragEnd(m, $event)" [iconUrl]="m.icon" (markerClick)="clickedMarker(m.title, i)"></agm-marker>\n\n      </agm-map>\n\n\n\n\n\n  <div *ngIf="!data" class="welcome-info text-center">\n\n      <div class="row no-margin footer-button-line-height white-text" text-center>\n\n        <div col-6 offset-3><h3>Hi, Welcome </h3><hr style="height: 3.55px;\n\n            background-color: rgba(255, 255, 255, 0.61);width: 50px;">\n\n  </div>\n\n        <div col-8 offset-2><p>To view nearby trader\'s please click on one of the ticker</p></div>\n\n\n\n      </div>\n\n\n\n\n\n  </div>\n\n  <div *ngIf="data" class="trader-info" text-center>\n\n      <div class="row no-margin footer-button-line-height white-text">\n\n        <div col-8 offset-2><h3>Trader\'s Information</h3><hr style="    height: 3.55px;    background-color: rgb(40, 144, 252);    width: 50px;"></div>\n\n        <div class="col-2" col-8 offset-2>\n\n          <ion-icon name="contact" class="icon-chat-user"></ion-icon>\n\n        </div>\n\n        <div col-8 offset-2>\n\n          <p><strong>Email: {{trderinfoGet?.email}}</strong></p>\n\n        </div>\n\n        <div col-12 text-center>\n\n\n\n          <ion-row *ngFor="let trader of tradersUpdate">\n\n            <ion-col col-4 offset-1 style="    background: #2890fc; border-radius: 15px;color: #fff;">\n\n              <strong>buy</strong>-<strong>{{trader?.buyRate}} {{trader?.currencyType}}</strong>\n\n            </ion-col>&nbsp;\n\n            <ion-col col-3 style="    background: #2890fc; border-radius: 15px;color: #fff;">\n\n              <strong>sell</strong>-<strong>{{trader?.sellRate}} {{trader?.currencyType}}</strong>\n\n            </ion-col>&nbsp;\n\n            <ion-col col-3 style="    background: #2890fc;border-radius: 15px; color: #fff;">\n\n              <strong>volume</strong>-<strong>{{trader?.volume}}</strong>\n\n            </ion-col>\n\n          </ion-row>\n\n\n\n\n\n         \n\n        </div>\n\n      </div>\n\n    <div class="row no-margin footer-button-line-height white-text">\n\n       <button ion-button block (click)="requestToTraders(trderinfoGet?.email)">Request</button>\n\n    </div>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"F:\My Current Office Work\StreetxUserApp\src\pages\gmap\gmap.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Events */], __WEBPACK_IMPORTED_MODULE_6__ionic_native_geolocation__["a" /* Geolocation */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_0__agm_core__["c" /* MapsAPILoader */], __WEBPACK_IMPORTED_MODULE_4__providers_setup_services__["a" /* SetupService */], __WEBPACK_IMPORTED_MODULE_2__angular_core__["M" /* NgZone */]])
    ], GmapPage);
    return GmapPage;
}());

//# sourceMappingURL=gmap.js.map

/***/ }),

/***/ 50:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_user_data__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_setup_services__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_login_login__ = __webpack_require__(37);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





//import { TabsPage } from '../tabs-page/tabs-page';
var SignupPage = (function () {
    function SignupPage(navCtrl, loadingCtrl, userData, alertCtrl, menuCtrl, navParams, _setupService, toastCtrl) {
        this.navCtrl = navCtrl;
        this.loadingCtrl = loadingCtrl;
        this.userData = userData;
        this.alertCtrl = alertCtrl;
        this.menuCtrl = menuCtrl;
        this.navParams = navParams;
        this._setupService = _setupService;
        this.toastCtrl = toastCtrl;
        this.signup1 = { username: '', password: '' };
        this.signup = { fullName: '', mobileNumber: '', email: '', password: '', confirmPassword: '' };
        this.submitted = false;
    }
    SignupPage.prototype.onSignup = function (form) {
        var _this = this;
        this.submitted = true;
        if (form.valid) {
            this.userData.signup(this.signup1.username);
            var loading_1 = this.loadingCtrl.create({
                content: 'account creating...'
            });
            loading_1.present();
            this._setupService.createUserAccount(this.signup).subscribe(function (result) {
                if (result.statusCode == 200) {
                    _this.responseData = result;
                    console.log("this.responseData = = " + JSON.stringify(_this.responseData));
                    loading_1.dismiss();
                    localStorage.setItem('signUp', JSON.stringify(_this.responseData));
                    var response = JSON.parse(localStorage.getItem('signUp'));
                    console.log("this.responseData = = " + JSON.stringify(response.userMailId));
                    var toast = _this.toastCtrl.create({
                        message: 'OTP sent to your email id',
                        showCloseButton: true,
                        closeButtonText: 'Ok',
                        duration: 5000
                    });
                    toast.present();
                    var prompt_1 = _this.alertCtrl.create({
                        title: 'One Time Password',
                        inputs: [
                            {
                                name: 'otp',
                                type: 'password',
                                placeholder: 'One Time Password'
                            }
                        ],
                        buttons: [
                            {
                                text: 'Cancel',
                                handler: function (data) {
                                    var toast = _this.toastCtrl.create({
                                        message: 'account created please login and verify !!',
                                        showCloseButton: true,
                                        closeButtonText: 'Ok',
                                        duration: 5000
                                    });
                                    toast.present();
                                    console.log("data " + data);
                                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__pages_login_login__["a" /* LoginPage */]);
                                }
                            },
                            {
                                text: 'submit',
                                handler: function (data) {
                                    if (!data.otp) {
                                        var toast_1 = _this.toastCtrl.create({
                                            message: 'Otp should be required please signUp retry',
                                            showCloseButton: true,
                                            closeButtonText: 'Ok',
                                            duration: 5000
                                        });
                                        toast_1.present();
                                    }
                                    else {
                                        var loading_2 = _this.loadingCtrl.create({
                                            content: 'verifying otp...'
                                        });
                                        loading_2.present();
                                        _this._setupService.VerificationEmail({ "email": response.userMailId, "otp": data.otp
                                        }).subscribe(function (result) {
                                            loading_2.dismiss();
                                            if (result.statusCode == 200) {
                                                var toast_2 = _this.toastCtrl.create({
                                                    message: 'SignUp successfully',
                                                    showCloseButton: true,
                                                    closeButtonText: 'Ok',
                                                    duration: 5000
                                                });
                                                toast_2.present();
                                                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__pages_login_login__["a" /* LoginPage */]);
                                            }
                                        });
                                    }
                                }
                            }
                        ],
                        enableBackdropDismiss: false
                    });
                    prompt_1.present();
                }
                else {
                    loading_1.dismiss();
                    _this.responseData = result;
                    var toast = _this.toastCtrl.create({
                        message: _this.responseData.message,
                        showCloseButton: true,
                        closeButtonText: 'Ok',
                        duration: 5000
                    });
                    toast.present();
                }
            });
        }
    };
    SignupPage.prototype.onLogin = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__pages_login_login__["a" /* LoginPage */]);
    };
    SignupPage.prototype.ionViewDidEnter = function () {
        // the root left menu should be disabled on the tutorial page
        this.menuCtrl.enable(false);
    };
    SignupPage.prototype.ionViewWillLeave = function () {
        // enable the root left menu when leaving the tutorial page
        this.menuCtrl.enable(true);
    };
    SignupPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-user',template:/*ion-inline-start:"F:\My Current Office Work\StreetxUserApp\src\pages\signup\signup.html"*/'\n\n<ion-content>\n\n\n\n	<div  text-center style=" margin-top: 26px;">\n\n		<img src="assets/img/Streetx logo.png" alt="Ionic logo" class="brand-logo">\n\n	</div>\n\n	<ion-row class="logo" text-center>\n\n		 <ion-col col-12 style="    font-size: 2em;    margin-top: 38px;    color: #3896ea;"><ion-icon name="create" class="icon-chat-user"></ion-icon></ion-col>\n\n		 <ion-col col-12><h3 style="color: #3896ea;"><strong>Create Account</strong></h3></ion-col>\n\n	</ion-row>\n\n	<form #signupForm="ngForm" novalidate>\n\n		<ion-list no-lines class="form-input-fields">\n\n			<ion-row>\n\n				<ion-col col-6 class="padding0">\n\n					<ion-item class="padding0">\n\n						<ion-input [(ngModel)]="signup.fullName" placeholder="Full name" name="fullName" type="text" #fullName="ngModel" required class="login-input">\n\n						</ion-input>\n\n					</ion-item>\n\n					<p ion-text [hidden]="fullName.valid || submitted == false" color="danger" padding-left>\n\n						Name is required\n\n					</p>\n\n				</ion-col>\n\n				<ion-col col-6 class="padding0">\n\n					<ion-item class="padding0">\n\n						<ion-input [(ngModel)]="signup.mobileNumber" placeholder="enter mobile number" name="mobileNumber" number="number" #mobileNumber="ngModel" required class="login-input">\n\n						</ion-input>\n\n					</ion-item>\n\n					<p ion-text [hidden]="mobileNumber.valid || submitted == false" color="danger" padding-left>\n\n						mobileNumber is required\n\n					</p>\n\n				</ion-col>\n\n			</ion-row>\n\n			<ion-row>\n\n				<ion-col class="padding0">\n\n					<ion-item class="padding0">\n\n						<ion-input [(ngModel)]="signup.email" placeholder="enter emailid" name="email" type="email" #email="ngModel" required class="login-input" >\n\n						</ion-input>\n\n					</ion-item>\n\n					<p ion-text [hidden]="email.valid || submitted == false" color="danger" padding-left>\n\n						email is required\n\n					</p>\n\n\n\n\n\n				</ion-col>\n\n			</ion-row>\n\n			<ion-row>\n\n\n\n				<ion-col col-6 class="padding0">\n\n					<ion-item class="padding0">\n\n						<ion-input [(ngModel)]="signup.password" placeholder="enter password" name="password" type="password" #password="ngModel" required class="login-input" >\n\n						</ion-input>\n\n					</ion-item>\n\n					<p ion-text [hidden]="password.valid || submitted == false" color="danger" padding-left>\n\n						Password is required\n\n					</p>\n\n				</ion-col>\n\n				<ion-col col-6 class="padding0">\n\n					<ion-item class="padding0">\n\n						<ion-input [(ngModel)]="signup.confirmPassword" placeholder="Re-enter password" name="confirmpassword" type="password" #confirmPassword="ngModel" required class="login-input">\n\n						</ion-input>\n\n					</ion-item>\n\n					<p ion-text [hidden]="confirmPassword.valid || submitted == false" color="danger" padding-left>\n\n						confirm password is required\n\n					</p>\n\n				</ion-col>\n\n			</ion-row>\n\n\n\n			<ion-row responsive-sm>\n\n				<ion-col >\n\n					<button style="    background-color: #3996ea;" ion-button (click)="onSignup(signupForm)" type="submit" block>Create</button>\n\n				</ion-col>\n\n			</ion-row>\n\n			<hr>\n\n			<ion-row>\n\n				<ion-col text-center  style="font-size: 0.8em; color: #bdbdbd;">\n\n					Already a member? <a (click)="onLogin()">Login</a>\n\n				</ion-col>\n\n			</ion-row>\n\n		</ion-list>\n\n\n\n\n\n	</form>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"F:\My Current Office Work\StreetxUserApp\src\pages\signup\signup.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_2__providers_user_data__["a" /* UserData */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* MenuController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_setup_services__["a" /* SetupService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */]])
    ], SignupPage);
    return SignupPage;
}());

//# sourceMappingURL=signup.js.map

/***/ })

},[255]);
//# sourceMappingURL=main.js.map