import { Component } from '@angular/core';
import { Router} from "@angular/router"; 
import { CandidatoListaService } from '../Servicios/candidato-lista.service';

@Component({
  selector: 'app-listas',
  templateUrl: './listas.component.html',
  styleUrls: ['./listas.component.css']
})
export class ListasComponent {
  usuario: any[] = [];
  selectedPerson: any;

  constructor(private candidatoListaService: CandidatoListaService, private router: Router){
    this.usuario = this.candidatoListaService.candidato;
  }
  mostrarUsuario(nombre: string, payload: any) {
    const index = this.usuario.findIndex(usuario => usuario.nombre === nombre);
    this.usuario[index] = payload;
  }
}
