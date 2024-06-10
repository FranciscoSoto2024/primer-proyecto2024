import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NombreComponenteComponent } from './nombre-componente/nombre-componente.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { SharedModule } from './modules/shared/shared.module';
import { environment } from 'src/environments/environment';//vincula la BD con la app
import {AngularFireModule} from '@angular/fire/compat';//trabaja con las colecciones de informacion
import {AngularFireAuth, AngularFireAuthModule} from '@angular/fire/compat/auth';//trabaja con la auntentificacion
import {AngularFireStorageModule} from '@angular/fire/compat/storage';//trabaja con imagenes y archivos


@NgModule({
  declarations: [
    AppComponent,
    NombreComponenteComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    //componentes globales
    SharedModule,
    //vinculacion con firebase
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFireStorageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
