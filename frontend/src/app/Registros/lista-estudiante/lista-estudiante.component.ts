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
  usuario: any[] = [];
  selectedPerson: any;

  constructor(private estudianteService: EstudianteService, private router: Router){
    this.usuario = this.estudianteService.usuario;
  }

  crearUsuario(){
    this.estudianteService.selectedPerson = null;
    this.router.navigate(['estudiante']);
  }

  editUsuario(usuario: any) {
    this.estudianteService.selectedPerson = usuario;
    this.router.navigate(['estudiante']);
  }

  deleteUsuario(cedula: number) {
    this.estudianteService.deleteUsuario(cedula);
    console.log(this.estudianteService.usuario);
  }
}
