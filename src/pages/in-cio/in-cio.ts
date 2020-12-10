import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SolicitarServiOPage } from '../solicitar-servi-o/solicitar-servi-o';

@Component({
  selector: 'page-in-cio',
  templateUrl: 'in-cio.html'
})
export class InCioPage {

  constructor(public navCtrl: NavController) {
  }

  goToSolicitarServico(params){
    if (!params) params = {};
    this.navCtrl.push(SolicitarServiOPage);
  }
  
}
