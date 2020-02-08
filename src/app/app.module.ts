import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BeerModule } from './beer/beer.module';
import { SharedModule } from './shared/shared/shared.module';
import { AuthModule } from './auth/auth.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BeerModule,
    AuthModule,
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    SharedModule

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }