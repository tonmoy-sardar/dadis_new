import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';

import { LoginPage } from '../pages/login/login';
import { SignupPage } from '../pages/signup/signup';
import { DashboardPage } from '../pages/dashboard/dashboard';
import { LoginButtonPage } from '../pages/login-button/login-button';
import { ForgotPasswordPage } from '../pages/forgot-password/forgot-password';
import { ProductPage } from '../pages/product/product';
import { ProductDetailPage } from '../pages/product-detail/product-detail';
import { OrderSuccessPage } from '../pages/order-success/order-success';

import { CartPage } from '../pages/cart/cart';

import { CheckOutPage } from '../pages/check-out/check-out';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    LoginPage,
    SignupPage,
    DashboardPage,
    LoginButtonPage,
    ForgotPasswordPage,
    ProductPage,
    ProductDetailPage,
    CartPage,
    CheckOutPage,
    OrderSuccessPage

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    LoginPage,
    SignupPage,
    DashboardPage,
    LoginButtonPage,
    ForgotPasswordPage,
    ProductPage,
    ProductDetailPage,
    CartPage,
    CheckOutPage,
    OrderSuccessPage

  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
