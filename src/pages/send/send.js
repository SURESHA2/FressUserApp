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
import { IonicPage } from 'ionic-angular';
import { NavController, Platform, NavParams, AlertController, LoadingController, ToastController } from 'ionic-angular';
import { SetupService } from '../../providers/setup.services';
import { UserData } from '../../providers/user-data';
/**
 * Generated class for the SendPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SendPage = /** @class */ (function () {
    function SendPage(userData, navCtrl, navParams, _setupService, alertCtrl, toastCtrl, loadingCtrl, platform) {
        var _this = this;
        this.userData = userData;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this._setupService = _setupService;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
        this.platform = platform;
        this.submitted = false;
        this.senddetails = { userMailId: '', amount: '', address: '', spendingPassword: '' };
        this.send = { amount: '', spendingPassword: '' };
        var user = JSON.parse(localStorage.getItem('logindetail'));
        this.email = user.user.email;
        var backAction = platform.registerBackButtonAction(function () {
            _this.navCtrl.pop();
            backAction();
        });
    }
    SendPage_1 = SendPage;
    SendPage.prototype.onsendBalance = function (Form) {
        var _this = this;
        this.senddetails.userMailId = this.email;
        this.submitted = true;
        if (Form.valid) {
            this.userData.send(this.send.amount);
            var loading_1 = this.loadingCtrl.create({
                content: 'transaction is procced...'
            });
            loading_1.present();
            this._setupService.createSendDetail(this.senddetails).subscribe(function (result) {
                console.log(_this.senddetails);
                if (result.statusCode == 200) {
                    _this.responseData = result;
                    console.log("transactions completed");
                    var toast = _this.toastCtrl.create({
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
                    loading_1.dismiss();
                    _this.navCtrl.setRoot(SendPage_1);
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
                // localStorage.setItem('senddetails',JSON.stringify(this.responseData));
                // this.user=JSON.parse(localStorage.getItem('senddetails'));
            });
        }
    };
    var SendPage_1;
    SendPage = SendPage_1 = __decorate([
        IonicPage(),
        Component({
            selector: 'page-send',
            templateUrl: 'send.html',
        }),
        __metadata("design:paramtypes", [UserData,
            NavController,
            NavParams,
            SetupService,
            AlertController,
            ToastController,
            LoadingController,
            Platform])
    ], SendPage);
    return SendPage;
}());
export { SendPage };
//# sourceMappingURL=send.js.map