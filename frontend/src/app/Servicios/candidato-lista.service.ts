import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CandidatoListaService {
candidato: any[] = [];
  selectedCandidato: any = null;

  constructor(private httpClient: HttpClient) { 
    this.loadCandidato();
  }

  private loadCandidato(){
    this.candidato = [];
    this.candidato.push(
      {dignidad: 'Presidente/a', nombre:'Pedro', requisitos:''},
      {dignidad: 'Vicepresidente/a', nombre:'Pedro', requisitos:''},
      {dignidad: 'Secretario/a', nombre:'Pedro', requisitos:''},
      {dignidad: 'Tesorero/a', nombre:'Pedro', requisitos:''},
      {dignidad: 'Vocal 1', nombre:'Pedro', requisitos:''},
      {dignidad: 'Vocal 2', nombre:'Pedro', requisitos:''},
      {dignidad: 'Vocal 3', nombre:'Pedro', requisitos:''},
    );
  }
  addCandidato(payload: any){
    return this.httpClient.post('http://localhost:3000/api/v1/dignidades', payload);
  }
  updateCandidato(nombre: string, payload: any) {
    const index = this.candidato.findIndex(candidato => candidato.nombre == nombre);
    this.candidato[index] = payload;
  }

  deleteCandidato(nombre: string) {
    const index = this.candidato.findIndex(candidato => candidato.nombre === nombre);
    if (index > -1) {
      this.candidato.splice(index, 1);
    }
  }
}
