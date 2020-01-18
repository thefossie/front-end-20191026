import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    template: `
    <div class="d-flex flex-column align-items-center mt-5 mb-1">
        <h1>{{ title }}</h1>
        <p class="lead">Este es un proyecto enlazado a mi git</p>
    </div>
    <beer-search (filterEvent)="onFilterEvent($event)"></beer-search>
    <!--esta linea es para agregar el nuevo componente-->
    <fav-beer></fav-beer>
    <beer-list [filterByOnBeerList]="filterByOnApp"></beer-list>`
    
})
export class AppComponent {
    title: string = 'Nuevo proyecto';

    filterByOnApp: string;

    onFilterEvent( filterByFromBeerSearch: string ){
        console.log( `Recibiendo '${ filterByFromBeerSearch }'...` );
        this.filterByOnApp = filterByFromBeerSearch;
    }
}