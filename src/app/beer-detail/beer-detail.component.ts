import { Component, OnInit } from '@angular/core';
import { Beer } from '../beer';
import { ActivatedRoute, Router } from '@angular/router';
import { BeerService } from '../beer.service';

@Component({
  templateUrl: './beer-detail.component.html',
  styleUrls: ['./beer-detail.component.css']
})
export class BeerDetailComponent implements OnInit {

  beer: Beer;


  constructor(
    private route: ActivatedRoute,
    private beerService: BeerService,
    private router: Router
   ) { }

  ngOnInit() {
    let id = +this.route.snapshot.paramMap.get( 'id' );
    this.beerService.findById( id ).subscribe({
      next: beer => this.beer = beer,
      error: message => alert ( message )
    });
  }

  onBack(): void{
    this.router.navigate( ['/beers']);

  }

}
