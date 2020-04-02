import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import {HttpClientModule} from '@angular/common/http';

import { SocialSharing } from '@ionic-native/social-sharing';
import { Geolocation } from '@ionic-native/geolocation';
import { OverviweDetailPageModule } from '../pages/overviwe-detail/overviwe-detail.module';
import { CatComparePage } from '../pages/cat-compare/cat-compare';
import { AddrentalroomPage } from '../pages/addrentalroom/addrentalroom';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    CatComparePage,
    AddrentalroomPage
  ],
  imports: [
    BrowserModule,HttpClientModule,
    IonicModule.forRoot(MyApp),
    OverviweDetailPageModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    CatComparePage,
    AddrentalroomPage
  ],
  providers: [
    StatusBar,
    SocialSharing,
    Geolocation,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
