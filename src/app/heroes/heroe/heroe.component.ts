import { Component } from '@angular/core';

/* Getter: Su función es permitir el obtener el valor de una propiedad de la clase y así
 poder utilizar dicho valor en diferentes métodos. 
 Setter: Su función permite brindar acceso a propiedades especificas para poder
  asignar un valor fuera de la clase.
 
 
 oneway-databididing: enlazado en una sola via, las propiedades estan enlazadas de una sola forma 
 con la propiedad. no hay forma de cambiarlo a menos que se cmabie en el component
  */

@Component({ //decorador
  selector: 'app-heroe',
  templateUrl: 'heroe.component.html',
})
export class HeroeComponent {
  nombre: string = 'ironman';
  edad: number = 50;

  get nombreCapitalizado(): string {
    return this.nombre.toUpperCase();
  }

  obtenerNombre(): string {
    return `${this.nombre} - ${this.edad}`;
  }

  cambiarNombre(): void {
    this.nombre = 'spiderman';
  }
  cambiarEdad(): void {
    this.edad = 10;
  }
}
