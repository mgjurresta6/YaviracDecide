import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import { EstudianteService } from 'src/app/Servicios/estudiante.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-lista-estudiante',
  templateUrl: './lista-estudiante.component.html',
  styleUrls: ['./lista-estudiante.component.css']
})
export class ListaEstudianteComponent {
  estudiante: any[] = [];
  selectedEstudiante: any;

  constructor(private estudianteService: EstudianteService, private router: Router){
    this.estudiante = this.estudianteService.estudiante;
  }

  crearUsuario(){
    this.estudianteService.selectedEstudiante = null;
    this.router.navigate(['estudiante']);
  }

  editUsuario(estudiante: any) {
    this.estudianteService.selectedEstudiante = estudiante;
    this.router.navigate(['estudiante']);
  }

  deleteUsuario(cedula: number) {
    this.estudianteService.deleteEstudiante(cedula);
    console.log(this.estudianteService.estudiante);
  }
}
