import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FavBeerComponent } from './fav-beer/fav-beer.component';
import { BeerListComponent } from './beer-list/beer-list.component';
import { BeerSearchComponent } from './beer-search/beer-search.component';

@NgModule({
  declarations: [
    AppComponent,
    FavBeerComponent,
    BeerSearchComponent,
    BeerListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
