import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EstudianteComponent } from './estudiante/estudiante.component';
import { ListaEstudianteComponent } from './lista-estudiante/lista-estudiante.component';

const routes: Routes = [
   
  {
    path:'estudiante',
    component: EstudianteComponent
  },

  {
    path:'lista-estudiante',
    component: ListaEstudianteComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
