import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginPage  } from '../login/login';
import { LoginButtonPage } from '../login-button/login-button';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  login(){
    this.navCtrl.setRoot(LoginPage);
  }
  clickLoginButton()
  {
    this.navCtrl.setRoot(LoginButtonPage);
  }

}
