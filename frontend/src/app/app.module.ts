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
import { MenuComponent } from './Componentes/menu/menu.component';
import { ButtonModule } from 'primeng/button';
import { EstudianteComponent } from './Registros/estudiante/estudiante.component';
import { InputTextModule } from 'primeng/inputtext';
import { InputNumberModule } from 'primeng/inputnumber';
import { TreeSelectModule } from 'primeng/treeselect';
import { TableModule } from "primeng/table";
import { ListaEstudianteComponent } from './Registros/lista-estudiante/lista-estudiante.component';
import { TieredMenuModule } from 'primeng/tieredmenu';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { CalendarModule } from 'primeng/calendar';
import { CronogramaComponent } from './Registros/cronograma/cronograma.component';
import { ListaCronogramaComponent } from './Registros/lista-cronograma/lista-cronograma.component';
import { CandidatoListaComponent } from './Candidato/candidato-lista/candidato-lista.component';
import { CandidatoComponent } from './Candidato/candidato-lista/candidato/candidato.component';
import { NavbarCandidatoComponent } from './Componentes/navbarCandidato/navbar-candidato/navbar-candidato.component';

import { ListasComponent } from './listas/listas.component';




@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MenuComponent,
    EstudianteComponent,
    ListaEstudianteComponent,
    CronogramaComponent,
    ListaCronogramaComponent,

    CandidatoListaComponent,
    CandidatoComponent,
    NavbarCandidatoComponent,
    ListasComponent



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
    CalendarModule
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
