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
import { EstudianteComponent } from './estudiante/estudiante.component';
import { InputTextModule } from 'primeng/inputtext';
import { InputNumberModule } from 'primeng/inputnumber';
import { TreeSelectModule } from 'primeng/treeselect';
import { TableModule } from "primeng/table";
import { ListaEstudianteComponent } from './lista-estudiante/lista-estudiante.component';
import { TieredMenuModule } from 'primeng/tieredmenu';




@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MenuComponent,
    EstudianteComponent,
    ListaEstudianteComponent
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
    TieredMenuModule
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
