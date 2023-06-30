import { Component } from '@angular/core';
import { ListaComponent } from 'src/app/Listas/lista/lista.component';
import { CandidatoListaService } from 'src/app/Servicios/candidato-lista.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-aprobacion',
  templateUrl: './lista-aprobacion.component.html',
  styleUrls: ['./lista-aprobacion.component.css']
})
export class ListaAprobacionComponent {
  
  candidato: any[] = [];
  selectedCandidato: any;

  constructor(private candidatoListaService: CandidatoListaService, private router: Router){
    this.candidato = this.candidatoListaService.candidato.filter(candidato => candidato.estado === true );
  }
}
