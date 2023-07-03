import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UsuarioModel } from '../Models/usuarios.model';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  resource: string = 'http://localhost:3000/api/v1/usuarios';
  usuario: any[] = [];
  selectedUsuario: any = null;

  constructor(private httpClient: HttpClient) { 
    this.loadUsuario();
  }

  private loadUsuario(){
    this.usuario = [];
  }
  addUsuario(payload){
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
