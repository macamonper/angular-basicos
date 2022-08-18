import { Component, EventEmitter, Input, Output} from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.services';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
})
export class AgregarComponent {
  
  @Input() nuevo: Personaje = {
    nombre: '',
    poder: 0,
  };

  // SE PODRIA HACER ASI PERO PAJA, MEJOR HACERLO CON NGMODEL
  //cambiarNombre(event: any) {
  //   console.log(event.target.value)
  // }

  //pasar info del hijo al padre
  // @Output() onNuevoPersonaje: EventEmitter<Personaje> = new EventEmitter();

  constructor(private DbzService: DbzService) { }
  
  agregar() {
    if (this.nuevo.nombre.trim().length === 0) {
      return;
    }
    // this.onNuevoPersonaje.emit(this.nuevo)
    
    this.DbzService.agregarPersonaje(this.nuevo);
    
    this.nuevo = {
      nombre: '',
      poder: 0,
    };
  }
}
