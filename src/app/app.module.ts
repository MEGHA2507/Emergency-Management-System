import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginPageComponent } from './login-page/login-page.component';
import {MatTabsModule} from '@angular/material/tabs';
import {MatInputModule} from '@angular/material/input';


@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
  ],
  imports: [
    MatTabsModule,
    MatInputModule,

    BrowserModule,
    BrowserAnimationsModule
  ],
   providers: [
   
  ],
  bootstrap: [AppComponent, ],
  exports: [  ]
})
export class AppModule { }
