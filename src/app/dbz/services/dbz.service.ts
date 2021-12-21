import { Injectable } from "@angular/core";
import { Personaje } from "../interfaces/dbz.interface";

@Injectable()
export class DbzService {

    private _personajes: Personaje[] = [
        {
          nombre: 'Goku',
          poder: 23000
        },
        {
          nombre: 'Vegeta',
          poder: 20000
        }
    ];

    get personajes() {
        return [...this._personajes];
    }

    constructor() {
        console.log('Servicio inicializado');
    }

    agregarPersonaje( personaje: Personaje ) {
        this._personajes.push(personaje);
    }

}