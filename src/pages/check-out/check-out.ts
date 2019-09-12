import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CartPage } from '../cart/cart';

/**
 * Generated class for the CheckOutPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-check-out',
  templateUrl: 'check-out.html',
})
export class CheckOutPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  goToCart(){
    this.navCtrl.setRoot(CartPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CheckOutPage');
  }

}
