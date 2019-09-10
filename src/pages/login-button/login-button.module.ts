import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LoginButtonPage } from './login-button';

@NgModule({
  declarations: [
    LoginButtonPage,
  ],
  imports: [
    IonicPageModule.forChild(LoginButtonPage),
  ],
})
export class LoginButtonPageModule {}
