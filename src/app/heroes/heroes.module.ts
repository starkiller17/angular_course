import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HeroeComponent } from './heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';

@NgModule({
    declarations: [
        HeroeComponent,
        ListadoComponent
    ],
    // Cosas que seran visibles/publicas afuera de este modulo
    exports: [
        ListadoComponent
    ],
    // Unicamente se importan Modulos
    imports: [
        CommonModule
    ]
})

export class HeroesModule {}