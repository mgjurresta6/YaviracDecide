import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  usuario: any[] = [];
  selectedUsuario: any = null;

  constructor(private httpCliente: HttpClient) { 
    this.loadUsuario();
  }

  private loadUsuario(){
    this.usuario = [];
    this.usuario.push(
      {cedula:1755221270, nombre:'Pedro', apellido:'Lol', correo:'djsnhx@gmail.com', rol:'Administrador'}
    );
  }
  addUsuario(payload: any){
    return this.httpCliente.post('http://localhost:3000/api/v1/usuarios',payload)
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
