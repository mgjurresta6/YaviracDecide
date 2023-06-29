import { Component, OnInit } from '@angular/core';
import { CandidatoListaService } from 'src/app/Servicios/candidato-lista.service';
import {Router} from "@angular/router";
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  formGroup!: FormGroup;

  categories: any[] = [
      { name: 'Si', key: 'S' },
      { name: 'No', key: 'N' },
  ];

  ngOnInit() {
      this.formGroup = new FormGroup({
          selectedCategory: new FormControl()
      });
  }
  usuario: any[] = [];
  selectedCandidato: any;

  constructor(private candidatoListaService: CandidatoListaService, private router: Router){
    this.usuario = this.candidatoListaService.candidato;
  }

  crearUsuario(){
    this.candidatoListaService.selectedCandidato = null;
    this.router.navigate(['candidato-lista']);
  }

  editUsuario(usuario: any) {
    this.candidatoListaService.selectedCandidato = usuario;
    this.router.navigate(['candidato-lista']);
  }

  deleteCandidato(nombre: string) {
    this.candidatoListaService.deleteCandidato(nombre);
    console.log(this.candidatoListaService.candidato);
  }

  onSubmit() {
    if (this.categories) {
      alert('Estas seguro de aceptar esta lista?');
      this.router.navigate(['candidato-lista']);
    } else {
      alert('Estas seguro de no aceptar esta lista?');
    }
  }
}
