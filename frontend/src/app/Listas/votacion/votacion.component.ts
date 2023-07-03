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
  

  constructor(private candidatoListaService: CandidatoListaService,
     ) {
      console.log(candidatoListaService.nombreCandidatoSeleccionado)
    this.candidato = this.candidatoListaService.candidato.filter(candidato => candidato.nombreLista === candidatoListaService.nombreCandidatoSeleccionado  );
    console.log(this.candidato)
  }
}
