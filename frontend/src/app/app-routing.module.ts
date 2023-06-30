import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EstudianteComponent } from './Registros/estudiante/estudiante.component';
import { ListaEstudianteComponent } from './Registros/lista-estudiante/lista-estudiante.component';
import { CronogramaComponent } from './Registros/cronograma/cronograma.component';
import { ListaCronogramaComponent } from './Registros/lista-cronograma/lista-cronograma.component';
import { CandidatoComponent } from './Candidato/candidato-lista/candidato/candidato.component';
import { CandidatoListaComponent } from './Candidato/candidato-lista/candidato-lista.component';
import { NavbarCandidatoComponent } from './Componentes/navbarCandidato/navbar-candidato/navbar-candidato.component';
//import { ListasComponent } from './listas/listas.component';
import { UsuarioComponent } from './Registros/usuario/usuario.component';
import { ListaUsuarioComponent } from './Registros/lista-usuario/lista-usuario.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CandidatoDetalleComponent } from './Candidato/candidato-detalle/candidato-detalle.component';

import { LoginComponent } from './Login/login/login.component';
import { HomeComponent } from './Componentes/home/home.component';





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
    path: 'candidato',
    component: CandidatoComponent
  },
  {
    path: 'candidato-lista',
    component: CandidatoListaComponent
  },
  {
    path: 'navbar-candidato',
    component: NavbarCandidatoComponent
   },
  /*{ 
    path: 'listas',
    component: ListasComponent
  }*/
  {
    path: 'usuario',
    component: UsuarioComponent
  },
  {
    path: 'lista-usuario',
    component: ListaUsuarioComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  { path: 'candidato-detalle', 
    component: CandidatoDetalleComponent 
  },
  { path: 'login', 
  component: LoginComponent 
  },
  { path: 'home:role', 
  component: HomeComponent
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
