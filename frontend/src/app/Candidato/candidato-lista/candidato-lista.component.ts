import { Component, OnInit } from '@angular/core';
import { CandidatoListaService } from 'src/app/Servicios/candidato-lista.service';
import { Router } from "@angular/router";


@Component({
  selector: 'app-candidato-lista',
  templateUrl: './candidato-lista.component.html',
  styleUrls: ['./candidato-lista.component.css']
})
export class CandidatoListaComponent implements OnInit {
  candidatos: any[] = [];
  selectedCandidato: any = null;

  constructor(private candidatoListaService: CandidatoListaService, private router: Router) { }

  ngOnInit() {
    this.candidatos = this.candidatoListaService.getCandidatos();
  }

  crearCandidato() {
    this.candidatoListaService.setSelectedCandidato(null);
    this.router.navigate(['candidato']);
  }

  editCandidato(candidato: any) {
    this.candidatoListaService.selectedCandidato = candidato;
    this.router.navigate(['candidato']);
  }

  eliminarCandidato(nombreLista: string) {
    this.candidatoListaService.eliminarCandidato(nombreLista);
    this.candidatos = this.candidatoListaService.getCandidatos();
  }

  verDetalleCandidato(candidato: any) {
    this.candidatoListaService.setSelectedCandidato(candidato);
    this.router.navigate(['/candidato-detalle']);
  }
}
