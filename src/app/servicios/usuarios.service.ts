import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { map } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  private coleccionUsuarios: AngularFirestoreCollection<User>

  constructor(db:AngularFirestore) { 
    this.coleccionUsuarios= db.collection('usuarios');
  }

  getUsuarios(){
    return this.coleccionUsuarios.snapshotChanges().pipe(map(action=>action.map(a=>a.payload.doc.data())));
  } 
}
