import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NombreComponenteComponent } from './nombre-componente/nombre-componente.component';
import { InicioComponent } from './modules/inicio/pages/inicio/inicio.component';

const routes: Routes = [{path:"nombre_componente",component:NombreComponenteComponent},
{path:"",component:NombreComponenteComponent},
{
  path: "",component: InicioComponent
},
{
  path:"",loadChildren:()=>import('./modules/inicio/inicio.module').then(m=>m.InicioModule)
}
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
