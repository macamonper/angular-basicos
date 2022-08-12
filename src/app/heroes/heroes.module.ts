import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { HeroeComponent } from './heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';
//decorador
@NgModule({
    //las declaraciones dice que cosas compone el modulo
    declarations: [
        HeroeComponent,
        ListadoComponent
    ],
    //que cosas quiero que sean visibles afuera de este modulo
    exports: [
        ListadoComponent
    ],
    //suelen ir los modulos
    imports: [
        CommonModule//esto se importa para poder habilitar las directivas ng
    ]
})
//creacion con export del modulo
export class HeroesModule{}