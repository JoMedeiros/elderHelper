import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AjudaPage } from '../ajuda/ajuda';
import { InCioPage } from '../in-cio/in-cio';
import { RegistrarPage } from '../registrar/registrar';

@Component({
  selector: 'page-entrar',
  templateUrl: 'entrar.html'
})
export class EntrarPage {

  constructor(public navCtrl: NavController) {
  }
  goToAjuda(params){
    if (!params) params = {};
    this.navCtrl.push(AjudaPage);
  }goToInCio(params){
    if (!params) params = {};
    this.navCtrl.push(InCioPage);
  }goToRegistrar(params){
    if (!params) params = {};
    this.navCtrl.push(RegistrarPage);
  }
}
