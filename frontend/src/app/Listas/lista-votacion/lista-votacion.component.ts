import { Component } from '@angular/core';
import{ CandidatoListaService} from 'src/app/Servicios/candidato-lista.service'
@Component({
  selector: 'app-lista-votacion',
  templateUrl: './lista-votacion.component.html',
  styleUrls: ['./lista-votacion.component.css']
})
export class ListaVotacionComponent {
  candidato: any[] = [];
  selectedCandidato: any;

  constructor(private candidatoListaService: CandidatoListaService){
    this.candidato = this.candidatoListaService.candidato.filter(candidato => candidato.estado === true );
    
  }
  
}

