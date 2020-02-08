import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FavBeerComponent } from './beer/fav-beer/fav-beer.component';

const routes: Routes = [
  { path: 'home', component: FavBeerComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }