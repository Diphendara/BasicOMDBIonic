import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { HttpModule } from '@angular/http'; //Added to avoid 'StaticInjectorError[e]:' error

import { MyApp } from './app.component';
import { MoviesPage } from '../pages/movies/movies';
import { MovieSearchProvider } from '../providers/movie-search';

@NgModule({
  declarations: [
    MyApp,
    MoviesPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    MoviesPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    MovieSearchProvider
  ]
})
export class AppModule {}
