import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CheckOutPage } from '../check-out/check-out';


/**
 * Generated class for the ProductPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-product',
  templateUrl: 'product.html',
})
export class ProductPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  clickCheckOut(){
    this.navCtrl.setRoot(CheckOutPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProductPage');
  }

}
