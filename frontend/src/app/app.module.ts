import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { MenuModule } from 'primeng/menu';
import { PanelModule } from 'primeng/panel';
import { FormsModule } from "@angular/forms";
import { ReactiveFormsModule } from "@angular/forms";

import { AppComponent } from './app.component';
import { NavbarComponent } from './Componentes/navbar/navbar.component';
import { ButtonModule } from 'primeng/button';
import { EstudianteComponent } from './Registros/estudiante/estudiante.component';
import { InputTextModule } from 'primeng/inputtext';
import { InputNumberModule } from 'primeng/inputnumber';
import { TreeSelectModule } from 'primeng/treeselect';
import { TableModule } from "primeng/table";
import { RadioButtonModule } from 'primeng/radiobutton';
import { ListaEstudianteComponent } from './Registros/lista-estudiante/lista-estudiante.component';
import { TieredMenuModule } from 'primeng/tieredmenu';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { CalendarModule } from 'primeng/calendar';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import {MatDialogModule} from '@angular/material/dialog';
import { CronogramaComponent } from './Registros/cronograma/cronograma.component';
import { ListaCronogramaComponent } from './Registros/lista-cronograma/lista-cronograma.component';
import { CandidatoListaComponent } from './Candidato/candidato-lista/candidato-lista.component';
import { CandidatoComponent } from './Candidato/candidato-lista/candidato/candidato.component';
import { NavbarCandidatoComponent } from './Componentes/navbarCandidato/navbar-candidato/navbar-candidato.component';
import { UsuarioComponent } from './Registros/usuario/usuario.component';
import { ListaUsuarioComponent } from './Registros/lista-usuario/lista-usuario.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AprobacionComponent } from './Componentes/aprobacion/aprobacion.component';
import { ListaAprobacionComponent } from './Registros/lista-aprobacion/lista-aprobacion.component';




@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    EstudianteComponent,
    ListaEstudianteComponent,
    CronogramaComponent,
    ListaCronogramaComponent,
    CandidatoListaComponent,
    CandidatoComponent,
    NavbarCandidatoComponent,
    UsuarioComponent,
    ListaUsuarioComponent,
    DashboardComponent,
    AprobacionComponent,
    ListaAprobacionComponent



  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    MenuModule,  
    ButtonModule,
    FormsModule,
    ReactiveFormsModule,
    ButtonModule,
    PanelModule,
    InputTextModule,
    BrowserAnimationsModule,
    InputNumberModule,
    TreeSelectModule,
    TableModule,
    TieredMenuModule,
    AutoCompleteModule,
    CalendarModule,
    RadioButtonModule,
    BreadcrumbModule,
    MatDialogModule
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
