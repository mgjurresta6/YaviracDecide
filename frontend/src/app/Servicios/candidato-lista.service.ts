import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CandidatoListaService {
candidato: any[] = [];
  selectedCandidato: any = null;

  constructor() { 
    this.loadCandidato();
  }

  private loadCandidato(){
    this.candidato = [];
    this.candidato.push(
      {nombreLista: 'Abejitas del saber',dignidad: 'Presidente/a', nombre:'Pedro Alejandro Cuenca Ortega', logo:'', color:'', propuesta:'',requisitos:'', estado:'Aprobado'},
      {nombreLista: 'Yavirac Avanza',dignidad: 'Presidente/a', nombre:'Elizabeth Dayana Rodríguez Ramirez', logo:'', color:'', propuesta:'',requisitos:'', estado:'Denegado'}
    );
  }
  addCandidato(payload: any){
    this.candidato.push(payload);
  }
  updateCandidato(nombreLista: string, payload: any) {
    const index = this.candidato.findIndex(candidato => candidato.nombreLista === nombreLista);
    this.candidato[index] = payload;
  }

  deleteCandidato(nombreLista: string) {
    const index = this.candidato.findIndex(candidato => candidato.nombreLista === nombreLista);
    if (index > -1) {
      this.candidato.splice(index, 1);
    }
  }
}
