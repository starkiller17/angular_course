import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})

export class ListadoComponent {

  heroes: string[] = ['Spiderman', 'Ironman', 'Hulk', 'Thor'];
  //heroesBorrados: string[] = [];
  mostrarHeroeBorrado: string = '';

  borrarHeroe(): void {
    const heroeBorrado = this.heroes.pop();
    //this.heroesBorrados.push(heroeBorrado || '');
    this.mostrarHeroeBorrado = heroeBorrado || '';
  }

}
