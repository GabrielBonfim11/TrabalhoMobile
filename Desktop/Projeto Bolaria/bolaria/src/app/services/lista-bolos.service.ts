import { Injectable } from '@angular/core';
import { Bolo } from '../interfaces/bolo';

@Injectable({
  providedIn: 'root'
})
export class ListaBolosService {

  constructor() { }

 getBolos(): Bolo[] {
   const listBolo: Bolo[] = [
      {
        id: 1,
        imagem: '../../assets/imagens/bolo-cenoura.jpg',
        nome: 'Bolo de Cenoura',
        desc: 'Apenas R$18,00'
      },
      {
        id: 2,
        imagem: '../../assets/imagens/bolo-nutella.jpg',
        nome: 'Com Nutella',
        desc: 'Apenas R$29,00'
      },
      {
        id: 3,
        imagem: '../../assets/imagens/bolo-brigadeiro.jpg',
        nome: 'De Brigadeiro',
        desc: 'Apenas R$24,00'
      },
      {
        id: 4,
        imagem: '../../assets/imagens/bolo-açucarado.png',
        nome: 'Açucarado',
        desc: 'Apenas R$19,00'
      }
   ];

   return listBolo;
 }
}
