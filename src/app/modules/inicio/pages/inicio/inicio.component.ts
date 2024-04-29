import { Component } from '@angular/core';
import { tattoo } from 'src/app/models/tattoo';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {
public info: tattoo[]

constructor(){
  this.info = [
  {
    id: "",
    nombre: "tattoo estilo japones",
    origen: "japones",
    edad: "5000",
    imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Japanese_body_suit.jpg/250px-Japanese_body_suit.jpg",
  }  
]
 }
}
