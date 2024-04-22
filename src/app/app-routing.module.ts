import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NombreComponenteComponent } from './nombre-componente/nombre-componente.component';

const routes: Routes = [{path:"nombre_componente",component:NombreComponenteComponent},
{path:"",component:NombreComponenteComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
