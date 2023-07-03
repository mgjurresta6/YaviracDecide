import { Component } from '@angular/core';
import{ CandidatoListaService} from 'src/app/Servicios/candidato-lista.service'
import { Router } from '@angular/router';
@Component({
  selector: 'app-lista-votacion',
  templateUrl: './lista-votacion.component.html',
  styleUrls: ['./lista-votacion.component.css']
})
export class ListaVotacionComponent {
  candidato: any[] = [];
  selectedCandidato: any;
  candidatoVotacion: any;

  constructor(private candidatoListaService: CandidatoListaService, private router: Router){
    this.candidato = this.candidatoListaService.candidato.filter(candidato => candidato.estado === true );
    
  }
  seleccionarCandidato(candidato: any) {
    this.selectedCandidato = candidato;
    const nombreLista = candidato.nombreLista;
    const payload = candidato; 
    this.candidatoListaService.setCandidatoSeleccionado(nombreLista, payload);
    console.log(nombreLista);
    this.router.navigate(['votacion'])
    this.candidatoListaService.setNombreCandidatoSeleccionado(nombreLista);
  }
  

}

