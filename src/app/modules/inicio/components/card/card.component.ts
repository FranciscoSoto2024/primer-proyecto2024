import { Component } from '@angular/core';
import { Tattoo } from 'src/app/models/tattoo';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  public info: Tattoo[]

  constructor(){
    this.info = [
    {
      id: "",
      nombre: "estilo japones",
      origen: "japones",
      estilo: "japones",
      edad: 5000,
      imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Japanese_body_suit.jpg/250px-Japanese_body_suit.jpg",
      descripcion:"En Japón existe un tipo de tattoo que cubre gran parte del cuerpo, conocido como Horinomo y es este estilo el que suelen llevar los criminales de esta mafia No obstante, el Horinomo tiene diversos significados y no solo está relacionado con la Yakuza"
    },
    {
      id: "",
      nombre: "old school",
      origen: "estados unidos",
      estilo: "old school",
      edad: 1500,
      imagen: "https://th.bing.com/th/id/OIP.A5A0INeZMXE7W3PdIoNQawAAAA?rs=1&pid=ImgDetMain",
      descripcion:"El estilo old school tiene sus raíces en los primeros años del siglo XX en los Estados Unidos. Su origen se remonta a los marineros que se tatuaban durante sus viajes por todo el mundo. Estos tatuajes, realizados en su mayoría en puertos y ciudades portuarias, se caracterizaban por sus diseños audaces, colores vibrantes y líneas gruesas. Los motivos clásicos del old school incluyen anclas, corazones, golondrinas, rosas, sirenas y otros elementos marítimos"
    }  
  ]
   }
}

