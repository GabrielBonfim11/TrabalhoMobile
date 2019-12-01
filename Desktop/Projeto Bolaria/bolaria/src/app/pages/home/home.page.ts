import { Component, OnInit } from '@angular/core';
import { Bolo } from '../../interfaces/bolo';
import { ListaBolosService } from 'src/app/services/lista-bolos.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
    listBolo: Bolo[];

  constructor() { 
    const lista: ListaBolosService = new ListaBolosService();
    this.listBolo = lista.getBolos();
  }

  ngOnInit() {
  }

}
