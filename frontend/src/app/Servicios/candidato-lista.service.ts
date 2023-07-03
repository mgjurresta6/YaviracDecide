import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CandidatoListaService {
<<<<<<< HEAD
  candidatos: any[] = [];
  selectedCandidato: any = null;

=======
  candidato: any[] = [];
  selectedCandidato: any ;
  nombreLista: string;
  candidatoVotacion: any;
  nombreCandidatoSeleccionado: string ;
>>>>>>> Administrador
  constructor() { 
    this.loadCandidatos();
  }

<<<<<<< HEAD
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
=======
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
>>>>>>> Administrador
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
