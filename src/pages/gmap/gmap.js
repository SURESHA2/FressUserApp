var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { AgmMap, MapsAPILoader, } from '@agm/core';
import { NavController, Platform, LoadingController, Events, ToastController } from 'ionic-angular';
import { Component, ElementRef, NgZone, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { SetupService } from '../../providers/setup.services';
import { Storage } from '@ionic/storage';
import { Geolocation } from '@ionic-native/geolocation';
import * as socketIOClient from 'socket.io-client';
import * as sailsIOClient from 'sails.io.js';
import { ChatuserlistPage } from '../chatuserlist/chatuserlist';
/**
 * Generated class for the MapPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var GmapPage = /** @class */ (function () {
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
        this.io = sailsIOClient(socketIOClient);
        this.userData = [];
        this.tradersUpdate = [];
        this.chatRequest = { sender: '', recipient: '' };
        this.trderinfoGet = { email: '' };
        this.traderBtcValueAfterUpdate = { email: '', buyRate: '0', currencyType: '', volume: '0', sellRate: '0' };
        this.traderInrValueAfterUpdate = { email: '', buyRate: '0', currencyType: '', volume: '0', sellRate: '0' };
        // this.io.sails.url = "http://192.168.0.144:3000";  
        this.io.sails.url = "http://localhost:3000";
        this.data = false;
        this.userdata();
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition(function (position) {
                _this.latitude = position.coords.latitude;
                _this.longitude = position.coords.longitude;
                _this.zoom = 16;
            });
            var backAction_1 = platform.registerBackButtonAction(function () {
                _this.navCtrl.pop();
                backAction_1();
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
        this.searchControl = new FormControl();
        //set current position
        this.setCurrentPosition();
        this.loadAllTraders();
        //load Places Autocomplete Work pending for auto search within function
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
                _this.navCtrl.setRoot(ChatuserlistPage);
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
        ViewChild("search"),
        __metadata("design:type", ElementRef)
    ], GmapPage.prototype, "searchElementRef", void 0);
    __decorate([
        ViewChild(AgmMap),
        __metadata("design:type", AgmMap)
    ], GmapPage.prototype, "agmMap", void 0);
    GmapPage = __decorate([
        Component({
            selector: 'page-map',
            styles: ["\n    agm-map {\n      height: 100%;\n      width:100%;\n    }\n  "],
            templateUrl: 'gmap.html',
        }),
        __metadata("design:paramtypes", [NavController,
            ToastController,
            Events,
            Geolocation,
            Platform,
            LoadingController,
            Storage,
            MapsAPILoader,
            SetupService,
            NgZone])
    ], GmapPage);
    return GmapPage;
}());
export { GmapPage };
//# sourceMappingURL=gmap.js.map