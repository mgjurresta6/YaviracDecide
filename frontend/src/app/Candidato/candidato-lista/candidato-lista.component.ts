import { Component } from '@angular/core';
import { CandidatoListaService } from 'src/app/Servicios/candidato-lista.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-candidato-lista',
  templateUrl: './candidato-lista.component.html',
  styleUrls: ['./candidato-lista.component.css']
})
export class CandidatoListaComponent {
  
  usuario: any[] = [];
  selectedPerson: any;

  constructor(private candidatoListaService: CandidatoListaService, private router: Router){
    this.usuario = this.candidatoListaService.usuario;
  }

  crearUsuario(){
    this.candidatoListaService.selectedPerson = null;
    this.router.navigate(['candidato-lista']);
  }

  editUsuario(usuario: any) {
    this.candidatoListaService.selectedPerson = usuario;
    this.router.navigate(['candidato-lista']);
  }

  deleteUsuario(nombre: string) {
    this.candidatoListaService.deleteUsuario(nombre);
    console.log(this.candidatoListaService.usuario);
  }
}


