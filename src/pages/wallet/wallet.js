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
import { IonicPage, NavController, NavParams } from 'ionic-angular';
//import { NgForm } from '@angular/forms';
import { MenuController, ToastController, LoadingController, Events, AlertController, Platform, } from 'ionic-angular';
import { UserData } from '../../providers/user-data';
//import { UserOptions,LoginDetail } from '../../interfaces/user-options';
//import { ForgotpasswordPage } from '../forgotpassword/forgotpassword';
//import { SignupPage } from '../signup/signup';
//import { DashboardPage } from '../dashboard/dashboard';
import { SetupService } from '../../providers/setup.services';
import { SendPage } from '../send/send';
import { SendsPage } from '../sends/sends';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { Clipboard } from '@ionic-native/clipboard';
//import { Clipboard } from '@ionic-native/clipboard';
/**
 * Generated class for the WalletPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var WalletPage = /** @class */ (function () {
    function WalletPage(userData, navCtrl, nav, toastCtrl, events, menuCtrl, navParams, setupService, loadingCtrl, alertCtrl, barcodeScanner, platform, clipboard) {
        var _this = this;
        this.userData = userData;
        this.navCtrl = navCtrl;
        this.nav = nav;
        this.toastCtrl = toastCtrl;
        this.events = events;
        this.menuCtrl = menuCtrl;
        this.navParams = navParams;
        this.setupService = setupService;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.barcodeScanner = barcodeScanner;
        this.platform = platform;
        this.clipboard = clipboard;
        this.wallet = "btcpage";
        this.isAndroid = false;
        this.qrData = null;
        this.createdCode = null;
        this.scannedCode = null;
        this.submitted = false;
        this.tx = [];
        this.userEmail = { email: '' };
        this.isAndroid = platform.is('android');
        this.nav = nav;
        this.userdata();
        this.getWallletBalance();
        this.getStxWallletBalance();
        this.createAddress();
        this.getStxAddress();
        this.getTx();
        this.getStxTx();
        var backAction = platform.registerBackButtonAction(function () {
            _this.navCtrl.pop();
            backAction();
        });
    }
    WalletPage.prototype.userdata = function () {
        console.log("localhost::::::::::", JSON.parse(localStorage.getItem('logindetail')));
        this.user = JSON.parse(localStorage.getItem('logindetail'));
        console.log("this user>>>>>>>>>>>>>>>>", this.user.user.email);
        if (this.user != null || this.user != undefined) {
            this.userEmail.email = this.user.user.email;
            console.log("this.userEmail????????????????????", this.userEmail.email);
        }
    };
    WalletPage.prototype.getWallletBalance = function () {
        var _this = this;
        this.setupService.createWalletDetail({ userMailId: this.userEmail.email }).subscribe(function (result) {
            _this.balance = result.user.BCHbalance;
            return _this.balance;
        });
    };
    // For stx balence
    WalletPage.prototype.getStxWallletBalance = function () {
        var _this = this;
        this.setupService.createstxWalletDetail({ userMailId: this.userEmail.email }).subscribe(function (result) {
            _this.stxbalance = result.user.STXbalance;
            return _this.stxbalance;
        });
    };
    WalletPage.prototype.createAddress = function () {
        var _this = this;
        console.log("calling<<<<<<<", this.address);
        if (this.address == "undefined" || this.address == undefined) {
            console.log("this.user---------------------------------------", this.userEmail.email);
            this.setupService.createAddressDetail({ userMailId: this.userEmail.email }).subscribe(function (result) {
                _this.address = result.newaddress;
                console.log("result..............................", result);
                if (result.statusCode > 200) {
                    console.log("lets get address from db");
                    _this.setupService.getDetail({ userMailId: _this.userEmail.email }).subscribe(function (result) {
                        _this.address = result.user.userBCHAddress;
                        console.log("22222222222", _this.address);
                        return _this.address;
                    });
                }
                else
                    return _this.address;
            });
        }
        // console.log("11111111111111",result)
        //    if(this.address)
        //    return this.address;
        else {
            this.setupService.getDetail({ userMailId: this.userEmail.email }).subscribe(function (result) {
                _this.address = result.newaddress;
                // console.log("22222222222",result)
                return _this.address;
            });
        }
    };
    //For stx address
    WalletPage.prototype.getStxAddress = function () {
        var _this = this;
        console.log("calling<<<<<<<", this.stxaddress);
        if (this.stxaddress == "undefined" || this.stxaddress == undefined) {
            console.log("this.user---------------------------------------", this.userEmail.email);
            this.setupService.createstxAddressDetail({ userMailId: this.userEmail.email }).subscribe(function (result) {
                _this.stxaddress = result.newaddress;
                console.log("result..............................", result);
                if (result.statusCode > 200) {
                    console.log("lets get address from db");
                    _this.setupService.getstxDetail({ userMailId: _this.userEmail.email }).subscribe(function (result) {
                        _this.stxaddress = result.user.userSTXAddress;
                        console.log("111111111111111", _this.stxaddress);
                        return _this.stxaddress;
                    });
                }
                else
                    return _this.stxaddress;
            });
        }
        // console.log("11111111111111",result)
        //    if(this.address)
        //    return this.address;
        else {
            this.setupService.getstxDetail({ userMailId: this.userEmail.email }).subscribe(function (result) {
                _this.stxaddress = result.newaddress;
                // console.log("22222222222",result)
                return _this.stxaddress;
            });
        }
    };
    WalletPage.prototype.getTx = function () {
        var _this = this;
        this.setupService.createTransactionDetail({ userMailId: this.userEmail.email }).subscribe(function (result) {
            if (result.statusCode == 200) {
                _this.tx = [];
                for (var i = 0; i < result.tx.length; i++) {
                    _this.tx.push({ time: new Date(result.tx[i].time * 1000), amount: result.tx[i].amount, txid: result.tx[i].txid });
                }
            }
            // this.tx = result.tx;
            console.log("this.tx************************", _this.tx);
        });
    };
    //For Stx Transaction
    WalletPage.prototype.getStxTx = function () {
        var _this = this;
        this.setupService.createstxTransactionDetail({ userMailId: this.userEmail.email }).subscribe(function (result) {
            if (result.statusCode == 200) {
                //this.stxtx = result.tx;
                _this.stxtx = [];
                for (var i = 0; i < result.tx.length; i++) {
                    _this.stxtx.push({ time: new Date(result.tx[i].time * 1000), amount: result.tx[i].amount, txid: result.tx[i].txid });
                }
            }
            console.log("this.tx************************", _this.stxtx);
        });
    };
    //for btc address borcode reader
    WalletPage.prototype.showConfirm = function () {
        var _this = this;
        console.log("hiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii");
        // this.address = await this.createAddress();
        var btcaddress = this.address;
        console.log("btcaddress)))))))))))))))))))))))))))))))))))))", btcaddress);
        var alert = this.alertCtrl.create({
            title: '<div class="center" >My BTC Address</div>',
            subTitle: '<div class="center" (click)="copyAddress()"> <img src="http://chart.apis.google.com/chart?cht=qr&chs=300x300&chl=' + btcaddress + '"  alt="QR Code" style="width: 80%;" ></div><div class="center">' + btcaddress + '<div>',
            buttons: [
                {
                    text: 'copy',
                    handler: function (data) {
                        _this.clipboard.copy(btcaddress);
                        _this.responseData = Text;
                        var toast = _this.toastCtrl.create({
                            message: _this.responseData.Copy,
                            showCloseButton: true,
                            closeButtonText: 'Copyed successfully',
                            duration: 5000
                        });
                        toast.present();
                    }
                },
                {
                    text: 'Cancel',
                    handler: function (data) {
                    }
                },
            ]
        });
        alert.present();
    };
    WalletPage.prototype.openSendPage = function () {
        this.nav.push(SendPage);
    };
    WalletPage.prototype.showStxConfirm = function () {
        var _this = this;
        var stxAddress = this.stxaddress;
        var alert = this.alertCtrl.create({
            title: '<div class="center" >My BTC Address</div>',
            subTitle: '<div class="center" (click)="copyAddress()"> <img src="http://chart.apis.google.com/chart?cht=qr&chs=300x300&chl=' + stxAddress + '"  alt="QR Code" style="width: 80%;" ></div><div class="center">' + stxAddress + '<div>',
            buttons: [
                {
                    text: 'copy',
                    handler: function (data) {
                        _this.clipboard.copy(stxAddress);
                        _this.responseData = Text;
                        var toast = _this.toastCtrl.create({
                            message: _this.responseData.Copy,
                            showCloseButton: true,
                            closeButtonText: 'Copyed successfully',
                            duration: 5000
                        });
                        toast.present();
                    }
                },
                {
                    text: 'Cancel',
                    handler: function (data) {
                    }
                },
            ]
        });
        alert.present();
    };
    WalletPage.prototype.openSendsPage = function () {
        this.nav.push(SendsPage);
    };
    WalletPage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-wallet',
            templateUrl: 'wallet.html',
        }),
        __metadata("design:paramtypes", [UserData,
            NavController,
            NavController,
            ToastController,
            Events,
            MenuController,
            NavParams,
            SetupService,
            LoadingController,
            AlertController,
            BarcodeScanner,
            Platform,
            Clipboard])
    ], WalletPage);
    return WalletPage;
}());
export { WalletPage };
//# sourceMappingURL=wallet.js.map