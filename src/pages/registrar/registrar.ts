import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AjudaPage } from '../ajuda/ajuda';
import { InCioPage } from '../in-cio/in-cio';

@Component({
  selector: 'page-registrar',
  templateUrl: 'registrar.html'
})
export class RegistrarPage {

  constructor(public navCtrl: NavController) {
  }
  goToAjuda(params){
    if (!params) params = {};
    this.navCtrl.push(AjudaPage);
  }goToInCio(params){
    if (!params) params = {};
    this.navCtrl.push(InCioPage);
  }
}
