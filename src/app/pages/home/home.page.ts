import { Component, OnInit } from '@angular/core';
import { Categoria } from '../../interfaces/categoria';
import { CategoriasService } from 'src/app/services/categorias.service';
import { Router } from '@angular/router';

import _ from  'lodash';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  listCat: Categoria[];
  queryText: string;
  allCat: any;

  constructor(
    private router: Router
  ) {
    this.queryText = '';

    const lista: CategoriasService = new CategoriasService();
    this.listCat = lista.getCategorias(); 

    this.allCat = this.listCat;
    
  
   }

   filterCat(cat: any){
      let val = cat.target.value;
      if(val && val.trim() != ''){
        this.listCat = _.values(this.allCat);
        this.listCat = this.listCat.filter((cat)=> {
          return (cat.nome.toLowerCase().indexOf(val.toLowerCase())>-1);
        })
      }else{
        this.listCat = this.allCat;
      }
   }

  ngOnInit() {
  }

  nomes(){
    this.router.navigate(['lista'])
  }

}
