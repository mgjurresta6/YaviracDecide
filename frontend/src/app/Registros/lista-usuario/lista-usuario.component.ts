import { Component } from '@angular/core';
import {Router} from "@angular/router";
import { UsuarioService } from 'src/app/Servicios/usuario.service';

@Component({
  selector: 'app-lista-usuario',
  templateUrl: './lista-usuario.component.html',
  styleUrls: ['./lista-usuario.component.css']
})
export class ListaUsuarioComponent {
  usuario: any[] = [];
  selectedUsuario: any;

  constructor(private usuarioService: UsuarioService, private router: Router){
    this.usuario = this.usuarioService.usuario;
  }

  crearUsuario(){
    this.usuarioService.selectedUsuario = null;
    this.router.navigate(['usuario']);
  }

  editUsuario(usuario: any) {
    this.usuarioService.selectedUsuario = usuario;
    this.router.navigate(['usuario']);
  }

  deleteUsuario(cedula: number) {
    this.usuarioService.deleteUsuario(cedula);
    console.log(this.usuarioService.usuario);
  }
}
