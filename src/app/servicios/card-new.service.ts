import { Injectable } from '@angular/core';
import { AngularFireModule } from '@angular/fire/compat';
import {AngularFirestore ,AngularFirestoreCollection} from '@angular/fire/compat/firestore';
import { CardNew } from '../models/card-new';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class CardNewService {


  private colleccionNews:AngularFirestoreCollection<CardNew>;

  
  constructor(private db:AngularFirestore) { 
    this.colleccionNews = db.collection('cartasNew')
  }

  getNews(){
    return this.colleccionNews.snapshotChanges().
    pipe(map(action=>action.map(a=>a.payload.doc.data())))

  }
}
