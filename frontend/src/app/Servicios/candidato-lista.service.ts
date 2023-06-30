import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CandidatoListaService {
  candidatos: any[] = [];
  selectedCandidato: any = null;

  constructor() { 
    this.loadCandidatos();
  }

  private loadCandidatos() {
    this.candidatos = [
      {
        nombreLista: 'Abejitas del saber',
        presidente: 'Presidente/a',
        nombre: 'Pedro Alejandro Cuenca Ortega',
        logo: '',
        color: '',
        propuesta: '',
        requisitos: '',
        estado: 'Aprobado'
      },
      {
        nombreLista: 'Yavirac Avanza',
        presidente: 'Presidente/a',
        nombre: 'Elizabeth Dayana Rodríguez Ramirez',
        logo: '',
        color: '',
        propuesta: '',
        requisitos: '',
        estado: 'Denegado'
      }
    ];
  }

  getCandidatos() {
    return this.candidatos;
  }
//peme de perro
  getSelectedCandidato() {
    return this.selectedCandidato;
  }

  setSelectedCandidato(candidato: any) {
    this.selectedCandidato = candidato;
  }

  addCandidato(payload: any) {
    this.candidatos.push(payload);
  }

  updateCandidato(nombreLista: string, payload: any) {
    const index = this.candidatos.findIndex(candidato => candidato.nombreLista === nombreLista);
    if (index > -1) {
      this.candidatos[index] = payload;
    }
  }

  eliminarCandidato(nombreLista: string) {
    const index = this.candidatos.findIndex(candidato => candidato.nombreLista === nombreLista);
    if (index > -1) {
      this.candidatos.splice(index, 1);
    }
  }
}
