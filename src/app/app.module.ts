import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FavBeerComponent } from './fav-beer/fav-beer.component';
import { BeerListComponent } from './beer-list/beer-list.component';

@NgModule({
  declarations: [
    AppComponent,
    FavBeerComponent,
    BeerListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
