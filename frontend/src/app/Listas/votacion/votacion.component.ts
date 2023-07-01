import { Component } from '@angular/core';
import { CandidatoListaService } from 'src/app/Servicios/candidato-lista.service';
@Component({
  selector: 'app-votacion',
  templateUrl: './votacion.component.html',
  styleUrls: ['./votacion.component.css']
})
export class VotacionComponent {
  candidato: any[] = [];
  selectedCandidato: any;

  constructor(private candidatoListaService: CandidatoListaService){
    this.candidato = this.candidatoListaService.candidato.filter(candidato => candidato.estado === true );
    
  }
}
