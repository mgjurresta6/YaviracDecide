import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EstudianteComponent } from './Registros/estudiante/estudiante.component';
import { ListaEstudianteComponent } from './Registros/lista-estudiante/lista-estudiante.component';
import { CronogramaComponent } from './Registros/cronograma/cronograma.component';
import { ListaCronogramaComponent } from './Registros/lista-cronograma/lista-cronograma.component';

const routes: Routes = [
   
  {
    path: 'estudiante',
    component: EstudianteComponent
  },

  {
    path: 'lista-estudiante',
    component: ListaEstudianteComponent
  },
  {
    path: 'cronograma',
    component: CronogramaComponent
  },
  {
    path: 'lista-cronograma',
    component: ListaCronogramaComponent
  },
  {
    path: 'listas',
    component: ListasComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
