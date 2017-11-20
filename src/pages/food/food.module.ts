import { NgModule } from '@angular/core';
import { Component,ViewChild } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FoodPage } from './food';
import {  Nav,Platform  } from 'ionic-angular';

@NgModule({
  declarations: [
    FoodPage,

  ],
  imports: [
    IonicPageModule.forChild(FoodPage),
  ],
})
export class FoodPageModule {
    @ViewChild(Nav) nav: Nav;

  openPage(page){
      this.nav.setRoot(page.component);
  }
  
}

