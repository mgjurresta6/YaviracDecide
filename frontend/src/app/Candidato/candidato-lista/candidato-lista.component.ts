import { Component } from '@angular/core';
import { CandidatoListaService } from 'src/app/Servicios/candidato-lista.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-candidato-lista',
  templateUrl: './candidato-lista.component.html',
  styleUrls: ['./candidato-lista.component.css']
})
export class CandidatoListaComponent {
  
  candidato: any[] = [];
  selectedCandidato: any;

  constructor(private candidatoListaService: CandidatoListaService, private router: Router){
    this.candidato = this.candidatoListaService.candidato;
  }

  crearCandidato(){
    this.candidatoListaService.selectedCandidato = null;
    this.router.navigate(['candidato-lista']);
  }

  editCandidato(candidato: any) {
    this.candidatoListaService.selectedCandidato = candidato;
    this.router.navigate(['candidato-lista']);
  }

  deleteCandidato(nombreLista: string) {
    this.candidatoListaService.deleteCandidato(nombreLista);
    console.log(this.candidatoListaService.candidato);
  }
}
