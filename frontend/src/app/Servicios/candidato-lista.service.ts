import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CandidatoListaService {
  candidato: any[] = [];
  selectedCandidato: any ;
  nombreLista: string;
  candidatoVotacion: any;
  nombreCandidatoSeleccionado: string ;
  constructor() { 
    this.loadCandidato();
  }

  private loadCandidato(){
    this.candidato = [];
    this.candidato.push(
      {nombreLista: 'Abejitas del saber',
      presidente: 'Pedro Alejandro Cuenca Ortega', 
      vicepresidente:'Pedro Alejandro Cuenca Ortega', 
      tesorero: '',
      vocal1: '',
      vocal2: '',
      vocal3: '',
      logo:'', 
      color:'', 
      propuesta:'',
      estado:'No Aprobado'},

      {nombreLista: 'Lista TUKI',
      presidente: 'Pedro Alejandro Cuenca Ortega', 
      vicepresidente:'Pedro Alejandro Cuenca Ortega', 
      tesorero: '',
      vocal1: '',
      vocal2: '',
      vocal3: '',
      logo:'', 
      color:'', 
      propuesta:'',
      estado: true},

      {nombreLista: 'Lista sapos',
      presidente: 'Pedro Alejandro Cuenca Ortega', 
      vicepresidente:'Pedro Alejandro Cuenca Ortega', 
      tesorero: '',
      vocal1: '',
      vocal2: '',
      vocal3: '',
      logo:'', 
      color:'', 
      propuesta:'',
      estado:true}
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
  actualizarEstadoCandidato(nombreLista: string) {
    const index = this.candidato.findIndex(candidato => candidato.nombreLista === nombreLista);
    if (index !== -1) {
      this.candidato[index].estado = true;
    }
  }
  setCandidatoSeleccionado(nombreLista: string, payload: any) {
    const index = this.candidato.findIndex(candidato => candidato.nombreLista === nombreLista);
    this.candidato[index] = payload;
  }
  setNombreCandidatoSeleccionado(nombre: string) {
    this.nombreCandidatoSeleccionado = nombre;
  }
}
