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
//import { IonicPage, NavController, NavParams,Platform } from 'ionic-angular';
//import { NgForm } from '@angular/forms';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';
//import { UserData } from '../../providers/user-data';
//import { UserOptions,LoginDetail } from '../../interfaces/user-options';
//import { ForgotpasswordPage } from '../forgotpassword/forgotpassword';
//import { SignupPage } from '../signup/signup';
//import { DashboardPage } from '../dashboard/dashboard';
import { SetupService } from '../../providers/setup.services';
//import { Clipboard } from '@ionic-native/clipboard';
// import { DragulaService } from 'ng2-dragula/ng2-dragula';
/**
 * Generated class for the ExchangePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ExchangePage = /** @class */ (function () {
    function ExchangePage(navCtrl, navParams, platform, setupService) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.platform = platform;
        this.setupService = setupService;
        this.Exchange = "Page";
        this.isAndroid = false;
        this.userEmail = { email: '' };
        // this.dragula.setOptions('bag-items',{
        //    revertOnSpil:true
        //  });
        this.isAndroid = platform.is('android');
        //this.nav = nav
        this.userdata();
        this.getBTCAmount();
        var backAction = platform.registerBackButtonAction(function () {
            _this.navCtrl.pop();
            backAction();
        });
    }
    ExchangePage.prototype.userdata = function () {
        console.log("localhost::::::::::", JSON.parse(localStorage.getItem('logindetail')));
        this.user = JSON.parse(localStorage.getItem('logindetail'));
        console.log("this user>>>>>>>>>>>>>>>>", this.user.user.email);
        if (this.user != null || this.user != undefined) {
            this.userEmail.email = this.user.user.email;
            console.log("this.userEmail????????????????????", this.userEmail.email);
        }
    };
    ExchangePage.prototype.getBTCAmount = function () {
        var _this = this;
        this.setupService.amountDetail({ userMailId: this.userEmail.email }).subscribe(function (result) {
            debugger;
            _this.amount = result.amount;
            return _this.amount;
        });
    };
    ExchangePage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-exchange',
            templateUrl: 'exchange.html',
        }),
        __metadata("design:paramtypes", [NavController,
            NavParams,
            Platform,
            SetupService])
    ], ExchangePage);
    return ExchangePage;
}());
export { ExchangePage };
//# sourceMappingURL=exchange.js.map