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

  getCafe(){
    return this.colleccionCafes.snapshotChanges().pipe(map(action=>action.map(a=>a.payload.doc.data())))
  }


  constructor(private db:AngularFirestore) {
      this.colleccionCafes= db.collection('cafes')
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

  deleteCafe(idcafe:string){
    return new Promise((resolve, rejects)=>{
      try{
        const res = this.colleccionCafes.doc(idcafe).delete()
        resolve(res)
      }
      catch(error){
        rejects(error)
      }
    })
  }



}
