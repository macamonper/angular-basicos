import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MainPageComponent } from './main-page/main-page.component';
import { PersonajesComponent } from './personajes/personajes.component';
import { AgregarComponent } from './agregar/agregar.component';
import { DbzService } from './services/dbz.services';

@NgModule({
  declarations: [
    MainPageComponent,
    PersonajesComponent,
    AgregarComponent
  ],
  exports: [ //necesitas exportar lo que queres que se vea en la web!
    MainPageComponent
  ],
  imports: [
    CommonModule,
    FormsModule // modulo de angular para forms
  ],
  providers: [
    DbzService
  ]
})
export class DbzModule { }
