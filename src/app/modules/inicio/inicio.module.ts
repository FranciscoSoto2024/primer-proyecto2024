import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InicioRoutingModule } from './inicio-routing.module';
import { CardComponent } from './components/card/card.component';
import {MatButtonModule} from  '@angular/material/button' ;
import {MatCardModule} from  '@angular/material/card' ;
import { InicioComponent } from './pages/inicio/inicio.component';


@NgModule({
  declarations: [
    InicioComponent,
    CardComponent
  ],
  imports: [
    CommonModule,
    InicioRoutingModule,
    MatButtonModule,
    MatCardModule,
  ]
})
export class InicioModule { }