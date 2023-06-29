import { Component } from '@angular/core';
import { CandidatoListaService } from 'src/app/Servicios/candidato-lista.service';
import { AprobacionComponent } from 'src/app/Componentes/aprobacion/aprobacion.component';
import {Router} from "@angular/router";
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import {MatDialog, MatDialogRef, MatDialogModule} from '@angular/material/dialog';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-candidato-lista',
  templateUrl: './candidato-lista.component.html',
  styleUrls: ['./candidato-lista.component.css']
})
export class CandidatoListaComponent {

  
  candidato: any[] = [];
  selectedPerson: any;

  form: FormGroup;

  constructor(private formBuilder: FormBuilder, 
              private candidatoListaService: CandidatoListaService, 
              private router: Router,
              public dialog: MatDialog){
    this.candidato = this.candidatoListaService.candidato;
  }

  openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(AprobacionComponent, {
      width: '250px',
      enterAnimationDuration,
      exitAnimationDuration,
    });

  }
}
