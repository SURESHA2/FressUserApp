import { Component } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,
  	public platform: Platform) {
  	let backAction =  platform.registerBackButtonAction(() => {
        this.navCtrl.pop();
        backAction();
      },) 

  }

}
