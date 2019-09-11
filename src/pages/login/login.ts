import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SignupPage } from '../signup/signup';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DashboardPage } from '../dashboard/dashboard';
import { ForgotPasswordPage } from '../forgot-password/forgot-password';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  loginForm: FormGroup;
  submitted = false;
  constructor(public navCtrl: NavController, public navParams: NavParams, private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(3)]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    })
  }
  markFormTouched() {
    Object.keys(this.loginForm.controls).forEach(field => {
      const control = this.loginForm.get(field);
      control.markAsTouched({ onlySelf: true });
    });
  }

  isFieldValid(field: string) {
    return this.loginForm.get(field).invalid && (this.loginForm.get(field).dirty || this.loginForm.get(field).touched);
  }

  displayFieldCss(field: string) {
    return {
      'is-invalid': this.loginForm.get(field).invalid && (this.loginForm.get(field).dirty || this.loginForm.get(field).touched),
      'is-valid': this.loginForm.get(field).valid && (this.loginForm.get(field).dirty || this.loginForm.get(field).touched)
    };
  }

  goToDashboard(page) {
    console.log(page);
    this.navCtrl.setRoot(page);
  }
  signUp() {
    this.navCtrl.setRoot(SignupPage);
  }
  clickPassword(){
    console.log('hi');
    this.navCtrl.setRoot(ForgotPasswordPage);
  }

  onSubmit() {
    this.submitted = true;

    if (this.loginForm.valid) {
      document.getElementById('success').style.display = 'block';
      // localStorage.setItem('isLoggedIn', 'true');
      this.goToDashboard(DashboardPage);
    }
    else {
      this.markFormTouched()
    }
  }


}
