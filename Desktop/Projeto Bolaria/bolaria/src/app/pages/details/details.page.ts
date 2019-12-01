import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ListaBolosService } from 'src/app/services/lista-bolos.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {

  public boloId : number;
  public item: {} = {};

  constructor(
    private activatedRoute: ActivatedRoute,
    private listaBolos: ListaBolosService
  ) {
      this.boloId = this.activatedRoute.snapshot.params['id'] - 1;
   }

  ngOnInit() {
    this.getItem();
  }

  getItem(){
    console.log(this.boloId);
    this.item = this.listaBolos.getBolos()[this.boloId];
  }

}
