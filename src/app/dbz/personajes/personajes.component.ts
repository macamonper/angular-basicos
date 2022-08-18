import { Component, Input} from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.services';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
})
export class PersonajesComponent {
//forma de pasar la info de un un componente padre a un hijo (props en react)
// @Input() personajes: Personaje[] = [];

//acceder a el service con la info
  get personajes() {
  
  return this.DbzService.personajes;
  }
  
  constructor(private DbzService: DbzService) { }
  
}
