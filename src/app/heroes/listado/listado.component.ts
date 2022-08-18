import { Component} from '@angular/core';
import { HeroeComponent } from '../heroe/heroe.component';
// para crear componentes automaticamente en la terminal hay que
//escribir en la consola " ng g( de generate) c (de component en este caso) heroes/listado (path/nombre de componente a crear)"
/*
el OnInit es un ciclo de vida. son pasos o metodos que dispara angular de manera automatica
en este caso se utiliza para inicializar cosas, como la peticion a un servicio y traer la info. (pedido a una api) 
 
el constructor se ejecuta antes de la renderizacion
*/
@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent{

  heroes: string[] = ['spiderman','ironman','hulk','thor']
  heroeBorrado: string = "";
 
  constructor() { 
    console.log('constructor');
  }

  borrarHeroe(): void {
    this.heroeBorrado = this.heroes.shift() || ""; 
  }

}
