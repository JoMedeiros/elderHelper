import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { InCioPage } from '../in-cio/in-cio';

@Component({
  selector: 'page-ajuda',
  templateUrl: 'ajuda.html'
})
export class AjudaPage {

  constructor(public navCtrl: NavController) {
  }
  goToInCio(params){
    if (!params) params = {};
    this.navCtrl.push(InCioPage);
  }
}
