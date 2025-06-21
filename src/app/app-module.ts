import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Home } from './components/home/home';
import { Reporte } from './components/reporte/reporte';
import { Alta } from './components/alta/alta';
import { Gestion } from './components/gestion/gestion';
import { Header } from './shared/header/header';

@NgModule({
  declarations: [
    App,
    Home,
    Reporte,
    Alta,
    Gestion,
    Header
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }
