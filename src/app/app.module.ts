import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {FoodPage  } from '../pages/food/food' ;
import {FavoritePage  } from "../pages/favorite/favorite";
import { YamPage } from '../pages/yam/yam';
import { SemovitaPage } from "../pages/semovita/semovita";
import { WheatPage } from "../pages/wheat/wheat";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    FoodPage,
    FavoritePage,
    YamPage,
    SemovitaPage,
    WheatPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    FoodPage,
    FavoritePage,
    YamPage,
    SemovitaPage,
    WheatPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
