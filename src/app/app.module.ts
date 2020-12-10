import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { EntrarPage } from '../pages/entrar/entrar';
import { RegistrarPage } from '../pages/registrar/registrar';
import { AjudaPage } from '../pages/ajuda/ajuda';
import { InCioPage } from '../pages/in-cio/in-cio';
import { SolicitarServiOPage } from '../pages/solicitar-servi-o/solicitar-servi-o';
import { SolicitarAulaDeInstrumentoPage } from '../pages/solicitar-aula-de-instrumento/solicitar-aula-de-instrumento';
import { ChatPage } from '../pages/chat/chat';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    EntrarPage,
    RegistrarPage,
    AjudaPage,
    InCioPage,
    SolicitarServiOPage,
    SolicitarAulaDeInstrumentoPage,
    ChatPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    EntrarPage,
    RegistrarPage,
    AjudaPage,
    InCioPage,
    SolicitarServiOPage,
    SolicitarAulaDeInstrumentoPage,
    ChatPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}