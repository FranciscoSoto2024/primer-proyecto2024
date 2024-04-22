import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NombreComponenteComponent } from './nombre-componente/nombre-componente.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTabsModule} from  '@angular/material/tabs' ;

@NgModule({
  declarations: [
    AppComponent,
    NombreComponenteComponent,
    MatTabsModule,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTabsModule,
  ],
  exports:[MatTabsModule],

  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
