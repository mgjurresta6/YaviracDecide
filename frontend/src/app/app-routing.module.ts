import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EstudianteComponent } from './Registros/estudiante/estudiante.component';
import { ListaEstudianteComponent } from './Registros/lista-estudiante/lista-estudiante.component';
import { CronogramaComponent } from './Registros/cronograma/cronograma.component';
import { ListaCronogramaComponent } from './Registros/lista-cronograma/lista-cronograma.component';
import { CandidatoListaComponent } from './Candidato/candidato-lista/candidato-lista.component';


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
    path: 'candidato-lista',
    component: CandidatoListaComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
