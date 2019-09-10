import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormGroup,FormBuilder,Validators} from '@angular/forms';
import { DashboardPage} from '../dashboard/dashboard';

/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {
form:FormGroup;
submitted=false;
  constructor(public navCtrl: NavController, public navParams: NavParams, private fb:FormBuilder ) {
    this.form=this.fb.group({
      name:['',[Validators.required, Validators.minLength(3)]],
      email:['',[Validators.required, Validators.email]],
      phonenumber:['',[Validators.required, Validators.minLength(10)]],
      password:['',[Validators.required, Validators.minLength(6)]]
    });
  }
  isFieldValid(field: string) {
    return this.form.get(field).invalid && (this.form.get(field).dirty || this.form.get(field).touched);
   }
   
   displayFieldCss(field: string) {
    return {
        'is-invalid': this.form.get(field).invalid && (this.form.get(field).dirty || this.form.get(field).touched),
        'is-valid': this.form.get(field).valid && (this.form.get(field).dirty || this.form.get(field).touched)
    };
  }
  signupTouch(signup: FormGroup)
    {
      (<any>Object).values(signup.controls).forEach(control => {
        control.markAsTouched();
        if (control.controls) {
          control.controls.forEach(c => this.signupTouch(c));
        }
      });

    }
  
   
  markFormGroupTouched(signup: FormGroup) {
    (<any>Object).values(signup.controls).forEach(control => {
      control.markAsTouched();
      if (control.controls) {
        control.controls.forEach(i => this.markFormGroupTouched(i));
      }
    });
  }
  
  onLoggedin() {
    this.submitted = true;

    if (this.form.valid) {
      this.navCtrl.push(DashboardPage);
    }
    else {
      this.markFormGroupTouched(this.form)
    }
  }

  


}
