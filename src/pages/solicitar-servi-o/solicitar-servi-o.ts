import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SolicitarAulaDeInstrumentoPage } from '../solicitar-aula-de-instrumento/solicitar-aula-de-instrumento';

@Component({
  selector: 'page-solicitar-servi-o',
  templateUrl: 'solicitar-servi-o.html'
})
export class SolicitarServiOPage {

  constructor(public navCtrl: NavController) {
  }
  goToSolicitarAulaDeInstrumento() {
    this.navCtrl.push(SolicitarAulaDeInstrumentoPage);
  }
  
}
