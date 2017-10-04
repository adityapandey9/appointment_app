import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { TeacherPage } from '../pages/teacher/teacher';
import { MissedVisitPage } from '../pages/missedvisit/missedvisit';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/login/login';
import { PendingVisitPage } from '../pages/pendingvisit/pendingvisit';
import { TodayVisitPage } from '../pages/todayvisit/todayvisit';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    TeacherPage,
    MissedVisitPage,
    HomePage,
    TabsPage,
    LoginPage,
    PendingVisitPage,
    TodayVisitPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp, {
      mode: 'ios'
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TeacherPage,
    MissedVisitPage,
    HomePage,
    TabsPage,
    LoginPage,
    PendingVisitPage,
    TodayVisitPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
