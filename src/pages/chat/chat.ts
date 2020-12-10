import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-chat',
  templateUrl: 'chat.html'
})
export class ChatPage {
  otherUser: any;
  currentUser = 'Iolanda';
  messages = [];
  newMsg = '';
  showVideo = false;

  scene: number;
  constructor(public navCtrl: NavController, navParams: NavParams) {
    this.otherUser = navParams.get('otherUser')
    this.messages = navParams.get('messages')
    this.scene = navParams.get('scene')
  }  

  sendMessage() {
    this.messages.push({
      user: this.currentUser,
      text: this.newMsg,
      createdAt: '10:21',
      video: true
    });
    this.newMsg = '';
    if (this.scene === 1){
      this.showVideo = true;
      this.messages.push({
        user: this.otherUser,
        text: 'Qualquer dúvida é só falar',
        createdAt: '10:22',
        video: true
      });
      this.scene = 0;
    }
  }
  
}
