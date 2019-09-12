import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginPage  } from '../login/login';
import { LoginButtonPage } from '../login-button/login-button';
import { ProductPage } from '../product/product';
import { ProductDetailPage } from '../product-detail/product-detail';
import {CartPage} from '../cart/cart';

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
  productPage(){
    this.navCtrl.setRoot(ProductPage);
  }
  productDetails(){
    this.navCtrl.setRoot(ProductDetailPage);
  }
  cart()
  {
    this.navCtrl.setRoot(CartPage);
  }

}
