//para llamar una propiedad desde otro lugar {{}}
//los eventos se llaman asi (evento)=" ACA VA LA FUNCION O EL METODO O TAMBIEN UN CODIGO MUUUUUY SIMPLE" 

import { Component } from "@angular/core";

@Component({
    selector: 'app-contador',
    template: `
    <h1>{{ title }}</h1>
    <h1>la base es : {{ base }}</h1>
    <button (click)="acumular(+base)">+{{ base }}</button>
    <span>{{ numero }}</span>
    <button (click)="acumular(-base)">-{{ base }}</button>
  `,
})
export class ContadorComponent {
    public title: string = 'contador App';
    numero: number = 10;
    base: number = 5;

    acumular(valor: number) {
        this.numero += valor;
    }
}