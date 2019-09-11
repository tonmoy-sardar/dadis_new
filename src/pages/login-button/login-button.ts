import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the LoginButtonPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login-button',
  templateUrl: 'login-button.html',
})
export class LoginButtonPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  login(page)
  {
    this.navCtrl.setRoot(page);
  }
  signup(page)
  {
    this.navCtrl.setRoot(page);
  }

}
