var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { IonicStorageModule } from '@ionic/storage';
import { ConferenceApp } from './app.component';
import { TutorialPage } from '../pages/tutorial/tutorial';
import { LoginPage } from '../pages/login/login';
import { ForgotpasswordPage } from '../pages/forgotpassword/forgotpassword';
import { SignupPage } from '../pages/signup/signup';
import { ChangepasswordPage } from '../pages/changepassword/changepassword';
import { ChatuserlistPage } from '../pages/chatuserlist/chatuserlist';
import { ChatroomPage } from '../pages/chatroom/chatroom';
import { GmapPage } from '../pages/gmap/gmap';
import { AgmCoreModule } from '@agm/core';
import { SetupService } from '../providers/setup.services';
import { SettingPage } from '../pages/setting/setting';
import { Geolocation } from '@ionic-native/geolocation';
import { ConferenceData } from '../providers/conference-data';
import { UserData } from '../providers/user-data';
import { ExchangePage } from '../pages/exchange/exchange';
import { WalletPage } from '../pages/wallet/wallet';
import { SendPage } from '../pages/send/send';
import { ChangemodelPage } from '../pages/changemodel/changemodel';
import { SendsPage } from '../pages/sends/sends';
import { NgxQRCodeModule } from 'ngx-qrcode2';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { Clipboard } from '@ionic-native/clipboard';
// import { DragulaModule } from 'ng2-dragula';
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        NgModule({
            declarations: [
                ConferenceApp,
                TutorialPage,
                ChatuserlistPage,
                ChatroomPage,
                LoginPage,
                ForgotpasswordPage,
                ChangepasswordPage,
                GmapPage,
                SignupPage,
                SettingPage,
                ExchangePage,
                WalletPage,
                SendPage,
                SendsPage,
                ChangemodelPage
            ],
            imports: [
                BrowserModule,
                HttpModule,
                AgmCoreModule.forRoot({
                    apiKey: 'AIzaSyCS-JPv-UnylrjSuPAgTEolYkYhMBjOCvs', libraries: ["places"]
                }),
                IonicModule.forRoot(ConferenceApp, {}, {
                    links: [
                        { component: TutorialPage, name: 'Tutorial', segment: 'tutorial' },
                        { component: LoginPage, name: 'LoginPage', segment: 'login' },
                        { component: ForgotpasswordPage, name: 'ForgotpasswordPage', segment: 'forgotpassword' },
                        { component: SignupPage, name: 'SignupPage', segment: 'signup' },
                        { component: ChangepasswordPage, name: 'ChangepasswordPage', segment: 'changepassword' },
                        { component: ChatuserlistPage, name: 'ChatuserlistPage', segment: 'Chatuserlist' },
                        { component: WalletPage, name: 'WalletPage', segment: 'wallet' },
                        { component: ChatroomPage, name: 'ChatroomPage', segment: 'chatroom' },
                        { component: ExchangePage, name: 'ExchangePage', segment: 'exchange' },
                        { component: SettingPage, name: 'SettingsPage', segment: 'setting' },
                        { component: GmapPage, name: 'Gmap', segment: 'gmap' },
                    ]
                }),
                IonicStorageModule.forRoot(),
                NgxQRCodeModule,
            ],
            bootstrap: [IonicApp],
            entryComponents: [
                ConferenceApp,
                TutorialPage,
                ChatuserlistPage,
                ChatroomPage,
                LoginPage,
                ForgotpasswordPage,
                ChangepasswordPage,
                GmapPage,
                SettingPage,
                SignupPage,
                ExchangePage,
                WalletPage,
                SendPage,
                SendsPage,
                ChangemodelPage
            ],
            providers: [
                { provide: ErrorHandler, useClass: IonicErrorHandler },
                ConferenceData, Geolocation,
                UserData, SetupService, StatusBar,
                InAppBrowser,
                SplashScreen,
                BarcodeScanner,
                Clipboard
            ]
        })
    ], AppModule);
    return AppModule;
}());
export { AppModule };
//# sourceMappingURL=app.module.js.map