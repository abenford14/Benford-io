import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LabModule } from './pages/lab/lab.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';

import { HomeComponent } from './pages/Home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
