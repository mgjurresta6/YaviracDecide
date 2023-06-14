import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CandidadoListaService {
  usuario: any[] = [];
  selectedPerson: any = null;

  constructor() { 
    this.loadUsuario();
  }

  private loadUsuario(){
    this.usuario = [];
    this.usuario.push(
      {cedula:1755221270, nombre:'Pedro', apellido:'Lol', correo:'djsnhx@gmail.com', carrera:'Desarrolo', jornada:'Mtutina', paralelo:'A'}
    );
  }
  addUsuario(payload: any){
    this.usuario.push(payload);
  }
  updateUsuario(cedula: number, payload: any) {
    const index = this.usuario.findIndex(usuario => usuario.cedula === cedula);
    this.usuario[index] = payload;
  }

  deleteUsuario(cedula: number) {
    const index = this.usuario.findIndex(usuario => usuario.cedula === cedula);
    if (index > -1) {
      this.usuario.splice(index, 1);
    }
  }
}