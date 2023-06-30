import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from "@angular/router";
import { CandidatoListaService } from 'src/app/Servicios/candidato-lista.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-candidato',
  templateUrl: './candidato.component.html',
  styleUrls: ['./candidato.component.css']
})
export class CandidatoComponent {
  form: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router, private candidatoListaService: CandidatoListaService) {
    this.form = this.formBuilder.group({
      nombreLista: ['', [Validators.required]],
      presidente: ['', [Validators.required]],
      vicepresidente: ['', [Validators.required]],
      tesorero: ['', [Validators.required]],
      secretario: ['', [Validators.required]],
      vocal1: ['', [Validators.required]],
      vocal2: ['', [Validators.required]],
      vocal3: ['', [Validators.required]],
      logo: ['', [Validators.required]],
      color: ['', [Validators.required]],
      propuesta: ['', [Validators.required]],
      requisitos: ['', [Validators.required]],
    });
  }

  onSubmit() {
    if (this.form.valid) {
      this.addCandidato();
      const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
          confirmButton: 'btn btn-success',
          cancelButton: 'btn btn-danger'
        },
        buttonsStyling: false
      });
  
      swalWithBootstrapButtons.fire({
        title: '¿Está seguro de que quiere registrar esta lista?',
        text: 'Una vez guardados los cambios ya no podrá editarlos',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Continuar',
        cancelButtonText: 'Cancelar',
        reverseButtons: true
      }).then((result) => {
        if (result.isConfirmed) {
          swalWithBootstrapButtons.fire(
            'Lista Registrada con Éxito!',
            'En una semana ingresa de nuevo a la plataforma para revisar si tu lista fue aceptada o no fue aceptada.',
            'success'
          ).then(() => {
            // Navegar a la pantalla candidato-lista
            this.router.navigate(['candidato-lista']);
          });
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          swalWithBootstrapButtons.fire(
            'Cancelado!',
            'No se ha Registrado la Lista :)',
            'error'
          );
        }
      });
    } else {
      Swal.fire({
        icon: 'error',
        title: 'No se ha completado el Registro',
        text: 'Complete el registro para continuar!'
      });
    }
  }

  addCandidato() {
    this.candidatoListaService.addCandidato(this.form.value);
    console.log(this.candidatoListaService.candidatos);
  }

  validateForm() {
    // Aquí puedes agregar validaciones personalizadas para el formulario si es necesario
  }
}


/*validateForm() {
  if (this.nombreLista === '' && this.nombreLista.length <= 3) {

  }
}

get idField() {
  return this.form.controls['nombreLista'];
}*/