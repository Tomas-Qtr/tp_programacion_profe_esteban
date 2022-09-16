import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore'
import { CardNew } from '../models/card-new';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class CardNewService {

  private coleccionNews:AngularFirestoreCollection<CardNew>
  getNews(){
    return this.coleccionNews.snapshotChanges().pipe(map(action=>action.map(a=>a.payload.doc.data())))
  }  
  constructor(db:AngularFirestore) {
    this.coleccionNews= db.collection('cartasNew')
}

}
