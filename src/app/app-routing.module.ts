import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NombreComponenteComponent } from './nombre-componente/nombre-componente.component';
import { InicioComponent } from './modules/inicio/pages/inicio/inicio.component';

const routes: Routes = [//{path:"nombre_componente",component:NombreComponenteComponent},

//{path:"",component:NombreComponenteComponent},
{
  path: "",component: InicioComponent
},
{
  path:"",loadChildren:()=>import('./modules/inicio/inicio.module').then(m=>m.InicioModule)

},
{ path:"",loadChildren:()=>import('./modules/autentificacion/autentificacion.module').then(m=>m.AutentificacionModule)

},
{
  path:"",loadChildren:()=>import('./modules/productos/productos.module').then(m=>m.ProductosModule)
}
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
