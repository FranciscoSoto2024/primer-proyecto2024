import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { usuarios } from 'src/app/models/usuario';
import { AuthService } from 'src/app/modules/auntentificacion/services/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {
  // input de la contraseña para ver los cáracteres o no
  hide = true;

  // IMPORTAR LA INTERFAZ DE USUARIO -> INICIALIZAR
  usuarios: usuarios = {
    uid: '', // -> inicializamos con comillas simples porque es tipo STRING
    nombre: '',
    apellido: '',
    email: '',
    rol: '',
    password: ''
  }

  // CREAMOS COLECCIÓN DE USUARIOS, TIPO 'USUARIO' PARA ARRAYS
  coleccionUsuarios: usuarios[] = [];

  constructor(
    public servicioAuth: AuthService,
    public servicioRutas: Router
  ){}

  // FUNCIÓN PARA EL REGISTRO DE NUEVOS USUARIOS
  async registrar(){
    // constante credenciales va a resguardar la información que ingrese el usuario
    /* ESTO ERA REGISTRO LOCAL 
    const credenciales = {
      uid: this.usuarios.uid, // definimos al atributo de la interfaz con una variable local
      nombre: this.usuarios.nombre,
      apellido: this.usuarios.apellido,
      email: this.usuarios.email,
      rol: this.usuarios.rol,
      password: this.usuarios.password
    }*/

      //registro con servicio de auth
      const credenciales = {
        email: this.usuarios.email,
        password: this.usuarios.password
      }

      const res = await this.servicioAuth.registrar(credenciales.email, credenciales.password)
      //el metodo then es una promesa que devuelve el mismo valor si todo va bien
      .then(res => {
        alert("¡se pudo registrar con exito! :)")

        this.servicioRutas.navigate(['/inicio'])
      })
      .catch(error =>{
        alert("hubo un error al registrar un nuevo usuario :(\n"+error)
      })

    // Enviamos la nueva información como un NUEVO OBJETO a la colección de usuarios
    //this.coleccionUsuarios.push(credenciales)

    // Notificamos el éxito al registrarse para el usuario
    alert("¡Te registraste con éxito! :)");

    // Llamamos a la función limpiarInputs() para ejecutarla
    this.limpiarInputs();

    // Mostramos credenciales por consola
    // console.log(credenciales);
    // console.log(this.coleccionUsuarios);
  }

  // Función para vaciar los inputs del formulario
  limpiarInputs(){
    /*
    En constante "inputs" llamamos a los atributos y los inicializamos 
    como vacíos (string = '', number = 0)
    */
    const inputs = {
      uid: this.usuarios.uid = '',
      nombre: this.usuarios.nombre = '',
      apellido: this.usuarios.apellido = '',
      email: this.usuarios.email = '',
      rol: this.usuarios.rol = '',
      password: this.usuarios.password = ''
    }
  }
}
