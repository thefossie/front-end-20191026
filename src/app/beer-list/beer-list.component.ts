import {Component, Input} from '@angular/core';
import { Beer } from '../Beer';

@Component ({
    selector: 'beer-list',
    styleUrls: ['./beer-list.component.css'],
    templateUrl: './beer-list.component.html'
})

export class  BeerListComponent {

    //@Input('filterByOnBeerList') filterBy: string;

    private _filterBy: string;

    searchResults: Array<Beer>;


    beers: Beer[] = [
        {
            "img": "https://images.punkapi.com/v2/111.png",
            "title": "Vagabond Pilsner",
            "text": "Take the thirst-quenching crispness of a German Pilsner and combine it with lemon and honey to produce a rewarding modern twist on a beer classic.",
            "price": 6.2
        },
        {
            "img": "https://images.punkapi.com/v2/178.png",
            "title": "Single Hop India Pale Ale.",
            "text": "A special release of our IPA is Dead series - IPA is Dead Simoce. Hopped to hell with citrusy bitter and aroma hops from the West Coast of the USA. Bitter, orange, mandarin, floral, this IPA showcases the best the west has to offer.",
            "price": 3.2
        },
        {
            "img": "https://images.punkapi.com/v2/63.png",
            "title": "Ocean Fermented Lager.",
            "text": "It's rumoured just a drop can calm the fiercest of storms. A balance of sweet, salt and savoury, citrus, spruce and caramel. Fermented at the bottom of the North Sea, which just so happens to be the perfect temperature for lagers to ferment.",
            "price": 4.2
        },
        {
            "img": "https://images.punkapi.com/v2/88.png",
            "title": "Unleash the Yeast Series.",
            "text": "Our Unleash the Yeast series was an epic experiment into the differences in aroma and flavour provided by switching up your yeast. We brewed up a wort with a light caramel note and some toasty biscuit flavour, and hopped it with Amarillo and Centennial for a citrusy bitterness. Everything else is down to the yeast. Bavarian Weizen yeast adds traditional weissbier notes of banana and clove.",
            "price": 2.4
        },
    ];

    constructor(){
        this.searchResults= this.beers;
    }

    public get filterBy(): string {
        return this._filterBy;
    }

    @Input( 'filterByOnBeerList')
    public set filterBy(value: string) {
        this._filterBy = value;
        console.log( `Recibiendo en BeerListComponent '${this.filterBy}'...`)

        this.searchResults = this.filterBy? this.filterBeers(this.filterBy) : this.beers ;
    }

    filterBeers( filterPattern: string) : Beer[] {
        filterPattern = filterPattern.toLocaleLowerCase();
        return this.beers.filter( (beer: Beer ) =>
            beer.title.toLocaleLowerCase().indexOf(filterPattern) !== -1
        );
    }
}