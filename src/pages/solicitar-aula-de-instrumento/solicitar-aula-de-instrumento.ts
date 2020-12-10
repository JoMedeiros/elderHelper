import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { ChatPage } from '../chat/chat';

@Component({
  selector: 'page-solicitar-aula-de-instrumento',
  templateUrl: 'solicitar-aula-de-instrumento.html'
})
export class SolicitarAulaDeInstrumentoPage {

  constructor(public navCtrl: NavController,
              public alertController: AlertController
            ) {
  }

  async presentAlertValentina() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      message: 'Olá, Iolanda, encontramos uma voluntária em nosso sistema que oferece aulas de flauta. Ela tem nível de confiança 3, você pode receber vídeos dela, mas não compartilhe seu endereço e dados pessoais por questão de segurança. Deseja conversar com ela?',
      buttons: [
        {text: 'Sim',
        handler: () => {
          this.navCtrl.push(ChatPage, {
            otherUser: 'Valentina',
            scene: 1,
            messages: [
              {
                user: 'Valentina',
                text: 'Olá, bom dia dona Iolanda. Posso te mandar um vídeo?',
                createdAt: '10:20'
              }/*,
              {
                user: 'Iolanda',
                text: 'Bom dia minha querida. Pode sim.',
                createdAt: '10:21'
              }*/
            ]
          });
        }}
        , 'Ver Perfil de Valentina', 'Ver outros voluntários']
    });

    await alert.present();
  }
  
}
