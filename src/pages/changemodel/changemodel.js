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
import { IonicPage, NavController, NavParams, ViewController, LoadingController, ToastController, MenuController } from 'ionic-angular';
import { FormBuilder } from '@angular/forms';
import { SetupService } from '../../providers/setup.services';
/**
 * Generated class for the ChangemodelPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ChangemodelPage = /** @class */ (function () {
    function ChangemodelPage(navCtrl, viewCtrl, fb, toastCtrl, menuCtrl, navParams, _setupService, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.viewCtrl = viewCtrl;
        this.fb = fb;
        this.toastCtrl = toastCtrl;
        this.menuCtrl = menuCtrl;
        this.navParams = navParams;
        this._setupService = _setupService;
        this.loadingCtrl = loadingCtrl;
        this.addressDetails = { btc: '', stx: '' };
    }
    ChangemodelPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ChangemodelPage');
    };
    ChangemodelPage.prototype.Open = function () {
    };
    ChangemodelPage.prototype.Close = function () {
    };
    ChangemodelPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    ChangemodelPage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-changemodel',
            templateUrl: 'changemodel.html',
        }),
        __metadata("design:paramtypes", [NavController,
            ViewController,
            FormBuilder,
            ToastController,
            MenuController,
            NavParams,
            SetupService,
            LoadingController])
    ], ChangemodelPage);
    return ChangemodelPage;
}());
export { ChangemodelPage };
//# sourceMappingURL=changemodel.js.map