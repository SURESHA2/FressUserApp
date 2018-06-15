var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { NavController, NavParams, AlertController, MenuController, ToastController, LoadingController, Platform } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { SignupPage } from '../signup/signup';
import { ChangepasswordPage } from '../changepassword/changepassword';
import { SetupService } from '../../providers/setup.services';
/**
 * Generated class for the ForgotpasswordPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ForgotpasswordPage = /** @class */ (function () {
    function ForgotpasswordPage(navCtrl, toastCtrl, menuCtrl, navParams, alertCtrl, _setupService, loadingCtrl, platform) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.toastCtrl = toastCtrl;
        this.menuCtrl = menuCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this._setupService = _setupService;
        this.loadingCtrl = loadingCtrl;
        this.platform = platform;
        this.emailId = { email: '' };
        this.otpvalue = { traderMailId: '', otp: '', };
        this.submitted = false;
        var backAction = platform.registerBackButtonAction(function () {
            _this.navCtrl.pop();
            backAction();
        });
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
                                            _this.navCtrl.push(ChangepasswordPage);
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
        this.navCtrl.setRoot(LoginPage);
    };
    ForgotpasswordPage.prototype.signup = function () {
        this.navCtrl.setRoot(SignupPage);
    };
    ForgotpasswordPage = __decorate([
        Component({
            selector: 'page-forgotpassword',
            templateUrl: 'forgotpassword.html',
        }),
        __metadata("design:paramtypes", [NavController,
            ToastController,
            MenuController,
            NavParams,
            AlertController,
            SetupService,
            LoadingController,
            Platform])
    ], ForgotpasswordPage);
    return ForgotpasswordPage;
}());
export { ForgotpasswordPage };
//# sourceMappingURL=forgotpassword.js.map