import { Component} from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.services';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
})
export class MainPageComponent{


  nuevo: Personaje = {
    nombre: "",
    poder:0
  }
  //se puede hacer asi pero es mejor si se lo refactoriza 
  // get personajes(): Personaje[]{
  //   return this.DbzService.personajes;
  
}
