var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, MenuController, ToastController, LoadingController, Events, Slides, Platform } from 'ionic-angular';
import { UserData } from '../../providers/user-data';
import { ForgotpasswordPage } from '../forgotpassword/forgotpassword';
import { SignupPage } from '../signup/signup';
import { GmapPage } from '../gmap/gmap';
import { SetupService } from '../../providers/setup.services';
import { Storage } from '@ionic/storage';
import { LoginPage } from '../../pages/login/login';
var TutorialPage = /** @class */ (function () {
    function TutorialPage(userData, navCtrl, toastCtrl, events, menuCtrl, navParams, _setupService, loadingCtrl, menu, storage, platform) {
        var _this = this;
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
        this.platform = platform;
        this.showSkip = true;
        this.login1 = { username: '', password: '' };
        this.loginDetail = { email: '', password: '', lat: '', long: '' };
        this.submitted = false;
        var backAction = platform.registerBackButtonAction(function () {
            _this.navCtrl.pop();
            backAction();
        });
    }
    TutorialPage.prototype.startApp = function () {
        var _this = this;
        this.navCtrl.push(LoginPage).then(function () {
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
        this.navCtrl.setRoot(LoginPage);
    };
    TutorialPage.prototype.signup = function () {
        this.navCtrl.push(SignupPage);
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
                    _this.navCtrl.setRoot(GmapPage);
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
            this.navCtrl.setRoot(GmapPage);
        }
    };
    TutorialPage.prototype.onSignup = function () {
        this.navCtrl.push(SignupPage);
        this.storage.set('hasSeenTutorial', 'true');
    };
    TutorialPage.prototype.forgotPassword = function () {
        this.navCtrl.push(ForgotpasswordPage);
        this.storage.set('hasSeenTutorial', 'true');
    };
    __decorate([
        ViewChild('slides'),
        __metadata("design:type", Slides)
    ], TutorialPage.prototype, "slides", void 0);
    TutorialPage = __decorate([
        Component({
            selector: 'page-tutorial',
            templateUrl: 'tutorial.html'
        }),
        __metadata("design:paramtypes", [UserData,
            NavController,
            ToastController,
            Events,
            MenuController,
            NavParams,
            SetupService,
            LoadingController,
            MenuController,
            Storage,
            Platform])
    ], TutorialPage);
    return TutorialPage;
}());
export { TutorialPage };
//# sourceMappingURL=tutorial.js.map