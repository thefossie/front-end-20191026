import { Component, Input, OnInit } from '@angular/core';
import { Beer } from '../beer';
import { BeerService } from '../beer.service';

@Component({
    selector: 'beer-list',
    styleUrls: [ './beer-list.component.css' ],
    templateUrl: './beer-list.component.html'
})
export class BeerListComponent implements OnInit {

    //@Input( 'filterByOnBeerList' ) filterBy: string;

    private _filterBy: string;

    searchResults: Array<Beer>;

    constructor( private beerService: BeerService ){}

    ngOnInit(): void {
    }

    public get filterBy(): string {
        return this._filterBy;
    }

    @Input( 'filterByOnBeerList' )
    public set filterBy(value: string) {
        this._filterBy = value;

        console.log( `Recibiendo en BeerListComponent '${ this.filterBy }'...` );

        this.filterBeers(this.filterBy);
    }

    filterBeers( filterPattern: string ) {
        console.log( `Filtrando '${ filterPattern }'...` );
        this.beerService.findByBeerName (filterPattern).subscribe ({
            next: beers => this.searchResults = beers,
            error: message => alert (message)
            
        })
    }
}