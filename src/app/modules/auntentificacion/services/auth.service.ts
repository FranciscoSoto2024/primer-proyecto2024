import { Injectable } from '@angular/core';
// servicio en la nube de autentificacion de firebase
import { AngularFireAuth} from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  //referenciar Auth de firebase en el servicio
  constructor(public auth: AngularFireAuth) { }

  //funcion para registro
  registrar(email: string, password: string){
    return this.auth.createUserWithEmailAndPassword(email,password)
  }
  //funcion para iniciar sesion
  iniciarsesion(email: string, password: string){
    return this.auth.signInWithEmailAndPassword(email, password)
  }
  //funcion para cerrar sesion
  cerrarSesion(){
  return this.auth.signOut();
  }
  //funcion para tomar el uid
}
