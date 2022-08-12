import { NgModule } from '@angular/core';
import { ContadorComponent } from './contador/contador.component';
//decorador
@NgModule({
    //las declaraciones dice que cosas compone el modulo
    declarations: [
        ContadorComponent
    ],
    //que cosas quiero que se vean
    exports: [
      ContadorComponent 
  ]

})
//creacion con export del modulo
export class ContadorModule{}