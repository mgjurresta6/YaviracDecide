import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CandidatoListaService {
usuario: any[] = [];
  selectedPerson: any = null;

  constructor() { 
    this.loadUsuario();
  }

  private loadUsuario(){
    this.usuario = [];
    this.usuario.push(
      { dignidad:'Presidente', nombre:'Pedro', requisitos:'', logo:'', color:'', propuesta:''}
    );
  }
  addUsuario(payload: any){
    this.usuario.push(payload);
  }
  updateUsuario(nombre: string, payload: any) {
    const index = this.usuario.findIndex(usuario => usuario.nombre === nombre);
    this.usuario[index] = payload;
  }

  deleteUsuario(nombre: string) {
    const index = this.usuario.findIndex(usuario => usuario.nombre === nombre);
    if (index > -1) {
      this.usuario.splice(index, 1);
    }
  }
}
