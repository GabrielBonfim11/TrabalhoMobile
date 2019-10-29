import { Injectable } from '@angular/core';
import { Categoria } from '../interfaces/categoria';

import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class CategoriasService {

  categoriasCollection: AngularFirestoreCollection<Categoria>
  categorias: Observable<Categoria[]>;

  constructor(private angularFirestore: AngularFirestore) {
    this.categoriasCollection = this.angularFirestore.collection<Categoria>('categorias');
    this.categorias = this.categoriasCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data };
        });
      })
    );
  }

  getCategorias(): Observable<Categoria[]> {
    return this.categorias;
  }
}
