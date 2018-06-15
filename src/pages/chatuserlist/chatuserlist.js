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
import { NavController, NavParams, Platform } from 'ionic-angular';
import { SetupService } from '../../providers/setup.services';
import { ChatroomPage } from '../../pages/chatroom/chatroom';
import { Geolocation } from '@ionic-native/geolocation';
import { GmapPage } from '../gmap/gmap';
/**
 * Generated class for the ChatuserlistPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ChatuserlistPage = /** @class */ (function () {
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
        this.navCtrl.push(ChatroomPage, { sender: senderEmail, receiver: receiverEmail, chatId: chatId });
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
        this.navCtrl.setRoot(GmapPage);
    };
    ChatuserlistPage = __decorate([
        Component({
            selector: 'page-chatuserlist',
            templateUrl: 'chatuserlist.html',
        }),
        __metadata("design:paramtypes", [Geolocation, SetupService, NavController, NavParams, Platform])
    ], ChatuserlistPage);
    return ChatuserlistPage;
}());
export { ChatuserlistPage };
//# sourceMappingURL=chatuserlist.js.map