import { Injectable } from '@angular/core';
// Cloud firestore -> accedemos a las colecciones
import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/compat/firestore'
import {usuarios} from 'src/app/models/usuario' 
@Injectable({
  providedIn: 'root'
})
export class FirestoreService {
  /* definimos de forma privada la coleccion de usuarios para que no sea accesible en toda la aplicacion. lo definimos como una coleccion de firestore que respete la estructura de nustra interfaz 'usuario'
  */
  private usuariosCollection: AngularFirestoreCollection <usuarios>

  constructor(private datebase: AngularFirestore) {
    //usuarioscollection va a definir la nueva coleccion 'usuarios' que estara en la nueva base de datos
        this.usuariosCollection = this.datebase.collection<usuarios>('usuarios');
   }
}
