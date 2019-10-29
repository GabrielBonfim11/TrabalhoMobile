import { Component, OnInit } from '@angular/core';
import { Categoria } from '../../interfaces/categoria';
import { CategoriasService } from 'src/app/services/categorias.service';
import { Router } from '@angular/router';

import _ from 'lodash';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  listCat: Categoria[] = [];
  queryText: string;
  allCat: Categoria[] = [];

  searchbar_hidden: boolean = false;

  constructor(private router: Router, private lista: CategoriasService) {
    this.queryText = '';
    lista.getCategorias().subscribe((categorias) => {
      this.allCat = categorias;
      this.listCat = this.allCat;
    });
  }

  toggleSearchbar() {
    this.searchbar_hidden = !this.searchbar_hidden;
    if(!this.searchbar_hidden) {
      this.queryText = '';
      this.listCat = this.allCat;
    }
  }

  filterCat(cat: any) {
    let val = cat.target.value;
    this.listCat = [];
    this.allCat.forEach(cat => {
      if (typeof cat.nome == "string") {
        if (cat.nome.toLowerCase().includes(val.toLowerCase())) {
          this.listCat.push(cat);
        }
      }
    })
  }

  onBlur(event: any) {
    if(event.target.value == '') {
      this.listCat = this.allCat;
    }
  }

  ngOnInit() {
  }

  nomes() {
    this.router.navigate(['lista'])
  }

}
