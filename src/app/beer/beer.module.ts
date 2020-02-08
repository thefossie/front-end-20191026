import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BeerListComponent } from './beer-list/beer-list.component';
import { BeerSearchComponent } from './beer-search/beer-search.component';
import { FavBeerComponent } from './fav-beer/fav-beer.component';
import { BeerDetailComponent } from './beer-detail/beer-detail.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { BeerDetailGuard } from './beer-detail/beer-detail.guard';
import { SharedModule } from '../shared/shared/shared.module';

@NgModule({
  declarations: [
    BeerListComponent,
    BeerSearchComponent,
    FavBeerComponent,
    BeerDetailComponent
  ],
  imports: [
    RouterModule.forChild([
      { path: 'beers', component: BeerSearchComponent },
      { path: 'beers/:id', component: BeerDetailComponent, canActivate: [ BeerDetailGuard ] }
    ]),
    SharedModule
  ]
})
export class BeerModule { }
