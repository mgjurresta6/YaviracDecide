import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CandidatoListaService {
candidato: any[] = [];
  selectedPerson: any = null;

  constructor() { 
    this.loadCandidato();
  }

  private loadCandidato(){
    this.candidato = [];
    this.candidato.push(
      {nombre:'Pedro', requisitos:''},
      {nombre:'Pedro', requisitos:''}
    );
  }
  addCandidato(payload: any){
    this.candidato.push(payload);
  }
  updateCandidato(nombre: string, payload: any) {
    const index = this.candidato.findIndex(candidato => candidato.nombre === nombre);
    this.candidato[index] = payload;
  }

  deleteCandidato(nombre: string) {
    const index = this.candidato.findIndex(candidato => candidato.nombre === nombre);
    if (index > -1) {
      this.candidato.splice(index, 1);
    }
  }
}
