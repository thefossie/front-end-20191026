import {Component} from '@angular/core';

@Component ({
    selector: 'fav-beer',
    templateUrl: './fav-beer.component.html',
    styleUrls: ['./fav-beer.component.css'],
})

export class FavBeerComponent {
    isActive: boolean = true;
    FavBeerImg: string = "https://images.punkapi.com/v2/169.png";
    imgHeight: number = 398;
    imgWidth: number = 102;

    togglePromotion: boolean = true;
    toggleImage( event ){
        //console.log( event );
        //esta linea hace el cambio del valor de togglePromotion con cada click
        this.togglePromotion = !this.togglePromotion;
    }

}

