import { Injectable } from '@angular/core';
import { Categoria } from '../interfaces/Categoria';

@Injectable({
  providedIn: 'root'
})
export class CategoriasService {

  constructor() { }

  getCategorias(): Categoria[] {
    const listCat: Categoria[] = [
      {
        nome: 'Assistência Técnica'
      },
      {
        nome: 'Reformas'
      },
      {
        nome: 'Design e Tecnologia'
      },
      {
        nome: 'Eventos'
      },
      {
        nome: 'Moda e Beleza'
      },
      {
        nome: 'Consultoria'
      },
      {
        nome: 'Autos'
      }
    ];

    return listCat;

  }
}
