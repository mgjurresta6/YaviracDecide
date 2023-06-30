import { Component } from '@angular/core';
import { CandidatoListaService } from 'src/app/Servicios/candidato-lista.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-candidato-detalle',
  templateUrl: './candidato-detalle.component.html',
  styleUrls: ['./candidato-detalle.component.css']
})
export class CandidatoDetalleComponent {
  candidato: any;

  constructor(private candidatoListaService: CandidatoListaService) { }

  ngOnInit() {
    this.candidato = this.candidatoListaService.selectedCandidato;
  }
  /*regresar() {
    this.router.navigate(['detalle-candidato']);
  }*/

  imprimir() {
    // Lógica para imprimir los detalles de la lista
    // Puedes utilizar la función window.print() para imprimir la página actual
    window.print();
  }
}
