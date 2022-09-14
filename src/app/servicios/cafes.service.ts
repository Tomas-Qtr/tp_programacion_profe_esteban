import { Injectable } from '@angular/core';
import { AngularFireModule } from '@angular/fire/compat';
import {AngularFirestore ,AngularFirestoreCollection} from '@angular/fire/compat/firestore';
import { Cafe } from '../models/cafe';
import { map } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class CafesService {

private colleccionCafes: AngularFirestoreCollection<Cafe>;

getProducto(){
  return this.colleccionCafes.stateChanges().
  pipe(map(action=>action.map(a=>a.payload.doc.data())))
}


  constructor(private db:AngularFirestore) {
      this.colleccionCafes= db.collection('Cafe')
  }


  crearCafe(nuevoCafe:Cafe){
    return new Promise(async (resolve, rejects)=>{
      try{
        const id= this.db.createId();
        nuevoCafe.idcafe= id;


        const respuesta= await this.colleccionCafes.doc(id).set(nuevoCafe);
        resolve(respuesta)
      }

      catch(error){
        rejects(error)
      }
    })

  }

editarCafe(idcafe:string, nuevosDatos:Cafe){
  return this.colleccionCafes.doc(idcafe).update(nuevosDatos)
}





}
